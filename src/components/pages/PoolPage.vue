<template>
  <div class="service-page">
    <div class="hero-section">
      <img :src="heroImage" alt="Infinity Pool" class="hero-image" />
      <div class="hero-overlay">
        <h1>Infinity Oasis</h1>
        <p>Breathtaking pools with panoramic ocean views</p>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-center mb-5">Pool Experiences</h2>

          <div class="pool-card mb-5">
            <div class="row">
              <div class="col-md-6 mb-4 mb-md-0">
                <img :src="mainPoolImage" alt="Main Infinity Pool" class="img-fluid rounded" />
              </div>
              <div class="col-md-6">
                <h3>Horizon Infinity Pool</h3>
                <p>
                  Our signature 50-meter infinity pool appears to merge with the Indian Ocean,
                  creating a stunning visual effect. Features include:
                </p>
                <ul class="feature-list">
                  <li>Swim-up cocktail bar with premium drinks</li>
                  <li>In-water loungers with butler service</li>
                  <li>Shaded cabanas with daybeds</li>
                  <li>Panoramic ocean views</li>
                </ul>
                <p class="hours"><strong>Hours:</strong> 7:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div class="row mb-5">
            <div class="col-md-6 mb-4">
              <div class="secondary-pool-card h-100 p-4">
                <img :src="adultsOnlyImage" alt="Adults Only Pool" class="img-fluid rounded mb-3" />
                <h4>Tranquility Pool</h4>
                <p>An adults-only sanctuary with peaceful ambiance:</p>
                <ul class="feature-list small">
                  <li>Silent swimming hours (10AM-12PM daily)</li>
                  <li>Complimentary fruit skewers & chilled towels</li>
                  <li>Underwater music system</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="secondary-pool-card h-100 p-4">
                <img :src="familyPoolImage" alt="Family Pool" class="img-fluid rounded mb-3" />
                <h4>Coral Family Pool</h4>
                <p>Fun for all ages with special features:</p>
                <ul class="feature-list small">
                  <li>Zero-entry shallow area for toddlers</li>
                  <li>Water slides and play features</li>
                  <li>Poolside family activities</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="pool-services text-center py-4 mb-5">
            <h3 class="mb-4">Poolside Services</h3>
            <div class="row">
              <div
                class="col-md-3 col-6 mb-4"
                v-for="(service, index) in poolServices"
                :key="index"
              >
                <div class="service-icon">
                  <i :class="service.icon"></i>
                  <p class="mt-2">{{ service.name }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="cta-section text-center py-5">
            <h3 class="mb-4">Reserve Your Cabanas</h3>
            <a
              href="javascript:void(0)"
              class="btn btn-primary btn-lg expand-btn"
              @click="navigateToContact"
            >
              Book Poolside Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoolPage',
  data() {
    return {
      heroImage: new URL('@/assets/images/services/pool-hero.jpg', import.meta.url).href,
      mainPoolImage: new URL('@/assets/images/services/main-pool.jpg', import.meta.url).href,
      adultsOnlyImage: new URL('@/assets/images/services/adults-pool.jpg', import.meta.url).href,
      familyPoolImage: new URL('@/assets/images/services/family-pool.jpg', import.meta.url).href,
      poolServices: [
        { icon: 'fas fa-cocktail', name: 'Swim-up Bar' },
        { icon: 'fas fa-umbrella-beach', name: 'Cabanas' },
        { icon: 'fas fa-ice-cream', name: 'Gelato Cart' },
        { icon: 'fas fa-book', name: 'Library' },
        { icon: 'fas fa-table-tennis', name: 'Games' },
        { icon: 'fas fa-spa', name: 'Massage' },
        { icon: 'fas fa-sun', name: 'Sunscreen' },
        { icon: 'fas fa-water', name: 'Towels' },
      ],
    }
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
  },
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 60vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeInSlide 1.5s ease-out forwards;
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
  animation: fadeIn 1.5s ease-out forwards;
}

.hero-overlay h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.pool-card h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.pool-card p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.secondary-pool-card h4 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.secondary-pool-card p {
  font-size: 1rem;
  line-height: 1.5;
}

.service-icon i {
  font-size: 1.8rem;
  color: #ff7e5f;
  background: rgba(255, 126, 95, 0.1);
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  margin: 0 auto;
}

.service-icon p {
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

@keyframes fadeInSlide {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.pool-card {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.pool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.secondary-pool-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.secondary-pool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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

.feature-list.small li {
  font-size: 0.9rem;
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

@media (max-width: 768px) {
  .hero-overlay h1 {
    font-size: 2.5rem;
  }

  .hero-overlay p {
    font-size: 1.1rem;
  }

  .pool-card h3 {
    font-size: 1.5rem;
  }

  .pool-card p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .secondary-pool-card h4 {
    font-size: 1.3rem;
  }

  .secondary-pool-card p {
    font-size: 0.95rem;
  }

  .service-icon i {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }

  .service-icon p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .hero-overlay h1 {
    font-size: 2rem;
  }

  .hero-overlay p {
    font-size: 1rem;
  }

  .pool-card {
    padding: 15px;
  }

  .pool-card h3 {
    font-size: 1.3rem;
  }

  .pool-card p {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .secondary-pool-card {
    padding: 15px !important;
  }

  .secondary-pool-card h4 {
    font-size: 1.2rem;
  }

  .secondary-pool-card p {
    font-size: 0.9rem;
  }

  .service-icon i {
    font-size: 1.3rem;
    width: 45px;
    height: 45px;
    line-height: 45px;
  }

  .service-icon p {
    font-size: 0.8rem;
  }

  .feature-list.small li {
    font-size: 0.85rem;
  }

  .hours {
    font-size: 0.8rem;
  }
}
</style>
