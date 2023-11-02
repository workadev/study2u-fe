<template>
  <div class="profile-article mt-5">
    <div class="wrap-info card-profile">
      <div class="mb-8">
        <b>Articles ({{ articleList.length }})</b>
      </div>
      <div v-if="articleList.length == 0" class="mt-4 mb-10">
        You haven’t publish any article yet
      </div>
      <div v-else>
        <div 
          v-for="(item, index) in articleList" 
          :key="index"
          class="item-article"
        >
          <nuxt-link to="">
            <h6 class="bold-h6 mb-2">
              <u>{{ item.title }}</u>
            </h6>
          </nuxt-link>
          <div class="d-flex align-center">
            <div class="mr-6 regular-title">
              {{ formatDate(item.updated_at, "DD MMMM YYYY") }}
            </div>
            <!-- <div class="d-flex">
              <img
                class="mr-2"
                :src="require(`@/assets/icons/${item.published ? 'paper-plane-green' : 'paper-plane-grey'}.svg`)"
              >
              <div class="regular-title">
                {{ item.published ? "Published" : "Unpublished" }}
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [],
    }
  },
  mounted() {
    this.$axios.get("staffs/v1/current/articles", this.token)
    .then((res) => {
      if (res.status == 200) {
        this.articleList = res.data.data.articles
      }
    })
    .catch(err => {})
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