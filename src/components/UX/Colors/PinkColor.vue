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
   
      name: "PinkColor",
      components: {},
      data () {
      return {
         colorArray: [
            { color: '#FF00FF',
            name: 'Fuchsia'
            },
            { color: '#FF00FF',
            name: 'Magenta'
            },
            { color: '#BA55D3',
            name: 'Medium Orchid'
            },
            { color: '#9370DB',
            name: 'Medium Purple'
            },
            { color: '#663399',
            name: 'Rebecca Purple'
            },
            { color: '#8A2BE2',
            name: 'Blue Violet'
            },
            { color: '#9400D3',
            name: 'Dark Violet'
            },
            { color: '#9932CC',
            name: 'Dark Orchid'
            },
            { color: '#8B008B',
            name: 'Dark Magenta'
            },
            { color: '#800080',
            name: 'Purple'
            },
            { color: '#4B0082',
            name: 'Indigo'
            },
            { color: '#6A5ACD',
            name: 'SlateBlue'
            },
         ],
         }
      },
   }
   
    </script>
<style lang="css" scoped>
   p{
   color:rgb(255, 255, 255);
   text-shadow: 1px 1px 2px rgb(172, 21, 172);
}
</style>