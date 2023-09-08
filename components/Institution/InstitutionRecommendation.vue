<template>
  <div class="our-recommendation">
    <v-container>
      <div class="section-header">
        <div class="section-title">
          OUR RECOMMENDATION
        </div>
        <div class="d-flex wrap-chip mr-5">
          <div class="chip-square">
            Pre-Uni
          </div>
          <div class="chip-square">
            Law
          </div>
        </div>
        <div class="align-self-end">
          <v-btn
            text
            min-width="fit-content"
            height="fit-content"
            class="px-0"
          >
            <img src="@/assets/icons/icon-edit.svg">
          </v-btn>
        </div>
      </div>
      <div class="section-list">
        <div class="item-list" v-for="(item, index) in 4" :key="index">
          <img width="150" height="150" src="@/assets/images/BACedu_logofav2 1 (1).png">
          <div class="name-institution my-2">Institution Name</div>
          <div>University, Public</div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .our-recommendation {
    background: #F3F3F3;

    .container {
      padding-top: 44px;
      padding-bottom: 40px;

      .section-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -24px -10px;

        .item-list {
          font-size: 20px;
          margin: 38px 54px 10px;

          .name-institution {
            font-weight: 700;
          }
        }
      }

      .section-header {
        display: flex;

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
</style>