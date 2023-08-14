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
        <v-text-field 
          outlined
          placeholder="Take The First Step" 
          hide-details
        >
          <template v-slot:append>
            <img src="@/assets/icons/magnifying-glass.svg">
          </template>
        </v-text-field>
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
          <nuxt-link v-if="isLogin" class="d-flex flex-column align-center" to="">
            <img height="24" width="24" src="@/assets/images/Ellipse 1 4.png" alt="Ellipse 1 4">
            <div class="regular-body d-flex align-center">
              Jhonny <img width="16" height="16" class="ml-1" src="@/assets/icons/chevron-down.svg">
            </div>
          </nuxt-link>
          <nuxt-link v-else class="regular-body d-flex align-center" to="/login">
            <img class="mr-1" src="@/assets/icons/user-circle.svg" alt="user-circle">
            Log In
          </nuxt-link>
        </div>
      </div>
      <div class="nav-mobile">
        <v-btn icon @click="showNavigation =  true">
          <img src="@/assets/icons/bars-3.svg" alt="bars-3.">
        </v-btn>
        <v-navigation-drawer
          v-model="showNavigation"
          fixed
          temporary
          location="right"
        >
          <v-list nav>
            <v-list-item class="py-8">
              <img height="41.93px" src="@/assets/images/logo-study2u.svg" alt="logo">
            </v-list-item>
            <v-list-item v-for="(item, index) in listNavigation" :key="index">
              <nuxt-link class="semibold-subtitle" to="">
                {{ item.name }}
              </nuxt-link>
            </v-list-item>
            <v-divider class="my-4" />
            <v-list-item>
              <nuxt-link v-if="isLogin" class="d-flex align-center" to="">
                <img height="40" width="40" src="@/assets/images/Ellipse 1 4.png" alt="Ellipse 1 4">
                <div class="regular-subtitle ml-4">
                  Jhonny
                </div>
              </nuxt-link>
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
      listNavigation: [
        {
          name: "Institution",
          to: "/institution"
        },
        {
          name: "Course",
          to: ""
        },
        {
          name: "Mentor Connect",
          to: ""
        }
      ]
    }
  },
  computed: {
    isLogin() {
      if (this.$route.name == 'dashboard') {
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

    .wrap-search {
      max-width: 414px;
      width: 100%;

      .v-input {
        max-width: 322px !important;
        font-size: 12px;
      }

      .v-text-field--enclosed {
        .v-input__append-inner {
          margin-top: 11px;
        }
      }
    }

    .nav-mobile {
      display: none;
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