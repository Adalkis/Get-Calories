<template>
  <div class="container">
    <div>
      <label>Choose the date that you want to see the total calories</label>
      <b-form-datepicker v-model="date"></b-form-datepicker>
      <span
        ><b-button variant="success" @click="getCalories" class="mt-2"
          >Get calories</b-button
        ></span>
          <span>Calories: {{ totalCalories }}</span>

    </div>
  
    <div v-if="data == true">
      <h2>Eaten Food</h2>
      <b-table striped hover :items="food" :fields="fields" selectable ref="table" head-variant="dark"  >
        <template #cell(Actions)="row">
         <b-button variant="outline-success" @click="deleteFood(row.index)">Delete</b-button>
        </template>
     </b-table>
    </div>
    
  </div>
</template>

<script>
import eatenFoodApi from "../api/eatenFood";
import deleteFoodApi from "../api/deleteFood"

export default {
  name: "eatenFood",
  data() {
    return {
      food: [],
      fields: [
        { key: "name", label: "Name" },
        { key: "serving_size", label: "Serving Size(gr)" },
        { key: "calories", label: "Calories" },
        { key: "Actions", label: "Actions" }
      ],
      data: false,
      totalCalories: 0,
      date: "",
      selected:[],
    
     
    };
  },
  methods: {
    getCalories() {
      eatenFoodApi.eatenFood().then((res) => {
       
        if (res.data == "No data found") {
        } else {
          let amount = 0;
          let food =res.data
          food.map((x) => {
            // if (x.created_at == this.date) {
            //   this.data = true;
            //   console.log(res.data.create_at==x.create_at)
            //   amount = amount + x.calories;
            // }
            console.log('estoy antes de this.date')
            if(x.created_at==this.date){
             
              this.data= true;
              console.log(x)
              this.food.push(x);
              console.log(this.food=[x])
              amount = amount + x.calories
            }
            this.food.push(x);
            console.log(x)
          });

          this.totalCalories = amount;
        }
      });
    },
     deleteFood(index){
      deleteFoodApi.deleteFood(this.food[index].id)
      .then(res=>{
        console.log(res);
        this.food.splice(index,1);
      })
     
  },
 
  },

 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
