<template>
   <div class="about__consumation">
      <div class="about__consumation-item">
         <div class="about__consumation-img">
            <img src="@/assets/img/icons/consum.png" alt="img">
         </div>
         <div class="about__consumation-txt">
            <p class="paragraph about__consumation-title">Consumul este de:</p>
            <p class="paragraph"> {{consum}}</p>
         </div>
      </div>
      <div class="about__consumation-item">
         <div class="about__consumation-img">
            <img src="@/assets/img/icons/ajunge.png" alt="img">
         </div>
         <div class="about__consumation-txt">
            <p class="paragraph about__consumation-title">Ajunge pe:</p>
            <p class="paragraph">{{ajunge}}</p>
         </div>
      </div>
      <div class="about__consumation-item">
         <div class="about__consumation-img">
            <img src="@/assets/img/icons/structura-2.png" alt="img">
         </div>
         <div class="about__consumation-txt">
            <p class="paragraph about__consumation-title">Tip:</p>
            <p class="paragraph">{{structura}}</p>
         </div>
      </div>
      <div class="about__consumation-item">
         <div class="about__consumation-img">
            <img src="@/assets/img/icons/timp.png" alt="img">
         </div>
         <div class="about__consumation-txt">
            <p class="paragraph about__consumation-title">Timp de uscare:</p>
            <p class="paragraph">{{timp}}</p>
         </div>
      </div>
   </div>
     
</template>
       
   <script>
   
   export default {
   
      name: "TheConsumation",
      components: {},
      data () {
      return {
        
         }
      },
      props:{
         consum:{
            type: String,
         },
         ajunge:{
            type: String,
         },
         structura:{
            type: String,
         },
         timp:{
            type: String,
         },
      }
   }
   
    </script>
       
 <style lang="css">

</style>