<script>
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    MainContent,
    Footer,
  },
  data() {
    return {
      showOverlay: true, // Controls the visibility of the overlay
    };
  },
  mounted() {
    setTimeout(() => {
      const overlay = document.getElementById('overlay');
      overlay.style.opacity = '0';
      setTimeout(() => {
        this.showOverlay = false; // Remove the overlay after the fade-out
      }, 150); // Match the CSS transition duration
    }, 350); // Delay before starting the fade-out
  },
};
</script>

<template>
  <div id="app">
    <div id="overlay" v-show="showOverlay"></div>
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;600&family=Shadows+Into+Light&family=Urbanist&family=Varela+Round&display=swap');
body,
html {
  color: white;
  /* background: radial-gradient(at top left, #1e1e28, #262d37); */
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
  box-sizing: border-box;

  /* background: linear-gradient(50deg, #0295be 0%, #653737 100%),
    linear-gradient(
      -160deg,
      rgb(94, 94, 94) 0%,
      #808080 40%,
      #484848 calc(50% + 1px),
      #bebebe 60%,
      #b7b7b7 calc(60% + 1px),
      #959595 75%,
      #959595 calc(75% + 1px),
      #6a6a6a 100%
    ),
    linear-gradient(
      -140deg,
      #151515 0%,
      #0c0c0c 5%,
      #1f1f1f calc(30% + 1px),
      #161616 50%,
      #151515 calc(50% + 1px),
      #121212 90%,
      #121212 calc(70% + 1px),
      #242424 100%
    ); */
  background: linear-gradient(0deg, #a03434 0%, #1176a5 100%),
    linear-gradient(
      -180deg,
      #221f22 10%,
      #5401fa 100%
    ),
    linear-gradient(
      100deg,
      #81357b 5%,
      #000000 100%
    );

  /*     background: linear-gradient(125deg, #ffffff 0%, #ababab 100%),
    linear-gradient(
      160deg,
      rgb(152, 152, 152) 0%,
      #828282 40%,
      #9a9a9a calc(50% + 1px),
      #aaaaaa 60%,
      #b8b8b8 calc(60% + 1px),
      #989898 75%,
      #929292 calc(75% + 1px),
      #636363 100%
    ),
    linear-gradient(
      140deg,
      #0b0b0b 0%,
      #0d0d0d 5%,
      #151515 calc(30% + 1px),
      #0a0a0a 50%,
      #141414 calc(50% + 1px),
      #0f0f0f 90%,
      #101010 calc(70% + 1px),
      #3b3b3b 100%
    ); */

  /* background: linear-gradient(125deg, #ffffff 0%, #b35151 100%),
    linear-gradient(
      30deg,
      rgb(5, 62, 95) 0%,
      #0e4a82 20%,
      #15395c calc(50% + 1px),
      #0c6eaf 60%,
      #1170b9 calc(60% + 1px),
      #256d9d 75%,
      #206a9c calc(75% + 1px),
      #2b5076 100%
    ),
    linear-gradient(
      170deg,
      #05080a 0%,
      #03070d 20%,
      #0a0f15 calc(40% + 1px),
      #070d11 50%,
      #0a0d12 calc(50% + 1px),
      #0a1318 90%,
      #071118 calc(70% + 1px),
      #132141 100%
    ); */
  /* background: linear-gradient(125deg, #3a4142 0%, #767373 100%),
    linear-gradient(-200deg, #8d8c8c 0%, #8e9498 20%),
    linear-gradient(
      160deg,
      #1b1b1b 5%,

      #2d3236 calc(50% + 1px),
      #171717 100%
    ); */
  /* linear-gradient(
      113deg,
      #000306 0%,
      #000308 40%,
      #000409 calc(40% + 1px),
      #000309 50%,
      #00050b calc(50% + 1px),
      #0f0007 70%,
      #130000 calc(70% + 1px),
      #150000 100%
    ); */
  background-blend-mode: overlay, overlay, normal;

  /* background: linear-gradient(121.28deg, #010000 0%, #f8f8f8 100%),
    linear-gradient(140.54deg, #0bb17f 0%, #260507 72.37%),
    linear-gradient(307.43deg, #25039f 0%, #8ebadc 100%),
    radial-gradient(107% 142.8% at 15.71% 104.5%, #d6d6e1 0%, #75a69a 100%),
    #ffffff;
  background-blend-mode: overlay, overlay, difference, difference, difference,
    normal; */

  /* background: radial-gradient(at top center, #242432, #0b0d11); */
  /* background: #1e1e28; */
  /* background-image: linear-gradient(to bottom right, #242432, #0b0d11); */
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  font-family: 'Varela Round', sans-serif;
  /* font-family: 'League Spartan', sans-serif; */
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'League Spartan', sans-serif;
  font-weight: 400;
  /* font-family: 'Urbanist', sans-serif; */
}
p {
  font-family: 'Urbanist', sans-serif;
  font-weight: 200;
  line-height: 1.4;
}
a {
  text-decoration: none;
  font-weight: 200;
  line-height: 1.4;
  color: #aee5fa;
}
a:visited {
  text-decoration: none;
  font-weight: 200;
  line-height: 1.4;
  color: #aee5fa;
}
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(20px); 
  background-color: rgba(3, 6, 30, 0.8);
  z-index: 9999; /* Ensure it covers everything */
  transition: opacity 0.15s ease; /* Smooth fade-out */
}
</style>
