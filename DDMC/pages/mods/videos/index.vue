<template>
  <title>Mods - Videos || Doki Doki Modding Central</title>
  <div class="title-container">VIDEO-ONLY MODS</div>
  <div class="character-grid">
    <a v-for="mod in paginatedMods" :key="mod.id" :href="`/mods/videos/${mod.route}`" class="character-card">
      <img :src="mod.imageUrl" :alt="mod.title">
      <h3>{{ mod.title }}</h3>
      <p style="font-style: italic">By {{ mod.author }}</p>
    </a>
  </div>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        mods: [],
        currentPage: 1,
        itemsPerPage: 24
      };
    },
    computed: {
      // Calculate the mods to display on the current page
      paginatedMods() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.mods.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.mods.length / this.itemsPerPage);
      }
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage += 1;
          this.scrollToTop();
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage -= 1;
          this.scrollToTop();
        }
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    created() {
      axios.get('/data/mods.json').then(response => {
        this.mods = response.data.videos;
      }).catch(error => console.error('Error fetching mods:', error));
    }
  };
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
    margin-top: 5vh;
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
    background-color: #000;
  }

  .character-card:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  .character-card img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .character-card h3 {
    color: white;
    text-align: center;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2vw;
  }

  .character-card p {
    color: #ccc;
    font-size: 1.2vw;
    margin-top: 4px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .pagination button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.5vw;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .pagination button:disabled {
    background-color: #666;
    cursor: not-allowed;
  }

  .pagination span {
    margin: 0 20px;
    font-size: 1.5vw;
    color: white;
  }

  .pagination button:hover:not(:disabled) {
    background-color: #555;
  }
</style>
