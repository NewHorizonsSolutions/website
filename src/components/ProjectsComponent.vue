<template>
  <section id="projects" ref="sectionRef" class="section-mountain">
    <div class="projects-inner">
      <header class="projects-head">
        <h2 class="title" data-reveal="fade">{{ isEn ? 'Projects we delivered' : 'Casos de éxito' }}</h2>
        <p class="description" data-reveal="fade" style="--reveal-delay: 80ms">
          {{
            isEn
              ? 'Real work with companies that trusted us. We add detail to each case as we publish it.'
              : 'Trabajos reales con empresas que confiaron en nosotros. Completamos el detalle de cada caso a medida que lo publicamos.'
          }}
        </p>
      </header>

      <div class="projects-grid">
      <article
        v-for="(project, idx) in projects"
        :key="project.id"
        class="project-card"
        data-reveal
        :style="{ '--reveal-delay': `${idx * 90}ms` }"
      >
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
import { computed, ref } from 'vue'
import { store } from '../stores/languaje.js'
import { projects } from '../data/projects.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const sectionRef = ref(null)
useScrollReveal(sectionRef)

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
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#projects {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.02) 35%,
    transparent 100%
  );
  padding: 4.5rem 0 5rem;
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
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.85rem, 4vw, 2.75rem);
  letter-spacing: -0.03em;
  text-align: center;
  font-weight: 650;
  margin: 0;
  color: #f4f6fb;
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
  background: #f7f8fc;
  color: #111;
  border-radius: 20px;
  padding: 28px 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.38);
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
