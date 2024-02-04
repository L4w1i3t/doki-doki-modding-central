
<template>
  <div class="buttons-container" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
    <a href="/mods/standard" class="mod-button">
      <img src="/assets/gui/penguin.png" alt="Standard Mod" class="button-image" />
      <p class="button-label">Mods for PC (Windows, Mac, Linux)</p>
    </a>
    <a href="/mods/android" class="mod-button">
      <img src="/assets/gui/android.png" alt="Android Mod" class="button-image" />
      <p class="button-label">Mods for Android</p>
    </a>
  </div>
</template>

<script>
  export default {

    mounted() {
      // Get all the redirect buttons
      const redirectButtons = document.querySelectorAll('.mod-button');

      // Add event listeners for hover on each redirect button
      redirectButtons.forEach(button => {
        button.addEventListener('mouseenter', this.playHoverSound);
      });
    },

    methods: {
      playHoverSound(event) {
        // Play the hover sound on button hover
        const hoverSound = new Audio('/assets/sfx/hover.ogg');
        hoverSound.play();
      }
    }
  }
</script>

<style>
  .buttons-container {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 0px;
  }

  .mod-button {
    width: 400px;
    height: auto;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mod-button:hover {
    opacity: 0.8;
    transform: scale(1.05) rotate(0deg);
  }

  .button-image {
    width: 100%;
    height: auto;
  }

  .button-label {
    margin-top: 10px;
    margin-bottom: 152px;
    text-align: center;
    font-style: italic;
    font-size: 2em;
    color: white;
    -webkit-text-stroke: 1px black; /* For WebKit-based browsers (Chrome, Safari) */
  }
</style>
