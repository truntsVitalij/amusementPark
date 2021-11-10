<template>
  <section class="about-section section" ref="container">
    <div class="container">
      <h2 class="section__title" ref="title">About us</h2>
      <div class="columns">
        <div class="column">
          <div class="column video-column">
            <video autoplay muted loop>
              <source src="@/assets/videos/park_trailer.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="column">
          <div class="columns is-flex-direction-column">
            <div class="column bordered-column">
              <svg>
                <use href="@/assets/svg/svgPictures.svg#amusement_wheel"></use>
              </svg>
              <span> Evarland </span>
            </div>
            <div class="column details-colum">
              <div class="column is-narrow text-column">
                <p ref="textContent">
                  In South Korea, there is a popular resort park Everland, it is
                  here that you should look for the best attractions in the
                  country. The territory of the park is divided into five
                  thematic zones, among which there are suitable for fans of
                  extreme sports in the West, and for those who want to visit
                  original shops. The park has a real shopping area with the
                  tempting name "World's Fair".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "aboutSection",
  mounted() {
    const { textContent, container, title } = this.$refs;
    gsap.to(textContent, {
      duration: 1.5,
      delay: 0.5,
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        start: "70% bottom",
        toggleActions: "restart play restart play",
      },
    });
    gsap.fromTo(
      title,
      {
        translateX: "-100%",
        opacity: 0,
      },
      {
        duration: 0.6,
        delay: 0.3,
        ease: "ease-out",
        translateX: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: container,
          start: "10% bottom",
          toggleActions: "restart play restart play",
        },
      }
    );
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.about-section {
  position: relative;
  background-color: #010107;
  .columns {
    height: 100%;
    box-sizing: border-box;
    .column {
      padding-bottom: 0;
      .text-column {
        text-align: justify;
        padding: 2em;
        font-weight: 500;
        letter-spacing: 0.2em;
      }
      p {
        margin-bottom: 2em;
        opacity: 0;
      }
      &.bordered-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        use {
          width: 400px;
          height: 300px;
          fill: white;
          transform-origin: center;
          transform-box: fill-box;
          path.wheel_group {
          }
        }
        span {
          font-size: Architects;
          font-size: 32px;
          font-weight: 600;
        }
      }
      &.video-column {
        padding: 0;
        height: 100%;
        video {
          min-height: 100%;
          object-fit: none;
        }
      }
    }
  }
}
</style>