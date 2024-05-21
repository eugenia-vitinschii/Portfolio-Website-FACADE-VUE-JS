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
   
   name: "BrownColor",
   components: {},
      data () {
      return {
         colorArray: [
            { color: '#F4A460',
            name: 'Sandy Brown'
            },
            { color: '#DAA520',
            name: 'Goldenrod'
            },
            { color: '#B8860B',
            name: 'Dark Goldenrod'
            },
            { color: '#CD853F',
            name: 'Peru'
            },
            { color: '#D2691E',
            name: 'Chocolate'
            },
            { color: '#8B4513',
            name: 'SaddleBrown'
            },
            { color: '#A0522D',
            name: 'Sienna'
            },
            { color: '#A52A2A',
            name: 'Brown'
            },
         ],
         }
      },
   }
   
</script>

<style lang="css" scoped>
   p{
   color:rgb(255, 255, 255);
   text-shadow: 1px 1px 2px rgb(102, 67, 10);
}
</style>