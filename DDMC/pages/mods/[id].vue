
<template>
    <head>
        <title>{{ Data[$route.params.id]["Title"] }} - DDMC</title>
    </head>
    <div class="download-page">
      <div class="thumbnail-container">
        <img v-bind:src="Data[$route.params.id][`Promo`]" class="stained-glass" alt="Software Thumbnail">
      </div>
      <div class="title-container">
        <p class="stained-glass">{{ Data[$route.params.id]["Title"] }}</p>
      </div>
      <div class="author-container">
        <div class="stained-glass">
          <div class="author-names">
            <p>Author(s): {{ Data[$route.params.id]["Author"] }}</p>
          </div>
          <div class="contributors">
            <p>Contributors: {{ Data[$route.params.id]["Contributor"] }}</p>
          </div>
        </div>
      </div>
      <div class="description">
        <p class="stained-glass"> {{ Data[$route.params.id]["Description"] }}</p>
      </div>
      <h2 style="text-align: center; margin-top: 20px; font-size: 2em;">DOWNLOAD HERE!</h2>
      <div class="download-links">
        <div class="stained-glass">
          <h3>Versions</h3>
          <hr>
          <ul>
            <li>
              <img src="/assets/gui/dl.webp" alt="Download Icon" style="width: 50px; height: 50px; margin-right: 10px;">
              <a v-bind:href="Data[$route.params.id][`Link`]" target="_blank">{{ Data[$route.params.id]["Title"] }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import Data from "./mod-db.json"
    console.log(Data)
  </script>  

  <script>
  export default {
    name: 'DownloadPage'
  }
  </script>
  
  <style scoped>
  .download-page {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background: rgba(0, 0, 0, 0.4);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  
  .thumbnail-container {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 100px;
    margin-left: 50px;
    transform: perspective(1000px) rotateX(3deg);
    transition: transform 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.4);
  }
  
  .thumbnail-container img {
    width: 720px;
    height: auto;
  }
  
  .title-container {
    position: absolute;
    top: 0;
    text-align: center;
    right: 0;
    width: 800px;
    margin-top: 100px;
    font-size: 5em;
    margin-right: 80px;
    animation: pulse 8s linear infinite;
    transform: perspective(1000px) rotateX(3deg);
    transition: transform 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.4);
  }
  
  .author-container {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 370px;
    font-size: 2em;
    margin-right: 80px;
    transform: perspective(1000px) rotateX(3deg);
    transition: transform 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.4);
    width: 800px;
  }
  
  .author-names {
    margin-bottom: 10px;
    text-align: center;
  }
  
  .contributors {
    margin-bottom: 10px;
    font-size: 0.45em;
    text-align: center;
  }
  
  .description {
    margin-top: 550px;
    margin-bottom: auto;
    text-align: center;
    width: 1600px;
    font-size: 1.8em;
    font-style: italic;
    margin-left: 50px;
    margin-right: 50px;
    transform: perspective(1000px) rotateX(3deg);
    transition: transform 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 15px;
  }
  
  .download-links {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 2em;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    transform: perspective(1000px) rotateX(3deg);
    transition: transform 0.3s ease-in-out;
    width: 60%;
  }
  
  .download-links ul {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }
  
  .download-links ul li {
    margin-bottom: 10px;
    display: inline-flex;
    align-items: center;
  }
  
  .stained-glass {
    border: 5px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
    animation: pulse 8s linear infinite;
  }
  
  .stained-glass img {
    width: 100%;
    height: auto;
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
  </style>
  