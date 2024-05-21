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

   name: "WhiteColor",
   components: {},
   data () {
   return {
      colorArray: [
         { color: '#FFFFFF',
         name: 'White'
         },
         { color: '#FFFAFA',
         name: 'Snow'
         },
         { color: '#F0FFF0',
         name: 'HoneyDew'
         },
         { color: '#F5FFFA',
         name: 'Mint Cream'
         },
         { color: '#F0FFFF',
         name: 'Azure'
         },
         { color: '#F0F8FF',
         name: 'Alice Blue'
         },
         { color: '#F8F8FF',
         name: 'Ghost White'
         },
         { color: '#F5F5F5',
         name: 'White Smoke'
         },
         { color: '#FFF5EE',
         name: 'Sea Shell'
         },
         { color: '#F5F5DC',
         name: 'Beige'
         },
         { color: '#FDF5E6',
         name: 'Old Lace'
         },
         { color: '#FFFAF0',
         name: 'Floral White'
         },
         { color: '#FFFFF0',
         name: 'Ivory'
         },
         { color: '#FAEBD7',
         name: 'Antique White'
         },
         { color: '#FAF0E6',
         name: 'Linen'
         },
         { color: '#FFF0F5',
         name: 'Lavender Blush'
         },
         { color: '#FFE4E1',
         name: 'Misty Rose'
         },


      ],
      }
   },
}

 </script>
    
<style lang="css" scoped>

.properties__color-item{

   border: 1px solid rgb(230, 230, 232);
}
   p{
     color:rgb(157, 154, 154);
     text-shadow: 0px 0px 10px rgb(255, 255, 255);
   }

</style>