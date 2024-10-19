<template>
  <tr>
    <td>
      <div class="therm__img">
        <img :src="img" alt="no img" class="therm__img-img" v-if="img"/>
      </div>
    </td>
    <td>
      <p class="subheading bold">{{ system }}</p>
      <p class="subheading">{{ productType }}</p>
    </td>
    <td>
      <p class="subheading">
        {{ descitption }}
      </p>
    </td>
  </tr>
</template>
 

<script>
export default {
  name: "ThermItem",
  props: {
    img: {
      type: String,
    },
    system: {
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


