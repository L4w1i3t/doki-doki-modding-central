<template>
  <title>Mods - Archive || Doki Doki Modding Central</title>
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
      <a :href="`/mods/archive/${item.route}`" rel="noopener noreferrer">
        <div class="stained-glass">
          <img :src="item.imageUrl" alt="Catalog Image">
          <div class="label">
            <p>
            <span class="label-text">{{ item.title }}</span>
            </p>
            <span class="label-subtext">By {{ item.author }}</span>
          </div>
        </div>
      </a>
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
      {
        title: "The Deepest Mod Ever",
        author: "MagmaSlasher",
        imageUrl: "/assets/mod_prevs/deepestmod.png",
        route: "deepestmod"
      },
      {
        title: "A Different Story: The New Beginning",
        author: "Nikicha",
        imageUrl: "/assets/mod_prevs/differentstory.jpg",
        route: "differentstory"
      },
      {
        title: "Presents and Poems",
        author: "Team Red Mazda",
        imageUrl: "/assets/mod_prevs/presents.webp",
        route: "presents"
      },
      {
        title: "A Date With Yuri",
        author: "Team Red Mazda",
        imageUrl: "/assets/mod_prevs/datewithyuri.webp",
        route: "datewithyuri"
      },
      {
        title: "Can You Spare A Poem?",
        author: "SomeDudeNamedAyat",
        imageUrl: "/assets/mod_prevs/spareapoem.webp",
        route: "spareapoem"
      },
      {
        title: "Afterimage",
        author: "Batebri, RoyAH_M",
        imageUrl: "/assets/mod_prevs/afterimage.webp",
        route: "afterimage"
      },
      {
        title: "Kindermusical: The Mod",
        author: "Silver",
        imageUrl: "/assets/mod_prevs/kinder.webp",
        route: "kindermusical"
      },
      {
        title: "DDLC: The Struggles of RenPy 6",
        author: "Silver, Empyre",
        imageUrl: "/assets/mod_prevs/struggles.webp",
        route: "renpy"
      },
      {
        title: "Tsundere Ghosts",
        author: "Silver",
        imageUrl: "/assets/mod_prevs/ghosts.webp",
        route: "ghosts"
      },
      {
        title: "Paper Thin Hearts",
        author: "Silver",
        imageUrl: "/assets/mod_prevs/paper.webp",
        route: "paper"
      },
      {
        title: "Story of Dokitale",
        author: "Silver",
        imageUrl: "/assets/mod_prevs/story.webp",
        route: "storyofdoki"
      },
      {
        title: "Grappling Hook Yuri - The Origin Arc",
        author: "Empyre, Silver, SpiritH0F",
        imageUrl: "/assets/mod_prevs/grapplinghookyuri.webp",
        route: "grapplinghookyuri"
      },
      {
        title: "Everlasting Act 1 Remastered",
        author: "Team Everlasting",
        imageUrl: "/assets/mod_prevs/everlasting.webp",
        route: "everlasting"
      },
      {
        title: "Everlasting Solitude",
        author: "BrunoMula",
        imageUrl: "/assets/mod_prevs/everlastingsolitude.webp",
        route: "everlastingsolitude"
      },
      {
        title: "The Haunting of Monika After Story",
        author: "President JM, DACHero",
        imageUrl: "/assets/mod_prevs/mashaunt.webp",
        route: "mashaunt"
      },
      {
        title: "The Doki Doki Literature Club is Dying",
        author: "SomeDudeNamedAyat",
        imageUrl: "/assets/mod_prevs/clubisdying.webp",
        route: "clubisdying"
      },
      {
        title: "Doki Doki Changing Perspectives",
        author: "SouthrenSystems",
        imageUrl: "/assets/mod_prevs/ChangingPerspectives.webp",
        route: "changingperspectives"
      },
      {
        title: "Tripping Backwards",
        author: "Sven and Wretched Team",
        imageUrl: "/assets/mod_prevs/trippingbackwards.webp",
        route: "trippingbackwards"
      },
      {
        title: "Focus On Me",
        author: "NitrosGaming",
        imageUrl: "/assets/mod_prevs/focusonme.webp",
        route: "focusonme"
      },
      {
        title: "Amor Fati",
        author: "DarkSyner, BootyCrusader",
        imageUrl: "/assets/mod_prevs/amorfati.webp",
        route: "amorfati"
      },
      {
        title: "My Best Friend is a Ghost (Original)",
        author: "Storm Boss, icouldbecooler",
        imageUrl: "/assets/mod_prevs/bestfriendisaghost.webp",
        route: "bestfriendisaghost"
      },
      {
        title: "Koi Ga Kirei [KGK]",
        author: "TeamAI",
        imageUrl: "/assets/mod_prevs/kgk.webp",
        route: "kgk"
      },
      {
        title: "Dimensions",
        author: "ChiffMonkey",
        imageUrl: "/assets/mod_prevs/dimensions.webp",
        route: "dimensions"
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  justify-items: center;
  padding: 20px;
  margin-top: 150px
}

.catalog-item {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 100;
  margin-top: 70px
}

.sort-dropdown select,
.sort-dropdown input[type="text"] {
  padding: 5px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}
</style>