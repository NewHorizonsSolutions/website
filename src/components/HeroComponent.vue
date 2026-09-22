<template>
  <section id="home" class="hero">
    <div class="hero-mesh-bg mesh-dots" aria-hidden="true"></div>
    <div class="hero-mesh-fade" aria-hidden="true"></div>
    <div class="hero-shell">
      <div class="hero-inner">
      <p class="eyebrow">
        {{
          storeLang.languaje == 'en'
            ? 'Coding · Software · Security · Platforms'
            : 'Coding · Software · Seguridad · Plataformas'
        }}
      </p>
      <h1 class="hero-title">
        {{
          storeLang.languaje == 'en'
            ? 'We drive business with technology.'
            : 'Impulsamos negocios con tecnología.'
        }}
      </h1>
      <p class="hero-lead" id="description">
        {{
          storeLang.languaje == 'en'
            ? 'We design and build digital solutions, optimize processes, and adopt new technologies to support your business as it evolves.'
            : 'Diseñamos y desarrollamos soluciones digitales, optimizamos procesos y sumamos nuevas tecnologías para acompañar la evolución de tu negocio.'
        }}
      </p>
      <div class="hero-actions">
        <a class="cta cta-primary" href="/#contact">{{
          storeLang.languaje == 'en' ? 'Tell us about your project' : 'Contanos tu proyecto'
        }}</a>
        <a class="cta cta-ghost" href="/#solutions">{{
          storeLang.languaje == 'en' ? 'Explore our solutions' : 'Conocé nuestras soluciones'
        }}</a>
      </div>
      </div>

      <HeroTechVisual class="hero-visual" />
    </div>
  </section>
</template>

<script setup>
import { store } from '../stores/languaje.js'
import HeroTechVisual from './HeroTechVisual.vue'

const storeLang = store()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow-x: clip;
  overflow-y: visible;
  padding: 7.5rem 1.25rem clamp(5rem, 10vh, 7rem);
  background: transparent;
}

.hero-shell {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  width: min(1200px, 100%);
  margin: 0 auto;
}

.hero-mesh-bg {
  position: absolute;
  inset: 0;
}

.hero-mesh-fade {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 45% at 78% 38%, rgba(96, 165, 250, 0.1) 0%, transparent 62%),
    linear-gradient(105deg, rgba(20, 28, 40, 0.82) 0%, rgba(20, 28, 40, 0.5) 38%, rgba(20, 28, 40, 0.12) 58%, rgba(20, 28, 40, 0.28) 100%),
    linear-gradient(180deg, rgba(20, 28, 40, 0.4) 0%, transparent 38%, rgba(20, 24, 32, 0.45) 92%, transparent 100%);
  pointer-events: none;
}

.hero-inner {
  max-width: 40rem;
}

.hero-visual {
  width: 100%;
  overflow: visible;
  align-self: end;
}

.eyebrow {
  margin: 0 0 1.25rem;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(191, 219, 254, 0.92);
  font-weight: 600;
}

.eyebrow::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 0.55rem;
  border-radius: 50%;
  background: #60a5fa;
  box-shadow: 0 0 12px rgba(96, 165, 250, 0.65);
  vertical-align: middle;
}

.hero-title {
  margin: 0;
  max-width: 14ch;
  font-family: 'Outfit', sans-serif;
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 1.02;
  font-size: clamp(2.6rem, 6.2vw, 5.4rem);
  color: #fafafa;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.45);
}

.hero-lead {
  margin: 1.75rem 0 0;
  max-width: 38rem;
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.7;
  color: rgba(250, 250, 250, 0.82);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.7rem 1.25rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.cta-primary {
  color: #0a0a0a;
  background: #fafafa;
  border: 1px solid #fafafa;
}

.cta-primary:hover {
  transform: translateY(-2px);
  background: #e5e5e5;
  color: #0a0a0a;
}

.cta-ghost {
  color: #fafafa;
  border: 1px solid rgba(96, 165, 250, 0.45);
  background: rgba(59, 130, 246, 0.08);
}

.cta-ghost:hover {
  border-color: rgba(147, 197, 253, 0.85);
  background: rgba(59, 130, 246, 0.14);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.18);
}

@media screen and (max-width: 991px) {
  .hero-shell {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    order: -1;
    max-width: 22rem;
    margin: 0 auto;
  }
}

@media screen and (max-width: 767px) {
  .hero {
    align-items: flex-end;
    padding-bottom: 4rem;
  }

  .hero-title {
    max-width: none;
    font-size: clamp(2.15rem, 10vw, 3rem);
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    max-width: 22rem;
  }

  .hero-visual {
    display: none;
  }
}
</style>
