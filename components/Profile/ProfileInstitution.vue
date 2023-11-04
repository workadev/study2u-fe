<template>
  <div class="profile-institution">
    <div class="wrap-info card-profile">
      <div class="mb-4">
        <b>Institution</b>
      </div>
      <div v-if="institutionList.length == 0" class="mt-4 mb-10">
        You have no institution yet
      </div>
      <div v-else class="d-block">
        <div 
          v-for="(item, index) in institutionList" :key="index"
          class="mt-1 d-flex flex-wrap item-institution"
          
        >
          <img
            height="102"
            class="pointer"
            :src="item.logo"
            @click="$router.push(`/institutions/${item.id}`)"
          >
        </div>
        <div class="d-flex align-center mt-4">
          <img class="mr-2" src="@/assets/icons/heart-color.svg">
          <h6 class="regular-h6">{{ institutionList.length }} shortlisted</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      institutionList: []
    }
  },
  mounted() {
    this.$axios.get("staffs/v1/current/institutions", this.token)
    .then((res) => {
      if (res.status == 200) {
        this.institutionList = res.data.data.institutions
      }
    })
    .catch(err => {})
  },
}
</script>

<style lang="scss">
  .profile-institution {
    .card-profile {
      padding-bottom: 23px !important;
    }

    .item-institution {
      margin: -10px;
      width: fit-content;

      img {
        max-width: 281px;
        margin: 10px;
      }
    }
  }
</style>