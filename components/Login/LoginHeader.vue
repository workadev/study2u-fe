<template>
  <div class="login-header">
    <v-container>
      <div class="wrap-header">
        <h3 class="regular-h3">
          Welcome to your professional community hub.
        </h3>
        <LoginForm class="mt-3" />
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .login-header {
    background: $color-lightest-grey;

    .container {
      padding: 60px 12px;
    }

    .wrap-header {
      background-image: url("@/assets/images/header-login.svg");
      background-position: center right;

      .regular-h3 {
        max-width: 510px;
      }
    }
  }
</style>