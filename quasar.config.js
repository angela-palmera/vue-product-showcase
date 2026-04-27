import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => {
  return {
    css: [
      'app.scss'
    ],

    extras: [
      'material-icons'
    ],

    build: {
      vueRouterMode: 'hash',
      publicPath: '/vue-product-showcase/'
    }
  }
})