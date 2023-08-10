<template>
  <div class="base-action-plan">
    <v-container class="text-center">
      <h5 class="semibold-h5 mb-7">
        {{ data.title }}
      </h5>
      <v-btn class="btn-lg btn-primary semibold-subtitle" elevation @click="$emit('handleClick')">
        {{ data.btnName }} <v-icon size="18" class="ml-2">mdi-arrow-right</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss">
  .base-action-plan {
    background: linear-gradient(308deg, rgba(10, 185, 194, 0.4) 35.97%, rgba(10, 194, 117, 0.4) 81.23%, rgba(10, 194, 31, 0.4) 126.48%);
    padding: 52px 0 40px;
  }
</style>