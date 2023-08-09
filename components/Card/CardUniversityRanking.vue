<template>
  <div class="card-university-ranking">
    <div class="d-flex align-center mr-3">
      <img class="mr-3 logo-university" :src="data.img">
      <div class="name-university">
        <div class="semibold-title">
          {{ data.name }}
        </div>
        <div class="caption-regular d-flex align-center mt-3">
          <img class="mr-1" src="@/assets/icons/map-pin.svg">
          {{ data.location }}
        </div>
      </div>
    </div>
    <div class="d-flex align-center text-center info-reputation">
      <div>
        <div class="regular-subtitle">
          Academic Reputation
        </div>
        <div class="regular-body mt-2">
          {{ data.reputation }}
        </div>
      </div>
      <img width="32" height="26" src="@/assets/images/icon-mini.svg" alt="icon-mini">
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss">
  .card-university-ranking {
    border-radius: 12px;
    border: 1px solid $color-light-grey;
    box-shadow: 0px 4px 8px 0px #1B1B1B0D;
    padding: 12px;
    width: 100%;
    max-width: 768px;
    display: flex;
    justify-content: space-between;

    .info-reputation {
      width: 100%;
      max-width: calc(100% - 294px);
      justify-content: space-around;
    }

    .name-university {
      max-width: 210px;
    }

    .logo-university {
      width: 60px;
      height: 60px;
      object-fit: contain;
    }
  }
</style>