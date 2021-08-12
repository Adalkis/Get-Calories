<template>
<div>
   <img src="@/assets/food.png" alt=""  height="700px">
   <div class="container">
    <div class="imageText">
        <p class="childImageText">Get the calories per every food you eat and see the amount of calories you eat per date</p>
          <div>
        <b-button size="lg" variant="success"><a href="#dataTable"> See calories</a></b-button>
        </div>
        
      </div>
      </div>
       <workComponent></workComponent>
      <div class="tableItems">
        <div class="container">
          <a id="dataTable">
            <p class="pWorkText">GET YOUR FOOD CALORIES</p>
       <b-form>
      <b-form-input v-model="form.name" placeholder="Type the food's name"></b-form-input>
      <b-button class="getFood" variant="success" @click="getFood">Get food calories</b-button>
      <b-button class="getFood" variant="success" @click="totalCalories">Total calories</b-button>
      <div v-if="loading==true">
        <b-spinner variant="success" type="grow" ></b-spinner>
      </div>
    </b-form>
  
      <div v-if="data == true">
      <b-table striped hover :items="food" :fields="fields" selectable ref="table"  :busy="isBusy">
        <template #cell(Actions)="row">
         <b-button class="addButton" variant="success" @click="add(row.index)">Add</b-button>
        
   
        </template>
      </b-table>
    </div>
    </a>
     
        
      </div>
      <div v-if="total==true">
        <eatenFoodComponent/>
      </div>
     
     

        </div>
    
        


  
   
  
  
</div>
 

</template>

<script>
import workComponent from '../components/work.vue'
import getFoodApi from "../api/getFood";
import addCaloriesApi from "../api/addCalories";
import eatenFoodComponent from '../components/eatenFood.vue';
import autheticatedUserApi from '../api/auth/authenticatedUser.js'
export default {
  name: "Food",
  components:{eatenFoodComponent, workComponent},
  data() {
    return {
      food: [],
      fields: [
        { key: "name", label: "Name" },
        { key: "serving_size_g", label: "Serving Size(gr)" },
        { key: "calories", label: "Calories" },
        { key: "Actions", label: "Actions" },
      ],
      form: {
        name: "",
      },
      data:false,
      selected:[],
      click:false,
      loading:false,
      total:false,
      isBusy:false
    };
  },
  methods: {
    async getFood(e) {
       this.loading=true;
      e.preventDefault(this.form);
      await getFoodApi.getFood(this.form.name).then((res) => {
        this.data = true;
        this.food = res.data.items;
        this.loading=false;
       
      });
    },
    add(index) {
      let addFood ={name:this.food[index].name, calories:this.food[index].calories, serving_size:this.food[index].serving_size_g} ;
      console.log(addFood)
    this.isBusy= true;
      addCaloriesApi.addCalories(addFood)
        .then(res=> {
          console.log(res);
           this.isBusy= false;
          
          
          alert(`${this.food[index].name} was added successfully`);
          
          })
        .catch(err=> alert('Error, try once again'))

       

    
      
      
      
      
      
    },
    totalCalories(){
    
         this.total=true;

      
     
    },
   
    
    
  },
 mounted:async function(){
   await autheticatedUserApi.authenticated()
   .then(res=>{
     console.log(res)
     this.$store.dispatch('setAuth', true)
     });

  
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageText{
  position: absolute;
  top: 240px;
  width: 80%;
  min-width: 560px;
  align-items: center;
 
  justify-content: center;


}
.childImageText{
  font-size: 50px;
  
  color: white;
  font-family: auto;
}

.pWorkText{
    font-family: 'jetBrains Mono';
    padding: 30px;
    font-size:50px
}
a{
  text-decoration: none;
  color: black;
}
a::hover{
color: white;

}
.tableItems {
    background: #0283021f;
}

.getFood {
    color: black;
    padding: 10px;
    margin: 20px;
}
</style>
