<template>
  <div class="home-services">
    <v-container class="py-0 d-flex flex-column align-center">
      <h3 class="bold-h3">
        OUR SERVICES
      </h3>
      <h6 class="regular-h6 my-10">
        Connect with a vibrant community of students, mentors, and industry professionals. Engage in meaningful discussions, collaborate on projects, and build lifelong connections. Study2U is your gateway to networking opportunities and a support system that will inspire you to reach new heights.
      </h6>
      <div class="wrap-list mt-2">
        <div class="d-flex group-list">
          <div class="item-list" v-for="(item, index) in dataServices.images" :key="index">
            <img :src="item.image ? item.image : '@/assets/images/Rectangle 75.png'">
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paging: {
        per_page: 3,
        page: 1
      },
      dataServices: {}
    }
  },
  mounted() {
    this.$axios.get("v1/articles", { params: this.paging })
    .then((res) => {
      if (res.status == 200) {
        if (res.data.data.articles.length != 0) {
          this.dataServices = res.data.data.articles[0]
        }
      }
    })
    .catch(err => {})
  },
}
</script>

<style lang="scss">
  .home-services {
    background: #F3F3F3;
    padding: 52px 0;

    .wrap-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .group-list {
        flex-wrap: wrap;
        justify-content: center;
      }

      .item-list {
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: 11px;

        img {
          width: 269px;
          height: 326px;
          object-fit: cover;
        }
      }
    }
  }
</style>