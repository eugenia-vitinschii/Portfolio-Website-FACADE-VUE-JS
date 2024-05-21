<template >

  <div class="properties__color">
    <div class="properties__color-buttons">
    <button
    class="properties__color-button"
    v-for="item in colors"
    :key="item"
    @click="selectedColor = item.component"
    v-bind:style="{ backgroundColor: item.color}"
    >
    </button>
    </div>
    <component :is="selectedColor"/>
</div>

 </template>

 <script>
import WhiteColor from './Colors/WhiteColor.vue'
import YellowColor from './Colors/YellowColor.vue';
import PaleGreenColor from './Colors/PaleGreenColor.vue';
import GreenColor from './Colors/GreenColor.vue';
import DeepBlueColor from './Colors/BlueColor.vue';
import DeepGreenColor from './Colors/DeepGreenColor.vue';
import BrownColor from './Colors/BrownColor.vue';
import DimBrownColor from './Colors/DimBrownColor.vue';
import GrayColor from './Colors/GrayColor.vue';
import BlueColor from './Colors/BlueColor.vue';
import PalePink from './Colors/PalePink.vue';
import PinkColor from './Colors/PinkColor.vue';
import OrangeColor from './Colors/OrangeColor.vue';
 export default {
  name: "TheColors",
  components: {
    WhiteColor,
    YellowColor,
    PaleGreenColor,
    GreenColor,
    DeepBlueColor,
    DeepGreenColor,
    BrownColor,
    DimBrownColor,
    GrayColor,
    BlueColor,
    PalePink,
    PinkColor,
    OrangeColor

  },
   data () {
     return {
      selectedColor: '',
      colors: [
        {
        component:  'WhiteColor', 
        color:'#FFFAFA'
        },
        {
        component:  'yellowColor', 
        color:'#FFD700'
        },
        {
        component:  'PaleGreenColor', 
        color:'#7DA349'
        },
        {
        component:  'GreenColor', 
        color:'#2E8B57'
        },
        {
        component:  'BlueColor', 
        color:'#E0FFFF'
        },
        {
        component:  'DeepGreenColor', 
        color:'#66CDAA'
        },
        {
        component:  'BrownColor', 
        color:'#F4A460'
        },
        {
        component:  'DimBrownColor', 
        color:'#FFF8DC'
        },
        {
        component:  'GrayColor', 
        color:'#DCDCDC'
        },
        {
        component:  'PalePink', 
        color:'#E6E6FA'
        },
        {
        component:  'PinkColor', 
        color:'#FF00FF'
        },
        {
        component:  'OrangeColor', 
        color:'#FFA07A'
        }
        ],
  }
   },
 
      
   }
 </script>
 
 <style lang="scss">
  

 </style>