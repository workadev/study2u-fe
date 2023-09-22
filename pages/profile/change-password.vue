<template>
  <div class="profile-change-password">
    <v-container class="d-flex justify-space-between">
      <div class="content-left">
        <div class="content-title mb-10">
          Change Password
        </div>
        <v-text-field 
          hide-details 
          height="38" 
          placeholder="current password" 
          :type="showCurrentPasssword ? 'text' : 'password'"
          v-model="form.current_password"
        >
          <template v-slot:append>
            <v-btn
              text
              class="px-0"
              height="fit-content"
              min-width="fit-content"
              @click="showCurrentPasssword = !showCurrentPasssword"
            >
              <img v-if="!showCurrentPasssword" src="@/assets/icons/close-eye.svg">
              <img v-else src="@/assets/icons/eye.svg">
            </v-btn>
          </template>
        </v-text-field>
        <v-text-field 
          class="mt-3"
          hide-details 
          height="38" 
          placeholder="mew password" 
          :type="showNewPasssword ? 'text' : 'password'"
          v-model="form.password"
        >
          <template v-slot:append>
            <v-btn
              text
              class="px-0"
              height="fit-content"
              min-width="fit-content"
              @click="showNewPasssword = !showNewPasssword"
            >
              <img v-if="!showNewPasssword" src="@/assets/icons/close-eye.svg">
              <img v-else src="@/assets/icons/eye.svg">
            </v-btn>
          </template>
        </v-text-field>
        <v-text-field 
          class="mt-3"
          hide-details 
          height="38" 
          placeholder="confirmation password" 
          :type="showConfirmPasssword ? 'text' : 'password'"
          v-model="form.password_confirmation"
        >
          <template v-slot:append>
            <v-btn
              text
              class="px-0"
              height="fit-content"
              min-width="fit-content"
              @click="showConfirmPasssword = !showConfirmPasssword"
            >
              <img v-if="!showConfirmPasssword" src="@/assets/icons/close-eye.svg">
              <img v-else src="@/assets/icons/eye.svg">
            </v-btn>
          </template>
        </v-text-field>
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
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        current_password: "",
        password: "",
        password_confirmation: ""
      },
      loading: false,
      showCurrentPasssword: false,
      showNewPasssword: false,
      showConfirmPasssword: false
    }
  },
  methods: {
    async clickDone() {
      this.loading = true
      await this.$axios.put("users/v1/current/update/password", { user: this.form }, this.token)
      .then((res) => {
        if (res.status == 200) {
          this.$store.dispatch("snackbar/getSnackbar", {
            show: true,
            color: "#74b816",
            icon: "mdi-check",
            title: "Change Password Success",
            message: res.data.message
          })
          this.$router.push("/profile")
        }
      })
      .catch(err => {
        this.$store.dispatch("snackbar/getSnackbar", {
          show: true,
          color: "#ff004a",
          icon: "mdi-close-circle-outline",
          title: "Change Password Failed",
          message: err.response ? err.response.data.message : err
        })
      })
      this.loading = false
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
  
  .profile-change-password {
    padding-top: 133px;
    padding-bottom: 133px;

    .content-left {
      width: 100%;
      max-width: 317px;

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
    .profile-change-password {
      .container {
        flex-flow: column-reverse;

        .content-left {
          max-width: 100%;
          
          .wrap-btn-action {
            width: 100%;
          }
        }
      }
    }
  }
</style>