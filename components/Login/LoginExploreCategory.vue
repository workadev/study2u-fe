<template>
  <div class="login-explore-category">
    <v-container class="py-13 d-flex align-center">
      <h4 class="regular-h4 mr-4">
        Explore our application to discover suitable job opportunities or internship positions for you across renowned universities and colleges.
      </h4>
      <div class="d-flex flex-wrap group-category justify-center">
        <div v-for="(item, index) in listCategory" :key="index" class="category semibold-subtitle">
          {{ item }}
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listCategory: [
        "Agriculture",
        "Arts",
        "Architecture",
        "Automotive",
        "Aviation",
        "Business",
        "Childhood Education",
        "Design",
        "Digital",
        "Engineering & Technology",
        "Entrepreneurship"
      ]
    }
  },
}
</script>

<style lang="scss">
  .login-explore-category {
    background-image: url("@/assets/images/background/bg-affiliate.svg");
    background-size: cover;

    .group-category {
      margin: -6px;
      
      .category {
        background: $color-pacific-50;
        border-radius: 20px;
        padding: 12px 16px;
        margin: 6px;
      }
    }


    h4 {
      max-width: 669px;
    }
  }

  @media screen and(max-width: 700px) {
    .login-explore-category {
      .container {
        flex-flow: column;
      }

      .mr-4 {
        margin-right: 0px !important;
      }
      
      h4 {
        margin-bottom: 28px;
        text-align: center;
      }
    }
  }
</style>