<template>
  <div>
    <title>Music Catalog || Doki Doki Modding Central</title>
    <div class="search-container">
      <input v-model="searchQuery" type="text" placeholder="Search by genre" class="genre-and-length-search" />
      <input v-model="lengthQuery" type="number" placeholder="Search by length" class="genre-and-length-search" />
    </div>
    <div class="music-catalog-container">
      <div v-for="item in filteredItems" :key="item.id" class="music-catalog-item">
        <div :style="getStainedGlassStyle(item.id)" class="music-stained-glass"></div>
        <p class="item-title">{{ item.name }}</p>
        <p class="item-author">{{ item.author }}</p>
        <p class="item-genre">{{ item.genre }}</p>
        <p class="item-length">{{ item.lengthNearestMinute }} min</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      lengthQuery: '',
      items: [],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        const matchesGenre = this.searchQuery ? item.genre.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
        const matchesLength = this.lengthQuery ? Math.abs(item.lengthNearestMinute - this.lengthQuery) <= 1 : true;
        return matchesGenre && matchesLength;
      });
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/data/music.json');
        this.items = response.data.music.map(item => ({
          id: item.id,
          name: item.name,
          author: item.author,
          genre: item.genre,
          lengthNearestMinute: item['length-nearest-minute']
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    getStainedGlassStyle(id) {
      const colors = Array.from({ length: 18 }, () => this.getRandomColor());
      return {
        background: `conic-gradient(${colors.join(', ')})`,
        backgroundSize: 'cover',
      };
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
}

.search-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.genre-and-length-search {
  margin: 100px 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.music-catalog-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.music-catalog-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  width: 200px;
}

.music-stained-glass {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.item-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.item-author {
  font-size: 1rem;
  color: #888;
  margin: 0.5rem 0;
}

.item-genre, .item-length {
  color: #666;
}
</style>
