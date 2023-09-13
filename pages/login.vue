<template>
  <div class="page-login">
    <div class="content-left">
      <div class="wrap-form">
        <div class="wrap-header">
          <img class="mb-5" src="@/assets/images/logo-s.svg">
          <div class="title-form">LOGIN</div>
        </div>
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
        </div>
        <div class="d-flex flex-column mt-16">
          <div class="mt-16 mobile-register">
            Don’t have an account? <nuxt-link class="link" to="/register">Create one here</nuxt-link>.
          </div>
          <v-btn
            class="btn-action mb-4"
            elevation
            color="#FF5ABE"
            dark
            height="58"
            width="189"
            @click="clickLogin()"
          >
            LOGIN
          </v-btn>
          <nuxt-link to="" class="link text-decoration-none">
            I forgot my password
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="wrap-content">
        <div class="title-form text-center mb-8">
          New Here?
        </div>
        <div>
          Sign up and discover a great amount of opportunities!
        </div>
        <v-btn
          class="btn-action mt-16"
          elevation
          color="#FF5ABE"
          dark
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

    .title-form {
      font-size: 36px;
      font-weight: 700;
    }

    .btn-action {
      font-size: 20px;
      font-weight: 700;
      border-radius: 16px;
      margin-top: 26px;
    }

    .content-right {
      background: #F3F3F3;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;

      .copyright {
        position: absolute;
        bottom: 0px;
      }

      .wrap-content {
        width: 100%;
        max-width: 269px;
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
        max-width: 317px;

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
      }
    }

    .content-left,
    .content-right {
      width: 50%;
    }
  }

  @media screen and(max-width: 700px) {
    .page-login {
      .btn-action {
        width: 100% !important;
      }

      .content-left {
        box-shadow: none;
        width: 100%;

        .wrap-form {
          .mobile-register {
            display: block;
          }
        }
      }

      .content-right {
        display: none;
      }
    }
  }
</style>