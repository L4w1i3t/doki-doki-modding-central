
<template>
  <div class="full-height">
      <BackgroundImage class="background">
        <div class="content">
          <Hotbar/>
          <Header v-if="isHomePage" />
          <Showcase v-if="isHomePage" />
          <GetStarted v-if="isHomePage" />
          <Socials v-if="isHomePage" />
          <Maincast v-if="isCharactersPage" />
          <Occharacters v-if="isCharactersPage" />
          <Crossover v-if="isCharactersPage" />
          <slot/>
        </div>
        <Footer class="footer"/>
      </BackgroundImage>
  </div>
</template>

<script>
import Footer from '../components/universal/footer.vue'
import BackgroundImage from '../components/universal/background.vue'
import Hotbar from '../components/universal/hotbar.vue'
import Header from '../components/homepage/header.vue'
import Showcase from '../components/homepage/showcase.vue'
import GetStarted from '../components/homepage/getstarted.vue'
import Socials from '../components/homepage/socials.vue'
import Maincast from '../components/characters/maincast.vue'
import Occharacters from '../components/characters/occharacters.vue'
import Crossover from '../components/characters/crossover.vue'

export default {
  components: {
    Hotbar,
    Footer,
    BackgroundImage,
    Header,
    Showcase,
    GetStarted,
    Socials,
    Maincast,
    Occharacters,
    Crossover
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/'
    },
    isCharactersPage() {
      return this.$route.path === '/more/characters'
    }
  }
}
</script>

<style scoped>
.full-height {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.background {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

.footer {
  flex-shrink: 0;
}
</style>

