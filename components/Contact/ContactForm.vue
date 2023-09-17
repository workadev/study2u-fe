<template>
  <div class="contact-form">
    <v-container class="py-0">
      <h5 class="bold-h5">Contact Us</h5>
      <div class="wrap-form">
        <v-text-field hide-details height="38" placeholder="Name" />
        <v-text-field hide-details height="38" placeholder="e-mail" />
        <textarea class="mt-9" placeholder="message" cols="30" rows="10" />
        <v-btn
          elevation
          color="#09B6DE"
          dark
          class="btn-submit mt-6"
          height="58"
          width="189"
        >
          SUBMIT
        </v-btn>
      </div>
      <h5 class="bold-h5">Partnership Inquiries</h5>
      <h6 class="regular-h6 my-3">
        Tempor orci dapibus ultrices in iaculis nunc sed. Mauris ultrices eros in cursus turpis massa tincidunt. Interdum posuere lorem ipsum dolor sit amet.
      </h6>
      <div class="d-flex align-center mb-3">
        <img class="mr-1" src="@/assets/icons/phone.svg">
        <h6 class="regular-h6">+00 00-0000-0000</h6>
      </div>
      <div class="d-flex align-center">
        <img class="mr-1" src="@/assets/icons/arroba.svg">
        <h6 class="regular-h6">email@address.com</h6>
      </div>
    </v-container>
  </div>
</template>

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