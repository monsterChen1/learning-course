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
import NotFound from '@/views/NotFound.vue'
import MySong from '@/views/MySong.vue';

// 3.创建路由实例
const router = new VueRouter({
  mode: 'hash', // 默认值 localhost/#/find
  // mode: 'history', // history模式, 需要后端配置 localhost/find
  // 路由配置
  routes: [{
    // 默认打开页面
    path: '/',
    redirect: '/find',
  }, {
    path: '/find/:id(\\d+)*',
    component: Find,
  }, {
    path: '/my',
    component: My,
  }, {
    path: '/part',
    component: Friend,
  }, {
    name: 'MySong',
    path: '/mySong/:id(\\d+)*',
    component: MySong,
  }, {
    // 404页面
    path: '*',
    component: NotFound,
  }],
});

export default router