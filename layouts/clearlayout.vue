<template>
  <v-app>
    <Nuxt />
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
export default {
  name: "loginlayout",
  data() {
    return {
      snackbarShow: false
    }
  },
  computed: {
    snackbar() {
      return this.$store.state.snackbar.dataSnackbar
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
}
</script>