<template>
  <div class="detail__wrapper">
    <div class="detail__nav">
      <router-link :to="'/produse/'" class="detail__nav-link subheading"
        >Toate produsele</router-link
      >
    </div>
    <div class="detail__content">
      <div class="detail__img">
        <img :src="img" alt="" />
      </div>
      <div class="detail__txt">
        <div class="detail__title">
          <the-head>{{ productType }} {{ option }}</the-head>
        </div>
        <div class="detail__deko">
          <p class="subheading">Face parte din sistemul: {{ system }}</p>
        </div>
        <div class="detail__description">
          <p class="paragraph">{{ info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
 

<script>
import TheHead from "./TheHead.vue";

export default {
  components: { TheHead },

  name: "TheDetail",
  data() {
    return {};
  },
  props: {
    img: {
      type: String,
    },
    system: {
      type: String,
    },
    productType: {
      type: String,
    },
    option: {
      type: String,
    },
    info: {
      type: String,
    },
  },
};
</script>



<style lang="scss">
.detail {
  &__wrapper {
    background: $white;
    border-top-right-radius: $border-radius-b;
    border-top-left-radius: $border-radius-b;
  }
  &__nav {
    padding: $margin-sm 0px 0px $margin-top;
    cursor: pointer;
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__img {
    flex: 1 1 500px;
    margin: $margin-sm;
    width: 500px;
    img {
      width: 100%;
    }
  }
  &__txt {
    flex: 1 1 auto;
    margin: $margin-sm;
    width: 700px;
  }
  &__title {
  }

  &__deko {
  }
  &__description {
  }
}

@media (max-width: 830px) {
  .detail {
    &__wrapper {
      background: $white;
    }
    &__nav {
    }
    &__nav-link {
    }
    &__content {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
    }
    &__img {
      flex: 1 1 auto;
      padding: 0px;
      margin: 0px;
      width: 100%;
      img {
        width: 100%;
      }
    }
    &__txt {
      padding: $margin-sm;
      flex: 1 1 auto;
      margin: $margin-sm;
      width: 100%;
    }
    &__title {
    }
    &__deko {
    }
    &__description {
    }
  }
}
</style>
