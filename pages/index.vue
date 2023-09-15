<template>
  <div class="page-index">
    <HomeHeader />
    <HomeServices />
    <HomeTrending />
    <HomeMentor />
    <HomeReadyLeap v-if="!isLogin" />
    <HomeEmpowered v-if="!isLogin" />
    <NotificationCookie />
  </div>
</template>

<script>
export default {
  data() {
    return {
      actionPlan: {
        title: "Make your future vision today’s action plan.",
        btnName: "Starting the journey"
      }
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.login.isLogin
    },
  }
}
</script>