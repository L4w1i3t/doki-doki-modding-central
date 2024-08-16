<template>
  <title>Assets - Code || Doki Doki Modding Central</title>
  <div class="title-container">Want some code?</div>
  <div class="code-grid">
    <div v-for="item in code" :key="item.id" class="code-card">
      <h3>{{ item.name }}</h3>
      <p>Author: {{ item.author }}</p>
      <p>Type: {{ item.type }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        code: []
      }
    },
    created() {
      axios.get('/data/code.json').then(response => {
        this.code = response.data.code;
      }).catch(error => console.error('Error fetching code:', error));
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

  .code-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 5vh;
  }

  .code-card {
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

  .code-card:hover {
    opacity: 0.8;
    transform: scale(1.05) rotate(0deg);
  }

  .code-card h3 {
    color: white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2vw;
  }

  .code-card p {
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5vw;
    margin: 8px 0;
  }
</style>
