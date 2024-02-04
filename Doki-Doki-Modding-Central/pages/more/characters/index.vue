
<template>
  <div>
    <div class="search-bar-container">
      <input type="text" v-model="searchQuery" placeholder="Search characters..." class="search-bar" />
    </div>

    <!-- Main Cast -->
    <div v-if="filteredCharacters.length > 0" class="centered-title">
      <h1 style="text-align: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: white; margin-bottom: 30px; font-size: 0.5em"><i>The character database is still under development. For now, enjoy this gallery!</i></h1>
      <h2 style="text-align: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: white; margin-bottom: 30px;"><u>Main Cast</u></h2>
    </div>
    <div v-if="filteredCharacters.length > 0" class="characters ocs-characters">
      <section v-for="(character, index) in filteredCharacters" :key="'main-' + index" class="character ocs-character">
        <img :src="character.image" :alt="character.name" class="character-image" @click="redirectToCharacter(character)" />
        <p class="character-name">{{ character.name }}</p>
      </section>
    </div>

    <!-- OCs -->
    <div v-if="filteredCharacters2.length > 0" class="centered-title">
      <h2 style="text-align: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: white; margin-bottom: 30px;"><u>Original Characters (OCs)</u></h2>
    </div>
    <div v-if="filteredCharacters2.length > 0" class="characters ocs-characters2">
      <section v-for="(character, index) in filteredCharacters2" :key="'ocs-' + index" class="character ocs-character2">
        <img :src="character.image" :alt="character.name" class="character-image" @click="redirectToCharacter(character)" />
        <p class="character-name">{{ character.name }} {{ character.emoji }}</p>
      </section>
    </div>

    <!-- Crossover Characters -->
    <div v-if="filteredCharacters3.length > 0" class="centered-title">
      <h2 style="text-align: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: white; margin-bottom: 30px;"><u>Crossover Characters</u></h2>
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
    font-size: 2em; /* Adjusted font size for better spacing */
    margin-bottom: 20px; /* Adjusted margin-bottom between characters */
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    color: white;
  }

  .character-image {
    width: 100%; /* Adjust image size to fill the container */
    height: 100%; /* Set height to 100% to maintain square aspect ratio */
    object-fit: cover; /* Crop the image to cover the container */
    border-radius: 20%; /* Apply border-radius as needed */
  }

  .ocs-characters,
  .ocs-characters2,
  .ocs-characters3 {
    margin-top: 50px; /* Add margin-top for the entire section */
  }

  .ocs-character,
  .ocs-character2,
  .ocs-character3 {
    margin-bottom: 100px; /* Increase margin-bottom between rows */
  }

  .search-bar-container {
    display: flex;
    justify-content: flex-start; /* Change from flex-end to flex-start */
    margin-bottom: 20px;
    margin-top: 60px; /* Add margin-top for spacing */
    margin-left: 0px; /* Add margin-left for spacing */
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
</style>