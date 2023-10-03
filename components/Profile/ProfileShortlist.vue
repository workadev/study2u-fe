<template>
  <div class="profile-shortlist">
    <div class="wrap-info card-profile">
      <div>
        <b>My Shortlist:</b>
      </div>
      <div v-if="user.institutions.length == 0 && !editShortlist" class="mt-4">
        Oops, you have not select any institution. <nuxt-link to="/institutions">Go here</nuxt-link>!
      </div>
      <div v-else class="mt-1 d-flex flex-wrap wrap-option-shortlist">
        <div 
          class="d-flex flex-column item-option-shortlist" 
          v-for="(item, index) in user.institutions" 
          :key="index"
        >
          <img width="130" height="130" class="ml-6" :src="item.logo ? item.logo : '@/assets/images/BACedu_logofav2 1 (1).png'">
          <label class="container-checkbox mt-1">{{ item.name }}
            <input type="checkbox" v-model="shortlist" :value="item.id">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div class="my-11">
        <v-btn text class="btn-edit px-0" height="fit-content">
          <img class="mr-3" src="@/assets/icons/icon-edit.svg">
          Edit Shortlist
        </v-btn>
      </div>
      <v-btn
        elevation
        color="#5EC9AA"
        height="58"
        width="256"
        class="btn-compare"
        :disabled="shortlist.length < 2"
        @click="clickCompare()"
      >
        Compare Selected
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      editShortlist: false,
      shortlist: [],
    }
  },
  methods: {
    clickCompare() {
      this.$router.push({
        name: "comparison",
        query: {
          ids: this.shortlist    
        }
      })
    }
  },
}
</script>