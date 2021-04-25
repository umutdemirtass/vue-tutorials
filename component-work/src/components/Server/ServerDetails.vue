<template>
  <div class="col-xs-12 col-sm-6">
    <p>Sunucu Bilgisi güncel değil!! </p>
    <h3>Sunucu #{{ server.id }}</h3>
    <p>Durumu : {{ server.status }}</p>
    <button @click="changeStatus">
      Durumu Duzelt
    </button>
  </div>
</template>

<script>
import {eventBus} from '../../main';
export default {
    data() {
        return {
            server:{} 
        }
    },
    created () {
        eventBus.$on("sentData",(data) => {
            this.server = data;
        });
    },
    methods: {
        changeStatus() {
            this.server.status = "Normal";
        }
    },
}
</script>