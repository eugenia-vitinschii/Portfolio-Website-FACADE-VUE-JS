<template>
  <div class="wrapper">
    <div class="content">
      <div class="admin">
        <div class="container">
          <div class="admin__wrapper">
                   <div class="admin__panel"> <!--Admin panel-->
          <!--Nav buttons -->
          <div class="admin__admin">
            <p class="paragraph admin__title">
              HI, {{name}}!
            </p>
            <button class="red__button"
              @click="endSession"
            >
             Log out
            </button>
          </div>
          <div class="admin__buttons"> <!--Buttons for edit content-->
            <button
              class="black__button"
              v-for="button in buttons"
              :key="button"
              @click="currentButton = button"
            >
              {{ button }}
            </button>
            <router-link class="green__button" to="/"
              >Back to site</router-link
            >
          </div>
        </div>
        <KeepAlive>
            <component :is="currentButton"></component>
        </KeepAlive>
        
          </div>
    
        </div>
       </div>
            
    </div>
  </div>
</template>

  
<script>
// import axios from 'axios';
import AddProduct from "./AddProduct.vue";
import EditProduct from "./EditProduct.vue";
import TheHead from "../UI/TheHead.vue";
import WarnPopup from "./WarnPopup.vue";
export default {
  components: { AddProduct, EditProduct, TheHead, WarnPopup },
  name: "AdminPage",
  data() {
    return {
      name:'',
      popupDeleteTencuiala: false,
      currentButton: "AddProduct",
      buttons: ["AddProduct", "EditProduct"],
    };
  },
  methods: {
    endSession(){
      localStorage.clear();
      this.$router.push({name: 'HomePage'})
    },
      
     },
    mounted() {
      {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
  
      if (!user) {
        this.$router.push({ name: "HomePage" });
       localStorage.clear();
      }
    }

  },
};
</script>

<style lang="scss" scoped>

</style>