import axios from 'axios'

const state = {
  products: [],
  searchTerm: ''
}

const getters = {
  allProducts: (state) => state.products
}

const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get('http://localhost:3000/products')
      commit('setProducts', response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },
  updateSearchTerm({ commit }, searchTerm) {
    commit('setSearchTerm', searchTerm)
  }
}

const mutations = {
  setProducts: (state, products) => (state.products = products),
  setSearchTerm: (state, searchTerm) => (state.searchTerm = searchTerm)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
