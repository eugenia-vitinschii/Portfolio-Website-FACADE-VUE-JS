<template>
   <div class="wrapper">
     <div class="content">
       <div class="update">
         <div class="container">
           <div class="update__wrapper">
             <p class="subheading">Update <span class="bold">{{ adezivi.productType }} {{ adezivi.option}}</span></p>
             <div class="update__content">
               <form class="update__form">
                <add-input
              v-model:value="adezivi.id"
              :name="'Introduceți id'"
              />
              <add-input
              v-model:value="adezivi.system"
              :name="'Introduceți DEKOTHERM/HYDROSYSTEM'"
              />
              <add-input
              v-model:value="adezivi.productType"
              :name="'Introduceți denumirea (Adeziv Thermo Mineral)'"
              />
              <add-input
              v-model:value="adezivi.option"
              :name="'Introduceți denumirea pentru buton (Greutatea 25kg)'"
              />
              <add-input
              v-model:value="adezivi.img"
              :name="'Introduceți url imaginea produsului'"
              />
              <add-input
              v-model:value="adezivi.textureImg"
              :name="'Introduceți url textura'"
              />
              <add-input
              v-model:value="adezivi.info"
              :name="'Introduceți informația pentru descriere'"
              />
              <add-input
              v-model:value="adezivi.price"
              :name="'Introduceți prețul pentru o unitate'"
              />
                 <button
                   class="green__button"
                   type="button"
                   @click="updateProduct()"
                 >
                   Save
                 </button>
               </form>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </template>
      
    <script>
 import axios from "axios";
import AddInput from './AddInput.vue';
 
 export default {
   name: "UpdateAdeziv",
   components: {AddInput},
   data() {
     return {
      adezivi: {
        id: "",
        system: "",
        img: "",
        productType: "",
        textureImg: "",
        option: "",
        info: "",
        price: "",
      },
     };
   },
   methods: {
     async updateProduct() {
       let result = await axios.put(
         "http://localhost:3000/adezivi/" + this.$route.params.id,
         {
           id: this.adezivi.id,
           system: this.adezivi.system,
           img: this.adezivi.img,
           productType: this.adezivi.productType,
           textureImg: this.adezivi.textureImg,
           option: this.adezivi.option,
           info: this.adezivi.info,
           price: this.adezivi.price,
         }
       );
       if (result.status == 200) {
         this.$router.push({ name: "AdminPage" });
       }
     },
   },
   async mounted() {
     const result = await axios.get(
       "http://localhost:3000/adezivi/" + this.$route.params.id
     );
 
     this.adezivi = result.data;
   },
 };
 </script>
      
    <style lang="scss">
.update__form{
  background: $white;
  padding: 20px;
}
 </style>