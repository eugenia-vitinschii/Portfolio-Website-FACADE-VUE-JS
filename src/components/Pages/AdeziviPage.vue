<template>
  <div class="detail">
    <div class="container">
      <the-detail
        :img="adezivi.img"
        :productType="adezivi.productType"
        :option="adezivi.option"
        :system="adezivi.system"
        :info="adezivi.info"
      />
    </div>
  </div>
  <div class="properties">
    <div class="container">
      <div class="properties__wrapper">
        <cost-calculation
          v-model:lungimea="lungimea"
          v-model:latimea="latimea"
          @calcSumm="calcSumm"
          @clearData="clearData"
          :cantitatea="cantitatea"
          :bucati="bucati"
          :cost="cost"
          :unitatea="'saci'"
          :produs="'adeziv'"
        />
      </div>
    </div>
  </div>
  <div class="abouts"> 
    <div class="container">
      <div class="about__wrapper">
        <the-consumation
          :consum="'0.3 kg/m²'"
          :ajunge="'±5-6 m²'"
          :structura="adezivi.option"
          :timp="'48 ore'"
        />
      </div>
    </div>
  </div>
</template>
     
  <script>
  
import axios from "axios";
import TheDetail from "../UI/TheDetail.vue";
import CostCalculation from "../UI/CostCalculation.vue";
import TheConsumation from "../UX/TheConsumation.vue";
export default {
  name: "AdeziviPage",
  components: {
    TheDetail,
    CostCalculation,
    TheConsumation,
  },
  data() {
    return {
      adezivi: {
        id: "",
        system: "",
        productType: "",
        img: "",
        info: "",
      },
      lungimea: "",
      latimea: "",
      cantitatea: "",
      bucati: "",
      cost: "",
    };
  },
  methods: {
    calcSumm() {
      (this.cantitatea = Math.round(this.lungimea * this.lungimea * 4.5)),
        (this.bucati = Math.round(this.cantitatea / 25)),
        (this.cost = this.bucati * Number(this.adezivi.price));
      if (this.cantitatea < 25) {
        (this.bucati = 1), (this.cost = Number(this.adezivi.price));
      }
    },
    clearData() {
      this.lungimea = "";
      this.latimea = "";
      (this.cantitatea = "0"), (this.bucati = "0"), (this.cost = "0");
    },
    async showProduct() {
      let adeziv = await axios.put(
        "http://localhost:3000/adezivi/" + this.$route.params.id,
        {
          id: this.adezivi.id,
          system: this.adezivi.system,
          img: this.adezivi.img,
          productType: this.adezivi.productType,
          option: this.adezivi.option,
          textureImg: this.adezivi.textureImg,
        }
      );
      if (adeziv.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  async mounted() {
    const adeziv = await axios.get(
      "http://localhost:3000/adezivi/" + this.$route.params.id
    );
    this.adezivi = adeziv.data;
  },
};
</script>
     
   <style>
</style>