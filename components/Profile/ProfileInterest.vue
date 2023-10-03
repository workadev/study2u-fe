<template>
  <div class="profile-interest">
    <div class="wrap-info mt-5 card-profile">
      <div>
        <b>My Interests:</b>
      </div>
      <div v-if="user.interests.length == 0" class="mt-4">
        Add something you’re interested <nuxt-link to="/profile/my-interest">here.</nuxt-link>
      </div>
      <div v-else class="d-flex flex-wrap wrap-item-interest">
        <div
          v-for="(item, index) in user.interests"
          :key="index"
          class="chip-square"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="mt-11">
        <nuxt-link class="btn-edit" to="/profile/my-interest">
          <img class="mr-3" src="@/assets/icons/icon-edit.svg">
          Edit Interests
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"]
}
</script>