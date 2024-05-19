
<template>
  <title>Hibernation Demo</title>
  <div>
    <div class="preview-image">
      <img src="/assets/mod_prevs/hibernation.webp" alt="Preview Image">
    </div>
    <div class="title-box">
      <h1>{{ title }}</h1>
      <p style="font-size: 0.5em;">{{ authors }}</p>
      <p style="font-size: 0.5em;">{{ contributors }}</p>
    </div>
    <div class="description">
      <p>{{ description }}</p>
    </div>
    <div class="description">
      <p>{{ description2 }}</p>
    </div>
    <div class="download-container">
      <img src="/assets/gui/dl.webp" alt="Download Icon">
      <div class="download-label">Download Here!</div>
    </div>
    <div class="download-links">
      <a v-for="(link, index) in links" :key="index" :href="link.url" target="_blank" download>{{ link.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hibernation',
      authors: 'By CraftedBrother05',
      contributors: 'Submitted By: Tune Eternal',
      description: 'In an intoxicated world, the dreams beyond are endless, and the eyes of the gods are dawning upon them. Filled with a lifetime of suffering, misconceptions, and traumas, the girls have to wade through their way with each excruciating day as you play through the heart-wrenching and true-to-life story. Immerse yourself, believe in ascension, and be ready for wonder as you descend...into the IRIS. (Based on the IRIS music project by DAGames.)',
      description2: 'This modification contains materials that are copyrighted by other artists in certain regions of the world, and may cause certain individuals to experience conflictions with copyright content identification when recording footage. Please proceed with caution if this applies to you. Contains covers of Iris music by DAGames.', 
      links: [ 
      {
        text: 'Download Demo',
        url: 'https://www.mediafire.com/file_premium/oigpbcc40mxztq0/DokiDokiHibernationDEMOEditionV1.0.zip/file'
      },
      ]
    }
  }
}
</script>

<style scoped>
.preview-image {
  width: 50%;
  height: auto;
  margin-bottom: 1%;
  margin-top: 9vh;
  margin-left: 25%;
  border: 10px solid rgb(255, 255, 255, 0.5);
  border-radius: 1.5%;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
}

.title-box {
  text-align: center;
  margin-bottom: 1%;
  margin-left: 20%;
  margin-right: 20%;
  color: #ffffff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2vw;
  font-style: italic;
  border: 10px solid rgb(255, 255, 255, 0.5);
  border-radius: 25%;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  background-color: rgb(0, 0, 0, 0.5);
}

.description {
  text-align: center;
  margin-bottom: 1%;
  margin-left: 2%;
  margin-right: 2%;
  color: #ffffff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2vw;
  border: 10px solid rgb(255, 255, 255, 0.5);
  border-radius: 0%;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  background-color: rgb(0, 0, 0, 0.5);
}

.download-label {
  text-align: center;
  margin-bottom: 1%;
  margin-left: 1%;
  margin-right: 2%;
  color: #ffffff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2vw;
  font-style: italic;
}

.download-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;
}

.download-container img {
  width: 4vw; /* Adjust size as needed */
  height: auto;
}

.download-links {
  display: flex;
  justify-content: center;
  margin-bottom: 1%;
  color: #ffffff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: italic;
  font-size: 1.5vw;
}

.download-links a {
  margin: 0 10px;
  padding: 10px;
  border: 5px solid #ccc;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  background-color: rgb(0, 0, 0, 0.5);
  color: #ffffff;
  animation: pulse 8s linear infinite;
}

.video {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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