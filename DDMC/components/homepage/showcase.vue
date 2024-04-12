<template>
    <header class="header" :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
      <div class="image-overlay"></div>
      <nav>
          <p class="showcase-text">
            Get a look at our <br/>showcase! <br/>[coming soon]
          </p>
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
        characterSprites: {
        monika: "/assets/test_folder/monika.png",
        sayori: "/assets/test_folder/sayori.png",
        yuri: "/assets/test_folder/yuri.png",
        natsuki: "/assets/test_folder/natsuki.png",
      },
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
  
      @media (max-width: 1023px) {
        .resolution-warning {
          display: block;
        }
        .header {
          display: none;
        }
      }
  
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
  
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          z-index: 2;
        }
  
        .showcase-text {
          font-size: 5vw;
          font-family: 'Hot Mustard BTN Regular', monospace;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          top: 0%;
          left: 50%;
          text-align: center;
          transform: rotate(0deg);
          animation: pulse 8s linear infinite;
          position: relative;
          z-index: 4;
        }
  
        .monika-sprite {
          position: absolute;
          right: 10%;
          bottom: 0px;
          width: 50vw;
          height: auto;
          z-index: 5;
        }
        .sayori-sprite {
          position: absolute;
          right: 5%;
          bottom: 0px;
          width: 50vw;
          height: auto;
          z-index: 6;
        }
        .yuri-sprite {
          position: absolute;
          right: -5%;
          bottom: 0px;
          width: 50vw;
          height: auto;
          z-index: 7;
        }
        .natsuki-sprite {
          position: absolute;
          right: -10%;
          bottom: 0px;
          width: 50vw;
          height: auto;
          z-index: 8;
        }
        .site-description {
          background-color: rgba(0, 0, 0, 0.7); /* Black background */
          border-radius: 20px;
          color: #fff;
          padding: 10px;
          font-size: 1.5vw;
          position: absolute;
          bottom: 2vh;
          left: 2vw;
          z-index: 3;
          max-width: 40%;
          text-align: center;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          animation: pulse 8s linear infinite;
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