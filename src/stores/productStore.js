import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    filter: 'TODOS',
    cart: []
  }),
  getters: {

    cartCount: (state) => state.cart.reduce((total, item) => total + (item.quantity || 0), 0),
    
    cartTotal: (state) => state.cart.reduce((total, item) => {
      return total + ((item.price || 0) * (item.quantity || 0))
    }, 0)
  },
  actions: {
    setFilter(category) {
      this.filter = category
    },
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {

        this.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id)
    }
  }
})