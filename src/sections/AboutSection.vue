<template>
  <section class="about-section section" ref="container">
    <div class="container">
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
            <div class="column details-column">
              <div class="column is-narrow text-column">
                <p ref="textContent">
                  In South Korea, there is a popular resort park Everland, it is
                  here that you should look for the best attractions in the
                  country. The territory of the park is divided into five
                  thematic zones, among which there are suitable for fans of
                  extreme sports in the West, and for those who want to visit
                  original shops. The park has a real shopping area with the
                  tempting name "World's Fair". Everland is one of the most
                  visited amusement parks in the world, with at least 6.5
                  million visitors annually since 2011.
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
    const { textContent, container } = this.$refs;
    gsap.to(textContent, {
      duration: 1.5,
      opacity: 1,
      translateY: 0,
      scrollTrigger: {
        trigger: container,
        markers: true,
        start: "200px bottom",
        end: "50% 40%",
        toggleActions: "restart play restart play",
      },
    });
  },
  methods: {
    playVideo() {
      console.log("play");
    },
  },
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
        padding: 2em;
        font-weight: 500;
        letter-spacing: 0.2em;
      }
      p {
        margin-bottom: 2em;
        opacity: 0;
        transform: translateY(50px);
      }
      &.bordered-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        svg {
          width: 400px;
          height: 300px;
          fill: white;
          .wheel_group {
            animation: rotateWheel 10s infinite linear;
            transform-origin: center;
            transform-box: fill-box;
          }
        }
        span {
          font-size: Architects;
          font-size: 32px;
          font-weight: 600;
        }
      }
      &.details-column {
        text-align: center;
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
@keyframes rotateWheel {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>