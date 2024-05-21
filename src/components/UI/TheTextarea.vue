<template>
   <div class="input__wrapper">
         <label v-if="label">{{label}}</label>

   <textarea   name="story"  
   :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
      >
    

</textarea>
   </div>

 
      



</template>
   
   <script>
   export default {
      name: "TheInput",
      data(){
   
      },
      props:{
         modelValue:{
            type: String,
            default: ''
         },
         label:{
            type: String,
            default: ''
         },
         placeholder:{
            type: String,
            default: 'Mesaj...'
         },
      },

   }
   
   </script>
   
   <style lang="scss">
   textarea{
      width: 100%;
      height: 50px;
   }

   </style>