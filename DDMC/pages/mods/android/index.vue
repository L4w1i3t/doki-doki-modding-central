<template>
  <div class="catalog">
    <div class="sort-dropdown">
      <select v-model="sortBy" @change="sortCatalog">
        <option value="default">Sort by...</option>
        <option value="default">Default</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <!-- Add more sorting options as needed -->
      </select>
      <!-- Submenus for Title and Author -->
      <div v-if="sortBy === 'title'">
        <input type="text" v-model="titleSearch" placeholder="Search by title..." @input="filterByTitle">
      </div>
      <div v-else-if="sortBy === 'author'">
        <input type="text" v-model="authorSearch" placeholder="Search by author..." @input="filterByAuthor">
      </div>
    </div>
    <div v-for="(item, index) in catalogItems" :key="index" class="catalog-item">
      <nuxt-link :to="'/mods/standard/' + item.route"> <!-- Assuming you have a route property for each item -->
        <div class="stained-glass">
          <img :src="item.imageUrl" alt="Catalog Image">
          <span class="label-text">{{ item.title }}</span>
          <span class="label-subtext">By {{ item.author }}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: 'default', // Default sorting option
      titleSearch: '', // Search query for title
      authorSearch: '', // Search query for author
      originalCatalogItems: [], // Store the original catalog items
      catalogItems: [] // Displayed catalog items
    };
  },
  created() {
    // Populate originalCatalogItems when the component is created
    this.originalCatalogItems = [
      {
        title: "Doki Doki Triple Trouble",
        author: "JayQilin",
        imageUrl: "/assets/mod_prevs/DDTT.webp",
        route: "tripletrouble"
      },
      // Add more items here if needed
    ];
    // Set catalogItems initially to display all items
    this.catalogItems = [...this.originalCatalogItems];
  },
  methods: {
    sortCatalog() {
      // Sorting logic
    },
    filterByTitle() {
      const query = this.titleSearch.toLowerCase();
      if (query === '') {
        // If the search query is empty, restore original catalog items
        this.catalogItems = [...this.originalCatalogItems];
      } else {
        // Filter catalog items by title
        this.catalogItems = this.originalCatalogItems.filter(item => item.title.toLowerCase().includes(query));
      }
    },
    filterByAuthor() {
      const query = this.authorSearch.toLowerCase();
      if (query === '') {
        // If the search query is empty, restore original catalog items
        this.catalogItems = [...this.originalCatalogItems];
      } else {
        // Filter catalog items by author
        this.catalogItems = this.originalCatalogItems.filter(item => item.author.toLowerCase().includes(query));
      }
    }
  }
};

</script>

<style scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center center;
  padding-top: 200px;
  padding-bottom: 100px;
  overflow: hidden; /* Hide overflowing text */
}

.catalog-item {
  display: flex; /* enables flexbox layout */
  justify-content: center; /* centers the image horizontally */
  align-items: center; /* centers the image vertically */
  transition: transform 0.3s ease-in-out;
}

.catalog-item:hover {
  transform: scale(1.05) rotate(0deg); /* Scale and rotate on hover */
}

.stained-glass {
  /* Apply stained glass border effect */
  border: 10px solid rgba(255, 255, 255, 0.5); /* Add a semi-transparent white border */
  border-radius: 15px; /* Add some border radius for a rounded effect */
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5); /* Add a soft glow effect */
}

.stained-glass img {
  width: 100%; /* Ensure the image fills the container */
  height: auto; /* Maintain aspect ratio */
}

.label-text {
  display: block;
  text-align: center;
  margin-top: 0px; /* Adjust as needed for spacing */
  font-size: 1.4em;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ffffff; /* Adjust color as needed */
  background-color: black; /* Add black background */
  padding: 5px 10px; /* Add padding to make the text more readable */
  overflow: hidden; /* Hide overflowing text */
}
.label-subtext {
  display: block;
  text-align: center;
  margin-top: 0px; /* Adjust as needed for spacing */
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ffffff; /* Adjust color as needed */
  background-color: black; /* Add black background */
  padding: 5px 10px; /* Add padding to make the text more readable */
  overflow: hidden; /* Hide overflowing text */
  font-style: italic;
}

.sort-dropdown {
  position: fixed;
  top: 60px;
  left: 0px;
  z-index: 9998;
}

/* Additional styling for the search input */
.sort-dropdown input[type="text"] {
  width: 100%;
  padding: 5px;
  margin-top: 0px;
  box-sizing: border-box;
  z-index: 9997;
}
</style>
