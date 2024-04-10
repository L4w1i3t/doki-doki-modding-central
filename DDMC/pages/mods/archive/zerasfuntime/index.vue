
<template>
  <title>Zeras Fun Time</title>
  <div>
    <div class="preview-image">
      <img src="/assets/mod_prevs/zerasfuntime.webp" alt="Preview Image">
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
      title: 'Zeras Fun Time a.k.a. The Dumb Stupid Mod',
      authors: 'Mr. ZeraTheMant',
      contributors: 'Submitted By: Tune Eternal, Mr. ZeraTheMant',
      description: 'Zeras Fun Time is a skit-based OCW parody mod with meta humor based around Mr. ZeraTheMant and his friends, mostly for the purposes of entertaining Zera and his friends, and anyone who was a fan of OCW.',
      description2: 'This modification contains materials that are copyrighted by other artists in certain regions of the world, and may cause certain individuals to experience conflictions with copyright content identification when recording footage. Please proceed with caution if this applies to you. Contains musical elements that can be claimed by ContentID from various sources.',
      links: [
        {
          text: 'Version 1.1.1',
          url: 'https://www.mediafire.com/file_premium/8pm2vopue0jfxmx/Zera_Fun_Time_aka_The_Dumb_Stupid_Mod_1.1.5.zip/file'
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