<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-dark" flat bordered>
      
      <div class="bg-primary text-white text-center q-pa-xs text-caption text-weight-bold">
        Envío gratis por compras superiores a $60.000
      </div>

      <q-toolbar class="q-py-sm row items-center justify-between">

        <div class="col-4">
          <q-btn flat dense icon="menu" class="q-mr-sm lt-md" />
          
          <div class="gt-sm row gap-4 text-subtitle2">
            <q-btn 
              flat 
              label="Cremas" 
              to="/catalog" 
              @click="store.setFilter('CREMAS')" 
            />
            <q-btn 
              flat 
              label="Serum" 
              to="/catalog" 
              @click="store.setFilter('SERUM')" 
            />
            <q-btn 
              flat 
              label="Mascarillas" 
              to="/catalog" 
              @click="store.setFilter('MASCARILLAS')" 
            />
          </div>
        </div>

        <div class="col-4 text-center">
          <q-btn flat no-caps to="/" class="q-pa-none" @click="store.setFilter('TODOS')">
            <img 
              :src="baseUrl + 'logo.png'"
              class="logo-nuna"
              alt="nunaskincare.cl"
            />
          </q-btn>
        </div>

        <div class="col-4 text-right">
          <q-btn flat round dense icon="search" class="q-mr-xs" />
          <q-btn flat round dense icon="person_outline" class="q-mr-xs gt-xs" />
          
          <q-btn flat round dense icon="shopping_bag" to="/cart">
            <q-badge v-if="store.cartCount > 0" color="red" floating>
              {{ store.cartCount }}
            </q-badge>
          </q-btn>
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useProductStore } from 'src/stores/productStore'

const store = useProductStore()

const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>
.q-header {
  border-bottom: 1px solid #E8DFD5;
}

.logo-nuna {
  height: 70px;
  width: auto;
  display: block;
  margin: 0 auto;
}

.gap-4 {
  gap: 15px;
}

.bg-primary {
  background-color: #B1948B !important;
}
</style>