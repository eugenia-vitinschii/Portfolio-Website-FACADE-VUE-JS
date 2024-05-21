<template>
      <div class="detail">
        <div class="container">
          <the-detail
            :img="products.img"
            :productType="products.productType"
            :option="products.option"
            :system="products.system"
            :info="products.info"
          />
        </div>
      </div>

      <div class="properties">
        <div class="container">
          <div class="properties__wrapper">
            <cost-calculation
              v-model:lungimea.number="lungimea"
              v-model:latimea="latimea"
              @calcSumm="calcSumm"
              @clearData="clearData"
              :cantitatea="cantitatea"
              :bucati="bucati"
              :cost="cost"
              :unitatea="'caldari'"
              :produs="'tencuială'"
            />
            <the-colors/>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="container">
         <div class="about__wrapper">
          <the-consumation
          :consum="'2.5 kg/m²'"
          :ajunge="'±10 m²'"
          :structura="products.option"
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
import TheColors from "../UX/TheColors.vue";
import TheConsumation from "../UX/TheConsumation.vue";
export default {
  name: "TencuieliPage",
  components: {
    TheDetail,
    CostCalculation,
    TheColors,
    TheConsumation
  },

  data() {
    return {
      products: {
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
      (this.cantitatea =  Math.round(this.lungimea * this.lungimea * 2.5)),
        (this.bucati = Math.round(this.cantitatea / 25)),
        (this.cost = this.bucati * Number(this.products.price));
      if (this.cantitatea < 25) {
        (this.bucati = 1), (this.cost = Number(this.products.price));
      }
    },
    clearData() {
      this.lungimea = "";
      this.latimea = "";
      (this.cantitatea = "0"), (this.bucati = "0"), (this.cost = "0");
    },
    async showProduct() {
      let result = await axios.put(
        "http://localhost:3000/products/" + this.$route.params.id,
        {
          id: this.products.id,
          system: this.products.system,
          img: this.products.img,
          productType: this.products.productType,
          option: this.products.option,
          textureImg: this.products.textureImg,
          price: this.products.price,
        }
      );

      if (result.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  async mounted() {
    this.cantitatea = this.lungimea * this.latimea;
    const result = await axios.get(
      "http://localhost:3000/products/" + this.$route.params.id
    );
    this.products = result.data;
  },
};
</script>
     
<style lang="scss">
.properties {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background: white;
    padding: $margin-sm;
    // border-bottom-right-radius: $border-radius-b;
    // border-bottom-left-radius: $border-radius-b;
  }
  &__cost {
    margin: 0px $margin-sm 0px 0px;
    min-width: 300px;
  }
  &__cost-subheading {
  }

  &__cost-item {
    width: 200px;
  }
  &__cost-paragraph {
  }
  &__cost-buttons {
    margin: $margin-top 0px 0px 0px;
  }

  &__cost-button {
    margin: 10px $margin-sm 0px 0px;
  }
  &__cost-rezults {
    margin-top: $margin-top;
  }

  &__color {
    width: 920px;
    min-width: 500px;
  }

  &__color-buttons,
  &__color-items {
    @include gridContainer();
  }
  &__color-button,
  &__color-item {
    @include gridItem();
  }
  &__color-buttons {
    width: 100%;
    justify-items: stretch;
    grid-auto-flow: column;
  }
  &__color-button:first-child {
    border: 1px solid rgb(230, 230, 232);
  }
  &__color-items {
    height: 200px;
    overflow: scroll;
    grid-auto-flow: row;
  }
  &__color-item {
    position: relative;
  }
  &__color-item-name {
    @include centerTextPosition();
    text-align: center;
    font-size: $body-text-sm;
    color: white;
    cursor: pointer;
  }
}

@media (max-width: 830px) {
  .properties {
    &__wrapper {
      flex-direction: column;
    }
    &__color {
      margin-top: $margin-sm;
      width: 100%;
    }

    &__color-button,
    &__color-item {
      height: 90px;
    }
  }
}
@media (max-width: 543px) {
  .properties {
    &__color {
      width: 100%;
      min-width: 200px;
    }
  }
}
@media (max-width: 485px) {
  .properties {
    &__color {
      width: 100%;
      min-width: 200px;
    }
    &__color-buttons,
    &__color-items {
      grid-template-columns: repeat(4, minmax(10px, 1fr));
      grid-template-rows: repeat(3, 1fr);
    }
    &__color-button,
    &__color-item {
    }
    &__color-item-name {
      font-size: 10px;
    }
  }
}


.about{
  &__wrapper{
    padding-top: $margin-top;
    background: $white;
  }
  &__consumation{
    display: flex;
    justify-content: space-around;
    padding: $margin-sm;
  }
  &__consumation-item {
   
    
}
&__consumation-img {

  width: 128px;
  height: 128px; 
  background: $yellow;
  border-radius: 50%;
  img{

    padding: 25px;
    width: 100%;
    height: 100%;
  }
}
&__consumation-txt {
  text-align: center;
}
&__consumation-title{
  color: $yellow;
  font-weight: bold;
}
}


@media (max-width: 700px){
  .about{
  &__wrapper{
    padding-top: $margin-top;
    background: $white;
  }
  &__consumation{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: $margin-sm;
    
  }
  &__consumation-item {
   border-bottom: 1px dashed $yellow;
   padding: 10px 0px 10px 0px;
   position: relative;
}
&__consumation-img { 
  width: 90px;
  height: 90px; 
  background: $yellow;
  border-radius: 50%;
  img{
    padding: 20px;
    width: 90px;
  height: 90px; 
  }
}
&__consumation-txt {
  @include centerTextPosition()
}
&__consumation-title{
  color: $yellow;
  font-weight: bold;
}
}
}
@media (max-width: 375px){
  .about{
    &__consumation-txt {

  padding: 0px 0px  0px 100px ;
}
  }
}
</style>