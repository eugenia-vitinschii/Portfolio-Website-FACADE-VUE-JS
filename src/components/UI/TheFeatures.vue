<template>
   <div class="solution__answer-item"  >
      <div class="solution__item-img">
         <img
         :src="img"
         alt="Not found"
         />
      </div>
     <div class="solution__item-txt">
         <p class="paragraph">{{text}}</p>
      </div>
   </div>
</template>


<script>
export default {
   name: "TheFeatures",
   data(){

   },
   props:{
      text:{
         type: String,
      },
      img:{
         type: String,
      } 
   }
}

</script>

<style lang="scss" >
 
</style>

