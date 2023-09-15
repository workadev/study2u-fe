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
          <div
            v-for="(item, index) in listNavigation" :key="index"
          >
            <nuxt-link 
              v-if="item.to || !item.subNav"
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
            <v-menu
              v-else
              transition="slide-y-transition"
              offset-y
              content-class="menu-dropdown"
            >
              <template v-slot:activator="{ attrs, on }">
                <div
                  v-bind="attrs"
                  v-on="on"
                  class="item-nav" 
                  :class="{
                    'mr-7': listNavigation.length -1 != index,
                    'active': item.to == $route.path,
                    'disabled': item.disabled
                  }"
                >
                  {{ item.name }}
                  <img
                    src="@/assets/icons/chevron-down.svg"
                    width="18"
                    class="nav-arrow"
                  >
                </div>
              </template>
              <v-list class="wrap-nav-dropdown">
                <v-list-item
                  v-for="(subItem, subIndex) in item.subNav" 
                  :key="subIndex"
                  link
                  :to="subItem.to"
                >
                  {{ subItem.name }}
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div>
          <nuxt-link v-if="!isLogin" class="d-flex align-center btn-login" to="/login">
            SIGN IN/REGISTER
          </nuxt-link>
          <div v-else class="d-flex avatar">
            <nuxt-link to="/profile" class="d-flex">
              <img src="@/assets/images/mini avatar.png">
            </nuxt-link>
          </div>
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
            <v-list-item 
              v-for="(item, index) in listNavigation" 
              :key="index" 
              class="mb-0"
              :style="{minHeight: !item.to ? 'fit-content': ''}"
            >
              <nuxt-link
                v-if="item.to"
                class="item-nav"
                :class="{disabled: item.disabled}"
                :to="item.to"
              >
                {{ item.name }}
              </nuxt-link>
              <v-expansion-panels v-else class="wrap-dropdown">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ item.name }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content v-for="(subItem, subIndex) in item.subNav" :key="subIndex">
                    <nuxt-link to="" class="link">
                      {{ subItem.name }}
                    </nuxt-link>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-list-item>
            <v-divider class="my-3" />
            <v-list-item>
              <nuxt-link v-if="!isLogin" class="d-flex align-center btn-login" to="/login">
                SIGN IN/REGISTER
              </nuxt-link>
              <div v-else class="d-flex avatar">
                <nuxt-link to="/profile" class="d-flex">
                  <img width="70" src="@/assets/images/mini avatar.png">
                </nuxt-link>
              </div>
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
          name: "WHO WE ARE",
          to: "",
          subNav: [
            { name: "Our Mission", to: "" },
            { name: "Our Story", to: "" },
            { name: "Our Principles", to: "" },
          ]
        },
        {
          name: "INSTITUTIONS",
          to: "/institutions"
        },
        // {
        //   name: "COURSES",
        //   to: "/courses"
        // },
        {
          name: "MENTOR CONNECT",
          to: "/mentor"
        },
        // {
        //   name: "STUDY & YOU",
        //   to: "",
        //   subNav: [
        //     { name: "Study", to: "" },
        //   ]
        // }
      ],
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.login.isLogin
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
  .menu-dropdown {
    box-shadow: 0px 4px 4px 0px #00000040;
    border: 2px solid #000000;
    border-radius: 0px;
    min-width: 250px !important;
    margin-left: -130px;
    margin-top: 20px;
  
    .wrap-nav-dropdown {
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 27px;

      .v-list-item {
        margin: 0 18px;
        min-height: fit-content;
        padding: 5px 0 12px;
        background-image: linear-gradient(to right, #000000 24%, rgba(255, 255, 255, 0) 0%);
        background-size: 7px 2px;
        background-repeat: repeat-x;
        background-position: bottom;
      }
    }
  }

  .navigation {
    padding: 12px 0;
    position: sticky;
    top: 0px;
    z-index: 7;
    transition: all .3s;
    background: #fff;

    .nav-desktop {
      .avatar {
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }

      .btn-login {
        font-weight: 700;
        font-size: 14px;
        width: 169px;
        height: 35px;
        border: 3px solid #FABF48;
        border-radius: 14px;
        justify-content: center;
        cursor: pointer;
      }
    }

    .nav-mobile {
      display: none;

      .wrap-dropdown {
        border-radius: 0px;

        .link {
          font-weight: 700;
        }

        ::before {
          box-shadow: none !important;
        }

        .v-expansion-panel-content__wrap {
          padding: 0 12px 16px;
        }

        .v-expansion-panel-header {
          padding: 0px;
          font-size: 16px;
          font-weight: 700;
          color: #000000;
        }

        .v-expansion-panel--active {
          .v-expansion-panel-header {
            min-height: 48px;
          }
        }
      }

      .item-nav {
        font-weight: 700;
        transition: all .3s;
      }

      .disabled {
        pointer-events: none;
        color: #BCBCBC !important;
      }

      .btn-login {
        font-weight: 700;
        font-size: 14px;
        width: 169px;
        height: 35px;
        border: 3px solid #FABF48;
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
        transition: all .3s;
        position: relative;

        .nav-arrow {
          position: absolute;
          right: 0px;
          bottom: 0px;
          margin-bottom: -20px;
        }

        .v-divider {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 0px;
          transition: all .2s;
        }
      }

      .active {
        color: #FF5ABE !important;
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

  @media screen and(max-width: 875px) {
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