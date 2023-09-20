<template>
  <div class="mentor-connect-list">
    <v-container class="text-center">
      <h3 class="bold-h3">
        AVAILABLE MENTORS
      </h3>
      <div class="d-flex justify-center flex-wrap wrap-list">
        <div v-for="(item, index) in listMentor" :key="index" class="item-list">
          <div class="wrap-img" :style="{background: randomColor()}">
            <img v-if="item.photo" :src="item.photo">
            <h1 v-else class="bold-h1">
              {{ item.name.charAt(0).toUpperCase() }}
            </h1>
          </div>
          <h6 class="bold-h6 mt-5 mb-2">
            {{ item.name }}
          </h6>
          <h6 class="regular-h6 mb-7">
            {{ item.type }}
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
      <div class="d-flex justify-center mt-16">
        <BasePagination 
          :totalPages="10"
          :pageNumber="pageNumber"
          :limitPage="3"
          @clickPage="clickPage"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 1,
      listMentor: [
        {
          photo: require("@/assets/images/Ellipse 9.png"),
          name: "Mentor Name",
          type: "Institution"
        },
        {
          photo: require("@/assets/images/Ellipse 8 2.png"),
          name: "Hardy Tame",
          type: "Institution"
        },
        {
          photo: require("@/assets/images/Ellipse 10.png"),
          name: "Some Name Here",
          type: "Institution"
        },
        {
          photo: require("@/assets/images/Ellipse 9.png"),
          name: "Mentor Name",
          type: "Institution"
        },
        {
          photo: require("@/assets/images/Ellipse 8 2.png"),
          name: "Hardy Tame",
          type: "Institution"
        },
        {
          photo: require("@/assets/images/Ellipse 10.png"),
          name: "Some Name Here",
          type: "Institution"
        },
        {
          photo: require("@/assets/images/Ellipse 9.png"),
          name: "Mentor Name",
          type: "Institution"
        },
        {
          photo: require("@/assets/images/Ellipse 8 2.png"),
          name: "Hardy Tame",
          type: "Institution"
        },
        {
          photo: require("@/assets/images/Ellipse 10.png"),
          name: "Some Name Here",
          type: "Institution"
        },
      ]
    }
  },
  methods: {
    clickPage(page) {
      this.pageNumber = page
    }
  },
}
</script>

<style lang="scss">
  .mentor-connect-list {
    background: #F3F3F3;

    .container {
      padding-top: 66px;
      padding-bottom: 157px;

      .wrap-list {
        margin: 22px -49px -49px;

        .item-list {
          margin: 49px;
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
    }
  }

  @media screen and(max-width: 600px) {
    .mentor-connect-list {
      .container {
        .wrap-list {
          margin: 22px 0px 0px;
        }
      }
    }
  }
</style>