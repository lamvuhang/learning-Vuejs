import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'
import App from './App.vue'
import { routes } from './routes'

import store from './store/store.js'

Vue.use(VueRouter)
Vue.use(VueResouce)

Vue.http.options.root = 'https://stocktrader-88344.firebaseio.com/'

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
