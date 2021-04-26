<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h2> Directive </h2>
        <p v-text="'v-text directive'"></p>
        <p v-html="'<strong>v-html directive</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color:background.delay.flash="{mainColor : 'blue', secondColor : 'yellow', delay : 1000}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur beatae culpa doloribus, ex
          facilis fugiat</p>
        <p v-color.delay="'red'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae
          culpa doloribus, ex
          </p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    directives: {
      "color": {
        // eslint-disable-next-line no-unused-vars
        bind(el, binding, vnode) {
          let delay = 0;
          if (binding.modifiers["delay"]) {
            delay = 2000;
          }

          if(binding.modifiers["flash"]){

            let firstColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = firstColor;

            setTimeout(() => {
              setInterval(() => {
                currentColor == secondColor ? currentColor = firstColor : currentColor = secondColor;
                if (binding.arg == "background") {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.delay)
            }, delay)
          } else {
            setTimeout(() => {
              if (binding.arg == "background") {
                el.style.backgroundColor = binding.value;
              } else {
                el.style.color = binding.value;
              }
            }, delay)
          }
        }
      }
    }
  }
</script>

<style>
</style>
