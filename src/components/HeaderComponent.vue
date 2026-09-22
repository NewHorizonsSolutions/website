<template>
  <header
    id="header"
    class="site-header"
    :class="{ 'site-header--scrolled': scrolled, 'site-header--open': mobileOpen }"
  >
    <div class="header-bar">
      <a class="brand" href="/#home" @click="closeMenu">
        <LogoMark class="brand-mark-wrap" />
        <span class="brand-name">New Horizons</span>
      </a>

      <nav class="nav-desktop" :aria-label="isEn ? 'Main navigation' : 'Navegación principal'">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          class="nav-link"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="header-actions">
        <div class="lang-switch" role="group" :aria-label="isEn ? 'Language' : 'Idioma'">
          <button
            type="button"
            class="lang-btn"
            :class="{ active: storeLang.languaje === 'es' }"
            @click="setLang('es')"
          >
            ES
          </button>
          <button
            type="button"
            class="lang-btn"
            :class="{ active: storeLang.languaje === 'en' }"
            @click="setLang('en')"
          >
            EN
          </button>
        </div>

        <a class="nav-cta" href="/#contact" @click="closeMenu">
          {{ isEn ? 'Contact' : 'Contacto' }}
        </a>

        <button
          type="button"
          class="menu-toggle"
          :aria-expanded="mobileOpen"
          :aria-label="mobileOpen ? (isEn ? 'Close menu' : 'Cerrar menú') : (isEn ? 'Open menu' : 'Abrir menú')"
          @click="toggleMenu"
        >
          <span class="menu-toggle__bar" aria-hidden="true"></span>
          <span class="menu-toggle__bar" aria-hidden="true"></span>
          <span class="menu-toggle__bar" aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <Transition name="mobile-nav">
      <nav
        v-if="mobileOpen"
        class="nav-mobile"
        :aria-label="isEn ? 'Mobile navigation' : 'Navegación mobile'"
      >
        <a
          v-for="item in navLinks"
          :key="'m-' + item.href"
          :href="item.href"
          class="nav-mobile-link"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <a class="nav-mobile-cta" href="/#contact" @click="closeMenu">
          {{ isEn ? 'Contact us' : 'Contactanos' }}
        </a>
      </nav>
    </Transition>

    <button
      v-if="mobileOpen"
      type="button"
      class="nav-backdrop"
      aria-label="Close menu"
      @click="closeMenu"
    ></button>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { store } from '../stores/languaje.js'
import LogoMark from './LogoMark.vue'

const storeLang = store()
const mobileOpen = ref(false)
const scrolled = ref(false)

const isEn = computed(() => storeLang.languaje === 'en')

const navLinks = computed(() => {
  if (isEn.value) {
    return [
      { href: '/#home', label: 'Home' },
      { href: '/#solutions', label: 'Solutions' },
      { href: '/#projects', label: 'Projects' },
      { href: '/#technologies', label: 'Tech' },
      { href: '/#aboutus', label: 'About' }
    ]
  }
  return [
    { href: '/#home', label: 'Inicio' },
    { href: '/#solutions', label: 'Soluciones' },
    { href: '/#projects', label: 'Proyectos' },
    { href: '/#technologies', label: 'Tecnologías' },
    { href: '/#aboutus', label: 'Nosotros' }
  ]
})

function setLang(lang) {
  storeLang.changeLanguaje(lang)
}

function toggleMenu() {
  mobileOpen.value = !mobileOpen.value
}

function closeMenu() {
  mobileOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none;
  padding: 0.65rem 1rem 0;
}

.header-bar {
  position: relative;
  z-index: 1002;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.65rem 1.25rem;
  background: var(--nav-glass);
  backdrop-filter: blur(20px) saturate(1.15);
  -webkit-backdrop-filter: blur(20px) saturate(1.15);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.22),
    0 1px 0 rgba(255, 255, 255, 0.04) inset;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.site-header--scrolled .header-bar {
  background: var(--nav-glass-scrolled);
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow:
    0 10px 36px rgba(0, 0, 0, 0.32),
    0 2px 8px rgba(0, 0, 0, 0.18),
    0 1px 0 rgba(255, 255, 255, 0.05) inset;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-mark-wrap {
  flex-shrink: 0;
}

.brand-name {
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  color: #f4f6fb;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  padding: 0.45rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(244, 246, 251, 0.78);
  text-decoration: none;
  border-radius: 999px;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.lang-switch {
  display: flex;
  padding: 3px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.lang-btn {
  border: none;
  background: transparent;
  color: rgba(244, 246, 251, 0.65);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.lang-btn.active {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  color: #0a0a0a;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  transition: background 0.2s ease, transform 0.15s ease;
}

.nav-cta:hover {
  background: #e5e5e5;
  color: #0a0a0a;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
}

.menu-toggle__bar {
  display: block;
  width: 18px;
  height: 2px;
  margin: 0 auto;
  background: #f4f6fb;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.site-header--open .menu-toggle__bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.site-header--open .menu-toggle__bar:nth-child(2) {
  opacity: 0;
}

.site-header--open .menu-toggle__bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-backdrop {
  pointer-events: auto;
  position: fixed;
  inset: 0;
  z-index: 999;
  border: none;
  background: rgba(0, 0, 0, 0.55);
  cursor: pointer;
}

.nav-mobile {
  pointer-events: auto;
  position: fixed;
  top: calc(0.65rem + 3.35rem + 0.5rem);
  left: 0;
  right: 0;
  z-index: 1001;
  margin: 0 1rem 0;
  padding: 0.75rem;
  border-radius: 16px;
  background: rgba(38, 46, 58, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
}

.nav-mobile-link {
  display: block;
  padding: 0.85rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #f4f6fb;
  text-decoration: none;
  border-radius: 12px;
  transition: background 0.2s ease;
}

.nav-mobile-link:hover {
  background: rgba(255, 255, 255, 0.06);
}

.nav-mobile-cta {
  margin-top: 0.5rem;
  text-align: center;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  color: #071018;
  background: #fafafa;
  color: #0a0a0a;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media screen and (max-width: 992px) {
  .nav-desktop {
    display: none;
  }

  .nav-cta {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}

@media screen and (max-width: 420px) {
  .site-header {
    padding: 0.5rem 0.65rem 0;
  }

  .brand-name {
    font-size: 0.9rem;
    letter-spacing: 0.02em;
  }

  .header-bar {
    padding: 0.55rem 0.85rem;
    border-radius: 1.25rem;
  }

  .nav-mobile {
    top: calc(0.5rem + 3.2rem + 0.45rem);
    margin: 0 0.65rem 0;
  }
}
</style>
