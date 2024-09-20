<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__logo">
          <router-link to="/"> 
            <img src="@/assets/img/deko_logo3.jpg" alt="" />
          </router-link>
        </div>
        <div class="footer__info">
          <div class="footer__contacts">
          <p class="subheading">Contacte:</p>
          <ul>
            <li>
              <the-link
                v-for="item in links"
                :key="item.id"
                :link="item.link"
                :href="item.href"
              />
            </li>
          </ul>
        </div>
        <div class="footer___program">
          <p class="subheading">Program de lucru:</p>
          <p class="paragraph">Luni - Vineri 8:30-18:00</p>
          <p class="paragraph">Sâmbătă 8:30-13:00</p>
          <p class="paragraph">Duminica zi liberă</p>
        </div>
        </div>
        
      </div>
      <div class="footer__messaje">
        <p class="paragraph">© 2021-2024. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  </footer>
</template>

<script>
import TheLink from "../UI/TheLink.vue";

export default {
  components: { TheLink },
  name: "TheFooter",
  data() {
    return {
      links: [
        {
          id: "1",
          link: "(373)67473233",
          href: "tel:+(373)67-47-32-33",
        },
        {
          id: "3",
          link: "email@gmail.com",
          href: "mailto:eugenia.vitinschaia@gmail.com",
        },
        {
          id: "4",
          link: "support@gmail.com",
          href: "mailto:eugenia.vitinschaia@gmail.com",
        },
      ],
      socialMedia: [
        {
          id: 1,
          img: require("@/assets/img/facebook.png"),
          text: "facebook",
        },
        {
          id: 2,
          img: require("@/assets/img/viber.png"),
          text: "Facebook",
        },
        {
          id: 3,
          img: require("@/assets/img/wtsp.png"),
          text: "Watsapp",
        },
      ],
    };
  },
};
</script>

<style lang="scss" >
 

</style>