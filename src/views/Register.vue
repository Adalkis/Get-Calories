<template>
  <div class="container">
    <b-form @submit="onSubmit" >
         <div class="mt-4">
               <div class="iconEgg">
                    <b-icon icon="egg"></b-icon>
               </div>
             
             
            
        </div>
      <label class="mt-4">Name</label>
      <b-form-input v-model="form.name" type="text" class="mb-4"></b-form-input>
      <label>Email</label>
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
        >Register</b-button
      >
    </b-form>
  </div>
</template>

<script>
import registerApi from "../api/auth/register";
export default {
  name: "login",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault(this.form);
      await registerApi
        .registerUser(this.form)
        .then((res) => {
          this.$router.push({ name: "Login" });
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>
.container {
    width: 500px;
    display: flex;
    justify-content: center;
    margin-top: 160px;
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