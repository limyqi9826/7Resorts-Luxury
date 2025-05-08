import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VillasPage from '../components/pages/VillasPage.vue'
import DiningPage from '../components/pages/DiningPage.vue'
import PoolPage from '../components/pages/PoolPage.vue'
import SpaPage from '../components/pages/SpaPage.vue'
import EventsPage from '../components/pages/EventsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/services/villas',
    name: 'villas',
    component: VillasPage,
  },
  {
    path: '/services/dining',
    name: 'dining',
    component: DiningPage,
  },
  {
    path: '/services/pool',
    name: 'pool',
    component: PoolPage,
  },
  {
    path: '/services/spa',
    name: 'spa',
    component: SpaPage,
  },
  {
    path: '/services/events',
    name: 'events',
    component: EventsPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
