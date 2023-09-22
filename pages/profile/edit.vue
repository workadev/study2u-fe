<template>
  <div class="profile-edit">
    <v-container class="d-flex justify-space-between">
      <div class="content-left">
        <div class="content-title mb-10">
          Edit Profile
        </div>
        <v-text-field
          hide-details
          height="38"
          placeholder="name"
          v-model="profile.first_name"
        />
        <v-menu 
          ref="menuDateofbirth"
          v-model="menuDateofbirth"
          transition="slide-y-transition"
          origin="center center"
          offset-y
          content-class="menu-datepicker"
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-bind="attrs"
              v-on="on"
              hide-details
              height="38"
              placeholder="date of birth"
              readonly
              v-model="birthdayFormat"
              class="mt-3"
            >
              <template v-slot:prepend-inner>
                <img src="@/assets/icons/calendar.svg">
              </template>
            </v-text-field>
          </template>
          <v-date-picker
            v-model="profile.birthday"
            no-title
            scrollable
            prev-icon="mdi-chevron-double-left"
            next-icon="mdi-chevron-double-right"
          />
        </v-menu>
        <div class="phone d-flex mt-3">
          <!-- <v-text-field
            hide-details
            height="38"
            style="max-width: 47px;"
            class="mr-4"
            placeholder="+xx"
            v-model="profile.phone.code"
            max-length="3"
          /> -->
          <v-text-field
            hide-details
            height="38"
            placeholder="+xx-xx-xxxx-xxxx"
            v-model="profile.phone_number"
          />
        </div>
        <v-text-field
          hide-details
          height="38"
          placeholder="email"
          v-model="profile.email"
          class="mt-3"
        />
        <v-text-field
          hide-details
          height="38"
          placeholder="current school"
          v-model="profile.current_school"
          class="mt-3"
        />
        <v-select 
          class="mt-5"
          :items="listStudy"
          hide-details
          placeholder="current qualification"
          item-text="name"
          item-value="id"
          v-model="profile.current_education_id"
        >
          <template v-slot:append>
            <img width="21" src="@/assets/icons/chevron-down.svg">
          </template>
        </v-select>
        <v-select 
          class="mt-5"
          :items="listCountry"
          hide-details
          placeholder="nationality"
          v-model="profile.nationality"
        >
          <template v-slot:append>
            <img width="21" src="@/assets/icons/chevron-down.svg">
          </template>
        </v-select>
        <div class="d-flex flex-column wrap-btn-action">
          <v-btn
            elevation
            dark
            height="58"
            width="140"
            color="#5EC9AA"
            class="btn-done"
            @click="clickDone()"
            :loading="loading"
          >
            Done
          </v-btn>
          <nuxt-link to="/profile">
            cancel
          </nuxt-link>
        </div>
      </div>
      <div class="content-right">
        <div class="text-center wrap-photo">
          <div class="default-img" :style="{background: user.bgAvatar}">
            <img v-if="imgPreview" :src="imgPreview">
            <img v-else-if="user.avatar" :src="user.avatar">
            <div v-else>
              {{ user.first_name.charAt(0).toUpperCase() }}
            </div>
          </div>
          <input
            id="photo"
            type="file"
            hidden
            @change="inputFile"
          >
          <div class="mt-3">
            <label for="photo" class="btn-change">
              change photo
            </label>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      profile: {
        first_name: "",
        last_name: "",
        phone_number: "",
        headline: "",
        about_me: "",
        address: "",
        birthday: "",
        current_school: "",
        nationality: "",
        current_education_id: "",
        email: ""
      },
      photo: null,
      menuDateofbirth: false,
      imgPreview: null,
      loading: false,
      birthdayFormat: "",
      fileUpload: null,
    }
  },
  computed: {
    user() {
      return this.$store.state.login.user
    },
    listStudy() {
      return this.$store.state.study.listStudy
    },
  },
  watch: {
    "profile.birthday"(newVal) {
      this.birthdayFormat = this.formatDate(newVal, "DD MMMM YYYY")
    }
  },
  mounted() {
    this.profile = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      phone_number: this.user.phone_number,
      headline: this.user.headline,
      about_me: this.user.about_me,
      address: this.user.address,
      birthday: this.user.birthday,
      avatar_id: this.user.avatar_id,
      current_school: this.user.current_school,
      nationality: this.user.nationality,
      current_education_id: this.user.current_education,
      email: this.user.email
    }
    this.$store.dispatch("study/getStudy")
  },
  methods: {
    async inputFile(evt) {
      let src = null
      if (evt.target.files[0]) {
        src = URL.createObjectURL(evt.target.files[0])
        this.photo = evt.target.files[0]
      } else {
        this.photo = null
      }
      this.imgPreview = src
      this.fileUpload = null
      if (this.photo) {
        await this.$axios.get(`v1/presign`, { params: { filename: evt.target.files[0].name } })
        .then((res) => {
          if (res.status == 200) {
            this.fileUpload = res.data.fields
            this.fileUpload = {
              ...this.fileUpload, file: this.photo
            }
          }
        })
        .catch(err => {})
      }
    },
    async clickDone() {
      this.loading = true
      let failed = false
      if (this.fileUpload) {
        await axios.post("https://study2u-dev.s3.ap-southeast-1.amazonaws.com", this.generateData())
        .then((res) => {})
        .catch(err => {
          failed = true
          this.imgPreview = null
          this.fileUpload = null
          this.$store.dispatch("snackbar/getSnackbar", {
            show: true,
            color: "#ff004a",
            icon: "mdi-close",
            title: "Upload Failed",
            message: err.response ? err.response.data.message : err
          })
        })
      }

      if (!failed) {
        if (this.fileUpload) {
          this.profile = {
            ...this.profile, avatar_id: this.fileUpload.key.split("cache/")[1]
          }
        }
        await this.$axios.put("users/v1/current", { user: this.profile }, this.token)
        .then(async (res) => {
          if (res.status == 200) {
            res.data.data.user = {
              ...res.data.data.user, bgAvatar: this.user.bgAvatar
            }
            this.$store.dispatch("login/getUser", res.data.data.user)
            if (!failed) {
              this.$store.dispatch("snackbar/getSnackbar", {
                show: true,
                color: "#74b816",
                icon: "mdi-check",
                title: "Edit Success",
                message: res.data.message
              })
              this.$router.push("/profile")
            }
          }
        })
        .catch(err => {
          this.$store.dispatch("snackbar/getSnackbar", {
            show: true,
            color: "#ff004a",
            icon: "mdi-close",
            title: "Edit Failed",
            message: err.response ? err.response.data.message : err
          })
        })
      }
      this.loading = false
    },
    generateData() {
      let data = new FormData()
      Object.keys(this.fileUpload).forEach((key) => {
        data.append([key], this.fileUpload[key]) 
      })
      return data
    }
  },
}
</script>

