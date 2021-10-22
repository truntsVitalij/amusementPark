<template>
  <div
    ref="wrapper"
    @mousemove="moveOnWrapper"
    @mouseleave="resetAnimation"
    @mouseenter="playAnimation"
    class="tariff-wrapper"
  >
    <div ref="block" class="tariff-block">
      <div ref="cardTitle" class="tariff-block__title">
        <slot name="title"></slot>
      </div>
      <div ref="cardDesc" class="tariff-block__description">
        <slot name="description"> </slot>
      </div>
      <div ref="cardControl" class="tariff-block__controls">
        <button class="button">Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    moveOnWrapper(e) {
      const { block } = this.$refs;
      const xAxis = (window.innerWidth / 2 - e.screenX) / 15;
      const resulX = xAxis > 45 ? 45 : xAxis;
      const yAxis = (window.innerHeight / 2 - e.screenY) / 15;
      block.style.transform = `rotateY(${resulX}deg) rotateX(${yAxis}deg)`;
      block.style.boxShadow = "0px 0px 40px rgba(158, 207, 118, 0.9)";
    },
    playAnimation() {
      const { block } = this.$refs;
      block.style.transition = "none";
    },
    resetAnimation() {
      const { block } = this.$refs;
      block.style.transform = "rotateY(0) rotateX(0)";
      block.style.transition = "all 0.5s ease";
      block.style.boxShadow = "4px -4px 10px rgba(158, 207, 118, 0.7)";
    },
  },
};
</script>

<style lang="scss" scoped>
.tariff-wrapper {
  transform-style: preserve-3d;
  padding: 1em;
  .tariff-block {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    box-shadow: 4px -4px 10px rgba(158, 207, 118, 0.7);
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      radial-gradient(
          at top center,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(0, 0, 0, 0.4) 120%
        )
        #989898;
    background-blend-mode: multiply, multiply;
    border-radius: 2rem;
    cursor: pointer;
    min-height: 500px;
    transform-style: preserve-3d;
    .tariff-block__title {
      text-align: center;
      font-size: 2em;
      font-weight: 600;
      text-transform: uppercase;
      height: 60px;
      letter-spacing: 2px;
    }
    .tariff-block__description {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: center;
      flex: 1;
      padding-top: 2em;
      .tariff-description {
        flex: 1;
      }
      .tariff-price {
        font-size: 2.5em;
        letter-spacing: 3px;
        font-weight: 600;
        margin: 2rem 0;
      }
    }
    .tariff-block__controls {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      .button {
        border: none;
        background: rgba(158, 207, 118, 0.7);
        color: white;
        transition: all 0.8s;
      }
    }
  }
}
</style>