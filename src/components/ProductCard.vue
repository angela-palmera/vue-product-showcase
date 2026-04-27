<template>
  <q-card class="my-card">
    <q-img :src="image" style="height: 200px" fit="contain" class="q-pa-sm" />

    <q-card-section>
      <div class="text-subtitle1 text-weight-medium">{{ name }}</div>
      <div class="text-caption text-grey">{{ category }}</div>
      
      <div class="text-primary text-weight-bold q-mt-sm">
        $ {{ (price || 0).toLocaleString('es-CL') }}
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn 
        flat 
        color="primary" 
        label="Agregar" 
        @click="onAddToCart"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useProductStore } from 'src/stores/productStore'

const props = defineProps({
  id: [Number, String],
  name: String,
  price: Number,
  image: String,
  category: String
})

const store = useProductStore()

const onAddToCart = () => {
  store.addToCart({
    id: props.id || Date.now(),
    name: props.name,
    price: props.price,
    image: props.image,
    category: props.category
  })
}
</script>

<style scoped>
.my-card {
  border-radius: 12px;
  transition: transform 0.2s;
}
.my-card:hover {
  transform: translateY(-5px);
}
</style>