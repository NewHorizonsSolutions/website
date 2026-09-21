<template>
  <section id="customers">
    <h2 class="title">{{ storeLang.languaje == 'en' ? 'Customers' : 'Clientes' }}</h2>
    <p class="description">
      {{
        storeLang.languaje == 'en'
          ? 'These are some of the companies that trust us.'
          : 'Estas son algunas de las empresas que confían en nosotros.'
      }}
    </p>

    <div
      class="carousel-shell"
      @mouseenter="pauseAutoplay"
      @mouseleave="startAutoplay"
      @focusin="pauseAutoplay"
      @focusout="startAutoplay"
    >
      <button
        type="button"
        class="carousel-btn"
        :aria-label="storeLang.languaje == 'en' ? 'Previous clients' : 'Clientes anteriores'"
        @click="prev"
      >
        <i class="mdi mdi-chevron-left" aria-hidden="true"></i>
      </button>

      <div class="carousel-viewport">
        <div class="carousel-track" :style="trackStyle">
          <article
            v-for="client in clients"
            :key="client.src"
            class="client-card-wrap"
            :style="{ flex: `0 0 ${slideSharePercent}%` }"
          >
            <div class="client-card">
              <img
                :src="client.src"
                :alt="client.name"
                loading="lazy"
                :class="client.colored ? 'logo-colored' : 'logo-monochrome'"
              />
            </div>
          </article>
        </div>
      </div>

      <button
        type="button"
        class="carousel-btn"
        :aria-label="storeLang.languaje == 'en' ? 'Next clients' : 'Siguientes clientes'"
        @click="next"
      >
        <i class="mdi mdi-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { store } from '../stores/languaje.js'

const storeLang = store()

const clients = [
  { src: '/mcpapers.png', name: 'MC Papers' },
  { src: '/brain-suystem.png', name: 'Brain System', colored: true },
  { src: '/boomeer.png', name: 'Boomeer' },
  { src: '/keilix.png', name: 'Keilix', colored: true },
  { src: '/nouvelle.png', name: 'Nouvelle' },
  { src: '/lwd.png', name: 'LWD' },
  { src: '/bkit.png', name: 'BKit' }
]

const currentIndex = ref(0)
const itemsPerView = ref(3)
let autoplayTimer = null

const slideSharePercent = 100 / clients.length

const maxIndex = computed(() => Math.max(0, clients.length - itemsPerView.value))

const trackStyle = computed(() => ({
  width: `${(clients.length / itemsPerView.value) * 100}%`,
  transform: `translateX(-${currentIndex.value * slideSharePercent}%)`
}))

function updateItemsPerView() {
  itemsPerView.value = window.innerWidth < 768 ? 1 : 3
  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value
  }
}

function next() {
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

function prev() {
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}

function startAutoplay() {
  pauseAutoplay()
  autoplayTimer = window.setInterval(next, 4500)
}

function pauseAutoplay() {
  if (autoplayTimer !== null) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  updateItemsPerView()
  window.addEventListener('resize', updateItemsPerView)
  startAutoplay()
})

onUnmounted(() => {
  pauseAutoplay()
  window.removeEventListener('resize', updateItemsPerView)
})
</script>

<style scoped>
#customers {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to top, #020202, #414345);
  color: white;
  padding: 6rem 0 4rem;
}

.title {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  margin: 0;
}

.description {
  font-size: 17px;
  letter-spacing: 3px;
  margin: 12px auto 0;
  text-align: center;
  max-width: 36rem;
  padding: 0 16px;
}

.carousel-shell {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 16px;
  width: min(1320px, 94vw);
  margin: 0 auto;
  padding: 48px 0 32px;
  box-sizing: border-box;
}

.carousel-viewport {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  width: 100%;
  isolation: isolate;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  will-change: transform;
}

.client-card-wrap {
  box-sizing: border-box;
  min-width: 0;
  padding: 0 8px;
}

.client-card {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #e8e8e8;
  border-radius: 16px;
  min-height: 172px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 28px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.client-card img {
  max-width: 240px;
  max-height: 88px;
  width: auto;
  height: auto;
  object-fit: contain;
}

.client-card img.logo-monochrome {
  filter: brightness(0);
}

.client-card img.logo-colored {
  filter: none;
}

.carousel-btn {
  flex-shrink: 0;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.22);
}

.carousel-btn:active {
  transform: scale(0.96);
}

@media screen and (max-width: 767px) {
  .carousel-shell {
    width: 100%;
    max-width: 100%;
    padding: 40px 12px 24px;
    gap: 10px;
  }

  .carousel-viewport {
    overflow: hidden;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }

  .client-card-wrap {
    padding: 0 6px;
  }

  .client-card {
    min-height: 156px;
    padding: 32px 20px;
  }

  .client-card img {
    max-width: min(220px, 70vw);
    max-height: 80px;
  }
}
</style>
