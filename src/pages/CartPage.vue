<template>
  <q-page class="bg-background q-pa-xl">
    <div class="container-limit">
      <h1 class="text-h4 text-weight-light q-mb-xl text-brand">TU CARRITO</h1>

      <div v-if="store.cart.length > 0" class="row q-col-gutter-lg">
        <div class="col-12 col-md-8">
          <q-list bordered separator class="bg-white rounded-borders no-shadow">
            <q-item v-for="item in store.cart" :key="item.id" class="q-py-md">
              <q-item-section avatar>
                <q-img :src="item.image" style="width: 80px; height: 80px" class="rounded-borders" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-subtitle1 text-weight-medium">{{ item.name }}</q-item-label>
                <q-item-label caption>{{ item.category }}</q-item-label>
                <q-item-label class="text-primary text-weight-bold q-mt-sm">
                  {{ item.quantity }} x ${{ item.price.toLocaleString('es-CL') }}
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-btn flat round color="grey-4" icon="delete" @click="store.removeFromCart(item.id)" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="q-pa-md no-shadow">
            <div class="text-h6 q-mb-md text-weight-light">RESUMEN</div>
            <div class="row justify-between q-mb-sm">
              <span class="text-grey-7">Subtotal</span>
              <span>${{ store.cartTotal.toLocaleString('es-CL') }}</span>
            </div>
            <div class="row justify-between q-mb-md">
              <span class="text-grey-7">Envío</span>
              <span :class="store.cartTotal >= 60000 ? 'text-green text-weight-bold' : ''">
                {{ store.cartTotal >= 60000 ? 'Gratis' : '$5.000' }}
              </span>
            </div>
            <q-separator class="q-my-md" />
            <div class="row justify-between text-h5 text-weight-medium q-mt-md">
              <span>Total</span>
              <span class="text-primary">${{ (store.cartTotal >= 60000 ? store.cartTotal : store.cartTotal + 5000).toLocaleString('es-CL') }}</span>
            </div>
            <q-btn color="primary" label="PAGAR AHORA" class="full-width q-mt-xl" size="lg" no-caps />
          </q-card>
        </div>
      </div>

      <div v-else class="text-center q-pa-xl">
        <q-icon name="shopping_bag" size="100px" color="grey-3" />
        <div class="text-h5 text-grey-5 q-mt-md text-weight-light">Tu carrito está vacío</div>
        <q-btn outline color="primary" label="VER PRODUCTOS" to="/catalog" class="q-mt-lg" no-caps />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useProductStore } from 'src/stores/productStore'
const store = useProductStore()
</script>

<style scoped>
.bg-background { background-color: #FAF6F2; }
.text-brand { color: #B1948B; }
.container-limit { max-width: 1100px; margin: 0 auto; }
.no-shadow { box-shadow: none !important; }
</style>