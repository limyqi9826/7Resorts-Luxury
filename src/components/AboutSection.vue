<template>
  <div id="about" class="section">
    <h1 class="about" ref="aboutTitle">About <span>Us</span></h1>
    <p class="about-content mx-auto text-center" ref="aboutContent">
      "Nestled on a pristine private island in the Maldives, 7Resorts offers an unparalleled escape
      into paradise. With crystal-clear waters, white sandy beaches, and world-class hospitality, we
      redefine luxury. Our eco-friendly villas blend modern elegance with sustainable design,
      ensuring a guilt-free indulgence in nature's beauty."
    </p>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: 'AboutSection',
  setup() {
    const aboutTitle = ref(null)
    const aboutContent = ref(null)

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger)

      gsap.from(aboutTitle.value, {
        scrollTrigger: {
          trigger: aboutTitle.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })

      gsap.from(aboutContent.value, {
        scrollTrigger: {
          trigger: aboutContent.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
      })
    })

    return {
      aboutTitle,
      aboutContent,
    }
  },
}
</script>

<style scoped>
.about {
  margin: 0 0 50px 0;
  text-align: center;
}

.about span {
  color: gray;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    font-size: 0.95rem;
    line-height: 1.5;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .about-content {
    font-size: 0.85rem;
    line-height: 1.4;
    padding: 0 15px;
  }
}
</style>
