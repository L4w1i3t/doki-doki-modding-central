<template>
  <div class="catalog">
    <div class="sort-dropdown">
      <select v-model="sortBy" @change="sortCatalog">
        <option value="default">Search by...</option>
        <option value="default">Default</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <div v-if="sortBy === 'title'">
        <input type="text" v-model="titleSearch" placeholder="Search by title..." @input="filterByTitle">
      </div>
      <div v-else-if="sortBy === 'author'">
        <input type="text" v-model="authorSearch" placeholder="Search by author..." @input="filterByAuthor">
      </div>
    </div>
    <div v-for="(item, index) in catalogItems" :key="index" class="catalog-item">
      <nuxt-link :to="'/mods/archive/' + item.route">
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
      sortBy: 'default',
      titleSearch: '',
      authorSearch: '',
      originalCatalogItems: [],
      catalogItems: []
    };
  },
  created() {
    this.originalCatalogItems = [
      {
        title: "EGO DEATH",
        author: "Tune Eternal",
        imageUrl: "/assets/mod_prevs/egodeath.webp",
        route: "egodeath"
      },
      {
        title: "Left Behind",
        author: "Tune Eternal",
        imageUrl: "/assets/mod_prevs/leftbehind.webp",
        route: "leftbehind"
      },
      {
        title: "Better Call Saul: Defense Attorney in Spilt Spaghetti",
        author: "Tune Eternal",
        imageUrl: "/assets/mod_prevs/saul.webp",
        route: "saul"
      },
      {
        title: "Sigma Club",
        author: "Kennedy Productions, Team Red Mazda",
        imageUrl: "/assets/mod_prevs/sigmaclub.webp",
        route: "sigmaclub"
      },
      {
        title: "Sigma Club 2: Sigma Stigma",
        author: "Kennedy Productions, Tune Eternal",
        imageUrl: "/assets/mod_prevs/sigmastigma.webp",
        route: "sigmaclub2"
      },
      {
        title: "SVHS-TAP05052022",
        author: "Team Red Mazda, L4w1i3t",
        imageUrl: "/assets/mod_prevs/svhsoriginal.webp",
        route: "svhs"
      },
      {
        title: "You Matter Too (Part 1)",
        author: "Doki Senate",
        imageUrl: "/assets/mod_prevs/ymt.webp",
        route: "youmattertoo"
      },
      {
        title: "Our Castle Walls",
        author: "Mr. ZeraTheMant",
        imageUrl: "/assets/mod_prevs/ocw.webp",
        route: "ourcastlewalls"
      },
      {
        title: "Our Castle Walls: After Stories",
        author: "Mr. ZeraTheMant",
        imageUrl: "/assets/mod_prevs/ocwas.webp",
        route: "ourcastlewallsafterstory"
      },
      {
        title: "Zera's Fun Time",
        author: "Mr. ZeraTheMant",
        imageUrl: "/assets/mod_prevs/zerasfuntime.webp",
        route: "zerasfuntime"
      },
      {
        title: "Sayori Fucks Up",
        author: "MagmaSlasher",
        imageUrl: "/assets/mod_prevs/sayorifucksup.webp",
        route: "sayorifucksup"
      },
      {
        title: "Doki Doki Outcast",
        author: "Fjord",
        imageUrl: "/assets/mod_prevs/outcast.webp",
        route: "outcast"
      },
      {
        title: "Salvation! Remake",
        author: "12GizGuy6",
        imageUrl: "/assets/mod_prevs/salvationremake.webp",
        route: "salvationremake"
      },
      {
        title: "Doki Doki The Blue Seas: Demo V2",
        author: "dewallt101",
        imageUrl: "/assets/mod_prevs/blueseasdemov2.webp",
        route: "blueseasdemov2"
      },
      {
        title: "Doki Doki The Blue Seas: Nightmare of the Yandere Doki",
        author: "dewallt101",
        imageUrl: "/assets/mod_prevs/nightmareoftheyanderedoki.webp",
        route: "nightmareoftheyanderedoki"
      },
      {
        title: "Doki Doki The Blue Seas: Thanksgiving Edition",
        author: "dewallt101",
        imageUrl: "/assets/mod_prevs/blueseasthanksgiving.webp",
        route: "blueseasthanksgiving"
      },
      {
        title: "Doki Doki The Blue Seas: Christmas Adventures",
        author: "dewallt101",
        imageUrl: "/assets/mod_prevs/blueseaschristmasadventures.webp",
        route: "blueseaschristmasadventures"
      },
      {
        title: "Tropical Rain",
        author: "PumpkinbrainUS",
        imageUrl: "/assets/mod_prevs/tropicalrain.webp",
        route: "tropicalrain1.2"
      },
 
      {
        title: "I Need This Mod Like A Hole In The Head",
        author: "MagmaSlasher",
        imageUrl: "/assets/mod_prevs/holeinthehead.webp",
        route: "holeinthehead"
      },
 



    ];
    this.catalogItems = [...this.originalCatalogItems];
  },
  methods: {
    sortCatalog() {
    },
    filterByTitle() {
      const query = this.titleSearch.toLowerCase();
      if (query === '') {
        this.catalogItems = [...this.originalCatalogItems];
      } else {
        this.catalogItems = this.originalCatalogItems.filter(item => item.title.toLowerCase().includes(query));
      }
    },
    filterByAuthor() {
      const query = this.authorSearch.toLowerCase();
      if (query === '') {
        this.catalogItems = [...this.originalCatalogItems];
      } else {
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
  overflow: hidden;
}

.catalog-item {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

.catalog-item:hover {
  transform: scale(1.05) rotate(0deg);
}

.stained-glass {
  border: 10px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
}

.stained-glass img {
  width: 100%;
  height: auto;
}

.label-text,
.label-subtext {
  display: block;
  text-align: center;
  margin-top: 0px;
  font-size: 1.4em;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ffffff;
  background-color: black;
  padding: 5px 10px;
  overflow: hidden;
}

.label-subtext {
  font-style: italic;
}

.sort-dropdown {
  position: fixed;
  top: 60px;
  left: 0px;
  z-index: 9998;
}

.sort-dropdown input[type="text"] {
  width: 100%;
  padding: 5px;
  margin-top: 0px;
  box-sizing: border-box;
  z-index: 9997;
}
</style>
