import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
Vue.use(require('vue-resource'))
new Vue({
  el: 'body',
  components: { App }
})
