<template>
  <div class="wrapper">
    <div class="content">
      <app-header />
      <router-view></router-view>
    </div>
    <the-footer />
  </div>
  <scroll-back />
</template>
<script>
import AppHeader from "./components/UI/AppHeader.vue";
import ScrollBack from "./components/UI/ScrollBack.vue";
import TheFooter from "./components/UI/TheFooter.vue";

export default {
  components: { AppHeader, TheFooter, ScrollBack },

  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
</style>