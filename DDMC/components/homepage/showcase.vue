<template>
  <header class="header" :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
    
    <nav>
      <p class="showcase-text">
        Discover something new!
      </p>
      <button class="lucky-button" @click="randomRedirect">I'm Feeling Lucky</button>
    </nav>
  </header>
  <div class="pink-divider"></div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/assets/gui/back2.webp",
      ],
      preloadedImages: [],
      currentImageIndex: 0,
      interval: null,
      duration: 5000,
      mods: [
        '/mods/standard',
        '/mods/android',
        '/mods/archive',
        '/mods/videos',
        '/mods/demos'
      ],
    };
  },
  computed: {
    currentImageUrl() {
      return this.images[this.currentImageIndex];
    },
  },
  methods: {
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
    randomRedirect() {
      const randomMod = this.mods[Math.floor(Math.random() * this.mods.length)];
      window.location.href = (randomMod);
    }
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
          height: 50vh;
          background-size: cover;
          background-position: center;
          display: flex;
          transition: background-image 2s ease-in-out;
          position: relative;
        }

        .lucky-button {
          padding: 10px;
          background-color: #ff6347; /* Tomato color for visibility */
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 16px;
          cursor: pointer;
          z-index: 3;
        }
  
        .showcase-text {
          font-size: 5vw;
          font-family: 'Hot Mustard BTN Regular', monospace;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          top: 0%;
          left: 0%;
          text-align: center;
          transform: rotate(0deg);
          animation: pulse 8s linear infinite;
          position: relative;
          z-index: 4;
        }

  
        .pink-divider {
          height: 5vh; /* Adjust the thickness of the divider here */
          background-color: #d67ba8; /* This sets the color to blue */
          width: 100%; /* This ensures the divider stretches across the full width */
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