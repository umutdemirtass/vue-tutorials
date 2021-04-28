import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Bar from './components/Bar';
import Foo from './components/Foo';
import Home from './components/Home';

Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    {path: '/', component: Home},
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},

  ],
  mode : 'history'
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
