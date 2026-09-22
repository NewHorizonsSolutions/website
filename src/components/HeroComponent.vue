<template>
  <div>
    <section id="home" class="hero">
      <video
        class="elementor-background-video-hosted elementor-html5-video"
        autoplay
        muted
        playsinline
        loop
        src="video.mp4"
      ></video>
      <div class="capa"></div>
      <div style="position: relative">
        <header id="header" style="padding-top: 100px"></header>
        <header class="hero-header">
          <div class="hero-copy">
            <h1 class="hero-title hero-title--main">
              {{
                storeLang.languaje == 'en'
                  ? 'We drive business with technology.'
                  : 'Impulsamos negocios con tecnología.'
              }}
            </h1>
            <p class="hero-lead" id="description">
              {{
                storeLang.languaje == 'en'
                  ? 'We design and build digital solutions, optimize processes, and adopt new technologies to support your business as it evolves.'
                  : 'Diseñamos y desarrollamos soluciones digitales, optimizamos procesos y sumamos nuevas tecnologías para acompañar la evolución de tu negocio.'
              }}
            </p>
          </div>
          <footer class="hero-footer pt-10">
            <a class="button button-primary hero-cta" href="/#contact">{{
              storeLang.languaje == 'en' ? 'Tell us about your project' : 'Contanos tu proyecto'
            }}</a>
            <a class="button right hero-cta" href="/#solutions">{{
              storeLang.languaje == 'en' ? 'Explore our solutions' : 'Conocé nuestras soluciones'
            }}</a>
          </footer>
        </header>
      </div>
    </section>
  </div>
</template>

<script setup>
import { store } from '../stores/languaje.js'
const storeLang = store()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

body {
  font-family: 'PT Sans Caption', 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;
  font-size: 3vh;
}

.text_1 {
  animation: text1;
}

.text_2 {
  animation: text2;
}

.text_1,
.text_2 {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  animation-duration: 20s;
  animation-timing-function: steps(15, end);
  animation-iteration-count: infinite;
}

.text_1::after,
.text_2::after {
  content: '|';
  position: absolute;
  right: 0;
  animation: caret infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
}

@keyframes text2 {
  0%,
  50%,
  100% {
    width: 0;
  }

  60%,
  90% {
    width: 21.2em;
  }
}

@keyframes text1 {
  0%,
  50%,
  100% {
    width: 0;
  }
  10%,
  40% {
    width: 17em;
  }
}

@keyframes caret {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.capa {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1c1c1d;
  opacity: 0.6;
}

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo {
  text-decoration: none;
  color: white;
  font-size: 5vh;
  font-weight: bold;
}

#menu-icon {
  font-family: Geneva, sans-serif;
  font-size: 6vh;
}

#description {
  font-family: 'DM Sans', sans-serif;
  font-size: 2.5vh;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  box-sizing: border-box;
  color: white;
  background: linear-gradient(to top, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
  background-size: cover;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-title {
  max-width: 16em;
  margin: 0;
  font-size: 12vh;
  font-weight: bold;
  line-height: 0.9;
}

.hero-copy {
  padding-top: 100px;
  max-width: min(50vw, 42rem);
  padding-left: clamp(1.25rem, 3.5vw, 3.75rem);
  box-sizing: border-box;
}

.hero-title--main {
  max-width: 14em;
  line-height: 1.1;
  font-size: clamp(2rem, 5vw, 2.85rem) !important;
}

.hero-lead {
  font-family: 'DM Sans', sans-serif;
  line-height: 1.65;
  letter-spacing: 0.04em;
  margin-top: 1.75rem;
  max-width: 36rem;
}

@media screen and (min-width: 923px) {
  .hero-copy {
    max-width: min(68vw, 58rem);
  }

  .hero-title--main {
    max-width: none;
    width: 100%;
    font-size: clamp(3rem, 5.2vw, 5rem) !important;
    line-height: 1.06;
  }

  .hero-lead,
  #description {
    margin-top: 3.5rem !important;
    max-width: 36rem;
    font-size: clamp(1rem, 1.35vw, 1.2rem);
  }

  .hero-footer {
    margin-top: 2.5rem;
  }
}

@media only screen and (min-width: 32em) {
  .hero-title:not(.hero-title--main) {
    font-size: 16vh;
  }
}

@media screen and (max-width: 1280px) {
  .hero {
    height: 100%;
  }
}

@media screen and (max-width: 922px) {
  #pc {
    display: none;
  }

  .hero-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-copy {
    width: min(92%, 28rem);
    max-width: none;
    padding-left: 0;
    margin: 0 auto;
    text-align: left;
  }

  .hero-header h1,
  .hero-header .hero-line {
    padding: 0 !important;
    margin: 0 !important;
  }

  .hero-title--main {
    max-width: none;
    font-size: clamp(1.95rem, 7.5vw, 2.65rem) !important;
  }

  .hero-lead,
  #description {
    width: 100% !important;
    margin: 1.75rem 0 0 !important;
    font-size: inherit;
    padding: 0 !important;
    letter-spacing: 0.03em;
  }

  .hero-footer {
    margin: 2rem auto 0 !important;
    justify-content: center !important;
    align-items: stretch !important;
    flex-direction: column !important;
    gap: 0.75rem;
    width: min(92%, 28rem);
    padding-left: 0 !important;
    padding: 0 0 4rem !important;
    box-sizing: border-box;
  }

  .hero-footer .hero-cta {
    display: block;
    width: 100%;
    margin: 0 !important;
    padding: 0.7rem 1rem !important;
    font-size: 0.9rem;
    line-height: 1.35;
    text-align: center;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .hero-footer .button-primary {
    margin-right: 0 !important;
  }

  .hero-title {
    display: block !important;
  }

  .text_1,
  .text_2 {
    margin-top: 10px !important;
    padding-bottom: 0px !important;
  }

  .typewriter {
    margin: auto !important;
  }
}

.hero-footer {
  display: flex;
  margin-bottom: 1em;
  padding: 5px 0 90px;
  padding-left: clamp(1.25rem, 3.5vw, 3.75rem);
  box-sizing: border-box;
}

.button {
  padding: 10px 50px;
  color: white;
  text-decoration: none;
  border: 0.1em solid white;
  border-radius: 15px;
  transition: 1s;
  background: transparent;
}

.right:hover {
  box-shadow: inset 400px 0 0 0 white;
  color: black;
}

.button-primary {
  color: black;
  background-color: white;
  top: 0;
  position: relative;
  margin-right: 20px;
  transition: top ease 0.5s;
}

.button-primary:hover {
  top: -6px;
}

@media screen and (max-width: 922px) {
  .hero-footer .button-primary:hover {
    top: 0;
  }
}

@media screen and (max-width: 380px) {
  .hero-footer .hero-cta {
    font-size: 0.85rem;
    padding: 0.65rem 0.85rem !important;
  }
}
</style>
