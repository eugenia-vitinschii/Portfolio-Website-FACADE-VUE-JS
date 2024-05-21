<template>
  <div class="icontxt">
    <div class="icontxt__img">
      <img :src="img" alt="" />
    </div>
    <div class="icontxt__txt">
      <a :href="href" class="paragraph icontxt__link">{{ information }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconTxt",
  props: {
    img: {
      type: String,
    },
    information: {
      type: String,
    },
    href: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.icontxt {
  display: flex;
  align-items: center;
  &__img {


    img {
    width: 30px;
    height: 30px;
    }
  }
  &__txt {
    padding: $margin-sm;
    margin-right: 20px;
  }
  &__link {
    color: $black;
    cursor: pointer;
    @include animations();
  }
  &__link:hover {
    color: $yellow;
  }
}
</style>