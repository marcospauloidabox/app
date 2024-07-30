<template>
  <div class="product-image">
    <v-card class="mx-auto" max-width="100%">
      <template v-slot:title>
        <span class="font-weight-black">{{ product.name }}</span>
        <p class="product-price">R$ {{ product.price.toFixed(2) }}</p>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        <img :src="product.image" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-image img {
  max-width: 100%;
  height: auto;
}
.product-price {
  font-size: 1rem;
  color: var(--v-primary);
}
</style>
