<template>
  <div>
    <h1>Products:</h1>
    <input-search v-model="searchTerm" />
    <product-card v-for="product in filteredProducts" :key="product.id" :product="product" />
  </div>
</template>

<script>
import { InputSearch, ProductCard } from '../base'

export default {
  components: {
    'input-search': InputSearch,
    'product-card': ProductCard
  },
  created() {
    this.$store.dispatch('allProducts')
  },
  computed: {
    products() {
      return this.$store.getters.allProducts
    },
    searchTerm: {
      get() {
        return this.$store.state.searchTerm
      },
      set(value) {
        this.$store.commit('searchTerm', value)
      }
    },
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  }
}
</script>
