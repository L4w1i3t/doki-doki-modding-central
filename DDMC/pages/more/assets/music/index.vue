<template>
  <title>Assets - Music || Doki Doki Modding Central</title>
  <div class="title-container">MUSIC CATALOG</div>
  <div class="music-grid">
    <div v-for="track in music" :key="track.id" class="music-card">
      <h3>{{ track.name }}</h3>
      <p>Author: {{ track.author }}</p>
      <p>Genre: {{ track.genre }}</p>
      <p>Approximate Length: {{ track['length-nearest-minute'] }} min</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        music: []
      }
    },
    created() {
      axios.get('/data/music.json').then(response => {
        this.music = response.data.music;
      }).catch(error => console.error('Error fetching music:', error));
    }
  }
</script>

<style scoped>
  .title-container {
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: 'Hot Mustard BTN', 'Arial Narrow', Arial, sans-serif;
    color: white;
    margin-top: 10vh;
    font-size: 5vw;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    position: relative;
    width: 100%;
  }

  .music-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 5vh;
  }

  .music-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc;
    padding: 16px;
    background: rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease-in-out;
    text-align: center;
  }

  .music-card:hover {
    opacity: 0.8;
    transform: scale(1.05) rotate(0deg);
  }

  .music-card h3 {
    color: white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2vw;
  }

  .music-card p {
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5vw;
    margin: 8px 0;
  }
</style>
