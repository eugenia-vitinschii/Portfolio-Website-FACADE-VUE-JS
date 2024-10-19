<template>
  <div class="info">
    <div class="container">
      <div class="info__wrapper">
        <div class="info__contacts">
          <the-head>Contactează-ne</the-head>
          <div class="info__contacts-block">
            <icon-txt
              v-for="item in info"
              :key="item.id"
              :img="item.img"
              :information="item.information"
              :href="item.href"
            />
          </div>
        </div>
        <div class="info__call">
          <the-head>Solicită apel</the-head>
          <div class="info__form">
            <form class="info__form-form">
              <the-input
                v-model="form.name"
                :label="'Introduceți numele dvs'"
                :inputType="'name'"
                :placeholder="'Nume'"
              />
              <the-input
                v-model="form.email"
                :label="'Introduceți email de contact'"
                :placeholder="'nume@email.com'"
              />
              <the-input
                v-model="form.number"
                :label="'Introduceți numărul de contact'"
                :inputType="'tel'"
                :placeholder="'94-564-321'"
              />
              <the-input
                v-model="form.title"
                :label="'Tema mesajului'"
                :placeholder="'Comanda pentru..'"
              />
              <the-textarea
                :label="'Introduceți mesajul'"
                v-model="form.message"
                :placeholder="'Avem nevoie de livrare pentru...'"
              />
              <button class="black__button info__button" type="submit">
                Trimite
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import IconTxt from "../components/UI/IconTxt.vue";
import TheHead from "../components/UI/TheHead.vue";
import TheInput from "../components/UI/TheInput.vue";
import TheTextarea from "../components/UI/TheTextarea.vue";
export default {
  components: { TheHead, IconTxt, TheInput, TheTextarea },
  name: "ContacteView",
  data() {
    return {
      info: [
        {
          id: 1,
          img: require("@/assets/img/ringer-volume-100.png"),
          information: "+(373)67-47-32-33",
          href: "tel:+(373)67-47-32-33",
        },
        {
          id: 2,
          img: require("@/assets/img/address-100.png"),
          information: "Moldova Chișinău",
          href: "tel:+(373)67-47-32-33",
        },
        {
          id: 3,
          img: require("@/assets/img/icons8-clock-100.png"),
          information:
            "Program de lucru: Luni - Vineri 8:30-18:00 Sâmbătă 8:30-13:00",
          href: "tel:+(373)67-47-32-33",
        },
        {
          id: 4,
          img: require("@/assets/img/icons8-gmail-100.png"),
          information: "eugenia.vitinschaia@gmail.com",
          href: "mailto:eugenia.vitinschaia@gmail.com",
        },
      ],
      form: {
        name: "",
        email: "",
        number: "",
        title: "",
        message: "",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss">

</style>