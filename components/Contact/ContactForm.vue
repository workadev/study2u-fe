<template>
  <div class="contact-form">
    <v-container class="py-0">
      <h5 class="bold-h5">Contact Us</h5>
      <v-form class="wrap-form">
        <v-text-field
          hide-details
          height="38"
          placeholder="Name"
          v-model="form.name"
        />
        <div v-if="error.name" class="error-field ml-2 mt-1">
          {{ error.name }}
        </div>
        <v-text-field
          hide-details
          height="38"
          placeholder="e-mail"
          v-model="form.email"
        />
        <div v-if="error.email" class="error-field ml-2 mt-1">
          {{ error.email }}
        </div>
        <textarea
          class="mt-9"
          placeholder="message"
          cols="30"
          rows="10"
          v-model="form.message"
        />
        <div v-if="error.message" class="error-field ml-2 mt-1">
          {{ error.message }}
        </div>
        <v-btn
          elevation
          color="#09B6DE"
          class="btn-submit mt-6"
          height="58"
          width="189"
          :loading="loading"
          @click="clickSubmit()"
        >
          SUBMIT
        </v-btn>
      </v-form>
      <h5 class="bold-h5">Discover Partnership Possibilities</h5>
      <h6 class="regular-h6 my-3">
        Are you excited to explore potential collaborations? We’re eager to hear from you! Reach out to us at 
      </h6>
      <!-- <div class="d-flex align-center mb-3">
        <img class="mr-1" src="@/assets/icons/phone.svg">
        <h6 class="regular-h6">+00 00-0000-0000</h6>
      </div> -->
      <div class="d-flex align-center">
        <img class="mr-1" src="@/assets/icons/arroba.svg">
        <h6 class="regular-h6">admin@study2u.com</h6>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      loading: false,
      error: {
        name: "",
        email: "",
        message: ""
      }
    }
  },
  methods: {
    async clickSubmit() {
      if (!this.validation() && !this.loading) {
        this.loading = true
        await this.$axios.post("v1/contact_us", { contact: this.form })
        .then((res) => {
          if (res.status == 201) {
            this.$store.dispatch("snackbar/getSnackbar", {
              show: true,
              color: "#74b816",
              icon: "mdi-check",
              title: "Submit Success",
              message: res.data.message
            })
          }
        })
        .catch(err => {
          this.$store.dispatch("snackbar/getSnackbar", {
            show: true,
            color: "#ff004a",
            icon: "mdi-close-circle-outline",
            title: "Submit Failed",
            message: err.response ? err.response.data.message : err
          })
        })
        this.loading = false
        this.form = {
          name: "",
          email: "",
          message: ""
        }
      }
    },
    validation() {
      // check required
      let error = false
      Object.keys(this.error).forEach(key => {
        this.error[key] = ""
        if (!this.form[key]) {
          this.error[key] = `${key} is required`
          error = true
        } else {
          if (key == "email") {
            if (!/.+@.+\..+/.test(this.form[key])) {
              this.error[key] = "E-mail must be valid"
              error = true
            }
          }
        }
      });
      return error
    }
  },
}
</script>

<style lang="scss">
  .contact-form {
    background: #F3F3F3;
    padding-top: 60px;
    padding-bottom: 162px;

    .regular-h6 {
      max-width: 550px;
    }

    .wrap-form {
      padding: 21px 55px 31px;
      max-width: 645px;
      background: #fff;
      border-radius: 26px;
      margin: 23px 0 52px;

      .btn-submit {
        font-size: 20px;
        font-weight: 700;
        border-radius: 16px;
        color: #fff;

        circle {
          color: #fff;
        }
      }

      textarea {
        border: 1px solid #000000;
        width: 100%;
        max-width: 400px;
        height: 160px;
        padding: 8px;
        resize: initial;
        outline: none;
      }

      .v-input {
        max-width: 400px;

        .v-input__slot {
          padding: 0 8px !important;
          min-height: 38px !important;
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .contact-form {
      .wrap-form {
        padding: 21px 20px 31px;

        .btn-submit {
          width: 100% !important;
        }

        .v-input,
        textarea {
          max-width: 100%;
        }
      }
    }
  }
</style>