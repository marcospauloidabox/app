import axios from 'axios'

const state = {
  products: [],
  searchTerm: ''
}

const getters = {
  allProducts: (state) => state.products
}

const actions = {
  fetchProducts({ commit }) {
    axios('http://localhost:3000/products')
      .then((response) => {
        commit('setProducts', response.data)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
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
