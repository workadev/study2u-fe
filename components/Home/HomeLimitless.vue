<template>
  <div class="home-limitless">
    <v-container class="py-0">
      <h5 class="semibold-h5 text-center">
        Study2U: Your Gateway to Limitless Learning!
      </h5>
      <div class="wrap-list">
        <CardLimitless 
          v-for="(item, index) in list" :key="index"
          :data="item"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Ready to take leap? take the first step",
          desc: "Exciting educational journey. It's time to unleash your full potential, ignite your passions, and shape a future that aligns with your dreams.",
          img: require("@/assets/images/Frame 17360.png")
        },
        {
          title: "Ready to empower future generations?",
          desc: "Take this opportunity to make lasting impact on students lives, contribute to society and shape the future of education.",
          img: require("@/assets/images/Frame 17360 2.png")
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  .home-limitless {
    background: $color-lightest-grey;
    padding: 52px 0;
    
    .wrap-list {
      margin: 32px -8px -8px;
      display: flex;
    }

    .card-limitless {
      margin: 8px;
      width: calc(100% / 2);
    }
  }

  @media screen and(max-width: 882px) {
    .home-limitless {
      .card-limitless {
        width: 100%;  
        margin: 8px -0;
      }

      .wrap-list {
        flex-flow: column;
        margin: 32px 0 -8px;
      }
    }
  }
</style>