import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, LayoutView, ProductsView } from '../components/views'

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
