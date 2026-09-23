<template>
  <div ref="rootRef" class="showcase">
    <p class="showcase-label" data-reveal="fade" :style="{ '--reveal-delay': '120ms' }">
      {{ isEn ? 'Products in the field' : 'Productos en producción' }}
    </p>

    <div class="showcase-stage">
      <article
        v-for="(slide, index) in slides"
        v-show="index === activeIndex"
        :key="slide.id"
        class="showcase-slide"
      >
        <div class="showcase-viewport">
          <div class="showcase-float">
            <div class="showcase-img-wrap">
              <div class="showcase-ground-shadow" aria-hidden="true"></div>
              <picture class="showcase-picture">
                <source
                  type="image/webp"
                  :srcset="slide.srcsetWebp"
                  :sizes="showcaseImageSizes"
                />
                <img
                  class="showcase-img"
                  :src="slide.src"
                  :srcset="slide.srcsetPng"
                  :sizes="showcaseImageSizes"
                  :alt="slide.alt"
                  width="2048"
                  height="1364"
                  loading="eager"
                  :fetchpriority="index === activeIndex ? 'high' : 'low'"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>

        <div class="showcase-copy">
          <h3 class="showcase-product-title">{{ slide.title }}</h3>
          <p
            v-for="(paragraph, pIdx) in slide.bodyHtml"
            :key="pIdx"
            class="showcase-product-text"
            v-html="paragraph"
          />
        </div>
      </article>
    </div>

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

const showcaseImageSizes = '(max-width: 767px) 92vw, 880px'

function slideAssets(baseName) {
  const png = `/showcase-${baseName}.png`
  const png2x = `/showcase-${baseName}@2x.png`
  const webp = `/showcase-${baseName}.webp`
  const webp2x = `/showcase-${baseName}@2x.webp`
  return {
    src: png,
    srcsetPng: `${png} 1024w, ${png2x} 2048w`,
    srcsetWebp: `${webp} 1024w, ${webp2x} 2048w`
  }
}

const slides = computed(() => [
  {
    id: 'mcpaper-wms',
    ...slideAssets('mcpaper-wms'),
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
    ...slideAssets('logistica'),
    label: isEn.value ? 'MEG - Mercado Envios Gateway' : 'MEG - Mercado Envios Gateway',
    alt: isEn.value
      ? 'MEG Mercado Envios Gateway logistics platform on laptop'
      : 'MEG Mercado Envios Gateway — plataforma logística en notebook',
    title: isEn.value ? 'MEG - Mercado Envios Gateway' : 'MEG - Mercado Envios Gateway',
    bodyHtml: isEn.value
      ? [
          'Custom system built to <strong>centralize and automate shipping management</strong> for multiple sellers. The platform connects <strong>Mercado Libre</strong> orders with <strong>logistics operations</strong>, letting you manage <strong>clients</strong>, <strong>sellers</strong>, <strong>orders</strong>, and <strong>sync status</strong> from one place.',
          'We integrate your main <strong>sales channels</strong> in one place. We connect <strong>Mercado Libre</strong>, <strong>Shopify</strong>, <strong>WooCommerce</strong>, <strong>Tiendanube</strong>, and other platforms to <strong>centralize operations</strong>, <strong>automate workflows</strong>, keep information <strong>in sync</strong>, and streamline <strong>invoicing</strong>.',
          'Everything from a <strong>single dashboard</strong>, built to support your business as it grows.'
        ]
      : [
          'Sistema desarrollado a medida para <strong>centralizar y automatizar la gestión de envíos</strong> de múltiples vendedores. La plataforma integra las órdenes provenientes de <strong>Mercado Libre</strong> con la <strong>operación logística</strong>, permitiendo administrar <strong>clientes</strong>, <strong>vendedores</strong>, <strong>órdenes</strong> y <strong>estados de sincronización</strong> desde un único lugar.',
          'Integramos tus principales <strong>canales de venta</strong> en un solo lugar. Conectamos <strong>Mercado Libre</strong>, <strong>Shopify</strong>, <strong>WooCommerce</strong>, <strong>Tiendanube</strong> y otras plataformas para <strong>centralizar la gestión</strong>, <strong>automatizar procesos</strong>, mantener la información <strong>sincronizada</strong> y simplificar la <strong>facturación</strong>.',
          'Todo desde un <strong>único dashboard</strong>, preparado para acompañar el <strong>crecimiento de tu negocio</strong>.'
        ]
  }
])

const SLIDE_COUNT = 2
const activeIndex = ref(0)
const rootRef = ref(null)

const AUTOPLAY_MS = 9000
let autoplayTimer = null

function isShowcaseHovered() {
  return Boolean(rootRef.value?.matches(':hover'))
}

function startAutoplay() {
  if (autoplayTimer !== null) return
  autoplayTimer = window.setInterval(() => {
    if (isShowcaseHovered()) return
    activeIndex.value = (activeIndex.value + 1) % SLIDE_COUNT
  }, AUTOPLAY_MS)
}

function goTo(index) {
  activeIndex.value = index
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (autoplayTimer !== null) {
    window.clearInterval(autoplayTimer)
    autoplayTimer = null
  }
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

.showcase-stage {
  width: 100%;
  max-width: 920px;
  position: relative;
  padding: 0.5rem 1rem 1rem;
  box-sizing: border-box;
}

.showcase-slide {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
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
}

.showcase-float {
  animation: showcase-float 6s ease-in-out infinite;
  width: 100%;
}

.showcase:hover .showcase-float {
  animation-play-state: paused;
}

.showcase-picture {
  display: block;
  width: 100%;
  line-height: 0;
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
  object-position: center;
  user-select: none;
  image-rendering: auto;
  filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.28));
}

.showcase-copy {
  width: 100%;
  max-width: 42rem;
  padding: 0 0.25rem;
  text-align: center;
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
}

@media screen and (max-width: 767px) {
  .showcase-img {
    max-height: min(56vw, 280px);
  }
}
</style>
