<template>
<div>
    <h1>Default componenti</h1>
    <button @click="counter++">{{counter}}</button>
</div>
</template>


<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    //HOOK KEEP-ALIVE 
    activated(){
        console.log("activated");
    },
    deactivated(){
        console.log("deActivated");
    }
}
</script>

    
