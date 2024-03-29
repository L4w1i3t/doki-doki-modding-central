
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
  },
  methods: {
    playHoverSound(event) {
      const hoverSound = new Audio('/assets/sfx/hover.wav');
      hoverSound.play();
    }
  }
}
</script>

<style>
.container, {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 10vh;
  padding: 0;
}

.container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 0vh;
  padding: 0;
}

.standard-container, .android-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1%;
}

.mod-button-standard, .mod-button-android {
  max-width: 300px; 
  width: 80%; 
  height: auto;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mod-button-standard:hover, .mod-button-android:hover {
  opacity: 0.8;
  transform: scale(1.05) rotate(0deg);
}

.button-image {
  width: 100%;
  height: auto;
}

.button-label {
  margin-top: 1rem; 
  margin-bottom: 5vh; 
  text-align: center;
  font-style: italic;
  font-size: 2rem; 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  -webkit-text-stroke: 1px black;
  pointer-events: none;
}

@media (max-width: 768px) {
  .mod-button-standard, .mod-button-android {
    width: 90%; 
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .mod-button-standard, .mod-button-android {
    width: 70%; 
  }
}

@media (min-width: 1025px) {
  .mod-button-standard, .mod-button-android {
    width: 50%; 
  }
}

</style>
