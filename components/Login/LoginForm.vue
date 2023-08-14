<template>
  <div class="login-form">
    <div class="wrap-input mb-4">
      <div class="regular-subtitle mb-1">Email</div>
      <v-text-field
        hide-details
        solo
        flat
      />
    </div>
    <div class="wrap-input mb-4">
      <div class="regular-subtitle mb-1">Password</div>
      <v-text-field
        hide-details
        solo
        flat
        :type="showPassword ? 'text' : 'password'"
      >
        <template v-slot:append>
          <v-icon color="#1A334F" @click="showPassword = !showPassword">
            {{ showPassword ? "mdi-eye" : "mdi-eye-off" }}
          </v-icon>
        </template>
      </v-text-field>
    </div>
    <nuxt-link class="regular-subtitle" to="">
      Forgot password<v-icon size="18" class="ml-2" color="#1A334F">mdi-arrow-right</v-icon>
    </nuxt-link>
    <div class="mt-4">
      <v-btn class="btn-lg btn-primary semibold-subtitle mb-3" block elevation @click="$router.push('/dashboard')">
        Login
      </v-btn>
      <div class="d-flex align-center mb-3">
        <v-divider color="#C3C4C3" />
        <div class="regular-subtitle mx-10">Or</div>
        <v-divider color="#C3C4C3" />
      </div>
      <div class="text-center mb-4">
        <v-btn text icon>
          <img height="32.6" src="@/assets/icons/facebook-color.svg" alt="facebook-color">
        </v-btn>
        <v-btn text icon class="mx-4">
          <img height="32.6" src="@/assets/icons/google.svg" alt="google">
        </v-btn>
        <v-btn text icon>
          <img height="32.6" src="@/assets/icons/apple.svg" alt="apple">
        </v-btn>
      </div>
      <v-btn 
        class="btn-lg semibold-subtitle" 
        block 
        outlined 
        color="#1A334F"
        @click="$router.push('/register')"
      >
        Don't have an account? Register now!
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false
    }
  },
}
</script>

<style lang="scss">
  .login-form {
    a {
      text-decoration: none;
      color: $color-space !important;
    }

    .wrap-input {
      .v-input {
        font-size: 14px;

        .v-icon {
          cursor: pointer;
        }
      }
    }
  }
</style>