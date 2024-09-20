<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <router-link to="/">
            <img src="@/assets/img/deko_logo-1.jpg" alt="The Logo" />
          </router-link>
        </div>
        <div class="header__content">
          <div class="header__content-logo">
            <router-link to="/">
              <img src="@/assets/img/deko_logo-2.jpg" alt="The Logo" />
            </router-link>
          </div>
          <div class="header__content-menu">
            <div class="header__content-burger">
              <div
                class="header__content-show"
                v-on:click="showBurger = !showBurger"
                v-bind:class="{ active: showBurger }"
              />
              <span v-bind:class="{ active: showBurger }"></span>
            </div>
            <nav class="header__content-nav"
              v-bind:class="{ active: showBurger }"
            >
              <router-link class="header__info-item" to="/"> Home </router-link>
              <router-link class="header__info-item" to="/deko-therm">DEKOTHERM</router-link>
              <router-link class="header__info-item" to="/produse">Produse</router-link>
              <router-link class="header__info-item" to="/contacte">Contacte</router-link>
              <router-link class="header__info-item" to="/login">Login</router-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
export default {
  name: "AppHeader",
  data() {
    return {
      showBurger: false,
    };
  },
};
</script>
 
