<template>
   <div class="properties__cost">
      <p class="properties__cost-subheading subheading">Calculați cantitatea  necesară de {{produs}}</p>
      <div class="properties__cost-item">
         <label for="lungime" class="properties__cost-paragraph paragraph" >Lungimea este de:</label>
         <input 
         type="number" 
            placeholder="Introduceți lungimea în m" 
            name="lungime" 
            :value="lungimea"
            @input="$emit('update:lungimea', $event.target.value)"
         >
      </div>
      <div class="properties__cost-item">
         <label for="latime" class="properties__cost-paragraph paragraph">Lățimea este de:</label>
         <input 
            type="number" 
            placeholder="Introduceți lățimea în m" 
            name="latime"  
            :value="latimea"
            @input="$emit('update:latimea', $event.target.value)"
         >
      </div>
      <div class="properties__cost-buttons">
         <button @click="$emit('clearData')" class="black__button properties__cost-button">Sterge</button>
         <button @click="$emit('calcSumm')" class="black__button properties__cost-button">Calculeaza</button>   
      </div>
      <div class="properties__cost-rezults">
         <p class="properties__cost-paragraph paragraph">Cantitatea  necesară de {{produs}} {{cantitatea}} kg</p>
         <p class="properties__cost-paragraph paragraph">Aproximativ: {{ bucati }} {{unitatea}}</p>
         <p class="properties__cost-paragraph paragraph">Summa: {{cost}} knf</p>
      </div>

         
   </div>
</template>


<script>
  
export default {
   inheritAttrs: false,
   name: "CostCalculation",
   data(){
      return{
        
      }

   },
   props:{
      lungimea:{
         type:Number,
      },
      latimea:{
         type:Number,
      },
      cantitatea:{
         type: String,
      },
      bucati:{
         type:Number,
      },
      cost:{
         type:Number,
      },
      produs:{
         type: String,
      },
      unitatea:{
         type: String,
      },

   }
 
 
}

</script>

<style lang="scss">
 

</style>