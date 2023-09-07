<template>
  <div class="notification-cookie">
    <v-container class="py-10">
      <div class="mr-5">
        We value your privacy. study2u uses cookies to personalise content and analyse our traffic. See our <nuxt-link to="">Terms & Conditions</nuxt-link>. 
      </div>
      <v-btn height="55" width="189" elevation outlined class="btn-understood">
        UNDERSTOOD
      </v-btn>
    </v-container>
  </div>
</template>

<style lang="scss">
  .notification-cookie {
    background: #6F41DB;
    box-shadow: 0px -6px 12px 2px #00000040;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .btn-understood {
      font-size: 20px;
      font-weight: 700;
      color: #E0E0E0;
      border-radius: 16px;
      border: 3px solid #fff;
    }
    
    div,
    a {
      color: #fff !important;
      font-weight: 700;
    }
  }
</style>