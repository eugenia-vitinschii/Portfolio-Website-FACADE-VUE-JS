<template>
  <div class="edit">

        <!-- <p class="subheading">Edit product page</p> -->
        <table class="edit__table">
          <tr><!--Tr sections name-->
            <th>ID</th>
            <th>System</th>
            <th>Name</th>
            <th>Tip</th>
            <th>Pret</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.system }}</td>
            <td>{{ product.productType }}</td>
            <td>{{ product.option }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button class="red__button" 
              @click="deleteProduct(product.id)"
              >
                Delete
              </button>
            </td>
            <td>
              <router-link class="green__button" 
              :to="'/update/' + product.id"
              >
                Update
              </router-link>
            </td>
          </tr>
          <tr v-for="product in grunduri" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.system }}</td>
            <td>{{ product.productType }}</td>
            <td>{{ product.option }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button class="red__button" 
                @click="deleteGrund(product.id)"
              >
                Delete
              </button>
            </td>
            <td>
              <router-link
                class="green__button"
                :to="'/update-grund/' + product.id"
                >Update</router-link
              >
            </td>
          </tr>
          <tr v-for="product in adezivi" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.system }}</td>
            <td>{{ product.productType }}</td>
            <td>{{ product.option }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button class="red__button" 
                @click="deleteAdeziv(product.id)"
              >
                Delete
              </button>
            </td>
            <td>
              <router-link
                class="green__button"
                :to="'/update-adeziv/' + product.id"
              >
                Update
              </router-link>
            </td>
          </tr>
          <tr v-for="product in hidroizolatii" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.system }}</td>
            <td>{{ product.productType }}</td>
            <td>{{ product.option }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button class="red__button" @click="deleteHidro(product.id)">
                Delete
              </button>
            </td>
            <td>
              <router-link
                class="green__button"
                :to="'/update-hidro/' + product.id"
                >Update</router-link
              >
            </td>
          </tr>
        </table>
      </div>
      <div class="message" v-show="message">
    <p class="message__text subtitle">Product has been delete</p>
  </div>

</template>
       
   <script>
import axios from "axios";
export default {
  name: "EditProduct",
  components: {},

  data() {
    return {
      message: false,

      showWarnPopup: false,
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
    async deleteProduct(id) {
      let result = await axios.delete("http://localhost:3000/products/" + id);
      if (result.status == 200) {
        this.message = true;
        setTimeout(() => {  this.message = false; }, 1000); 
        this.loadData();
      }
    },
    async deleteGrund(id) {
      let result = await axios.delete("http://localhost:3000/grunduri/" + id);
      if (result.status == 200) {
        this.message = true;
        setTimeout(() => {  this.message = false; }, 1000); 
        this.loadGrund();
      }
    },
    async deleteAdeziv(id) {
      let result = await axios.delete("http://localhost:3000/adezivi/" + id);
      if (result.status == 200) {
        this.message = true;
        setTimeout(() => {  this.message = false; }, 1000); 
        this.loadAdeziv();
      }
    },
    async deleteHidro(id) {
      let result = await axios.delete(
        "http://localhost:3000/hidroizolatii/" + id
      );
      if (result.status == 200) {
        this.message = true;
        setTimeout(() => {  this.message = false; }, 1000); 
        this.loadHidro();
      }
    },
    async loadData() {
      let result = await axios.get("http://localhost:3000/products");
      this.products = result.data;
    },

    async loadGrund() {
      let result = await axios.get("http://localhost:3000/grunduri");
      this.grunduri = result.data;
    },
    async loadAdeziv() {
      let result = await axios.get("http://localhost:3000/adezivi");
      this.adezivi = result.data;
    },
    async loadHidro() {
      let result = await axios.get("http://localhost:3000/hidroizolatii");
      this.hidroizolatii = result.data;
    },
  },
  mounted() {
    this.loadData(), this.loadGrund(), this.loadAdeziv(), this.loadHidro();
  },
};
</script>
       
 <style lang="scss">
 
</style>