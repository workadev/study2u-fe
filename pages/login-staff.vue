<template>
  <div class="login-staff">
    <div class="logo-background">
      <img src="@/assets/icons/big-s.svg">
    </div>
    <div class="content-left">
      <div class="wrap-form form-input">
        <div class="wrap-header">
          <img class="mb-3" src="@/assets/images/Study2U-Logo-FA-04.png">
          <h3 class="bold-h3">LOGIN</h3>
        </div>
        <div class="card-form">
          <v-text-field
            hide-details
            height="38"
            placeholder="email"
            v-model="form.email"
            @keypress="handleEnter"
          />
          <v-text-field 
            class="mt-2" 
            hide-details 
            height="38" 
            placeholder="password" 
            :type="showPasssword ? 'text' : 'password'"
            v-model="form.password"
            @keypress="handleEnter"
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
          <div class="mt-3 d-flex justify-space-between align-end">
            <v-checkbox 
              label="remember me" 
              hide-details
              color="#000"
              on-icon="mdi-check-circle-outline"
              off-icon="mdi-checkbox-blank-circle-outline"
            />
          </div>
          <div class="d-flex flex-column mt-8">
            <v-btn
              class="btn-action mb-4"
              elevation
              color="#E75982"
              height="58"
              width="189"
              @click="clickLogin()"
              :disabled="disLogin"
              :loading="loading"
            >
              LOGIN
            </v-btn>
            <nuxt-link to="/forgot-password" class="link text-decoration-none">
              <b>I forgot my password</b>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="wrap-content">
        <h3 class="bold-h3 text-center mb-8">
          New Here?
        </h3>
        <div>
          Sign up and discover a great amount of opportunities!
        </div>
        <v-btn
          class="btn-action mt-16"
          elevation
          color="#FABF48"
          height="58"
          width="100%"
          to="/register"
        >
          TAKE THE FIRST STEP
        </v-btn>
      </div>
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
      form: {
        email: "",
        password: ""
      },
      loading: false
    }
  },
  computed: {
    disLogin() {
      if (this.form.email && this.form.password) {
        return false
      }
      return true
    }
  },
  methods: {
    async clickLogin() {
      this.loading = true
      await this.$axios.post("staffs/v1/sign_in", this.form, { headers: this.$store.state.config.headers })
      .then((res) => {
        if (res.status == 200) {
          this.setCookies("token", res.headers.token)
          res.data.data.staff = {
            ...res.data.data.staff, bgAvatar: this.randomColor()
          }
          this.$store.dispatch("login/getUser", res.data.data.staff)
          this.$router.push("/")
        }
      })
      .catch(err => {
        this.$store.dispatch("snackbar/getSnackbar", {
          show: true,
          color: "#ff004a",
          icon: "mdi-close-circle-outline",
          title: "Login Failed",
          message: err.response ? err.response.data.message : err
        })
      })
      this.loading = false
    },
    handleEnter(evt) {
      if (evt.keyCode == 13) {
        this.clickLogin()
      }
    }
  },
}
</script>

<style lang="scss">
  .login-staff {
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
      margin-top: 26px;

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

      .wrap-content {
        width: 100%;
        max-width: 269px;
        
        div {
          color: #fff;
        }
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
            padding: 0 12px !important;
            min-height: 38px !important;
          }
        }

        .v-input--checkbox {
          width: fit-content;
          color: #000000;

          .v-label {
            color: #000000;
          }
          
          .v-input__slot {
            padding: 0px !important;
            min-height: 20px !important;
          }

          .v-input--selection-controls__ripple {
            display: none;
          }

          .v-input--selection-controls__input {
            height: 16px;
            width: 16px;
            margin-right: 4px;
            margin-top: 3px;
          }

          .v-icon.v-icon {
            font-size: 18px;
          }
        }

        .btn-action {
          color: #fff;
        }
      }
    }

    .content-left,
    .content-right {
      width: 50%;
    }
  }

  @media screen and(max-width: 700px) {
    .login-staff {
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