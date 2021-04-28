<template>
    <div>
        <router-link :to="userLink">Back User</router-link> <br>
        <router-link :to="usersLink">Users Page</router-link>
        <div v-for="post in posts" :key="post">
         <h4>{{post.title}}</h4>
        <p>{{post.body}}</p>
        <hr>
        </div>
    </div>
</template>

<script>
export default { 
    name : 'UserPosts',
    data() {
        return {
            posts: {}
        }
    },
    computed: {
        userLink() {
            return `/user/${this.$route.params.userId}`
        },
        usersLink(){
            return `/`
        }
    },
    created(){
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`)
        .then((res) => {return res.json()})
        .then((data) => {this.posts = data ;})
        }, 
}
</script>