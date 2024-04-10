import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Escritorio from '../views/Escritorio.vue'
import Advogados from '../views/Advogados.vue'
import Atuacao from '../views/Atuacao.vue'
import Publicacoes from '../views/Publicacoes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/escritorio',
      name: 'escritorio',
      component: () => import('../views/Escritorio.vue')
    },
    {
      path: '/advogados',
      name: 'advogados',
      component: () => import('../views/Advogados.vue')
    },
    {
      path: '/atuacoes',
      name: 'atuacoes',
      component: () => import('../views/Atuacao.vue')
    },
    {
      path: '/publicacoes',
      name: 'publicacoes',
      component: () => import('../views/Publicacoes.vue')
    },
    {
      path: '/contatos',
      name: 'contatos',
      component: () => import('../views/Contatos.vue')
    }
  ]
})

export default router
