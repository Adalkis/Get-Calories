<template>

    <div>
        <div  class="containerNumber">
             <div class="number">
             <h3 class="h3Number">{{number}}</h3>
        </div>

        </div>
       
       

  
    
    <p class="pText">{{text}}</p>
 
    </div>


    
</template>

<script>


export default {
    name:'workCard',
    props:['text', 'number', 'buttonName']
}
</script>
<style scoped>

.containerNumber {
    display: flex;
    justify-content: center;
    padding:10px;
}

h3.h3Number {
    font-size: 15px;
    margin-top: 3px;
}
.number {
    background: black;
    color: white;
    width: 25px;
    height: 23px;
    border-radius: 12px;
  
}
.pText {
    color: white;
    padding: 30px;
    font-size: 20px;
}

</style>
