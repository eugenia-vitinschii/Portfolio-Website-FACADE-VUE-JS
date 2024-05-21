<template>
   <div class="wrapper">
     <div class="contents">
       <div class="update">
         <div class="container">
           <div class="update__wrapper">
             <p class="subheading">Update <span class="bold">{{hidroizolatii.productType }} {{hidroizolatii.option }}</span></p>
             <div class="update__content">
               <form class="update__form">
                <add-input
              v-model:value="hidroizolatii.id"
              :name="'Introduceți id'"
              />
              <add-input
              v-model:value="hidroizolatii.system"
              :name="'Introduceți DEKOTHERM/HYDROSYSTEM'"
              />
              <add-input
              v-model:value="hidroizolatii.productType"
              :name="'Introduceți denumirea (HydroProtect MONO)'"
              />
              <add-input
              v-model:value="hidroizolatii.option"
              :name="'Introduceți denumirea pentru buton (Greutatea 25kg)'"
              />
              <add-input
              v-model:value="hidroizolatii.img"
              :name="'Introduceți url imaginea produsului'"
              />
              <add-input
              v-model:value="hidroizolatii.textureImg"
              :name="'Introduceți url textura'"
              />
              <add-input
              v-model:value="hidroizolatii.info"
              :name="'Introduceți informația pentru descriere'"
              />
              <add-input
              v-model:value="hidroizolatii.price"
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
   name: "UpdateHidro",
   components: {AddInput},
   data() {
     return {
       hidroizolatii: {
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
         "http://localhost:3000/hidroizolatii/" + this.$route.params.id,
         {
           id: this.hidroizolatii.id,
           system: this.hidroizolatii.system,
           img: this.hidroizolatii.img,
           productType: this.hidroizolatii.productType,
           textureImg: this.hidroizolatii.textureImg,
           option: this.hidroizolatii.option,
           info: this.hidroizolatii.info,
           price: this.hidroizolatii.price,
         }
       );
       if (result.status == 200) {
         this.$router.push({ name: "AdminPage" });
       }
     },
   },
   async mounted() {
     const result = await axios.get(
       "http://localhost:3000/hidroizolatii/" + this.$route.params.id
     );
 
     this.hidroizolatii = result.data;
   },
 };
 </script>
      
    <style lang="scss">
 </style>