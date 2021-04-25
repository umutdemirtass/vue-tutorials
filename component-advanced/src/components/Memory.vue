<template>
<div>
  <div class="memory">
    <slot name="header"></slot>
  </div>
  
  <div class="memory">
    <slot></slot>
  </div>
 
  <div class="memory">
    <slot name="defaulSlot">
      <h3>Defaul Slots</h3>
      <p> Defaul Slot is here</p>
    </slot>
  </div>
</div>
</template>
<script>
</script>
<style scoped>
  div.memory {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;
  }
</style>
