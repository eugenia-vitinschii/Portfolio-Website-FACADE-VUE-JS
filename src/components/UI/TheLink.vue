<template>
 
    <a :href="href" class="paragraph">
      {{ link }}
    </a>
 
</template>
 
 <script>
export default {
  name: "TheLink",
  props: {
    link: {
      type: String,
    },
    href: {
      type: String,
    },
  },
};
</script>
 
 <style lang="scss">
</style>