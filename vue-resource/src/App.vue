<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
          <button class="btn btn-primary" @click="saveUser">Kaydet</button>
          <button class="btn btn-success" @click="getUsers">Verileri Getir</button>
          <hr>
          <ul class="list-group">
            <li class="list-group-item" v-for="user in userList" :key="user">
              <span>{{user.data.userName}}</span>
              <button class="btn btn-danger" @click="sil(user.key)">Veriyi sil</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userList : [],
      resource : {}
    }
  },
  methods: {
    saveUser() {
      // this.$http.post("users.json",{userName : this.userName})
      //   .then((response) => {
      //     console.log(response)
      //   })
      // this.$resource("users.json").save({},{userName : this.userName});
      this.resource.kaydet({},{userName:this.userName})
    },
    getUsers(){
      this.$resource("users.json").get()
      .then((response) => {
        
        return response.json();
        // let data = response.data;
        // console.log(response);
        // for(let key in data){
        //   this.userList.push(data[key]);
        // }
      }).then(data => {
        for(let key in data.userList){
          this.userList.push(
            {
              key : key,
              data : data.userList[key]
            }
          );
        }
      })
    },
    sil(userKey){
      // this.$http.delete("users/" + userKey + ".json")
      // .then(response => {
      //   console.log(response);
      // })
      this.$resource("users/" + userKey + ".json").delete()
    }
  },
  created () {
    const customResource ={
      kaydet : {method : "POST", url : "users.json"}
    };
    this.resource = this.$resource("users.json",{},customResource)
  }
}
</script>

<style>
</style>