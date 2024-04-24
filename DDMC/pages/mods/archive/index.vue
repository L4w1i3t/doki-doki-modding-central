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
      {
        title: "Our Hearts United Chapter 1 - When Worlds Collide",
        author: "Azrathas and Team Nazuko/Skarlet",
        imageUrl: "/assets/mod_prevs/heartsunited.webp",
        route: "heartsunited"
      },
      {
        title: "12 Hours",
        author: "James-Zanny",
        imageUrl: "/assets/mod_prevs/12hours.webp",
        route: "12hours"
      },
      {
        title: "2nd Anniversary",
        author: "James-Zanny",
        imageUrl: "/assets/mod_prevs/second.webp",
        route: "secondaniversary"
      },
      {
        title: "The 48 Hour Mod",
        author: "Wretched Team",
        imageUrl: "/assets/mod_prevs/48hours.webp",
        route: "48hours"
      },
      {
        title: "A Brand New Day",
        author: "Phathom",
        imageUrl: "/assets/mod_prevs/brandnewday.webp",
        route: "brandnewday"
      },
      {
        title: "A Burger Gets Sayori",
        author: "10thMod",
        imageUrl: "/assets/mod_prevs/burgergetssayori.webp",
        route: "burgergetssayori"
      },
      {
        title: "A Date With Monika",
        author: "SlightlySimple",
        imageUrl: "/assets/mod_prevs/datewithmonika.webp",
        route: "datewithmonika"
      },
      {
        title: "A Date With Natsuki",
        author: "Various Artists",
        imageUrl: "/assets/mod_prevs/datewithnatsuki.webp",
        route: "datewithnatsuki"
      },
      {
        title: "DDLC: Ultimate Combo",
        author: "ComboDev",
        imageUrl: "/assets/mod_prevs/ultimatecombo.webp",
        route: "ultimatecombo"
      },
      {
        title: "One Last Memory",
        author: "12GizGuy6",
        imageUrl: "/assets/mod_prevs/onelastmemory.webp",
        route: "onelastmemory"
      },
      {
        title: "Exit Music",
        author: "Penny, MalukahMaker, SadBoiJake; Wretched Team (Rerelease)",
        imageUrl: "/assets/mod_prevs/exitmusic.webp",
        route: "exitmusic"
      },
      {
        title: "Exit Music: Redux",
        author: "Wretched Team",
        imageUrl: "/assets/mod_prevs/exitmusicredux.webp",
        route: "exitmusicredux"
      },
      {
        title: "Emerald Heart",
        author: "Emerald Heart Team",
        imageUrl: "/assets/mod_prevs/emeraldheart.webp",
        route: "emeraldheart"
      },
      {
        title: "Wintermute",
        author: "Wretched Team",
        imageUrl: "/assets/mod_prevs/wintermute.webp",
        route: "wintermute"
      },
      {
        title: "World of Dreams - Act 1",
        author: "Morbiusgreen",
        imageUrl: "/assets/mod_prevs/wodact1.webp",
        route: "wodact1"
      },
      {
        title: "World of Dreams - Act 2",
        author: "Morbiusgreen, WoD Team",
        imageUrl: "/assets/mod_prevs/wodact2.webp",
        route: "wodact2"
      },
      {
        title: "Spark Of Hope",
        author: "Mysticsense11",
        imageUrl: "/assets/mod_prevs/sparkofhope.webp",
        route: "sparkofhope"
      },
      {
        title: "Art Club",
        author: "Aevee_Animations",
        imageUrl: "/assets/mod_prevs/artclub.webp",
        route: "artclub"
      },
      {
        title: "Disappearance of the Literature Club",
        author: "-M!",
        imageUrl: "/assets/mod_prevs/disapperance.webp",
        route: "disapperance"
      },
      {
        title: "Don't",
        author: "-M!",
        imageUrl: "/assets/mod_prevs/dont.webp",
        route: "dont"
      },
      {
        title: "Somnium",
        author: "-M!",
        imageUrl: "/assets/mod_prevs/somnium.webp",
        route: "somnium"
      },

      {
        title: "Memories of Nothing",
        author: "-M!",
        imageUrl: "/assets/mod_prevs/mon.webp",
        route: "mon"
      },
      {
      title: "Hypnopompic",
        author: "-M!",
        imageUrl: "/assets/mod_prevs/hypnopompic.webp",
        route: "hypnopompic"
      },
      {
        title: "Fleeting Feelings",
        author: "-M!",
        imageUrl: "/assets/mod_prevs/fleetingfeelings.webp",
        route: "fleetingfeelings"
      },
      {
        title: "Just Yuri",
        author: "Just Yuri Dev Team",
        imageUrl: "/assets/mod_prevs/justyuri.webp",
        route: "justyuri"
      },
      {
        title: "Fallen Angel",
        author: "Noa-AT",
        imageUrl: "/assets/mod_prevs/fallenangel.webp",
        route: "fallenangel"
      },
      {
        title: "Meme Club",
        author: "Pooshscams",
        imageUrl: "/assets/mod_prevs/memeclub.webp",
        route: "memeclub"
      },
      {
        title: "Meme Club 2",
        author: "Tommy3500",
        imageUrl: "/assets/mod_prevs/memeclub2.webp",
        route: "memeclub2"
      },
      {
        title: "Never Ending Tomorrow",
        author: "KouichiKie35",
        imageUrl: "/assets/mod_prevs/neverendingtomorrow.webp",
        route: "neverendingtomorrow"
      },
      {
        title: "Purple Troubles",
        author: "MyLastWitchout",
        imageUrl: "/assets/mod_prevs/purpletroubles.webp",
        route: "purpletroubles"
      },
      {
        title: "Summertime",
        author: "Arianne/Urbanmech360",
        imageUrl: "/assets/mod_prevs/summertime.webp",
        route: "summertime"
      },
      //{ This keeps redirecting to the homepage. 
      //  title: "Dokis 'N' The Chief",
      //  author: "interweb_cat",
      //  imageUrl: "/assets/mod_prevs/dokisnthechief.webp",
      //  route: "chief"
      //},
      {
        title: "Blue Skies",
        author: "Sir Swampert, Kyoryii",
        imageUrl: "/assets/mod_prevs/blueskies.webp",
        route: "blueskies"
      },
      {
        title: "Monika Before Story",
        author: "Team Monika",
        imageUrl: "/assets/mod_prevs/monikabeforestory.webp",
        route: "monikabeforestory"
      },
      {
        title: "Behind Closed Doors",
        author: "FluffyDev",
        imageUrl: "/assets/mod_prevs/behindcloseddoors.webp",
        route: "behindcloseddoors"
      },
      {
        title: "Just Kotonoha!",
        author: "Rose, Riverr",
        imageUrl: "/assets/mod_prevs/justkoto.webp",
        route: "justkoto"
      },
      {
        title: "Just Kotonoha! 2",
        author: "Single Shot Studios",
        imageUrl: "/assets/mod_prevs/justkoto2.webp",
        route: "justkoto2"
      },
      {
        title: "Doki Doki Capitalist Radio",
        author: "Vaunt_Fremont_Tocsin",
        imageUrl: "/assets/mod_prevs/capitalistradio.webp",
        route: "capitalistradio"
      },
      {
        title: "Me and You",
        author: "FitMarshmallow, Various Artists",
        imageUrl: "/assets/mod_prevs/meandyou.webp",
        route: "me_and_you"
      },
      {
        title: "Purist Mod",
        author: "Tabuukilla, Syzygy",
        imageUrl: "/assets/mod_prevs/purist.webp",
        route: "purist"
      },
      {
        title: "Doki Doki Hazbin Hotel",
        author: "Vaunt_Fremont_Tocsin",
        imageUrl: "/assets/mod_prevs/hazbin.webp",
        route: "hazbinhotel"
      },








      {
        title: "Sayori Gets a Vape!",
        author: "Team Arctic",
        imageUrl: "/assets/mod_prevs/sayorigetsavape.webp",
        route: "sayorigetsavape"
      },
      {
        title: "Exit Spoof",
        author: "Dyinide",
        imageUrl: "/assets/mod_prevs/exitspoof.webp",
        route: "exitspoof"
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