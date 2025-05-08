<template>
  <div class="service-page">
    <div class="hero-section">
      <img :src="heroImage" alt="Luxury Villas" class="hero-image" />
      <div class="hero-overlay">
        <h1>Luxury Villas</h1>
        <p>Private sanctuaries with breathtaking ocean views</p>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-center mb-5">Your Private Island Retreat</h2>

          <div class="row mb-5">
            <div class="col-md-6 mb-4">
              <img :src="villaImage1" alt="Beach Villa" class="img-fluid rounded" />
            </div>
            <div class="col-md-6">
              <h3>Beachfront Villas</h3>
              <p>
                Step directly from your villa onto the powder-soft white sand. Our beachfront villas
                feature:
              </p>
              <ul class="feature-list">
                <li>Private plunge pools with sunset views</li>
                <li>Spacious sun decks with daybeds</li>
                <li>Outdoor rain showers</li>
                <li>Direct beach access</li>
              </ul>
            </div>
          </div>

          <div class="row mb-5 flex-md-row-reverse">
            <div class="col-md-6 mb-4">
              <img :src="villaImage2" alt="Overwater Villa" class="img-fluid rounded" />
            </div>
            <div class="col-md-6">
              <h3>Overwater Villas</h3>
              <p>Experience the magic of living over the turquoise lagoon:</p>
              <ul class="feature-list">
                <li>Glass floor panels to view marine life</li>
                <li>Private infinity pools overlooking the ocean</li>
                <li>Direct lagoon access via private stairs</li>
                <li>Sunrise and sunset facing options</li>
              </ul>
            </div>
          </div>

          <div class="amenities-section text-center py-4">
            <h3 class="mb-4">Villa Amenities</h3>
            <div class="row">
              <div class="col-md-4 mb-3" v-for="(amenity, index) in amenities" :key="index">
                <div class="amenity-card p-3 h-100">
                  <i :class="amenity.icon" class="amenity-icon mb-3"></i>
                  <h5>{{ amenity.title }}</h5>
                  <p class="small">{{ amenity.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="cta-section text-center py-5">
            <h3 class="mb-4">Ready for Your Island Escape?</h3>
            <a
              href="javascript:void(0)"
              class="btn btn-primary btn-lg expand-btn"
              @click="navigateToContact"
            >
              Book Your Villa Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { villaAmenities } from '../../models/data'

export default {
  name: 'VillasPage',
  data() {
    return {
      heroImage: new URL('@/assets/images/services/villas-hero.jpg', import.meta.url).href,
      villaImage1: new URL('@/assets/images/services/villa-beach.jpg', import.meta.url).href,
      villaImage2: new URL('@/assets/images/services/villa-overwater.jpg', import.meta.url).href,
      amenities: villaAmenities,
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
    onScroll() {
      const elements = document.querySelectorAll('.amenity-card')
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

.feature-list {
  list-style-type: none;
  padding-left: 0;
}

.feature-list li {
  padding: 8px 0;
  position: relative;
  padding-left: 30px;
}

.feature-list li:before {
  content: '✓';
  color: #ff7e5f;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.amenity-card {
  border: 1px solid #eee;
  border-radius: 8px;
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    opacity 0.5s;
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}

.amenity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.amenity-icon {
  font-size: 2rem;
  color: #ff7e5f;
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

  .amenity-card h5 {
    font-size: 1.2rem;
  }

  .amenity-card p {
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

  .feature-list li {
    font-size: 0.9rem;
  }

  .amenity-card h5 {
    font-size: 1.1rem;
  }

  .amenity-card p {
    font-size: 0.85rem;
  }
}
</style>
