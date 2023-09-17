<template>
  <div class="who-we-are-header">
    <v-container class="py-0 d-flex justify-space-between">
      <div class="text-header">
        <h1 class="bold-h1">BRIDGING GAPS<br>EMPOWERING FUTURES</h1>
        <h6 class="mt-4 mb-0 regular-h6">
          Our mission is to empower you with the knowledge, resources and opportunities to unlock that potential and achieve greatness!
        </h6>
      </div>
      <div class="wrap-img relative">
        <img src="@/assets/images/rudal_01.png">
        <img class="img-2" src="@/assets/images/rudal_02.png">
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .who-we-are-header {
    .container {
      background-position: right bottom;
      height: 470px;
      display: flex;
      align-items: center;

      .wrap-img {
        width: 326px;
        min-width: 326px;

        img {
          width: 100%;
        }

        .img-2 {
          position: absolute;
          right: 0px;
          bottom: 0px;
          margin-bottom: -105px;
          margin-right: 0px;
          width: 100%;
        }
      }

      .text-header {
        color: #222222;
        max-width: 660px;

        .regular-h6 {
          max-width: 497px;
        }

        .bold-h1 {
          line-height: 82.82px;
        }
      }
    }
    
  }

  @media screen and(max-width: 1263px) {
    .who-we-are-header {
      .container {
        .wrap-img {
          .img-2 {
            // margin-bottom: -93px;
          }
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .who-we-are-header {
      .container {
        .wrap-img {
          display: none;
        }

        .text-header {
          max-width: 100%;
        }
      }
    }
  }
</style>