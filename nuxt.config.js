/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-04 06:17:10
 * @LastEditTime: 2019-08-11 20:08:07
 * @LastEditors: Please set LastEditors
 */
const version = require('./package.json')
module.exports = {
  mode: 'universal',
  transition: {
    name: 'layout',
    mode: 'out-in'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'https://static.yladm.com/image/favicon.ico'
      }
    ],
    script: []
  },
  build: {
    // transpile: ['vant']
  },
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/common.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-vant.js',
    '~plugins/util.client.js',
    '~plugins/util.server.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
   ** Build configuration
   */
  // eslint-disable-next-line no-dupe-keys
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    publicPath: `https://static.yladm.com/Transformers/Bruticus/prod/${version}`
  }
}
