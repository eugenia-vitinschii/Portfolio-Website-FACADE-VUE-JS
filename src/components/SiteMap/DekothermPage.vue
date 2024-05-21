<template>
  <div class="therm">
    <div class="container">
      <div class="therm__wrapper">
        <div class="therm__system">
          <div class="therm__content">
            <therm-description
              :thermSystem="maxFirst"
              :years="fifteen"
              :material="vata"
            />
            <therm-img
              :imgMaterial="maxFifteemMaterial"
              :imgYears="maxFifteemYears"
            />
          </div>
          <div class="therm__item">
            <therm-item
              v-for="product in products"
              :key="product.id"
              :img="product.img"
              :system="product.system"
              :productType="product.productType"
              :descitption="product.description"
            />
            <div class="therm__space"></div>
            <div class="therm__space"></div>
            <div class="therm__space"></div>
            <div class="therm__space"></div>
          </div>
        </div>
        <div class="therm__system">
          <div class="therm__content">
            <therm-description
              :thermSystem="maxSecond"
              :years="ten"
              :material="vata"
            />
            <therm-img :imgMaterial="maxTenMaterial" :imgYears="maxTenYears" />
          </div>
          <div class="therm__item">
            <therm-item
              v-for="product in maxTen"
              :key="product.id"
              :img="product.img"
              :system="product.system"
              :productType="product.productType"
              :descitption="product.description"
            />
            <div class="therm__space"></div>
            <div class="therm__space"></div>
            <div class="therm__space"></div>
            <div class="therm__space"></div>
          </div>
        </div>
        <div class="therm__system">
          <div class="therm__content">
            <therm-description
              :thermSystem="standardFirst"
              :years="ten"
              :material="polistiren"
            />
            <therm-img
              :imgMaterial="standardTenMaterial"
              :imgYears="maxTenYears"
            />
          </div>
          <div class="therm__item">
            <therm-item
              v-for="product in standardTen"
              :key="product.id"
              :img="product.img"
              :system="product.system"
              :productType="product.productType"
              :descitption="product.description"
            />
            <div class="therm__space"></div>
            <div class="therm__space"></div>
            <div class="therm__space"></div>
            <div class="therm__space"></div>
          </div>
        </div>
        <div class="therm__system">
          <div class="therm__content">
            <therm-description
              :thermSystem="standardSecond"
              :years="five"
              :material="polistiren"
            />
            <therm-img
              :imgMaterial="standardFiveMaterial"
              :imgYears="standardFiveYears"
            />
          </div>
          <div class="therm__item">
            <therm-item
              v-for="product in standardFive"
              :key="product.id"
              :img="product.img"
              :system="product.system"
              :productType="product.productType"
              :descitption="product.description"
            />
            <div class="therm__space"></div>
            <div class="therm__space"></div>
            <div class="therm__space"></div>
            <div class="therm__space"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import ThermDescription from "../UI/ThermDescription.vue";
import ThermImg from "../UI/ThermImg.vue";
import ThermItem from "../UI/ThermItem.vue";

export default {
  components: {
    ThermDescription,
    ThermImg,
    ThermItem,
  },
  name: "DekothermPage",
  data() {
    return {
      products: [],
      maxTen: [],
      standardTen: [],
      standardFive: [],
      maxFirst: "Max 15",
      maxSecond: "Max 10",
      standardFirst: "Standard 10",
      standardSecond: "Standard 5",
      polistiren: "polistiren",
      vata: "vată minerală",
      fifteen: "15",
      ten: "10",
      five: "5",
      maxFifteemMaterial: require("@/assets/img/DEKOTHERM-MAX15.png"),
      maxFifteemYears: require("@/assets/img/garantie15.png"),
      maxTenMaterial: require("@/assets/img/MAX10.png"),
      maxTenYears: require("@/assets/img/garantie10.png"),
      standardTenMaterial: require("@/assets/img/Standart10.png"),
      standardFiveMaterial: require("@/assets/img/Standart10.png"),
      standardFiveYears: require("@/assets/img/grantie5.png"),
    };
  },
  methods: {
    async loadData() {
      let products = await axios.get("http://localhost:3000/maxFifteen");
      this.products = products.data;
    },
    async loadMaxTen() {
      let maxTen = await axios.get("http://localhost:3000/maxTen");
      this.maxTen = maxTen.data;
    },
    async loadStandardTen() {
      let standardTen = await axios.get("http://localhost:3000/standardTen");
      this.standardTen = standardTen.data;
    },
    async loadStandardFive() {
      let standardFive = await axios.get("http://localhost:3000/standardFive");
      this.standardFive = standardFive.data;
    },
  },
  mounted() {
    this.loadData();
    this.loadMaxTen();
    this.loadStandardTen();
    this.loadStandardFive();
  },
};
</script>

<style lang="scss">
</style>