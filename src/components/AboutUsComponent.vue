<template>
  <section id="aboutus">
    <div class="cont">
      <div class="monitor onleft" style="padding-bottom: 25px">
        <div class="tag left">
          <div class="mb-4 onleft" style="display: flex">
            <h2
              style="
                font-size: 30px;
                margin: auto 0px;
                font-weight: bold;
                letter-spacing: 1px;
                border-bottom: 2px solid black;
              "
            >
              {{ storeLang.languaje == 'en' ? 'About Us' : 'Nosotros' }}
            </h2>
          </div>
          <p style="font-family: 'DM Sans', sans-serif; font-size: 16px; text-align: initial">
            {{
              storeLang.languaje == 'en'
                ? 'New Horizons Solutions is a technology partner based in Buenos Aires. We build custom software, platform delivery practices, and cybersecurity consulting — working closely with each client to understand how their business operates before we build.'
                : 'New Horizons Solutions es un partner tecnológico con base en Buenos Aires. Desarrollamos software a medida, plataformas de despliegue y consultoría en ciberseguridad — trabajando cerca de cada cliente para entender cómo opera su negocio antes de construir.'
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
            <h2
              style="
                font-size: 30px;
                margin: auto 0px;
                font-weight: bold;
                letter-spacing: 1px;
                border-bottom: 2px solid black;
              "
            >
              {{ storeLang.languaje == 'en' ? 'How we partner' : 'Cómo acompañamos' }}
            </h2>
          </div>
          <div style="display: flex; align-items: center">
            <p class="rightxt" style="font-family: 'DM Sans', sans-serif; font-size: 16px">
              {{
                storeLang.languaje == 'en'
                  ? 'We aim for long-term relationships: clear communication, realistic scopes, and solutions that can grow with you. We combine product thinking, engineering, and operations so technology supports daily work — not the other way around.'
                  : 'Buscamos relaciones de largo plazo: comunicación clara, alcances realistas y soluciones que puedan crecer con vos. Combinamos mirada de producto, ingeniería y operación para que la tecnología acompañe el día a día — no al revés.'
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
            <h2
              style="
                font-size: 30px;
                margin: auto 0px;
                font-weight: bold;
                letter-spacing: 1px;
                border-bottom: 2px solid black;
              "
            >
              {{ storeLang.languaje == 'en' ? 'Our capabilities' : 'Capacidades' }}
            </h2>
          </div>
          <p style="font-family: 'DM Sans', sans-serif; font-size: 16px; text-align: initial">
            {{
              storeLang.languaje == 'en'
                ? 'Multidisciplinary team: analysis, UX, development, integrations, cloud, and emerging tools including AI. We stay up to date because our clients need solutions that remain useful over time — not one-off deliveries.'
                : 'Equipo multidisciplinario: análisis, UX, desarrollo, integraciones, cloud y herramientas emergentes, incluida IA. Nos actualizamos porque nuestros clientes necesitan soluciones útiles en el tiempo — no entregas aisladas.'
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
  padding: 90px 40px 72px;
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
