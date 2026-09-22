<template>
  <section id="ai" class="ai-section">
    <div class="ai-inner tag">
      <span class="mdi mdi-brain ai-icon" aria-hidden="true"></span>
      <h2 class="title">
        {{ isEn ? 'AI is already part of the present.' : 'La IA ya es parte del presente.' }}
      </h2>
      <p class="ai-text">
        {{
          isEn
            ? 'At New Horizons we understand that Artificial Intelligence is changing how products are built, tasks are automated, and information is used. That is why we are adding AI to our technical capabilities and actively exploring how to apply it where it can truly add value — without overpromising: we are building this practice as we grow.'
            : 'En NewHorizons entendemos que la Inteligencia Artificial está cambiando la forma de desarrollar productos, automatizar tareas y trabajar con información. Por eso incorporamos IA a nuestras capacidades técnicas y exploramos activamente cómo aplicarla donde realmente pueda aportar valor — sin exagerar: estamos desarrollando esta práctica a medida que crecemos.'
        }}
      </p>
      <ul class="ai-tags">
        <li v-for="item in capabilityTags" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '../stores/languaje.js'
import $ from 'jquery'

const storeLang = store()
const isEn = computed(() => storeLang.languaje === 'en')

const capabilityTags = computed(() =>
  isEn.value
    ? [
        'AI assistants',
        'Integration with AI models',
        'Information processing',
        'Smarter automation'
      ]
    : [
        'Asistentes con IA',
        'Integración con modelos de IA',
        'Procesamiento de información',
        'Automatización inteligente'
      ]
)

$(document).on('scroll', function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tag = $('#ai .tag').get(0)
  if (tag && $(tag).position().top < pageBottom) {
    $(tag).addClass('visible')
  } else if (tag) {
    $(tag).removeClass('visible')
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

.ai-section {
  background: linear-gradient(to top, #020202, #414345);
  color: #fff;
  padding: 5rem 24px;
}

.ai-inner {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 1.2s ease;
}

.ai-inner.visible {
  opacity: 1;
  transform: translate(0, 0);
}

.ai-icon {
  font-size: 48px;
  opacity: 0.9;
  margin-bottom: 16px;
}

.title {
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 20px;
  line-height: 1.2;
}

.ai-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  line-height: 1.65;
  margin: 0 0 28px;
  color: rgba(255, 255, 255, 0.92);
}

.ai-tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.ai-tags li {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  letter-spacing: 0.5px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.08);
}

@media screen and (max-width: 767px) {
  .title {
    font-size: 28px;
  }

  .ai-text {
    font-size: 16px;
  }
}
</style>
