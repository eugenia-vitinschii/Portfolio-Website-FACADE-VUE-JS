<template>
   <label for="value">{{ name }}</label>
 <input
 type="text"
 :placeholder="placeholder"
 :value="value"
 @input="$emit('update:value', $event.target.value)"
 >

</template>



<script>export default {
   name: "AddInput",
   components: {}, 
   data(){
     return {}
   },
   props:{
      value:{
         type: String
      },
      name:{
         type: String
      },
      placeholder:{
         type: String
      },
   }
}
</script>

  
       