import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install axios
axios.defaults.baseURL = process.env.BASE_URL
export default axios;

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
