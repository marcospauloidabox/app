interface Product {
  id: number
  name: string
  price: string
  description: string
  image: string
}

interface ProductState {
  products: Product[]
}

const state: ProductState = {
  products: []
}

const mutations = {
  setProducts(state: ProductState, products: Product[]) {
    state.products = products
  }
}

const actions = {
  async fetchProducts({ commit }: any) {
    try {
      const response = await fetch('http://127.0.0.1/products')
      const products = await response.json()
      commit('setProducts', products)
    } catch (error) {
      console.error('Erro ao carregar produtos:', error)
    }
  }
}

const getters = {
  allProducts: (state: ProductState) => state.products
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
