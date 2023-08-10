<template>
  <div class="login-activity">
    <v-container class="py-10">
      <div class="mx-n3 my-n3 d-flex group-card">
        <CardActivity 
          v-for="(item, index) in listActivity" :key="index"
          :data="item"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listActivity: [
        {
          title: "Participate in discussions and actively seek information about higher education institutions.",
          img: require("@/assets/images/Frame 17370 2.png")
        },
        {
          title: "Join discussions and actively gather information about colleges and universities.",
          img: require("@/assets/images/Frame 17370 3.png")
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  .login-activity {
    .card-activity {
      margin: 12px;
    }
  }

  @media screen and(max-width: 700px) {
    .login-activity {
      .group-card {
        flex-flow: column;
      }
    }
  }
</style>