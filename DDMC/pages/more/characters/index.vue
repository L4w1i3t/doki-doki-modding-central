
<template>
  <div>
    <div class="search-bar-container">
      <input type="text" v-model="searchQuery" placeholder="Search characters..." class="search-bar" />
    </div>

    <!-- Main Cast -->
    <div v-if="filteredCharacters.length > 0" class="centered-title">
      <h1 style="text-align: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: white; margin-bottom: 30px; font-size: 0.5em"><i>The character database is still under development. For now, enjoy this gallery!</i></h1>
      <h2 style="text-align: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: white; margin-bottom: 30px; font-size: 1em;"><u>Main Cast</u></h2>
    </div>
    <div v-if="filteredCharacters.length > 0" class="characters ocs-characters">
      <section v-for="(character, index) in filteredCharacters" :key="'main-' + index" class="character ocs-character">
        <img :src="character.image" :alt="character.name" class="character-image" @click="redirectToCharacter(character)" />
        <p class="character-name">{{ character.name }}</p>
      </section>
    </div>

    <!-- OCs -->
    <div v-if="filteredCharacters2.length > 0" class="centered-title">
      <h2 style="text-align: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: white; margin-bottom: 30px; font-size: 1em;"><u>Original Characters (OCs)</u></h2>
    </div>
    <div v-if="filteredCharacters2.length > 0" class="characters ocs-characters2">
      <section v-for="(character, index) in filteredCharacters2" :key="'ocs-' + index" class="character ocs-character2">
        <img :src="character.image" :alt="character.name" class="character-image" @click="redirectToCharacter(character)" />
        <p class="character-name">{{ character.name }} {{ character.emoji }}</p>
      </section>
    </div>

    <!-- Crossover Characters -->
    <div v-if="filteredCharacters3.length > 0" class="centered-title">
      <h2 style="text-align: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: white; margin-bottom: 30px; font-size: 1em;"><u>Crossover Characters</u></h2>
    </div>
    <div v-if="filteredCharacters3.length > 0" class="characters ocs-characters3">
      <section v-for="(character, index) in filteredCharacters3" :key="'ocs-' + index" class="character ocs-character3">
        <img :src="character.image" :alt="character.name" class="character-image" @click="redirectToCharacter(character)" />
        <p class="character-name">{{ character.name }} {{ character.emoji }}</p>
      </section>
    </div>

    <!-- Display not found message -->
    <p v-if="searchQuery && !hasCharacters" class="not-found-message">Character not found</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
        characters: [
          {
            name: 'Monika',
            image: '/assets/images/characters/m.png'
          },
          {
            name: 'Sayori',
            image: '/assets/images/characters/s.png'
          },
          {
            name: 'Yuri',
            image: '/assets/images/characters/y.png'
          },
          {
            name: 'Natsuki',
            image: '/assets/images/characters/n.png'
          },
        ],

        characters2: [
          {
            name: 'MC',
            image: '/assets/images/characters/mc.png',
          },
          {
            name: 'Wallace (MC)',
            image: '/assets/images/characters/wallace.png',
          },
          {
            name: 'Chad (MC)',
            image: '/assets/images/characters/chad.png',
          },
          {
            name: '"Canon" MC',
            image: '/assets/images/characters/canon.png',
          },
          {
            name: 'Slim MC',
            image: '/assets/images/characters/slim.png',
          },
          {
            name: 'Michael (MC)',
            image: '/assets/images/characters/michael.png',
          },
          {
            name: 'Downpour MC',
            image: '/assets/images/characters/dp.png',
          },
          {
            name: 'FeMC',
            image: '/assets/images/characters/femc.png',
          },
          {
            name: 'Miyuki (FeMC)',
            image: '/assets/images/characters/miyuki.png',
          },
          {
            name: 'Short FeMC',
            image: '/assets/images/characters/short.png',
          },
          {
            name: 'Veronica (FeMC)',
            image: '/assets/images/characters/veronica.png',
          },
          {
            name: 'Kotonoha',
            image: '/assets/images/characters/koto.png',
          },
          {
            name: 'Dadsuki',
            image: '/assets/images/characters/dadsuki.png',
          },
          {
            name: 'Harumi',
            image: '/assets/images/characters/momika.png',
          },
          {
            name: 'Daisuke',
            image: '/assets/images/characters/dadika.png',
          },
          {
            name: 'Dadyori',
            image: '/assets/images/characters/dadyori.png',
          },
          {
            name: 'Sayonika',
            image: '/assets/images/characters/sayonika.png',
          },
          {
            name: 'Satsuki',
            image: '/assets/images/characters/satsuki.png',
          },
          {
            name: 'Satsurika',
            image: '/assets/images/characters/satsurika.png',
          },
          {
            name: 'Switcheroo Cast (Mateo, Satori, Yuuri, Natsuko)',
            image: '/assets/images/characters/switch.png',
          },
          {
            name: 'Male Dokis (Moniko, Satori, Yuki, Naruki)',
            image: '/assets/images/characters/male.png',
          },
          {
            name: 'Mio',
            image: '/assets/images/characters/mio.png',
          },
          {
            name: 'Himari',
            image: '/assets/images/characters/himari.png',
          },
          {
            name: 'Kamuko',
            image: '/assets/images/characters/kamuko.png',
          },
          {
            name: 'Tomoko',
            image: '/assets/images/characters/tomoko.png',
          },
          {
            name: 'Kiyomi',
            image: '/assets/images/characters/kiyomi.png',
          },
          {
            name: 'Reiko',
            image: '/assets/images/characters/reiko.png',
          },
          {
            name: 'Nastya',
            image: '/assets/images/characters/nastya.png',
          },
          {
            name: 'Kia',
            image: '/assets/images/characters/kia.png',
          },
          {
            name: 'Aoki',
            image: '/assets/images/characters/aoki.png',
          },
          {
            name: 'Vaia',
            image: '/assets/images/characters/vaia.png',
          },
          {
            name: 'Violet',
            image: '/assets/images/characters/violet.png',
          },
          {
            name: 'Tori',
            image: '/assets/images/characters/tori.png',
          },
          {
            name: 'Amy',
            image: '/assets/images/characters/amy.png',
          },
          {
            name: 'Amy/Zuiho',
            image: '/assets/images/characters/amy2.png',
          },
          {
            name: 'Tina',
            image: '/assets/images/characters/tina.png',
          },
          {
            name: 'Lilly',
            image: '/assets/images/characters/lilly.png',
          },
          {
            name: 'Ida',
            image: '/assets/images/characters/ida.png',
          },
          {
            name: 'Elena',
            image: '/assets/images/characters/elena.png',
          },
          {
            name: 'Cassie',
            image: '/assets/images/characters/place.png',
          },
          {
            name: 'Delinquent Girl',
            image: '/assets/images/characters/dg.png',
          },
          {
            name: 'Friend 1',
            image: '/assets/images/characters/friend1.png',
          },
          {
            name: 'Hime',
            image: '/assets/images/characters/hime.png',
          },
          {
            name: 'Wendy',
            image: '/assets/images/characters/wendy.png',
          },
          {
            name: 'Hibari',
            image: '/assets/images/characters/hibari.png',
          },
          {
            name: 'Didge',
            image: '/assets/images/characters/didge.png',
          },
          {
            name: 'Kris',
            image: '/assets/images/characters/kris.png',
          },
          {
            name: 'Kuninobu',
            image: '/assets/images/characters/kuninobu.png',
          },
          {
            name: 'Tiffany',
            image: '/assets/images/characters/tiffany.png',
          },
          {
            name: 'Haruna',
            image: '/assets/images/characters/haruna.png',
          },
          {
            name: 'Storm',
            image: '/assets/images/characters/storm.png',
          },
          {
            name: 'Quinn',
            image: '/assets/images/characters/quinn.png',
          },
          {
            name: 'Shiro',
            image: '/assets/images/characters/shiro.png',
          },
          {
            name: 'Junichi',
            image: '/assets/images/characters/junichi.png',
          },
          {
            name: 'Satoshi',
            image: '/assets/images/characters/satoshi.png',
          },
          {
            name: 'Bima',
            image: '/assets/images/characters/bima.png',
          },
          {
            name: 'Hanami',
            image: '/assets/images/characters/hanami.png',
          },
          {
            name: 'Libitina',
            image: '/assets/images/characters/lib.png',
          },
        ],
        characters3: [
          {
            name: 'Saul Goodman',
            image: '/assets/images/characters/saul.png'
          },
          {
            name: 'BF & GF',
            image: '/assets/images/characters/fnf.png'
          },
          {
            name: 'Annabelle',
            image: '/assets/images/characters/annabelle.png'
          },
          {
            name: 'Noelle',
            image: '/assets/images/characters/noelle.png'
          },
          {
            name: 'TacticalCupcakes',
            image: '/assets/images/characters/tc.png'
          },
        ],
        searchQuery: ''
      };
    },
      computed: {
      filteredCharacters() {
        return this.characters.filter(character =>
          character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      filteredCharacters2() {
        return this.characters2.filter(character =>
          character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      filteredCharacters3() {
        return this.characters3.filter(character =>
          character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      hasCharacters() {
        const hasCharactersInCharacters = this.filteredCharacters.length > 0;
        const hasCharactersInCharacters2 = this.filteredCharacters2.length > 0;
        const hasCharactersInCharacters3 = this.filteredCharacters3.length > 0;
        if (this.searchQuery) {
          return hasCharactersInCharacters || hasCharactersInCharacters2 || hasCharactersInCharacters3;
        } else {
          return true;
      }
    },
  },
    methods: {
      redirectToCharacter(character) {
        console.log(`Redirecting to details of ${character.name}`);
      }
    }
  };
</script>

<style>
  .characters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.character {
  text-align: center;
  margin-bottom: 50px;
  flex: 0 0 calc(22% - 20px);
  max-width: calc(22% - 20px);
  box-sizing: border-box;
}

.character-name {
  margin-top: 0px;
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: italic;
  color: white;
}

.character-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20%;
}

.ocs-characters,
.ocs-characters2,
.ocs-characters3 {
  margin-top: 50px;
}

.ocs-character,
.ocs-character2,
.ocs-character3 {
  margin-bottom: 100px;
}

.search-bar-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 60px;
  margin-left: 0px;
}

.search-bar {
  width: 200px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1em;
  position: fixed;
}

.not-found-message {
  color: red;
  text-align: center;
  margin-top: 20px;
}

body {
  overflow-x: hidden;
}

.centered-title {
  text-align: center;
  font-size: 3em;
  margin-top: 5vh;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  animation: pulse 8s linear infinite;
}

@keyframes pulse {
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  20% {
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
  }
  40% {
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
  }
  60% {
    text-shadow: 0 0 10px rgba(255, 192, 203, 0.8);
  }
  80% {
    text-shadow: 0 0 10px rgba(148, 0, 211, 0.8);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
}

.centered {
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  border: 10px solid #ffffff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  transform: perspective(1000px) rotateX(3deg);
  transition: transform 0.3s ease-in-out;
  opacity: 0.95;
  animation: sectionGlow 8s linear infinite;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

@keyframes sectionGlow {
  0% {
    border-color: rgba(255, 255, 255, 0.8);
  }
  20% {
    border-color: rgba(255, 128, 128, 0.8);
  }
  40% {
    border-color: rgba(116, 255, 116, 0.8);
  }
  60% {
    border-color: rgba(255, 192, 203, 0.8);
  }
  80% {
    border-color: rgba(213, 114, 255, 0.8);
  }
  100% {
    border-color: rgba(255, 255, 255, 0.8);
  }
}

.section:hover {
  transform: perspective(1000px) rotateX(0deg);
}

.section strong {
  display: block;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.section u {
  text-decoration: underline;
}

.section i {
  font-style: italic;
}

.section p {
  margin-bottom: 15px;
  line-height: 1.6;
}

.content-wrapper ol {
  padding-left: 20px;
  margin-bottom: 15px;
}

.content-wrapper ol li {
  margin-bottom: 10px;
}

.section centered {
  font-size: 1.5em;
}

.section centered strong i {
  text-align: center;
  margin-top: 0px;
}

.section centered strong i p {
  font-style: italic;
}

@media (max-width: 768px) {
  .form-wrapper {
    width: 100%;
  }
}

.content-wrapper {
  margin-top: 80px;
}
</style>