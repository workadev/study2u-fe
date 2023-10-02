<template>
  <div
    class="messaging-personal"
    :class="{'active-personal': showMessage}"
    :style="{height: showMessage ? activeHeight : '60px'}"
  >
    <div class="messaging-header">
      <div class="d-flex align-center pointer" @click="showMessage = !showMessage">
        <div class="wrap-avatar" :style="{background: bgUserMessaging}">
          <img v-if="dataMessage.user.avatar" :src="dataMessage.user.avatar">
          <h5 v-else class="bold-h5">
            {{ dataMessage.user.first_name.charAt(0).toUpperCase() }}
          </h5>
          <div v-if="dataMessage.user.online" class="user-online ml-2" />
        </div>
        <h6 class="bold-h6">
          {{ dataMessage.user.first_name }} {{ dataMessage.user.last_name }}
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
    <div :class="`messaging-content-personal ${dataMessage.conversation_id}`">
      <div class="item-message pt-0">
        <div class="w-100">
          <div class="d-flex wrap-message pb-0">
            <div class="wrap-avatar" :style="{background: bgUserMessaging}">
              <img v-if="dataMessage.user.avatar" :src="dataMessage.user.avatar">
              <h5 v-else class="bold-h5">
                {{ dataMessage.user.first_name.charAt(0).toUpperCase() }}
              </h5>
            </div>
            <div class="text-message">
              <b>{{ dataMessage.user.first_name }} {{ dataMessage.user.last_name }}</b>
              <div class="regular-title"> 
                {{ dataMessage.user.title }}
              </div>
            </div>
          </div>
          <div class="bold-title text-center mt-5 pb-2 mb-1 title-date">
            {{ formatDate(dataMessage.created_at, "MMM DD") }}
          </div>
        </div>
      </div>
      <div class="wrap-overflow">
        <div 
          v-for="(item, index) in listMessage" :key="index"
          class="item-message"
          :class="{'mb-1': index == listMessage.length - 1}"
        >
          <div class="w-100 d-flex justify-space-between">
            <div class="d-flex wrap-message">
              <div class="wrap-avatar" :style="{background: bgUserMessaging}">
                <img v-if="item.user.avatar" :src="item.user.avatar">
                <h5 v-else class="bold-h5">
                  {{ item.user.first_name.charAt(0).toUpperCase() }}
                </h5>
              </div>
              <div class="text-message" :class="{'text-read': item.read}">
                <div>
                  {{ user.id == item.user.id ? "You" : `${item.user.first_name} ${item.user.last_name}` }}
                </div>
                <pre class="regular-title">
{{ item.text }}
</pre>
              </div>
            </div>
            <div class="regular-subtitle mt-1">
              {{ formatDate(item.created_at, "h:mm a") }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="isTyping" class="regular-body pl-3 typing">typing . . .</div>
      <div class="send-message">
        <div
          id="message"
          contentEditable="true"
          class="textarea"
          placeholder="Write a message"
          @input="handleValue"
        ></div>
        <div class="d-flex justify-space-between mt-3">
          <div class="d-flex align-center">
            <v-menu 
              v-model="menuEmojis"
              transition="slide-y-transition"
              origin="center center"
              offset-y
              content-class="menu-emoji"
              :close-on-content-click="false"
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
                <BaseEmojiPicker
                  @emoji_click="append"
                  @close="menuEmojis = false"
                 />
              </v-card>
            </v-menu>
            <input
              id="uploadImg"
              type="file"
              accept="image/*"
              hidden
              @change="inputImg"
            >
            <label for="uploadImg" class="d-flex uploadImg pointer">
              <img src="@/assets/icons/image.svg">
            </label>
          </div>
          <v-btn
            height="30"
            width="88"
            elevation
            rounded
            color="#FF5ABE"
            class="btn-send"
            :disabled="!message"
            @click="clickSend()"
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
      listMessage: [],
      searchMessage: "",
      showMessage: false,
      activeHeight: "0px",
      bgUserMessaging: "",
      message: "",
      menuEmojis: false,
      isTyping: false
    }
  },
  channels: {
    PresenceChannel: {
      received(data) {
        if (data) {
          this.getStatus()
        }
      }
    },
    TypingChannel: {
      received(data) {
        if (data) {
          this.isTyping = true
        }
      }
    },
    ChatChannel: {
      received(data) {
        if (data) {
          this.isTyping = false
          this.getListMessage()
        }
      }
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
  watch: {
    searchMessage(newVal) {
      let getSearch = this.dataMessage.message.filter(str => {
        return str.message.toLowerCase().search(newVal.toLowerCase()) != -1
      })
      this.listMessage = getSearch
      setTimeout(() => {
        this.getActiveHeight()
      }, 1);
    },
    showMessage(newVal) {
      if (!newVal) {
        this.activeHeight = "0px"
      } else {
        this.getActiveHeight()
      }
    },
  },
  mounted() {
    this.bgUserMessaging = this.randomColor()
    this.getListMessage()
    this.$store.dispatch("websocket/getSubscribe", { _this: this, channel: "TypingChannel" })
    this.$store.dispatch("websocket/getSubscribeChat", 
      { 
        _this: this, 
        channel: "ChatChannel",
        conversation_id: this.dataMessage.conversation_id
      }
    )
    setTimeout(() => {
      this.showMessage = true
    }, 1);
  },
  methods: {
    getActiveHeight() {
      this.activeHeight = `${document.getElementsByClassName(this.dataMessage.conversation_id)[0].clientHeight + 60}px`
    },
    clickIcon() {
      if (this.showMessage) {
        this.$emit("closeMessage", this.dataMessage)
      } else {
        this.showMessage = !this.showMessage
      }
    },
    getStatus() {
      this.$store.dispatch("conversation/getListPresence", this)
      let dataList = {
        id: this.dataMessage.user.id,
        online: true
      }
      this.$store.commit("messaging/UPDATE_STATUS_LIST_ONLINE", dataList)
    },
    handleTyping() {
      this.$store.dispatch("websocket/getMessageChat",
        { 
          _this: this, 
          channel: "TypingChannel",
          conversation_id: undefined,
          data: {
            typing: this.message,
            conversation_id: this.dataMessage.conversation_id
          }
        }
      )
    },
    clickSend() {
      this.$store.dispatch("websocket/getMessageChat",
        { 
          _this: this, 
          channel: "ChatChannel",
          conversation_id: this.dataMessage.conversation_id,
          data: {
            message: {
              text: this.message,
              action: "create"
            }
          }
        }
      )
      this.message = ""
    },
    async getListMessage() {
      await this.$axios.get(`${this.userType}/v1/conversations/${this.dataMessage.conversation_id}/messages`, this.token)
      .then((res) => {
        if (res.status == 200) {
          this.listMessage = res.data.data.messages
        }
      })
      this.getActiveHeight()
    },
    append(emoji) {
      document.getElementById("message").focus();
      document.execCommand("InsertHTML", false, emoji)
    },
    handleValue(e) {
      this.message = e.srcElement.innerHTML
    },
    inputImg(e) {
      if (e.target.files[0]) {
        document.getElementById("message").focus();
        var reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById("message").focus();
          document.execCommand('insertImage', false, e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  },
}
</script>

<style lang="scss">
  .menu-emoji {
    margin-top: -36px;
  }

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

      .typing {
        margin-top: -20px;
        z-index: 1;
        position: relative;
        background: #F4F4F4;
      }

      .send-message {
        background: #D9D9D9;
        padding: 18px 30px 20px;
        display: flex;
        flex-flow: column;

        .btn-send {
          color: #fff;
          font-weight: 700;
        }

        textarea,
        .textarea {
          background: #fff;
          resize: none;
          width: 100%;
          height: 100px;
          outline: none;
          padding: 12px 14px;
          overflow: auto;
        }

        [placeholder]:empty::before {
          content: attr(placeholder);
          color: #555; 
        }

        [placeholder]:empty:focus::before {
          content: "";
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
          font-weight: bold;
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
            font-weight: bold;
          }
  
          img {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            object-fit: cover;
          }
        }

        .text-read {
          div,
          pre {
            font-weight: 400 !important;
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
      position: relative;

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
          height: calc(100% - 341px);
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