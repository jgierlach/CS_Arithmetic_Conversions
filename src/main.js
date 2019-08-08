import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import {routes} from './routes.js'
import './registerServiceWorker'
import store from './store'

Vue.use(VueRouter)
Vue.use(Meta)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

const root = new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

document.addEventListener('DOMContentLoaded', function() {
  root.$mount('#app')
})
