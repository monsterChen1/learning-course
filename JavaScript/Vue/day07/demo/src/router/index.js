// 导入Vue
import Vue from 'vue'

// 1.引入vue-router
import VueRouter from 'vue-router'
// 2.注册vue-router
Vue.use(VueRouter)

// 导入组件
// @符号表示src目录
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
// 3.创建路由实例
const router = new VueRouter({
  // 路由配置
  routes: [{
    path: '/find',
    component: Find,
  }, {
    path: '/my',
    component: My,
  }, {
    path: '/part',
    component: Friend,
  }],
});

export default router