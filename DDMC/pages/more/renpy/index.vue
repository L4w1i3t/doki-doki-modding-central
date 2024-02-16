
<template>
  <div>
    <div class="centered-title" style="font-family:'Hot Mustard BTN', Courier, monospace; color: white; margin-top: 100px;">
      <h1>Need Help?</h1>
    </div>

    <div class="renpy-button redirect-button" @click="redirectToRenpyDocumentation" @mouseenter="playHoverSound">
      <img src="/assets/gui/renpydoc.png" alt="Renpy Documentation" class="button-image" />
      <p class="button-label"></p>
    </div>

    <div class="sprite-container">
      <img src="/assets/sprites/cutout.png" alt="Character Sprite" class="character-sprite" />
      <div class="speech-bubble">
        <p class="speech-text">I'll also have some advanced tutorials here, so stay tuned for that!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToRenpyDocumentation() {
      // Open Renpy Documentation in a new tab
      window.open('https://www.renpy.org/doc/html/index.html', '_blank');
    },
    playHoverSound() {
      // Play the hover sound on button hover
      const hoverSound = new Audio('/assets/sfx/hover.wav');
      hoverSound.play();
    }
  }
}
</script>

<style>
  .renpy-button {
    width: 400px;
    height: auto;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;
    cursor: pointer;
  }

  .renpy-button:hover {
    opacity: 0.8;
    transform: scale(1.05) rotate(0deg);
  }

  .button-image {
    width: 100%;
    height: auto;
  }

  .button-label {
    margin-top: 10px;
    text-align: center;
    font-style: italic;
    font-size: 2em;
    color: white;
    -webkit-text-stroke: 1px black; /* For WebKit-based browsers (Chrome, Safari) */
  }

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

  /* Adjust the top margin for the first section to match the added border */
  .content-wrapper {
    margin-top: 80px; /* Updated top margin */
  }

  .sprite-container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    position: relative;
    margin: auto;
    text-align: center;
    height: 100%; /* Ensure the container takes full height */
    margin-left: 1200px;
  }

  .character-sprite {
    width: 500px; /* Adjust width as needed */
    height: auto;
  }

  .speech-bubble {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  .speech-text {
    margin: 0;
    font-size: 16px;
  }

</style>
