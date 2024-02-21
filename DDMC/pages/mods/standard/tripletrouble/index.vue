<template>
  <div class="download-page">
    <div class="thumbnail-container">
      <img src="/assets/mod_prevs/DDTT.webp" alt="Software Thumbnail">
    </div>
    <div class="title-container">
      <p>DOKI DOKI TRIPLE TROUBLE</p>
    </div>
    <div class="author-container">
      <div class="author-names">
        <p>Author(s): JQilin Gaming</p>
      </div>
      <div class="contributors">
        <p>Contributors: JQilin Gaming, Tune Eternal, Amigo, Kennedy Productions, The JQ Crew, StormBlaze, Proxyl_, Polygonsexual</p>
      </div>
    </div>
    <div class="description">
      <p>Doki Doki Triple Trouble is the first ever 18+ RomCom that centers around everyone's favorite pink-haired heartbreaker: Natsuki! Follow MC's year long escapade to try to be the main man in Natsuki's life as he competes with a different man... and then a different man... and then a different man. An original story jam packed with action, drama, comedy, romance, an incredible original soundtrack, and enough NSFW to make your head spin! A DDLC mod that will make you laugh, cry, question life, and jam out while doing so. Will MC surrender his common sense to get with Natsuki or will he realize that it's not worth the trouble? Find out now in Doki Doki Triple Trouble!</p>
    </div>
    <h2 style = "text-align: center; margin-top: 20px; font-size: 2em;">DOWNLOAD HERE!</h2>
    <div class="download-links">
      <ul>
        <li><a href="#" target="_blank">- Version 1.0</a></li>
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
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.thumbnail-container {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 100px;
  margin-left: 50px;
}

.thumbnail-container img {
  width: 720px; /* Adjust the width as needed */
  height: auto;
}

.title-container {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 200px;
  font-size: 4em;
  margin-right: 80px;
  font-style: italic;
}

.author-container {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 400px;
  font-size: 2em;
  margin-right: 80px;
}

.author-names{
  margin-bottom: 10px;
}
.contributors {
  margin-bottom: 10px;
  font-size: 0.45em
}

.description {
  margin-top: 550px;
  margin-bottom: auto;
  text-align: center;
  font-size: 1.8em;
  font-style: italic;
  margin-left: 50px;
  margin-right: 50px;
}

.download-links {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 2em;
}

.download-links ul {
  list-style-type: none;
  padding: 0;
}

.download-links ul li {
  margin-bottom: 10px;
}
</style>
