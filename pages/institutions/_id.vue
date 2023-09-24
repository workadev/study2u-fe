<template>
  <div class="institution-detail">
    <v-container class="py-0 container-header">
      <img height="150" :src="institutionDetail.logo">
      <div class="institution-name mt-5">{{ institutionDetail.name }}</div>
    </v-container>
    <client-only>
      <carousel v-bind="options" class="mt-13">
        <slide v-for="(item, index) in institutionDetail.images" :key="index">
          <img width="100%" :src="item.image">
        </slide>
      </carousel>
    </client-only>
    <v-container v-if="loading" class="d-flex align-center justify-center" style="height: 50vh;">
      <v-progress-circular
        indeterminate
        :size="100"
      />
    </v-container>
    <v-container v-else class="py-0 mt-12">
      <div class="detail-action">
        <v-btn
          :color="institutionDetail.is_shortlisted ? '#91D1BF' : '#5EC9AA'"
          elevation
          class="btn-action"
          height="58"
          width="256"
          @click="clickInterested()"
        >
          <v-icon :color="institutionDetail.is_shortlisted ? '#ff5abe' : '#2ca481'" size="35">mdi-heart</v-icon> 
          <div>{{ institutionDetail.is_shortlisted ? "Added to Shortlist" : "I’m Interested" }}</div>
        </v-btn>
      </div>
      <div class="desc">{{ institutionDetail.description }}</div>
      <div class="d-flex justify-space-between mt-9 wrap-content-info">
        <div class="content-left">
          <div class="wrap-info">
            <img src="@/assets/icons/pin-map.svg">
            <div class="title-bold">{{ institutionDetail.titleAddress }}</div>
            <div class="text-info">{{ institutionDetail.shortAddress }}</div>
            <div class="text-info">{{ institutionDetail.country }}</div>
            <div v-if="institutionDetail.phone_number" class="text-info mt-2">
              {{ institutionDetail.phone_number }}
            </div>
          </div>
          <div class="wrap-info mt-5">
            <b>Institution type:</b>
            <div class="text-info">{{ institutionDetail.institution_type | capitalized }}</div>
          </div>
          <div class="wrap-info mt-5">
            <b>Admittance:</b>
            <div class="text-info">{{ institutionDetail.ownership | capitalized }}</div>
          </div>
          <div class="wrap-info mt-5">
            <b>Area:</b>
            <div class="text-info">{{ institutionDetail.area }}</div>
          </div>
        </div>
        <div class="content-center">
          <img class="mb-2" src="@/assets/icons/star.svg">
          <div class="d-flex flex-wrap mx-n1">
            <div v-for="(item, index) in institutionDetail.interests" :key="index" class="chip-square">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div v-if="institutionDetail.videos.length != 0" class="content-right mt-8">
          <video id="video_player">
            <source
              type="video/mp4"
              :src="institutionDetail.videos"
            />
          </video>
          <v-btn icon class="btn-play" @click="clickPlay()">
            <img src="@/assets/icons/play.svg">
          </v-btn>
        </div>
      </div>
      <div v-if="institutionDetail.staffs.length != 0" class="text-center mt-7">
        <h6 class="bold-h6">
          Mentor
        </h6>
        <div class="d-flex justify-center flex-wrap wrap-list">
          <div v-for="(item, index) in institutionDetail.staffs" :key="index" class="item-list">
            <div class="wrap-img" :style="{background: randomColor()}">
              <img v-if="item.avatar" :src="item.avatar">
              <h1 v-else class="bold-h1">
                {{ item.first_name.charAt(0) }}
              </h1>
            </div>
            <h6 class="bold-h6 mt-5 mb-2">
              {{ item.first_name }} {{ item.last_name }}
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
      <v-dialog
        width="848px"
        content-class="full-movie"
        v-model="showVideo"
        overlay-color="#000000b3"
        overlay-opacity=".8"
        @click:outside="closeVideo()"
      >
        <v-btn
          icon
          class="btn-close"
          color="#374957"
          @click="closeVideo()"
        >
          <v-icon size="20">mdi-close</v-icon>
        </v-btn>
        <v-card class="wrap-fullscreen">
          <div class="content-video">
            <video
              width="100%"
              id='video_player_full'
              controls
            >
              <source :src="institutionDetail.videos[0].video" type="video/mp4" />
            </video>
          </div>
        </v-card>
      </v-dialog>
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
      ],
      institutionDetail: {},
      loading: true,
      showVideo: false
    }
  },
  async mounted() {
    await this.$axios.get(`v1/institutions/${this.$route.params.id}`, this.token)
    .then((res) => {
      if (res.status == 200) {
        this.institutionDetail = res.data.data.institution
        this.institutionDetail = {
          ...this.institutionDetail,
          shortAddress: this.institutionDetail.address.slice(this.institutionDetail.address.indexOf(", ")+2, this.institutionDetail.address.length),
          titleAddress: this.institutionDetail.address.slice(0, this.institutionDetail.address.indexOf(", "))
        }
      }
    })
    .catch(err => {
      this.$store.dispatch("snackbar/getSnackbar", {
        show: true,
        color: "#ff004a",
        icon: "mdi-close-circle-outline",
        title: "Error Page",
        message: err.response ? err.response.data.message : err
      })
      setTimeout(() => {
        this.$router.push("/institutions")
      }, 3000);
    })
    this.loading = false
  },
  methods: {
    clickInterested() {
      this.institutionDetail.is_shortlisted = !this.institutionDetail.is_shortlisted
      let dataShortlist = {
        id: this.institutionDetail.id,
        shortlist: this.institutionDetail.is_shortlisted ? "shortlist" : "unshortlist",
        token: this.token
      }
      this.$store.dispatch("institutions/getListInstitutions", dataShortlist)
    },
    closeVideo() {
      this.showVideo = false
      document.getElementById('video_player_full').pause()
    },
    clickPlay() {
      this.showVideo = true
      setTimeout(() => {
        document.getElementById('video_player_full').play()
      }, 100);
    }
  },
}
</script>

<style lang="scss">
  .full-movie {
    padding: 40px;
    box-shadow: none !important;
    position: relative;

    .wrap-fullscreen {
      border-radius: 11.55px !important;

      .content-video {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 11.55px !important;

        video {
          border-radius: 11.55px;
        }

        button {
          position: absolute;
        }
      }
    }

    .btn-close {
      background: #fff;
      position: absolute;
      z-index: 10;
      right: 0px;
      top: 0px;
    }
  }

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
      
      video {
        background: #CECECE;
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