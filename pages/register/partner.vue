<template>
  <div class="page-register">
    <div class="logo-background">
      <img src="@/assets/icons/big-s.svg">
    </div>
    <div class="content-left">
      <div class="wrap-form">
        <div class="wrap-header">
          <img class="mb-3" src="@/assets/images/Study2U-Logo-FA-04.png">
          <h3 class="bold-h3">PARTNER REGISTRATION</h3>
        </div>
        <div class="card-form">
          <v-text-field hide-details height="38" placeholder="email" />
          <v-text-field 
            class="mt-2" 
            hide-details 
            height="38" 
            placeholder="user typed in password" 
            :type="showPasssword ? 'text' : 'password'"
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
            class="mt-2" 
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
          </v-text-field>
          <v-select 
            class="mt-2"
            :items="[]"
            hide-details
            placeholder="current qualification"
          >
            <template v-slot:append>
              <img width="21" src="@/assets/icons/chevron-down.svg">
            </template>
          </v-select>
          <v-select 
            class="mt-2"
            :items="[]"
            hide-details
            placeholder="nationality"
          >
            <template v-slot:append>
              <img width="21" src="@/assets/icons/chevron-down.svg">
            </template>
          </v-select>
          <div class="mt-6 d-flex justify-space-between align-end">
            <v-checkbox 
              hide-details
              color="#000"
            >
              <template v-slot:label>
                <div>
                  I hereby agree with study2u <nuxt-link to="" class="link">Terms & Conditions</nuxt-link> and <nuxt-link to="" class="link">Privacy Policy</nuxt-link>
                </div>
              </template>
            </v-checkbox>
          </div>
          <v-btn
            class="btn-login mt-16"
            elevation
            color="#FF5ABE"
            dark
            height="58"
            width="189"
            @click="clickRegister()"
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
      showPassswordConfirm: false
    }
  },
  computed: {
    listStudy() {
      return this.$store.state.study.listStudy
    }
  },
  mounted() {
    this.$store.dispatch("study/getStudy")
  },
  methods: {
    clickRegister() {
      this.$router.push("/login")
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

        .btn-google {
          font-size: 24px;
          border-radius: 20px;
          border: 2px solid #000000;
          text-transform: lowercase !important;
          justify-content: flex-start;
          padding: 0 38px;
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