<template>
  <div class="therm__imgs">
    <div class="therm__garant">
      <img class="therm__img-item" :src="imgMaterial" alt="" />
    </div>
    <div class="therm__garant">
      <img class="therm__img-item" :src="imgYears" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ThremImg",
  props: {
    imgMaterial: {
      type: String,
    },
    imgYears: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
 
</style>