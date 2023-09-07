<template>
  <div class="home-futures py-10">
    <v-container class="py-0 d-flex justify-space-between align-center">
      <v-btn icon class="mr-13 btn-arrow" @click="clickPrev()" :disabled="itemList[0].active">
        <img v-if="itemList[0].active" src="@/assets/icons/grey-button-arrow-circle.svg">
        <img v-else style="transform: rotate(180deg);" src="@/assets/icons/pink-button-arrow-circle.svg">
      </v-btn>
      <div v-for="(item, index) in itemList" :key="index">
        <div v-if="item.active" :id="'item'+index" class="item-future animate__animated">
          <div v-if="index == 0" class="wrap-img">
            <div class="d-flex flex-column group-circle">
              <img width="21" src="@/assets/images/Ellipse 5.png">
              <img width="47" class="mt-2" src="@/assets/images/Ellipse 5.png">
            </div>
            <div class="img-future">
              <img src="@/assets/images/Mask group.png">
              <img class="img-pencil" src="@/assets/images/Mask group 2.png">
            </div>
          </div>
          <div v-else class="wrap-img">
            <div class="img-future">
              <img width="247" height="247" src="">
            </div>
          </div>
          <div class="future-text">
            <div class="future-title">{{ item.name }}</div>
            <p class="mb-0 mt-4">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
      <v-btn icon class="ml-13 btn-arrow" @click="clickNext()" :disabled="this.itemList[this.itemList.length-1].active">
        <img 
          v-if="this.itemList[this.itemList.length-1].active" 
          src="@/assets/icons/grey-button-arrow-circle.svg"
          style="transform: rotate(180deg);"
        >
        <img v-else src="@/assets/icons/pink-button-arrow-circle.svg">
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        {
          img: 1,
          name: "BRIDGING GAPS/EMPOWERING FUTURES",
          desc: "Our mission is to empower you with the knowledge, resources and opportunities to unlock that potential and achieve greatness!",
          active: true
        },
        {
          img: "",
          name: "CONNECT & ENGAGE",
          desc: "Connect with a vibrant community of students, mentors, and industry professionals. Engage in meaningful discussions, collaborate on projects, and build lifelong connections. Study2U is your gateway to networking opportunities and a support system that will inspire you to reach new heights",
          active: false
        },
        {
          img: "",
          name: "Ready to take THE LEAP?",
          desc: "Join Study2U today and embark on an exciting educational journey. It's time to unleash your full potential, ignite your passions, and shape a future that aligns with your dreams. Let Study2U be your trusted companion on this incredible adventure!",
          active: false
        }
      ]
    }
  },
  methods: {
    clickNext() {
      let index = this.itemList.findIndex(x => x.active === true);
      document.getElementById(`item${index}`).classList.add("animate__fadeOutLeftBig")
      setTimeout(() => {
        this.itemList[index].active = false
        setTimeout(() => {
          document.getElementById(`item${index+1}`).classList.add("animate__fadeInRightBig")
        }, 0);
        this.itemList[index+1].active = true
      }, 200);
    },
    clickPrev() {
      let index = this.itemList.findIndex(x => x.active === true);
      document.getElementById(`item${index}`).classList.add("animate__fadeOutRightBig")
      setTimeout(() => {
        this.itemList[index].active = false
        setTimeout(() => {
          document.getElementById(`item${index-1}`).classList.add("animate__fadeInLeftBig")
        }, 0);
        this.itemList[index-1].active = true
      }, 200);
    }
  },
}
</script>

<style lang="scss">
  .home-futures {
    background: #F3F3F3;

    .btn-arrow {
      height: auto;
      width: auto;
    }

    .item-future {
      display: flex;
      align-items: center;
      width: inherit;
      justify-content: space-between;
      max-width: 890px;

      .wrap-img {
        position: relative;
        display: flex;
        place-items: flex-end;

        .group-circle {
          position: absolute;
          align-items: center;
          margin-left: -1.5em;
          margin-bottom: -1.5em;
        }

        .img-future {
          margin-right: 20px;
          display: flex;
          border: 10px solid #D9D9D9;
          border-radius: 50%;
          position: relative;

          .img-pencil {
            position: absolute;
            bottom: 0;
            margin-bottom: -99px;
            margin-left: 85px;
          }
        }
      }

      
      .future-text {
        max-width: 497px;

        p {
          font-size: 20px;
          line-height: 25.88px;
        }

        .future-title {
          font-size: 36px;
          font-weight: 700;
          line-height: 46.58px;
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .home-futures {
      
    }
  }
</style>