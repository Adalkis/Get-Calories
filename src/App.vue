<template>
  <div id="app">
     
   
        <div id="nav" v-if="isLogged">
      <b-button @click="logout">Logout</b-button>
     
    
      
      
    </div>
  
      <router-view/>
  
     
   

   
  
  </div>
</template>

<script>
import healthyFood from '@/assets/healthyFood.jpg'
import logoutAPI from './api/auth/logout.js'
import authenticatedApi from "./api/auth/authenticatedUser.js";
export default {
  methods:{
    data(){
      return{
        user:[]
      }
    },
   async logout(){
      this.$store.dispatch('setAuth', false)
     
      await logoutAPI.logoutUser(this.user)
      .then(res=>{
         this.$router.push({name:'Login'});
        
        
      })
      .catch(err=>console.log(err))
     
    }
  },
  computed:{
    isLogged(){
      return this.$store.state.isLogged
    }
  },
  mounted:async function(){
    await authenticatedApi.authenticated()
    .then(res => {
      this.user=res.data
      console.log(this.user)
      })

  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    position: relative;
  
   
 
}




#nav {
  padding: 30px;

  position:absolute;
  top:2px;
 
  
  
}



#nav a {
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-right:20px;
  text-decoration:none;
  font-family: 'jetBrains Mono';
}

img{

  width: 100%;
}
html{
  min-width: 600px;
}




</style>
