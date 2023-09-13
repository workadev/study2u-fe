<template>
  <div class="institution-detail">
    <v-container class="py-0 container-header">
      <img height="150" src="@/assets/images/BACedu_logofav2 1.png">
      <div class="institution-name mt-5">BRICKFIELDS ASIA COLLEGE</div>
    </v-container>
    <client-only>
      <carousel v-bind="options" class="mt-13">
        <slide v-for="(item, index) in 4" :key="index">
          <img width="100%" src="@/assets/images/bac-01 1.png">
        </slide>
      </carousel>
    </client-only>
    <v-container class="py-0 mt-12">
      <div class="desc">
        The BAC Story We began with a single campus in Brickfields in 1991 with fewer than 50 students and only three programmes – Cambridge A-Levels, the University of London law degree, and the Certificate of Legal Practice (CLP). Today, we offer over 500 world-class pre-university, undergraduate, postgraduate, and professional programmes in business, law, and technology across three campuses in Kuala Lumpur, Petaling Jaya, and Singapore.
      </div>
      <div class="d-flex justify-space-between mt-9 wrap-content-info">
        <div class="content-left">
          <div class="wrap-info">
            <img src="@/assets/icons/pin-map.svg">
            <div class="title-bold">Hisniaga Sdn Bhd</div>
            <div class="text-info">
              B-2, G-Floor, Jl. Utara, Section 14, 46200 Petaling Jaya, Selangor, Malaysia
            </div>
            <div class="text-info mt-2">+60 3-7947 2200</div>
          </div>
          <div class="wrap-info mt-5">
            <b>Institution type:</b>
            <div class="text-info">College</div>
          </div>
          <div class="wrap-info mt-5">
            <b>Admittance:</b>
            <div class="text-info">Public</div>
          </div>
        </div>
        <div class="content-center">
          <img class="mb-2" src="@/assets/icons/star.svg">
          <div class="d-flex flex-wrap mx-n1">
            <div v-for="(item, index) in categoryList" :key="index" class="chip-square">
              {{ item }}
            </div>
          </div>
          <!-- <div class="info-time mt-1">
            <div class="wrap-info">
              <b>Duration</b>
              <div>7 semester regular</div>
              <div>1 semester special</div>
            </div>
            <div class="wrap-info mt-1">
              <b>Start</b>
              <div>October</div>
            </div>
            <div class="wrap-info mt-1">
              <b>Fee</b>
              <div>RM 8,000</div>
            </div>
          </div> -->
        </div>
        <div class="content-right mt-8">
          <img src="@/assets/images/Rectangle 74.png">
          <v-btn icon class="btn-play">
            <img src="@/assets/icons/play.svg">
          </v-btn>
        </div>
      </div>
      <div class="wrap-info mt-11">
        <b>Contact Person</b>
        <div class="d-flex align-center mt-2">
          <img class="mr-4" width="125" height="125" src="@/assets/images/Ellipse 8.png">
          <div>
            <div class="mb-3">
              <b>Hardy Tame</b>
            </div>
            <v-btn
              elevation
              color="#F4BF28"
              class="btn-send"
              height="36"
              width="159"
            >
              Send message
            </v-btn>
          </div>
        </div>
      </div>
      <div class="detail-action">
        <v-btn
          :color="interest ? '#91D1BF' : '#5EC9AA'"
          elevation
          class="btn-action"
          height="58"
          width="256"
          @click="interest = !interest"
        >
          <v-icon :color="interest ? '#ff5abe' : '#2ca481'" size="35">mdi-heart</v-icon> 
          <div>{{ interest ? "Added to Shortlist" : "I’m Interested" }}</div>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        paginationEnabled: true
      },
      categoryList: [
        "Pre-Uni", "Law", "Business", "Digital Media, Design & Comms", 
        "Technology & Innovation", "Hospitality, Culinary & Tourism", 
        "Psychology", "Early Childhood"
      ],
      interest: false
    }
  },
}
</script>

<style lang="scss">
  .institution-detail {
    padding: 99px 0;

    .detail-action {
      margin-top: 53px;
      display: flex;
      flex-flow: column;
      align-items: center;

      .btn-action {
        border-radius: 16px;
        font-size: 20px;
        font-weight: 700;
        padding: 0 22px;
        
        div {
          color: #fff;
          margin-right: auto;
        }

        i {
          margin-right: auto;
        }
      }
    }

    .content-right {
      position: relative;
      display: flex;
      height: fit-content;
      align-items: center;
      justify-content: center;
      max-width: 360px;
      width: 100%;

      img {
        width: 100%;
      }

      .btn-play {
        position: absolute;
      }
    }

    .content-center {
      max-width: 320px;
      margin-right: 20px;

      .info-time {
        box-shadow: 0px 4px 4px 0px #00000040;
        border: 2px solid #000000;
        padding: 13px 12px 16px;
        background: #21A57E;
        max-width: 226px;

        .wrap-info {
          div,
          b {
            color: #fff;
          }
        }
      }

      .chip-square {
        margin: 5px 4px;
      }
    }

    .content-left {
      max-width: 300px;
      margin-right: 20px;

      .wrap-info {
        .btn-send {
          border-radius: 0px;
          font-size: 16px;
          font-weight: 700;
        }

        img {
          border-radius: 50%;
        }

        .title-bold {
          font-size: 24px;
          font-weight: 700;
        }

        .text-info,
        b {
          font-size: 20px;
        }
      }
    }

    .desc {
      font-size: 20px;
    }

    .VueCarousel-pagination {
      position: absolute;
      bottom: 0px;
      margin-bottom: 20px;
    }

    .VueCarousel-dot-container {
      margin-top: 0px !important;
    }

    .VueCarousel-dot {
      margin-top: 0px !important;
      padding: 7px !important;
      width: 12px !important;
      height: 12px !important;
      background-color: #B3B3B3 !important;
    }

    .VueCarousel-dot--active {
      background-color: #fff !important;
    }

    .container-header {
      display: flex;
      justify-content: center;
      flex-flow: column;
      width: fit-content;

      img {
        object-fit: contain;
      }

      .institution-name {
        font-size: 36px;
        font-weight: 700;
      }
    }
  }

  @media screen and(max-width: 865px) {
    .institution-detail {
      .content-left {
        margin-bottom: 20px;
      }
      .wrap-content-info {
        flex-wrap: wrap;
      }
    }
  }
</style>