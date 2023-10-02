<template>
  <div class="home-mentor">
    <v-container class="py-0 d-flex flex-column align-center">
      <h3 class="bold-h3">
        OUR PROFESSIONAL MENTORS
      </h3>
      <h6 class="regular-h6 my-10">
        Connect with a vibrant community of students, mentors, and industry professionals. Engage in meaningful discussions, collaborate on projects, and build lifelong connections. Study2U is your gateway to networking opportunities and a support system that will inspire you to reach new heights.
      </h6>
      <div class="wrap-list">
        <div class="item-list" v-for="(item, index) in listMentor.slice(0,3)" :key="index">
          <div class="wrap-img" :style="{background: randomColor()}">
            <img v-if="item.avatar" :src="item.avatar">
            <h1 v-else class="bold-h1">
              {{ item.first_name ? item.first_name.charAt(0).toUpperCase() : "" }}
            </h1>
          </div>
          <h6 class="bold-h6 mt-7">{{ item.first_name }} {{ item.last_name }}</h6>
          <h6 class="regular-h6 mt-2">
            {{ item.institutions.length == 0 ? "-" : item.institutions[0].name }}
          </h6>
        </div>
        <div class="w-100 text-center">
          <v-btn
            elevation
            color="#739EF1"
            dark
            class="btn-see mt-11"
            height="58px"
            width="212px"
            to="/mentor-connect"
          >
            SEE MENTORS
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paging: {
        per_page: 100,
        page: 1
      },
      listMentor: []
    }
  },
  async mounted() {
    await this.$axios.get("v1/mentors", { params: this.paging })
    .then((res) => {
      if (res.status == 200) {
        this.listMentor = res.data.data.staffs
        this.listMentor = this.listMentor.filter(str => {
          return str.institutions.length != 0
        })
      }
    })
    .catch(err => {})
  },
}
</script>

<style lang="scss">
  .home-mentor {
    background: #F3F3F3;
    padding: 52px 0;

    .wrap-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .btn-see {
        border-radius: 16px;
        font-size: 20px;
        font-weight: 700;
      }

      .item-list {
        display: flex;
        flex-flow: column;
        align-items: center;
        width: calc(100% / 3 - 32px);
        margin: 16px;

        .wrap-img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }

          h1 {
            font-size: 12em;
            color: #fff;
          }
        }
      }
    }
  }

  @media screen and(max-width: 800px) {
    .home-mentor {
      .wrap-list {
        .item-list {
          width: calc(100% / 2 - 32px);
        }
      }
    }
  }
  
  @media screen and(max-width: 700px) {
    .home-mentor {
      .wrap-list {
        .item-list {
          width: 100%;
        }
      }
    }
  }
</style>