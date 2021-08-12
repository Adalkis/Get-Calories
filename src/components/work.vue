<template>
<div class="container">
    <p class="pWorkText">HOW IT WORKS</p>
        
    <div class="row">
        <b-col cols="12" md="4" lg="4">
         <b-card>
             <workCardComponent
                number="1"
                text="Click on the button in order to see the calories of the food and the serving amount."
                buttonName="See calories"/>
                   <b-button variant="dark">See calories</b-button>
         </b-card>
                
                
          
        </b-col >
        <b-col cols="12" md="4" lg="4">
            <b-card>
                <workCardComponent
                number="2"
                text="Type the food  you want to get the calories and click on 'Get food calories'"
               />
            </b-card>
              
        </b-col>
        <b-col cols="12" md="4" lg="4">
            <b-card>
                <workCardComponent
                number="3"
                text="If you want to count the amount of calories you eat per day, you need to click on add when
                you search the food you have eaten."></workCardComponent>
            </b-card>
             
        </b-col>
    </div>
</div>
    
</template>

<script>

import workCardComponent from '../components/workCard.vue'
export default {
    name:'work',
    components:{
        workCardComponent
    }
    
}
</script>

<style scoped>

.card{
    background-color: #198754;
    height: 300px;
}
button.btn.btn-dark {
    padding: 10px;
    margin: 10px;
}
.pWorkText{
    font-family: 'jetBrains Mono';
    padding: 30px;
    font-size:50px;
   

}
.row {
    margin-bottom: 50px;
  
}
</style>
