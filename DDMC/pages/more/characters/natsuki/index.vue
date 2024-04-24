
<template>
    <title>Get out of here.</title>
    <div class="image-container">
    <img src="/assets/gui/haha.png" alt="haha">
  </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const sound = new Audio('/assets/sfx/mscare.ogg');
      sound.play();
    }
  }
  </script>
  
  <style>
  .image-container img {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover; 
  }
  </style>