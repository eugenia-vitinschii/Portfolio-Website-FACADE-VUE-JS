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
   
      name: "OrangeColor",
      components: {},
      data () {
      return {
         colorArray: [
            { color: '#FFA07A',
            name: 'Light Salmon'
            },
            { color: '#FF7F50',
            name: 'Coral'
            },
            { color: '#FF6347',
            name: 'Tomato'
            },
            { color: '#FF4500',
            name: 'Orange Red'
            },
            { color: '#FF8C00',
            name: 'Dark Orange'
            },
            { color: '#FFA500',
            name: 'Orange'
            },
            { color: '#F2AE10',
            name: 'Gamboge'
            },
            { color: '#EFAC1C',
            name: 'Moon Yellow'
            },
            { color: '#EDAB28',
            name: 'Bright Sun'
            },
            { color: '#EAAD3C',
            name: 'Tulip Tree'
            },
            { color: '#FC9458',
            name: 'Atomic Tangerine'
            },
         ],
         }
      },
   }
   
</script>
       
<style lang="css" scoped>
   p{
      color:rgb(255, 255, 255);
      text-shadow: 1px 1px 2px rgb(188, 82, 20);
   }
</style>