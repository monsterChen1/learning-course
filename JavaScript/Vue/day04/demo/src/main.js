import Vue from 'vue'
import App from './App.vue'
import moText from './components/moText.vue'

Vue.config.productionTip = false
Vue.component(moText.name, moText);

new Vue({
  render: h => h(App),
}).$mount('#app')
