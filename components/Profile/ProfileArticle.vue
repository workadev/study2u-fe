<template>
  <div class="profile-article mt-5">
    <div class="wrap-info card-profile">
      <div class="mb-8">
        <b>Articles (2)</b>
      </div>
      <div class="mt-4 mb-10">
        You haven’t publish any article yet
      </div>
      <!-- <div>
        <div 
          v-for="(item, index) in articleList" 
          :key="index"
          class="item-article"
        >
          <nuxt-link to="">
            <h6 class="bold-h6 mb-2">
              <u>{{ item.name }}</u>
            </h6>
          </nuxt-link>
          <div class="d-flex align-center">
            <div class="mr-6 regular-title">
              {{ item.date }}
            </div>
            <div class="d-flex">
              <img
                class="mr-2"
                :src="require(`@/assets/icons/${item.published ? 'paper-plane-green' : 'paper-plane-grey'}.svg`)"
              >
              <div class="regular-title">
                {{ item.published ? "Published" : "Unpublished" }}
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [
        {
          name: "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit",
          date: "20 September 2023",
          published: true
        },
        {
          name: "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit",
          date: "20 September 2023",
          published: false
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  .profile-article {
    .wrap-info {
      padding-bottom: 48px !important;
    }

    .item-article {
      margin-bottom: 38px;
    }

    .item-article:last-child {
      margin-bottom: 0px;
    }
  }
</style>