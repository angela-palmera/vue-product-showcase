<template>
  <q-page class="q-pa-md bg-background">
    <div class="container-limit">
      <h1 class="text-h4 text-brand text-center q-my-xl">MI CARRITO</h1>

      <div v-if="store.cart.length > 0">
        <q-list bordered separator class="bg-white rounded-borders">
          <q-item v-for="item in store.cart" :key="item.id" class="q-py-md">
            <q-item-section avatar>
              <q-img :src="item.image" style="width: 80px; height: 80px" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">{{ item.name }}</q-item-label>
              <q-item-label caption>{{ item.category }}</q-item-label>
              <q-item-label class="text-brand text-weight-bold">
                $ {{ (item.price || 0).toLocaleString('es-CL') }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
               <q-btn flat round icon="delete" color="negative" @click="store.removeFromCart(item.id)" />
            </q-item-section>
          </q-item>
        </q-list>

        <div class="text-right q-mt-lg">
          <div class="text-h5 text-brand">Total: $ {{ (store.cartTotal || 0).toLocaleString('es-CL') }}</div>
          <q-btn color="primary" label="Finalizar Compra" class="q-mt-md" no-caps />
        </div>
      </div>

      <div v-else class="text-center q-pa-xl">
        <q-icon name="shopping_bag" size="100px" color="grey-4" />
        <p class="text-h6 text-grey-6">Tu carrito está vacío</p>
        <q-btn outline color="brand" label="Ir a la tienda" to="/catalog" no-caps />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useProductStore } from 'src/stores/productStore'
const store = useProductStore()
</script>

<style scoped>
.text-brand { color: #B1948B; }
.bg-background { background-color: #F5EAE1; }
.container-limit { max-width: 800px; margin: 0 auto; }
</style>