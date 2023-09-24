<template>
  <div class="our-recommendation">
    <v-container>
      <div class="section-header">
        <div class="section-title mb-2">
          YOUR RECOMMENDATION
        </div>
        <div class="d-flex wrap-chip mr-5">
          <div class="d-flex flex-wrap mr-4">
            <div v-for="(item, index) in user.interests" :key="index" class="chip-square">
              {{ item.name }}
            </div>
          </div>
          <div class="align-self-end" style="margin-bottom: 7px;">
            <v-btn
              text
              min-width="fit-content"
              height="fit-content"
              class="px-0"
              to="/profile/my-interest"
            >
              <img src="@/assets/icons/icon-edit.svg">
            </v-btn>
          </div>
        </div>
      </div>
      <div class="section-list">
        <div class="d-flex flex-wrap w-100 justify-center">
          <div class="item-list" v-for="(item, index) in list" :key="index">
            <img width="150" height="150" :src="item.logo ? item.logo : '@/assets/images/BACedu_logofav2 1 (1).png'">
            <div class="name-institution my-2">
              {{ item.name }}
            </div>
            <div>
              {{ item.institution_type }}, {{ item.ownership }}
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["list"],
  computed: {
    user() {
      return this.$store.state.login.user
    }
  },
}
</script>

<style lang="scss">
  .our-recommendation {
    background: #09B6DE;

    .container {
      padding-top: 44px;
      padding-bottom: 40px;

      .section-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -24px -10px;
        justify-content: center;

        img {
          object-fit: contain;
        }

        .item-list {
          font-size: 20px;
          margin: 38px 54px 10px;
          text-align: center;

          .name-institution {
            font-weight: 700;
          }
        }
      }

      .section-header {
        display: flex;
        flex-wrap: wrap;

        .wrap-chip {
          margin: -7px;

          .chip-square {
            padding-top: 3px;
            padding-bottom: 3px;
            margin: 7px;
          }
        }

        .section-title {
          font-size: 20px;
          font-weight: 700;
          margin-right: 30px;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  @media screen and(max-width: 1264px) {
    .our-recommendation {
      .container {
        .section-list {
          .item-list {
            width: calc(100% / 3 - 108px);
          }
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .our-recommendation {
      .container {
        .section-list {
          .item-list {
            width: calc(100% / 2 - 108px);
          }
        }
      }
    }
  }

  @media screen and(max-width: 517px) {
    .our-recommendation {
      .container {
        .section-header {
          .section-title {
            margin-bottom: 12px;
          }
        }
      }
    }
  }

  @media screen and(max-width: 500px) {
    .our-recommendation {
      .container {
        .section-list {
          margin: 0 0 -10px;

          .item-list {
            width: 100%;
            margin-left: 0px;
            margin-right: 0px;
          }
        }
      }
    }
  }
</style>