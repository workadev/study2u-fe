<template>
  <div class="home-ready-leap">
    <v-container class="py-0 d-flex justify-space-between">
      <div class="text-section mr-5">
        <h3 class="bold-h3">
          READY TO TAKE THE LEAP?
        </h3>
        <h6 class="mt-9 regular-h6">
          Join Study2U today and embark on an exciting educational journey. It's time to unleash your full potential, ignite your passions, and shape a future that aligns with your dreams. Let Study2U be your trusted companion on this incredible adventure!
        </h6>
      </div>
      <div class="d-flex wrap-img">
        <img src="@/assets/images/pexels-ihsan-adityawarman-2480516-removebg-preview 1.png">
        <v-btn
          color="#09B6DE"
          class="btn-action"
          dark
          elevation
          height="58"
          width="269"
          to="/register"
        >
          TAKE THE FIRST STEP
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .home-ready-leap {
    padding-top: 72px;

    .container {
      .text-section {
        margin: 30px 0 93px;
        max-width: 496px;
        width: 100%;
      }

      .wrap-img {
        min-width: 50%;
        display: flex;
        flex-direction: column-reverse;
        position: relative;
        align-items: center;

        .btn-action {
          border-radius: 16px;
          font-size: 20px;
          font-weight: 700;
          position: absolute;
          bottom: 0px;
          margin-bottom: 33px;
        }

        img {
          width: 100%;
          height: 100%;
          max-width: 448px;
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .home-ready-leap {
      .text-section {
        max-width: 100%;
      }

      .container {
        flex-wrap: wrap;
        text-align: center;

        .text-section {
          max-width: 100%;
          margin-bottom: 57px;
        }

        .wrap-img {
          width: 100%;
        }
      }
    }
  }
</style>