import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import index from './components/index.vue'
import home from './components/home.vue'
import login from './components/login.vue'
import profile from './components/profile.vue'
import store from "./store";
import './../node_modules/bulma/css/bulma.css';

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    'path': '/',
    component: index,
    children:[
      {'path': '/home', component: home,},
      {'path': '/login', component: login,},
      {'path': '/profile',component: profile,}
    ]
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
