<template>
  <div class="dashboard-exceptional">
    <div class="title-exceptional">
      <h5 class="semibold-h5">
        Becoming Exceptional with Seasoned Mentors by Your Side
      </h5>
    </div>
    <div class="wrap-card">
      <v-btn text class="px-0 align-self-end" height="fit-content">
        See More <img class="ml-2" src="@/assets/icons/arrow-small-right.svg">
      </v-btn>
      <div class="mt-4 group-card-mentors">
        <CardMentor 
          v-for="(item, index) in listMentor" :key="index"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listMentor: [
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
        {
          img: require("@/assets/images/Rectangle 6322.png"),
          title: "Digital Marketing Introduction for Beginner",
          name: "Intan Salamina",
          time: "110 min",
          capter: "6 Capter"
        },
        {
          img: require("@/assets/images/Rectangle 6322.png"),
          title: "How to Become a Product Manager in 2023",
          name: "Career Foundary",
          time: "110 min",
          capter: "6 Capter"
        },
        {
          img: require("@/assets/images/Rectangle 6322.png"),
          title: "Product Management : Fullstack Intensive Bootcamp",
          name: "Greece L.",
          time: "110 min",
          capter: "6 Capter"
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  .dashboard-exceptional {
    height: 330px;
    position: relative;
    display: flex;

    .wrap-card {
      padding: 17px 0 0 0;
      width: calc(100% - 186px);
      display: flex;
      flex-flow: column;

      .group-card-mentors {
        display: flex;
        overflow: auto;
        height: 100%;

        .card-mentor {
          margin: 0 6px;
        }

        .card-mentor:first-child {
          margin-left: 12px;
        }

        .card-mentor:last-child {
          margin-right: 12px;
        }
      }
    }

    .title-exceptional {
      width: 100%;
      max-width: 186px;
      border-radius: 8px;
      background-image: url("@/assets/images/background/bg-discover.svg");
      background-size: cover;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 20px;
    }
  }
</style>