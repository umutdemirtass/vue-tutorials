<template>
    <div>
        <h1>{{userData.name}}</h1>
        <ul>
            <li>{{userData .email}}</li>
            <li>{{userData.phone}}</li>
            <li>{{userData.website}}</li>
        </ul>
        <router-link :to="postsLink">Posts</router-link> <br>
        <router-link :to="nextUserLink">Next User</router-link> <br>
        <router-link :to="previousUser">Previous User</router-link>
    </div>
</template>

<script>
export default { 
    name : 'UserProfile',
    data() {
        return {
            userData: {}
        }
    },
    methods: {
        fetchData() {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
           .then((res) => {return res.json()})
           .then((data) => {this.userData = data ;})
        },
        
    },
    created(){
        this.fetchData()
    },
    computed: {
            postsLink() {
                return `/user/${this.$route.params.id}/posts` 
            },
            nextUserLink(){
             return `/user/${parseInt(this.$route.params.id,10) +1}`
            },
            previousUser(){
                return `/user/${parseInt(this.$route.params.id,10)-1}`
            }
    },
    watch: {
        '$route' : 'fetchData'
    },
        
}
</script>