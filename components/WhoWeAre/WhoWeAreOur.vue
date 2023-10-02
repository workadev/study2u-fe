<template>
  <div class="who-we-are-our">
    <div 
      v-for="(item, index) in listOur" 
      :key="index"
      :style="{background: item.background}"
    >
      <v-container class="py-0 pt-13">
        <div
          class="wrap-item"
          :class="{reverse: item.reverse}"
        >
          <img width="350" height="350" :src="item.img">
          <div>
            <h5 class="bold-h5 mb-4">
              {{ item.name }}
            </h5>
            <h6 class="regular-h6">
              {{ item.desc }}
            </h6>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listOur: [
        {
          img: require("@/assets/images/Group 52.png"),
          name: "OUR MISSION",
          desc: "Our mission at Study2U is to bridge the gaps in education and connect students with the resources, opportunities, and guidance they need to shape their futures. We aim to create a supportive and inclusive community that encourages personal growth, nurtures aspirations, and empowers students to become the leaders and change-makers of tomorrow.",
          reverse: false
        },
        {
          img: require("@/assets/images/Group 50.png"),
          name: "OUR STORY",
          desc: "At Study2U, our vision is to empower every student, regardless of background or circumstances, to unlock their full potential and excel in their educational journey. We envision a world where educational opportunities are accessible to all, where connections are fostered, and where dreams are realised.",
          reverse: true,
          background: "#fff"
        },
        {
          img: require("@/assets/images/Group 51.png"),
          name: "OUR PRINCIPLES",
          desc: "Our mission at Study2U is to bridge the gaps in education and connect students with the resources, opportunities, and guidance they need to shape their futures. We aim to create a supportive and inclusive community that encourages personal growth, nurtures aspirations, and empowers students to become the leaders and change-makers of tomorrow.",
          reverse: false
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  .who-we-are-our {
    background: #F3F3F3;

    .wrap-item {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 49px;

      img {
        margin-right: 94px;
        object-fit: contain;
        width: auto;
      }
    }

    .reverse {
      flex-direction: row-reverse;

      img {
        margin-left: 94px;
        margin-right: 0px;
      }
    }

    .wrap-item:first-child {
      margin-top: 0px;
    }
  }

  @media screen and(max-width: 700px) {
    .who-we-are-our {
      .wrap-item {
        flex-flow: column;

        img {
          margin: 0 0 20px;
        }
      }
    }
  }
</style>