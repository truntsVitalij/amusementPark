<template>
  <section class="section feed-back-section">
    <div ref="feedBackCountainer" class="container feedback-list">
      <h2 class="section__title">FeedBack</h2>
      <feed-back-block></feed-back-block>
      <feed-back-block></feed-back-block>
      <feed-back-block></feed-back-block>
      <feed-back-block></feed-back-block>
    </div>
  </section>
</template>

<script>
import FeedBackBlock from "../components/FeedBackBlock.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: { FeedBackBlock },
  mounted() {
    const { feedBackCountainer } = this.$refs;
    console.log(feedBackCountainer.children);
    gsap.fromTo(
      feedBackCountainer.children,
      {
        opacity: 0,
        translateY: "50px",
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 0.8,
        stagger: 0.2,
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.feed-back-section {
  position: relative;
}
</style>