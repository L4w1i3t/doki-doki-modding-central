
<template>
    <div class="background-image-container">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackgroundImage'
  }
  </script>
  
  <style>
  .background-image-container {
    background-image: url('/assets/gui/bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    background-color: transparent;
    background-attachment: fixed;
  }
  
  </style>
  