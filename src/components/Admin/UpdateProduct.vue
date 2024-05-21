<template>
  <div class="wrapper">
    <div class="contents">
      <div class="update">
        <div class="container">
          <div class="update__wrapper">
            <p class="subheading">Update  <span class="bold">{{products.productType }} {{ products.option }}</span></p>
            <div class="update__content">
              <form class="update__form">
                <add-input
              v-model:value="products.id"
              :name="'Introduceți id'"
              />
              <add-input
              v-model:value="products.system"
              :name="'Introduceți DEKOTHERM/HYDROSYSTEM'"
              />
              <add-input
              v-model:value="products.productType"
              :name="'Introduceți denumirea (Tencuială polimerică)'"
              />
              <add-input
              v-model:value="products.option"
              :name="'Introduceți denumirea pentru buton (Mărimea D1.5/25kg)'"
              />
              <add-input
              v-model:value="products.img"
              :name="'Introduceți url imaginea produsului'"
              />
              <add-input
              v-model:value="products.textureImg"
              :name="'Introduceți url textura'"
              />
              <add-input
              v-model:value="products.info"
              :name="'Introduceți informația pentru descriere'"
              />
              <add-input
              v-model:value="products.price"
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
  name: "UpdateProduct",
  components: {AddInput },
  data() {
    return {
      products: {
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
        "http://localhost:3000/products/" + this.$route.params.id,
        {
          id: this.products.id,
          system: this.products.system,
          img: this.products.img,
          productType: this.products.productType,
          textureImg: this.products.textureImg,
          option: this.products.option,
          info: this.products.info,
          price: this.products.price,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "AdminPage" });
      }
    },
  },
  async mounted() {
    const result = await axios.get(
      "http://localhost:3000/products/" + this.$route.params.id
    );

    this.products = result.data;
  },
};
</script>
     
   <style lang="scss">
</style>