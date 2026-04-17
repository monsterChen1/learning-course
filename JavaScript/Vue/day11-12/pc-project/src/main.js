import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/element'
import '@/styles/index.scss'
import request from '@/utils/request'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false
Vue.prototype.$axios = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
