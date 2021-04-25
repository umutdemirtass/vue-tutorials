<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName">Adimi Degistir</button>
    <p>Child componentten gelen veri : {{veri}}</p>
    <hr>
    <div class="row">
      <app-user-detail :age="age" @data="veri = $event" :name="title"></app-user-detail>
      <app-user-edit @ageEdited ="age = $event" :age="age"></app-user-edit>
    </div>
  </div>
</template>
<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit,
    },
    data(){ 
        return {
            title : "Umut",
            veri : "",
            age : 21
        }
    },
    methods : {
       changeName(){
         this.title = "Beren"
       }
    },
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
