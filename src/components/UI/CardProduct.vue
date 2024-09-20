<template>
    <div  class="product__card">
      <div class="product__img" >
        <img :src="img" alt="" class="first">
         <img :src="textureImg" alt="" class="second">
      </div>
      <span class="product__label">
         {{system}}
      </span>
      <div class="product__description">
         <p class="product__text subtitle">
           {{productType}}
         </p>
         <div class="product__buttons">
            <button
            @click="$emit('getProduct')"
            class="black__button">
            {{option}}
         </button>
      </div>
      </div>
   </div>

   
</template>
  

<script>



export default {
 
   name: "CardProduct",
   data(){
      return {
      }   
   },


   props:{
      img: {
         type: String
      },
      textureImg: {
         type: String
      },
      system: {
         type: String
      },
      productType: {
         type: String
      },
      option: {
         type: String
      },
   },
   methods: {
       
   }
}

</script>

<style lang="scss" scoped>
li{
   padding: 5px 10px;
	width: 150px;
	color:  $black;
	margin: 0px 0px 0px 10px;
	border-radius: 5px;
	background: $black;
	color: $yellow;
   cursor: pointer;
	@include animations();
}
.hidden {
   display: none;
}
</style>
