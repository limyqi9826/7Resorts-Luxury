<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"> 7<span>Resorts</span> </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="item in navItems" :key="item.id">
            <a class="nav-link" role="button" @click="scrollToSection(item.id)"> {{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { navItems } from '../models/data'

export default {
  name: 'NavBar',
  data() {
    return {
      navItems,
    }
  },
  methods: {
    scrollToSection(id) {
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 70,
            behavior: 'smooth',
          })
        }

        const navbarToggler = document.querySelector('.navbar-toggler')
        if (navbarToggler) {
          navbarToggler.click()
        }
      }, 100)
    },
  },
}
</script>

<style scoped>
.navbar-brand {
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
}

.navbar-brand span {
  color: gray;
}

.nav-link {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  margin: 0px 2px;
  color: gray;
  transition:
    color 0.3s,
    font-size 0.3s;
}

.nav-link:hover {
  color: black;
  font-size: 15px;
}
</style>
