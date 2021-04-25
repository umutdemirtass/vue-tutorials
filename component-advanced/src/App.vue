<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        
        <button @click="selectedButton = 'appDefault'" class="btn-sm btn btn-primary">Default Component</button>
        <button @click="selectedButton = 'appNewMemory'" class="btn-sm btn btn-primary"> NewMemory Component</button>
        <button @click="selectedButton = 'appMemory'" class="btn-sm btn btn-primary">Memory Component</button>
                
        <p>{{selectedButton}}</p>
        <keep-alive>
        <component :is="selectedButton">
         <h1 slot="header">Baslik alani</h1>
         <p>Mac cok zevkli gecti</p> 
        </component>
        </keep-alive>
        <!-- <app-memory>
          <h1 slot="header">Baslik alani</h1>
         <p>Mac cok zevkli gecti</p>
        </app-memory> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Memory from "./components/Memory";
  import Default from './components/Default';
  import NewMemory from './components/NewMemory';
  export default {
    components : {
      appMemory : Memory,
      appDefault : Default,
      appNewMemory : NewMemory
    },
    data() {
      return {
        selectedButton: "x"
      }
    },
  }
</script>
