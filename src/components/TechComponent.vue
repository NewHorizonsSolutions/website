<template>
  <section id="technologies">
    <h2 class="title">{{ storeLang.languaje == 'en' ? 'Technologies' : 'Tecnologías' }}</h2>
    <p class="description w-75">
      {{
        storeLang.languaje == 'en'
          ? 'The stack supports the solution — we choose tools based on maintainability, scale, and your context.'
          : 'El stack respalda la solución — elegimos herramientas según mantenibilidad, escala y tu contexto.'
      }}
    </p>
    <v-container style="padding-top: 100px; padding-bottom: 90px">
      <v-row no-gutters style="overflow: hidden; justify-content: center">
        <v-col order="6" class="m-3">
          <v-sheet class="pa-2 ma-2" style="background: transparent; padding: 0px !important">
            <h3 class="mb-4" style="text-align: center; color: white">Backend</h3>
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
          </v-sheet>
        </v-col>
        <v-col order="12" class="m-3">
          <v-sheet class="pa-2 ma-2" style="background: transparent; padding: 0px !important">
            <h3 class="mb-4" style="text-align: center; color: white">Devops</h3>
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
          </v-sheet>
        </v-col>
        <v-col order="1" class="m-3">
          <v-sheet class="pa-2 ma-2" style="background: transparent; padding: 0px !important">
            <h3 class="mb-4" style="text-align: center; color: white">Frontend</h3>
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
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { store } from '../stores/languaje.js'
const storeLang = store()
</script>

<style scoped>
#technologies {
  background: linear-gradient(to bottom, #020202, #414345);
  color: white;
  padding: 3rem 0 50px;
  text-align: center;
}

.title {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
}

i {
  font-size: 50px;
  color: rgb(219, 219, 219);
  cursor: pointer;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2));
  margin: 20px;
  transition: 1s all;
}

i:hover {
  color: #aaababac;
}

.description {
  font-size: 17px;
  letter-spacing: 3px;
  margin: auto;
}

@media screen and (max-width: 575px) {
  i {
    font-size: 40px;
  }
}
</style>
