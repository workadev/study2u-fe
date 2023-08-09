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
        content: 'Our mission is to empower you with the knowledge, resources and opportunities to unlock that potential and achieve greatness.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Study2U',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Our mission is to empower you with the knowledge, resources and opportunities to unlock that potential and achieve greatness.',
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
      },
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
    { src: './plugins/vue-carousel.js', mode: 'client' }
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

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
