<template>
  <div class="container">
     
          
  
        
    <b-form @submit="onSubmit" >
           <div class="mt-4">
               <div class="iconEgg">
                    <b-icon icon="egg"></b-icon>
               </div>
             
             
            
        </div>
      
      <label class="mt-3">Email</label>
      <b-form-input 
        v-model="form.email"
        type="text"
        class="mb-4"
      ></b-form-input>
      <label>Password</label>
      <b-form-input
        v-model="form.password"
        type="password"
        class="mb-4"
      ></b-form-input>
      <b-button variant="outline-success" class="mb-4" type="submit"
        > <b-spinner small variant="success" v-if="busy == true"></b-spinner> Login</b-button
      >
       <b-button variant="outline-success" class="mb-4" type="submit" @click="register"
        >Register</b-button
      >
    </b-form>
  </div>
</template>

<script>
import loginApi from "../api/auth/login";
import autheticatedUserApi from '../api/auth/authenticatedUser.js'
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      busy:false
    };
  },
  methods: {
    async onSubmit(e) {
      this.busy=true;
      e.preventDefault(this.form);
      await loginApi
        .loginUser(this.form)
        .then((res) => {
          if(res.data == "Login details are not valid"){
            alert('The credentials are not valid')
            this.busy=false;
          }
          else{
              console.log(res)
          this.$store.dispatch("setAuth", true);
           this.$router.push({name:'Home'});
           this.busy=false;

          }
        
           
          
         
        })
        .catch((err) => console.log(err));
       
    },
    register(){
      this.$router.push('/register');
    }
  },

 
};
</script>

<style scoped>


.container {
    width: 500px;
    display: flex;
    justify-content: center;
    margin-top: 200px;
    background: #0283021f;
   
}
svg.bi-egg.b-icon.bi {
    font-size: 40px;
    color: white;
       margin-top: 9px;
}
.iconEgg {
    background: black;
    width: 60px;
    height: 60px;
    border-radius: 70px;
 
}
.mt-4 {
    display: flex;
    justify-content: center;
}


</style>