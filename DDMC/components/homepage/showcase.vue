<template>
  <header class="header" :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
    <div class="content-container">
      <p class="showcase-text">Discover something new!</p>
      <div class="slideshow-container">
        <div class="slideshow">
          <img v-for="(mod, index) in visibleMods" :key="mod.id" :src="mod.imageUrl" :alt="mod.title" class="slide-img"/>
          <img v-for="(mod, index) in visibleMods" :key="'duplicate-' + mod.id" :src="mod.imageUrl" :alt="mod.title" class="slide-img"/>
        </div>
      </div>
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
      mods: {},
      visibleMods: [],
      modInterval: null,
      modDuration: 3000
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
      const categories = Object.keys(this.mods);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const categoryMods = this.mods[randomCategory];
      const randomMod = categoryMods[Math.floor(Math.random() * categoryMods.length)];
      const prefix = `/mods/${randomCategory}/`;

      window.location.href = prefix + randomMod.route;
    },
    fetchMods() {
      fetch('/data/mods.json')
        .then(response => response.json())
        .then(data => {
          this.mods = data;
          this.setupSlideshow();
        })
        .catch(error => console.error('Error loading the mods data:', error));
    },
    setupSlideshow() {
      const allMods = Object.values(this.mods).flat();
      this.shuffleMods(allMods);
      this.visibleMods = allMods.slice(0, 10);  // We need enough images to create a seamless loop
    },
    shuffleMods(mods) {
      for (let i = mods.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mods[i], mods[j]] = [mods[j], mods[i]];
      }
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

  .slideshow-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 30vh;
    position: relative;
  }

  .slideshow {
    display: flex;
    align-items: center;
    position: absolute;
    white-space: nowrap;
    animation: scroll 20s linear infinite;
  }

  .slide-img {
    width: 20%;
    height: auto;
    flex-shrink: 0;
  }

  .lucky-button {
    padding: 10px 20px;
    background: linear-gradient(45deg, #ff6347, #ff4500);
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    align-self: flex-start;
    margin: 0 0 10px 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, background 0.2s;
    animation: pulse 1.5s infinite;
  }

  .lucky-button:hover {
    background: linear-gradient(45deg, #ff4500, #ff6347);
    transform: scale(1.05);
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
  0% { box-shadow: 0 0 10px rgba(255, 99, 71, 0.8); }
  50% { box-shadow: 0 0 20px rgba(255, 69, 0, 1); }
  100% { box-shadow: 0 0 10px rgba(255, 99, 71, 0.8); }
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
