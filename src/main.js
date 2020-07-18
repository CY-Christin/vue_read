import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "./plugins/router"

import "./plugins/axios"

import "./assets/css/base.css"
import "./assets/js/font.js"

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
