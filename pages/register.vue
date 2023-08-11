<template>
  <div class="register">
    <v-container class="py-15">
      <div class="d-flex flex-column align-center">
        <h3 class="regular-h3 mb-5 text-center">
          Maximize the benefits of acquiring information about the realm of universities and your ideal higher education institutions.
        </h3>
        <RegisterForm />
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .register {
    background: $color-lightest-grey;

    .register-form {
      max-width: 380px;
    }

    h3 {
      max-width: 600px;
    }
  }
</style>