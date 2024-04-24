<template>
    <header class="header" :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
      <div class="image-overlay"></div>
      <nav>
        <p class="playmod-text">
          Wanna play a mod?
          <a href="/mods">
          <img src="/assets/gui/playamod.webp" class="button-image-mods" @mouseenter="playHoverSound">
          </a>
        </p>
        <p class="mod-text">
            <a href="/more/assets">
          <img src="/assets/gui/makeamod.webp" class="button-image-make" @mouseenter="playHoverSound">
          </a>
          Wanna make a mod?
        </p>
      </nav>
    </header>
    <div class="green-divider"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "/assets/mod_prevs/DDTT.webp",
          "/assets/mod_prevs/svhsoriginal.webp",
          "/assets/mod_prevs/wodact1.webp",
          "/assets/mod_prevs/salvationremake.webp",
          "/assets/mod_prevs/outcast.webp",
          "/assets/mod_prevs/presents.webp",
          "/assets/mod_prevs/exitspoof.webp",
          "/assets/mod_prevs/ocw.webp",
          "/assets/mod_prevs/exitmusic.webp",
          "/assets/mod_prevs/exitmusicredux.webp",
          "/assets/mod_prevs/amorfati.webp",
          "/assets/mod_prevs/12hours.webp",
          "/assets/mod_prevs/blueseasdemov2.webp",
          "/assets/mod_prevs/clubisdying.webp",
        ],
        preloadedImages: [],
        currentImageIndex: 0,
        interval: null,
        duration: 6000,
        characterSprites: {},
      };
    },
    computed: {
      currentImageUrl() {
        return this.images[this.currentImageIndex];
      },
    },
    methods: {
      navigateToMods() {
        this.$router.push('/mods');
      },
      playHoverSound(event) {
        const hoverSound = new Audio('/assets/sfx/hover.wav');
        hoverSound.play();
      },
      preloadImages() {
        this.images.forEach((image) => {
          const img = new Image();
          img.src = image;
          this.preloadedImages.push(img);
        });
      },
      startImageTransition() {
        this.interval = setInterval(() => {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        }, this.duration);
      },
    },
    mounted() {
      this.preloadImages();
      this.startImageTransition();
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
  };
  </script>
  
  <style scoped>
  
/* ------------------------------------------------------------------------------------------------------------------------------------------------- */
/*dedicated mobile view*/
  @media (max-width: 1023px) {
   .header {
     display: none;
   }
 }
/* ------------------------------------------------------------------------------------------------------------------------------------------------- */

  @font-face {
    font-family: 'Hot Mustard BTN Regular';
    src: url('/assets/fonts/HotMustardBTNRegular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @media (min-width: 1024px) {
    .header {
      width: 100vw;
      height: 70vh;
      background-size: cover;
      background-position: center;
      display: flex;
      transition: background-image 2s ease-in-out;
      position: relative;
    }
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
    }
    .playmod-text {
      font-size: 4vw;
      font-family: 'Hot Mustard BTN Regular', monospace;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      top: 5%;
      left: 5%;
      text-align: center;
      transform: rotate(0deg);
      animation: pulse 8s linear infinite;
      position: relative;
      z-index: 15;
      display: inline-block;
    }
    .button-image-mods {
      display: block; 
      cursor: pointer;
      width: 20vw;
      margin-left: 25%;
      margin-top: 5vh;
      transition: transform 0.3s ease-in-out;
    }
    .button-image-mods:hover {
        opacity: 0.8;
        transform: scale(1.05) rotate(0deg);
    }
    .mod-text {
        font-size: 4vw;
        font-family: 'Hot Mustard BTN Regular', monospace;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        bottom: 5%;
        right: 5%;
        text-align: center;
        transform: rotate(0deg);
        animation: pulse 8s linear infinite;
        position: absolute;
        z-index: 4;
        display: inline-block;
    }
    .button-image-make {
      display: flex; 
      cursor: pointer;
      width: 20vw;
      margin-left: 30%;
      margin-bottom: 5vh;
      bottom: 30%;
      transition: transform 0.3s ease-in-out;
    }
    .button-image-make:hover {
        opacity: 0.8;
        transform: scale(1.05) rotate(0deg);
    }

    .green-divider {
      height: 5vh;
      background-color: #02f29e;
      width: 100%;
    }
  }

  @keyframes pulse {
    0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
    20% { text-shadow: 0 0 10px rgba(255, 0, 0, 0.8); }
    40% { text-shadow: 0 0 10px rgba(0, 255, 0, 0.8); }
    60% { text-shadow: 0 0 10px rgba(255, 192, 203, 0.8); }
    80% { text-shadow: 0 0 10px rgba(148, 0, 211, 0.8); }
    100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
  }
</style>
