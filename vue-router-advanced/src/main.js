import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import UserPosts from './components/UserPosts';
Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
  {path : '/', component : Home },
  {path : '/user/:id', component : UserProfile},
  {path : '/user/:userId/posts', component : UserPosts}

 ],
 mode : 'history'
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
