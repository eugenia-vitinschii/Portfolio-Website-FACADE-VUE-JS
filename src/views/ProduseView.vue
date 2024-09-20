<template>
  <div class="search">
    <div class="container">
      <div class="search__wrapper">
        <input
          class="search__input"
          type="text"
          placeholder="Caută produsul..."
          v-model="searchTerm"
        />
      </div>
    </div>
  </div>

  <div class="product">
    <div class="container">
      <div class="product__wrapper">
        <card-product
          v-for="product in filteredProducts"
          :key="product.id"
          :img="product.img"
          :textureImg="product.textureImg"
          :system="product.system"
          :productType="product.productType"
          :option="product.option"
          @getProduct="showProduct(product.id)"
        />
        <card-product
          v-for="grund in filteredGrunduri"
          :key="grund.id"
          :img="grund.img"
          :textureImg="grund.textureImg"
          :system="grund.system"
          :productType="grund.productType"
          :option="grund.option"
          @getProduct="showGrund(grund.id)"
        />
        <card-product
          v-for="adeziv in filteredAdezivi"
          :key="adeziv.id"
          :img="adeziv.img"
          :textureImg="adeziv.textureImg"
          :system="adeziv.system"
          :productType="adeziv.productType"
          :option="adeziv.option"
          @getProduct="showAdeziv(adeziv.id)"
        />
        <card-product
          v-for="hidroizolatie in filteredHidroizolatii"
          :key="hidroizolatie.id"
          :img="hidroizolatie.img"
          :textureImg="hidroizolatie.textureImg"
          :system="hidroizolatie.system"
          :productType="hidroizolatie.productType"
          :option="hidroizolatie.option"
          @getProduct="showHidro(hidroizolatie.id)"
        />
        <div class="product__space"></div>
        <div class="product__space"></div>
        <div class="product__space"></div>
        <div class="product__space"></div>
        <div class="product__space"></div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import CardProduct from "../components/UI/CardProduct.vue";

export default {
  inheritAttrs: false,
  components: { CardProduct },
  name: "ProduseView",
  data() {
    return {
      searchTerm: "",
      products: [],
      grunduri: [],
      adezivi: [],
      hidroizolatii: [],
    };
  },
  methods: {
    async addToCard( ){
      console.log('addProduct');
      let result = await axios.post("http://localhost:3000/favorites", {
        id: this.products.id,
        system: this.products.system,
        img: this.products.img,
        productType: this.products.productType,
        option: this.products.option,
        textureImg: this.products.textureImg,
        info: this.products.info,
        price: this.products.price,
      });
      if (result.status == 201) {
        console.log('addProduct');
      }
    },
    showProduct(id) {
      this.$router.push({ name: "TencuieliPage", params: { id: id } });
    },
    showGrund(id) {
      this.$router.push({ name: "GrunduriPage", params: { id: id } });
    },
    showAdeziv(id) {
      this.$router.push({ name: "AdeziviPage", params: { id: id } });
    },
    showHidro(id) {
      this.$router.push({ name: "HidroizolatiiPage", params: { id: id } });
    },

    async loadData() {
      let products = await axios.get("http://localhost:3000/products");
      let grunduri = await axios.get("http://localhost:3000/grunduri");
      let adezivi = await axios.get("http://localhost:3000/adezivi");
      let hidroizolatii = await axios.get(
        "http://localhost:3000/hidroizolatii"
      );

      this.adezivi = adezivi.data;
      (this.products = products.data),
        (this.grunduri = grunduri.data),
        (this.hidroizolatii = hidroizolatii.data);
    },
  },
  mounted() {
    this.loadData();
  },

  computed: {
    filteredProducts() {
      let filteredTencuila = this.products.filter((product) => {
        return product.productType
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
      let orderedStories = filteredTencuila.sort((a, b) => {
        return b.upvoted - a.upvoted;
      });
      return orderedStories;
    },
    filteredAdezivi() {
      let filteredAdezivi = this.adezivi.filter((adeziv) => {
        return adeziv.productType
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
      let selectedAdezivi = filteredAdezivi.sort((d, v) => {
        return d.upvoted - v.upvoted;
      });
      return selectedAdezivi;
    },
    filteredGrunduri() {
      let filteredGrunduri = this.grunduri.filter((grund) => {
        return grund.productType
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
      let selectedGrunduri = filteredGrunduri.sort((d, v) => {
        return d.upvoted - v.upvoted;
      });
      return selectedGrunduri;
    },
    filteredHidroizolatii() {
      let filteredHidroizolatii = this.hidroizolatii.filter((hidroizolatie) => {
        return hidroizolatie.productType
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
      let selectedHidroizolatii = filteredHidroizolatii.sort((d, v) => {
        return d.upvoted - v.upvoted;
      });
      return selectedHidroizolatii;
    },
  },
};
</script>

<style lang="scss">
</style>