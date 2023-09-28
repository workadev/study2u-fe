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
            {{ user.first_name.charAt(0).toUpperCase() }}
          </div>
        </div>
        <h6 class="bold-h6">
          Messaging
        </h6>
      </div>
      <v-icon
        size="40"
        color="#000"
        @click="showMessage = !showMessage"
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
      <div class="wrap-overflow">
        <div 
          v-for="(item, index) in listTemp" :key="index"
          class="item-message"
          :class="{
            'mb-1': index == listTemp.length - 1,
            active: item.active
          }"
          @click="$emit('clickMessage', item)"
        >
          <div class="w-100 d-flex justify-space-between wrap-content">
            <div class="d-flex wrap-message">
              <div class="wrap-avatar" :style="{background: randomColor()}">
                <img v-if="item.avatar" :src="item.avatar">
                <h5 v-else class="bold-h5">
                  {{ item.name.charAt(0).toUpperCase() }}
                </h5>
              </div>
              <div class="text-message">
                {{ item.name }}
                <div class="regular-title">
                  {{ item.shortMessage.nameLastSend }}: {{ item.shortMessage.message }}
                </div>
              </div>
            </div>
            <div class="regular-title mt-1">
              {{ item.date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      listMessage: [
        {
          avatar: "",
          name: "Fatima Van De Broer",
          institutions: "Brickfields Asia College",
          date: "Sep 01",
          active: true,
          shortMessage: {
            nameLastSend: "Fatima Van De Broer",
            message: "Hi, thank you for the opportunity!",
          },
          message: [
            {
              avatar:  this.user.avatar,
              name: `${this.user.first_name} ${this.user.last_name}`,
              message: `Hi Mr. Hardy. Greetings!

    I would like to know more regarding Brickfields Asia College`,
              date: "9:15 am"
            },
            {
              avatar: "",
              name: "Fatima Van De Broer",
              message: "Hello Marisjke!  Yes ofcourse, how may I be of service for you?",
              date: "9:19 am"
            },
            {
              avatar: this.user.avatar,
              name: `${this.user.first_name} ${this.user.last_name}`,
              message: "Thanks for getting back to me. I was wondering if there’s more information on the law major at Brickfields?",
              date: "9:23 am"
            },
          ]
        },
        {
          avatar: "",
          name: "Dedi Rustam",
          institutions: "Brickfields Asia College",
          date: "Aug 29",
          shortMessage: {
            nameLastSend: "You",
            message: "Will get back asap, oh and also got the reservation already oh and also got the reservation",
          },
          message: [
            {
              avatar:  this.user.avatar,
              name: `${this.user.first_name} ${this.user.last_name}`,
              message: `Hi Mr. Hardy. Greetings!

    I would like to know more regarding Brickfields Asia College`,
              date: "9:15 am"
            },
            {
              avatar: "",
              name: "Dedi Rustam",
              message: "Hello Marisjke!  Yes ofcourse, how may I be of service for you?",
              date: "9:19 am"
            },
            {
              avatar: this.user.avatar,
              name: `${this.user.first_name} ${this.user.last_name}`,
              message: "Thanks for getting back to me. I was wondering if there’s more information on the law major at Brickfields?",
              date: "9:23 am"
            },
          ]
        },
        {
          avatar: "",
          name: "Hardy Tame",
          institutions: "Brickfields Asia College",
          date: "Aug 27",
          shortMessage: {
            nameLastSend: "You",
            message: "Will get back asap, oh and also got the reservation already oh and also got the reservation",
          },
          message: [
            {
              avatar:  this.user.avatar,
              name: `${this.user.first_name} ${this.user.last_name}`,
              message: `Hi Mr. Hardy. Greetings!

    I would like to know more regarding Brickfields Asia College`,
              date: "9:15 am"
            },
            {
              avatar: "",
              name: "Hardy Tame",
              message: "Hello Marisjke!  Yes ofcourse, how may I be of service for you?",
              date: "9:19 am"
            },
            {
              avatar: this.user.avatar,
              name: `${this.user.first_name} ${this.user.last_name}`,
              message: "Thanks for getting back to me. I was wondering if there’s more information on the law major at Brickfields?",
              date: "9:23 am"
            },
          ]
        },
      ],
      listTemp: [],
      searchMessage: "",
      showMessage: false,
      activeHeight: "0px"
    }
  },
  watch: {
    searchMessage(newVal) {
      let getSearch = this.listMessage.filter(str => {
        return str.shortMessage.message.toLowerCase().search(newVal.toLowerCase()) != -1
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
      this.$emit("handleShow", newVal)
    }
  },
  mounted() {
    this.listTemp = [...this.listMessage]
  },
  methods: {
    getActiveHeight() {
      this.activeHeight = `${document.getElementsByClassName("messaging-content")[0].clientHeight + 60}px`
    },
  },
}
</script>

<style lang="scss">
  .messaging {
    background: #F4F4F4;
    width: 100%;
    max-width: 400px;
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
            width: 44px;
            height: 44px;
            border-radius: 50%;
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

      h5 {
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

      .messaging-content {
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