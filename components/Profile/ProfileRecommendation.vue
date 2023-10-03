<template>
  <div class="profile-recommendation">
    <div class="wrap-info mt-5 card-profile">
      <div>
        <b>Recommendation</b>
      </div>
      <div v-if="user.interests.length == 0" class="mt-4">
        Sorry we are unable to show you any recommendation yet.<br>
        Please  add your interests first.
      </div>
      <div v-else>
        <div class="d-flex flex-wrap wrap-item-interest mb-2">
          <div
            v-for="(item, index) in user.interests"
            :key="index"
            class="chip-square"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="d-flex flex-wrap wrap-item-recommendation">
          <div 
            v-for="(item, index) in recommendationList" 
            :key="index"
            class="item-recommendation"
            @click="$router.push(`/institutions/${item.id}`)"
          >
            <img width="150" height="150" :src="item.logo ? item.logo : '@/assets/images/BACedu_logofav2 1 (1).png'">
            <div class="name-recommendation">{{ item.name }}</div>
            <div class="mt-2">
              {{ item.institution_type }}, {{ item.reputation }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      recommendationList: [],
    }
  },
  mounted() {
    this.$axios.get("v1/institutions/recommendations?per_page=10&page=1", this.token)
    .then((res) => {
      if (res.status == 200) {
        this.recommendationList = res.data.data.institutions
      }
    })
    .catch(err => {})
  },
}
</script>