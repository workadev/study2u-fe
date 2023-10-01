<template>
  <v-app>
    <v-main>
      <Navigation />
      <v-container 
        v-if="loading"
        style="height: calc(100vh - 106px);" 
        class="d-flex align-center"
      >
        <v-progress-circular
          indeterminate
          :size="100"
          style="width: 100% !important;"
        />
      </v-container>
      <Nuxt v-else />
      <Footer />
    </v-main>
    <v-snackbar
      v-model="snackbarShow"
      :timeout="6000"
      :top="'top'"
      :color="snackbar.color"
      max-width="998"
      class="alert-snackbar"
    >
      <div class="wrap-alert">
        <v-icon size="17">
          {{ snackbar.icon }}
        </v-icon>
        <div class="text-alert">
          <label style="color: #ffffff;">
            {{ snackbar.title }}
          </label>
          <span style="font-size: 12px;">
            {{ snackbar.message }}
          </span>
        </div>
      </div>
      <template v-slot:action="{ attrs }">
        <v-btn
          style="height: 16px; min-width: 16px;"
          text
          dark
          v-bind="attrs"
          class="btn-close"
          @click="$store.dispatch('snackbar/getSnackbar', {show: false})"
        >
          &times;
        </v-btn>
      </template>
    </v-snackbar>
    <div
      v-if="user"
      class="group-messaging"
    >
      <MessagingPersonal
        v-for="(item, index) in listMessage" :key="index"
        :user="user"
        :dataMessage="item"
        @closeMessage="closeMessage"
      />
      <Messaging
        :user="user"
      />
    </div>
  </v-app>
</template>

<script>
import 'animate.css';
import Vue from 'vue';
import DataMixins from "@/mixins";

Vue.mixin(DataMixins)

export default {
  name: 'DefaultLayout',
  head() {
    return {
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: "/favicon.png",
        }
      ]
    }
  },
  data() {
    return {
      snackbarShow: false
    }
  },
  computed: {
    snackbar() {
      return this.$store.state.snackbar.dataSnackbar
    },
    loading() {
      return this.$store.state.login.loading
    },
    user() {
      return this.$store.state.login.user
    },
    listMessage() {
      return this.$store.state.messaging.listMessaging
    }
  },
  watch: {
    snackbar: {
      deep: true,
      handler: function(newVal) {
        this.snackbarShow = newVal.show
      }
    }
  },
  async mounted() {
    this.$store.dispatch("login/getLoading", true)
    await this.$axios.get("users/v1/current", this.token)
    .then((res) => {
      if (res.status == 200) {
        res.data.data.user = {
          ...res.data.data.user, bgAvatar: this.randomColor()
        }
        this.$store.dispatch("login/getUser", res.data.data.user)
      }
    })
    .catch(err => {})
    this.$store.dispatch("login/getLoading", false)
    if (this.user) {
      this.$store.dispatch("websocket/getConnect", this)
      this.$store.dispatch("websocket/getSubscribe", { _this: this, channel: "PresenceChannel" })
      this.$store.dispatch("websocket/getSubscribe", { _this: this, channel: "ErrorChannel" })
      setTimeout(() => {
        this.$store.dispatch("websocket/getMessage", { _this: this, channel: "PresenceChannel", data: { text: "Online" } })
      }, 500);
    }
  },
  methods: {
    closeMessage(item) {
      let checkMessage = this.listMessage.filter(str => {
        return str.user.id != item.user.id
      })
      this.$store.dispatch("messaging/getListMessaging", checkMessage)
      setTimeout(() => {
        this.$store.dispatch("websocket/getSubscribe", { _this: this, channel: "PresenceChannel" })
      }, 100);
    },
  },
}
</script>


<style lang="scss">
  .group-messaging {
    position: fixed;
    bottom: 0px;
    right: 0px;
    display: flex;
    z-index: 7;

    .messaging-personal:first-child {
      margin-left: 0px !important;
    }
  }

  .alert-snackbar {
    .wrap-alert {
      display: flex;
      align-items: flex-start;

      i {
        margin-right: 11px;
      }
    }

    .text-alert {
      flex-flow: column;
      display: flex;
      width: 100%;

      span {
        color: #ffffff;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .group-messaging {
      // width: 100%;
    }
  }
</style>