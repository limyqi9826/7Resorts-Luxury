<template>
  <div class="service-page">
    <div class="hero-section">
      <img :src="heroImage" alt="Gourmet Dining" class="hero-image" />
      <div class="hero-overlay">
        <h1>Culinary Excellence</h1>
        <p>World-class dining experiences in paradise</p>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-center mb-5">Dining Experiences</h2>

          <div class="restaurant-card mb-5" v-for="(restaurant, index) in restaurants" :key="index">
            <div class="row">
              <div class="col-md-6 mb-4 mb-md-0">
                <img :src="restaurant.image" :alt="restaurant.name" class="img-fluid rounded" />
              </div>
              <div class="col-md-6">
                <h3>{{ restaurant.name }}</h3>
                <p class="cuisine-type">{{ restaurant.cuisine }}</p>
                <p>{{ restaurant.description }}</p>
                <ul class="feature-list">
                  <li v-for="(feature, i) in restaurant.features" :key="i">{{ feature }}</li>
                </ul>
                <p class="hours"><strong>Hours:</strong> {{ restaurant.hours }}</p>
              </div>
            </div>
          </div>

          <div class="special-dining text-center py-4 mb-5">
            <h3 class="mb-4">Unique Dining Experiences</h3>
            <div class="row">
              <div
                class="col-md-4 mb-4"
                v-for="(experience, index) in specialExperiences"
                :key="index"
              >
                <div class="experience-card p-3 h-100">
                  <img
                    :src="experience.image"
                    :alt="experience.title"
                    class="img-fluid rounded mb-3"
                  />
                  <h5>{{ experience.title }}</h5>
                  <p>{{ experience.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="cta-section text-center py-5">
            <h3 class="mb-4">Make a Reservation</h3>
            <a
              href="javascript:void(0)"
              class="btn btn-primary btn-lg expand-btn"
              @click="navigateToContact"
            >
              Book Your Table
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { restaurants, specialExperiences } from '../../models/data'

export default {
  name: 'DiningPage',
  data() {
    return {
      heroImage: new URL('@/assets/images/services/dining-hero.jpg', import.meta.url).href,
      restaurants,
      specialExperiences,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const elements = document.querySelectorAll('.restaurant-card, .experience-card')
      elements.forEach((element) => {
        if (this.isInView(element)) {
          element.style.opacity = 1
          element.style.animation = 'fadeInUp 1.5s ease-out forwards'
        }
      })
    },
    isInView(element) {
      const rect = element.getBoundingClientRect()
      return rect.top >= 0 && rect.bottom <= window.innerHeight
    },
    navigateToContact() {
      this.$router.push('/')
      setTimeout(() => {
        const element = document.getElementById('contact')
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 70,
            behavior: 'smooth',
          })
        }
      }, 100)
    },
  },
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 60vh;
  overflow: hidden;
  animation: fadeIn 1.5s ease-out;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
  padding: 20px;
  opacity: 0;
  animation: fadeInOverlay 2s ease-out 1s forwards;
}

.hero-overlay h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.restaurant-card,
.experience-card {
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}

.restaurant-card {
  margin-bottom: 2rem;
  padding: 1rem;
}

.restaurant-card h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.restaurant-card p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.experience-card h5 {
  font-size: 1.3rem;
  margin: 1rem 0;
}

.experience-card p {
  font-size: 1rem;
  line-height: 1.5;
}

.cuisine-type {
  color: #ff7e5f;
  font-style: italic;
  margin-bottom: 15px;
}

.hours {
  font-size: 0.9rem;
  color: #666;
}

.feature-list {
  list-style-type: none;
  padding-left: 0;
  margin: 15px 0;
}

.feature-list li {
  padding: 5px 0;
  position: relative;
  padding-left: 25px;
}

.feature-list li:before {
  content: '•';
  color: #ff7e5f;
  position: absolute;
  left: 0;
  font-weight: bold;
  font-size: 1.2rem;
}

.btn-primary {
  background: linear-gradient(120deg, #ff7e5f, #feb47b);
  border: none;
  padding: 12px 30px;
  font-weight: 600;
}

.btn-primary:hover {
  background: linear-gradient(120deg, #feb47b, #ff7e5f);
}

.expand-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
}

.expand-btn:hover {
  transform: scale(1.05);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInOverlay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-overlay h1 {
    font-size: 2.5rem;
  }

  .hero-overlay p {
    font-size: 1.1rem;
  }

  .restaurant-card h3 {
    font-size: 1.5rem;
  }

  .restaurant-card p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .experience-card h5 {
    font-size: 1.2rem;
  }

  .experience-card p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .hero-overlay h1 {
    font-size: 2rem;
  }

  .hero-overlay p {
    font-size: 1rem;
  }

  .restaurant-card {
    padding: 0.5rem;
  }

  .restaurant-card h3 {
    font-size: 1.3rem;
  }

  .restaurant-card p {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .experience-card h5 {
    font-size: 1.1rem;
  }

  .experience-card p {
    font-size: 0.85rem;
  }

  .cuisine-type {
    font-size: 0.9rem;
  }

  .hours {
    font-size: 0.8rem;
  }
}
</style>
