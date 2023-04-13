import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import JobDetail from '../views/JobDetail.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/JobDetail/:x',
    name: 'JobDetail',
    component: JobDetail
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
