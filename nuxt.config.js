module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        'http-equiv': 'X-UA-Compatible',
        'content': 'IE=edge'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'shortcut icon', type: 'image/x-icon', href: 'https://static.yladm.com/image/favicon.ico' }, {
      rel: 'stylesheet',
      href: 'https://static.yilan.tv/Transformers/Brawn/ylplayer/ylplayer.min.css'
    }],
    script: [{
      src: 'https://static.yilan.tv/Transformers/Brawn/ylplayer/rem.js',
      type: 'text/javascript'
    }, {
      src: 'https://static.yilan.tv/Transformers/Brawn/ylplayer/ylplayer.min.js',
      type: 'text/javascript'
    }]
  },
  server: {
    host: '0.0.0.0'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/common.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
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
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
