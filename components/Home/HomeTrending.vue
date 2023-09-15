<template>
  <div class="home-trending">
    <v-container>
      <h3 class="bold-h3">EDUCATION AFFILIATES</h3>
      <div class="group-item">
        <div v-for="(item, index) in affiliateList" :key="index" class="item">
          <img :src="item.img">
          <div class="title-name mt-2">{{ item.name }}</div>
          <div class="type">{{ item.type }}</div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      affiliateList: [
        {
          img: require("@/assets/images/ea-inst-logo-admal 1.png"),
          name: "ADMAL Aviation College",
          type: "College"
        },
        {
          img: require("@/assets/images/BACedu_logofav2 1.png"),
          name: "Brickfields Asia College",
          type: "College"
        },
        {
          img: require("@/assets/images/logo apu 1.png"),
          name: "Asia Pacific University of Technology & Innovation",
          type: "University"
        },
        {
          img: require("@/assets/images/Limkokwing_University_resized_corporate_logo 1.png"),
          name: "LIMKOKWING University",
          type: "University"
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  .home-trending {
    padding: 88px 0 59px;

    .group-item {
      display: flex;
      justify-content: space-evenly;
      margin-top: 29px;
      margin: 19px -10px -10px;

      .item {
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: 10px;
        width: calc(100% / 4 - 15px);

        img {
          height: 118px;
          object-fit: none;
        }

        .type {
          font-size: 14px;
        }
  
        .title-name {
          font-weight: 700;
          text-align: center;
        }
      }

      .item:last-child {
        margin-right: 0px;
      }
    }

    .bold-h3 {
      text-align: center;
    }
  }

  @media screen and(max-width: 700px) {
    .home-trending {
      .group-item {
        flex-wrap: wrap;
        
        .item {
          width: 197px;
        }
      }
    }
  }
</style>