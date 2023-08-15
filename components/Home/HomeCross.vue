<template>
  <div class="home-cross py-13">
    <v-container class="py-0">
      <h5 class="semibold-h5 text-center mb-12">
        Cross-Disciplinary Expert: Connecting Knowledge for Excellence
      </h5>
      <div 
        v-for="(item, index) in listContent" 
        :key="index" 
        class="d-flex justify-center"
        :class="{
          'mb-14': listContent.length -1 != index,
          'mb-2': listContent.length -1 == index
        }"
      >
        <div 
          class="wrap-content d-flex justify-space-between align-center mx-4"
          :class="{'flex-row-reverse': item.reverse}"
        >
          <img class="mr-2" :src="item.img" :alt="`img-content${index}`">
          <div class="d-flex flex-column wrap-text-content">
            <h6 class="bold-h6">
              {{ item.title }}
            </h6>
            <div class="regular-subtitle mt-1">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listContent: [
        {
          title: "Discover Your Path to Success",
          desc: "Our mission is to empower you with the knowledge, resources and opportunities to unlock that potential and achieve greatness",
          img: require("@/assets/images/walk-student.svg"),
          reverse: false
        },
        {
          title: "Connect and engage",
          desc: "Connect with a vibrant community of students, mentors, and industry professionals. Engage in meaningful discussions, collaborate on projects, and build lifelong connections. Study2U is your gateway to networking opportunities and a support system that will inspire you to reach new heights.",
          img: require("@/assets/images/students.svg"),
          reverse: true
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  .home-cross {
    background-image: url("@/assets/images/background/bg-affiliate.svg");
    background-size: cover;

    .wrap-content {
      width: 100%;
      max-width: 1032px;

      .wrap-text-content {
        max-width: 590px;
      }
    }

    img {
      width: 290px;
      height: 306px;
    }
  }

  @media screen and(max-width: 700px) {
    .home-cross {
      .mb-14 {
        margin-bottom: 24px !important;
      }

      .mb-12 {
        margin-bottom: 28px !important;
      }

      .wrap-content {
        flex-flow: column !important;
        margin: 0px !important;

        .wrap-text-content {
          margin-top: 28px;
        }
      }
    }
  }
</style>