<style lang="scss">
  .menu-datepicker {
    .v-picker {
      width: 100%;
    }
  }
  
  .profile-edit {
    padding-top: 133px;
    padding-bottom: 133px;

    .content-right {
      margin-top: 100px;

      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
      }

      .default-img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: #F4BF28;
        font-size: 150px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
          color: #fff;
        }
      }

      .btn-change {
        font-size: 20px;
        cursor: pointer;
      }
    }

    .content-left {
      width: 100%;
      max-width: 317px;

      .v-select__selection {
        height: 22px;
      }

      .wrap-btn-action {
        width: fit-content;
        align-items: center;
        margin-top: 100px;

        a {
          color: #000;
          text-decoration: none;
          margin-top: 13px;
        }

        .btn-done {
          border-radius: 16px;
          font-weight: 700;
          font-size: 20px;

          circle {
            color: #fff;
          }
        }
      }

      .v-input {
        .v-input__slot {
          padding: 0 6px !important;
          min-height: 38px !important;
          font-size: 20px;

          .v-input__prepend-inner {
            margin-right: 18px;
          }
        }
      }

      .content-title {
        font-size: 36px;
        font-weight: 700;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .profile-edit {
      .container {
        flex-flow: column-reverse;

        .content-left {
          max-width: 100%;
          
          .wrap-btn-action {
            width: 100%;
          }
        }

        .content-right {
          margin-top: 0px;
          margin-bottom: 20px;

          .wrap-photo {
            display: flex;
            flex-flow: column;
            align-items: center;
          }
        }
      }
    }
  }
</style>