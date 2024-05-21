<template>
  <div class="input__wrapper">
    <label v-if="label">{{ label }}</label>
    <input
      :type="inputType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>
   
   <script>
export default {
  name: "TheInput",
  data() {},
  props: {
    modelValue: {
      type: [String, Number],
      defaul: "",
    },
    label: {
      type: String,
      default: "",
    },
    inputType:{
      type: String,
      default: "text",
    },
    placeholder:{
      type: String,
      default: "text",
    }
  },
};
</script>
   
   <style lang="scss">
.input__wrapper {
  padding: 0px 20px;
  input,
  label,
  textarea {
    font-size: $body-text;
  }
}
</style>