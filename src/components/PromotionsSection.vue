<template>
  <div id="promotion" class="section">
    <h1 class="promotion" ref="promotionTitle">Promotions</h1>
    <div id="promotion-body" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(promo, index) in promotions"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img
            :src="promo.image"
            class="d-block"
            :alt="'Promotion' + (index + 1)"
            ref="carouselItem"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev custom-carousel-btn"
        type="button"
        data-bs-target="#promotion-body"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next custom-carousel-btn"
        type="button"
        data-bs-target="#promotion-body"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { promotions } from '../models/data'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Carousel } from 'bootstrap'

export default {
  name: 'PromotionsSection',
  setup() {
    const promotionTitle = ref(null)

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger)

      gsap.from(promotionTitle.value, {
        scrollTrigger: {
          trigger: promotionTitle.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })

      const carouselElement = document.querySelector('#promotion-body')
      new Carousel(carouselElement, {
        interval: 5000,
      })

      const items = document.querySelectorAll('.carousel-item img')
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, scale: 1.1 },
          { opacity: 1, scale: 1, duration: 1.5, delay: index * 0.3, ease: 'power2.out' },
        )
      })

      gsap.fromTo(
        '.custom-carousel-btn',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power2.out' },
      )
    })

    return {
      promotions,
      promotionTitle,
    }
  },
}
</script>

<style scoped>
.promotion {
  margin: 0 0 50px 0;
  text-align: center;
}

#promotion-body {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;
  max-width: 800px;
}

#promotion-body .carousel-item img {
  height: 500px;
  width: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.custom-carousel-btn {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s ease;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 100% 100%;
  filter: invert(1);
}

.custom-carousel-btn:hover {
  background-color: rgba(255, 126, 95, 0.9);
  opacity: 1;
}

@media (max-width: 768px) {
  .promotion {
    font-size: 1.5rem;
  }

  #promotion-body .carousel-item img {
    max-height: 300px;
  }

  .custom-carousel-btn {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .promotion {
    font-size: 1.2rem;
  }

  #promotion-body .carousel-item img {
    max-height: 200px;
  }
}
</style>
