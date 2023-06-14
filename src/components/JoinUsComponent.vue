<template>
  <section id="joinus">
    <div style="position: relative">
      <div class="container">
        <h1 class="title">
          {{ storeLang.languaje == 'en' ? 'Join us. We need you!' : 'Únete. Te necesitamos!' }}
        </h1>
        <p class="description">
          {{
            storeLang.languaje == 'en'
              ? 'Write to us and send us your resume, personal site or portfolio if you want to be part of the NH family ❤️'
              : 'Escríbenos y envíanos tu currículum, sitio personal o portfolio si quieres ser parte de la familia NH ❤️'
          }}
        </p>
      </div>
      <div style="text-align: center; margin: 30px">
        <a class="btn-budget" href="/#contact" style="text-decoration: none">{{
          storeLang.languaje == 'en' ? 'Join the team' : 'Únete al equipo'
        }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { store } from '../stores/languaje.js'
const storeLang = store()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#joinus {
  background: #232526;
  background: -webkit-linear-gradient(to right, #232526, #414345);
  background: linear-gradient(to top, #020202, #414345);
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  padding: 30px 0px 0px 0px;
}
.container {
  color: white;
  text-align: center;
  padding: 0px;
}

.btn-budget {
  font-weight: bold;
  border-radius: 20px;
  padding: 0.9rem 1.7rem;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 1.5px;
  cursor: pointer;
  box-shadow: inset 400px 0 0 0 white;
  color: black;
  transition: all 1s ease-in-out;
  border: white solid 1px;
}

.description {
  width: 30%;
  margin: auto;
  font-family: 'DM Sans', sans-serif;
}

@media screen and (max-width: 922px) {
  .description {
    width: 80%;
  }
}
</style>
