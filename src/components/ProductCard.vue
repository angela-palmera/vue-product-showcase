<template>
  <q-card class="product-card no-shadow" flat>
    <q-img :src="image" :ratio="1" class="rounded-borders" />

    <q-card-section class="q-px-none q-pt-md text-center">
      <div class="text-overline text-grey-6">{{ category }}</div>
      <div class="text-subtitle1 text-weight-medium">{{ name }}</div>
      <div class="text-body2 text-primary">$ {{ price.toLocaleString('es-CL') }}</div>
    </q-card-section>

    <q-card-actions class="q-px-none">
      <q-btn 
        outline 
        color="primary" 
        label="Añadir al carrito" 
        class="full-width"
        no-caps
        @click="handleAddToCart"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useProductStore } from 'src/stores/productStore'
import { useQuasar } from 'quasar'

// Definimos las props
const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  image: String,
  category: String
})

const store = useProductStore()
const $q = useQuasar()

// Función para manejar el clic y mostrar la notificación
const handleAddToCart = () => {
  // Pasamos los datos de las props al store
  store.addToCart({
    id: props.id,
    name: props.name,
    price: props.price,
    image: props.image,
    category: props.category
  })

  // Lanzamos la notificación visual
  $q.notify({
    message: 'Producto añadido al carrito',
    color: 'positive',
    icon: 'check',
    position: 'top-right',
    timeout: 1000
  })
}
</script>

<style scoped>
.product-card {
  background: transparent;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.product-card:hover {
  transform: translateY(-5px);
}
</style>