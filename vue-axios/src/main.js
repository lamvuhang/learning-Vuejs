import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-axios-bab32.firebaseio.com'

// axios.defaults.header....
// axios.interceptor.request/response.use...

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
