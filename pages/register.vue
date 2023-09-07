<template>
  <div class="page-register">
    <div class="content-left">
      <div class="wrap-form">
        <div class="title-form">REGISTER</div>
        <v-btn outlined height="59" width="288" class="btn-google mt-6">
          use my <img class="ml-4" width="33" height="33" src="@/assets/icons/google.svg">
        </v-btn>
        <div class="my-4">or</div>
        <v-text-field hide-details height="38" placeholder="email" />
        <v-text-field 
          class="mt-5" 
          hide-details 
          height="38" 
          placeholder="password" 
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
        </v-text-field>
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
    <div class="content-right">
      <img src="@/assets/images/logo-s.svg">
      <div class="mt-3">
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
    height: 100vh;

    .content-right {
      background: #F3F3F3;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
    }

    .content-left {
      box-shadow: 8px 0px 16px 0px #00000040;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      .wrap-form {
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

        .title-form {
          font-size: 36px;
          font-weight: 700;
        }
      }
    }

    .content-left,
    .content-right {
      width: 50%;
    }
  }
</style>