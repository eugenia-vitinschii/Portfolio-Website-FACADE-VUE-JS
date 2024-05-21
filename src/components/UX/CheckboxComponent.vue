<template>
   <div class="search__checkboxes">
    <input
    class="custom-checkboxe"
    @input="(event) => $emit('update:checked', event.target.checked)"
    type="checkbox"
    :checked="checked"
    :id="fieldId"
 
  />
  <label
    :for="fieldId"
    >
    {{ label }}
  </label>
 
 
   </div>
   
</template>

<script>
export default {
   name: "CheckboxComponent",
     data() {
      return {
 
    }
      },
      props: {
    label: String,

    fieldId: {
      type: String,
      required: true,
    },
    
    checked: {
      type: Boolean,
    },
  },
    }
 
 
</script>

<style lang="scss">
.product__type{
  display: flex;
  align-items: center;
  height: 30px;
  border: 1px solid blueviolet;
}

</style>