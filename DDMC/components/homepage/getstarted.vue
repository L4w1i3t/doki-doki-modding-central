<template>
  <header class="header" :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
    <div class="image-overlay"></div>
    <div class="button-container">
      <div class="button-item">
        <div class="playmod-text">Want to play a mod?</div>
        <a href="/mods" class="button-link">
          <img class="button-image-mods" @mouseover="playHoverSound" src="/assets/gui/playamod.webp" alt="Play a Mod">
        </a>
      </div>
      <div class="button-item">
        <div class="makemod-text">Want to make a mod?</div>
        <a href="/more/assets" class="button-link">
          <img class="button-image-make" @mouseover="playHoverSound" src="/assets/gui/makeamod.webp" alt="Make a Mod">
        </a>
      </div>
    </div>
  </header>
  <div class="green-divider"></div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [],
      preloadedImages: [],
      currentImageIndex: 0,
      interval: null,
      duration: 6000,
      characterSprites: {},
      allImagesLoaded: false,
    };
  },
  computed: {
    currentImageUrl() {
      return this.images.length > 0 ? this.images[this.currentImageIndex] : '';
    },
  },
  methods: {
    playHoverSound() {
      const hoverSound = new Audio('/assets/sfx/hover.wav');
      hoverSound.play();
    },
    preloadImages() {
      let loadedCount = 0;
      this.images.forEach((image) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === this.images.length) {
            this.allImagesLoaded = true;
            this.startImageTransition();
          }
        };
        img.src = image;
        this.preloadedImages.push(img);
      });
    },
    startImageTransition() {
      if (this.allImagesLoaded) {
        this.interval = setInterval(() => {
          let nextImageIndex;
          do {
            nextImageIndex = Math.floor(Math.random() * this.images.length);
          } while (nextImageIndex === this.currentImageIndex);
          this.currentImageIndex = nextImageIndex;
        }, this.duration);
      }
    },
    fetchModImages() {
      axios.get('/data/mods.json')
        .then(response => {
          const mods = response.data;
          this.images = Object.values(mods).reduce((acc, category) => acc.concat(category.map(mod => mod.imageUrl)), []);
          this.preloadImages();
          this.currentImageIndex = Math.floor(Math.random() * this.images.length);
        })
        .catch(error => {
          console.error('Error fetching mod images:', error);
        });
    }
  },
  mounted() {
    this.fetchModImages();
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
    justify-content: center;
    align-items: center;
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
  .button-container {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px; /* Adds space between the buttons */
  }
  .button-item {
    text-align: center;
  }
  .playmod-text, .makemod-text {
    font-family: 'Hot Mustard BTN Regular';
    font-size: 2rem;
    color: white;
    margin-bottom: 10px;
    animation: pulse 2s infinite;
  }
  .button-link {
    display: inline-block;
  }
  .button-image-mods, .button-image-make {
    width: 200px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  .button-image-mods:hover, .button-image-make:hover {
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
