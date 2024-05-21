<template>
  <div class="detail">
    <div class="container">
      <the-detail
        :img="hidroizolatii.img"
        :productType="hidroizolatii.productType"
        :option="hidroizolatii.option"
        :system="hidroizolatii.system"
        :info="hidroizolatii.info"
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
  <div class="about">
    <div class="container">
      <div class="about__wrapper">
        <the-consumation
          :consum="'0.3 kg/m²'"
          :ajunge="'±5-6 m²'"
          :structura="hidroizolatii.option"
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
      hidroizolatii: {
        id: "",
        system: "",
        productType: "",
        img: "",
        info: "",
        price: "",
        masa: "",
      },
      lungimea: "",
      latimea: "",
      cantitatea: "0",
      bucati: "0",
      cost: "0",
    };
  },
  methods: {
    calcSumm() {
      (this.cantitatea =  Math.round(this.lungimea * this.lungimea * 1.6)),
        (this.bucati = Math.round(this.cantitatea / this.hidroizolatii.masa)),
        (this.cost = this.bucati * Number(this.hidroizolatii.price));
      if (this.cantitatea < this.hidroizolatii.masa) {
        (this.bucati = 1), (this.cost = Number(this.hidroizolatii.price));
      }
    },
    clearData() {
      this.lungimea = "";
      this.latimea = "";
      (this.cantitatea = "0"), (this.bucati = "0"), (this.cost = "0");
    },
    async showProduct() {
      let hidroizolatie = await axios.put(
        "http://localhost:3000/hidroizolatii/" + this.$route.params.id,
        {
          id: this.hidroizolatii.id,
          system: this.hidroizolatii.system,
          img: this.hidroizolatii.img,
          productType: this.hidroizolatii.productType,
          option: this.hidroizolatii.option,
          textureImg: this.hidroizolatii.textureImg,
          price: this.hidroizolatii.price,
          masa: this.hidroizolatii.masa,
        }
      );
      if (hidroizolatie.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  async mounted() {
    const hidroizolatie = await axios.get(
      "http://localhost:3000/hidroizolatii/" + this.$route.params.id
    );

    this.hidroizolatii = hidroizolatie.data;
  },
};
</script>
     
   <style scoped>
p {
  font-size: 20px;
}
</style>