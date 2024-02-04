
<template>
  <div class="centered-title" style="color: white; font-family: 'Hot Mustard BTN', Courier, monospace;">
    <u>Welcome to Doki Doki Modding Central!</u>
  </div>
  
  <!-- Abstract -->
  <div class="content-wrapper" style="margin-top: 0px; color: white; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 1.25em;">
    <p>This is the all-encompassing fan modification emporium for modifying <i>Doki Doki Literature Club!</i> by Team Salvato. This website hopes to facilitate a healthy repository of everything anyone would need from the normal player to the years-long modding veterans. Acting as an archive free of biased control measures, we hope to fulfill a thorough repertoire of all story creations anyone wished to contribute to this franchise.</p>
  </div>

  <div class="centered" style="color: white; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
    <p><b>NOTE: THIS SITE IS STILL IN A VERY ARCHAIC STATE, AND THERE IS NOT ACTUALLY ANYTHING TO DOWNLOAD YET. FEEL FREE TO TAKE A LOOK AROUND, THOUGH!</b></p>
  </div>
  
  <!-- Featured Releases Section -->
  <div class="section abstract-to-featured" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
    <div class="section-heading" style="color: white; margin-top: -10px; font-size: 2em; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
      <h2><b><i><u>Check out these headlines!</u></i></b></h2>
    </div>
    <div class="featured-releases-container">
      <div class="scroll-arrow left-arrow" @click="scrollLeft" style="z-index: 1">&#9664;</div>
      <div class="featured-releases">
        <img
          v-for="(release, index) in featuredReleases"
          :src="`/assets/mod_prevs/${release}.png`"
          :alt="release"
          class="featured-release"
          :key="index"
          :style="getReleaseStyle(index)"
        />
      </div>
      <div class="scroll-arrow right-arrow" @click="scrollRight" style="z-index: 1">&#9654;</div>
    </div>
  </div>

  
  <!-- Redirect Button Section -->
  <div class="section featured-to-redirect" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
    <div class="centered">
      <div class="redirect-buttons-container">
        <div class="redirect-button-wrapper">
          <a href="/mods" class="redirect-button">
            <img src="/assets/gui/redirect.png" alt="redirect" class="custom-redirect-button" />
          </a>
        </div>

        <div class="redirect-button-wrapper scaled-down-wrapper">
          <a href="/mods/archive" class="redirect-button scaled-down">
            <img src="/assets/gui/archive.png" alt="archive" class="custom-redirect-button scaled-down" />
          </a>
          <div class="scaled-down-text">
            <p style="color: white">Or...would you prefer our archive...?</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Form Submission Section -->
  <div class="section redirect-to-form" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
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

  
  <!-- Social Media Plug Section -->
  <div class="section form-to-social" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
    <h2 class="centered" style="font-size: 2em;"><b>Find us on these things!</b></h2>
    
    <!-- Display clickable images dynamically -->
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
      socialMediaImages: ['discord.png'], // Add more images as needed
      featuredReleases: ['s', 'm', 'y'], // Add more releases as needed
      currentReleaseIndex: 1,
    };
  },

    mounted() {
      // Get all the redirect buttons
      const redirectButtons = document.querySelectorAll('.redirect-button');

      // Add event listeners for hover on each redirect button
      redirectButtons.forEach(button => {
        button.addEventListener('mouseenter', this.playHoverSound);
      });
    },

    methods: {

      scrollLeft() {
      if (this.currentReleaseIndex > 0) {
        this.currentReleaseIndex--;
      } else {
        // Loop back to the last release when reaching the first one
        this.currentReleaseIndex = this.featuredReleases.length - 1;
        }
      },

      scrollRight() {
        if (this.currentReleaseIndex < this.featuredReleases.length - 1) {
          this.currentReleaseIndex++;
        } else {
          // Loop back to the first release when reaching the last one
          this.currentReleaseIndex = 0;
        }
      },

      getReleaseStyle(index) {
      const distance = Math.abs(index - this.currentReleaseIndex);
      const scaleFactor = Math.max(1 - distance * 0.2, 0.7); // Adjust the scale factor as needed

      // Apply a black tint to images that are not in focus
      const tintOpacity = distance > 0 ? 0.5 : 1;

      return {
        transform: `scale(${scaleFactor}) rotate(0deg)`,
        transition: 'transform 0.3s ease-in-out',
        filter: `opacity(${tintOpacity})`, // Apply opacity for tint effect
      };
    },

      getSocialMediaLink(image) {
        switch (image) {
          case 'discord.png':
            return 'https://discord.gg/nsXbEsCarF';
          default:
            return '#';
        }
      },
      playHoverSound(event) {
        // Play the hover sound on button hover
        const hoverSound = new Audio('/assets/sfx/hover.ogg');
        hoverSound.play();
      }
    }
  }
