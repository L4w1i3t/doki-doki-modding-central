
<template>
  <div class="container">
    <div class="standard-container">
      <a href="/mods/standard" class="mod-button-standard" @mouseenter="playHoverSound">
        <img src="/assets/gui/penguin.webp" alt="Standard Mod" class="button-image" />
      </a>
      <p class="button-label">Mods for PC (Windows, Mac, Linux)</p>
    </div>
    <div class="android-container">
      <a href="/mods/android" class="mod-button-android" @mouseenter="playHoverSound">
        <img src="/assets/gui/android.webp" alt="Android Mod" class="button-image" />
      </a>
      <p class="button-label">Mods for Android</p>
    </div>
  </div>
  <div class="container2">
    <div class="standard-container">
      <a href="/mods/archive" class="mod-button-standard" @mouseenter="playHoverSound">
        <img src="/assets/gui/modarchive.webp" alt="Standard Mod" class="button-image" />
      </a>
      <p class="button-label">Mod Archive</p>
      </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      // No need to add event listeners here since we're using Vue's event handling
    },
    methods: {
      playHoverSound(event) {
        // Play the hover sound on button hover
        const hoverSound = new Audio('/assets/sfx/hover.wav');
        hoverSound.play();
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 0;
  }
  .container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: -100px;
    padding: 0;
  }

  .standard-container,
  .android-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px; /* Adjust spacing between containers */
  }

  .mod-button-standard,
  .mod-button-android {
    width: 400px;
    height: auto;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mod-button-standard:hover,
  .mod-button-android:hover {
    opacity: 0.8;
    transform: scale(1.05) rotate(0deg);
  }

  .button-image {
    width: 100%;
    height: auto;
  }

  .button-label {
    margin-top: 10px;
    margin-bottom: 150px;
    text-align: center;
    font-style: italic;
    font-size: 1.8em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
    -webkit-text-stroke: 1px black; /* For WebKit-based browsers (Chrome, Safari) */
    pointer-events: none; /* Prevent clicking on the label */
  }
</style>
