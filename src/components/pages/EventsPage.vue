<template>
  <div class="service-page">
    <div class="hero-section">
      <img :src="heroImage" alt="Events & Weddings" class="hero-image" />
      <div class="hero-overlay">
        <h1>Events & Weddings</h1>
        <p>Create unforgettable moments in paradise</p>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-center mb-5">Celebrate in Paradise</h2>

          <div class="events-intro text-center mb-5">
            <p>
              From intimate weddings to corporate retreats, our private island provides the perfect
              backdrop for your special events. Our dedicated events team will handle every detail
              to create your perfect occasion.
            </p>
          </div>

          <div class="event-types mb-5">
            <h3 class="text-center mb-4">Event Types</h3>
            <div class="row">
              <div class="col-md-4 mb-4" v-for="(event, index) in eventTypes" :key="index">
                <div class="event-card h-100">
                  <img :src="event.image" :alt="event.name" class="img-fluid rounded-top" />
                  <div class="event-info p-3">
                    <h4>{{ event.name }}</h4>
                    <p>{{ event.description }}</p>
                    <ul class="feature-list small">
                      <li v-for="(feature, i) in event.features" :key="i">{{ feature }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="wedding-packages mb-5">
            <h3 class="text-center mb-4">Wedding Packages</h3>
            <div class="row">
              <div
                class="col-md-6 mb-4"
                v-for="(weddingPackage, index) in weddingPackages"
                :key="index"
              >
                <div class="package-card h-100 p-4 d-flex flex-column">
                  <h4 class="text-center">{{ weddingPackage.name }}</h4>
                  <p class="price text-center">{{ weddingPackage.price }}</p>
                  <ul class="feature-list flex-grow-1">
                    <li v-for="(item, i) in weddingPackage.inclusions" :key="i">{{ item }}</li>
                  </ul>
                  <div class="text-center mt-3">
                    <a
                      href="javascript:void(0)"
                      class="btn btn-outline-primary"
                      @click="navigateToContact"
                    >
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonials mb-5">
            <h3 class="text-center mb-4">Recent Events</h3>
            <div class="row">
              <div class="col-md-4 mb-4" v-for="(testimonial, index) in testimonials" :key="index">
                <div class="testimonial-card p-3 h-100">
                  <img
                    :src="testimonial.image"
                    :alt="testimonial.name"
                    class="img-fluid rounded mb-3"
                  />
                  <p class="quote">"{{ testimonial.quote }}"</p>
                  <p class="name">{{ testimonial.name }}</p>
                  <p class="event small">{{ testimonial.event }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="cta-section text-center py-5">
            <h3 class="mb-4">Start Planning Your Event</h3>
            <a
              href="javascript:void(0)"
              class="btn btn-primary btn-lg expand-btn"
              @click="navigateToContact"
            >
              Contact Our Events Team
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventTypes, weddingPackages, testimonials } from '../../models/data'

export default {
  name: 'EventsPage',
  data() {
    return {
      heroImage: new URL('@/assets/images/services/events-hero.jpg', import.meta.url).href,
      eventTypes,
      weddingPackages,
      testimonials,
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
      const elements = document.querySelectorAll('.event-card, .package-card, .testimonial-card')
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

.events-intro p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.event-card h4 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.event-card p {
  font-size: 1rem;
  line-height: 1.5;
}

.package-card h4 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.package-card .price {
  font-size: 1.2rem;
  color: #ff7e5f;
  margin-bottom: 1rem;
}

.testimonial-card .quote {
  font-size: 1rem;
  line-height: 1.5;
  font-style: italic;
}

.testimonial-card .name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

.testimonial-card .event {
  font-size: 0.9rem;
  color: #666;
}

.feature-list {
  list-style-type: none;
  padding-left: 0;
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

.event-card,
.package-card,
.testimonial-card {
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}

.event-card:hover,
.package-card:hover,
.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-outline-primary {
  color: #ff7e5f;
  border-color: #ff7e5f;
}

.btn-outline-primary:hover {
  background-color: #ff7e5f;
  color: white;
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

  .events-intro p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .event-card h4 {
    font-size: 1.3rem;
  }

  .event-card p {
    font-size: 0.95rem;
  }

  .package-card h4 {
    font-size: 1.3rem;
  }

  .package-card .price {
    font-size: 1.1rem;
  }

  .testimonial-card .quote {
    font-size: 0.95rem;
  }

  .testimonial-card .name {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-overlay h1 {
    font-size: 2rem;
  }

  .hero-overlay p {
    font-size: 1rem;
  }

  .events-intro p {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .event-card h4 {
    font-size: 1.2rem;
  }

  .event-card p {
    font-size: 0.9rem;
  }

  .package-card {
    padding: 1rem !important;
  }

  .package-card h4 {
    font-size: 1.2rem;
  }

  .package-card .price {
    font-size: 1rem;
  }

  .testimonial-card {
    padding: 1rem !important;
  }

  .testimonial-card .quote {
    font-size: 0.9rem;
  }

  .testimonial-card .name {
    font-size: 0.95rem;
  }

  .testimonial-card .event {
    font-size: 0.8rem;
  }

  .feature-list.small li {
    font-size: 0.85rem;
  }
}
</style>
