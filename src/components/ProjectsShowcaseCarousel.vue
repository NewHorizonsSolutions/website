<template>
  <div class="showcase" data-reveal="fade" :style="{ '--reveal-delay': '120ms' }">
    <p class="showcase-label">
      {{ isEn ? 'Products in the field' : 'Productos en producción' }}
    </p>

    <Transition :name="transitionName" mode="out-in">
      <div :key="activeSlide.id" class="showcase-slide">
        <div class="showcase-viewport">
          <div class="showcase-float">
            <div class="showcase-img-wrap">
              <div class="showcase-ground-shadow" aria-hidden="true"></div>
              <img
                class="showcase-img"
                :src="activeSlide.src"
                :alt="activeSlide.alt"
                width="2048"
                height="1364"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div class="showcase-copy">
          <h3 class="showcase-product-title">{{ activeSlide.title }}</h3>
          <p
            v-for="(paragraph, pIdx) in activeSlide.bodyHtml"
            :key="pIdx"
            class="showcase-product-text"
            v-html="paragraph"
          />
        </div>
      </div>
    </Transition>

    <div class="showcase-controls">
      <div class="showcase-dots" role="tablist" :aria-label="isEn ? 'Showcase slides' : 'Diapositivas'">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          type="button"
          role="tab"
          class="showcase-dot"
          :class="{ active: index === activeIndex }"
          :aria-selected="index === activeIndex"
          :aria-label="slide.label"
          @click="goTo(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { store } from '../stores/languaje.js'

const storeLang = store()
const isEn = computed(() => storeLang.languaje === 'en')

const slides = computed(() => [
  {
    id: 'mcpaper-wms',
    src: '/showcase-mcpaper-wms.png',
    label: isEn.value ? 'WMS warehouse and production' : 'WMS almacén y producción',
    alt: isEn.value
      ? 'WMS warehouse and production dashboard on laptop and tablet'
      : 'WMS — panel de almacén y producción en notebook y tablet',
    title: isEn.value
      ? 'WMS – End-to-end warehouse and production management'
      : 'WMS – Gestión integral de almacén y producción',
    bodyHtml: isEn.value
      ? [
          'Custom system built to <strong>centralize and manage</strong> the company’s full operational flow. It tracks <strong>material stock</strong>, <strong>work orders</strong>, <strong>production</strong>, material consumption, <strong>palletizing</strong>, and <strong>finished goods</strong> while maintaining <strong>traceability</strong> at every stage through to dispatch preparation.'
        ]
      : [
          'Sistema desarrollado a medida para <strong>centralizar y gestionar</strong> todo el flujo operativo de la empresa. Permite controlar <strong>stock de materiales</strong>, <strong>órdenes de trabajo</strong>, <strong>producción</strong>, consumo de materiales, <strong>paletizado</strong> y <strong>producto terminado</strong>, manteniendo la <strong>trazabilidad</strong> de cada etapa hasta su preparación para despacho.'
        ]
  },
  {
    id: 'logistica',
    src: '/showcase-logistica.png',
    label: isEn.value ? 'MEG - Mercado Envios Gateway' : 'MEG - Mercado Envios Gateway',
    alt: isEn.value
      ? 'MEG Mercado Envios Gateway logistics platform on laptop'
      : 'MEG Mercado Envios Gateway — plataforma logística en notebook',
    title: isEn.value ? 'MEG - Mercado Envios Gateway' : 'MEG - Mercado Envios Gateway',
    bodyHtml: isEn.value
      ? [
          'Custom system built to <strong>centralize and automate shipping management</strong> for multiple sellers. The platform connects <strong>Mercado Libre</strong> orders with <strong>logistics operations</strong>, letting you manage <strong>clients</strong>, <strong>sellers</strong>, <strong>orders</strong>, and <strong>sync status</strong> from one place.',
          'It improves visibility on every operation and cuts manual work by integrating <strong>e-commerce</strong>, <strong>logistics</strong>, and <strong>back-office systems</strong>.'
        ]
      : [
          'Sistema desarrollado a medida para <strong>centralizar y automatizar la gestión de envíos</strong> de múltiples vendedores. La plataforma integra las órdenes provenientes de <strong>Mercado Libre</strong> con la <strong>operación logística</strong>, permitiendo administrar <strong>clientes</strong>, <strong>vendedores</strong>, <strong>órdenes</strong> y <strong>estados de sincronización</strong> desde un único lugar.',
          'Facilita el seguimiento de cada operación y reduce tareas manuales mediante la integración entre <strong>e-commerce</strong>, <strong>logística</strong> y <strong>sistemas de gestión</strong>.'
        ]
  }
])

