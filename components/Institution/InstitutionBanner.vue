<template>
  <div class="institution-banner">
    <client-only>
      <carousel v-bind="options">
        <slide v-for="(item, index) in bannerList" :key="index">
          <div class="img-banner" :class="{'mr-0': index == bannerList.length - 1}">
            <img width="100%" height="160" :src="item">
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        perPage: 1.5,
        paginationEnabled: true,
        autoplay: true,
        autoplayTimeout: 5000
      },
      bannerList: [
        require("@/assets/images/banner.png"),
        require("@/assets/images/banner 2.png"),
        require("@/assets/images/banner.png"),
        require("@/assets/images/banner 2.png")
      ]
    }
  },
}
</script>

<style lang="scss">
  .institution-banner {
    border-radius: 8px;
    background: $color-white;
    padding: 12px 12px 8px;
    width: 100%;

    .VueCarousel-pagination {
      text-align: right !important;
    }

    .VueCarousel-dot-container {
      margin-top: 0px !important;
    }

    .VueCarousel-dot {
      background-color: #D9D9D9 !important;
      margin-top: 0px !important;
      padding: 4px !important;
    }

    .VueCarousel-dot--active {
      background-color: $color-pacific !important;
    }

    .img-banner {
      margin-right: 8px;
    }
  }
</style>