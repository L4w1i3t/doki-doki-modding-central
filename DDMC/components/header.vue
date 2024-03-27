
<template>
  <header class="header">
    <nav>
      <div class="logo-container">
        <img src="/assets/images/logo.webp" alt="Site Logo" class="logomain" />
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
      preloadedImages: [],
    };
  },
  methods: {
    preloadImages() {
      this.preloadedImages = this.images.map((src) => {
        const img = new Image();
        img.src = src;
        return img;
      });
    },
    startImageTransition() {
      this.interval = setInterval(this.changeBackgroundImage, this.duration);
    },
    changeBackgroundImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      const imageUrl = `url('${this.images[this.currentImageIndex]}')`;
      document.querySelector('.header').style.backgroundImage = imageUrl;
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
  .header {
    background-image: url('/assets/images/club.webp');
    background-size: cover;
    color: transparent;
    padding: 0px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-image 2s ease-in-out;
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logomain {
    max-width: 600px;
    width: 50vw;
    height: auto;
    padding: 0px;
    padding-top: 75px;
  }

  .header-text {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 200px;
    font-size: 3em;
    font-family: 'Hot Mustard BTN Regular', monospace;
    transform: skewY(-5deg);
    transform-origin: bottom;
    text-shadow: 20px 20px 40px rgba(0, 0, 0, 0.5);
    animation: colorCycle 12s infinite;
    white-space: nowrap;
  }

  @keyframes colorCycle {
    0% {
      color: rgb(255, 105, 105);
    }
    25% {
      color: rgb(120, 255, 120);
    }
    50% {
      color: rgb(129, 0, 129);
    }
    75% {
      color: rgb(255, 91, 178);
    }
    100% {
      color: rgb(255, 105, 105);
    }
  }
</style>
