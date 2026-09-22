<template>
  <section id="process">
    <h2 class="section-title">
      {{ storeLang.languaje == 'en' ? 'How we work' : 'Cómo trabajamos' }}
    </h2>
    <p class="section-lead">
      {{
        storeLang.languaje == 'en'
          ? 'A clear path from your need to a solution in production — with communication at every step.'
          : 'Un camino claro desde tu necesidad hasta una solución en producción — con comunicación en cada etapa.'
      }}
    </p>

    <ol class="process-steps">
      <li v-for="(step, index) in steps" :key="step.id" class="process-step tag">
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
import { store } from '../stores/languaje.js'
import $ from 'jquery'

const storeLang = store()

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

$(document).on('scroll', function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $('#process .tag')

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

#process {
  color: black;
  padding: 5rem 24px 3rem;
  background-color: #f0f0f0;
  margin-bottom: 0;
}

.section-title {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  margin: 0;
}

.section-lead {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  letter-spacing: 1px;
  text-align: center;
  max-width: 40rem;
  margin: 12px auto 0;
  color: #333;
}

.process-steps {
  list-style: none;
  max-width: 720px;
  margin: 48px auto 0;
  padding: 0;
  counter-reset: step;
}

.process-step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 1.2s ease;
}

.process-step:last-child {
  border-bottom: none;
}

.process-step.visible {
  opacity: 1;
  transform: translate(0, 0);
}

.process-step__num {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1b1b1b;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: 'DM Sans', sans-serif;
}

.process-step__body h3 {
  margin: 0 0 6px;
  font-size: 1.25rem;
}

.process-step__body p {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #444;
}
</style>
