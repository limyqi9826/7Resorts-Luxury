<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"> 7<span>Resorts</span> </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
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
.navbar {
  width: 100%;
  max-width: 100vw;
}

.container-fluid {
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 100%;
}

.navbar-collapse {
  width: 100%;
}

.navbar-brand {
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  font-size: 1.3rem;
}

.navbar-brand span {
  color: gray;
}

.nav-link {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  margin: 0 6px;
  color: gray;
  white-space: nowrap;
  padding: 0.5rem 0.75rem;
  transition:
    color 0.3s ease,
    font-size 0.3s ease;
}

.nav-link:hover {
  color: black;
  font-size: 15px;
}

@media (max-width: 768px) {
  .navbar-brand {
    font-size: 1.1rem;
  }

  .nav-link {
    font-size: 13px;
    margin: 0 4px;
    padding: 0.4rem 0.5rem;
  }
}

@media (max-width: 576px) {
  .navbar-brand {
    font-size: 1rem;
  }

  .nav-link {
    font-size: 12.5px;
    padding: 0.3rem 0.5rem;
    margin: 2px 0;
    text-align: center;
    display: block;
  }

  .navbar-nav {
    align-items: center;
    width: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    width: 100%;
    display: block;
  }

  .navbar-toggler {
    margin-left: auto;
  }
}
</style>
