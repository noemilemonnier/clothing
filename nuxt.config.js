import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Clothing Warehouse',
    title: 'Clothing Warehouse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  //Custom loading bar color
  loading: {
    color: '#0277bd'
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/icons'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  axios: {
    baseURL: "https://bad-api-assignment.reaktor.com",
    proxyHeaders: false,
    credentials: false
  },

  proxy: {
    '/api': {
      target: 'https://bad-api-assignment.reaktor.com',
      pathRewrite: {
        '^/api' : '/'
        },
      changeOrigin: true
    }
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: { font: false, icons: false },
    icons: {
      iconfont: 'mdiSvg',
    },
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#72c6f6', // custom blue
          accent: '#b1b1b1', // custom gray
          secondary: '#e8b266', // custom faded orange
          background: '#e3e3e3', // grey lighten-4
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: '#7e7e7e', // custom gray
          accent: colors.grey.darken3,
          secondary: '#9c27b0', //custom indigo
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
