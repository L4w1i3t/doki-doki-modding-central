<template>
  <div class="title-container">MAIN CAST</div>
  <div class="character-grid">
    <a v-for="character in characters" :key="character.id" :href="character.url" class="character-card">
      <img :src="character.image" :alt="character.name">
      <h3>{{ character.name }}</h3>
    </a>
  </div>
</template>

  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        characters: []
      }
    },
    created() {
      axios.get('/data/characters.json').then(response => {
        this.characters = response.data.main;
      }).catch(error => console.error('Error fetching characters:', error));
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

  .character-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 5vh
  }
  .character-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc;
    padding: 8px;
    background: rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease-in-out;
  }
  .character-card:hover {
    opacity: 0.8;
    transform: scale(1.05) rotate(0deg);
  }
  .character-card img {
    width: 100%;
  }
  .character-card h3 {
    color: white;
    text-align: center;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2vw;
  }
</style>