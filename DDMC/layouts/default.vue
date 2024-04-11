
<template>
  <div class="full-height">
    <transition name="page-dissolve" mode="out-in">
      <BackgroundImage class="background">
        <div class="content">
          <Hotbar/>
          <Header v-if="isHomePage" />
          <Socials v-if="isHomePage" />
          <slot/>
        </div>
        <Footer class="footer"/>
      </BackgroundImage>
    </transition>
  </div>
</template>

<script>
import Footer from '../components/universal/footer.vue'
import BackgroundImage from '../components/universal/background.vue'
import Hotbar from '../components/universal/hotbar.vue'
import Header from '../components/homepage/header.vue'
import Socials from '../components/homepage/socials.vue'

export default {
  components: {
    Hotbar,
    Footer,
    BackgroundImage,
    Header,
    Socials,
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/'
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

