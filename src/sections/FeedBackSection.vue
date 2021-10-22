<template>
  <section class="section feed-back-section">
    <svg>
      <use href="@/assets/svg/svgPictures.svg#amusement_park"></use>
    </svg>
    <div class="container feedback-list">
      <feed-back-block></feed-back-block>
      <feed-back-block></feed-back-block>
      <feed-back-block></feed-back-block>
      <feed-back-block></feed-back-block>
    </div>
  </section>
</template>

<script>
import FeedBackBlock from "../components/FeedBackBlock.vue";
export default {
  components: { FeedBackBlock },
};
</script>

<style lang="scss" scoped>
.feed-back-section {
  position: relative;
  svg {
    position: absolute;
    left: 0;
    width: 70%;
    height: 100%;
  }
}
</style>