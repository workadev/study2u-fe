<template>
  <div class="page-register">
    <div class="logo-background">
      <img src="@/assets/icons/big-s.svg">
    </div>
    <div class="content-left">
      <div class="wrap-form">
        <div class="wrap-header">
          <img class="mb-3" src="@/assets/images/Study2U-Logo-FA-04.png">
          <h3 class="bold-h3">REGISTER</h3>
        </div>
        <div class="card-form">
          <v-text-field
            hide-details
            height="38"
            placeholder="name"
            v-model="form.first_name"
          />
          <v-text-field
            class="mt-2"
            hide-details
            height="38"
            placeholder="email"
            autocomlete="off"
            v-model="form.email"
          />
          <v-text-field 
            class="mt-2" 
            hide-details 
            height="38" 
            placeholder="password" 
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
          <!-- <v-text-field 
            class="mt-5" 
            hide-details 
            height="38" 
            placeholder="confirm password" 
            :type="showPassswordConfirm ? 'text' : 'password'"
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
          </v-text-field> -->
          <div class="mt-6 d-flex justify-space-between align-end">
            <v-checkbox 
              hide-details
              color="#000"
              v-model="form.tnc"
            >
              <template v-slot:label>
                <div>
                  I hereby agree with study2u <nuxt-link to="/privacy-policy" class="link">Privacy Policy</nuxt-link>
                </div>
              </template>
            </v-checkbox>
          </div>
          <v-btn
            class="btn-login mt-16"
            elevation
            color="#FF5ABE"
            height="58"
            width="189"
            @click="clickRegister()"
            :disabled="disCreate"
            :loading="loading"
          >
            CREATE
          </v-btn>
          <div class="mt-4">
            Already have one? <nuxt-link class="link" to="/login">Login here</nuxt-link>.
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
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        current_education_id: "",
        interest_ids: [],
        nationality: "",
        tnc: false
      },
      loading: false
    }
  },
  computed: {
    disCreate() {
      if (this.form.first_name && this.form.email && 
        this.form.password && this.form.tnc
      ) {
        return false  
      }
      return true
    }
  },
  methods: {
    async clickRegister() {
      if (!this.loading) {
        this.loading = true
        this.form.password_confirmation = this.form.password
        await this.$axios.post("users/v1/sign_up", { user: this.form })
        .then((res) => {
          if (res.status == 201) {
            this.formClear()
            this.$store.dispatch("snackbar/getSnackbar", {
              show: true,
              color: "#74b816",
              icon: "mdi-check",
              title: "Register Success",
              message: res.data.message
            })
            setTimeout(() => {
              this.$router.push("/login")
            }, 6000);
          }
        })
        .catch(err => {
          this.$store.dispatch("snackbar/getSnackbar", {
            show: true,
            color: "#ff004a",
            icon: "mdi-close-circle-outline",
            title: "Register Failed",
            message: err.response ? err.response.data.message : err
          })
        })
        this.loading = false
      }
    },
    formClear() {
      this.form = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        current_education_id: "",
        interest_ids: [],
        nationality: "",
        tnc: false
      }
    }
  },
}
</script>

<style lang="scss">
  .page-register {
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
        max-width: 561px;

        .card-form {
          background: #fff;
          border-radius: 20px;
          padding: 24px 43px 53px;
        }
        
        .wrap-header {
          text-align-last: center;
          margin-bottom: 53px;
        }

        .link {
          color: #000000;
        }

        .btn-login {
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

        .v-input--checkbox {
          width: fit-content;
          max-width: fit-content;
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
          }

          .v-icon.v-icon {
            font-size: 20px;
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
    .page-register {
      .content-left {
        box-shadow: none;
        width: 100%;

        .wrap-form {
          .btn-login {
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