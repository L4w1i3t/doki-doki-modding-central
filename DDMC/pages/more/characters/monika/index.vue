<template>
  <div>
    <title>Characters: Monika || Doki Doki Modding Central</title>
    <div class="page-container">
      <div class="thumbnail-container">
        <img src="/assets/images/characters/m.png" alt="Monika Thumbnail" />
      </div>
      <div class="monika-label-text">MONIKA</div>
    </div>
    <div class="description-container">
      <div class="notebook-paper">
        <div class="quote">
          <h2>"Here's Monika's Writing Tip of the Day!
          Sometimes you'll find yourself facing a difficult decision...
          When that happens, don't forget to save your game!
          You never know when you might change your mind...
          Or when something unexpected may happen!
          Wait... is this tip even about writing?
          What am I even talking about?
          Ahaha...
          ...That's my advice for today!
          Thanks for listening!"
          </h2>
        </div>
        <div class="description">
          <p style="padding: 0 20px">Monika, the literature club president, is an intelligent and thoughtful girl 
            who excels in her studies and extracurricular activities. Her leadership is marked by a peculiar sense of 
            wisdom, as if she possesses an uncanny insight into the workings of the world around her. With an almost 
            preternatural ability to understand the thoughts and feelings of those she interacts with, she guides her 
            friends with a gentle yet inexplicably profound hand. Can you write the way into her heart? [TEMPORARY DESCRIPTION PROVIDED BY CHATGPT]</p>
        </div>
        <!--<div class="button-container">
          <a href="/path/to/sprites.zip" class="download-button">Download Sprites Here!</a>
        </div>
        -->
        <div class="button-container">
          <a class="download-button">Downloads Coming Soon!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@font-face {
    font-family: 'Monika Journal';
    src: url('/assets/fonts/m1.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4em;
}

.thumbnail-container {
  width: 80em;
  height: auto;
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

.thumbnail-container img {
  max-width: 100%;
  max-height: 100%;
}

.monika-label-text {
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  font-size: 5vw;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  position: relative;
  width: 100%;
}

.description-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
}

.notebook-paper {
  width: 70%;
  padding: 48px 20px 24px; /* Adjusted padding to align first line */
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(to bottom, transparent 87%, #eee 0%);
  background-size: 100% 24px;
  line-height: 24px; /* Set line height to match background lines */
  position: relative;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.notebook-paper:before {
  content: '';
  position: absolute;
  top: 0;
  left: 30px;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, rgba(0, 0, 255, 0.2) 100%, transparent 0);
}

.notebook-paper h2 {
  margin-top: 0;
  margin-bottom: 24px; /* Match line height */
  line-height: 24px; /* Set line height to match background lines */
}

.notebook-paper p {
  margin: 0;
  line-height: 24px; /* Set line height to match background lines */
}

.quote {
  padding: 0 20px;
  margin-bottom: 24px;
  line-height: 24px; /* Set line height to match background lines */
  font-family: 'Monika Journal', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2.5em;
}

.description {
  font-size: 1.3em;
  font-style: italic;
  margin-bottom: 24px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}

.download-button {
  background-color: #373737;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.5em;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

/*.download-button:hover {
  background-color: #0056b3;
}
  */
</style>
