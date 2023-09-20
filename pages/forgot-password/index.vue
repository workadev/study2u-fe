<template>
  <div class="forgot-password">
    <div class="logo-background">
      <img src="@/assets/icons/big-s.svg">
    </div>
    <div class="content-left">
      <div class="wrap-form">
        <div class="wrap-header">
          <img class="mb-3" src="@/assets/images/Study2U-Logo-FA-04.png">
          <h3 class="bold-h3">FORGOT PASSWORD</h3>
        </div>
        <div class="card-form">
          <div class="regular-title ml-2">
            Kindly enter your email. You will receive a link to reset your password.
          </div>
          <div>
            <v-text-field
              hide-details
              height="38"
              placeholder="email"
              v-model="form.email"
            />
            <div v-if="error.email" class="error-field ml-2 mt-3">
              {{ error.email }}
            </div>
          </div>
          <div class="d-flex flex-column mt-10">
            <v-btn
              class="btn-action mb-4"
              elevation
              color="#E75982"
              height="58"
              width="189"
              :disabled="disButton"
              :loading="loading"
              @click="clickReset()"
            >
              RESET
            </v-btn>
            <div>
              or return to login
              <nuxt-link to="/login" class="link">
                here
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="mb-10 copyright">
        © {{ new Date().getFullYear() }} study2u. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clearlayout',
  data() {
    return {
      form: {
        email: ""
      },
      error: {
        email: ""
      },
      loading: false
    }
  },
  computed: {
    disButton() {
      if (this.form.email) {
        return false
      }

      return true
    }
  },
  methods: {
    async clickReset() {
      if (!this.loading) {
        this.loading = true
        this.error.email = ""
        await this.$axios.post("users/v1/reset_passwords", this.form)
        .then((res) => {
          if (res.status == 200) {
            this.$store.dispatch("snackbar/getSnackbar", {
              show: true,
              color: "#74b816",
              icon: "mdi-check",
              title: "Forgot Password Success",
              message: res.data.message
            })
            this.form.email = ""
          } else {
            this.error.email = "No email was found."
          }
        })
        .catch(err => {
          this.$store.dispatch("snackbar/getSnackbar", {
            show: true,
            color: "#ff004a",
            icon: "mdi-close",
            title: "Forgot Password Failed",
            message: err.response ? err.response.data.message : err
          })
        })
        this.loading = false
      }
    }
  },
}
</script>

<style lang="scss">
  .forgot-password {
    display: flex;
    min-height: 100vh;
    background: #0B5994;

    .logo-background {
      position: absolute;
      z-index: 1;
      opacity: .2;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        max-width: 793px;
      }
    }

    .bold-h3 {
      color: #fff;
    }

    .btn-action {
      font-size: 20px;
      font-weight: 700;
      border-radius: 16px;
      color: #fff;

      circle {
        color: #fff;
      }
    }

    .content-right {
      display: flex;
      align-items: center;
      flex-flow: column;
      position: relative;
      padding-top: 142px;
      z-index: 1;
      background: transparent;

      .copyright {
        position: absolute;
        bottom: 0px;
        color: #fff;
      }
    }

    .content-left {
      box-shadow: 8px 0px 16px 0px #00000040;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;

      .wrap-form {
        width: 100%;
        max-width: 450px;

        .card-form {
          background: #fff;
          border-radius: 20px;
          padding: 44px 44px 53px;
        }

        .mobile-register {
          display: none;
        }

        .wrap-header {
          text-align-last: center;
          margin-bottom: 60px;
        }

        .link {
          color: #000000;
        }

        .v-input {
          .v-input__slot {
            padding: 0 8px !important;
            min-height: 38px !important;
          }
        }

        .btn-google {
          font-size: 24px;
          border-radius: 20px;
          border: 2px solid #000000;
          text-transform: lowercase !important;
          justify-content: flex-start;
          padding: 0 38px;
        }
      }
    }

    .content-left,
    .content-right {
      width: 50%;
    }
  }

  @media screen and(max-width: 700px) {
    .forgot-password {
      flex-wrap: wrap;

      .content-right {
        width: 100%;
        padding: 40px 16px 150px;
      }

      .btn-action {
        width: 100% !important;
      }

      .content-left {
        box-shadow: none;
        width: 100%;
        padding: 40px 16px;
      }
    }
  }
</style>