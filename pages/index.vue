<template>
  <div class="page-index">
    <HomeHeader />
    <HomeServices />
    <HomeTrending />
    <HomeMentor />
    <HomeReadyLeap v-if="!isLogin" />
    <HomeEmpowered v-if="!isLogin" />
    <NotificationCookie v-if="notifCookie" @handleClick="clickUnderstood()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifCookie: false
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.login.isLogin
    },
    understood() {
      if (this.getCookies('understood')) {
        return JSON.parse(this.getCookies('understood'))
      } else {
        return false
      }
    }
  },
  mounted() {
    this.notifCookie = !this.understood
  },
  methods: {
    clickUnderstood() {
      this.setCookies("understood", true)
      this.notifCookie = false
    }
  },
}
</script>