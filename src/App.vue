<template>
  <div id="app">
    <home-section></home-section>
    <about-section></about-section>
    <price-section></price-section>
    <contacts-section></contacts-section>
  </div>
</template>

<script>
import AboutSection from "./sections/AboutSection.vue";
import ContactsSection from "./sections/ContactsSection.vue";
import HomeSection from "./sections/HomeSection.vue";
import PriceSection from "./sections/PriceSection.vue";
export default {
  components: { HomeSection, AboutSection, ContactsSection, PriceSection },
  name: "App",
};
</script>
<style lang="scss">
@import "styles/style.scss";
</style>;
