<template>
  <div class="hero-tech-visual" aria-hidden="true">
    <div class="hero-tech-visual__backdrop">
      <div class="hero-tech-visual__glow hero-tech-visual__glow--core"></div>
      <div class="hero-tech-visual__glow hero-tech-visual__glow--halo"></div>
      <div class="hero-tech-visual__floor-shine"></div>
      <div class="hero-tech-visual__border-ring"></div>
      <ul class="hero-tech-visual__sparkles">
        <li
          v-for="(spark, index) in sparkles"
          :key="index"
          class="sparkle"
          :style="{
            left: spark.left,
            top: spark.top,
            width: spark.size,
            height: spark.size,
            animationDelay: spark.delay,
            animationDuration: spark.duration
          }"
        />
      </ul>
    </div>
    <img
      class="hero-tech-visual__img"
      src="/pc.png"
      alt=""
      width="800"
      height="600"
      decoding="async"
      fetchpriority="high"
    />
  </div>
</template>

<script setup>
const sparkles = [
  { left: '8%', top: '18%', size: '4px', delay: '0s', duration: '2.8s' },
  { left: '22%', top: '42%', size: '3px', delay: '0.6s', duration: '3.2s' },
  { left: '78%', top: '12%', size: '5px', delay: '1.1s', duration: '2.5s' },
  { left: '92%', top: '35%', size: '3px', delay: '0.3s', duration: '3.6s' },
  { left: '65%', top: '58%', size: '4px', delay: '1.8s', duration: '2.9s' },
  { left: '38%', top: '8%', size: '3px', delay: '2.2s', duration: '3.1s' },
  { left: '88%', top: '68%', size: '6px', delay: '0.9s', duration: '3.4s' },
  { left: '12%', top: '72%', size: '4px', delay: '1.4s', duration: '2.7s' },
  { left: '52%', top: '22%', size: '3px', delay: '2.6s', duration: '3s' },
  { left: '48%', top: '78%', size: '5px', delay: '0.2s', duration: '3.8s' }
]
</script>

<style scoped>
.hero-tech-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: min(62vh, 520px);
  padding: 0 0 clamp(1.25rem, 4vh, 2.75rem);
  overflow: visible;
}

.hero-tech-visual__backdrop {
  position: absolute;
  inset: -8% -6% -4%;
  z-index: 0;
  pointer-events: none;
}

.hero-tech-visual__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(18px);
}

.hero-tech-visual__glow--core {
  inset: 18% 10% 22%;
  background: radial-gradient(
    ellipse 60% 55% at 50% 42%,
    rgba(147, 197, 253, 0.35) 0%,
    rgba(59, 130, 246, 0.12) 45%,
    transparent 72%
  );
}

.hero-tech-visual__glow--halo {
  inset: 5% 0 8%;
  background: radial-gradient(
    ellipse 85% 70% at 50% 50%,
    rgba(255, 255, 255, 0.06) 0%,
    transparent 65%
  );
  filter: blur(24px);
  animation: halo-pulse 5s ease-in-out infinite;
}

.hero-tech-visual__floor-shine {
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: 0;
  height: 42%;
  background: radial-gradient(
    ellipse 75% 55% at 50% 100%,
    rgba(191, 219, 254, 0.28) 0%,
    rgba(59, 130, 246, 0.1) 35%,
    transparent 72%
  );
  filter: blur(8px);
}

.hero-tech-visual__border-ring {
  position: absolute;
  inset: 10% 2% 14%;
  border-radius: 32px;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.12),
    inset 0 0 48px rgba(147, 197, 253, 0.12),
    0 0 80px rgba(59, 130, 246, 0.15);
  animation: ring-shimmer 6s ease-in-out infinite;
}

.hero-tech-visual__sparkles {
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sparkle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, rgba(191, 219, 254, 0.9) 35%, transparent 70%);
  box-shadow: 0 0 10px rgba(191, 219, 254, 0.9), 0 0 22px rgba(59, 130, 246, 0.45);
  animation: sparkle-twinkle ease-in-out infinite;
  transform: translate(-50%, -50%);
}

.hero-tech-visual__img {
  position: relative;
  z-index: 1;
  width: min(108%, 620px);
  max-width: 620px;
  height: auto;
  object-fit: contain;
  object-position: center bottom;
  filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.28)) drop-shadow(0 32px 64px rgba(0, 0, 0, 0.4));
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 90%, rgba(0, 0, 0, 0.35) 97%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 0%, #000 90%, rgba(0, 0, 0, 0.35) 97%, transparent 100%);
  animation: hero-float 7s ease-in-out infinite;
}

@keyframes hero-float {
  0%,
  100% {
    transform: translateY(6px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes sparkle-twinkle {
  0%,
  100% {
    opacity: 0.15;
    transform: translate(-50%, -50%) scale(0.6);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.15);
  }
}

@keyframes halo-pulse {
  0%,
  100% {
    opacity: 0.75;
  }
  50% {
    opacity: 1;
  }
}

@keyframes ring-shimmer {
  0%,
  100% {
    opacity: 0.45;
  }
  50% {
    opacity: 0.85;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-tech-visual__img,
  .hero-tech-visual__glow--halo,
  .hero-tech-visual__border-ring,
  .sparkle {
    animation: none;
  }
}

@media screen and (max-width: 991px) {
  .hero-tech-visual {
    min-height: auto;
    padding-bottom: 1.5rem;
  }

  .hero-tech-visual__img {
    width: min(100%, 380px);
    max-width: 380px;
  }
}
</style>
