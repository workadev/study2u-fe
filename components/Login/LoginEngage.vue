<template>
  <div class="login-engage">
    <v-container class="py-10 d-flex align-center justify-space-between">
      <img src="@/assets/images/Frame 17370.png" alt="Frame 17370">
      <div class="wrap-text">
        <h4 class="regular-h4 mb-3">
          Engage in discussions and gather information about colleges and universities
        </h4>
        <h5 class="regular-h5">
          Connect with fellow students and educators to explore and seek insights into higher education institutions
        </h5>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .login-engage {
    background: $color-lightest-grey;

    .wrap-text {
      max-width: calc(100% - 510px);
    }

    h5 {
      color: $color-dark-grey;
    }

    img {
      width: 100%;
      max-width: 400px;
    }
  }

  @media screen and(max-width: 959px) {
    .login-engage {
      .wrap-text {
        max-width: none;
      }

      img {
        margin-right: 28px;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .login-engage {
      .container {
        flex-flow: column;
      }

      .wrap-text {
        text-align: center;
      }

      img {
        margin-right: 0px;
        margin-bottom: 28px;
      }
    }
  }
</style>