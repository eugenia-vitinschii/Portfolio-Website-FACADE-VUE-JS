<template>
  <div class="therm__card">
    <div class="therm__img">
      <img :src="img" alt="no img" class="therm__img-img" />
    </div>
    <span class="therm__label">
      {{ system }}
    </span>
    <div class="therm__description">
      <p class="therm__text-title">
        {{ productType }}
      </p>
      <p class="therm__text">
        {{ descitption }}
      </p>
    </div>
  </div>
</template>
 

<script>
export default {
  name: "ThermItem",
  data() {
    return {};
  },

  props: {
    img: {
      type: String,
    },
    system : {
      type: String,
    },
    productType: {
      type: String,
    },
    descitption: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
 
</style>
