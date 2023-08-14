<template>
  <div class="dashboard">
    <v-container class="py-5 d-flex justify-center">
      <CardProfile />
      <div class="mx-4 group-feed">
        <div class="item-feed" v-for="(item, index) in listFeed" :key="index">
          <CardFeed :data="item" />
          <div v-if="index == 1" class="mt-2">
            <DashboardExceptional />
          </div>
        </div>
      </div>
      <div class="content-right">
        <CardTopUniversities />
        <CardTopCategories class="my-2" />
        <CardAds />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listFeed: [
        {
          photo: require("@/assets/images/UserPicture.png"),
          name: "Rani Chandrawati",
          position: "Senior Digital Marketing",
          time: "2w",
          desc: "Understanding the fundamental concepts of Google Ads, especially the Google Display Network. Grasping the ultimate goals of advertising strategies using the GDN.",
          url: "https://bit.ly/JH872a",
          img: require("@/assets/images/FeedImage.png")
        },
        {
          photo: require("@/assets/images/image 6 2.png"),
          name: "Innovative Product Leadership: The Emerging Chief Product Officer",
          position: "Stanford University",
          time: "2w",
          desc: "Today’s chief product officers have more responsibilities, impact, and influence than ever before. This one-week program helps prepare you for this highly demanding and desirable role. Discover how customer insights can inform product development. Learn how to communicate with purpose and exert influence without authority. And develop leadership skills that motivate cross-functional teams to drive product innovation.",
          url: "",
          img: require("@/assets/images/FeedImage 2.png")
        },
        {
          photo: require("@/assets/images/UserPicture 2.png"),
          name: "Adrey K.",
          position: "Product Manager at Flip.id",
          time: "4h",
          desc: "I've come to realize that conducting live interviews with users is more challenging than take-home tests, especially for Product Manager positions. My experiences have taught me that I've faced more challenges in live interviews compared to take-home tests. Here are some tips I'd like to share so that you can perform even better than I did:🔥 Involve the InterviewerInstead of surprising the interviewer with a solution, engage them in your thought process. Seek their opinion, and ensure you understand the problem completely by asking clarifying questions.",
          url: "",
          img: require("@/assets/images/FeedImage 3.png")
        },
        {
          photo: require("@/assets/images/UserPicture 3.png"),
          name: "Boston Virtual Open House | Undergraduate",
          position: "Hult International Business School",
          time: "2w",
          desc: "Don’t you love going to someone’s house for the first time? Wondering what the rooms will look like, what furniture they’ll have, and what vibe you’ll get from the people at home. Cure your curiosity by attending Hult's Virtual Open House in Boston. You’ll get to chat to the people who’ve already made Hult their home, ask them about their experiences, and connect with other students thinking about studying at Hult",
          url: "https://bit.ly/JH872a",
          img: require("@/assets/images/FeedImage 3.png")
        },
        {
          photo: require("@/assets/images/UserPicture 3.png"),
          name: "How to do a Research Project: 6 Steps",
          position: "Zain Nabi",
          time: "2w",
          desc: "A year ago I had this crazy idea of experimenting with the final semester of my two-year course. Being an international student in Australia, doing two postgraduate degrees and working at the same time was apparently not enough for me. So instead of choosing to do a professional project and finishing my degree, I decided to do a research project.",
          url: "",
          img: require("@/assets/images/FeedImage 3.png")
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .dashboard {
    background: $color-lightest-grey;

    .content-right {
      width: 100%;
      max-width: 270px;
    }

    .group-feed {
      width: 100%;
      max-width: 602px;
      display: flex;
      flex-flow: column;

      .item-feed {
        margin-bottom: 8px;
      }

      .item-feed:last-child {
        margin-bottom: 0px;
      }
    }
  }
</style>