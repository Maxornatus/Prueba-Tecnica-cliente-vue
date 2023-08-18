import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatedView from '../views/CreatedView.vue'
import EditView from '../views/EditView.vue'
import TdocView from '../views/TdocView.vue'
import CreatedTdocView from '../views/CreatedTdocView.vue'
import EditTdocView from '../views/EditTdocView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreatedView
  },
  {
    path: '/edit/:clienteId',
    name: 'edit',
    component: EditView
  },
  {
    path: '/TipoDocumento',
    name: 'TipoDocumento',
    component: TdocView
  },
  {
    path: '/createTdoc',
    name: 'createTdoc',
    component: CreatedTdocView
  },
  {
    path: '/editTdoc/:tipoDocumentoId',
    name: 'editTdoc',
    component: EditTdocView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
