
<template>
  <div class="centered-title" style="color: white; font-family: 'Hot Mustard BTN Regular', monospace;">
    <u>Welcome to Doki Doki Modding Central!</u>
  </div>
  
  <div class="content-wrapper" style="margin-top: -20px; margin-bottom: -40px; color: white; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 1.5em;">
    <p><i>This is the all-encompassing fan modification emporium for modifying <i>Doki Doki Literature Club!</i> by Team Salvato. This website hopes to facilitate a healthy repository of everything anyone would need from the normal player to the years-long modding veterans. Acting as an archive free of biased control measures, we hope to fulfill a thorough repertoire of all story creations anyone wished to contribute to this franchise.</i></p>
    <p style="color: red;"><i>NOTE: THIS SITE IS STILL IN AN ARCHAIC STATE, AND IT WILL CONTAIN SOME TECHNICAL ISSUES. PLEASE KNOW THAT IT IS CONSTANTLY BEING WORKED ON AND LOOKED AT.</i></p>
  </div>
  
  <div class="section abstract-to-featured">
    <div class="section-heading" style="color: white; margin-top: -20px; font-size: 3em;">
      <h2><b><i><u>Check out these headlines!</u></i></b></h2>
    </div>
    <div class="featured-releases-container">
      <div class="scroll-arrow left-arrow" @click="scrollLeft" style="z-index: 1">&#9664;</div>
      <div class="featured-releases">
        <img
          v-for="(release, index) in featuredReleases"
          :src="`/assets/mod_prevs/${release}.webp`"
          :alt="release"
          class="featured-release"
          :key="index"
          :style="getReleaseStyle(index)"
        />
      </div>
      <div class="scroll-arrow right-arrow" @click="scrollRight" style="z-index: 1">&#9654;</div>
    </div>
  </div>

  
  <div class="section featured-to-redirect">
    <div class="centered">
      <div class="redirect-buttons-container">
        <div class="redirect-button-wrapper">
          <a href="/mods" class="redirect-button">
            <img src="/assets/gui/redirect.webp" alt="redirect" class="custom-redirect-button" />
          </a>
        </div>
      </div>
    </div>

    <div class="decoration-images">
      <img src="/assets/gui/say.webp" alt="say" class="decoration-image-say" />
      <img src="/assets/gui/yurk.webp" alt="yurk" class="decoration-image-yurk" />
      <img src="/assets/gui/mon.webp" alt="mon" class="decoration-image-mon" />
      <img src="/assets/gui/nat.webp" alt="nat" class="decoration-image-nat" />
    </div>
  </div>

  <!-- Forms
  <div class="section redirect-to-form">
    <h2 class="centered" style="font-size: 2em;"><b><i>Want to join the club and post your own content here? You can do so by filling out a submission form here!</i></b></h2>
    
    <div class="forms-container">
      <div class="form-wrapper">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_mDQ2JrDbzTAZQ46YtWv2Ep0QdmMem44_bW7z6aknwHiiDg/viewform?embedded=true" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0" style="margin-top: 20px; overflow: hidden">Loading...</iframe>
      </div>
      
      <div class="form-wrapper">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeHSCkIOt4VD7-bN6VTwdbJFJRdEoe9wNx4lXO1YDkhgp_TNw/viewform?embedded=true" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0" style="margin-top: 20px; overflow: hidden">Loading...</iframe>
      </div>
    </div>
  </div>
  -->

  
  <div class="section form-to-social">
    <h2 class="centered" style="font-size: 2em; margin-top: -10px;"><b>Find us on these things!</b></h2>
    <div class="social-media-images">
      <a v-for="(image, index) in socialMediaImages" :href="getSocialMediaLink(image)" :key="index" target="_blank" rel="noopener noreferrer">
        <img :src="`/assets/gui/${image}`" :alt="image" class="social-media-image" />
      </a>
    </div>
  </div>
</template>

<script>
  
  export default {
    layout: 'default',

    data() {
      return {
        socialMediaImages: ['discord.webp', 'reddit.webp', 'evilreddit.webp'],
        featuredReleases: ['salvationremake', 'ocw', 'exitspoof'],
        currentReleaseIndex: 1,
      };
    },

    mounted() {
      const redirectButtons = document.querySelectorAll('.redirect-button');
      redirectButtons.forEach(button => {
        button.addEventListener('mouseenter', this.playHoverSound);
      });
    },
    beforeDestroy() {
      const redirectButtons = document.querySelectorAll('.redirect-button');
      redirectButtons.forEach(button => {
        button.removeEventListener('mouseenter', this.playHoverSound);
      });
    },

    methods: {

      scrollLeft() {
      if (this.currentReleaseIndex > 0) {
        this.currentReleaseIndex--;
      } else {
        this.currentReleaseIndex = this.featuredReleases.length - 1;
        }
      },

      scrollRight() {
        if (this.currentReleaseIndex < this.featuredReleases.length - 1) {
          this.currentReleaseIndex++;
        } else {
          this.currentReleaseIndex = 0;
        }
      },

      getReleaseStyle(index) {
      const distance = Math.abs(index - this.currentReleaseIndex);
      const scaleFactor = Math.max(1 - distance * 0.2, 0.7);
      const tintOpacity = distance > 0 ? 0.5 : 1;

      return {
        transform: `scale(${scaleFactor}) rotate(0deg)`,
        transition: 'transform 0.3s ease-in-out',
        filter: `opacity(${tintOpacity})`,
      };
    },

      getSocialMediaLink(image) {
        switch (image) {
          case 'discord.webp':
            return 'https://discord.gg/HZKb8EQu9a';
          case 'reddit.webp':
            return 'https://www.reddit.com/r/DDMC/'
          case 'evilreddit.webp':
            return 'https://www.reddit.com/r/a:t5_1x7m5e/'
          default:
            return '#';
        }
      },

      getReleaseLink(release) {
        switch (release) {
          //outdated
        }
      },
      playHoverSound(event) {
        const hoverSound = new Audio('/assets/sfx/hover.wav');
        hoverSound.play();
      }
    }
  }
