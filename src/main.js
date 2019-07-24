import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
//必须加大括号
import {routes} from './routes'
import axios from 'axios'

Vue.use(VueRouter)
axios.defaults.baseURL='https://www.bmob.cn/app/browser/259273/1407105'

const router = new VueRouter({
    routes,
    mode: 'history'
})



new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
