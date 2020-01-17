import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()//事件总线(所有参数、事件接受或者发送方同级)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
