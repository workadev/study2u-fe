<template>
  <div class="footer">
    <v-container class="py-0">
      <div class="pt-10 pb-8 mx-5 d-flex justify-space-between flex-wrap">
        <div class="wrap-nav-footer d-flex justify-space-between mr-2">
          <div class="nav-footer d-flex flex-column">
            <div class="semibold-title mb-2">
              Who we are
            </div>
            <nuxt-link class="semibold-body mb-2" to="">
              Our Missions
            </nuxt-link>
            <nuxt-link class="semibold-body mb-2" to="">
              Our Story
            </nuxt-link>
            <nuxt-link class="semibold-body" to="">
              Our Principle
            </nuxt-link>
          </div>
          <div class="nav-footer d-flex flex-column px-2">
            <div class="semibold-title mb-2">
              Contact
            </div>
            <a class="semibold-body mb-2" href="mailto:admin@study2u.com">
              admin@study2u.com
            </a>
            <a class="semibold-body" href="tel://0811-8822-7789">
              +62811 8822 7789
            </a>
          </div>
          <div class="nav-footer d-flex flex-column">
            <div class="semibold-title mb-2">
              Information
            </div>
            <nuxt-link class="semibold-body mb-2" to="">
              Term of Services
            </nuxt-link>
            <nuxt-link class="semibold-body" to="">
              Privacy Policy
            </nuxt-link>
          </div>
        </div>
        <div class="wrap-connect">
          <div class="semibold-subtitle">
            Connect with us
          </div>
          <div class="d-flex group-sosmed mt-2">
            <a href="" target="_blank">
              <img src="@/assets/icons/youtube.svg" alt="youtube">
            </a>
            <a href="" target="_blank">
              <img src="@/assets/icons/linkedin.svg" alt="linkedin">
            </a>
            <a href="" target="_blank">
              <img src="@/assets/icons/instagram.svg" alt="instagram">
            </a>
            <a href="" target="_blank">
              <img src="@/assets/icons/facebook.svg" alt="facebook">
            </a>
          </div>
        </div>
      </div>
      <v-divider color="#C5F2FB" />
      <div class="pb-10 mt-8">
        <div class="regular-body mx-5">
          <span class="semibold-body">Copyright</span> of Study2U {{ new Date().getFullYear() }}. All Right Reserved
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .footer {
    background: $color-space;
    border-top: 4px solid $color-pacific;
    background-image: url("@/assets/images/background/bg-footer.svg");
    background-repeat: no-repeat;
    background-position: bottom left;

    .group-sosmed {
      a {
        margin-right: 8px;
      }

      a:last-child {
        margin-right: 0px;
      }
    }

    .wrap-nav-footer {
      width: 100%;
      max-width: 448px;
    }

    .semibold-subtitle,
    .semibold-title,
    .regular-body,
    .semibold-body {
      color: $color-white;
      text-decoration: none;
    }
  }

  @media screen and(max-width: 668px) {
    .footer {
      .mx-5 {
        margin-left: 0px !important;
        margin-right: 0px !important;
      }
      .wrap-connect {
        margin-top: 40px;
      }
    }
  }
</style>