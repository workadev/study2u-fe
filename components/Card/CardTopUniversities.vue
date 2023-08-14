<template>
  <div class="card-top-universities">
    <div class="wrap-list">
      <div class="header-title mb-5">
        <div class="regular-title">
          Top universities
        </div>
        <img width="16" height="16" src="@/assets/icons/Information.svg">
      </div>
      <div class="group-list">
        <div class="item-list" v-for="(item, index) in list" :key="index">
          <img class="img-logo" :src="item.img">
          <div>
            <div class="regular-subtitle item-title">
              {{ item.title }}
            </div>
            <div class="caption-regular d-flex align-center mt-1 mb-3">
              <img class="mr-1" height="18" width="18" src="@/assets/icons/map-pin.svg"> {{ item.location }}
            </div>
            <v-btn class="semibold-body px-3" height="36" elevation outlined>
              See Detail
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <v-btn text block to="/institution" height="42" class="btn-explore">
      Explore <img width="18" height="18" class="ml-2" src="@/assets/icons/arrow-small-right.svg">
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: require("@/assets/images/image 6.png"),
          title: "Nanyang Technological University, Singapore (NTU Singapore)",
          location: "Singapore, Singapore"
        },
        {
          img: require("@/assets/images/image 6.png"),
          title: "Nanyang Technological University, Singapore (NTU Singapore)",
          location: "Singapore, Singapore"
        },
        {
          img: require("@/assets/images/image 6.png"),
          title: "Stanford University",
          location: "Stanford, United States"
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  .card-top-universities {
    border: 1px solid $color-light-grey;
    border-radius: 8px;
    background: $color-white;
    width: 100%;

    .btn-explore {
      border-radius: 0 0 8px 8px;
    }

    .wrap-list {
      padding: 16px 12px 8px;
      border-bottom: 1px solid $color-light-grey;

      .group-list {
        .item-list {
          display: flex;
          align-items: flex-start;
          padding-bottom: 8px;
          border-bottom: 1px solid $color-light-grey;
          margin-top: 8px;

          .v-btn {
            border-radius: 8px;
          }

          .item-title {
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .img-logo {
            width: 48px;
            height: 48px;
            object-fit: contain;
            margin-right: 12px;
          }
        }

        .item-list:first-child {
          margin-top: 0px;
        }

        .item-list:last-child {
          border-bottom: none;
          padding-bottom: 0px;
        }
      }

      .header-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>