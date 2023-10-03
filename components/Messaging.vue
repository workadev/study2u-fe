<template>
  <div
    class="messaging"
    :class="{'active-messaging': showMessage}"
    :style="{height: showMessage ? activeHeight : '60px'}"
  >
    <div class="messaging-header">
      <div class="d-flex align-center">
        <div class="wrap-avatar" :style="{background: user.bgAvatar}">
          <img v-if="user.avatar" :src="user.avatar">
          <div v-else class="regular-body">
            {{ 
              user.first_name ? user.first_name.charAt(0).toUpperCase() 
              : user.email.charAt(0).toUpperCase() 
            }}
          </div>
        </div>
        <h6 class="bold-h6">
          Messaging
        </h6>
      </div>
      <v-icon
        size="40"
        color="#000"
        @click="clickShow()"
      >
        {{ showMessage ? "mdi-chevron-down" : "mdi-chevron-up" }}
      </v-icon>
    </div>
    <div class="messaging-content">
      <div class="d-flex justify-center mb-7">
        <img class="mr-4" src="@/assets/icons/magnifying-glass.svg">
        <v-text-field 
          outlined
          hide-details
          class="message-search"
          height="49px"
          placeholder="search in messages"
          v-model="searchMessage"
        />
      </div>
      <div v-if="listTemp.length != 0" class="wrap-overflow">
        <div 
          v-for="(item, index) in listTemp" :key="index"
          class="item-message"
          :class="{
            'mb-1': index == listTemp.length - 1,
            active: item.last_message ? !item.last_message.read : ''
          }"
          @click="clickMessage(item)"
        >
          <div class="w-100 d-flex justify-space-between wrap-content">
            <div class="d-flex wrap-message">
              <div class="wrap-avatar" :style="{background: bgColor[index]}">
                <img v-if="item.user.avatar" :src="item.user.avatar">
                <h5 v-else class="bold-h5">
                  {{ 
                    item.user.first_name ? item.user.first_name.charAt(0).toUpperCase() 
                    : item.user.email.charAt(0).toUpperCase()
                  }}
                </h5>
                <div v-if="item.user.online" class="user-online ml-2" />
              </div>
              <div class="text-message">
                {{ item.user.first_name }} {{ item.user.last_name }}
                <div v-if="item.last_message" class="regular-title">
                  {{ user.id == item.last_message.user.id ? "You" : `${item.last_message.user.first_name} ${item.last_message.user.last_name}` }}
                  : <span v-html="item.last_message.text" />
                </div>
              </div>
            </div>
            <div class="regular-title mt-1">
              {{ formatDate(item.created_at, "MMM DD") }}
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center pb-5">
        Message not found.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      listMessage: [],
      listTemp: [],
      searchMessage: "",
      showMessage: false,
      activeHeight: "0px",
      bgColor: []
    }
  },
  channels: {
    GlobalMessageChannel: {
      received(data) {
        if (data) {
          this.getList()
        }
      }
    },
    ChatChannel: {
      received(data) {
        if (data) {
          if (data.action == "read") {
            this.getList()
          }
        }
      }
    }
  },
  watch: {
    searchMessage(newVal) {
      if (newVal) {
        let getSearch = this.listMessage.filter(str => {
          if (str.last_message) {
            return str.last_message.text.toLowerCase().search(newVal.toLowerCase()) != -1
          }
        })
        this.listTemp = getSearch
      } else {
        this.listTemp = this.listMessage
      }
      setTimeout(() => {
        this.getActiveHeight()
      }, 1);
    },
    showMessage(newVal) {
      if (newVal) {
        this.getList()
        this.getActiveHeight()
      } else {
        this.activeHeight = "0px"
      }
      this.$emit("handleShow", newVal)
    }
  },
  async mounted() {
    await this.getList()
    this.listMessage.forEach(element => {
      this.bgColor.push(this.randomColor())
    });
  },
  methods: {
    getActiveHeight() {
      this.activeHeight = `${document.getElementsByClassName("messaging-content")[0].clientHeight + 60}px`
    },
    clickShow() {
      this.showMessage = !this.showMessage
    },
    async clickMessage(item) {
      await this.$axios.post(`${this.userType}/v1/conversations/${item.user.id}`, null, this.token)
      .then((res) => {
        if (res.status == 201) {
          let dataMessaging = [...this.$store.state.messaging.listMessaging]
          let checkUser = dataMessaging.filter(str => {
            return str.user.id == res.data.data.chat.user.id
          })
          if (checkUser.length == 0) {
            dataMessaging.push(res.data.data.chat)
            this.$store.dispatch("messaging/getListMessaging", dataMessaging)
          }
        }
      })
      .catch(err => {})

      // action read
      this.$store.dispatch("websocket/getMessageChat",
        { 
          _this: this, 
          channel: "ChatChannel",
          conversation_id: item.conversation_id,
          data: {
            message: {
              read_timetoken: item.last_message.timetoken,
              action: "read"
            }
          }
        }
      )

      this.getList()
    },
    async getList() {
      await this.$axios.get(`${this.userType}/v1/conversations`, this.token)
      .then((res) => {
        if (res.status == 200) {
          this.listMessage = res.data.data.chats
        }
      })
      .catch(err => {})
      this.listTemp = [...this.listMessage]
    }
  },
}
</script>

<style lang="scss">
  .messaging {
    background: #F4F4F4;
    width: 100%;
    max-width: 400px;
    min-width: 400px;
    transition: all .2s;
    align-self: flex-end;

    .messaging-content {
      background: #F4F4F4;
      padding: 34px 0 0;

      .wrap-overflow {
        padding-bottom: 14px;
        max-height: 350px;
        overflow: auto;
      }
      
      .item-message {
        display: flex;
        padding: 12px 12px 0;
        justify-content: space-between;
        cursor: pointer;
        transition: .3s;

        .wrap-content {
          border-bottom: 2px solid #E7E7E7;
        }

        .regular-title {
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .wrap-message {
          padding-bottom: 16px;
          margin-right: 8px;

          .wrap-avatar {
            margin-right: 12px;
          }

          .text-message {
            font-size: 18px;
            max-width: 234.74px;
            margin-top: 4px;
            padding-right: 8px;
          }
  
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .item-message:hover {
        background: #fff8e3;
      }

      .active {
        .text-message,
        .regular-title {
          font-weight: 700;
        }
      }

      .message-search {
        max-width: 248.42px;
        font-size: 20px;

        .v-input__slot {
          min-height: 49px;
          border-radius: 12px;
          padding: 9px 20px 14px !important;

          fieldset {
            border-color: #000000;
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
      background: #F4BF28;
    }

    .wrap-avatar {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 30px;
      position: relative;

      h5 {
        color: #fff;
      }

      .regular-body {
        font-size: 26px !important;
        font-weight: bold;
        color: #fff;
      }
      
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .messaging {
      max-height: 50px;
      margin-left: 0px !important;
      max-width: 300px;
      min-width: 300px;

      .messaging-content {
        .wrap-overflow {
          max-height: 100%;
        }
        
        .message-search {
          max-width: calc(100% - 8em);
        }
      }

      .v-icon {
        font-size: 32px !important;
      }

      .wrap-avatar {
        margin-right: 16px;
      }

      .messaging-header {
        height: 50px;

        .bold-h6 {
          font-size: 16px;
        }
      }
    }

    .active-messaging {
      max-width: 100%;
      max-height: 100%;
      height: 100vh !important;
    }
  }
</style>