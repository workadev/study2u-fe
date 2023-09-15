<template>
  <div class="home-mentor">
    <v-container class="py-0 d-flex flex-column align-center">
      <h3 class="bold-h3">
        OUR PROFESSIONAL MENTORS
      </h3>
      <h6 class="regular-h6 my-10">
        Connect with a vibrant community of students, mentors, and industry professionals. Engage in meaningful discussions, collaborate on projects, and build lifelong connections. Study2U is your gateway to networking opportunities and a support system that will inspire you to reach new heights.
      </h6>
      <div class="wrap-list">
        <div class="item-list" v-for="(item, index) in 3" :key="index">
          <h1 class="wrap-img bold-h1" :style="{background: randomCode()}">
            N
          </h1>
          <h6 class="bold-h6 mt-7">Name</h6>
          <h6 class="regular-h6 mt-2">Institution</h6>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.randomCode()
  },
  methods: {
    randomCode() {
      let getColor = this.resourceColor[Math.floor(Math.random() * this.resourceColor.length)];
      return getColor
    },
  },
}
</script>

<style lang="scss">
  .home-mentor {
    background: #F3F3F3;
    padding: 52px 0;

    .wrap-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .item-list {
        display: flex;
        flex-flow: column;
        align-items: center;
        width: calc(100% / 3 - 32px);
        margin: 16px;

        .wrap-img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12em;
          color: #fff;
        }
      }
    }
  }

  @media screen and(max-width: 800px) {
    .home-mentor {
      .wrap-list {
        .item-list {
          width: calc(100% / 2 - 32px);
        }
      }
    }
  }
  
  @media screen and(max-width: 700px) {
    .home-mentor {
      .wrap-list {
        .item-list {
          width: 100%;
        }
      }
    }
  }
</style>