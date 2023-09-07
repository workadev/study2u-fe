<template>
  <div class="home-futures py-10">
    <v-container class="py-0 d-flex justify-space-between align-center">
      <v-btn icon class="mr-13 btn-arrow">
        <img src="@/assets/icons/grey-button-arrow-circle.svg">
      </v-btn>
      <div class="item-future">
        <div class="wrap-img">
          <div class="d-flex flex-column group-circle">
            <img width="21" src="@/assets/images/Ellipse 5.png">
            <img width="47" class="mt-2" src="@/assets/images/Ellipse 5.png">
          </div>
          <div class="img-future">
            <img src="@/assets/images/Mask group.png">
            <img class="img-pencil" src="@/assets/images/Mask group 2.png">
          </div>
        </div>
        <div class="future-text">
          <div class="future-title">BRIDGING GAPS/EMPOWERING FUTURES</div>
          <p class="mb-0 mt-4">
            Our mission is to empower you with the knowledge, resources and opportunities to unlock that potential and achieve greatness!
          </p>
        </div>
      </div>
      <v-btn icon class="ml-13 btn-arrow">
        <img src="@/assets/icons/pink-button-arrow-circle.svg">
      </v-btn>
    </v-container>
  </div>
</template>

<style lang="scss">
  .home-futures {
    background: #F3F3F3;

    .btn-arrow {
      height: auto;
      width: auto;
    }

    .item-future {
      display: flex;
      align-items: center;
      width: inherit;
      justify-content: space-between;
      max-width: 890px;

      .wrap-img {
        position: relative;
        display: flex;
        place-items: flex-end;

        .group-circle {
          position: absolute;
          align-items: center;
          margin-left: -1.5em;
          margin-bottom: -2.5em;
        }

        .img-future {
          margin-right: 20px;
          display: flex;
          border: 10px solid #D9D9D9;
          border-radius: 50%;
          position: relative;

          .img-pencil {
            position: absolute;
            bottom: 0;
            margin-bottom: -99px;
            margin-left: 85px;
          }
        }
      }

      
      .future-text {
        max-width: 497px;

        p {
          font-size: 20px;
          line-height: 25.88px;
        }

        .future-title {
          font-size: 36px;
          font-weight: 700;
          line-height: 46.58px;
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .home-futures {
      
    }
  }
</style>