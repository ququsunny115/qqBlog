// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import axios from './axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.scss'
import './assets/icons/iconfont.css'
import * as filter from './filter'

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  components: { App },
  template: '<App/>'
})
