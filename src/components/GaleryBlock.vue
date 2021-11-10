<template>
  <div class="galery">
    <div class="galery__block">
      <img @click="nextZone" :src="imageUrl" />
    </div>
    <div class="galery__dots-container">
      <button
        @click="setSelectedZone(1)"
        class="galery--dot"
        :class="{ active_dot: selectedZone == 1 }"
      ></button>
      <button
        @click="setSelectedZone(2)"
        class="galery--dot"
        :class="{ active_dot: selectedZone == 2 }"
      ></button>
      <button
        @click="setSelectedZone(3)"
        class="galery--dot"
        :class="{ active_dot: selectedZone == 3 }"
      ></button>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      selectedZone: 1,
    };
  },
  computed: {
    imageUrl() {
      return require(`../assets/images/benefit${this.selectedZone}.jpg`);
    },
  },
  methods: {
    setSelectedZone(number) {
      this.selectedZone = number;
    },
    nextZone() {
      gsap.to(".galery__block", {
        opacity: 0,
        duration: 0.8,
        translateX: "-50px",
        filter: "blur(3px)",
        onComplete: () => {
          this.selectedZone++;
          gsap.fromTo(
            ".galery__block",
            {
              translateX: "100px",
              opacity: 0,
            },
            {
              opacity: 1,
              filter: "blur(0px)",
              duration: 1,
              translateX: 0,
            }
          );
        },
      });

      console.log(this.imageUrl);
    },
  },
};
</script>

<style lang="scss" scoped>
.galery {
  display: flex;
  flex-direction: column;
  .galery__block {
    img {
      border-radius: 2.5em;
      min-height: 500px;
    }
  }
  .galery__dots-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .galery--dot {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      margin-right: 1rem;
      background: white;
      &.active_dot {
        background: rgb(105, 219, 115);
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>