import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetAlert2 from 'vue-sweetalert2'

Vue.config.productionTip = false

Vue.use(VueSweetAlert2);

new Vue({
    router,
    store,
  el: '#app',
  render: h => h(App)
})
