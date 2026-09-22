<script setup>
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import { store } from './stores/languaje.js'
import { applyPageSeo } from './seo.js'

const langStore = store()
const { languaje } = storeToRefs(langStore)

onMounted(() => applyPageSeo(languaje.value))
watch(languaje, (lang) => applyPageSeo(lang))
</script>

<template>
  <HeaderComponent />
  <div class="site-canvas">
    <div class="site-mountain-ambient" aria-hidden="true"></div>
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>
<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
