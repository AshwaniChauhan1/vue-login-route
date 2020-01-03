import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import login from './components/login.vue'
import profile from './components/profile.vue'


Vue.use(Router)


const router = new Router({
  mode: 'hash',
  routes: [
    {
      'path': '/',
      component: index,
      children: [
        { 'path': '/login', component: login, },
        { 'path': '/profile', component: profile, }
      ]
    }
  ]

})
export default router