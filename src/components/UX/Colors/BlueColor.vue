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
   
      name: "BlueColor",
      components: {},
      data () {
      return {
         colorArray: [
            { color: '#E0FFFF',
            name: 'Light Cyan'
            },
            { color: '#AFEEEE',
            name: 'Pale Turquoise'
            },
            { color: '#40E0D0',
            name: 'Turquoise'
            },
            { color: '#48D1CC',
            name: 'Medium Turquoise'
            },
            { color: '#00CED1',
            name: 'Dark Turquoise'
            },
            { color: '#5F9EA0',
            name: 'Cadet Blue'
            },
            { color: '#4682B4',
            name: 'Steel Blue'
            },
            { color: '#B0C4DE',
            name: 'Light Steel'
            },
            { color: '#B0E0E6',
            name: 'PowderBlue'
            },
            { color: '#ADD8E6',
            name: 'Light Blue'
            },
            { color: '#87CEEB',
            name: 'Sky Blue'
            },
            { color: '#87CEFA',
            name: 'Light SkyB lue'
            },
            { color: '#00BFFF',
            name: 'Deep Sky Blue'
            },
         ],
         }
      },
   }
   
    </script>
       
 <style lang="css" scoped>
   p{
     color:rgb(255, 255, 255);
     text-shadow: 1px 1px 2px rgb(64, 144, 195);
   }
</style>