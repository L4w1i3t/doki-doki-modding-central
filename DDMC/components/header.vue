<template>
  <header class="header" :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
    <nav>
      <div class="logo-container">
        <img src="/assets/images/logo.webp" alt="Site Logo" class="logo-main" />
        <p class="header-text">
          DOKI DOKI <br/> MODDING CENTRAL
        </p>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/assets/images/club.webp",
        "/assets/images/class.webp",
        "/assets/images/corridor.webp",
      ],
      currentImageIndex: 0,
      interval: null,
      duration: 5000,
    };
  },
  computed: {
    currentImageUrl() {
      return this.images[this.currentImageIndex];
    },
  },
  methods: {
    startImageTransition() {
      this.interval = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, this.duration);
    },
  },
  mounted() {
    this.startImageTransition();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>

@font-face {
    font-family: 'Hot Mustard BTN Regular';
    src: url('/assets/fonts/HotMustardBTNRegular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .header {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-image 2s ease-in-out;
  }

  .logo-container {
    text-align: center;
  }

  .logo-main {
    max-width: 80%; /* Adjust based on your design needs */
    height: auto;
    margin: 0 auto;
  }

  .header-text {
    font-size: 3em;
    font-family: 'Hot Mustard BTN Regular', monospace;
    color: white; /* Adjust text color for visibility */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin: 20px 0; /* Adjust spacing */
  }
</style>
