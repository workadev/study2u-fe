<template>
  <div class="home-futures py-10">
    <v-container class="py-0">
      <div class="d-flex justify-space-between align-center">
        <v-btn icon class="mr-13 btn-arrow arrow-left" @click="clickPrev()" :disabled="itemList[0].active">
          <img v-if="itemList[0].active" src="@/assets/icons/grey-button-arrow-circle.svg">
          <img v-else style="transform: rotate(180deg);" src="@/assets/icons/pink-button-arrow-circle.svg">
        </v-btn>
        <div v-for="(item, index) in itemList" :key="index">
          <div 
            :style="{
              display: item.active ? 'flex' : 'none',
              position: item.active ? 'relative' : 'absolute'
            }" 
            :id="'item'+index" 
            class="item-future animate__animated"
          >
            <div v-if="index == 0" class="wrap-img">
              <div class="d-flex flex-column group-circle">
                <img width="21" src="@/assets/images/Ellipse 5.png">
                <img width="47" class="mt-2" src="@/assets/images/Ellipse 5.png">
              </div>
              <div class="img-future">
                <!-- <img src="@/assets/images/Mask group.png">
                <img class="img-pencil" src="@/assets/images/Mask group 2.png"> -->
              </div>
            </div>
            <div v-else class="wrap-img">
              <div class="img-future">
                <img width="247" height="247" src="">
              </div>
            </div>
            <div class="future-text">
              <h3 class="bold-h3">{{ item.name }}</h3>
              <h6 class="mb-0 mt-4 regular-h6">
                {{ item.desc }}
              </h6>
            </div>
          </div>
        </div>
        <v-btn icon class="ml-13 btn-arrow arrow-right" @click="clickNext()" :disabled="this.itemList[this.itemList.length-1].active">
          <img 
            v-if="this.itemList[this.itemList.length-1].active" 
            src="@/assets/icons/grey-button-arrow-circle.svg"
            style="transform: rotate(180deg);"
          >
          <img v-else src="@/assets/icons/pink-button-arrow-circle.svg">
        </v-btn>
      </div>
      <div class="btn-arrow-mobile">
        <v-btn icon class="btn-arrow mr-5" @click="clickPrev()" :disabled="itemList[0].active">
          <img v-if="itemList[0].active" src="@/assets/icons/grey-button-arrow-circle.svg">
          <img v-else style="transform: rotate(180deg);" src="@/assets/icons/pink-button-arrow-circle.svg">
        </v-btn>
        <v-btn icon class="btn-arrow ml-5" @click="clickNext()" :disabled="this.itemList[this.itemList.length-1].active">
          <img 
            v-if="this.itemList[this.itemList.length-1].active" 
            src="@/assets/icons/grey-button-arrow-circle.svg"
            style="transform: rotate(180deg);"
          >
          <img v-else src="@/assets/icons/pink-button-arrow-circle.svg">
        </v-btn>
      </div>
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
        document.getElementById(`item${index}`).classList.remove("animate__fadeOutLeftBig")
        this.itemList[index+1].active = true
        document.getElementById(`item${index+1}`).classList.add("animate__fadeInRightBig")
        setTimeout(() => {
          document.getElementById(`item${index+1}`).classList.remove("animate__fadeInRightBig")
        }, 1000);
      }, 300);
    },
    clickPrev() {
      let index = this.itemList.findIndex(x => x.active === true);
      document.getElementById(`item${index}`).classList.add("animate__fadeOutRightBig")
      setTimeout(() => {
        this.itemList[index].active = false
        document.getElementById(`item${index}`).classList.remove("animate__fadeOutRightBig")
        this.itemList[index-1].active = true
        document.getElementById(`item${index-1}`).classList.add("animate__fadeInLeftBig")
        setTimeout(() => {
          document.getElementById(`item${index-1}`).classList.remove("animate__fadeInLeftBig")
        }, 1000);
      }, 300);
    }
  },
}
</script>

<style lang="scss">
  .home-futures {
    background: #F3F3F3;

    .btn-arrow-mobile {
      display: none;
      text-align: center;
      margin-top: 30px;
    }

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
      }
    }
  }

  @media screen and(max-width: 850px) {
    .home-futures {
      .item-future {
        flex-wrap: wrap;
        justify-content: center;

        .future-text {
          z-index: 1;
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .home-futures {
      .btn-arrow-mobile {
        display: block;
      }

      .arrow-left,
      .arrow-right {
        display: none;
      }
    }
  }
</style>