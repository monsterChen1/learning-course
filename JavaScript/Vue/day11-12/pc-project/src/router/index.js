import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/layout/Dashboard.vue'
import Layout from '@/views/Layout.vue'
import Article from '@/views/layout/Article.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      { path: '/dashboard', component: Dashboard },
      { path: '/article', component: Article }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const { token } = store.state.user
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
  // if (!token) {
  //   next('/login')
  //   return false
  // }
})

export default router
