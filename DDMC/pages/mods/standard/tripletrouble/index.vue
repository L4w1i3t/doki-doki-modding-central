
<template>
  <div class="download-page">
    <div class="thumbnail-container">
      <img src="/assets/mod_prevs/DDTT.webp" class="stained-glass" alt="Software Thumbnail">
    </div>
    <div class="title-container">
      <p class="stained-glass">DOKI DOKI TRIPLE TROUBLE</p>
    </div>
    <div class="author-container">
      <div class="stained-glass">
        <div class="author-names">
          <p>Author(s): JQilin Gaming</p>
        </div>
        <div class="contributors">
          <p>Contributors: JQilin Gaming, Tune Eternal, Amigo, Kennedy Productions, The JQ Crew, StormBlaze, Proxyl_, Polygonsexual</p>
        </div>
      </div>
    </div>
    <div class="description">
      <p class="stained-glass">Doki Doki Triple Trouble is the first ever 18+ RomCom that centers around everyone's favorite pink-haired heartbreaker: Natsuki! Follow MC's year long escapade to try to be the main man in Natsuki's life as he competes with a different man... and then a different man... and then a different man. An original story jam packed with action, drama, comedy, romance, an incredible original soundtrack, and enough NSFW to make your head spin! A DDLC mod that will make you laugh, cry, question life, and jam out while doing so. Will MC surrender his common sense to get with Natsuki or will he realize that it's not worth the trouble? Find out now in Doki Doki Triple Trouble!</p>
    </div>
    <h2 style="text-align: center; margin-top: 20px; font-size: 2em;">DOWNLOAD HERE!</h2>
    <div class="download-links">
      <div class="stained-glass">
        <h3>Versions</h3>
        <hr>
        <ul>
          <li>
            <img src="/assets/gui/dl.webp" alt="Download Icon" style="width: 50px; height: 50px; margin-right: 10px;">
            <a href="https://www.mediafire.com/file/2zm2e3fl3y5d9gw/DDTT-4.2.0-Renpy7Mod.zip/file" target="_blank">Doki Doki Triple Trouble 1.0 - Download (1.83gb)</a>
          </li>
        </ul>
      </div>
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
