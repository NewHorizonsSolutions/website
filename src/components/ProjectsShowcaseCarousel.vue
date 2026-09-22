<template>
  <div class="showcase" data-reveal="fade" :style="{ '--reveal-delay': '120ms' }">
    <p class="showcase-label">
      {{ isEn ? 'Products in the field' : 'Productos en producción' }}
    </p>

    <div class="showcase-viewport">
      <Transition :name="transitionName" mode="out-in">
        <div :key="activeSlide.id" class="showcase-slide">
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
      </Transition>
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

const slides = computed(() => [
  {
    id: 'tablet',
    src: '/showcase-tablet.png',
    label: isEn.value ? 'Tablet app' : 'App en tablet',
    alt: isEn.value ? 'Warehouse apps on tablet' : 'Apps de depósito en tablet'
  },
  {
    id: 'notebook',
    src: '/showcase-notebook.png',
    label: isEn.value ? 'Laptop dashboard' : 'Panel en notebook',
    alt: isEn.value ? 'Gateway dashboard on laptop' : 'Panel gateway en notebook'
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
  timer = window.setInterval(next, 7000)
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
  margin: 0 0 2.25rem;
  padding: 0 1rem;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  flex-shrink: 0;
}

.showcase-viewport {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: min(48vw, 380px);
  max-height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: transparent;
}

.showcase-slide {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.showcase-float {
  animation: showcase-float 6s ease-in-out infinite;
  pointer-events: none;
}

.showcase-img-wrap {
  position: relative;
  display: inline-block;
  line-height: 0;
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
  width: min(92vw, 1024px);
  height: auto;
  max-height: min(52vw, 420px);
  object-fit: contain;
  image-rendering: auto;
  filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.28));
  pointer-events: none;
  user-select: none;
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
    width: min(94vw, 480px);
    max-height: min(56vw, 300px);
  }

  .showcase-ground-shadow {
    width: 85%;
    height: 12%;
    bottom: 0;
  }
}
</style>
