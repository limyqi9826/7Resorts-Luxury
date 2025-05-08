<template>
  <main>
    <HeroCarousel />
    <AboutSection />
    <ServicesSection />
    <PromotionsSection />
    <ContactSection />
  </main>
</template>

<script>
import HeroCarousel from '../components/HeroCarousel.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import PromotionsSection from '../components/PromotionsSection.vue'
import ContactSection from '../components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroCarousel,
    AboutSection,
    ServicesSection,
    PromotionsSection,
    ContactSection,
  },
}
</script>
