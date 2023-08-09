<template>
  <div class="card-limitless">
    <img :src="data.img">
    <div class="py-3 px-3 d-flex flex-column justify-space-between">
      <div>
        <h6 class="bold-h6">
          {{ data.title }}
        </h6>
        <div class="regular-subtitle mt-3">
          {{ data.desc }}
        </div>
      </div>
      <v-divider color="#C3C4C3" class="my-2" />
      <v-btn class="btn-lg align-self-center" color="#0DACCB" elevation>
        Take The FIrst Step
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss">
  .card-limitless {
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px #1B1B1B0D;
    background: $color-white;
    display: flex;

    img {
      min-height: 100%;
      width: 204px;
      object-fit: cover;
      border-radius: 16px 0 0 16px;
    }
  }

  @media screen and(max-width: 450px) {
    .card-limitless {
      flex-flow: column;

      img {
        border-radius: 16px 16px 0 0;
        width: 100%;
        height: 204px;
      }
    }
  }
</style>