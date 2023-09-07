<template>
  <div id="navigation" class="navigation">
    <v-container class="pt-0 pb-0 d-flex align-center justify-space-between">
      <div class="d-flex align-start mr-4">
        <img
          height="81"
          width="95"
          src="@/assets/images/logo-s.svg"
          alt="logo"
          @click="$router.push('/')"
        >
        <img class="mt-1" src="@/assets/images/beta.svg">
      </div>
      <div class="d-flex align-center nav-desktop">
        <div class="nav-header d-flex align-center mr-16">
          <nuxt-link 
            v-for="(item, index) in listNavigation" :key="index"
            class="item-nav" 
            :class="{
              'mr-7': listNavigation.length -1 != index,
              'active': item.to == $route.path,
              'disabled': item.disabled
            }"
            :to="item.to"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
        <div>
          <nuxt-link v-if="!isLogin" class="d-flex align-center btn-login" to="/login">
            LOGIN
          </nuxt-link>
        </div>
      </div>
      <div class="nav-mobile">
        <v-btn icon @click="showNavigation =  true">
          <img src="@/assets/icons/bars-3.svg">
        </v-btn>
        <v-navigation-drawer
          v-model="showNavigation"
          fixed
          temporary
          location="right"
        >
          <v-list nav>
            <v-list-item class="py-5">
              <div class="d-flex align-start">
                <img
                  height="81"
                  width="95"
                  src="@/assets/images/logo-s.svg"
                  alt="logo"
                  @click="$router.push('/')"
                >
                <img class="mt-1" src="@/assets/images/beta.svg">
              </div>
            </v-list-item>
            <v-list-item v-for="(item, index) in listNavigation" :key="index" class="mb-0">
              <nuxt-link class="item-nav" :class="{disabled: item.disabled}" :to="item.to">
                {{ item.name }}
              </nuxt-link>
            </v-list-item>
            <v-divider class="my-3" />
            <v-list-item>
              <nuxt-link v-if="!isLogin" class="d-flex align-center btn-login" to="/login">
                LOGIN
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavigation: false,
      listNavigation: [
        {
          name: "INSTITUTIONS",
          to: "/institution"
        },
        {
          name: "COMPARISON",
          to: "/comparison"
        },
        {
          name: "COURSE",
          to: "/course",
          disabled: true
        },
        {
          name: "SCHOLARSHIP",
          to: "/scholarship",
          disabled: true
        }
      ],
    }
  },
  computed: {
    isLogin() {
      if (this.$route.name == 'dashboard' || this.$route.name == 'profile') {
        return true
      }
    }
  },
  mounted() {
    let getElement = document.getElementById('navigation')
    window.onscroll = function () {
      if (window.pageYOffset > 10) {
        getElement.classList.add('stickyBorder')
      } else {
        getElement.classList.remove('stickyBorder')
      }
    }
  },
}
</script>

<style lang="scss">
  .navigation {
    background: $color-white;
    padding: 12px 0;
    position: sticky;
    top: 0px;
    z-index: 7;
    transition: all .3s;

    .nav-desktop {
      .btn-login {
        font-weight: 700;
        font-size: 14px;
        width: 99px;
        height: 35px;
        border: 3px solid #FF5ABE;
        border-radius: 14px;
        justify-content: center;
      }
    }

    .btn-profile {
      cursor: pointer;
      display: flex;
      flex-flow: column;
      align-items: center;
    }

    .nav-mobile {
      display: none;

      .item-nav {
        font-weight: 700;
      }

      .disabled {
        pointer-events: none;
        color: #BCBCBC !important;
      }

      .btn-login {
        font-weight: 700;
        font-size: 14px;
        width: 99px;
        height: 35px;
        border: 3px solid #FF5ABE;
        border-radius: 14px;
        justify-content: center;
      }
    }

    a {
      text-decoration: none;
      color: #000000 !important;
      min-width: max-content;
    }

    .nav-header {
      .item-nav {
        font-size: 20px;
        font-weight: 700;

        .v-divider {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 0px;
          transition: all .2s;
        }
      }

      .disabled {
        pointer-events: none;
        color: #BCBCBC !important;
      }
    }
  }

  .stickyBorder {
    border-bottom: 1px solid #FF5ABE;
  }

  @media screen and(max-width: 865px) {
    .navigation {
      .nav-desktop {
        display: none !important;
      }

      .nav-mobile {
        display: block;
      }
    }
  }
</style>