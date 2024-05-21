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

   name: "DeepGreen",
   components: {},
   data () {
   return {
      colorArray: [
         { color: '#66CDAA',
            name: 'Medium Aquamarine'
            },
            { color: '#8FBC8B',
            name: 'Dark Sea'
            },
            { color: '#20B2AA',
            name: 'Light Sea'
            },
            { color: '#008B8B',
            name: 'Dark Cyan'
            },
            { color: '#008080',
            name: 'Teal'
            },
         ],
         }
      },
   }

</script>
       
<style lang="css" scoped>
   p{
   color:rgb(255, 255, 255);
   text-shadow: 1px 1px 2px rgb(13, 100, 124);
   }
</style>