import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Detail from '@/views/Detail.vue'
import Layout from '@/views/Layout.vue'
import Article from '@/views/Layout/Article.vue'
import Collect from '@/views/Layout/Collect.vue'
import Like from '@/views/Layout/Like.vue'
import User from '@/views/Layout/User.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { name: 'detail', path: '/article/:id', component: Detail },
  {
    path: '/',
    component: Layout,
    redirect: '/article',
    children: [
      { path: '/article', component: Article },
      { path: '/collect', component: Collect },
      { path: '/like', component: Like },
      { path: '/user', component: User }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 白名单
const whiteList = ['/login', '/register']
// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token) {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
