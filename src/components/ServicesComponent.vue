<template>
  <section id="solutions">
    <h2 class="title">{{ storeLang.languaje == 'en' ? 'What we do' : 'Qué hacemos' }}</h2>
    <p class="description">
      {{
        storeLang.languaje == 'en'
          ? 'We start from your business need, then design the right solution — not the other way around.'
          : 'Partimos de la necesidad de tu negocio y después diseñamos la solución adecuada — no al revés.'
      }}
    </p>
    <div class="cards-wrap">
      <div class="solutions-grid">
        <article
          v-for="item in solutionCards"
          :key="item.id"
          class="tag box--gradient solution-card platinum"
        >
          <i :class="['mdi', item.icon, 'solution-icon']" aria-hidden="true"></i>
          <h3 class="solution-title">
            {{ storeLang.languaje == 'en' ? item.titleEn : item.titleEs }}
          </h3>
          <p class="solution-body">
            {{ storeLang.languaje == 'en' ? item.bodyEn : item.bodyEs }}
          </p>
          <p class="solution-tags">
            {{ storeLang.languaje == 'en' ? item.tagsEn : item.tagsEs }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { store } from '../stores/languaje.js'
import $ from 'jquery'

const storeLang = store()

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
    tagsEs: 'Plataformas web · Sistemas internos · APIs · Integraciones',
    tagsEn: 'Web platforms · Internal systems · APIs · Integrations'
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
    tagsEs: 'IAM · Seguridad de producto · Gestión de vulnerabilidades',
    tagsEn: 'Identity & access management · Product security · Vulnerability management'
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
    tagsEs:
      'Asistentes con IA · Integración con modelos · Procesamiento de información · Automatización inteligente',
    tagsEn: 'AI assistants · Model integration · Information processing · Smarter automation'
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
    tagsEs: 'CI/CD · Despliegues · Seguimiento de versiones · DevOps',
    tagsEn: 'CI/CD · Deployments · Release tracking · DevOps'
  }
]

$(document).on('scroll', function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $('#solutions .tag')

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass('visible')
    } else {
      $(tag).removeClass('visible')
    }
  }
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#solutions {
  background: url('/mountains-bg.jpg') no-repeat center;
  background-size: cover;
  height: fit-content;
}

.title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  text-align: center;
  font-weight: bold;
  padding: clamp(3rem, 10vw, 5rem) 16px 0;
  color: black;
}

.description {
  font-size: clamp(0.875rem, 2.5vw, 1.0625rem);
  letter-spacing: 1px;
  margin: 12px auto 0;
  text-align: center;
  max-width: 40rem;
  padding: 0 16px;
}

.cards-wrap {
  padding: 48px 16px clamp(3.5rem, 10vw, 6rem);
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.solution-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 340px;
  margin: 0;
  padding: 1.5rem 1.25rem 1.25rem;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
  background: linear-gradient(to bottom, #e8e9ef, #eee, #e8e9f1);

  &:after {
    content: '';
    top: 0;
    transform: translateX(100%) rotate(30deg);
    width: 300%;
    height: 300%;
    position: absolute;
    z-index: 1;
    animation: shine 3s infinite ease-in;
    pointer-events: none;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(128, 186, 232, 0) 100%
    );
  }
}

.solution-icon {
  font-size: 52px;
  color: #1b1b1b;
  margin: 0.25rem 0 0.5rem;
  position: relative;
  z-index: 2;
}

.solution-title {
  font-size: 1.15rem;
  font-weight: bold;
  margin: 0 0 0.75rem;
  position: relative;
  z-index: 2;
}

.solution-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.55;
  flex: 1;
  margin: 0 0 0.75rem;
  position: relative;
  z-index: 2;
}

.solution-tags {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  letter-spacing: 0.4px;
  color: #444;
  margin: 0;
  line-height: 1.45;
  position: relative;
  z-index: 2;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(30deg);
  }
  80% {
    transform: translateX(-100%) translateY(-100%) rotate(30deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(30deg);
  }
}

.tag {
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 3s;
}

.tag.visible {
  opacity: 1;
  transform: translate(0, 0);
}

@media screen and (max-width: 767px) {
  .solutions-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 22rem;
  }

  .solution-card {
    min-height: unset;
    padding: 1.35rem 1rem 1.15rem;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
  }

  .solution-icon {
    font-size: 44px;
  }

  .solution-body {
    font-size: 14px;
  }
}
</style>
