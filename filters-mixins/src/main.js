import Vue from 'vue'
import App from './App.vue'

Vue.filter("length",(value)=>{
  return value + "(" + value.length + ")";
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
