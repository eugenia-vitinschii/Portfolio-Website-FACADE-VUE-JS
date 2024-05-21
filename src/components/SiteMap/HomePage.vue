<template>
  <div class="appeal">
    <div class="container">
      <div class="appeal__wrapper">
        <div class="appeal__content">
          <div class="appeal__content-text">
            <the-head>Soluții profesionale</the-head>
            <p class="paragraph">
              DEKO Professional: una din cele mai bine echipate Companii chimice
              din sud-estul Europei. Are o lungă istorie în industria
              prelucrătoare de produse chimice specializate.
            </p>
          </div>
          <div class="appeal__content-buttons">
            <router-link class="header__info-item txt" to="/produse">
              Produse
            </router-link>
            <router-link class="header__info-item txt" to="/contacte">
             Contacte
            </router-link>
          </div>
          <div class="appeal__content-logo">
            <img src="@/assets/img/dekoLogo.jpg" alt="" />
          </div>
        </div>
        <div class="appeal__img">
          <div class="appeal__bg"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="solution">
    <div class="container">
      <div class="solution__wrapper">
        <div class="solution__faq">
          <head-tag>De ce alegem DEKO?</head-tag>
        </div>
        <div class="solution__answer">
          <the-features
            v-for="feature in features"
            :key="feature.id"
            :img="feature.img"
            :text="feature.text"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="showcase">
    <div class="container">
      <div class="showcase__wrapper">
        <head-tag>Produse Top</head-tag>
        <div class="product__wrapper">
          <card-product
            v-for="product in products"
            :key="product.id"
            :img="product.img"
            :textureImg="product.textureImg"
            :system="product.system"
            :productType="product.productType"
            :option="product.option"
            @getProduct="showProduct(product.id)"
          />
          <div class="product__space"></div>
          <div class="product__space"></div>
          <div class="product__space"></div>
          <div class="product__space"></div>
          <div class="product__space"></div>
        </div>
        <div class="produse__img">
          <img src="@/assets/img/all-products.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

   
   
<script>
import axios from "axios";
import CardProduct from "../UI/CardProduct.vue";
import TheFeatures from "../UI/TheFeatures.vue";
import TheHead from "../UI/TheHead.vue";
import HeadTag from "../UI/TheHead.vue";

export default {
  components: { TheFeatures, CardProduct, TheHead, HeadTag },
  name: "HomePage",
  data() {
    return {
      system: "text  7u667676767",
      img: require("@/assets/img/temperature-sensitive-100.png"),
      products: [],
      features: [
        {
          id: 1,
          text: "Fațadă dura și protejată",
          img: require("@/assets/img/temperature-sensitive-100.png"),
        },
        {
          id: 2,
          text: "Eficiență energetică graratată",
          img: require("@/assets/img/pay-wall-50.png"),
        },
        {
          id: 3,
          text: "Confort în casă pe parcursul întregului an",
          img: require("@/assets/img/good-quality-100.png"),
        },
      ],
    };
  },
  methods: {
    showProduct(id) {
      this.$router.push({ name: "TencuieliPage", params: { id: id } });
    },
    async loadData() {
      let products = await axios.get("http://localhost:3000/top");

      this.products = products.data;
    },
  },

  mounted() {
    this.loadData();
  },
};
</script>
   
<style lang="scss">
.showcase {
  margin-top: $margin-top;
  &__products {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
  }
}
.product__wrapper {
  margin-top: $margin-top;
}
</style>