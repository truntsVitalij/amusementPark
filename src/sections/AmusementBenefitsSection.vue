<template>
  <section class="section amusement-catalog">
    <div ref="container" class="container">
      <h2 class="section__title">Benefits</h2>
      <div class="columns">
        <div ref="benefitList" class="column benefit-container">
          <div class="benefit">
            <svg class="approve" viewBox="0 0 24 24">
              <path
                d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"
              />
            </svg>
            <p class="benefit__title">One of the best recreation parks</p>
          </div>
          <div class="benefit">
            <svg class="approve" viewBox="0 0 24 24">
              <path
                d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"
              />
            </svg>
            <p class="benefit__title">Friendly staff</p>
          </div>
          <div class="benefit">
            <svg class="approve" viewBox="0 0 24 24">
              <path
                d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"
              />
            </svg>
            <p class="benefit__title">Huge set of possibilities</p>
          </div>
          <div class="benefit">
            <svg class="approve" viewBox="0 0 24 24">
              <path
                d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"
              />
            </svg>
            <p class="benefit__title">Concerts of popular performers</p>
          </div>
          <div class="benefit">
            <svg class="approve" viewBox="0 0 24 24">
              <path
                d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"
              />
            </svg>
            <p class="benefit__title">Solid positive and a surge of emotions</p>
          </div>
          <div class="benefit">
            <svg class="approve" viewBox="0 0 24 24">
              <path
                d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"
              />
            </svg>
            <p class="benefit__title">Separate approach to each client</p>
          </div>
          <div class="benefit">
            <svg class="approve" viewBox="0 0 24 24">
              <path
                d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"
              />
            </svg>
            <p class="benefit__title">
              Three recreation areas for different tastes
            </p>
          </div>
        </div>
        <div class="column">
          <galery-block></galery-block>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import GaleryBlock from "../components/GaleryBlock.vue";
export default {
  components: {
    GaleryBlock,
  },
  mounted() {
    const { container } = this.$refs;

    let tl = new gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "80% bottom",
        markers: true,
        toggleActions: "restart play restart play",
      },
    });
    tl.fromTo(
      ".benefit",
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
    tl.fromTo(
      ".approve",
      {
        opacity: 0,
        scale: 0.2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.amusement-catalog {
  display: flex;
  .columns {
    height: 100%;
  }
  .benefit-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .benefit {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-bottom: 1em;
      &:last-child {
        margin-bottom: 0;
      }
      svg {
        fill: rgb(105, 219, 115);
        height: 40px;
        margin-right: 0.5em;
        z-index: 1;
        stroke-width: 2px;
        stroke: rgb(105, 219, 115);
      }
      .benefit__title {
        z-index: 1;

        flex: 1;
        font-weight: 600;
        color: white;
      }
    }
  }
}
</style>