<template>
  <header class="header" :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
    <div class="image-overlay"></div>
    <nav>
        <p class="header-text">
          DOKI DOKI <br/>MODDING CENTRAL
        </p>
        <p class="header-subtext-lememe">
          (Sayori ate the homepage)
        </p>
        <img src="/assets/gui/monika.webp" class="monika-sprite" alt="Monika">
        <img src="/assets/gui/sayori.webp" class="sayori-sprite" alt="Sayori">
        <img src="/assets/gui/yuri.webp" class="yuri-sprite" alt="Yuri">
        <img src="/assets/gui/natsuki.webp" class="natsuki-sprite" alt="Natsuki">
    </nav>
  </header>
  <div class="blue-divider">
  </div>
</template>

<script>
export default {
  data() {
    return {

      images: [
        "/assets/test_folder/club.png",
        "/assets/test_folder/class.png",
        "/assets/test_folder/closet.png",
        "/assets/test_folder/corridor.png",
        "/assets/test_folder/residential.png",
        "/assets/test_folder/kitchen.png",
        "/assets/test_folder/house.png",
        "/assets/test_folder/bedroom.png",
        "/assets/test_folder/sayori_bedroom.png",
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

      script: [

        {
          src: "assets/feelinglucky.js",
          body: true
        },
      ]     
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
  @font-face {
      font-family: 'Hot Mustard BTN Regular';
      src: url('/assets/fonts/HotMustardBTNRegular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  .resolution-warning {
      display: none;
      color: #fff;
      position: fixed;
      width: 100%;
      text-align: center;
      margin-top: 0px;
      font-size: 16px;
      z-index: 1000;
      top: 40%;
      left: 0;
    }
/* ------------------------------------------------------------------------------------------------------------------------------------------------- */
/*dedicated mobile view*/
    @media (max-width: 1023px) {
      .resolution-warning {
        display: block;
      }
      .header {
        display: flex;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        transition: background-image 2s ease-in-out;
        position: relative;
        justify-content: center;
        align-items: center;
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

      .header-text {
        font-size: 6vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Hot Mustard BTN Regular', monospace;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        text-align: center;
        animation: pulse 8s linear infinite;
        position: relative;
        z-index: 4;
      }

      .header-subtext-lememe {
        font-size: 2vh;
        display: flex;
        font-family: monospace;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        text-align: center;
        animation: pulse 8s linear infinite;
        position: relative;
        z-index: 5;
        align-items: center;
        justify-content: center;
      }

      .monika-sprite,
      .sayori-sprite,
      .yuri-sprite,
      .natsuki-sprite {
        display: none;
      }
    }
/* ------------------------------------------------------------------------------------------------------------------------------------------------- */
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
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 2;
      }

      .header-text {
        font-size: 5vw;
        font-family: 'Hot Mustard BTN Regular', monospace;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        top: 30%;
        text-align: center;
        transform: rotate(-15deg);
        animation: pulse 8s linear infinite;
        position: relative;
        z-index: 4;
      }

      .header-subtext-lememe {
        display: none;
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

      .blue-divider {
        height: 5vh;
        background-color: #5ca1cf;
        width: 100%;
      }


      /*This is the CSS for the I'm feeling Lucky Button.*/

      .luckybutton {
        background-color: #04AA6D;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
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