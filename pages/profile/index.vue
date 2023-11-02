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
        <ProfileAlert v-if="unCompleted" />
        <ProfileShortlist v-if="user.institutions" :user="user" />
        <ProfileInterest v-if="user.interests" :user="user" />
        <ProfileRecommendation v-if="user.interests" :user="user" />
        <ProfileInstitution v-if="userType == 'staffs'" />
        <ProfileArticle v-if="userType == 'staffs'" />
        <ProfileMentor v-if="userType == 'staffs'" />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  },
  methods: {
    clickLogout() {
      this.$cable.unsubscribe("PresenceChannel")
      this.clearCookies("token")
      this.$router.push("/login")
    },
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
          margin-top: 20px;
        }

        .info-profile {
          max-width: none;
          padding-left: 0px;
          padding-right: 0px;
          margin-right: 0px;
          min-width: 100%;
        }
      }
    }
  }
</style>