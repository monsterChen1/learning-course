import Vue from 'vue'   // 导入vue框架
import App from './App.vue'   // 导入App.vue 组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),  // render: 渲染 App.vue 组件
}).$mount('#app')   // mount:挂载 到 #app的标签中
