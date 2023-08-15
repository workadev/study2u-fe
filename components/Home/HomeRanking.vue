<template>
  <div class="home-ranking pt-13 pb-10">
    <v-container class="py-0">
      <h5 class="semibold-h5 text-center mb-7">
        World Institution Rankings by Subject 2023: <b>Engineering & Technology</b>
      </h5>
      <div class="wrap-category">
        <v-btn 
          v-for="(item, index) in categoryList" 
          :key="index"
          class="btn-lg item-category"
          elevation
        >
          {{ item.name }}
        </v-btn>
        <v-btn 
          class="btn-lg item-category"
          elevation
        >
          More Subject <img class="ml-2" width="22" height="22" src="@/assets/icons/arrow-small-right.svg" alt="arrow-small-right">
        </v-btn>
      </div>
      <div class="mt-7 result-category">
        <CardUniversityRanking 
          v-for="(item, index) in resultList" 
          :key="index" 
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
      categoryList: [
        { name: "Agriculture" },
        { name: "Arts" },
        { name: "Architecture" },
        { name: "Automotive" },
        { name: "Aviation" },
        { name: "Business" },
        { name: "Childhood Education" },
        { name: "Design" },
        { name: "Digital" },
        { name: "Engineering & Technology" },
        { name: "Entrepreneurship" }
      ],
      resultList: [
        {
          img: require("@/assets/images/image 6.png"),
          name: "Massachusetts Institute of Technology (MIT)",
          location: "Cambridge, United States",
          reputation: "96.3"
        },
        {
          img: require("@/assets/images/image 9.png"),
          name: "Nanyang Technological University, Singapore (NTU Singapore)",
          location: "Singapore, Singapore",
          reputation: "96.3"
        },
        {
          img: require("@/assets/images/image 6 2.png"),
          name: "Standford University",
          location: "Standford, United States",
          reputation: "96.3"
        },
        {
          img: require("@/assets/images/image 7.png"),
          name: "University of Cambridge",
          location: "Cambridge, United Kingdom",
          reputation: "96.3"
        },
        {
          img: require("@/assets/images/image 8.png"),
          name: "University of Oxford",
          location: "Oxford, United Kingdom",
          reputation: "96.3"
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  .home-ranking {
    background: $color-lightest-grey;

    .result-category {
      background: $color-white;
      border-radius: 16px;
      padding: 20px 20px 38px;
      justify-content: center;
      display: flex;
      flex-flow: column;
      align-items: center;

      .card-university-ranking {
        margin-bottom: 12px;
      }

      .card-university-ranking:last-child {
        margin-bottom: 0px;
      }
    }

    .wrap-category {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: -6px;

      .item-category {
        border: 1px solid #0DACCB;
        background: $color-pacific-50;
        margin: 6px;
        font-weight: 600;
        border-radius: 20px;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .home-ranking {
      .result-category {
        .card-university-ranking {
          .name-university {
            width: 110px;
          }
          .info-reputation {
            max-width: calc(100% - 194px);
          }
        }
      }
    }
  }
</style>