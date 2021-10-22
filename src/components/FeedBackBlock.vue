<template>
  <div class="box feedback">
    <div class="client-avatar"></div>
    <div class="client-feed-back">
      <span class="client-name"> Victoria </span>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo illum
        vero voluptatum eos, dolorum aliquid aut maxime. Vitae, distinctio, amet
        libero nostrum corporis harum rerum eum, numquam hic quos aspernatur?
      </p>
      <span class="date"> 13 March 2020, 15:30 </span>
    </div>
    <div class="tarrif-name">all day</div>
  </div>
</template>

<script>
export default {
  name: "feed-back-block",
};
</script>

<style lang="scss" scoped>
.feedback {
  position: relative;
  padding: 0;
  display: flex;
  min-height: 120px;
  border-radius: 20px;
  box-shadow: 4px -4px 10px rgba(158, 207, 118, 0.7);
  overflow: hidden;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.5)
  );
  backdrop-filter: blur(5px);

  &:nth-of-type(2n + 2) {
    background: linear-gradient(
      to right bottom,
      rgba(133, 133, 133, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    .client-feed-back {
      span {
        color: white;
      }
    }
    .tarrif-name {
      color: white;
    }
  }
  .tarrif-name {
    position: absolute;
    bottom: 20px;
    right: 20px;
    text-transform: uppercase;
    font-weight: 700;
    color: gray;
  }
  .client-avatar {
    width: 100px;
    height: 100%;
  }
  .client-feed-back {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px 0 20px 20px;
    p {
      color: black;
    }
    span {
      font-size: 12px;
      color: gray;
      &.client-name {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>