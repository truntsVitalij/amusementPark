<template>
  <section class="hero is-fullheight">
    <img ref="bg" class="image bg" src="@/assets/images/park.png" />
    <img ref="people" class="image people" src="@/assets/images/people.png" />
    <div ref="title" class="park-title">
      <span ref="firstTitle">resort park</span
      ><span ref="lastTitle">Everland</span>
    </div>
    <button class="sroll-block">
      <svg ref="scrollButton" viewBox="0 0 60 60">
        <path
          d="M30 3.75C15.5039 3.75 3.75 15.5039 3.75 30C3.75 44.4961 15.5039 56.25 30 56.25C44.4961 56.25 56.25 44.4961 56.25 30C56.25 15.5039 44.4961 3.75 30 3.75ZM40.8105 24.4746L30.3809 38.8887C30.3377 38.9486 30.2809 38.9973 30.2152 39.031C30.1495 39.0646 30.0767 39.0822 30.0029 39.0822C29.9291 39.0822 29.8563 39.0646 29.7906 39.031C29.7249 38.9973 29.6682 38.9486 29.625 38.8887L19.1953 24.4746C18.9727 24.1641 19.1953 23.7305 19.5762 23.7305H22.3242C22.9219 23.7305 23.4902 24.0176 23.8418 24.5039L30 33.0234L36.1641 24.5039C36.5156 24.0176 37.0781 23.7305 37.6816 23.7305H40.4297C40.8105 23.7305 41.0332 24.1641 40.8105 24.4746V24.4746Z"
        />
      </svg>
    </button>
  </section>
</template>

<script>
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default {
  name: "homeSection",
  components: {},
  mounted() {
    this.parkTitleAnimation();
    this.scrollAnimation();
  },
  methods: {
    parkTitleAnimation() {
      const { firstTitle, lastTitle } = this.$refs;
      gsap.fromTo(
        firstTitle,
        {
          translateX: -2000,
          skewX: 90,
          opacity: 0.2,
        },
        {
          translateX: 0,
          skewX: 0,
          opacity: 1,
          duration: 2,
          ease: "back",
        }
      );
      gsap.to(firstTitle, {
        textShadow: "5px 5px 5px rgba(176, 235, 176, 0.5)",
        delay: 1.5,
        duration: 0.5,
      });
      gsap.to(lastTitle, {
        textShadow: "5px 5px 5px rgba(176, 235, 176, 0.5)",
        delay: 1.5,
        duration: 0.5,
      });
      gsap.fromTo(
        lastTitle,
        {
          translateX: 2000,
          skewX: -90,
          opacity: 0.2,
        },
        {
          translateX: 0,
          skewX: 0,
          opacity: 1,
          duration: 2,
          ease: "back",
        }
      );
    },
    scrollAnimation() {
      const { people, title, scrollButton } = this.$refs;
      gsap.to(people, {
        scrollTrigger: {
          trigger: people,
          start: "top top",
          scrub: true,
          toggleActions: "restart pause reverse pause",
        },
        y: -150,
        x: "20%",
        scale: 1.4,
      });

      gsap.to(title, {
        scrollTrigger: {
          trigger: people,
          start: "top top",
          scrub: true,
          toggleActions: "restart pause reverse pause",
        },
        y: -250,
      });
      gsap.to(scrollButton, {
        scrollTrigger: {
          trigger: people,
          start: "top top",
          end: "bottom 40%",
          scrub: true,
          toggleActions: "restart pause reverse pause",
        },
        opacity: 0,
        duration: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background-color: #534646;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #000000, transparent);
  }

  .park-title {
    font-family: "Architects Daughter";
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
    text-transform: uppercase;
    color: rgb(99, 170, 99);
    font-weight: 700;
  }
  .image {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    mix-blend-mode: overlay;
  }
  .sroll-block {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    animation: animate 1s infinite alternate;
    svg {
      fill: rgb(99, 170, 99);
      width: 40px;
      height: 40px;
    }
  }
}
@keyframes animate {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.3);
  }
}
</style>