<template>
  <v-app>
    <v-main>
      <Navigation />
      <Nuxt />
      <Footer />
    </v-main>
    <v-snackbar
      v-model="snackbar.show"
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
  computed: {
    snackbar() {
      return this.$store.state.snackbar.dataSnackbar
    }
  }
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