<template>
  <div>
    <h1 class="page-title">Produtos:</h1>
    <input-search v-model="searchTerm" @input="updateSearchTerm" />
    <div class="product-grid">
      <product-card
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @click="openModal(product)"
      />
    </div>
    <modal-view v-model:dialog="dialog" :product="selectedProduct" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { mapState, mapActions } from 'vuex'
import { InputSearch, ProductCard } from '../base'
import ModalView from './ModalView.vue'

export default defineComponent({
  components: {
    InputSearch,
    ProductCard,
    'modal-view': ModalView
  },
  data() {
    return {
      searchTerm: '',
      dialog: false,
      selectedProduct: null
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
    },
    openModal(product) {
      this.selectedProduct = product
      this.dialog = true
    }
  }
})
</script>

<style>
.page-title {
  margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr)); /* Usando rem */
  gap: 1rem; /* Usando rem */
}

@media (max-width: 768px) {
  .product-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
