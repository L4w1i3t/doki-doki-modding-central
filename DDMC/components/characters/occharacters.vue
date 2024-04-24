<template>
  <div class="title-container">ORIGINAL CHARACTERS</div>
    <div class="character-grid">
      <div v-for="character in characters" :key="character.id" class="character-card">
        <img :src="character.image" alt="character image">
        <h3>{{ character.name }}</h3>
      </div>
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
        this.characters = response.data.original;
      }).catch(error => console.error('Error fetching characters:', error));
    }
  }
</script>
  
  
<style scoped>
  .title-container {
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
    margin-top: 5vh;
    font-size: 5vw;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    position: relative;
    width: 100%;
  }

  .character-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Set four columns */
    gap: 16px;
    margin-top: 5vh
  }
  .character-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    padding: 8px;
    background: #333;
  }
  .character-card img {
    width: 100%;
  }
  .character-card h3 {
    color: white; /* Set the text color to white */
    text-align: center; /* Ensure the text is centered horizontally */
  }
</style>