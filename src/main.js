import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import home from './components/home.vue'
import login from './components/login.vue'
import profile from './components/profile.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    'path': '/',
    component: home,
    children:[
      {'path': '/login', component: login,},
      {'path': '/profile',component: profile,}
    ]
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router:router,
  render: h => h(App)
}).$mount('#app')
