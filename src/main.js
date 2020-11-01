import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import Message from 'element-ui/packages/message/src/main'

axios.defaults.baseURL = 'http://localhost:8300'
axios.defaults.withCredentials = true
Vue.config.productionTip = false

Vue.prototype.$message = Message
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
