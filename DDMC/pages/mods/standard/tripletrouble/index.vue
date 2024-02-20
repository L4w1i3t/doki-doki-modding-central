<template>
  <div class="download-page">
    <div class="thumbnail-container">
      <img src="/assets/mod_prevs/DDTT.webp" alt="Software Thumbnail">
      <div class="author-names">
        <p>Author(s): JayQilin</p>
      </div>
      <div class="contributors">
        <p>Contributors: Tune Eternal</p>
      </div>
    </div>
    <div class="description">
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut gravida justo. Nullam ut dolor vitae ex lacinia finibus. Mauris sodales libero id ligula tempor bibendum.</p>
    </div>
    <div class="download-links">
      <h2>Download</h2>
      <ul>
        <li><a href="#">Version 1.0</a></li>
        <li><a href="#">Version 2.0</a></li>
        <!-- Add more versions as needed -->
      </ul>
    </div>
  </div>
</template>

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
}

.thumbnail-container {
  margin-top: 160px;
  position: relative;
}

.thumbnail-container img {
  width: 200px; /* Adjust the width as needed */
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
}

.author-names,
.contributors {
  margin-bottom: 10px;
}

.download-links {
  text-align: center;
}

.download-links ul {
  list-style-type: none;
  padding: 0;
}

.download-links ul li {
  margin-bottom: 10px;
}
</style>
