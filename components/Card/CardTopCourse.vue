<template>
  <div class="card-top-course">
    <div class="wrap-list">
      <div class="header-title mb-6">
        <div class="regular-title">
          Top course
        </div>
        <img width="16" height="16" src="@/assets/icons/Information.svg">
      </div>
      <div class="group-list">
        <CardMentor 
          v-for="(item, index) in listCourse" :key="index" 
          :data="item"
        />
      </div>
    </div>
    <v-btn text block height="42" class="btn-more">
      More Course <img width="18" height="18" class="ml-2" src="@/assets/icons/arrow-small-right.svg">
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listCourse: [
        {
          img: require("@/assets/images/Rectangle 6322.png"),
          title: "Build RESTful API with Node JS & Express JS",
          name: "Felix Zenger",
          time: "110 min",
          capter: "6 Capter"
        },
        {
          img: require("@/assets/images/Rectangle 6322.png"),
          title: "Introduction to Tableau",
          name: "Bayuzen Smith",
          time: "110 min",
          capter: "6 Capter"
        },
        {
          img: require("@/assets/images/Rectangle 6322.png"),
          title: "Intro to UI/UX | User Interface for Beginner",
          name: "Ramendra",
          time: "110 min",
          capter: "6 Capter"
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  .card-top-course {
    border: 1px solid $color-light-grey;
    border-radius: 8px;
    background: $color-white;
    width: 100%;

    .btn-more {
      border-radius: 0 0 8px 8px;
      border-top: 1px solid #EEF1F4;
    }
    
    .wrap-list {
      padding: 16px 12px 4px;

      .group-list {
        .card-mentor {
          max-width: 100%;
          max-height: none;
          margin-bottom: 8px;

          .caption-semibold {
            text-align: left;
          }

          .text-title {
            text-align: left;
          }
        }
      }

      .header-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>