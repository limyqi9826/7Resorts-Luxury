<template>
  <div id="app">
    <NavBar />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

body {
  font-family:
    'Montserrat', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
    Geneva, Verdana, sans-serif;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.section {
  padding: 50px 0;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.scroll-animation {
  animation: bounce 2s infinite;
}
</style>
