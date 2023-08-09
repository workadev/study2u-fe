<template>
  <div class="home-member-say">
    <v-container class="py-0">
      <div class="wrap-content">
        <h5 class="semibold-h5 text-center mb-10">
          Here’s what our members have to say!
        </h5>
        <div class="wrap-carousel">
          <client-only>
            <carousel v-bind="options">
              <slide v-for="(item, index) in commentList" :key="index">
                <CardMemberSay :data="item" />
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        perPage: 2.5,
        paginationEnabled: true
      },
      commentList: [
        {
          name: "Sarah J.",
          position: "Future College Student",
          comment: "Thanks to this incredible app, finding my dream college was a breeze! The user-friendly interface and comprehensive search options made the process seamless. I discovered a university that perfectly aligned with my interests and aspirations. I couldn't be happier with the results!",
          img: require("@/assets/images/Ellipse 1.png")
        },
        {
          name: "Lisa M.",
          position: "Working Adult Learner",
          comment: "This app was a lifesaver! As a busy working professional, I needed a platform that provided flexible learning options for higher education. This app allowed me to find online courses and programs that fit my schedule and career goals. It opened doors to educational opportunities that I didn't think were possible, and I couldn't be more satisfied!",
          img: require("@/assets/images/Ellipse 1 2.png")
        },
        {
          name: "David P.",
          position: "Prospective International Student",
          comment: "I can't express how grateful I am for this app! It helped me explore international universities and compare different programs effortlessly. The interactive virtual tours and alumni testimonials gave me a realistic feel of each campus, allowing me to make an informed choice. It truly made my college search experience enjoyable and stress-free.",
          img: require("@/assets/images/Ellipse 1 3.png")
        },
        {
          name: "Sarah J.",
          position: "Future College Student",
          comment: "Thanks to this incredible app, finding my dream college was a breeze! The user-friendly interface and comprehensive search options made the process seamless. I discovered a university that perfectly aligned with my interests and aspirations. I couldn't be happier with the results!",
          img: require("@/assets/images/Ellipse 1.png")
        },
        {
          name: "Lisa M.",
          position: "Working Adult Learner",
          comment: "This app was a lifesaver! As a busy working professional, I needed a platform that provided flexible learning options for higher education. This app allowed me to find online courses and programs that fit my schedule and career goals. It opened doors to educational opportunities that I didn't think were possible, and I couldn't be more satisfied!",
          img: require("@/assets/images/Ellipse 1 2.png")
        },
        {
          name: "David P.",
          position: "Prospective International Student",
          comment: "I can't express how grateful I am for this app! It helped me explore international universities and compare different programs effortlessly. The interactive virtual tours and alumni testimonials gave me a realistic feel of each campus, allowing me to make an informed choice. It truly made my college search experience enjoyable and stress-free.",
          img: require("@/assets/images/Ellipse 1 3.png")
        },
        {
          name: "Sarah J.",
          position: "Future College Student",
          comment: "Thanks to this incredible app, finding my dream college was a breeze! The user-friendly interface and comprehensive search options made the process seamless. I discovered a university that perfectly aligned with my interests and aspirations. I couldn't be happier with the results!",
          img: require("@/assets/images/Ellipse 1.png")
        },
        {
          name: "Lisa M.",
          position: "Working Adult Learner",
          comment: "This app was a lifesaver! As a busy working professional, I needed a platform that provided flexible learning options for higher education. This app allowed me to find online courses and programs that fit my schedule and career goals. It opened doors to educational opportunities that I didn't think were possible, and I couldn't be more satisfied!",
          img: require("@/assets/images/Ellipse 1 2.png")
        },
        {
          name: "David P.",
          position: "Prospective International Student",
          comment: "I can't express how grateful I am for this app! It helped me explore international universities and compare different programs effortlessly. The interactive virtual tours and alumni testimonials gave me a realistic feel of each campus, allowing me to make an informed choice. It truly made my college search experience enjoyable and stress-free.",
          img: require("@/assets/images/Ellipse 1 3.png")
        }
      ]
    }
  },
  computed: {
    screenWidth() {
      return window.innerWidth
    }
  },
  watch: {
    screenWidth() {
      this.setPerPageCarousel()
    }
  },
  mounted() {
    this.setPerPageCarousel()
  },
  methods: {
    setPerPageCarousel() {
      if (this.screenWidth <= 700) {
        this.options.perPage = 1
      }
    }
  },
}
</script>

<style lang="scss">
  .home-member-say {
    background: $color-lightest-grey;

    .wrap-content {
      background-image: url("@/assets/images/background/bg-members-say.svg");
      background-size: cover;
      background-position: center;
      border-radius: 16px;
      padding: 42.5px 24px 30.5px;

      .wrap-carousel {
        margin: 0 -6px;

        .VueCarousel-dot-container {
          margin-top: 8px !important;
        }
        
        .VueCarousel-dot {
          background-color: #D9D9D9 !important;
          margin-top: 0px !important;
          padding: 4px !important;
        }

        .VueCarousel-dot--active {
          background-color: $color-pacific !important;
        }
      }

      .semibold-h5 {
        color: $color-white;
      }
    }
  }
</style>