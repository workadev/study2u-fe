export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Study2U',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: `At Study2U, we're dedicated to empowering students like you to embark on an extraordinary educational journey. Our platform is designed to connect you with valuable resources, incredible opportunities, and a network of like-minded individuals who share your passion for learning and growth.`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Study2U',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `At Study2U, we're dedicated to empowering students like you to embark on an extraordinary educational journey. Our platform is designed to connect you with valuable resources, incredible opportunities, and a network of like-minded individuals who share your passion for learning and growth.`,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://study-2u.web.app',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: `study-2u.web.app`,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: `Website`,
      },
      {
        hid: 'article:publisher',
        property: 'article:publisher',
        content: `study-2u.web.app`,
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: `id_ID`,
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/style/index.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' },
    { src: './plugins/action-cable.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/device',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  env: {
    apiUrl: process.env.apiUrl,
    WEBSOCKET_HOST: process.env.WEBSOCKET_HOST,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.apiUrl
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