</script>

<style>

  body {
    overflow-x: hidden; /* Disable horizontal scrolling */
  }

  .centered-title {
    text-align: center;
    font-size: 3em;
    margin-top: 5vh;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Initial glow effect */
    animation: pulse 8s linear infinite; /* Apply pulsing animation */
  }

  @keyframes pulse {
    0% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Initial glow effect (white) */
    }
    20% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.8); /* Red glow effect */
    }
    40% {
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.8); /* Green glow effect */
    }
    60% {
      text-shadow: 0 0 10px rgba(255, 192, 203, 0.8); /* Pink glow effect */
    }
    80% {
      text-shadow: 0 0 10px rgba(148, 0, 211, 0.8); /* Purple glow effect */
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Return to initial glow effect (white) */
    }
  }

  /* Center the headers */
  .centered {
    text-align: center;
  }

  /* Additional styling for sections */
  .content-wrapper {
    max-width: 1200px; /* Widen the wrapper */
    margin: 0 auto;
    padding: 40px; /* Adjusted padding */
    /*border: 2px solid #ccc;*/
  }

  .section {
    margin-bottom: 30px; /* Separate sections better */
    padding: 20px;
    border: 10px solid #ffffff;
    border-radius: 5px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
    transform: perspective(1000px) rotateX(3deg); /* Apply perspective and rotation */
    transition: transform 0.3s ease-in-out;
    opacity: 0.95;
    animation: sectionGlow 8s linear infinite;
  }

  @keyframes sectionGlow {
    0% {
      border-color: rgba(255, 255, 255, 0.8); /* Initial glow effect (white) */
    }
    20% {
      border-color: rgba(255, 128, 128, 0.8); /* Red glow effect */
    }
    40% {
      border-color: rgba(116, 255, 116, 0.8); /* Green glow effect */
    }
    60% {
      border-color: rgba(255, 192, 203, 0.8); /* Pink glow effect */
    }
    80% {
      border-color: rgba(213, 114, 255, 0.8); /* Purple glow effect */
    }
    100% {
      border-color: rgba(255, 255, 255, 0.8); /* Return to initial glow effect (white) */
    }
  }

  /* Adjust transform on hover for a dynamic 3D effect */
  .section:hover {
    transform: perspective(1000px) rotateX(0deg); /* Reset rotation on hover */
  }

  .section strong {
    display: block;
    font-size: 1.2em; /* Adjust heading size */
    margin-bottom: 10px; /* Space below headings */
  }

  .section u {
    text-decoration: underline;
  }

  .section i {
    font-style: italic;
  }

  .section p {
    margin-bottom: 15px;
    line-height: 1.6; /* Improved line spacing for readability */
  }

  /* Style the ordered list */
  .content-wrapper ol {
    padding-left: 20px;
    margin-bottom: 15px; /* Space below ordered list */
  }

  .content-wrapper ol li {
    margin-bottom: 10px;
  }

  .featured-releases-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .featured-releases {
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
    transform: scale(1.05) rotate(0deg); /* Scale and rotate on hover */
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

  /* Re-enable pointer events only for the image inside the redirect button */
  .redirect-button img.custom-redirect-button {
    pointer-events: auto;
  }

  /* Apply hover effect to the image within the redirect button */
  .redirect-button img.custom-redirect-button:hover {
    opacity: 0.8;
    transform: scale(1.05) rotate(0deg);
  }

  /* New scaled-down button styling */
  .scaled-down {
    transform: scale(0.9); /* Scale down the button by 30% */
    margin-left: 0px; /* Adjust margin between buttons */
  }

  /* Adjust the size of the existing and new buttons */
  .redirect-button img.custom-redirect-button,
  .redirect-button.scaled-down img.custom-redirect-button {
    width: 500px; /* Maintain the width */
    height: auto; /* Maintain aspect ratio */
    border: auto; /* Remove border */
  }

  .redirect-buttons-container {
    display: flex; /* Use flexbox to arrange items horizontally */
    justify-content: center; /* Center items horizontally */
  }

  .redirect-button-wrapper {
    margin-right: 20px; /* Add space between buttons */
  }

  /* Remove margin for the last button to prevent extra space */
  .redirect-button-wrapper:last-child {
    margin-right: 0;
  }

  .scaled-down-text {
  text-align: center; /* Center-align the text */
  margin-top: 0px; /* Add space between the button and text */
  }

  .scaled-down-text p {
  font-style: italic; /* Apply italic style to the text */
  }

  /* Styles for the forms container and form wrappers */
  .forms-container {
    display: flex; /* Use flexbox to align forms horizontally */
    justify-content: space-around; /* Distribute space between forms */
    flex-wrap: wrap; /* Allow forms to wrap to the next line if needed */
    margin-top: 20px; /* Adjust spacing between forms and text */
  }

  .form-wrapper {
    width: calc(50% - 20px); /* Set width for each form wrapper (50% width with margin) */
    margin-bottom: 20px; /* Adjust spacing between forms vertically */
    box-sizing: border-box; /* Include padding and border in width calculation */
  }

  /* Update iframe width for responsiveness */
  .form-wrapper iframe {
    width: 100%;
  }

  /* Media query for smaller screens to make forms stack vertically */
  @media (max-width: 768px) {
    .form-wrapper {
      width: 100%; /* Set full width for smaller screens */
    }
  }

  .social-media-images {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .social-media-image {
    width: 50px; /* Adjust the width as needed */
    height: auto;
    margin: 0 10px; /* Adjust the spacing between images */
    cursor: pointer; /* Change cursor to pointer on hover for better UX */
    transition: opacity 0.3s ease-in-out;
  }

  .social-media-image:hover {
    opacity: 0.8; /* Add a slight opacity effect on hover */
  }

  /* Additional styling for section separation with black borders */
  .abstract-to-featured {
    background-color: rgba(255, 100, 100, 0.6); /* Light red */
    border-top: 50px solid black; /* Add black borders between sections */
    margin-top: 30px; /* Adjust margin for spacing */
    padding-top: 30px; /* Adjust padding for spacing */
  }
  .featured-to-redirect {
    background-color: rgba(148, 0, 211, 0.6); /* Violet */
    border-top: 50px solid black; /* Add black borders between sections */
    margin-top: 30px; /* Adjust margin for spacing */
    padding-top: 30px; /* Adjust padding for spacing */
  }
  .redirect-to-form {
    background-color: rgba(0, 201, 87, 0.6); /* Emerald green */
    border-top: 50px solid black; /* Add black borders between sections */
    margin-top: 30px; /* Adjust margin for spacing */
    padding-top: 30px; /* Adjust padding for spacing */
  }
  .form-to-social {
    background-color: rgba(255, 192, 203, 0.6); /* Pink */
    border-top: 50px solid black; /* Add black borders between sections */
    margin-top: 30px; /* Adjust margin for spacing */
    padding-top: 30px; /* Adjust padding for spacing */
    
  }

  /* Adjust the top margin for the first section to match the added border */
  .content-wrapper {
    margin-top: 80px; /* Updated top margin */
  }

</style>