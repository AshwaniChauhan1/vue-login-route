import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import './../node_modules/bulma/css/bulma.css';
import router from "./router";


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
