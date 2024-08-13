<template>
  <title>Mods - Standard || Doki Doki Modding Central</title>
  <div class="catalog">
    <div class="sort-dropdown">
      <select v-model="sortBy">
        <option value="default">Search by...</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <input
        type="text"
        v-model="searchQuery"
        :placeholder="`Search by ${sortBy}...`"
        @input="debouncedFilterCatalog"
        v-if="sortBy !== 'default'"
      />
    </div>
    <div
      v-for="(item, index) in paginatedItems"
      :key="index"
      class="catalog-item"
    >
      <a :href="`/mods/archive/${item.route}`" rel="noopener noreferrer">
        <div class="mods-stained-glass">
          <img :src="item.imageUrl" alt="Catalog Image" loading="lazy" />
          <div class="label">
            <p>
              <span class="label-text">{{ item.title }}</span>
            </p>
            <p>
            <span class="label-subtext">By {{ item.author }}</span>
            </p>
          </div>
        </div>
      </a>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  data() {
    return {
      sortBy: "default",
      searchQuery: "",
      originalCatalogItems: [],
      currentPage: 1,
      itemsPerPage: 18,
    };
  },
  computed: {
    filteredItems() {
      if (this.sortBy === "default") return this.originalCatalogItems;

      const query = this.searchQuery.toLowerCase();
      return this.originalCatalogItems.filter((item) =>
        item[this.sortBy].toLowerCase().includes(query)
      );
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredItems.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
  },
  created() {
    this.fetchCatalogItems();
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", _.throttle(this.handleResize, 200));
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    async fetchCatalogItems() {
      try {
        const response = await axios.get("/data/mods.json");
        this.originalCatalogItems = response.data.archive;
      } catch (error) {
        console.error("Failed to fetch catalog items:", error);
      }
    },
    handleResize() {
      this.itemsPerPage = window.innerWidth <= 768 ? 10 : 18;
      this.currentPage = 1;
    },
    debouncedFilterCatalog: _.debounce(function () {
      this.currentPage = 1;
      this.scrollToTop();
    }, 300),
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToTop();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop();
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  justify-items: center;
  margin-top: 150px;
  margin-bottom: 100px;
  position: relative;
  min-height: calc(100vh - 200px);
  width: 100%;
}

@media (max-width: 768px) {
  .catalog {
    grid-template-columns: repeat(1, 1fr);
  }

  .label-text,
  .label-subtext {
    text-align: center;
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: #ffffff;
    padding: 5px 5px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .label-subtext {
    font-size: clamp(1.2rem, 3.5vw, 1.5rem);
    font-style: italic;
    padding: 5px 10px;
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

.mods-stained-glass {
  border: 5px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  overflow: hidden;
  transition: border 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.mods-stained-glass:hover {
  border-color: rgba(255, 255, 255, 1);
}

.mods-stained-glass img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease-in-out;
  aspect-ratio: 16 / 9; /*isnt detected by vscode for some reason */
}

.label {
  text-align: center;
  background-color: rgba(75, 0, 130, 0.4);
  padding: 10px 0;
  width: 100%;
  position: relative;
}

.label-text,
.label-subtext {
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #ffffff;
  padding: 5px 5px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
}

.label-subtext {
  font-size: clamp(0.8rem, 2vw, 1em);
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
  justify-content: center;
  width: 100%;
}

.pagination button {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #79057c;
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
