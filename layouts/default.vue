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
  },
}
</script>


<style lang="scss">
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
</style>