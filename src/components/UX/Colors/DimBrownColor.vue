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
   
      name: "DimBrownColor",
      components: {},
      data () {
      return {
         colorArray: [
            { color: '#FFF8DC',
            name: 'Cornsilk'
            },
            { color: '#FFEBCD',
            name: 'Blanched Almond'
            },
            { color: '#FFE4C4',
            name: 'Bisque'
            },
            { color: '#FFDEAD',
            name: 'NavajoWhite'
            },
            { color: '#F5DEB3',
            name: 'Wheat'
            },
            { color: '#DEB887',
            name: 'Burly Wood'
            },
            { color: '#D2B48C',
            name: 'Tan'
            },
            { color: '#BC8F8F',
            name: 'Rosy Brown'
            },
         ],
         }
      },
   }
   
    </script>
       
<style lang="css" scoped>
   p{
   color:rgb(255, 255, 255);
   text-shadow: 1px 1px 2px rgb(158, 79, 16);
   }
</style>