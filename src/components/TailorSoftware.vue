<template>
  <section id="process" ref="sectionRef" class="section-mountain">
    <h2 class="section-title" data-reveal="fade">
      {{ storeLang.languaje == 'en' ? 'How we work' : 'Cómo trabajamos' }}
    </h2>
    <p class="section-lead" data-reveal="fade" style="--reveal-delay: 80ms">
      {{
        storeLang.languaje == 'en'
          ? 'A clear path from your need to a solution in production — with communication at every step.'
          : 'Un camino claro desde tu necesidad hasta una solución en producción — con comunicación en cada etapa.'
      }}
    </p>

    <ol class="process-steps">
      <li
        v-for="(step, index) in steps"
        :key="step.id"
        class="process-step"
        data-reveal
        :style="{ '--reveal-delay': `${index * 100}ms` }"
      >
        <span class="process-step__num">{{ index + 1 }}</span>
        <div class="process-step__body">
          <h3>{{ storeLang.languaje == 'en' ? step.titleEn : step.titleEs }}</h3>
          <p>{{ storeLang.languaje == 'en' ? step.textEn : step.textEs }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../stores/languaje.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const storeLang = store()
const sectionRef = ref(null)
useScrollReveal(sectionRef)

const steps = [
  {
    id: 'understand',
    titleEs: 'Entendemos',
    titleEn: 'Understand',
    textEs:
      'Reuniones con tu equipo, mapeo de procesos actuales y definición de objetivos, plazos y prioridades para acordar qué problema resolvemos primero.',
    textEn:
      'Meetings with your team, mapping current processes, and defining goals, timelines, and priorities so we agree on what to solve first.'
  },
  {
    id: 'design',
    titleEs: 'Diseñamos',
    titleEn: 'Design',
    textEs:
      'Arquitectura, alcance funcional, prototipos cuando hace falta y plan de trabajo claro antes de escribir código en serio.',
    textEn:
      'Architecture, functional scope, prototypes when needed, and a clear work plan before serious coding begins.'
  },
  {
    id: 'build',
    titleEs: 'Desarrollamos',
    titleEn: 'Build',
    textEs:
      'Entregas iterativas, revisiones contigo y calidad en código, pruebas y documentación para que el avance sea visible y medible.',
    textEn:
      'Iterative deliveries, reviews with you, and solid code, testing, and documentation so progress stays visible and measurable.'
  },
  {
    id: 'implement',
    titleEs: 'Implementamos',
    titleEn: 'Implement',
    textEs:
      'Puesta en producción, integración con sistemas existentes, capacitación básica y acompañamiento en los primeros días de uso.',
    textEn:
      'Go-live, integration with existing systems, basic training, and support during the first days of use.'
  },
  {
    id: 'evolve',
    titleEs: 'Evolucionamos',
    titleEn: 'Evolve',
    textEs:
      'Soporte, mejoras y nuevas funcionalidades según cambien tus procesos o el mercado — la solución sigue viva con tu negocio.',
    textEn:
      'Support, improvements, and new features as your processes or market change — the solution grows with your business.'
  }
]
</script>

<style scoped>
#process {
  color: #fafafa;
  padding: 4.5rem 20px 5rem;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.08) 100%);
}

.section-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.85rem, 4vw, 2.75rem);
  text-align: center;
  font-weight: 650;
  letter-spacing: -0.03em;
  margin: 0;
}

.section-lead {
  font-size: 1.05rem;
  text-align: center;
  max-width: 40rem;
  margin: 12px auto 0;
  color: rgba(244, 246, 251, 0.72);
  line-height: 1.6;
}

.process-steps {
  list-style: none;
  max-width: 1100px;
  margin: 2.75rem auto 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.process-step {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 1.15rem 1rem 1.25rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.035);
  min-height: 100%;
}

.process-step__num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fafafa;
  color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.process-step__body h3 {
  margin: 0 0 8px;
  font-family: 'Outfit', sans-serif;
  font-size: 1.05rem;
}

.process-step__body p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(244, 246, 251, 0.7);
}

@media screen and (max-width: 980px) {
  .process-steps {
    grid-template-columns: 1fr;
    max-width: 36rem;
  }
}
</style>
