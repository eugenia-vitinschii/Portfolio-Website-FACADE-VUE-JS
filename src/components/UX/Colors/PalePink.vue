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
   
      name: "PalePink",
      components: {},
      data () {
      return {
         colorArray: [
         { color: '#E6E6FA',
            name: 'Lavender'
            },
            { color: '#D8BFD8',
            name: 'Thistle'
            },
            { color: '#DDA0DD',
            name: 'Plum'
            },
            { color: '#EE82EE',
            name: 'Violet'
            },
            { color: '#DA70D6',
            name: 'Orchid'
            },
         ],
         }
      },
   }
   
</script>
       
<style lang="css" scoped>

   p{
      color:rgb(255, 255, 255);
      text-shadow: 1px 1px 2px rgb(237, 131, 237);
    }

</style>