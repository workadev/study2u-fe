<template>
  <div class="header">
    <v-container class="pt-0 pb-0 d-flex align-center justify-space-between">
      <img height="41.93px" src="@/assets/images/logo-study2u.svg" alt="logo">
      <div class="d-flex align-center nav-desktop">
        <div class="nav-header d-flex align-center pr-4 mr-4">
          <nuxt-link 
            v-for="(item, index) in listNavigation" :key="index"
            class="semibold-subtitle" 
            :class="{'mr-7': listNavigation.length -1 != index}"
            to=""
          >
            {{ item.name }}
          </nuxt-link>
        </div>
        <div>
          <nuxt-link class="semibold-subtitle d-flex align-center" to="">
            <img class="mr-2" src="@/assets/icons/user-circle.svg" alt="user-circle">
            Sign In
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
              <nuxt-link class="semibold-subtitle d-flex align-center" to="">
                <img class="mr-2" src="@/assets/icons/user-circle.svg" alt="user-circle">
                Sign In
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
          to: ""
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
}
</script>

<style lang="scss">
  .header {
    background: $color-white;
    padding: 19px 0;
    position: sticky;
    top: 0px;
    z-index: 7;
    border-bottom: 1px solid $color-space;

    .nav-mobile {
      display: none;
    }

    .nav-header {
      height: 40px;
      border-right: 1px solid $color-dark-grey;

    }

    a {
      text-decoration: none;
      color: $color-black !important;
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