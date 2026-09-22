<template>
  <section id="projects">
    <div class="projects-inner">
      <header class="projects-head">
        <h2 class="title">{{ isEn ? 'Projects we delivered' : 'Casos de éxito' }}</h2>
        <p class="description">
          {{
            isEn
              ? 'Real work with companies that trusted us. We add detail to each case as we publish it.'
              : 'Trabajos reales con empresas que confiaron en nosotros. Completamos el detalle de cada caso a medida que lo publicamos.'
          }}
        </p>
      </header>

      <div class="projects-grid">
      <article v-for="project in projects" :key="project.id" class="project-card tag">
        <div class="project-card__header">
          <div class="project-logo-wrap">
            <img
              :src="project.logo"
              :alt="project.clientName"
              loading="lazy"
              :class="project.colored ? 'logo-colored' : 'logo-monochrome'"
            />
          </div>
          <h3 class="project-client">{{ project.clientName }}</h3>
        </div>

        <dl class="project-details">
          <template v-if="project.need">
            <dt>{{ isEn ? 'Need' : 'Necesidad' }}</dt>
            <dd>{{ project.need }}</dd>
          </template>
          <template v-if="project.solution">
            <dt>{{ isEn ? 'Solution' : 'Solución' }}</dt>
            <dd>{{ project.solution }}</dd>
          </template>
          <template v-if="project.technologies?.length">
            <dt>{{ isEn ? 'Technologies' : 'Tecnologías' }}</dt>
            <dd>{{ project.technologies.join(' · ') }}</dd>
          </template>
          <template v-if="project.result">
            <dt>{{ isEn ? 'Outcome' : 'Resultado' }}</dt>
            <dd>{{ project.result }}</dd>
          </template>
        </dl>

      </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '../stores/languaje.js'
import { projects } from '../data/projects.js'
import $ from 'jquery'

const storeLang = store()
const isEn = computed(() => storeLang.languaje === 'en')

function hasCaseDetails(project) {
  return (
    project.need ||
    project.solution ||
    (project.technologies && project.technologies.length > 0) ||
    project.result
  )
}

$(document).on('scroll', function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $('#projects .tag')

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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#projects {
  background: linear-gradient(to top, #020202, #414345);
  padding: 3rem 0 4rem;
  margin-top: 0;
}

.projects-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
}

.projects-head {
  text-align: center;
  padding: 0 0 2.5rem;
}

.title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  text-align: center;
  font-weight: bold;
  margin: 0;
  color: #fff;
}

.description {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.875rem, 2.5vw, 1.0625rem);
  letter-spacing: 1px;
  margin: 12px auto 0;
  text-align: center;
  max-width: 42rem;
  color: rgba(255, 255, 255, 0.82);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: 24px;
  box-sizing: border-box;
}

.project-card {
  background: #fff;
  color: #000;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 1.2s ease;
}

.project-card.visible {
  opacity: 1;
  transform: translate(0, 0);
}

.project-card__header {
  text-align: center;
  margin-bottom: 16px;
}

.project-logo-wrap {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.project-logo-wrap img {
  max-width: 180px;
  max-height: 64px;
  object-fit: contain;
}

.project-logo-wrap img.logo-monochrome {
  filter: brightness(0);
}

.project-client {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  color: #000;
}

.project-details {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: #000;
}

.project-details dt {
  font-weight: 600;
  margin-top: 12px;
  color: #000;
}

.project-details dd {
  margin: 4px 0 0;
  color: #222;
}

.project-pending {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #222;
  margin: 8px 0 0;
  line-height: 1.5;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
}

@media screen and (max-width: 767px) {
  #projects {
    padding-top: 2.5rem;
  }

  .projects-inner {
    padding: 0 12px;
  }

  .projects-head {
    padding-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .project-card {
    padding: 22px 18px;
  }
}
</style>
