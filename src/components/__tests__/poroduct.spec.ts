import productsModule from '@/store/modules/products'
import MockAdapter from 'axios-mock-adapter'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import axios from 'axios'

const { mutations, actions, getters } = productsModule
const { setProducts, setSearchTerm } = mutations
const { fetchProducts, updateSearchTerm } = actions
const { allProducts } = getters

describe('Vuex - Products Module', () => {
  let state

  beforeEach(() => {
    state = {
      products: [],
      searchTerm: ''
    }
  })

  // Testes para Getters
  it('getter allProducts retorna todos os produtos', () => {
    state.products = [{ id: 1, name: 'Product 1' }]
    const result = allProducts(state)
    expect(result).toEqual([{ id: 1, name: 'Product 1' }])
  })

  // Testes para Mutações
  it('mutation setProducts atualiza o estado dos produtos', () => {
    const products = [{ id: 1, name: 'Product 1' }]
    setProducts(state, products)
    expect(state.products).toEqual(products)
  })

  it('mutation setSearchTerm atualiza o termo de busca', () => {
    const searchTerm = 'Product'
    setSearchTerm(state, searchTerm)
    expect(state.searchTerm).toBe(searchTerm)
  })

  // Testes para Ações
  it('action fetchProducts busca produtos e comita a mutação setProducts', async () => {
    const commit = vi.fn()
    const mock = new MockAdapter(axios)
    const products = [{ id: 1, name: 'Product 1' }]
    mock.onGet('http://localhost:3000/products').reply(200, products)

    await fetchProducts({ commit })
    expect(commit).toHaveBeenCalledWith('setProducts', products)
  })

  it('action updateSearchTerm comita a mutação setSearchTerm', () => {
    const commit = vi.fn()
    const searchTerm = 'Product'
    updateSearchTerm({ commit }, searchTerm)
    expect(commit).toHaveBeenCalledWith('setSearchTerm', searchTerm)
  })
})
