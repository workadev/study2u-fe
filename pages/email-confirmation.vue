<template>
  <div class="email-confirmation">
    <v-container class="py-0">
      <div>
        <h5 class="bold-h5">{{ title }}</h5>
        <h6 class="regular-h6 mt-3">
          {{ message }}
        </h6>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      message: "",
      title: ""
    }
  },
  async mounted() {
    let getToken = {
      token: Object.keys(this.$route.query)[0]
    }
    await this.$axios.get("users/v1/confirmation", { params: getToken })
    .then((res) => {
      if (res.status == 200) {
        this.title = "Email Verified"
        this.message = "Thank you for verifiying your email. Please wait you will be redirected in a moment."
        setTimeout(() => {
          this.$router.push("/login")
        }, 3000);
      }
    })
    .catch(err => {
      this.title = "Verification Failed"
      this.message = err.response ? err.response.data.message : err
    })
  },
}
</script>

<style lang="scss">
  .email-confirmation {
    height: 470px;
    padding-top: 150px;
  }
</style>