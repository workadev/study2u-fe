<template>
  <div class="card-top-categories">
    <div class="header-title mb-3">
      <div class="regular-title">
        Top categories
      </div>
      <img width="16" height="16" src="@/assets/icons/Information.svg">
    </div>
    <div class="d-flex justify-center flex-wrap pt-2">
      <div v-for="(item, index) in listCategories" :key="index" class="item-categories regular-body">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listCategories: [
        "Arts",
        "Architecture",
        "Automotive",
        "Aviation",
        "Business",
        "Childhood Education",
        "Design",
        "Digital",
        "Engineering & Technology",
        "Entrepreneurship"
      ]
    }
  },
}
</script>

<style lang="scss">
  .card-top-categories {
    border: 1px solid $color-light-grey;
    border-radius: 8px;
    background: $color-white;
    width: 100%;
    padding: 16px 12px 12px;

    .item-categories {
      padding: 0 12px;
      background: #C5F2FB;
      border-radius: 8px;
      max-width: fit-content;
      text-align: center;
      margin: 4px;
    }

    .header-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>