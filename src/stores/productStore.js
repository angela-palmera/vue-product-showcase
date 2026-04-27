import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    filter: 'TODOS',
    cart: []
  }),
  getters: {
    cartCount: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
    // Calcula el total de la compra
    cartTotal: (state) => state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
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
    // Eliminar un producto del carro
    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id)
    }
  }
})