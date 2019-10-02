import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import { store } from './store/index'
import router from './router'
import moment from 'moment'
import './registerServiceWorker'

Vue.use(Buefy)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

moment.locale('es')
Vue.use(require('vue-moment'), {
  moment
})

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
