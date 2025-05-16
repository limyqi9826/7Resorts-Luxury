<template>
  <div id="contact" class="section">
    <h1 class="contact" ref="contactTitle">Contact <span>Us</span></h1>
    <div class="container my-5">
      <div class="row g-4">
        <!-- Left Card - Details -->
        <div class="col-lg-6" ref="contactInfo">
          <div class="card shadow h-100">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <p class="list-title">Location</p>
                  <p class="list-body">
                    7Resorts<br />
                    Private Island, North Malé Atoll<br />
                    Maldives (Fictional Location)
                  </p>
                </li>
                <li class="list-group-item">
                  <p class="list-title">Email Us</p>
                  <p class="list-body">
                    info@7resorts-demo.com<br />
                    bookings@7resorts-demo.com
                  </p>
                </li>
                <li class="list-group-item">
                  <p class="list-title">Call Us</p>
                  <p class="list-body">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right Card - Form -->
        <div class="col-lg-6" ref="contactForm">
          <div class="card shadow h-100">
            <div class="card-body">
              <h4 class="card-title text-center mb-3">Contact Form</h4>
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="name" class="form-label">Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="formData.name"
                    :class="{ 'is-invalid': errors.name }"
                    placeholder="Enter your name"
                    required
                  />
                  <div v-if="errors.name" class="invalid-feedback">Name is required</div>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="formData.email"
                    :class="{ 'is-invalid': errors.email }"
                    placeholder="Enter your email"
                    required
                  />
                  <div v-if="errors.email" class="invalid-feedback">Valid email is required</div>
                </div>
                <div class="mb-3">
                  <label for="purpose" class="form-label">Purpose:</label>
                  <select class="form-select" id="purpose" v-model="formData.purpose" required>
                    <option value="" disabled selected>Select Department</option>
                    <option value="Reservations">Reservations</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Events/Weddings">Events/Weddings</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message:</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="4"
                    v-model="formData.message"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                    <span v-if="isSubmitting">Sending...</span>
                    <span v-else>Send Message</span>
                  </button>
                </div>
              </form>
              <div v-if="formStatus" class="alert" :class="formStatus.type">
                {{ formStatus.message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ContactSection',
  setup() {
    const contactTitle = ref(null)
    const contactInfo = ref(null)
    const contactForm = ref(null)

    const formData = ref({
      name: '',
      email: '',
      purpose: '',
      message: '',
    })

    const errors = ref({
      name: false,
      email: false,
    })

    const isSubmitting = ref(false)
    const formStatus = ref(null)

    const validateForm = () => {
      errors.value.name = !formData.value.name
      errors.value.email = !formData.value.email || !/\S+@\S+\.\S+/.test(formData.value.email)
      return !Object.values(errors.value).includes(true)
    }

    const submitForm = () => {
      if (!validateForm()) {
        formStatus.value = { type: 'alert-danger', message: 'Please fill in all fields correctly.' }
        return
      }

      isSubmitting.value = true
      setTimeout(() => {
        formStatus.value = {
          type: 'alert-success',
          message: 'Thank you for your message! We will get back to you soon.',
        }
        formData.value = { name: '', email: '', purpose: '', message: '' }
        isSubmitting.value = false
      }, 2000)
    }

    onMounted(() => {
      gsap.from(contactTitle.value, {
        scrollTrigger: {
          trigger: contactTitle.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })

      gsap.from(contactInfo.value, {
        scrollTrigger: {
          trigger: contactInfo.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: -100,
        opacity: 0,
        duration: 1,
      })

      gsap.from(contactForm.value, {
        scrollTrigger: {
          trigger: contactForm.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: 100,
        opacity: 0,
        duration: 1,
      })
    })

    return {
      contactTitle,
      contactInfo,
      contactForm,
      formData,
      submitForm,
      errors,
      formStatus,
      isSubmitting,
    }
  },
}
</script>

<style scoped>
.contact {
  margin: 0 0 50px 0;
  text-align: center;
}

.contact span {
  color: gray;
}

.list-title {
  font-weight: 500;
  text-transform: uppercase;
  margin: 8px 0px;
}

.list-body {
  margin-top: 12px;
}

.card {
  border: none;
  border-radius: 10px;
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

.invalid-feedback {
  display: block;
  color: red;
}

.alert {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
    max-width: 100%;
    margin-right: 0;
    margin-left: 0;
  }

  .section {
    overflow-x: hidden;
    width: 100%;
  }

  .row {
    margin-right: 0;
    margin-left: 0;
  }

  .col-lg-6 {
    padding-right: 0;
    padding-left: 0;
  }

  .card {
    margin-bottom: 20px;
    margin-right: 0;
    margin-left: 0;
  }

  .list-group-item {
    padding: 15px;
  }

  .list-title {
    margin: 5px 0;
  }

  .list-body {
    margin-top: 8px;
    margin-bottom: 5px;
  }

  .card-body {
    padding: 20px;
  }

  .mb-3 {
    margin-bottom: 1rem !important;
  }
}
</style>
