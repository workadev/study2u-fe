<template>
  <div class="page-institution">
    <v-container class="py-5 d-flex justify-center">
      <div class="content-left">
        <InstitutionBanner />
        <InstitutionSearch class="mt-2" />
      </div>
      <div class="content-right">
        <CardTopCourse />
        <CardTopCategories class="my-2" />
        <CardAds />
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .page-institution {
    background: $color-lightest-grey;

    .content-left {
      margin-right: 16px;
      width: 100%;
      max-width: 888px;
    }

    .content-right {
      width: 100%;
      max-width: 270px;
    }
  }
</style>