const activeIndex = ref(0)
const direction = ref(1)

const activeSlide = computed(() => slides.value[activeIndex.value])
const transitionName = computed(() => (direction.value >= 0 ? 'showcase-next' : 'showcase-prev'))

let timer = null

function goTo(index) {
  direction.value = index >= activeIndex.value ? 1 : -1
  activeIndex.value = index
}

function next() {
  direction.value = 1
  activeIndex.value = (activeIndex.value + 1) % slides.value.length
}

onMounted(() => {
  timer = window.setInterval(next, 9000)
})

onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})
</script>

<style scoped>
.showcase {
  margin-top: 3.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.showcase-label {
  position: relative;
  z-index: 3;
  margin: 0 0 2rem;
  padding: 0 1rem;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  flex-shrink: 0;
}

.showcase-slide {
  width: 100%;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.showcase-viewport {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: min(52vw, 420px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  background: transparent;
}

.showcase-float {
  animation: showcase-float 6s ease-in-out infinite;
  pointer-events: none;
  width: 100%;
}

.showcase-img-wrap {
  position: relative;
  display: inline-block;
  line-height: 0;
  width: 100%;
}

.showcase-ground-shadow {
  position: absolute;
  left: 50%;
  bottom: 2%;
  z-index: 0;
  width: 78%;
  height: 14%;
  transform: translateX(-50%);
  background: radial-gradient(
    ellipse 100% 100% at 50% 50%,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.22) 45%,
    transparent 72%
  );
  filter: blur(14px);
  pointer-events: none;
}

.showcase-img {
  position: relative;
  z-index: 1;
  display: block;
  width: min(100%, 880px);
  height: auto;
  max-height: min(52vw, 420px);
  margin: 0 auto;
  object-fit: contain;
  filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.28));
  pointer-events: none;
  user-select: none;
}

.showcase-copy {
  width: 100%;
  max-width: 42rem;
  margin-top: 1.75rem;
  padding: 0 1rem 0.25rem;
  text-align: center;
  order: 2;
}

.showcase-product-title {
  margin: 0 0 0.85rem;
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.15rem, 2.5vw, 1.45rem);
  font-weight: 650;
  letter-spacing: -0.02em;
  color: #f4f6fb;
}

.showcase-product-text {
  margin: 0 0 0.75rem;
  font-size: clamp(0.92rem, 1.8vw, 1.02rem);
  line-height: 1.65;
  color: rgba(244, 246, 251, 0.78);
}

.showcase-product-text:last-child {
  margin-bottom: 0;
}

.showcase-product-text :deep(strong) {
  font-weight: 650;
  color: rgba(244, 246, 251, 0.96);
}

.showcase-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.75rem;
  flex-shrink: 0;
}

.showcase-dots {
  display: flex;
  gap: 0.5rem;
}

.showcase-dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.showcase-dot.active {
  background: #93c5fd;
  transform: scale(1.15);
  box-shadow: 0 0 12px rgba(147, 197, 253, 0.5);
}

.showcase-next-enter-active,
.showcase-next-leave-active,
.showcase-prev-enter-active,
.showcase-prev-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.showcase-next-enter-from {
  opacity: 0;
  transform: translateX(24px);
}

.showcase-next-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

.showcase-prev-enter-from {
  opacity: 0;
  transform: translateX(-24px);
}

.showcase-prev-leave-to {
  opacity: 0;
  transform: translateX(24px);
}

@keyframes showcase-float {
  0%,
  100% {
    transform: translateY(8px);
  }
  50% {
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .showcase-float {
    animation: none;
  }

  .showcase-next-enter-active,
  .showcase-next-leave-active,
  .showcase-prev-enter-active,
  .showcase-prev-leave-active {
    transition: none;
  }
}

@media screen and (max-width: 767px) {
  .showcase-img {
    max-height: min(56vw, 280px);
  }
}
</style>
