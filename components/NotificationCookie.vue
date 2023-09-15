<template>
  <div class="notification-cookie">
    <v-container class="py-6">
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
    background: #FABE47;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .btn-understood {
      font-size: 20px;
      font-weight: 700;
      border-radius: 16px;
      border: 3px solid #000;
    }
    
    div,
    a {
      color: #000 !important;
      font-weight: 700;
    }
  }

  @media screen and(max-width: 700px) {
    .notification-cookie {
      .container {
        flex-wrap: wrap;
      }

      .btn-understood {
        margin-top: 20px;
      }
    }
  }
</style>