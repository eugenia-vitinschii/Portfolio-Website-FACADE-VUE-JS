<template>
  <div class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__content-logo">
          <router-link to="/">
            <img src="@/assets/img/deko_logo-1.jpg" alt="The Logo" />
          </router-link>
        </div>
        <div class="header__wrapper">
          <div class="header__logo">
            <router-link to="/">
              <img src="@/assets/img/deko_logo-2.jpg" alt="The Logo" />
            </router-link>
            </div>
            <nav class="header__nav" v-bind:class="{ active: showBurger }">
              <ul v-on:click="showBurger = !showBurger">
                <li><router-link class="header__link" to="/">Acasă</router-link></li>
                <li><router-link class="header__link" to="/deko-therm">DEKOTHERM</router-link></li>
                <li><router-link class="header__link" to="/produse">Produse</router-link></li>
                <li><router-link class="header__link" to="/contacte">Contacte</router-link></li>
                <li><router-link class="header__link" to="/login">Login</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  <!-- burger button -->
  <div
    class="burger"
    v-on:click="showBurger = !showBurger"
    v-bind:class="{ active: showBurger }"
  >
    <span v-bind:class="{ active: showBurger }"></span>
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