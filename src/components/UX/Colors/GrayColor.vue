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
   name: "GrayColor",
   components: {},
   data () {
      return {
         colorArray: [
            { color: '#DCDCDC',
            name: 'Gainsboro'
            },
            { color: '#D3D3D3',
            name: 'Light Gray'
            },
            { color: '#C0C0C0',
            name: 'Silver'
            },
            { color: '#A9A9A9',
            name: 'Dark Gray'
            },
            { color: '#808080',
            name: 'Gray'
            },
            { color: '#696969',
            name: 'Dim Gray'
            },
            { color: '#778899',
            name: 'Light Slate'
            },
         ],
      }
   },
}
   
</script>
       
<style lang="css" scoped>
   p{
      color:rgb(255, 255, 255);
      text-shadow: 1px 1px 2px rgb(52, 57, 53);
  }
 </style>