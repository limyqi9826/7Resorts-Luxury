<template>
  <div id="home" class="section carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in carouselSlides"
        :key="index"
        type="button"
        data-bs-target="#home"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-current="index === 0"
      ></button>
    </div>

    <div class="carousel-inner">
      <div
        v-for="(slide, index) in carouselSlides"
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img
          :src="slide.image"
          class="carousel-image d-block w-100"
          :alt="'Carousel' + (index + 1)"
        />
        <div class="carousel-caption" :ref="(el) => (carouselCaptions[index] = el)">
          <h5>{{ slide.title }}</h5>
          <p>{{ slide.content }}</p>
        </div>
      </div>
    </div>

    <div class="scroll">
      <a
        class="scroll-hint scroll-animation"
        href="#about"
        @click.prevent="scrollToSection('about')"
        >↓ Scroll for more info</a
      >
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#home" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#home" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { carouselSlides } from '../models/data'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { Carousel } from 'bootstrap'

export default {
  name: 'HeroCarousel',
  setup() {
    const carouselCaptions = ref([])
    const carouselInstance = ref(null)

    const scrollToSection = (id) => {
      const element = document.getElementById(id)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: 'smooth',
        })
      }
    }

    const animateCaption = (index) => {
      const caption = carouselCaptions.value[index]
      if (!caption) return

      gsap.fromTo(
        caption,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
      )

      const elements = caption.querySelectorAll('h5, p')
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: 'easeOutExpo' },
      )
    }

    const animateImageZoom = (index) => {
      const image = document.querySelectorAll('.carousel-image')[index]
      if (!image) return

      gsap.fromTo(
        image,
        { scale: 1.05 },
        { scale: 1, duration: 5, repeat: -1, yoyo: true, ease: 'power2.out' },
      )
    }

    onMounted(() => {
      const carouselEl = document.querySelector('#home')
      carouselInstance.value = new Carousel(carouselEl, {
        interval: 6000,
      })

      animateCaption(0)
      animateImageZoom(0)

      carouselEl.addEventListener('slid.bs.carousel', (event) => {
        const newIndex = event.to
        animateCaption(newIndex)
        animateImageZoom(newIndex)
      })
    })

    return {
      carouselSlides,
      carouselCaptions,
      scrollToSection,
      carouselInstance,
    }
  },
}
</script>

<style scoped>
.carousel img {
  height: 700px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  bottom: 100px;
}

@media (max-width: 768px) {
  .carousel-caption {
    bottom: 60px;
    padding: 15px;
  }

  .carousel-caption h5 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .carousel-caption p {
    font-size: 0.85rem;
    margin-bottom: 0;
    line-height: 1.4;
  }
}

@media (max-width: 480px) {
  .carousel-caption {
    bottom: 50px;
    padding: 12px;
  }

  .carousel-caption h5 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  .carousel-caption p {
    font-size: 0.8rem;
  }
}

.scroll {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}

.scroll-hint {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 30px;
  width: fit-content;
  text-align: center;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.scroll-hint:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
}
</style>
