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
   
name: "PaleGreenColor",
   components: {},
      data () {
      return {
         colorArray: [
            { 
            color: '#7DA349',
            name: 'Chelsea Cucumber'
            },
            { 
            color: '#93AD82',
            name: 'Norway'
            },
            { 
            color: '#5FAA62',
            name: 'Fern'
            },
            { 
            color: '#5D915F',
            name: 'Hippie Green'
            },
            { 
            color: '#5E9179',
            name: 'Patina'
            },
            { 
            color: '#8DBC7A',
            name: 'Olivine'
            },
            { 
            color: '#7BA86D',
            name: 'Amulet'
            },
            { 
            color: '#54705C',
            name: 'Mineral Green'
            },
         ],
         } 
      },
   }
   
</script>
       
<style lang="css" scoped>
   p{
     color:rgb(255, 255, 255);
     text-shadow: 1px 1px 2px rgb(40, 99, 50);
   }
</style>