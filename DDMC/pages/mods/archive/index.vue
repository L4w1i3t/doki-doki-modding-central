<template>
  <title>Mods - Standard || Doki Doki Modding Central</title>
  <div class="catalog">
    <div class="sort-dropdown">
      <select v-model="sortBy" @change="sortCatalog">
        <option value="default">Search by...</option>
        <option value="default">Default</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <div v-if="sortBy === 'title'">
        <input
          type="text"
          v-model="titleSearch"
          placeholder="Search by title..."
          @input="filterByTitle"
        />
      </div>
      <div v-else-if="sortBy === 'author'">
        <input
          type="text"
          v-model="authorSearch"
          placeholder="Search by author..."
          @input="filterByAuthor"
        />
      </div>
    </div>
    <div
      v-for="(item, index) in paginatedItems"
      :key="index"
      class="catalog-item"
    >
      <a :href="`/mods/archive/${item.route}`" rel="noopener noreferrer">
        <div class="stained-glass">
          <img :src="item.imageUrl" alt="Catalog Image" />
          <div class="label">
            <p>
              <span class="label-text">{{ item.title }}</span>
            </p>
            <span class="label-subtext">By {{ item.author }}</span>
          </div>
        </div>
      </a>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      sortBy: "default",
      titleSearch: "",
      authorSearch: "",
      originalCatalogItems: [],
      catalogItems: [],
      currentPage: 1,
      itemsPerPage: 18, // Default to desktop itemsPerPage
    };
  },
  computed: {
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.catalogItems.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.catalogItems.length / this.itemsPerPage);
    },
  },
  created() {
    this.fetchCatalogItems();
  },
  mounted() {
    this.handleResize(); // Set itemsPerPage on mount
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    async fetchCatalogItems() {
      try {
        const response = await axios.get("/data/mods.json");
        this.originalCatalogItems = response.data.archive;
        this.catalogItems = [...this.originalCatalogItems];
      } catch (error) {
        console.error("Failed to fetch catalog items:", error);
      }
    },
    handleResize() {
      // Adjust items per page based on screen width
      this.itemsPerPage = window.innerWidth <= 768 ? 10 : 18;
      this.currentPage = 1; // Reset to first page after resizing
    },
    sortCatalog() {
      // Dead
    },
    filterByTitle() {
      const query = this.titleSearch.toLowerCase();
      if (query === "") {
        this.catalogItems = [...this.originalCatalogItems];
      } else {
        this.catalogItems = this.originalCatalogItems.filter((item) =>
          item.title.toLowerCase().includes(query)
        );
      }
      this.currentPage = 1; // Reset to first page after filtering
      this.scrollToTop(); // Scroll to top after filtering
    },
    filterByAuthor() {
      const query = this.authorSearch.toLowerCase();
      if (query === "") {
        this.catalogItems = [...this.originalCatalogItems];
      } else {
        this.catalogItems = this.originalCatalogItems.filter((item) =>
          item.author.toLowerCase().includes(query)
        );
      }
      this.currentPage = 1; // Reset to first page after filtering
      this.scrollToTop(); // Scroll to top after filtering
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToTop(); // Scroll to top after changing page
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop(); // Scroll to top after changing page
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 items per row */
  gap: 1rem;
  justify-items: center;
  margin-top: 150px;
  margin-bottom: 100px;
  position: relative;
  min-height: calc(100vh - 200px);
}

@media (max-width: 768px) {
  .catalog {
    grid-template-columns: repeat(1, 1fr); /* 1 item per row on mobile */
  }
}

.catalog-item {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 100%;
}

.catalog-item:hover {
  transform: translateY(-5px);
}

.stained-glass {
  border: 5px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  overflow: hidden;
  transition: border 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.stained-glass:hover {
  border-color: rgba(255, 255, 255, 1);
}

.stained-glass img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease-in-out;
}

.label {
  text-align: center;
  background-color: rgba(75, 0, 130, 0.4);
  padding: 10px 0;
  width: 100%;
}

.label-text {
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #ffffff;
  padding: 5px 5px;
}

.label-subtext {
  text-align: center;
  font-size: clamp(0.8rem, 2vw, 1em);
  color: #ffffff;
  font-style: italic;
  padding: 5px 10px;
}

.sort-dropdown {
  position: fixed;
  top: 10px;
  left: 10px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
  margin-top: 70px;
}

.sort-dropdown select,
.sort-dropdown input[type="text"] {
  padding: 5px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.pagination {
  position: absolute;
  bottom: -70px;
  left: 10px;
  display: flex;
  justify-content: center; /* Align buttons to center */
  width: 100%;
}

.pagination button {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #4b0082;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.pagination button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.pagination button:not(:disabled):hover {
  background-color: #36006b;
}
</style>
