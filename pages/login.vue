<template>
  <div class="page-login">
    <div class="content-left">
      <div class="wrap-form">
        <div class="title-form">LOGIN</div>
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
        <div class="mt-6 d-flex justify-space-between align-end">
          <v-checkbox 
            label="remember me" 
            hide-details
            color="#000"
          />
          <nuxt-link to="" class="link">
            forgot my password
          </nuxt-link>
        </div>
        <div class="mt-16">
          Don’t have an account? <nuxt-link class="link" to="/register">Create one here</nuxt-link>.
        </div>
        <v-btn
          class="btn-login"
          elevation
          color="#FF5ABE"
          dark
          height="58"
          width="189"
          @click="clickLogin()"
        >
          LOGIN
        </v-btn>
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
      showPasssword: false
    }
  },
  methods: {
    clickLogin() {
      this.$store.dispatch("login/getLogin", true)
      this.$router.push("/")
    }
  },
}
</script>

<style lang="scss">
  .page-login {
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
      padding: 16px;

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

  @media screen and(max-width: 700px) {
    .page-login {
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