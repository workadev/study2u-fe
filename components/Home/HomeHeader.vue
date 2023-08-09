<template>
  <div class="home-header">
    <v-container class="py-0">
      <div class="wrap-content">
        <div style="z-index: 1;">
          <h3 class="semibold-h3">
            Bridging Gaps, Empowering Futures
          </h3>
          <div class="regular-subtitle my-4">
            Our mission is to empower you with the knowledge, resources and opportunities to unlock that potential and achieve greatness.
          </div>
          <v-btn class="btn-lg btn-primary" elevation>
            Take The First Step
          </v-btn>
          <div class="mt-10">
            <div class="semibold-title">
              Affiliated with an educational institution 
            </div>
            <div class="group-img d-flex flex-wrap">
              <img src="@/assets/images/icon-inst.png">
              <img src="@/assets/images/icon-inst 2.png">
              <img src="@/assets/images/icon-inst 3.png">
              <img src="@/assets/images/icon-inst 4.png">
              <img src="@/assets/images/icon-inst 5.png">
              <img src="@/assets/images/icon-inst 6.png">
            </div>
          </div>
        </div>
        <img class="img-user-study" src="@/assets/images/user-study.svg" alt="user-study">
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .home-header {
    background-image: url("@/assets/images/background/bg-header.svg");
    background-size: cover;
    padding: 89.5px 0;
    
    .wrap-content {
      position: relative;
      display: flex;
      align-items: center;
    }

    .img-user-study {
      position: absolute;
      right: 0px;
    }


    .group-img {
      img {
        border-radius: 8px;
        width: 130px;
        height: 55px;
        margin-right: 8px;
        margin-top: 8px;
      }

      img:last-child {
        margin-right: 0px;
      }
    }

    h3,
    .regular-subtitle,
    .semibold-title {
      color: $color-white;
      max-width: 632px;
    }
  }

  @media screen and(max-width: 700px) {
    .home-header {
      .group-img {
        overflow: auto;
        width: 100px;
        min-width: calc(100% + 24px);
        flex-wrap: nowrap !important;
        margin: 0 -12px;

        img:first-child {
          margin-left: 8px;
        }

        img:last-child {
          margin-right: 8px;
        }
      }

      .group-img::-webkit-scrollbar {
        display: none;
      }

      .img-user-study {
        display: none;
      }
    }
  }
</style>