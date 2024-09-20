<template>
      <div class="login">
        <div class="container">
          <div class="login__wrapper">
          <the-head>Logare</the-head>
            <div class="login__form"> 
              
              <the-input
                v-model="name"
                :label="'Introduceți numele'"
                :placeholder="'Nume'"
              />
              <the-input
              v-model="password"
                :label="'Introduceți parola'"
                :inputType="'password'"
                :placeholder="'Parola'"
              />
              <button 
              class="green__button"
                @click="login" 
              >
              Logare
            </button>
            <router-link class="black__button" to="/signup">
              Registrare
            </router-link>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import axios from "axios";
import TheInput from "../components/UI/TheInput.vue";
import TheHead from '../components/UI/TheHead.vue';
export default {
  components: { TheInput, TheHead },
  name: "LoginView",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/user?name=${this.name}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0])),
          this.$router.push({ name: "AdminPage" });
      }
 
    },
  },

};
</script>

<style lang="scss">
.login {
  .login__wrapper {
    display: flex;
    flex-direction: column;
  // justify-content: center;
 align-items: center;
}
.login__form {
  @include shadowBottom();
  @include line();
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 300px;
  background: $white;

  button, a{
   margin-top: $margin-sm;
  }
}
}



</style>