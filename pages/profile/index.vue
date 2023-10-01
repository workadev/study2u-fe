<template>
  <div class="page-profile">
    <v-container class="profile-container">
      <div class="info-profile">
        <div class="card-profile mb-12">
          <div class="wrap-avatar" :style="{background: user.bgAvatar}">
            <img
              v-if="user.avatar"
              width="250"
              :src="user.avatar"
            >
            <h1 v-else class="bold-h1">
              {{ user.first_name.charAt(0).toUpperCase() }}
            </h1>
          </div>
          <div class="user-name">
            {{ user.first_name }} {{ user.last_name }}
          </div>
          <h6 v-if="user.about_me" class="regular-h6 mt-5 mb-6 w-100">
            "{{ user.about_me }}"
          </h6>
          <div class="w-100 info-contact mb-3">
            <div class="mb-1">
              <b>Birthday</b>
            </div>
            <div>
              {{ user.birthday ? formatDate(user.birthday, "DD MMMM YYYY") : "-" }}
            </div>
          </div>
          <div class="w-100 info-contact mb-3">
            <div class="mb-1">
              <b>Email</b>
            </div>
            <div>
              {{ user.email ? user.email : "-" }}
            </div>
          </div>
          <div class="w-100 info-contact">
            <div class="mb-1">
              <b>Phone</b>
            </div>
            <div>
              {{ user.phone_number ? user.phone_number : "-" }}
            </div>
          </div>
          <div class="w-100 info-study">
            <div class="mb-1">
              <b>Education</b>
            </div>
            <div v-if="user.current_education">
              {{ user.current_education ? user.current_education.name : "-" }}
            </div>
            <div v-if="user.current_school">{{ user.current_school }}</div>
            <div v-if="user.nationality">{{ user.nationality }}</div>
          </div>
          <div class="w-100 mt-7">
            <nuxt-link class="btn-edit" to="/profile/edit">
              <img class="mr-3" src="@/assets/icons/icon-edit.svg">
              Edit my profile
            </nuxt-link>
          </div>
        </div>
        
        <v-btn
          elevation
          color="#5EC9AA"
          height="58"
          width="100%"
          class="btn-change-password"
          to="/profile/change-password"
        >
          <img src="@/assets/icons/green-lock.svg" class="mr-10"> Change Password
        </v-btn>
        <div class="mt-3 w-100">
          <v-btn
            elevation
            height="58"
            width="100%"
            color="#FF0000"
            dark
            class="btn-logout px-0"
            @click="clickLogout()"
          >
            Logout
          </v-btn>
        </div>
      </div>
      <div class="info-right">
        <div v-if="unCompleted" class="notif-profile mb-5">
          <h6 class="bold-h6 mb-3">Complete Your Profile</h6>
          <h6 class="regular-h6">
            For better experience with us, kindly complete your 
            <nuxt-link to="/profile/step">
              <b><u>profile</u></b>
            </nuxt-link>
          </h6>
        </div>
        <div v-if="user.institutions" class="wrap-info card-profile">
          <div>
            <b>My Shortlist:</b>
          </div>
          <div v-if="user.institutions.length == 0 && !editShortlist" class="mt-4">
            Oops, you have not select any institution. <nuxt-link to="/institutions">Go here</nuxt-link>!
          </div>
          <div v-else class="mt-1 d-flex flex-wrap wrap-option-shortlist">
            <div 
              class="d-flex flex-column item-option-shortlist" 
              v-for="(item, index) in user.institutions" 
              :key="index"
            >
              <img width="130" height="130" class="ml-6" :src="item.logo ? item.logo : '@/assets/images/BACedu_logofav2 1 (1).png'">
              <label class="container-checkbox mt-1">{{ item.name }}
                <input type="checkbox" v-model="shortlist" :value="item.id">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="my-11">
            <v-btn text class="btn-edit px-0" height="fit-content">
              <img class="mr-3" src="@/assets/icons/icon-edit.svg">
              Edit Shortlist
            </v-btn>
          </div>
          <v-btn
            elevation
            color="#5EC9AA"
            height="58"
            width="256"
            class="btn-compare"
            :disabled="shortlist.length < 2"
            @click="clickCompare()"
          >
            Compare Selected
          </v-btn>
        </div>
        <div v-if="user.interests" class="wrap-info mt-5 card-profile">
          <div>
            <b>My Interests:</b>
          </div>
          <div v-if="user.interests.length == 0" class="mt-4">
            Add something you’re interested <nuxt-link to="/profile/my-interest">here.</nuxt-link>
          </div>
          <div v-else class="d-flex flex-wrap wrap-item-interest">
            <div
              v-for="(item, index) in user.interests"
              :key="index"
              class="chip-square"
            >
              {{ item.name }}
            </div>
          </div>
          <div class="mt-11">
            <nuxt-link class="btn-edit" to="/profile/my-interest">
              <img class="mr-3" src="@/assets/icons/icon-edit.svg">
              Edit Interests
            </nuxt-link>
          </div>
        </div>
        <div v-if="user.interests" class="wrap-info mt-5 card-profile">
          <div>
            <b>Recommendation</b>
          </div>
          <div v-if="user.interests.length == 0" class="mt-4">
            Sorry we are unable to show you any recommendation yet.<br>
            Please  add your interests first.
          </div>
          <div v-else>
            <div class="d-flex flex-wrap wrap-item-interest mb-2">
              <div
                v-for="(item, index) in user.interests"
                :key="index"
                class="chip-square"
              >
                {{ item.name }}
              </div>
            </div>
            <div class="d-flex flex-wrap wrap-item-recommendation">
              <div 
                v-for="(item, index) in recommendationList" 
                :key="index"
                class="item-recommendation"
                @click="$router.push(`/institutions/${item.id}`)"
              >
                <img width="150" height="150" :src="item.logo ? item.logo : '@/assets/images/BACedu_logofav2 1 (1).png'">
                <div class="name-recommendation">{{ item.name }}</div>
                <div class="mt-2">
                  {{ item.institution_type }}, {{ item.reputation }}
                </div>
              </div>
            </div>
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
      shortlist: [],
      recommendationList: [],
      editShortlist: false,
      unCompleted: false
    }
  },
  computed: {
    user() {
      return this.$store.state.login.user
    }
  },
  async mounted() {
    await this.$axios.get(`${this.userType}/v1/current`, this.token)
    .then((res) => {
      if (res.status == 200) {
        let getData = this.userType == "users" ? res.data.data.user : res.data.data.staff
        getData = {
          ...getData, bgAvatar: this.user.bgAvatar
        }
        this.$store.dispatch("login/getUser", getData)
      }
    })
    .catch(err => {})

    Object.keys(this.user).forEach(key => {
      if (key != "headline" && key != "unconfirmed_email") {
        if (!this.user[key]) {
          this.unCompleted = true
        }
      }
    })

    this.$axios.get("v1/institutions/recommendations?per_page=10&page=1", this.token)
    .then((res) => {
      if (res.status == 200) {
        this.recommendationList = res.data.data.institutions
      }
    })
    .catch(err => {})
  },
  methods: {
    clickLogout() {
      this.clearCookies("token")
      this.$router.push("/login")
    },
    clickCompare() {
      this.$router.push({
        name: "comparison",
        query: {
          ids: this.shortlist    
        }
      })
    }
  },
}
</script>

