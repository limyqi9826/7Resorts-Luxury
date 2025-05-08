<template>
  <div id="service" class="section">
    <h1 class="service" ref="serviceTitle">Our <span>Services</span></h1>
    <div id="tab" class="container my-5">
      <div class="row">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-lg-4 col-md-6 col-12 d-flex justify-content-center"
          :ref="
            (el) => {
              if (el) serviceCards[index] = el
            }
          "
        >
          <div class="card service-card">
            <img :src="service.image" class="card-img-top" :alt="service.title" />
            <div class="card-body text-center">
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text">{{ service.description }}</p>
              <router-link :to="service.route" class="btn btn-primary">{{
                service.buttonText
              }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from '../models/data'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: 'ServicesSection',
  setup() {
    const serviceTitle = ref(null)
    const serviceCards = ref([])

    const servicesWithRoutes = services.map((service) => ({
      ...service,
      route: service.link,
    }))

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger)

      gsap.from(serviceTitle.value, {
        scrollTrigger: {
          trigger: serviceTitle.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })

      serviceCards.value.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: 0.1 * index,
          ease: 'easeOutQuad',
        })
      })
    })

    return {
      serviceTitle,
      serviceCards,
      services: servicesWithRoutes,
    }
  },
}
</script>

<style scoped>
.service {
  margin: 0 0 50px 0;
  text-align: center;
  font-size: 2rem;
}

.service span {
  color: gray;
}

.card {
  margin-bottom: 30px;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  max-width: 350px;
}

.service-card:hover {
  transform: scale(1.05);
  z-index: 1;
}

.card-text {
  font-size: 14px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.btn {
  position: relative;
  overflow: hidden;
  color: white;
  border: 1px solid #ff7e5f;
  padding: 10px 25px;
  background: linear-gradient(120deg, #ff7e5f, #feb47b, #ff7e5f);
  border-radius: 5px;
  z-index: 1;
  transition: color 0.3s ease;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(120deg, #ff7e5f, #feb47b, #ff7e5f);
  transition: all 0.5s ease;
  z-index: -1;
}

.btn:hover::before {
  left: 0;
}

.btn:hover {
  border: 1px solid #ff7e5f;
  color: white;
}

@media (max-width: 768px) {
  .service {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .card {
    max-width: 90%;
  }

  .card-text {
    font-size: 13px;
  }

  .btn {
    font-size: 0.85rem;
    padding: 8px 20px;
  }
}

@media (max-width: 480px) {
  .card {
    max-width: 100%;
  }

  .card-text {
    font-size: 12px;
  }

  .btn {
    font-size: 0.8rem;
    padding: 8px 18px;
  }
}
</style>
