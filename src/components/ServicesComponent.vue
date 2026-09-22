<template>
  <section id="solutions" ref="sectionRef" class="section-mountain section-mountain--mesh">
    <h2 class="title" data-reveal="fade">{{ storeLang.languaje == 'en' ? 'What we do' : 'Qué hacemos' }}</h2>
    <p class="description" data-reveal="fade" style="--reveal-delay: 80ms">
      {{
        storeLang.languaje == 'en'
          ? 'We start from your business need, then design the right solution — not the other way around.'
          : 'Partimos de la necesidad de tu negocio y después diseñamos la solución adecuada — no al revés.'
      }}
    </p>
    <div class="cards-wrap">
      <div class="solutions-grid">
        <article
          v-for="(item, idx) in solutionCards"
          :key="item.id"
          :class="['solution-card', { featured: item.featured }]"
          data-reveal
          :style="{ '--reveal-delay': `${idx * 100}ms` }"
        >
          <i :class="['mdi', item.icon, 'solution-icon']" aria-hidden="true"></i>
          <h3 class="solution-title">
            {{ storeLang.languaje == 'en' ? item.titleEn : item.titleEs }}
          </h3>
          <p class="solution-body">
            {{ storeLang.languaje == 'en' ? item.bodyEn : item.bodyEs }}
          </p>
          <ul class="solution-tags">
            <li
              v-for="tag in storeLang.languaje == 'en' ? item.tagsEn : item.tagsEs"
              :key="tag"
            >
              {{ tag }}
            </li>
          </ul>
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

const solutionCards = [
  {
    id: 'software',
    icon: 'mdi-laptop-account',
    titleEs: 'Desarrollo de software',
    titleEn: 'Software development',
    bodyEs:
      'Creamos plataformas y sistemas a medida para digitalizar procesos, centralizar información y resolver necesidades concretas del negocio.',
    bodyEn:
      'We build custom platforms and systems to digitize processes, centralize information, and solve concrete business needs.',
    tagsEs: ['Plataformas web', 'Sistemas internos', 'APIs', 'Integraciones'],
    tagsEn: ['Web platforms', 'Internal systems', 'APIs', 'Integrations'],
    featured: true
  },
  {
    id: 'cybersecurity',
    icon: 'mdi-shield-lock-outline',
    titleEs: 'Consultoría en ciberseguridad',
    titleEn: 'Cybersecurity consulting',
    bodyEs:
      'Te acompañamos en identidad y acceso, seguridad de producto y gestión de vulnerabilidades para reducir riesgos y reforzar la postura de seguridad de tus sistemas.',
    bodyEn:
      'We support you with identity and access management, product security, and vulnerability management to reduce risk and strengthen your security posture.',
    tagsEs: ['IAM', 'Seguridad de producto', 'Gestión de vulnerabilidades'],
    tagsEn: ['Identity & access', 'Product security', 'Vulnerability management']
  },
  {
    id: 'ai',
    icon: 'mdi-brain',
    titleEs: 'Inteligencia Artificial',
    titleEn: 'Artificial Intelligence',
    bodyEs:
      'Exploramos e incorporamos capacidades de Inteligencia Artificial para desarrollar nuevas soluciones y aplicarlas donde realmente puedan aportar valor.',
    bodyEn:
      'We explore and incorporate AI capabilities to build new solutions and apply them where they can truly add value.',
    tagsEs: ['Asistentes', 'Modelos', 'Información', 'Automatización'],
    tagsEn: ['AI assistants', 'Model integration', 'Information', 'Automation']
  },
  {
    id: 'platform',
    icon: 'mdi-rocket-launch-outline',
    titleEs: 'Desarrollo de plataforma',
    titleEn: 'Platform development',
    bodyEs:
      'Agilizamos y establecemos un flujo claro y sencillo de despliegues y seguimiento de versiones para que tu equipo de software entregue con más confianza y menos fricción.',
    bodyEn:
      'We streamline and set up a clear, practical deployment flow and release tracking so your software team can ship with more confidence and less friction.',
    tagsEs: ['CI/CD', 'Despliegues', 'Versiones', 'DevOps'],
    tagsEn: ['CI/CD', 'Deployments', 'Release tracking', 'DevOps'],
    featured: true
  }
]
</script>

<style scoped>
#solutions {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    transparent 42%,
    rgba(0, 0, 0, 0.12) 100%
  );
  padding-bottom: 1rem;
}

#solutions .title,
#solutions .description,
#solutions .cards-wrap {
  position: relative;
  z-index: 1;
}

.title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.85rem, 4vw, 2.75rem);
  text-align: center;
  font-weight: 650;
  letter-spacing: -0.03em;
  padding: clamp(3.5rem, 8vw, 5.5rem) 16px 0;
  margin: 0;
  color: #f4f6fb;
}

.description {
  font-size: 1.05rem;
  margin: 12px auto 0;
  text-align: center;
  max-width: 38rem;
  padding: 0 16px;
  color: #c8c8c8;
  line-height: 1.6;
}

.cards-wrap {
  padding: 2.5rem 16px 5rem;
}

.solutions-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 16px;
  max-width: 1100px;
  margin: 0 auto;
}

.solution-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 0;
  padding: 1.5rem 1.35rem 1.25rem;
  border-radius: 20px;
  border: 1px solid var(--card-glass-border);
  background: var(--card-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.25s ease,
    box-shadow 0.35s ease;
}

.solution-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.32);
}

.solution-card.featured {
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.04) 100%);
}

.solution-icon {
  font-size: 36px;
  color: #d4d4d4;
  margin-bottom: 0.75rem;
}

.solution-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.35rem;
  font-weight: 650;
  margin: 0 0 0.6rem;
  color: #f4f6fb;
}

.solution-body {
  font-size: 0.98rem;
  line-height: 1.6;
  flex: 1;
  margin: 0 0 1rem;
  color: #b8b8b8;
}

.solution-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.solution-tags li {
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: #f5f5f5;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #262626;
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
}

@media screen and (min-width: 900px) {
  .solution-card.featured:first-child {
    grid-row: span 2;
  }
}

@media screen and (max-width: 899px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
