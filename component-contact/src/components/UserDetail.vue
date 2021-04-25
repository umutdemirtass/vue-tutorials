<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanici Adi : {{ name }}</p>
    <p>Kullanici Adi : {{ switchName() }}</p>
    <p>{{ age }}</p>
    <button @click="sendToParent">Parenta veri gonder</button>
  </div>
</template>
<script>
import {eventBus} from '../main';
export default {
  props: {
    name: {
      type: String,
    },
    age : String
  },
  methods: {
    switchName(){
      return this.name.split("").reverse().join("");
    },
    sendToParent(){
      this.$emit("data","Umut Demirtas");
    }
  },
  created () {
    eventBus.$on("ageEdited",(age)=>{
      this.age = age;
    });
  },
}
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
