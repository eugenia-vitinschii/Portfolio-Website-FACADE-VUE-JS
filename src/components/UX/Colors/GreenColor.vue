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
  name: "GreenColor",
  components: {},
  data() {
    return {
      colorArray: [
        { color: "#2E8B57", 
        name: "Sea Green" 
      },
        {
          color: "#228B22",
          name: "Forest Green",
        },
        {
          color: "#9ACD32",
          name: "Yellow Green",
        },
        {
          color: "#6B8E23",
          name: "OliveDrab",
        },
        {
          color: "#808000",
          name: "Olive",
        },
        {
          color: "#556B2F",
          name: "Dark Olive",
        },
      ],
    };
  },
};
</script>
       
<style lang="css" scoped>
p {
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 2px rgb(110, 107, 25);
}
</style>