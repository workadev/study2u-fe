<template>
  <div class="home-services">
    <v-container class="py-0 d-flex flex-column align-center">
      <h3 class="bold-h3">
        OUR SERVICES
      </h3>
      <h6 class="regular-h6 my-10">
        Connect with a vibrant community of students, mentors, and industry professionals. Engage in meaningful discussions, collaborate on projects, and build lifelong connections. Study2U is your gateway to networking opportunities and a support system that will inspire you to reach new heights.
      </h6>
      <div class="wrap-list mt-2">
        <div class="d-flex group-list">
          <div class="item-list" v-for="(item, index) in 3" :key="index">
            <img src="@/assets/images/Rectangle 75.png">
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .home-services {
    background: #F3F3F3;
    padding: 52px 0;

    .wrap-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .group-list {
        flex-wrap: wrap;
        justify-content: center;
      }

      .item-list {
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: 11px;

        img {
          width: 269px;
          height: 326px;
        }
      }
    }
  }
</style>