<template>
  <div class="confirm">
    <v-container>
      <h5 class="bold-h5">
        Password Reset
      </h5>
      <h6 class="regular-h6 mt-3">
        Your password has been reset. <br>
        Login 
        <nuxt-link :to="$route.query.resource_name == 'staff' ? '/partner/login' : '/login'" class="link">
          here
        </nuxt-link>. 
      </h6>
    </v-container>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .confirm {
    height: 470px;
    padding-top: 150px;

    .link {
      color: #000;
    }
  }
</style>