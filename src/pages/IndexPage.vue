<template>
  <q-page class="bg-background">
    
    <!-- Banner -->
    <section class="banner-section">
      <q-img
        v-if="$q.screen.gt.sm"
        src="/vue-product-showcase/Banner_desktop.jpg"
        class="full-width"
        style="height: auto; max-height: 600px;"
        fit="cover"
      />
      <q-img
        v-else
        src="/vue-product-showcase/Banner_mobile.jpg"
        class="full-width"
        style="height: auto; max-height: 500px;"
        fit="cover"
      />
    </section>

    <!-- Productos -->
    <section class="q-pa-xl container-limit">
      
      <div class="row items-center justify-center q-mb-xl">
        <h1 class="text-h4 text-weight-light text-brand q-ma-none" style="letter-spacing: 2px;">
          {{ store.filter === 'TODOS' ? 'NUESTROS FAVORITOS' : store.filter }}
        </h1>

        <q-btn 
          v-if="store.filter !== 'TODOS'" 
          flat 
          label="Ver todos" 
          color="grey-7" 
          icon="close" 
          @click="store.filter = 'TODOS'" 
          no-caps 
          class="q-ml-md" 
        />
      </div>

      <div class="row q-col-gutter-xl justify-center">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id" 
          class="col-12 col-sm-6 col-md-3"
        >
          <ProductCard 
            :name="product.name" 
            :price="product.price" 
            :image="product.image"
            :category="product.category"
          />
        </div>
      </div>

    </section>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useQuasar } from 'quasar'
import { useProductStore } from 'src/stores/productStore'
import ProductCard from 'components/ProductCard.vue'

const $q = useQuasar()
const store = useProductStore()

const products = [
  { id: 1, name: 'Crema Madagascar Centella', price: 30000, category: 'CREMAS', image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/skin-1004-madagascar-centella-soothing-cream-mini-30ml/30/709/XXL_p0173470930.jpg' },
  { id: 2, name: 'Serum PDRN Pink Peptide', price: 32000, category: 'SERUM', image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/medicube-pdrn-pink-peptide-serum-30ml/54/143/XXL_p0210614354.jpg' },
  { id: 3, name: 'Limpiador H.C.T Bubble', price: 28990, category: 'LIMPIEZA', image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/mixsoon-hct-bubble-cleanser-150ml/30/611/XXL_p0185161130.jpg' },
  { id: 4, name: 'Set Mascarillas BIODANCE', price: 30000, category: 'MASCARILLAS', image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/biodance-bundle-bio-collagen-real-deep-mask-set-refreshing-sea-kelp-real-deep-mask-set-hydro-cera-nol-real-deep-mask-set/13/803/XXL_p0219480313.jpg' }
]

const filteredProducts = computed(() => {
  if (store.filter === 'TODOS') return products
  return products.filter(p => p.category === store.filter)
})
</script>

<style scoped>
.bg-background { background-color: #F5EAE1; }
.text-brand { color: #B1948B; }
.container-limit { max-width: 1400px; margin: 0 auto; }
</style>