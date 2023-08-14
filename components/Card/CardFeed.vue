<template>
  <div class="card-feed">
    <div class="px-4">
      <div class="card-header">
        <div class="d-flex align-center">
          <img class="photo" width="42" height="42" :src="data.photo">
          <div>
            <div class="semibold-title">{{ data.name }}</div>
            <div class="regular-body">{{ data.position }}</div>
            <div class="caption-regular d-flex align-center">
              {{ data.time }} • <img class="ml-1" width="16" height="16" src="@/assets/icons/globe-asia-australia.svg">
            </div>
          </div>
        </div>
        <v-btn text class="px-0" min-width="24" height="24">
          <img src="@/assets/icons/more-option.svg">
        </v-btn>
      </div>
      <div class="regular-body description">
        {{ data.desc }}
      </div>
      <a v-if="data.url" class="regular-body text-decoration-none" :href="data.url" target="__blank">
        {{ data.url }}
      </a>
    </div>
    <img class="mt-4" width="100%" :src="data.img">
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss">
  .card-feed {
    background: $color-white;
    border: 1px solid $color-light-grey;
    border-radius: 8px;
    width: 100%;
    max-width: 602px;
    padding: 16px 0;

    a {
      color: #0A66C2;
    }

    .description {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;

      .photo {
        margin-right: 10px;
      }
    }
  }
</style>