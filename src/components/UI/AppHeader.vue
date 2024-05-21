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
  // methods: {
  //   endSession() {
  //     localStorage.clear();
  //     this.$router.push({ name: "HomePage" });
  //   },
  // },
  // mounted() {
  //   {
  //     let user = localStorage.getItem("user-info");
  //     this.name = JSON.parse(user).name;

  //     if (!user) {
  //       this.$router.push({ name: "HomePage" });
  //     }
  //   }
  // },
};
</script>
 
 <style lang="scss">
.header {
  z-index: 70;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 10px solid $white;
    border-bottom: 10px solid $yellow;
    background: linear-gradient(to top, #fff 50%, #000 50%);
  }
  &__wrapper {
    position: relative;
    z-index: 4;
    width: 100%;
    height: 40px;
    background: $black;
  }
  &__content-burger,
  &__content-burger span {
    display: none;
  }
  &__logo {
    position: relative;
    margin-top: 10px;
    img {
      height: 40px;
    }
  }
  &__content {
    position: relative;
    width: 100%;
    margin-top: 10px;
    z-index: 3;
    display: flex;
    justify-content: space-between;
  }
  &__content-logo {
    img {
      background: #fff;
      margin: 0px 0px 0px 45px;
    }
  }
  &__content-menu {
  }
  &__content-nav {
    display: flex;
    justify-content: space-between;
    width: 700px;
  }
  &__content-user {
    background: #0000002c;
    display: flex;
  }
  &__info-item {
    font-size: 15px;
    padding: 3px 10px;
    text-transform: uppercase;
    color: $black;
    margin: 0px 0px 0px 10px;
    border-radius: $border-radius;
    border: 1px solid $yellow;
    background: $white;
    cursor: pointer;
    text-decoration: none;
    margin-left: 20px;
    @include animations();
  }
  &__info-item:hover {
    background: $black;
    color: $yellow;
    border: 1px solid $yellow;
  }
  &__info-item:active {
    background: $yellow;
    color: $white;
  }
}

@media (max-width: 898px) {
  .container {
  }
  .header {
    &__:before {
      z-index: 4;
    }
    &__wrapper {
    }
    &__content {
    }
    &__content-menu {
    }
    &__content-nav {
      width: 900px;
    }
    &__content-show {
      align-self: end;
      display: block;
      width: 30px;
      height: 20px;
      position: relative;
      z-index: 5;
      order: 3;
      cursor: pointer;
    }
    &__content-burger {
      display: block;
    }
    &__content-burger span {
      display: block;
      position: absolute;
      right: 0;
      background-color: $black;
      width: 30px;
      height: 3px;
      top: 9px;
      transition: all 0.3s ease 0s;
    }
    &__content-show:before,
    &__content-show:after {
      content: "";
      background-color: $black;
      position: absolute;
      width: 100%;
      height: 3px;
      left: 0;
      transition: all 0.3s ease 0s;
    }
    &__content-show:before {
      top: 0;
    }
    &__content-show:after {
      bottom: 0;
    }
    &__content-burger span.active {
      transform: scale(0);

      background-color: $black;
    }
    &__content-show.active:before {
      transform: rotate(45deg);
      top: 9px;
    }
    &__content-show.active:after {
      transform: rotate(-45deg);
      bottom: 9px;
    }
    &__content-nav {
      display: none;
    }
    &__content-nav.active {
      margin: 0px 0px 0px -20px;
      padding: 0px 20px;
      position: absolute;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      transition: all 0.3s ease 0s;
      background: $white;
      min-height: 100vh;
      overflow: scroll;
      z-index: 800;
    }
    &__info-item {
      display: block;
      margin-top: 10px;
      margin-left: 0px;
    }
  }
}
.end__session {
  display: none;
}
</style>