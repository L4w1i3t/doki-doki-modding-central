
<template>
  <title>RenPy || Doki Doki Modding Central</title>
  <div>
    <div class="centered-title" style="font-family:'Hot Mustard BTN Regular', monospace; color: white; margin-top: 100px;">
      <h1>Need Help?</h1>
    </div>

    <div class="renpy-button redirect-button" @click="redirectToRenpyDocumentation" @mouseenter="playHoverSound">
      <img src="/assets/gui/renpydoc.webp" alt="Renpy Documentation" class="button-image-renpy" />
    </div>

    <div class="sprite-container">
      <img src="/assets/sprites/cutout.webp" alt="Character Sprite" class="character-sprite" />
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
      window.open('https://www.renpy.org/doc/html/index.html', '_blank');
    },
    playHoverSound() {
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
  margin-bottom: 5%;
}

.renpy-button:hover {
  opacity: 0.8;
  transform: scale(1.05) rotate(0deg);
}

.button-image-renpy {
  width: 50vh;
  height: auto;
}

body {
  overflow-x: hidden;
}

.centered-title {
  text-align: center;
  font-size: 3em;
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

.content-wrapper {
  margin-top: 80px;
}

.sprite-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  text-align: center;
  height: 100%;
  margin-left: 60%;
}

.character-sprite {
  width: 50vh;
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