<style lang="scss">
  .page-profile {
    background: #D9D9D9;
    .profile-container {
      padding-top: 83px;
      padding-bottom: 50vh;
      display: flex;

      .card-profile {
        background: #fff;
        border-radius: 20px;
        padding: 23px 27px 56px;
      }

      .btn-compare:disabled {
        background: #CECECE !important;
        color: #fff !important;
      }

      .info-right {
        padding: 0 0 20px;
        width: 100%;

        .notif-profile {
          background: #FF6D3B;
          padding: 25px 20px 37px;
          border-radius: 20px;
          text-align: center;

          h6, 
          u {
            color: #fff;
          }
        }

        .btn-compare {
          font-size: 20px;
          color: #fff;
          font-weight: 700;
          border-radius: 16px;
        }

        .wrap-info {
          font-size: 20px;

          .wrap-item-recommendation {
            margin: 0 -30px;

            .item-recommendation {
              display: flex;
              flex-flow: column;
              width: fit-content;
              margin: 21px 40px;
              cursor: pointer;

              img {
                object-fit: contain;
              }

              .name-recommendation {
                font-weight: 700;
                margin-top: 11px;
              }
            }
          }


          .wrap-item-interest {
            margin-left: 6px;
            margin-top: 13px;
          }

          .chip-square {
            margin: 4px;
          }

          .wrap-option-shortlist {
            margin: -20px -10px;

            .item-option-shortlist {
              margin: 20px;
              max-width: 232px;

              img {
                object-fit: contain;
              }
            }
          }

          a {
            color: #000;
          }
        }
      }

      .btn-edit {
        font-size: 16px;
        text-decoration: none;
        color: #000;
        display: flex;
        width: fit-content;
        align-items: center;
      }

      .info-profile {
        margin-right: 22px;
        min-width: 360px;

        .card-profile {
          width: fit-content;
          display: flex;
          flex-flow: column;
          align-items: center;
          width: 100%;
        }

        .btn-logout {
          font-weight: 700;
          font-size: 20px;
          border-radius: 16px;
        }

        .wrap-avatar {
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

        .btn-change-password {
          font-size: 20px;
          color: #fff;
          font-weight: 700;
          border-radius: 16px;
        }

        .info-study {
          font-size: 20px;
          margin-top: 26px;
        }

        .info-contact {
          font-size: 20px;

          div {
            margin-bottom: 7px;
          }

          div:last-child {
            margin-bottom: 0px;
          }
        }

        .user-name {
          font-size: 36px;
          font-weight: 700;
          color: #B2304A;
          line-height: 46.58px;
          margin-top: 14px;
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .page-profile {
      .profile-container {
        flex-wrap: wrap;
        justify-content: center;

        .info-right {
          width: 100%;
        }

        .info-profile {
          max-width: none;
          padding-left: 0px;
          padding-right: 0px;
          margin-right: 0px;
        }
      }
    }
  }
</style>