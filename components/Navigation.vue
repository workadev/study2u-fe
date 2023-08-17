<template>
  <div class="header">
    <v-container class="pt-0 pb-0 d-flex align-center justify-space-between">
      <div class="d-flex wrap-search mr-4">
        <img
          class="mr-4"
          height="48.92px"
          src="@/assets/images/logo-s.svg"
          alt="logo"
          @click="$router.push('/')"
        >
        <div id="menu-activator">
          <v-text-field 
            outlined
            placeholder="Search" 
            hide-details
            :class="{'active-search': suggestionSearch}"
          >
            <template v-slot:append>
              <img src="@/assets/icons/magnifying-glass.svg">
            </template>
          </v-text-field>
        </div>
        <v-menu 
          v-model="suggestionSearch" 
          activator="#menu-activator"
          content-class="menu-search"
        >
          <div class="wrap-menu">
            <div class="group-top">
              <div class="regular-subtitle">
                What are you looking for?
              </div>
              <div class="wrap-tag">
                <v-btn text class="item-tag">
                  <div class="semibold-body">College</div>
                </v-btn>
                <v-btn text class="item-tag">
                  <div class="semibold-body">University</div>
                </v-btn>
                <v-btn text class="item-tag">
                  <div class="semibold-body">People</div>
                </v-btn>
              </div>
            </div>
            <div class="group-bottom">
              <div class="regular-subtitle">
                History
              </div>
              <div class="d-flex flex-wrap mt-3">
                <v-btn text height="fit-content" class="regular-subtitle item-history">
                  Stanford University
                </v-btn>
              </div>
            </div>
          </div>
        </v-menu>
      </div>
      <div class="d-flex align-center nav-desktop">
        <div class="nav-header d-flex align-center pr-8 mr-6">
          <nuxt-link 
            v-for="(item, index) in listNavigation" :key="index"
            class="regular-body item-nav" 
            :class="{
              'mr-13': listNavigation.length -1 != index,
              'active': item.to == $route.path
            }"
            :to="item.to"
          >
            {{ item.name }}
            <v-divider color="#1A334F" />
          </nuxt-link>
        </div>
        <div>
          <v-menu
            activator="#activator-profile"
            content-class="menu-profile"
            v-model="activatorProfile"
          >
            <div class="d-flex flex-column wrap-menu">
              <v-btn
                class="justify-start"
                v-for="(item, index) in menuProfile"
                :key="index"
                :to="item.to"
                text
                height="48"
              >
                <div class="mr-2 d-flex wrap-img justify-center">
                  <img 
                    :width="index == 0 ? 24 : 20" 
                    :height="index == 0 ? 24 : 20" 
                    :src="item.icon"
                  >
                </div>
                {{  item.name  }}
              </v-btn>
            </div>
          </v-menu>
          <div id="activator-profile" class="px-0 btn-profile" :style="{display: isLogin ? 'flex' : 'none'}">
            <img height="24" width="24" src="@/assets/images/Ellipse 1 4.png" alt="Ellipse 1 4">
            <div class="regular-body d-flex align-center">
              Jhonny <img width="16" height="16" class="ml-1" src="@/assets/icons/chevron-down.svg">
            </div>
          </div>
          <nuxt-link v-if="!isLogin" class="regular-body d-flex align-center" to="/login">
            <img class="mr-1" src="@/assets/icons/user-circle.svg" alt="user-circle">
            Log In
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
              <img height="41.93px" src="@/assets/images/logo-study2u.svg" alt="logo">
            </v-list-item>
            <v-list-item v-for="(item, index) in listNavigation" :key="index" class="mb-0">
              <nuxt-link class="regular-body" :to="item.to">
                {{ item.name }}
              </nuxt-link>
            </v-list-item>
            <v-divider class="my-3" />
            <v-list-item>
              <div v-if="isLogin">
                <div v-for="(item, index) in menuProfile" :key="index" class="menu-account">
                  <nuxt-link 
                    class="d-flex align-center regular-body" 
                    :to="item.to"
                  >
                    <div class="mr-2 d-flex wrap-img justify-center">
                      <img 
                        :width="index == 0 ? 24 : 20" 
                        :height="index == 0 ? 24 : 20" 
                        :src="item.icon"
                      >
                    </div>
                    {{  item.name  }}
                  </nuxt-link>
                </div>
              </div>
              <nuxt-link v-else class="semibold-subtitle d-flex align-center" to="/login">
                <img class="mr-2" src="@/assets/icons/user-circle.svg" alt="user-circle">
                Log In
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
      suggestionSearch: false,
      activatorProfile: false,
      listNavigation: [
        {
          name: "Institution",
          to: "/institution"
        },
        {
          name: "Course",
          to: "/course"
        },
        {
          name: "Mentor Connect",
          to: ""
        }
      ],
      menuProfile: [
        {
          icon: require("@/assets/images/Ellipse 1 4.png"),
          name: "Profile",
          to: "/profile"
        },
        {
          icon: require("@/assets/icons/heart.svg"),
          name: "Shortlist",
          to: ""
        },
        {
          icon: require("@/assets/icons/power.svg"),
          name: "Logout",
          to: ""
        }
      ]
    }
  },
  computed: {
    isLogin() {
      if (this.$route.name == 'dashboard' || this.$route.name == 'profile') {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
  .header {
    background: $color-white;
    padding: 16px 0;
    position: sticky;
    top: 0px;
    z-index: 7;
    border-bottom: 1px solid $color-space;

    .regular-body {
      color: $color-dark-grey;
    }

    .btn-profile {
      cursor: pointer;
      display: flex;
      flex-flow: column;
      align-items: center;
    }

    .wrap-search {
      max-width: 414px;
      width: 100%;

      #menu-activator {
        width: 100%;
        max-width: 322px !important;
      }

      .v-input {
        width: 100%;
        font-size: 12px;
      }

      .v-text-field--enclosed {
        .v-input__append-inner {
          margin-top: 11px;
        }
      }

      .active-search {
        .v-input__slot {
          border-radius: 8px 8px 0 0 !important;
        }
      }
    }

    .nav-mobile {
      display: none;

      .menu-account {
        height: 48px;
        display: flex;
        align-items: center;

        a {
          height: fit-content;
        }
      }
      
      .wrap-img {
        width: 24px;
      }
    }

    a {
      text-decoration: none;
      color: $color-dark-grey !important;
      min-width: max-content;

    }

    .nav-header {
      height: 40px;
      border-right: 0.5px solid $color-grey;

      .item-nav {
        padding: 6px 11.5px;
        position: relative;

        .v-divider {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 0px;
          transition: all .2s;
        }
      }

      .active {
        color: $color-space !important;

        .v-divider {
          border-width: 1px;
          width: 100%;
        }
      }

      .mr-13 {
        margin-right: 55.5px !important;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .header {
      .nav-desktop {
        display: none !important;
      }

      .nav-mobile {
        display: block;
      }
    }
  }
</style>