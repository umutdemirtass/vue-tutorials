<template>
  <div>
    <button v-umut:click="tikla">v-umut directive</button>
  </div>
</template>

<script>
export default {
  directives : {
    umut : {
      // eslint-disable-next-line no-unused-vars
      bind(el,binding,vnode){
      var type = binding.arg;
      var func = binding.value;
      el.addEventListener(type,func);
       }
    }
  },
  methods: {
    tikla() {
      alert("v-umut directive");
    }
    
  }
}
</script>


