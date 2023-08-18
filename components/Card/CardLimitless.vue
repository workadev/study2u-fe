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
      <div class="text-center card-footer mt-2 pt-2">
        <v-btn class="btn-lg align-self-center semibold-subtitle" color="#1A334F" outlined elevation>
          Take The FIrst Step
        </v-btn>
      </div>
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

    .card-footer {
      border-top: 1px solid #C3C4C3;
    }

    img {
      min-height: 100%;
      width: 450px;
      object-fit: cover;
      border-radius: 16px 0 0 16px;
    }
  }

  @media screen and(max-width: 700px) {
    .card-limitless {
      flex-flow: column;

      .v-divider {
        margin: 12px 0 !important;
      }

      img {
        border-radius: 16px 16px 0 0;
        width: 100%;
        height: 204px;
        object-position: top;
      }
    }
  }
</style>