<template>
  <div class="home-empowered">
    <v-container class="py-0 d-flex justify-space-between">
      <div class="wrap-img mr-5">
        <img src="@/assets/images/staff 1.png">
      </div>
      <div class="text-section">
        <h3 class="bold-h3">
          READY TO EMPOWERED FUTURE GENERATIONS?
        </h3>
        <h6 class="my-9 regular-h6">
          Take the opportunity to make lasting impact on students lives, contribute to society and shape the future of education. Let Study2U be your trusted partner and unlock a world of possibilities for your institutions!
        </h6>
        <div class="text-center">
          <v-btn
            color="#E75982"
            class="btn-started"
            dark
            elevation
            height="58"
            width="212"
            to="/register/partner"
          >
            GET STARTED
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .home-empowered {
    background: #F3F3F3;
    padding-top: 59px;

    .wrap-img {
      min-width: 50%;
      display: flex;
      flex-direction: column-reverse;

      img {
        width: 100%;
        height: 100%;
        max-width: 663px;
      }
    }

    .text-section {
      margin: 30px 0 57px;
      max-width: 499px;
      width: 100%;

      .btn-started {
        border-radius: 16px;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .home-empowered {
      .text-section {
        max-width: 100%;
      }

      .container {
        flex-wrap: wrap-reverse;
        text-align: center;
      }
    }
  }
</style>