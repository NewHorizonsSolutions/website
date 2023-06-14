<template>
  <section id="aboutus">
    <div class="cont">
      <div class="monitor onleft" style="padding-bottom: 25px">
        <div class="tag left">
          <div class="mb-4 onleft" style="display: flex">
            <h1
              style="
                font-size: 30px;
                margin: auto 0px;
                font-weight: bold;
                letter-spacing: 1px;
                border-bottom: 2px solid black;
              "
            >
              {{ storeLang.languaje == 'en' ? 'About Us' : 'Nosotros' }}
            </h1>
          </div>
          <p style="font-family: 'DM Sans', sans-serif; font-size: 16px; text-align: initial">
            {{
              storeLang.languaje == 'en'
                ? "We're a passionate software solutions company driven by innovation, collaboration, and excellence. Our mission is to empower clients with cutting-edge solutions, while our vision is to be a trusted partner for their technology needs."
                : 'Somos una empresa apasionada de soluciones de software impulsada por la innovación, la colaboración y la excelencia. Nuestra misión es empoderar a los clientes con soluciones de vanguardia, mientras que nuestra visión es ser un socio confiable para sus necesidades tecnológicas.'
            }}
          </p>
        </div>
        <span
          class="mdi mdi-molecule icono"
          style="font-size: 48px; border-radius: 1000px; height: 70px; width: 70px; transition: 1s"
        ></span>
      </div>
      <hr />
      <!-- DIVISION -->
      <div class="monitor onright" style="padding: 25px 0px">
        <div>
          <span
            class="mdi mdi-fingerprint huella icono"
            style="
              font-size: 48px;
              border-radius: 1000px;
              height: 70px;
              width: 70px;
              transition: 1s;
            "
          ></span>
        </div>
        <div class="tag rightdiv" id="showed">
          <div class="mb-4 onright" style="display: flex">
            <h1
              style="
                font-size: 30px;
                margin: auto 0px;
                font-weight: bold;
                letter-spacing: 1px;
                border-bottom: 2px solid black;
              "
            >
              {{ storeLang.languaje == 'en' ? 'Our Identity' : 'Identidad' }}
            </h1>
          </div>
          <div style="display: flex; align-items: center">
            <p class="rightxt" style="font-family: 'DM Sans', sans-serif; font-size: 16px">
              {{
                storeLang.languaje == 'en'
                  ? 'Our identity is shaped by our relentless pursuit of pushing the boundaries and creating impactful solutions. We embrace the challenges, celebrate the successes, and make a lasting mark in the world of technology.'
                  : 'Nuestra identidad está moldeada por nuestra búsqueda implacable de empujar los límites y crear soluciones impactantes. Abrazamos los desafíos, celebramos los éxitos y dejamos una marca duradera en el mundo de la tecnología.'
              }}
            </p>
            <span
              class="mdi mdi-fingerprint huella2 icono"
              style="
                font-size: 48px;
                border-radius: 1000px;
                height: 70px;
                width: 70px;
                display: none;
                transition: 1s;
              "
            ></span>
          </div>
        </div>
      </div>
      <hr />
      <!-- DIVISION -->
      <div class="monitor onleft" style="padding-top: 25px">
        <div class="tag left">
          <div class="mb-4 onleft" style="display: flex">
            <h1
              style="
                font-size: 30px;
                margin: auto 0px;
                font-weight: bold;
                letter-spacing: 1px;
                border-bottom: 2px solid black;
              "
            >
              {{ storeLang.languaje == 'en' ? 'The Team' : 'Equipo' }}
            </h1>
          </div>
          <p style="font-family: 'DM Sans', sans-serif; font-size: 16px; text-align: initial">
            {{
              storeLang.languaje == 'en'
                ? "Our team is a powerhouse of talent, united by a common passion for technology and a relentless pursuit of excellence. Team's synergy is the driving force behind our ability to exceed expectations and make a meaningful impact."
                : 'Nuestro equipo es una potencia de talentos, unidos por una pasión común por la tecnología y una incansable búsqueda de la excelencia. La sinergia del equipo es la fuerza impulsora detrás de nuestra capacidad para superar las expectativas y tener un impacto significativo.'
            }}
          </p>
        </div>
        <span
          class="mdi mdi-wall icono"
          style="font-size: 48px; border-radius: 1000px; height: 70px; width: 70px; transition: 1s"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { store } from '../stores/languaje.js'
import $ from 'jquery'
const storeLang = store()

$(document).on('scroll', function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $('.tag')

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass('visible')
    } else {
      $(tag).removeClass('visible')
    }
  }
})
</script>

<style scoped>
#aboutus {
  background-color: #f0f0f0;
  height: fit-content;
  padding: 90px 40px 120px;
}
.cont {
  padding-top: 30px;
  width: 1100px;
  margin: auto;
}
.onleft {
  justify-content: flex-start;
}
.onright {
  justify-content: flex-end;
}
.rightxt {
  text-align: end;
}
.monitor {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
}
.aside {
  text-align: center;
}

.left {
  width: 520px;
  padding-right: 50px;
  margin-right: 0px;
}
.tag {
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 3s;
}
.tag.visible {
  opacity: 1;
  transform: translate(0, 0);
}

.rightdiv {
  width: 520px;
  padding-left: 50px;
  margin-left: 0px;
}
.right:hover {
  box-shadow: inset 400px 0 0 0 #38393b;
  color: rgb(255, 255, 255);
}

.icono:hover {
  cursor: pointer;
  font-size: 52px !important;
}

@media screen and (max-width: 922px) {
  .cont {
    width: 100%;
  }
  .rightxt {
    text-align: initial !important;
    padding-right: 50px;
  }
  .onright {
    justify-content: flex-start;
  }
  .huella {
    display: none;
  }
  .huella2 {
    display: block !important;
    margin-bottom: 50px !important;
  }
  .rightdiv {
    width: 100%;
    padding-left: 0px;
    margin-left: 0px;
  }
}
</style>
