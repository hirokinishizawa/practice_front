const pkg = require('./package')

const isDebug = () => process.env.APP_DEBUG && process.env.APP_DEBUG !== 'false'

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  router: {
    base: '/',
    middleware: ['check-auth'],
    extendRoutes(routes) {
      routes.push({
        name: 'app-root',
        path: '/',
        redirect: { name: '/' }
      })
    },
    parseQuery(query) {
      return require('query-string').parse(query, {
        arrayFormat: 'bracket'
      })
    },
    stringifyQuery(params) {
      if (Object.keys(params).length === 0) {
        return ''
      }
      const query = require('query-string').stringify(params, {
        arrayFormat: 'bracket'
      })
      return `?${query}`
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: process.env.API_ROOT || 'http://localhost:8000',
    redirectError: {
      401: '/logout'
    },
    debug: isDebug()
  },

  build: {
    transpile: [/^element-ui/],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
