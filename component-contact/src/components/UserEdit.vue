<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <p>Kullanici Yasi : {{ age }}</p>
    <button @click="changeAge">Yasi degistir</button>
  </div>
</template>
<script>
import {eventBus} from "../main";
export default {
  props :["age"],
  methods: {
    changeAge() {
      this.age = 30;
      // eventBus.$emit("ageEdited", this.age);
      eventBus.changeAge(this.age);
    }
  },
}
</script>


<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

