<template>
  <div class="add">
    <div class="add__buttons">
      <button
        @click="showPopupTencuiala = !showPopupTencuiala"
        class="black__button"
      >
        Add Tencuială
      </button>
      <button class="black__button" @click="showPopupGrund = !showPopupGrund">
        Add Grund
      </button>
      <button class="black__button" @click="showPopupAdeziv = !showPopupAdeziv">
        Add Adeziv
      </button>
      <button class="black__button" @click="showPopupHidro = !showPopupHidro">
        Add Hidroizolati
      </button>
    </div>
    <div class="add__items">
      <div
        id="popup__tencuiala"
        class="add__item"
        v-bind:class="{ active: showPopupTencuiala }"
      >
        <form action="" class="add_form">
          <p class="subheading">Tencuieli</p>
          <add-input
            v-model:value="products.id"
            :name="'Introduceți id'"
            :placeholder="'id Product'"
          />
          <add-input
            v-model:value="products.system"
            :name="'Introduceți'"
            :placeholder="'DEKOTHERM/HYDROSYSTEM'"
          />
          <add-input
            v-model:value="products.productType"
            :name="'Introduceți denumirea'"
            :placeholder="'Tencuială polimerică'"
          />
          <add-input
            v-model:value="products.option"
            :name="'Introduceți denumirea pentru buton'"
            :placeholder="'Mărimea D1.5/25kg'"
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
            :placeholder="'Informatie despre produs'"
          />
          <add-input
            v-model:value="products.price"
            :name="'Introduceți prețul pentru o unitate'"
            :placeholder="'4500'"
          />
          <button class="green__button" @click="insertData()">
            Add Tencuiala
          </button>
          <button
            class="red__button"
            @click="showPopupTencuiala = !showPopupTencuiala"
          >
            Close
          </button>
        </form>
      </div>
      <div
        class="add__item"
        id="popup__grund"
        v-bind:class="{ active: showPopupGrund }"
      >
        <form action="" class="add_form">
          <p class="subheading">Grunduri</p>
          <add-input
            v-model:value="grunduri.id"
            :name="'Introduceți id'"
            :placeholder="'ID'"
          />
          <add-input
            v-model:value="grunduri.system"
            :name="'Introduceți tipul sistemului'"
            :placeholder="'DEKOTHERM'"
          />
          <add-input
            v-model:value="grunduri.productType"
            :name="'Introduceți denumirea'"
            :placeholder="'Grund concentrat'"
          />
          <add-input
            v-model:value="grunduri.option"
            :name="'Introduceți denumirea pentru buton'"
            :placeholder="'Acrilat'"
          />
          <add-input
            v-model:value="grunduri.img"
            :name="'Introduceți url imaginea produsului'"
          />
          <add-input
            v-model:value="grunduri.textureImg"
            :name="'Introduceți url textura'"
          />
          <add-input
            v-model:value="grunduri.info"
            :name="'Introduceți informația pentru descriere'"
            :placeholder="'Informatie despre produs'"
          />
          <add-input
            v-model:value="grunduri.price"
            :name="'Introduceți prețul pentru o unitate'"
            :placeholder="'60'"
          />
          <button class="green__button" @click="insertGrund()">
            Add Grund
          </button>
          <button class="red__button" @click="showPopupGrund = !showPopupGrund">
            Close
          </button>
        </form>
      </div>
      <div
        class="add__item"
        id="popup__adeziv"
        v-bind:class="{ active: showPopupAdeziv }"
      >
        <form action="" class="add_form">
          <p class="subheading">Adeziv</p>
          <add-input
            v-model:value="adezivi.id"
            :name="'Introduceți id'"
            :placeholder="'ID'"
          />
          <add-input
            v-model:value="adezivi.system"
            :name="'Introduceți'"
            :placeholder="'DEKOTHERM/HYDROSYSTEM'"
          />
          <add-input
            v-model:value="adezivi.productType"
            :name="'Introduceți denumirea'"
            :placeholder="'Adeziv Thermo Mineral'"
          />
          <add-input
            v-model:value="adezivi.option"
            :name="'Introduceți denumirea pentru buton'"
            :placeholder="'Greutatea 25kg'"
          />
          <add-input
            v-model:value="adezivi.img"
            :name="'Introduceți url imaginea produsului'"
          />
          <add-input
            v-model:value="adezivi.textureImg"
            :name="'Introduceți url textura'"
          />
          <add-input
            v-model:value="adezivi.info"
            :name="'Introduceți informația pentru descriere'"
            :placeholder="'Informatie despre produs'"
          />
          <add-input
            v-model:value="adezivi.price"
            :name="'Introduceți prețul pentru o unitate'"
            :placeholder="'500'"
          />
          <button class="green__button" @click="insertAdeziv()">
            Add Adeziv
          </button>
          <button
            class="red__button"
            @click="showPopupAdeziv = !showPopupAdeziv"
          >
            Close
          </button>
        </form>
      </div>
      <div
        class="add__item"
        id="popup__hidro"
        v-bind:class="{ active: showPopupHidro }"
      >
        <form action="" class="add_form">
          <p class="subheading">Hidroizolatii</p>
          <add-input
            v-model:value="hidroizolatii.id"
            :name="'Introduceți id'"
            :placeholder="'ID'"
          />
          <add-input
            v-model:value="hidroizolatii.system"
            :name="'Introduceți'"
            :placeholder="'DEKOTHERM/HYDROSYSTEM'"
          />
          <add-input
            v-model:value="hidroizolatii.productType"
            :name="'Introduceți denumirea'"
            :placeholder="'HydroProtect MONO'"
          />
          <add-input
            v-model:value="hidroizolatii.option"
            :name="'Introduceți denumirea pentru buton'"
            :placeholder="'Greutatea 25kg'"
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
            :placeholder="'Informatie despre produs'"
          />
          <add-input
            v-model:value="hidroizolatii.price"
            :name="'Introduceți prețul pentru o unitate'"
            :placeholder="'50'"
          />
          <button class="green__button" @click="insertHidro()">
            Add Hidro
          </button>
          <button class="red__button" @click="showPopupHidro = !showPopupHidro">
            Close
          </button>
        </form>
      </div>
    </div>
  </div>
  <div class="message" v-show="message">
    <p class="message__text subtitle">Product has been added</p>
  </div>
  <div class="mistake" v-show="mistake">
    <p class="mistake__text subtitle">Product has been not added</p>
  </div>
