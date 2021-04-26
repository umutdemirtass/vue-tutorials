import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.use(VueResource);
Vue.http.options.root = "https://vue-resource-2a126-default-rtdb.firebaseio.com"
Vue.http.interceptors.push((request,next) => {
//   if(request.method == "POST"){
//     request.method = "PUT"
//   }
  next(response=>{
    response.json = () => {
      return {
        userList : response.body
      }
    }
  });
 });
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
