import Vue from 'vue'
import App from './App.vue'
import router from './router' // 默认导入文件下中index.js文件

Vue.config.productionTip = false

// 4.关联到Vue实例
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
