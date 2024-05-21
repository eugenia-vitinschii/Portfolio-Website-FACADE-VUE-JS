<template>
  <div class="therm__description">
    <the-head
      >Therm System <span class="bold">{{ thermSystem }}</span></the-head
    >
    <div class="therm__description-txt">
      <p class="subheadings">
        Garanție {{ years }} ani pentru întreg termosistem de la producător.
      </p>
      <p class="subheadings">Termoizolare cu {{ material }}</p>
      <p class="subheadings">*Realizarea lucrărilor Home CONSTRUCT SRL</p>
    </div>
  </div>
</template>

<script>
import TheHead from "./TheHead.vue";
export default {
  components: { TheHead },
  name: "ThremDescription",
  data() {},
  props: {
   thermSystem: {
      type: String,
    },
    material: {
      type: String,
    },
    years: {
      type: Number,
    },
  },
};
</script>

<style lang="scss">
 
</style>