</script>

<style>

  body {
    overflow-x: hidden;
  }

  .centered-title {
    text-align: center;
    font-size: 4em;
    margin-top: 5vh;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    animation: pulse 8s linear infinite;
  }

  @keyframes pulse {
    0% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }
    20% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
    }
    40% {
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    }
    60% {
      text-shadow: 0 0 10px rgba(255, 192, 203, 0.8);
    }
    80% {
      text-shadow: 0 0 10px rgba(148, 0, 211, 0.8);
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }
  }

  .centered {
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
  }

  .section {
    margin-bottom: 30px;
    padding: 20px;
    border: 10px solid #ffffff;
    border-radius: 5px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transform: perspective(1000px) rotateX(3deg);
    transition: transform 0.3s ease-in-out;
    opacity: 0.95;
    animation: sectionGlow 8s linear infinite;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  @keyframes sectionGlow {
    0% {
      border-color: rgba(255, 255, 255, 0.8);
    }
    20% {
      border-color: rgba(255, 128, 128, 0.8);
    }
    40% {
      border-color: rgba(116, 255, 116, 0.8);
    }
    60% {
      border-color: rgba(255, 192, 203, 0.8);
    }
    80% {
      border-color: rgba(213, 114, 255, 0.8);
    }
    100% {
      border-color: rgba(255, 255, 255, 0.8);
    }
  }

  .section:hover {
    transform: perspective(1000px) rotateX(0deg);
  }

  .section strong {
    display: block;
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .section u {
    text-decoration: underline;
  }

  .section i {
    font-style: italic;
  }

  .section p {
    margin-bottom: 15px;
    line-height: 1.6;
  }

  .content-wrapper ol {
    padding-left: 20px;
    margin-bottom: 15px;
  }

  .content-wrapper ol li {
    margin-bottom: 10px;
  }

  .featured-releases-container {
    margin: auto;
    position: relative;
    display: block;
    align-items: center;
  }

  .featured-releases {
    margin: auto;
    display: flex;
    overflow: hidden;
  }

  .featured-release {
    width: 33.33%;
    height: 33.33%;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;
  }

  .scroll-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2em;
    cursor: pointer;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 50%;
    user-select: none;
  }

  .left-arrow {
    left: 10px;
  }

  .right-arrow {
    right: 10px;
  }

  .featured-release:hover {
    transform: scale(1.05) rotate(0deg);
  }

  .redirect-button {
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto;
  }

  .custom-redirect-button {
    width: 500px; 
    height: auto;
    border: auto;
    transition: transform 0.3s ease-in-out;
  }

  .redirect-button img.custom-redirect-button {
    pointer-events: auto;
  }

  .redirect-button img.custom-redirect-button:hover {
    opacity: 0.8;
    transform: scale(1.05) rotate(0deg);
  }

  .redirect-button img.custom-redirect-button,
  .redirect-button.scaled-down img.custom-redirect-button {
    width: 500px;
    height: auto;
    border: auto;
  }

  .redirect-buttons-container {
    display: flex;
    justify-content: center;
  }

  .redirect-button-wrapper:last-child {
    margin-right: 0;
  }

  .decoration-images {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }


  .decoration-image-say {
    height: auto;
    margin: 0 10px;
    max-width: 100px;
  }

  .decoration-image-yurk {
    height: auto;
    margin: 0 10px;
    max-width: 100px;
  }

  .decoration-image-nat {
    height: auto;
    margin: 0 10px;
    max-width: 115px;
  }

  .decoration-image-mon {
    height: auto;
    margin: 0 10px;
    max-width: 100px;
  }

  .forms-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .form-wrapper {
    width: calc(50% - 20px);
    margin-bottom: 20px;
    box-sizing: border-box;
  }

  .form-wrapper iframe {
    width: 100%;
  }

  @media (max-width: 768px) {
    .form-wrapper {
      width: 100%;
    }
  }

  .social-media-images {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .social-media-image {
    width: 50px;
    height: auto;
    margin: 0 10px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
  }

  .social-media-image:hover {
    opacity: 0.8;
  }

  .abstract-to-featured {
    background-color: rgba(255, 100, 100, 0.6);
    border-top: 50px solid black;
    margin-top: 30px;
    padding-top: 30px;
  }
  .featured-to-redirect {
    background-color: rgba(148, 0, 211, 0.6);
    border-top: 50px solid black;
    margin-top: 30px;
    padding-top: 30px;
  }
  .redirect-to-form {
    background-color: rgba(0, 201, 87, 0.6);
    border-top: 50px solid black;
    margin-top: 30px;
    padding-top: 30px;
  }
  .form-to-social {
    background-color: rgba(255, 192, 203, 0.6);
    border-top: 50px solid black;
    margin-top: 30px;
    padding-top: 30px;
    
  }

  .content-wrapper {
    margin-top: 80px;
  }

</style>