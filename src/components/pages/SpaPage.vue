<template>
  <div class="service-page">
    <div class="hero-section">
      <img :src="heroImage" alt="Luxury Spa" class="hero-image" />
      <div class="hero-overlay">
        <h1>Serenity Spa</h1>
        <p>Rejuvenate your senses in our overwater sanctuary</p>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-center mb-5">Spa Experiences</h2>

          <div class="spa-intro text-center mb-5">
            <p>
              Our award-winning spa combines ancient healing traditions with modern techniques in
              stunning overwater treatment rooms. Let the sound of gentle waves enhance your journey
              to complete relaxation.
            </p>
          </div>

          <div class="signature-treatments mb-5">
            <h3 class="text-center mb-4">Signature Treatments</h3>
            <div class="row">
              <div
                class="col-md-6 mb-4"
                v-for="(treatment, index) in signatureTreatments"
                :key="index"
              >
                <div class="treatment-card h-100">
                  <img :src="treatment.image" :alt="treatment.name" class="img-fluid rounded-top" />
                  <div class="treatment-info p-4">
                    <h4>{{ treatment.name }}</h4>
                    <p class="duration">{{ treatment.duration }} minutes</p>
                    <p>{{ treatment.description }}</p>
                    <p class="price">{{ treatment.price }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="spa-facilities mb-5">
            <h3 class="text-center mb-4">Spa Facilities</h3>
            <div class="row">
              <div class="col-md-4 mb-4" v-for="(facility, index) in facilities" :key="index">
                <div class="facility-card p-3 h-100 text-center">
                  <i :class="facility.icon" class="facility-icon mb-3"></i>
                  <h5>{{ facility.name }}</h5>
                  <p class="small">{{ facility.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="cta-section text-center py-5">
            <h3 class="mb-4">Begin Your Wellness Journey</h3>
            <a
              href="javascript:void(0)"
              class="btn btn-primary btn-lg expand-btn"
              @click="navigateToContact"
            >
              Book Your Treatment
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signatureTreatments, facilities } from '../../models/data'

export default {
  name: 'SpaPage',
  data() {
    return {
      heroImage: new URL('@/assets/images/services/spa-hero.jpg', import.meta.url).href,
      signatureTreatments,
      facilities,
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

.spa-intro p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.treatment-info h4 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.treatment-info p {
  font-size: 1rem;
  line-height: 1.5;
}

.treatment-info .duration {
  font-size: 0.95rem;
}

.treatment-info .price {
  font-size: 1.1rem;
}

.facility-card h5 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.facility-card p {
  font-size: 0.9rem;
  line-height: 1.4;
}

.facility-icon {
  font-size: 2rem;
  color: #ff7e5f;
  background: rgba(255, 126, 95, 0.1);
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  margin: 0 auto;
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

.treatment-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.treatment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.treatment-info {
  background: white;
}

@media (max-width: 768px) {
  .hero-overlay h1 {
    font-size: 2.5rem;
  }

  .hero-overlay p {
    font-size: 1.1rem;
  }

  .spa-intro p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .treatment-info h4 {
    font-size: 1.3rem;
  }

  .treatment-info p {
    font-size: 0.95rem;
  }

  .treatment-info .duration {
    font-size: 0.9rem;
  }

  .treatment-info .price {
    font-size: 1rem;
  }

  .facility-card h5 {
    font-size: 1.1rem;
  }

  .facility-card p {
    font-size: 0.85rem;
  }

  .facility-icon {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
}

@media (max-width: 480px) {
  .hero-overlay h1 {
    font-size: 2rem;
  }

  .hero-overlay p {
    font-size: 1rem;
  }

  .spa-intro p {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .treatment-info {
    padding: 1rem !important;
  }

  .treatment-info h4 {
    font-size: 1.2rem;
  }

  .treatment-info p {
    font-size: 0.9rem;
  }

  .treatment-info .duration {
    font-size: 0.85rem;
  }

  .treatment-info .price {
    font-size: 0.95rem;
  }

  .facility-card {
    padding: 1rem !important;
  }

  .facility-card h5 {
    font-size: 1rem;
  }

  .facility-card p {
    font-size: 0.8rem;
  }

  .facility-icon {
    font-size: 1.3rem;
    width: 45px;
    height: 45px;
    line-height: 45px;
  }
}
</style>
