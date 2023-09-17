<template>
  <div class="contact-header">
    <v-container class="py-0">
      <div class="text-header">
        <h3 class="bold-h3">WE ARE</h3>
        <h1 class="bold-h1">READY TO HELP</h1>
        <h6 class="mt-4 mb-0 regular-h6">
          Please use the contact form below to get in touch with us.
        </h6>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .contact-header {
    .container {
      background-image: url("@/assets/images/pexels-yan-krukau-8197494-removebg-preview 1.png");
      background-position: right bottom;
      height: 470px;
      display: flex;
      align-items: center;
    }
    
    .text-header {
      color: #222222;
      max-width: 550px;
    }
  }

  @media screen and(max-width: 700px) {
    .contact-header {
      .container {
        background-image: none;
      }
    }
  }
</style>