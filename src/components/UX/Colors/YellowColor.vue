<template>
   <div class="properties__color-items">
       <div class="properties__color-item"
        v-for="color in colorArray"
        :key="color"
        v-bind:style="{ backgroundColor: color.color}"
      >
      <p class="properties__color-item-name"> {{ color.name}}</p>
      </div>
   </div>
     
</template>
    
<script>

export default {

   name: "YellowColor",
   components: {},

   data () {
   return {
      colorArray: [
         {
         color: '#FFD700',
         name: 'Gold'
         },
         {
         color: '#FFFF00',
         name: 'Yellow'
         },
         {
         color: '#FFFFE0',
         name: 'Light Yellow'
         },
         {
         color: '#FFFACD',
         name: 'Lemon Chiffon'
         },
         {
         color: '#FAFAD2',
         name: 'Light Goldenrod'
         },
         {
         color: '#FFEFD5',
         name: 'Papaya Whip'
         },
         {
         color: '#FFE4B5',
         name: 'Moccasin'
         },
         {
         color: '#FFDAB9',
         name: 'Peach Puff'
         },
         {
         color: '#EEE8AA',
         name: 'Pale oldenrod'
         },
         {
         color: '#F0E68C',
         name: 'Khaki'
         },
         {
         color: '#BDB76B',
         name: 'Dark Khaki'
         },
         
      ],
      }
   },
}

 </script>
    
<style lang="css" scoped>
    p{
     color:rgb(255, 255, 255);
     text-shadow: 1px 1px 2px rgb(110, 107, 25);
   }
</style>