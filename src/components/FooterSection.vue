<template>
  <footer class="bg-light text-dark pt-5 pb-3 mt-5">
    <div class="container text-center">
      <h5 class="text-uppercase mb-4">Follow Us</h5>

      <!-- Social Icons -->
      <div class="d-flex justify-content-center gap-4 mb-3">
        <a
          v-for="social in socialLinks"
          :key="social.icon"
          href="javascript:void(0)"
          class="text-dark fs-4"
        >
          <i :class="'fab ' + social.icon"></i>
        </a>
      </div>
    </div>

    <!-- Bottom Text -->
    <div class="text-center pt-3 border-top border-dark">
      <small>© 2025 7Resorts Maldives. All rights reserved.</small><br />
      <small
        >This fictional resort website was designed and coded as a portfolio project. All content is
        original or sourced from royalty-free providers.</small
      >
    </div>
  </footer>
</template>

<script>
import { socialLinks } from '../models/data'

export default {
  name: 'FooterSection',
  data() {
    return {
      socialLinks,
    }
  },
}
</script>

<style scoped>
footer {
  font-size: 0.95rem;
  text-align: center;
  background-color: #f8f9fa;
}

.fab {
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.fab:hover {
  transform: translateY(-5px);
  color: #ff7e5f !important;
}

@media (max-width: 768px) {
  footer {
    font-size: 0.85rem;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  }

  .fs-4 {
    font-size: 1.25rem !important;
  }

  .gap-4 {
    gap: 1rem !important;
  }
}

@media (max-width: 480px) {
  footer {
    font-size: 0.8rem;
  }

  .fs-4 {
    font-size: 1rem !important;
  }

  .gap-4 {
    gap: 0.75rem !important;
  }
}
</style>
