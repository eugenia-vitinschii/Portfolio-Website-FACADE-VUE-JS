<template>
  <div class="login">
    <div class="container">
      <div class="login__wrapper">
        <the-head>Registrare</the-head>
        <div class="login__form">
          <the-input 
          v-model="name" 
          :label="'Introduceți numele'" 
          :placeholder="'Nume'"
          />
          <the-input
            v-model="email"
            :label="'Introduceți email'"
            :inputType="'email'"
            :placeholder="'email@email.com'"
          />
          <the-input
            v-model="password"
            :label="'Introduceți parola'"
            :inputType="'password'"
            :placeholder="'P36_%de32'"
          />
          <button class="green__button" @click="signUp">Registrare</button>
          <router-link class="black__button" to="/login"> Logare </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
import axios from "axios";
import TheInput from "../components/UI/TheInput.vue";
import TheHead from "../components/UI/TheHead.vue";
export default {
  components: { TheInput, TheHead },
  name: "SignupView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data)),
          this.$router.push({ name: "HomePage" });
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
    align-items: center;
  }
  .login__form:hover {
    @include shadowHover();
  }
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

  button,
  a {
    color: $white;
    margin-top: $margin-sm;
  }

}
</style>