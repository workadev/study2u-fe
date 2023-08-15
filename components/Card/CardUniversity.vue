<template>
  <div class="card-university">
    <div class="card-content">
      <div class="d-flex align-center">
        <img width="60" height="60" class="mr-3" :src="data.img">
        <div class="university-name">
          <div class="semibold-title">{{ data.name }}</div>
          <div class="mt-3 d-flex align-center">
            <img class="mr-1" src="@/assets/icons/map-pin.svg">
            <div class="caption-regular">{{ data.location }}</div>
          </div>
        </div>
      </div>
      <div v-if="dataLabel.length != 0" class="d-flex justify-space-between group-info">
        <div class="text-center wrap-info">
          <div class="regular-body mb-2">{{ dataLabel[0] }}</div>
          <div class="bold-body">{{ data.level }}</div>
        </div>
        <div class="text-center wrap-info">
          <div class="regular-body mb-2">{{ dataLabel[1] }}</div>
          <div class="bold-body">{{ data.subject }}</div>
        </div>
        <div class="text-center wrap-info">
          <div class="regular-body mb-2">{{ dataLabel[2] }}</div>
          <div class="bold-body">{{ data.scholarships }}</div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <v-btn outlined elevation class="semibold-body btn-sm">
        View Detail
      </v-btn>
      <div class="wrap-icon">
        <v-btn text height="fit-content" class="px-0 regular-body">
          <img class="mr-2" src="@/assets/icons/folder-plus.svg"> Compare
        </v-btn>
        <v-btn text height="fit-content" class="px-0 regular-body">
          <img class="mr-2" src="@/assets/icons/heart.svg"> Shortlist
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "dataLabel"]
}
</script>

<style lang="scss">
  .card-university {
    background: $color-white;
    box-shadow: 0px 4px 8px 0px #1B1B1B0D;
    border: 1px solid $color-light-grey;
    border-radius: 12px;

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 12px 12px;

      .wrap-icon {
        display: flex;
        align-items: center;

        .v-btn {
          margin-right: 16px;
        }

        .v-btn:last-child {
          margin-right: 0px;
        }
      }
    }

    .card-content {
      margin: 12px;
      padding-bottom: 12px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid $color-light-grey;

      .group-info {
        width: calc(100% - 280px);
      }

      .wrap-info {
        max-width: 182px;
        width: 100%;
        margin-left: 12px;
      }

      .university-name {
        max-width: 210px;
      }
    }
  }
</style>