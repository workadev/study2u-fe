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
          <div class="wrap-info mt-5">
            <b>Area:</b>
            <div class="text-info">Urban</div>
          </div>
        </div>
        <div class="content-center">
          <img class="mb-2" src="@/assets/icons/star.svg">
          <div class="d-flex flex-wrap mx-n1">
            <div v-for="(item, index) in categoryList" :key="index" class="chip-square">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="content-right mt-8">
          <img src="@/assets/images/Rectangle 74.png">
          <v-btn icon class="btn-play">
            <img src="@/assets/icons/play.svg">
          </v-btn>
        </div>
      </div>
      <div class="text-center mt-7">
        <h6 class="bold-h6">
          Mentor
        </h6>
        <div class="d-flex justify-center flex-wrap wrap-list">
          <div v-for="(item, index) in listMentor" :key="index" class="item-list">
            <div class="wrap-img" :style="{background: randomCode()}">
              <img v-if="item.photo" :src="item.photo">
              <h1 v-else class="bold-h1">
                {{ item.name.charAt(0) }}
              </h1>
            </div>
            <h6 class="bold-h6 mt-5 mb-2">
              {{ item.name }}
            </h6>
            <v-btn
              color="#09B6DE"
              dark
              width="115"
              height="45"
              class="btn-connect"
              elevation
            >
              Connect
            </v-btn>
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
      interest: false,
      listMentor: [
        {
          photo: require("@/assets/images/Ellipse 9.png"),
          name: "Mentor Name"
        },
        {
          photo: "",
          name: "Hardy Tame"
        },
        {
          photo: require("@/assets/images/Ellipse 10.png"),
          name: "Some Name Here"
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  .institution-detail {
    padding: 99px 0;

    .wrap-list {
      margin: 8px -15px -15px;

      .item-list {
        margin: 15px;
        max-width: 250px;

        .btn-connect {
          border-radius: 14px;
          font-size: 16px;
          font-weight: 700;
        }

        .wrap-img {
          border-radius: 50%;
          width: 250px;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;

          .bold-h1 {
            font-size: 12em;
            color: #fff;
          }

          img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .detail-action {
      margin: 50px 0;
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