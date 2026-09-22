<template>
  <section id="technologies" ref="sectionRef" class="section-mountain section-mountain--mesh">
    <h2 class="title" data-reveal="fade">{{ storeLang.languaje == 'en' ? 'Technologies' : 'Tecnologías' }}</h2>
    <p class="description w-75" data-reveal="fade" style="--reveal-delay: 80ms">
      {{
        storeLang.languaje == 'en'
          ? 'The stack supports the solution — we choose tools based on maintainability, scale, and your context.'
          : 'El stack respalda la solución — elegimos herramientas según mantenibilidad, escala y tu contexto.'
      }}
    </p>
    <v-container class="tech-wrap">
      <v-row no-gutters class="tech-row">
        <v-col cols="12" md="4" class="tech-col">
          <div class="tech-card" data-reveal style="--reveal-delay: 0ms">
            <h3>Backend</h3>
            <i class="devicon-nodejs-plain colored"></i>
            <i class="devicon-dotnetcore-plain colored"></i>
            <i class="devicon-express-original"></i>
            <i class="devicon-java-plain colored"></i>
            <br />
            <br />
            <i class="devicon-mysql-plain colored"></i>
            <i class="devicon-postgresql-plain colored"></i>
            <i class="devicon-heroku-original colored"></i>
            <i class="devicon-firebase-plain colored"></i>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="tech-col">
          <div class="tech-card" data-reveal style="--reveal-delay: 120ms">
            <h3>DevOps</h3>
            <i class="devicon-docker-plain colored"></i>
            <i class="devicon-kubernetes-plain colored"></i>
            <i class="devicon-amazonwebservices-original colored"></i>
            <i class="devicon-terraform-plain colored"></i>
            <br />
            <br />
            <i class="devicon-selenium-original colored"></i>
            <i class="devicon-jenkins-line colored"></i>
            <i class="devicon-git-plain colored"></i>
            <i class="devicon-gradle-plain"></i>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="tech-col">
          <div class="tech-card" data-reveal style="--reveal-delay: 240ms">
            <h3>Frontend</h3>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-vuejs-plain colored"></i>
            <i class="devicon-vuetify-line colored"></i>
            <br />
            <br />
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-bootstrap-plain colored"></i>
            <i class="devicon-sass-original colored"></i>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../stores/languaje.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const storeLang = store()
const sectionRef = ref(null)
useScrollReveal(sectionRef)
</script>

<style scoped>
#technologies {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 55%);
  color: #f4f6fb;
  padding: 4.5rem 0 5rem;
  text-align: center;
}

.title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.85rem, 4vw, 2.75rem);
  letter-spacing: -0.03em;
  font-weight: 650;
}

.description {
  font-size: 1.05rem;
  max-width: 40rem;
  margin: 12px auto 0;
  color: rgba(244, 246, 251, 0.72);
  line-height: 1.6;
  padding: 0 16px;
}

.tech-wrap {
  padding-top: 2.5rem !important;
  padding-bottom: 0 !important;
  max-width: 1100px;
}

.tech-row {
  justify-content: center;
  gap: 14px;
}

.tech-col {
  padding: 8px;
}

.tech-card {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.035);
  padding: 1.25rem 1rem 1.5rem;
  height: 100%;
}

.tech-card h3 {
  font-family: 'Outfit', sans-serif;
  margin: 0 0 1rem;
  font-size: 1.1rem;
  color: #d4d4d4;
}

i {
  font-size: 42px;
  margin: 10px;
  transition: transform 0.2s ease;
}

i:hover {
  transform: translateY(-3px) scale(1.05);
}

@media screen and (max-width: 575px) {
  i {
    font-size: 34px;
    margin: 8px;
  }
}
</style>
