<template>
  <div class="home-header">
    <v-container>
      <div class="text-header">
        <h3 class="bold-h3">
          DISCOVER YOUR PATH
        </h3>
        <h1 class="bold-h1">
          TO SUCCESS
        </h1>
        <h6 class="mt-4 mb-0 regular-h6">
          At Study2U, we're dedicated to empowering students like you to embark on an extraordinary educational journey.
  Our platform is designed to connect you with valuable resources, incredible opportunities, and a network of like-minded individuals who share your passion for learning and growth.
        </h6>
        <v-btn
          color="#FABF48"
          height="58"
          elevation
          dark
          class="btn-start mt-7"
          to="/register"
        >
          TAKE THE FIRST STEP
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .home-header {
    .container {
      background-image: url("@/assets/images/pexels-cottonbro-studio-6209361-removebg-preview 1.png");
      background-position: right bottom;
      padding-bottom: 84px;
      padding-top: 146px;
    }
    
    .text-header {
      color: #222222;
      max-width: 550px;

      .btn-start {
        border-radius: 16px;
        font-size: 20px;
        font-weight: 700;
        padding: 0 36px;
      }

      .bold-h3 {
        font-weight: 700;
        font-size: 36px;
        line-height: 1em;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .home-header {
      .container {
        background-image: none;
      }
    }
  }
</style>