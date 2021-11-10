<template>
  <div class="section price-section">
    <div class="container price-container">
      <h2 class="section__title" ref="tariffTitle">Choose you tariff</h2>
      <div class="columns">
        <div class="column">
          <tariff-block>
            <template v-slot:title> standart </template>
            <template v-slot:description>
              <span class="tariff-description">
                This tariff provides a standard set of amusements in the park
                for two hours. Suitable for those who visit our fascinating park
                for the first time
              </span>
              <span class="tariff-price">9.99$ </span>
            </template>
          </tariff-block>
        </div>
        <div class="column">
          <tariff-block>
            <template v-slot:title> all day </template>
            <template v-slot:description>
              <span class="tariff-description">
                This rate includes most of the amusement park provided, without
                limiting you in time. Have fun all day long.
                <br />This is perfect, isn't it?
              </span>
              <span class="tariff-price">29.99$ </span>
            </template>
          </tariff-block>
        </div>
        <div class="column">
          <tariff-block>
            <template v-slot:title> birthday </template>
            <template v-slot:description>
              <span class="tariff-description">
                Is it your birthday, buddy? Come celebrate with us. All doors
                are open for you today. We promise to create unforgettable
                emotions about this day
              </span>
              <span class="tariff-price"> 14.99$ </span>
            </template>
          </tariff-block>
        </div>
        <div class="column">
          <tariff-block>
            <template v-slot:title> for family </template>
            <template v-slot:description>
              <span class="tariff-description">
                Are you on vacation with your family? Want to give your kids a
                great weekend? do not hesitate and choose this tariff. We have
                special attention and love for small children.
              </span>
              <span class="tariff-price"> 19.99$ </span>
            </template>
          </tariff-block>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TariffBlock from "../components/TariffBlock.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: { TariffBlock },
  name: "priceSection",
  mounted() {
    const { tariffTitle } = this.$refs;
    gsap.to(tariffTitle, {
      scrollTrigger: {
        scrollTrigger: {
          trigger: tariffTitle,
          start: "top top",
          scrub: true,
          toggleActions: "restart pause reverse pause",
        },
      },
      duration: 0.5,
      translateX: 0,
    });
  },
};
</script>

<style lang="scss" scoped>
.price-section {
  .title {
    color: white;
    font-size: 3.5em;
    text-align: center;
    transform: translateX(-100%);
    margin-bottom: 1.5em;
  }
}
</style>