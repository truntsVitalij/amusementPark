<template>
  <div id="app">
    <home-section></home-section>
    <about-section></about-section>
    <amusement-catalog-section></amusement-catalog-section>
    <price-section></price-section>
    <feed-back-section></feed-back-section>
    <contacts-section></contacts-section>
    <footer>
      <div class="columns is-align-items-center">
        <div class="column">Designed by Trunts Vitalij</div>
        <div class="column">+375259513199</div>
      </div>
    </footer>
  </div>
</template>

<script>
import AboutSection from "./sections/AboutSection.vue";
import AmusementCatalogSection from "./sections/AmusementCatalogSection.vue";
import ContactsSection from "./sections/ContactsSection.vue";
import FeedBackSection from "./sections/FeedBackSection.vue";
import HomeSection from "./sections/HomeSection.vue";
import PriceSection from "./sections/PriceSection.vue";
export default {
  components: {
    HomeSection,
    AboutSection,
    ContactsSection,
    PriceSection,
    AmusementCatalogSection,
    FeedBackSection,
  },
  name: "App",
  data() {
    return {
      isOpenModal: false,
    };
  },
};
</script>
<style lang="scss">
@import "styles/style.scss";
footer {
  font-size: 11px;
  height: 80px;
  background: black;
}
</style>;
