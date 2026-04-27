import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => {
  return {
    build: {
      vueRouterMode: 'hash',
      publicPath: '/vue-product-showcase/'
    }
  }
})