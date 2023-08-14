<template>
  <div class="card-mentor">
    <img :src="data.img" alt="Rectangle 6322.png">
    <div class="py-3 px-3 info-card">
      <div class="regular-subtitle mb-1 text-title">
        {{ data.title }}
      </div>
      <div>
        <div class="caption-semibold mb-1">
          {{ data.name }}
        </div>
        <v-btn elevation color="#EEF1F4" block height="28" class="regular-body btn-card px-2">
          {{ data.time }} • {{ data.capter }}
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
  .card-mentor {
    border: 1px solid $color-light-grey;
    box-shadow: 0px 4px 8px 0px #1B1B1B0D;
    border-radius: 8px;
    width: 100%;
    max-width: 180px;
    height: 100%;
    max-height: 250px;
    background: $color-white;
    text-align: center;
    display: flex;
    flex-flow: column;

    .info-card {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
    }

    .text-title {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .btn-card {
      border-radius: 8px;
      text-align: left;
      max-height: 28px;

      .v-btn__content {
        justify-content: start;
      }
    }

    img {
      border-radius: 8px 8px 0 0;
    }
  }
</style>