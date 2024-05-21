<template>
   <div class="wrapper">
     <div class="contents">
       <div class="update">
         <div class="container">
           <div class="update__wrapper">
             <p class="subheading">Update <span class="bold"> {{grunduri.productType}} {{grunduri.option  }}</span></p>
             <div class="update__content">
               <form class="update__form">
                <add-input
              v-model:value="grunduri.id"
              :name="'Introduceți id'"
              />
              <add-input
              v-model:value="grunduri.system"
              :name="'Introduceți DEKOTHERM/HYDROSYSTEM'"
              />
              <add-input
              v-model:value="grunduri.productType"
              :name="'Introduceți denumirea (Tencuială polimerică)'"
              />
              <add-input
              v-model:value="grunduri.option"
              :name="'Introduceți denumirea pentru buton (Mărimea D1.5/25kg)'"
              />
              <add-input
              v-model:value="grunduri.img"
              :name="'Introduceți url imaginea produsului'"
              />
              <add-input
              v-model:value="grunduri.textureImg"
              :name="'Introduceți url textura'"
              />
              <add-input
              v-model:value="grunduri.info"
              :name="'Introduceți informația pentru descriere'"
              />
              <add-input
              v-model:value="grunduri.price"
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
 import AddInput from "./AddInput.vue";
 export default {
   name: "UpdateGrund",
   components: {AddInput },
   data() {
     return {
      grunduri: {
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
         "http://localhost:3000/grunduri/" + this.$route.params.id,
         {
           id: this.grunduri.id,
           system: this.grunduri.system,
           img: this.grunduri.img,
           productType: this.grunduri.productType,
           textureImg: this.grunduri.textureImg,
           option: this.grunduri.option,
           info: this.grunduri.info,
           price: this.grunduri.price,
         }
       );
       if (result.status == 200) {
         this.$router.push({ name: "AdminPage" });
       }
     },
   },
   async mounted() {
     const result = await axios.get(
       "http://localhost:3000/grunduri/" + this.$route.params.id
     );
 
     this.grunduri = result.data;
   },
 };
 </script>
      
    <style lang="scss">
 
 </style>