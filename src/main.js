import Vue from 'vue'


// ================
// Use Element UI
// ----------------
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en' // Default lang is Chinese
Vue.use(Element, { locale })
import './assets/scss/main.scss'

import App from './App'


// ================
// Lodash
// ----------------
import VueLodash from 'vue-lodash'
Vue.use(VueLodash)

// ================
// Use Vue Router
// ----------------
import router from './router'


// ================
// Vue-stash aka simple vuex alternative
// ----------------
import VueStash from 'vue-stash'
import store from './store'
Vue.use(VueStash)



Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  router,
  data: { store },
  render: h => h(App)
}).$mount('#app')

export default vm;
