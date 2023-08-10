<template>
  <div class="card-activity">
    <img :src="data.img" alt="Frame 17370 2">
    <div class="regular-title text-center">
      {{ data.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss">
  .card-activity {
    border: 1px solid $color-grey;
    border-radius: 12px;

    img {
      border-radius: 12px 12px 0 0;
      width: 100%;
      height: 248px;
      object-fit: cover;
    }

    .regular-title {
      padding: 24px 12px 12px;
    }
  }
</style>