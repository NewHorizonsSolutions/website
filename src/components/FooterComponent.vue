<template>
  <section id="contact">
    <!-- <h1 class="section-header">Contact</h1> -->

    <div class="contact-wrapper">
      <!-- Left contact page -->
      <div class="content">
        <h1 class="title">{{ storeLang.languaje == 'en' ? 'Contact Us' : 'Contáctanos' }}</h1>
        <p class="description pb-4">
          {{
            storeLang.languaje == 'en' ? 'We will email you soon.' : 'Te vamos a responder pronto.'
          }}
        </p>
        <form
          name="contactos"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          id="contact-form"
          class="form-horizontal"
          role="form"
          style="margin: auto"
        >
          <input type="hidden" name="form-name" value="contactos" />

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="name"
                :placeholder="storeLang.languaje == 'en' ? 'NAME' : 'NOMBRE'"
                name="name"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                class="form-control"
                id="email"
                :placeholder="storeLang.languaje == 'en' ? 'EMAIL' : 'CORREO ELECTRÓNICO'"
                name="email"
                required
              />
            </div>
          </div>

          <textarea
            class="form-control"
            rows="10"
            :placeholder="storeLang.languaje == 'en' ? 'MESSAGE' : 'MENSAJE'"
            name="message"
            required
          ></textarea>

          <button class="btn send-button" id="submit" type="submit" value="SEND">
            {{ storeLang.languaje == 'en' ? 'SEND' : 'ENVIAR' }}
          </button>
        </form>
      </div>
      <!-- Left contact page -->

      <div class="direct-contact-container content-left">
        <ul class="contact-list" style="width: fit-content; margin: auto">
          <li class="list-item">
            <i class="fa fa-envelope fa-2x"
              ><span class="contact-text gmail"
                ><a href="mailto:info@nhsolutions.com.ar" title="Send me an email"
                  >info@nhsolutions.com.ar</a
                ></span
              ></i
            >
          </li>
        </ul>
        <ul class="social-media-list" style="width: fit-content; margin: auto">
          <a
            href="https://www.linkedin.com/company/solutionsnewhorizons"
            target="_blank"
            class="contact-icon"
          >
            <li class="tocado">
              <i class="mdi mdi-linkedin" aria-hidden="true"></i></li
          ></a>
          <a href="https://github.com/NewHorizonsSolutions" target="_blank" class="contact-icon">
            <li class="tocado">
              <i class="mdi mdi-github" aria-hidden="true"></i>
            </li>
          </a>
          <a href="https://nhsolutions.com.ar/" target="_blank" class="contact-icon">
            <li class="tocado">
              <i class="mdi mdi-web" aria-hidden="true"></i>
            </li>
          </a>
          <a href="mailto:info@nhsolutions.com.ar" target="_blank" class="contact-icon">
            <li class="tocado">
              <i class="mdi mdi-email" aria-hidden="true"></i>
            </li>
          </a>
        </ul>
        <hr />

        <div class="copyright" style="width: fit-content; margin: auto; margin-bottom: 60px">
          {{ new Date().getFullYear() }} &copy;
          {{ storeLang.languaje == 'en' ? 'ALL OF THE RIGHTS RESERVED' : 'DERECHOS RESERVADOS' }}
        </div>
        <div class="mapa" style="width: fit-content; height: fit-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9377154861277!2d-58.3952473241178!3d-34.60573645760501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac227399ed1%3A0xaee820b239723567!2sSarmiento%201828%2C%20C1044AAB%20CABA!5e0!3m2!1sen!2sar!4v1686682189059!5m2!1sen!2sar"
            width="300"
            height="410"
            style="
              border-radius: 20px;
              filter: drop-shadow(-2px 2px 15px rgba(0, 0, 0, 0.7));
              overflow: hidden;
            "
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="footer-text">
      <p style="margin: 0px">
        &copy; New Horizons Solutions -
        {{ storeLang.languaje == 'en' ? 'Software Solutions' : 'Soluciones de Software' }} -
        {{ new Date().getFullYear() }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { store } from '../stores/languaje.js'
const storeLang = store()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#contact {
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-color: #f0f0f0;
}

.title {
  font-size: 40px;
  text-align: center;
  padding: 50px 0px 0px;
  font-weight: bold;
  color: black;
}

.description {
  font-size: 14px;
  letter-spacing: 3px;
  text-align: center;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 60px 'Oswald', sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  /*float: left;*/
  max-width: 400px;
  font-weight: 400;
}

.form-control,
textarea {
  max-width: 400px;
  background-color: whitesmoke;
  font-family: 'DM Sans', sans-serif;
  margin: 20px 0;
  color: black;
  letter-spacing: 1px;
}

.send-button {
  margin: 15px 0px 70px;
  height: 80px;
  width: 400px;
  overflow: hidden;
  background: #232526;
  background: -webkit-linear-gradient(to right, #232526, #414345);
  background: linear-gradient(to top, #020202, #414345);
  color: white;
  border: 2px solid black !important;
}

.send-button:hover {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  color: white;
}

.footer-text {
  text-align: center;
  font-size: 12px;
  color: black;
  margin: 0px;
  padding: 30px;
  background: #232526;
  background: -webkit-linear-gradient(to right, #232526, #414345);
  background: linear-gradient(to top, #020202, #414345);
  color: white;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all 4s ease-in-out;
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.content-left {
  width: fit-content;
  padding: 60px 0px 60px 60px;
}

.contact-text {
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  color: black;
}

.contact-text a {
  color: black;
  text-decoration: none;
  transition: 1s;
}

.contact-text a:hover {
  border-bottom: 1px solid black;
  text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.tocado:hover {
  color: black !important;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27, 27, 27);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff;
}

.social-media-list li:hover:after {
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255, 255, 255, 0.6);
}
.content {
  background: white;
  height: fit-content;
  width: 600px;
  border-radius: 20px;
  padding: 0px 40px 0px 40px;
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container,
  .form-horizontal {
    margin: 0 auto;
  }

  .content {
    background: transparent;
    width: 100%;
    padding: 0px !important;
    margin: auto;
  }

  .content-left {
    width: fit-content;
    padding: 0px;
    margin: auto !important;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {
  .direct-contact-container,
  .form-wrapper {
    float: none;
    margin: 0 auto;
  }
  .form-control,
  textarea {
    margin: 20px auto;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>
