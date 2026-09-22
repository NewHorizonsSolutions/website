<template>
  <section id="aboutus" ref="sectionRef" class="section-mountain">
    <div class="about-inner">
      <header class="about-head">
        <h2 data-reveal="fade">{{ storeLang.languaje == 'en' ? 'About Us' : 'Nosotros' }}</h2>
        <p data-reveal="fade" style="--reveal-delay: 80ms">
          {{
            storeLang.languaje == 'en'
              ? 'New Horizons Solutions is a technology partner based in Buenos Aires. We build custom software, platform delivery practices, and cybersecurity consulting — working closely with each client to understand how their business operates before we build.'
              : 'New Horizons Solutions es un partner tecnológico con base en Buenos Aires. Desarrollamos software a medida, plataformas de despliegue y consultoría en ciberseguridad — trabajando cerca de cada cliente para entender cómo opera su negocio antes de construir.'
          }}
        </p>
      </header>

      <div class="about-grid">
        <article
          v-for="(block, idx) in blocks"
          :key="block.id"
          class="about-card"
          data-reveal
          :style="{ '--reveal-delay': `${idx * 110}ms` }"
        >
          <span :class="['mdi', block.icon, 'about-icon']" aria-hidden="true"></span>
          <h3>{{ storeLang.languaje == 'en' ? block.titleEn : block.titleEs }}</h3>
          <p>{{ storeLang.languaje == 'en' ? block.textEn : block.textEs }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../stores/languaje.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const storeLang = store()
const sectionRef = ref(null)
useScrollReveal(sectionRef)

const blocks = [
  {
    id: 'partner',
    icon: 'mdi-handshake-outline',
    titleEs: 'Cómo acompañamos',
    titleEn: 'How we partner',
    textEs:
      'Buscamos relaciones de largo plazo: comunicación clara, alcances realistas y soluciones que puedan crecer con vos. Combinamos mirada de producto, ingeniería y operación para que la tecnología acompañe el día a día.',
    textEn:
      'We aim for long-term relationships: clear communication, realistic scopes, and solutions that can grow with you. We combine product thinking, engineering, and operations so technology supports daily work.'
  },
  {
    id: 'capabilities',
    icon: 'mdi-layers-triple-outline',
    titleEs: 'Capacidades',
    titleEn: 'Our capabilities',
    textEs:
      'Equipo multidisciplinario: análisis, UX, desarrollo, integraciones, cloud y herramientas emergentes, incluida IA. Nos actualizamos porque nuestros clientes necesitan soluciones útiles en el tiempo.',
    textEn:
      'Multidisciplinary team: analysis, UX, development, integrations, cloud, and emerging tools including AI. We stay up to date because our clients need solutions that remain useful over time.'
  },
  {
    id: 'focus',
    icon: 'mdi-target',
    titleEs: 'Enfoque',
    titleEn: 'Our focus',
    textEs:
      'Priorizamos impacto real: menos promesas vacías, más entregas medibles, seguridad desde el diseño y plataformas que tu equipo pueda operar con confianza.',
    textEn:
      'We prioritize real impact: fewer empty promises, more measurable delivery, security by design, and platforms your team can operate with confidence.'
  }
]
</script>

<style scoped>
#aboutus {
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
  padding: 4.5rem 20px 5rem;
}

.about-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.about-head {
  text-align: center;
  max-width: 46rem;
  margin: 0 auto 2.5rem;
}

.about-head h2 {
  margin: 0;
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.85rem, 4vw, 2.75rem);
  letter-spacing: -0.03em;
  color: #f4f6fb;
}

.about-head p {
  margin: 1rem 0 0;
  line-height: 1.65;
  color: rgba(244, 246, 251, 0.74);
  font-size: 1.02rem;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.about-card {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.035);
  padding: 1.35rem 1.2rem 1.4rem;
}

.about-icon {
  font-size: 2rem;
  color: #d4d4d4;
  display: block;
  margin-bottom: 0.75rem;
}

.about-card h3 {
  margin: 0 0 0.6rem;
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  color: #f4f6fb;
}

.about-card p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(244, 246, 251, 0.72);
}

@media screen and (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    max-width: 28rem;
    margin: 0 auto;
  }
}
</style>
