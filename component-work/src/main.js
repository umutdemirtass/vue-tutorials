import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    sentToServerData(data) {
      this.$emit("sentData",data)
    }
  },
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


















// export const eventBus = new Vue({
//   methods: {
//     sendToServerData(serverData) {
//       this.$emit("serverDataSend",serverData);
//     }
//   }
// });