<template>
    <header class="header" :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
      <div class="image-overlay"></div>
      <nav>
          <p class="socials-text">
            Connect with <br/>us more!
          </p>
          
          <a :href="redditLink" target="_blank">
            <img src="/assets/gui/reddit.webp" class="reddit-sprite" alt="Reddit" @mouseenter="playHoverSound">
          </a>
          <a :href="discordLink" target="_blank">
            <img src="/assets/gui/discord.webp" class="discord-sprite" alt="Discord" @mouseenter="playHoverSound">
          </a>
          <a :href="evilRedditLink" target="_blank">
            <img src="/assets/gui/evilreddit.webp" class="evil-reddit-sprite" alt="Circlejerk" @mouseenter="playHoverSound">
          </a>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "/assets/gui/10.webp",
          "/assets/gui/11.webp",
          "/assets/gui/12.webp",
          "/assets/gui/13.webp",
        ],
        preloadedImages: [],
        currentImageIndex: 0,
        interval: null,
        duration: 5000,
        redditLink: 'https://www.reddit.com/r/DDMC/',
        discordLink: 'https://discord.gg/HZKb8EQu9a',
        evilRedditLink: 'https://www.reddit.com/r/a:t5_1x7m5e/',
      };
    },
    computed: {
      currentImageUrl() {
        return this.images[this.currentImageIndex];
      },
    },
    methods: {
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
          height: 100vh;
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
  
        .socials-text {
          font-size: 5vw;
          font-family: 'Hot Mustard BTN Regular', monospace;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          top: 10%;
          left: 10%;
          text-align: center;
          transform: rotate(0deg);
          animation: pulse 8s linear infinite;
          position: relative;
          z-index: 4;
        }
  
        .reddit-sprite {
          position: absolute;
          left: 27%;
          bottom: 37%;
          width: 10vw;
          height: auto;
          z-index: 5;
          transition: transform 0.3s ease-in-out;
        }
        .discord-sprite {
          position: absolute;
          left: 8%;
          bottom: 40%;
          width: 10vw;
          height: auto;
          z-index: 6;
          transition: transform 0.3s ease-in-out;
        }
        .evil-reddit-sprite {
          position: absolute;
          left: 0%;
          bottom: 0px;
          width: 3vw;
          height: auto;
          z-index: 7;
          transition: transform 0.3s ease-in-out;
        }

        .reddit-sprite:hover, .discord-sprite:hover, .evil-reddit-sprite:hover {
            opacity: 0.8;
            transform: scale(1.05) rotate(0deg);
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