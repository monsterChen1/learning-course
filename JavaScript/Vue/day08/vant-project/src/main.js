import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/vant'
import axios from '@/utils/request'
import ArticleItem from '@/components/ArticleItem.vue'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component('ArticleItem', ArticleItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
