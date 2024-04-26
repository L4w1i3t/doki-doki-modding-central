<template>
  <header class="header" :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
    <div class="content-container">
      <p class="showcase-text">
        Discover something new!
      </p>
      <button class="lucky-button" @click="randomRedirect">I'm Feeling Lucky</button>
    </div>
  </header>
  <div class="pink-divider"></div>
</template>


<script>
export default {
  data() {
    return {
      images: ["/assets/gui/back2.webp"],
      preloadedImages: [],
      currentImageIndex: 0,
      interval: null,
      duration: 5000,
      mods: []
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
      // First select a random category
      const categories = Object.keys(this.mods);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const categoryMods = this.mods[randomCategory];

      // Select a random mod from the chosen category
      const randomMod = categoryMods[Math.floor(Math.random() * categoryMods.length)];
      const prefix = `/mods/${randomCategory}/`;

      window.location.href = prefix + randomMod.route;
    },
    fetchMods() {
      fetch('/data/mods.json')
        .then(response => response.json())
        .then(data => {
          this.mods = data;
        })
        .catch(error => console.error('Error loading the mods data:', error));
    }
  },
  mounted() {
    this.preloadImages();
    this.startImageTransition();
    this.fetchMods();
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
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .content-container {
    width: 100%;
    display: flex;
    flex-direction: column; 
    height: 100%;
    justify-content: space-between; 
  }

  .lucky-button {
    padding: 10px;
    background-color: #ff6347;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    align-self: flex-start; 
    margin: 0 0 10px 10px; 
  }

  .showcase-text {
    font-size: 5vw;
    font-family: 'Hot Mustard BTN Regular', monospace;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
    position: relative;
    z-index: 4;
    margin-top: 10px;
    align-self: center; 
  }

  .pink-divider {
    height: 5vh;
    background-color: #d67ba8;
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
