
<!-- layouts/default.vue -->
<template>
  <div class="full-height">
    <transition name="page-dissolve" mode="out-in">
      <BackgroundImage class="background">
        <div class="content">
          <Hotbar />
          <Header v-if="isHomePage" />
          <slot></slot>
        </div>
        <Footer class="footer"/>
      </BackgroundImage>
    </transition>
  </div>
</template>

<script>
import Footer from '../components/footer.vue'
import BackgroundImage from '../components/background.vue'
import Hotbar from '../components/hotbar.vue'
import Header from '../components/header.vue'

export default {
  components: {
    Hotbar,
    Footer,
    BackgroundImage,
    Header,
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
