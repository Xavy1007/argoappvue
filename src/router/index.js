import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/articulos',
    name: 'articulos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticulosView.vue')
  },
  {
    path: '/articulos/:id',
    name: 'getarticulo',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticulosView.vue')
  },
  {
    path: '/articulos/:id/editar',
    name: 'editararticulo',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarArticuloView.vue')
  },
  {
    path: '/categorias',
    name: 'categoriasView',
    component: () => import(/* webpackChunkName: "about" */ '../views/CategoriasView.vue')
  } ,
  {
    path: '/categorias/:id/editar',
    name: 'editarcategoria',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarCategoria.vue')
  } ,
  {
    path: '/almacenes',
    name: 'almacenesView',
    component: () => import(/* webpackChunkName: "about" */ '../views/AlmacenesView.vue')
  },
  {
    path: '/almacenes/:id/editar',
    name: 'editaralmacenes',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarAlmacenes.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
