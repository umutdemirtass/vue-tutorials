<template>
  <div id="app">
    <h1>{{welcomeMessage}}</h1>
    <input v-model="name"/>
    <button @click="updateName">guncelle</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      name: 'umut',
    }
  },
  methods: {
    updateName() {
      this.updateUserName(this.name);
    },
    ...mapActions([
       'updateUserName',
       'number'
     ]),
  },
  computed: {
     ...mapState([
       'userName',
       'message',
       
     ]),
     ...mapGetters([
       'welcomeMessage'
     ])
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
