<template>
  <div class="page-index">
    <HomeHeader />
    <HomeCross />
    <HomeRanking />
    <HomeMemberSay />
    <HomeLimitless />
    <BaseActionPlan :data="actionPlan" @handleClick="" />
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
}
</script>