</template>
       
   <script>
import axios from "axios";
import AddInput from "./AddInput.vue";
export default {
  name: "AddProduct",
  components: { AddInput },
  data() {
    return {
      message: false,
      mistake: false,
      showPopupTencuiala: false,
      showPopupGrund: false,
      showPopupAdeziv: false,
      showPopupHidro: false,
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
  computed: {},
  methods: {
    async insertData() {
      let result = await axios.post("http://localhost:3000/products", {
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
        this.message = true;
        setTimeout(() => {  this.message = false; }, 1000); 
        // setTimeout(() => { this.$router.push({ name: "ContactePage" });}, 1000); 
      }  
    },
    async insertGrund() {
      let result = await axios.post("http://localhost:3000/grunduri", {
        id: this.grunduri.id,
        system: this.grunduri.system,
        img: this.grunduri.img,
        productType: this.grunduri.productType,
        option: this.grunduri.option,
        textureImg: this.grunduri.textureImg,
        info: this.grunduri.info,
        price: this.grunduri.price,
      });
      if (result.status == 201) {
        this.message = true;
        // setTimeout(() => { this.$router.push({ name: "ContactePage" });}, 1000); 
      }  
    },
    async insertAdeziv() {
      let result = await axios.post("http://localhost:3000/adezivi", {
        id: this.adezivi.id,
        system: this.adezivi.system,
        img: this.adezivi.img,
        productType: this.adezivi.productType,
        option: this.adezivi.option,
        textureImg: this.adezivi.textureImg,
        info: this.adezivi.info,
        price: this.adezivi.price,
      });
      if (result.status == 201) {
        this.message = true;
        // setTimeout(() => { this.$router.push({ name: "ContactePage" });}, 1000); 
      }  
    },
    async insertHidro() {
      let result = await axios.post("http://localhost:3000/hidroizolatii", {
        id: this.hidroizolatii.id,
        system: this.hidroizolatii.system,
        img: this.hidroizolatii.img,
        productType: this.hidroizolatii.productType,
        option: this.hidroizolatii.option,
        textureImg: this.hidroizolatii.textureImg,
        info: this.hidroizolatii.info,
        price: this.hidroizolatii.price,
      });
      if (result.status == 201) {
        this.message = true;
        // setTimeout(() => { this.$router.push({ name: "ContactePage" });}, 1000); 
      }  
    },
  },

  mounted() {

  },
};
</script>
       
 <style lang="scss">
.message {
  width: 400px;
  height: 30px;
  background: $green;
  border-radius: $border-radius;
  bottom: 0;
  right: 0;
  position: absolute;
  .message__text {
    padding: 10px 5px;
    color: $white;
    text-align: center;
  }
}
.mistake {
  width: 400px;
  height: 30px;
  background: $red;
  border-radius: $border-radius;
  bottom: 0;
  right: 0;
  position: absolute;
  display: none;
  &__text {
    padding: 10px 5px;
    color: $white;
    text-align: center;
  }
}
</style>