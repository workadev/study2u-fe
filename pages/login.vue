<template>
  <div class="page-login">
    <LoginHeader />
    <LoginExploreCategory />
    <LoginEngage />
    <LoginActivity />
    <BaseActionPlan :data="dataPlan" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataPlan: {
        title: "Connect with colleagues, classmates, and friends on Study2U application to expand your academic network and connections.",
        btnName: "Starting the journey"
      }
    }
  },
}
</script>

<style lang="scss">
  .page-login {
    .login-form {
      max-width: 380px;
    }
  }
</style>