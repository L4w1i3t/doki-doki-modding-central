
<template>
  <div>
    <div class="centered-title" style="font-family:'Hot Mustard BTN', Courier, monospace; color: white; margin-top: 100px;">
      <h1>Need Help?</h1>
    </div>

    <div class="renpy-button redirect-button" @click="redirectToRenpyDocumentation">
      <img src="/assets/gui/renpydoc.png" alt="Renpy Documentation" class="button-image" />
      <p class="button-label"></p>
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
  },
  mounted() {
    // Add event listener for hover on the redirect button
    const redirectButton = document.querySelector('.redirect-button');
    redirectButton.addEventListener('mouseenter', this.playHoverSound);
  }
}
</script>

<style>
.centered-title {
  text-align: center;
}

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
</style>
