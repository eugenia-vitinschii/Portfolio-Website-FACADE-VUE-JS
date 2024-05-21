<template>
  <div class="detail">
    <div class="container">
      <the-detail
        :img="grunduri.img"
        :productType="grunduri.productType"
        :option="grunduri.option"
        :system="grunduri.system"
        :info="grunduri.info"
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
          :unitatea="'caldari/saci'"
          :produs="'grund'"
        />

        <the-colors></the-colors>
      </div>
    </div>
  </div>
  <div class="about">
    <div class="container">
      <div class="about__wrapper">
        <the-consumation
          :consum="'0.3 kg/m²'"
          :ajunge="'±16 m²'"
          :structura="grunduri.option"
          :timp="'24 ore'"
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
  name: "GrunduriPage",
  components: {
    TheDetail,
    CostCalculation,
    TheConsumation,
  },
  data() {
    return {
      grunduri: {
        id: "",
        system: "",
        productType: "",
        img: "",
        info: "",
        price: "",
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
      (this.cantitatea = Math.ceil(this.lungimea * this.lungimea * 0.3)),
        (this.bucati = Math.ceil(this.cantitatea / 5)),
        (this.cost = this.bucati * Number(this.grunduri.price));
      if (this.cantitatea < 5) {
        (this.bucati = 1), (this.cost = Number(this.grunduri.price));
      }
    },
    clearData() {
      this.lungimea = "";
      this.latimea = "";
      (this.cantitatea = "0"), (this.bucati = "0"), (this.cost = "0");
    },
    async showProduct() {
      let grund = await axios.put(
        "http://localhost:3000/grunduri/" + this.$route.params.id,
        {
          id: this.grunduri.id,
          system: this.grunduri.system,
          img: this.grunduri.img,
          productType: this.grunduri.productType,
          option: this.grunduri.option,
          textureImg: this.grunduri.textureImg,
          price: this.grunduri.price,
          info: this.grunduri.info,
        }
      );
      if (grund.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  async mounted() {
    const grund = await axios.get(
      "http://localhost:3000/grunduri/" + this.$route.params.id
    );
    //console.warn(this.$route.params.id)
    // console.warn(result);
    // console.warn(result.data);

    this.grunduri = grund.data;
  },
};
</script>
     
   <style scoped>
</style>