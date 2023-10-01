<template>
  <div class="reset-password">
    <div class="logo-background">
      <img src="@/assets/icons/big-s.svg">
    </div>
    <div class="content-left">
      <div class="wrap-form">
        <div class="wrap-header">
          <img class="mb-3" src="@/assets/images/Study2U-Logo-FA-04.png">
          <h3 class="bold-h3">RESET PASSWORD</h3>
        </div>
        <div class="card-form">
          <v-progress-circular
            v-if="loadingForm"
            indeterminate
            :size="60"
            style="width: 100% !important;"
          />
          <div v-else>
            <div v-if="errorToken.title">
              <h5 class="bold-h5">{{ errorToken.title }}</h5>
              <h6 class="regular-h6 mt-3">
                {{ errorToken.message }}
              </h6>
            </div>
            <div v-else>
              <div class="regular-title ml-3 mb-5">
                Please enter new password
              </div>
              <v-text-field 
                class="mt-2" 
                hide-details 
                height="38" 
                placeholder="new password" 
                :type="showPasssword ? 'text' : 'password'"
                v-model="form.password"
              >
                <template v-slot:append>
                  <v-btn
                    text
                    class="px-0"
                    height="fit-content"
                    min-width="fit-content"
                    @click="showPasssword = !showPasssword"
                  >
                    <img v-if="!showPasssword" src="@/assets/icons/close-eye.svg">
                    <img v-else src="@/assets/icons/eye.svg">
                  </v-btn>
                </template>
              </v-text-field>
              <v-text-field 
                class="mt-5" 
                hide-details 
                height="38" 
                placeholder="confirm new password" 
                :type="showPassswordConfirm ? 'text' : 'password'"
                v-model="form.password_confirmation"
              >
                <template v-slot:append>
                  <v-btn
                    text
                    class="px-0"
                    height="fit-content"
                    min-width="fit-content"
                    @click="showPassswordConfirm = !showPassswordConfirm"
                  >
                    <img v-if="!showPassswordConfirm" src="@/assets/icons/close-eye.svg">
                    <img v-else src="@/assets/icons/eye.svg">
                  </v-btn>
                </template>
              </v-text-field>
              <v-btn
                class="btn-reset mt-16"
                elevation
                color="#FF5ABE"
                height="58"
                width="189"
                @click="clickReset()"
                :disabled="disReset"
                :loading="loading"
              >
                RESET
              </v-btn>
              <div class="mt-4">
                or return to login 
                <nuxt-link class="link" :to="$route.query.resource_name == 'staff' ? '/partner/login' : '/login'">
                  here
                </nuxt-link>
              </div>
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
      showPasssword: false,
      showPassswordConfirm: false,
      form: {
        password: "",
        password_confirmation: ""
      },
      loading: false,
      loadingForm: true,
      errorToken: {
        title: "",
        message: ""
      },
      headers: {
        headers: {
          authorization: ""
        }
      }
    }
  },
  computed: {
    disReset() {
      if (this.form.password && this.form.password_confirmation && 
        (this.form.password == this.form.password_confirmation)
      ) {
        return false  
      }
      return true
    }
  },
  async mounted() {
    let getToken = {
      token: Object.keys(this.$route.query)[0]
    }
    this.errorToken.title = ""
    await this.$axios.get(`${this.$route.query.resource_name}s/v1/reset_passwords`, { headers: this.$store.state.config.headers, params: getToken })
    .then((res) => {
      this.loadingForm = false
      this.headers.headers.authorization = res.headers.token
    })
    .catch(err => {
      this.errorToken.title = "Reset Failed"
      this.errorToken.message = err.response ? err.response.data.message : err
      let urlRedirect = this.$route.query.resource_name == "user" ? "/login" : "/partner/login"
      setTimeout(() => {
        this.$router.push(urlRedirect)
      }, 3000);
    })
    this.loadingForm = false
  },
  methods: {
    async clickReset() {
      if (!this.loading) {
        this.loading = true
        await this.$axios.put(`${this.$route.query.resource_name}s/v1/reset_passwords`, { [this.$route.query.resource_name]: this.form }, this.headers)
        .then((res) => {
          if (res.status == 200) {
            this.$router.push(`/forgot-password/reset/confirm?resource_name=${this.$route.query.resource_name}`)
          }
        })
        .catch(err => {
          this.$store.dispatch("snackbar/getSnackbar", {
            show: true,
            color: "#ff004a",
            icon: "mdi-close-circle-outline",
            title: "Reset Failed",
            message: err.response ? err.response.data.message : err
          })
        })
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss">
  .reset-password {
    display: flex;
    background: #0B5994;
    min-height: 100vh;

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

    .content-right {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;

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
      padding: 40px 16px 100px;

      .wrap-form {
        width: 100%;
        max-width: 450px;

        .card-form {
          background: #fff;
          border-radius: 20px;
          padding: 50px 43px 53px;
        }
        
        .wrap-header {
          text-align-last: center;
          margin-bottom: 53px;
        }

        .link {
          color: #000000;
        }

        .btn-reset {
          font-size: 20px;
          font-weight: 700;
          border-radius: 16px;
          margin-top: 26px;
          color: #fff;

          circle {
            color: #fff;
          }
        }

        .v-input {
          max-width: 317px;

          .v-input__slot {
            padding: 0 12px !important;
            min-height: 38px !important;
          }
        }

        .bold-h3 {
          color: #fff;
          text-align: center;
        }
      }
    }

    .content-left,
    .content-right {
      width: 50%;
    }
  }

  @media screen and(max-width: 830px) {
    .reset-password {
      .content-left {
        box-shadow: none;
        width: 100%;

        .wrap-form {
          .btn-reset {
            width: 100% !important;
          }
        }
      }

      .content-right {
        display: none;
      }
    }
  }
</style>