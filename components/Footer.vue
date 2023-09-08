<template>
  <div class="footer">
    <v-container>
      <div class="d-flex justify-space-between content-footer">
        <div class="mr-5">
          <div class="d-flex align-start wrap-logo">
            <img
              height="81"
              width="95"
              src="@/assets/images/logo-s.svg"
              alt="logo"
              @click="$router.push('/')"
            >
            <img class="mt-1" src="@/assets/images/beta.svg">
          </div>
          <div class="d-flex flex-column ml-4">
            <nuxt-link 
              v-for="(item, index) in listFooter" 
              :key="index" 
              class="link-item" 
              :to="item.to"
              :class="{disabled: item.disabled}"
            >
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
        <div class="content-right mr-4">
          <div class="more">MORE FROM US</div>
          <div class="text-more">Subscribe to our newsletter and keep up to date with the latest news from study2u</div>
          <div class="wrap-input mt-5">
            <input type="text" placeholder="Your email">
            <v-btn elevation width="135" class="btn-subscribe" color="#D9D9D9">
              Subscribe
            </v-btn>
          </div>
          <div class="d-flex flex-wrap justify-space-between align-center">
            <div class="mr-2 mt-4">Quick response email <a href="mailto:info@study2u.com">info@study2u</a></div>
            <div class="icon-sosmed mt-4">
              <a href="">
                <img src="@/assets/icons/icon-twitterbird.svg">
              </a>
              <a href="">
                <img src="@/assets/icons/icon-facebook.svg">
              </a>
              <a href="">
                <img src="@/assets/icons/icon-instagram.svg">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="mr-14">
          © {{ new Date().getFullYear() }} study2u. All rights reserved.
        </div>
        <div class="d-flex content-copyright">
          <nuxt-link to="">Privacy Policy</nuxt-link>
          <nuxt-link to="" class="mx-0">Terms & Conditions</nuxt-link>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listFooter: [
        {
          name: "Home",
          to: "/"
        },
        {
          name: "Comparison",
          to: "/comparison"
        },
        {
          name: "Courses",
          to: "/courses"
        },
        {
          name: "About us",
          to: "/about-us"
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  .footer {
    background: #231A50;

    .copyright {
      padding-top: 39px;
      margin-top: 57px;
      background-image: linear-gradient(to right, #ffffff 24%, rgba(255, 255, 255, 0) 0%);
      background-position: top;
      background-size: 14px 2px;
      background-repeat: repeat-x;
      display: flex;
      flex-wrap: wrap-reverse;

      a {
        text-decoration: none;
        margin-right: 33px;
      }
    }

    .content-right {
      max-width: 429px;

      .icon-sosmed {
        a {
          margin-right: 27px;
        }

        a:last-child {
          margin-right: 0px;
        }
      }

      .wrap-input {
        border: 2px solid #fff;
        border-radius: 12px;
        padding: 6px 7px 6px 27px;
        display: flex;
        justify-content: space-between;

        .btn-subscribe {
          font-size: 22px;
          border-radius: 10px;
        }
        
        input {
          color: #fff;
          font-size: 22px;
          width: 100%;
          margin-right: 20px;
          outline: none;
        }

        ::placeholder {
          color: #fff;
          opacity: 1;
        }
      }

      .text-more {
        line-height: 20.7px;
        margin-top: 10px;
      }

      .more {
        font-size: 24px;
        font-weight: 700;
      }
    }

    .wrap-logo {
      margin-bottom: 14px;
    }

    .link-item {
      color: #fff !important;
      text-decoration: none;
      margin-bottom: 20px;
    }

    .link-item:last-child {
      margin-bottom: 0px;
    }

    .container {
      padding-top: 52px;
      padding-bottom: 33px;
    }

    div,
    a {
      color: #fff !important;
    }

    .disabled {
      pointer-events: none;
      color: #473D7A !important;
    }
  }

  @media screen and(max-width: 700px) {
    .footer {
      .content-footer {
        flex-wrap: wrap;
      }
    }
  }

  @media screen and(max-width: 634px) {
    .footer {
      .content-footer {
        .content-right {
          margin-top: 20px;
        }
      }
    }
  }

  @media screen and(max-width: 586px) {
    .footer {
      .copyright {
        .content-copyright {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>