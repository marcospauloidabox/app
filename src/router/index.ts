import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../components/views/LayoutView.vue'
import HomeView from '../components/views/HomeView.vue'
import ProductsView from '../components/views/ProductsView.vue'

const routes = [
  {
    path: '/',
    component: LayoutView,
    children: [
      {
        path: 'home',
        component: HomeView
      },
      {
        path: 'products',
        component: ProductsView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
