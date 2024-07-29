<template>
  <div>
    <h1>Products:</h1>
    <input-search v-model="searchTerm" @input="updateSearchTerm" />
    <div class="product-grid">
      <product-card v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { InputSearch, ProductCard } from '../base'

export default defineComponent({
  components: {
    InputSearch,
    ProductCard
  },
  data() {
    return {
      searchTerm: ''
    }
  },
  computed: {
    ...mapState('products', {
      products: (state) => state.products
    }),
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    updateSearchTerm(event) {
      this.searchTerm = event.target.value
    }
  }
})
</script>

<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 16px;
}
</style>
