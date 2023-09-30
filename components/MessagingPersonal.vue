<template>
  <div
    class="messaging-personal"
    :class="{'active-personal': showMessage}"
    :style="{height: showMessage ? activeHeight : '60px'}"
  >
    <div class="messaging-header">
      <div class="d-flex align-center pointer" @click="showMessage = !showMessage">
        <div class="wrap-avatar" :style="{background: bgUserMessaging}">
          <img v-if="dataMessage.avatar" :src="dataMessage.avatar">
          <h5 v-else class="bold-h5">
            {{ dataMessage.first_name.charAt(0).toUpperCase() }}
          </h5>
        </div>
        <h6 class="bold-h6">
          {{ dataMessage.first_name }} {{ dataMessage.last_name }}
        </h6>
      </div>
      <v-icon
        :size="showMessage ? 30 : 40"
        color="#000"
        @click="clickIcon()"
      >
        {{ showMessage ? "mdi-close" : "mdi-chevron-up" }}
      </v-icon>
    </div>
    <div class="messaging-content-personal">
      <div class="item-message pt-0">
        <div class="w-100">
          <div class="d-flex wrap-message pb-0">
            <div class="wrap-avatar" :style="{background: bgUserMessaging}">
              <img v-if="dataMessage.avatar" :src="dataMessage.avatar">
              <h5 v-else class="bold-h5">
                {{ dataMessage.first_name.charAt(0).toUpperCase() }}
              </h5>
            </div>
            <div class="text-message">
              <b>{{ dataMessage.first_name }}</b>
              <div class="regular-title"> 
                {{ dataMessage.title }}
              </div>
            </div>
          </div>
          <div class="bold-title text-center mt-5 pb-2 mb-1 title-date">
            {{ dataMessage.date }}
          </div>
        </div>
      </div>
      <!-- <div class="wrap-overflow">
        <div 
          v-for="(item, index) in listTemp" :key="index"
          class="item-message"
          :class="{'mb-1': index == listTemp.length - 1}"
        >
          <div class="w-100 d-flex justify-space-between">
            <div class="d-flex wrap-message">
              <div class="wrap-avatar" :style="{background: bgUserMessaging}">
                <img v-if="item.avatar" :src="item.avatar">
                <h5 v-else class="bold-h5">
                  {{ item.name.charAt(0).toUpperCase() }}
                </h5>
              </div>
              <div class="text-message">
                <b>{{ item.name }}</b>
                <pre class="regular-title">
{{ item.message }}
</pre>
              </div>
            </div>
            <div class="regular-subtitle mt-1">
              {{ item.date }}
            </div>
          </div>
        </div>
      </div> -->
      <div class="send-message">
        <textarea placeholder="Write a message" v-model="message" />
        <div class="d-flex justify-space-between mt-3">
          <div class="d-flex align-center">
            <!-- <v-menu 
              v-model="menuEmojis"
              transition="slide-y-transition"
              origin="center center"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  text
                  height="fit-content"
                  min-width="fit-content"
                  class="px-0 mr-2"
                >
                  <img src="@/assets/icons/happy.svg">
                </v-btn>
              </template>
              <v-card>
                <v-card-subtitle>
                  Emojis
                </v-card-subtitle>
              </v-card>
            </v-menu> -->
            <div class="relative d-flex">
              <v-btn
                text
                height="fit-content"
                min-width="fit-content"
                class="px-0 mr-2"
              >
                <img src="@/assets/icons/happy.svg">
              </v-btn>
              <BaseEmojis 
                :show="showEmojis"
                @clickOutside="showEmojis = false"
              />
            </div>
            <v-btn
              text
              height="fit-content"
              min-width="fit-content"
              class="px-0"
            >
              <img src="@/assets/icons/image.svg">
            </v-btn>
          </div>
          <v-btn
            height="30"
            width="88"
            elevation
            rounded
            color="#FF5ABE"
            class="btn-send"
            :disabled="!message"
          >
            SEND
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "dataMessage"],
  data() {
    return {
      listTemp: [],
      searchMessage: "",
      showMessage: false,
      activeHeight: "0px",
      bgUserMessaging: "",
      message: "",
      showEmojis: false
    }
  },
  watch: {
    searchMessage(newVal) {
      let getSearch = this.dataMessage.message.filter(str => {
        return str.message.toLowerCase().search(newVal.toLowerCase()) != -1
      })
      this.listTemp = getSearch
      setTimeout(() => {
        this.getActiveHeight()
      }, 1);
    },
    showMessage(newVal) {
      if (newVal) {
        this.getActiveHeight()
      } else {
        this.activeHeight = "0px"
      }
    },
  },
  mounted() {
    // this.listTemp = [...this.dataMessage.message]
    this.bgUserMessaging = this.randomColor()
    setTimeout(() => {
      this.showMessage = true
    }, 1);
  },
  methods: {
    getActiveHeight() {
      this.activeHeight = `${document.getElementsByClassName("messaging-content-personal")[0].clientHeight + 60}px`
    },
    clickIcon() {
      if (this.showMessage) {
        this.$emit("closeMessage", this.dataMessage)
      } else {
        this.showMessage = !this.showMessage
      }
    }
  },
}
</script>

<style lang="scss">
  .messaging-personal {
    background: #F4F4F4;
    max-width: 400px;
    min-width: 400px;
    transition: all .2s;
    align-self: flex-end;
    border: 1px solid;
    margin-right: 20px;

    .messaging-content-personal {
      background: #F4F4F4;
      padding: 21px 0 0;

      .send-message {
        background: #D9D9D9;
        padding: 18px 30px 20px;
        display: flex;
        flex-flow: column;

        .btn-send {
          color: #fff;
          font-weight: 700;
        }

        textarea {
          background: #fff;
          resize: none;
          width: 100%;
          height: 100px;
          outline: none;
          padding: 12px 14px;
        }
      }

      .wrap-overflow {
        padding-bottom: 14px;
        max-height: 350px;
        overflow: auto;
      }
      
      .item-message {
        display: flex;
        padding: 17px 12px 0;
        justify-content: space-between;
        transition: .3s;

        .title-date {
          border-bottom: 2px solid #E7E7E7;
        }

        .regular-title {
          min-width: fit-content;
        }

        pre {
          white-space: break-spaces;
          font-family: 'PTSans';
        }

        .wrap-message {
          margin-right: 8px;

          .wrap-avatar {
            margin-right: 12px;
          }

          .text-message {
            font-size: 18px;
            max-width: 254.74px;
            margin-top: 4px;
          }
  
          img {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            object-fit: cover;
          }
        }
      }
    }

    .v-icon {
      cursor: pointer;
    }

    .v-icon.v-icon::after {
      display: none;
    }
    
    .messaging-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 20px;
      height: 60px;
      background: #fff;
    }

    .wrap-avatar {
      border-radius: 50%;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 30px;

      h5 {
        color: #fff;
      }
      
      img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .messaging-personal {
      position: absolute;
      right: 0px;
      bottom: 0px;
      z-index: 1;
      max-width: 100%;
      margin-right: 0px;
      width: 100%;

      .messaging-content-personal {
        height: 100%;

        .wrap-overflow {
          height: calc(100% - 352px);
          max-height: none;
        }
      }
    }

    .active-personal {
      max-height: 100%;
      height: 100vh !important;
    }
  }
</style>