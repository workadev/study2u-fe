<template>
  <div class="mentor-connect-list">
    <v-container class="text-center">
      <h3 class="bold-h3">
        AVAILABLE MENTORS
      </h3>
      <div class="d-flex justify-center flex-wrap wrap-list">
        <div v-if="loading" class="d-flex align-center" style="height: 50vh;">
          <v-progress-circular
            indeterminate
            :size="100"
          />
        </div>
        <div v-else v-for="(item, index) in listMentor" :key="index" class="item-list">
          <div class="wrap-img" :style="{background: randomColor()}">
            <img v-if="item.avatar" :src="item.avatar">
            <h1 v-else class="bold-h1">
              {{ item.first_name ? item.first_name.charAt(0).toUpperCase() : "" }}
            </h1>
          </div>
          <h6 class="bold-h6 mt-5 mb-2">
            {{ item.first_name }} {{ item.last_name }}
          </h6>
          <h6 class="regular-h6 mb-7">
            {{ item.institutions.length == 0 ? "-" : item.institutions[0].name }}
          </h6>
          <v-btn
            color="#09B6DE"
            width="115"
            height="45"
            class="btn-connect"
            elevation
            :disabled="!user"
            @click="clickConnect(item)"
          >
            Connect
          </v-btn>
        </div>
      </div>
      <div class="d-flex justify-center mt-16">
        <BasePagination 
          :totalPages="totalPages"
          :pageNumber="paging.page"
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
      listMentor: [],
      paging: {
        per_page: 10,
        page: 1
      },
      totalPages: 0,
      loading: false
    }
  },
  computed: {
    user() {
      return this.$store.state.login.user
    }
  },
  async mounted() {
    await this.getList()
  },
  methods: {
    clickPage(page) {
      this.paging.page = page
      this.getList()
    },
    async getList() {
      this.loading = true
      await this.$axios.get("v1/mentors", { params: this.paging })
      .then((res) => {
        if (res.status == 200) {
          this.listMentor = res.data.data.staffs
          this.totalPages = Math.ceil(res.headers.total / this.paging.per_page)
        }
      })
      .catch(err => {})
      this.loading = false
    },
    clickConnect(item) {
      this.$axios.post(`${this.userType}/v1/conversations/${item.id}`, null, this.token)
      .then((res) => {
        if (res.status == 201) {
          let dataMessaging = [...this.$store.state.messaging.listMessaging]
          let checkUser = dataMessaging.filter(str => {
            return str.user.id == res.data.data.chat.user.id
          })
          if (checkUser.length == 0) {
            dataMessaging.push(res.data.data.chat)
            this.$store.dispatch("messaging/getListMessaging", dataMessaging)
          }
        }
      })
      .catch(err => {})
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
            color: #fff;
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
              object-fit: cover;
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