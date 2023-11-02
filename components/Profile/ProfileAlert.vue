<template>
  <div class="profile-alert mb-5">
    <div v-if="userType == 'users'">
      <h6 class="bold-h6 mb-3">Complete Your Profile</h6>
      <h6 class="regular-h6">
        For better experience with us, kindly complete your 
        <nuxt-link to="/profile/step">
          <b><u>profile</u></b>
        </nuxt-link>
      </h6>
    </div>
    <div v-else>
      <h6 class="bold-h6 mb-3">Manage Institution</h6>
      <h6 class="regular-h6"> 
        <a :href="staffUrl">
          <b><u>Go here</u></b>
        </a>
        to manage your institution
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    staffUrl() {
      return process.env.apiUrl+`staff/authentications?token=${this.getCookies("token")}`
    }
  }
}
</script>

<style lang="scss">
  .profile-alert {
    background: #FF6D3B;
    padding: 25px 20px 37px;
    border-radius: 20px;
    text-align: center;

    h6, 
    u {
      color: #fff;
    }
  }
</style>