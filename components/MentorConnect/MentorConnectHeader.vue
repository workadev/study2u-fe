<template>
  <div class="mentor-connect-header">
    <v-container class="py-0">
      <div class="text-header">
        <h1 class="bold-h1">CONNECT</h1>
        <div class="d-flex">
          <h3 class="bold-h3">AND</h3>&nbsp;
          <h1 class="bold-h1">ENGAGE</h1>
        </div>
        <h6 class="mt-4 mb-0 regular-h6">
          Connect and engage with experienced mentors who can guide you on your educational journey, share insights and help you reach your goals.
        </h6>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .mentor-connect-header {
    .container {
      background-image: url("@/assets/images/Vector.png");
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
    .mentor-connect-header {
      .container {
        background-image: none;
      }
    }
  }
</style>