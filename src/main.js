import Vue from 'vue'
import App from './App.vue'
import VShowSlide from 'v-show-slide';

Vue.use(VShowSlide)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
