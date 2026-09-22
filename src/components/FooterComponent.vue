<template>
  <section id="contact">
    <div class="contact-section">
      <div class="contact-divider" aria-hidden="true"></div>
      <header class="contact-header">
        <h2 class="title">
          {{
            storeLang.languaje == 'en' ? 'Do you have a project in mind?' : '¿Tenés un proyecto en mente?'
          }}
        </h2>
        <p class="description">
          {{
            storeLang.languaje == 'en'
              ? 'Tell us what you need and we will figure out together the best way to move forward.'
              : 'Contanos qué necesitás y analizamos juntos la mejor forma de llevarlo adelante.'
          }}
        </p>
      </header>

      <div class="contact-grid">
        <div class="contact-form-card">
          <form
            id="contact-form"
            class="contact-form"
            role="form"
            novalidate
            @submit.prevent="submitContact"
          >
            <p class="hidden-honeypot" aria-hidden="true">
              <label>
                No completar:
                <input type="text" name="bot-field" tabindex="-1" autocomplete="off" />
              </label>
            </p>

            <input
              type="text"
              class="form-control"
              id="name"
              :placeholder="storeLang.languaje == 'en' ? 'NAME' : 'NOMBRE'"
              name="name"
              required
            />

            <input
              type="email"
              class="form-control"
              id="email"
              :placeholder="storeLang.languaje == 'en' ? 'EMAIL' : 'CORREO ELECTRÓNICO'"
              name="email"
              required
            />

            <textarea
              class="form-control form-control--message"
              rows="6"
              :placeholder="storeLang.languaje == 'en' ? 'MESSAGE' : 'MENSAJE'"
              name="message"
              required
            ></textarea>

            <button
              class="btn send-button"
              id="submit"
              type="submit"
              :disabled="formStatus === 'sending'"
            >
              {{
                formStatus === 'sending'
                  ? storeLang.languaje == 'en'
                    ? 'SENDING…'
                    : 'ENVIANDO…'
                  : storeLang.languaje == 'en'
                    ? 'SEND'
                    : 'ENVIAR'
              }}
            </button>
            <p v-if="formStatus === 'success'" class="form-feedback form-feedback--success" role="status">
              {{
                storeLang.languaje == 'en'
                  ? 'Message sent. We will get back to you soon.'
                  : 'Mensaje enviado. Te responderemos pronto.'
              }}
            </p>
            <p v-else-if="formStatus === 'error'" class="form-feedback form-feedback--error" role="alert">
              {{
                storeLang.languaje == 'en'
                  ? 'Something went wrong. Try again or write to info@nhsolutions.com.ar.'
                  : 'No se pudo enviar. Intentá de nuevo o escribinos a info@nhsolutions.com.ar.'
              }}
            </p>
          </form>
        </div>

        <aside class="contact-aside">
          <div class="contact-side-card">
            <a class="contact-email" href="mailto:info@nhsolutions.com.ar">
              info@nhsolutions.com.ar
            </a>

            <ul class="social-media-list">
              <li>
                <a
                  href="https://www.linkedin.com/company/solutionsnewhorizons"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i class="mdi mdi-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NewHorizonsSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i class="mdi mdi-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://nhsolutions.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <i class="mdi mdi-web" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="mailto:info@nhsolutions.com.ar" aria-label="Email">
                  <i class="mdi mdi-email" aria-hidden="true"></i>
                </a>
              </li>
            </ul>

            <div class="map-block">
              <div class="map-card__header">
                <span class="mdi mdi-map-marker-outline map-card__icon" aria-hidden="true"></span>
                <div class="map-card__text">
                  <p class="map-card__label">
                    {{ storeLang.languaje == 'en' ? 'Our office' : 'Nuestra oficina' }}
                  </p>
                  <p class="map-card__address">Sarmiento 1828, CABA</p>
                </div>
              </div>
              <div class="map-wrap">
                <iframe
                  title="New Horizons Solutions office — Sarmiento 1828, CABA"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9377154861277!2d-58.3952473241178!3d-34.60573645760501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac227399ed1%3A0xaee820b239723567!2sSarmiento%201828%2C%20C1044AAB%20CABA!5e0!3m2!1sen!2sar!4v1686682189059!5m2!1sen!2sar"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div class="footer-text">
      <p>
        &copy; New Horizons Solutions -
        {{ storeLang.languaje == 'en' ? 'Software Solutions' : 'Soluciones de Software' }} -
        {{ new Date().getFullYear() }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../stores/languaje.js'

const storeLang = store()
const formStatus = ref('idle')

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || '/.netlify/functions/send-contact'

async function submitContact(event) {
  const form = event.target
  formStatus.value = 'sending'

  const payload = Object.fromEntries(new FormData(form).entries())

  try {
    const response = await fetch(contactApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error('Contact API failed')
    }

    form.reset()
    formStatus.value = 'success'
  } catch {
    formStatus.value = 'error'
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#contact {
  width: 100%;
  background-color: #ececec;
  border-top: 1px solid #ddd;
}

.contact-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 24px 72px;
}

.contact-divider {
  width: 56px;
  height: 2px;
  margin: 0 auto 40px;
  background-color: #1b1b1b;
  border-radius: 1px;
}

.contact-header {
  text-align: center;
  margin-bottom: 48px;
}

.title {
  font-size: 40px;
  font-weight: bold;
  color: #000;
  margin: 0 0 12px;
}

.description {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  letter-spacing: 3px;
  margin: 0;
  color: #333;
}

.contact-grid {
  display: flex;
  flex-direction: row;
  gap: 28px;
  margin: 0 auto;
  width: 100%;
}

.contact-form-card,
.contact-side-card {
  background: #fff;
  border-radius: 20px;
  padding: 32px 36px 36px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hidden-honeypot {
  position: absolute;
  left: -9999px;
  height: 0;
  overflow: hidden;
  margin: 0;
}

.form-feedback {
  margin: 8px 0 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.45;
}

.form-feedback--success {
  color: #1a6b3a;
}

.form-feedback--error {
  color: #a32b2b;
}

.send-button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.form-control {
  width: 100%;
  box-sizing: border-box;
  background-color: #f5f5f5;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  margin: 12px 0 0;
  padding: 14px 16px;
  color: #000;
  letter-spacing: 1px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-control:focus {
  outline: none;
  border-color: #414345;
  box-shadow: 0 0 0 3px rgba(65, 67, 69, 0.15);
}

.form-control--message {
  resize: vertical;
  min-height: 140px;
}

.send-button {
  margin-top: 24px;
  width: 100%;
  height: 56px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
  border: none;
  border-radius: 12px;
  background: linear-gradient(to top, #020202, #414345);
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
}

.send-button:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  color: #fff;
}

.send-button:active {
  transform: translateY(1px);
}

.contact-aside {
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: 100%;
}

.contact-side-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.map-block {
  width: 100%;
}

.contact-email {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  letter-spacing: 0.5px;
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
  word-break: break-word;
}

.contact-email:hover {
  border-bottom-color: #000;
}

.social-media-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.social-media-list li {
  margin: 0;
}

.social-media-list a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  color: #fff;
  background-color: #1b1b1b;
  font-size: 22px;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.social-media-list a:hover {
  background-color: #fff;
  color: #000;
  box-shadow: 0 0 0 1px #1b1b1b;
  transform: scale(1.05);
}

.map-card__header {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  text-align: left;
}

.map-card__icon {
  font-size: 28px;
  color: #1b1b1b;
  line-height: 1;
  margin-top: 2px;
}

.map-card__label {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #555;
  margin: 0 0 4px;
}

.map-card__address {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  margin: 0;
  line-height: 1.4;
}

.map-wrap {
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  aspect-ratio: 4 / 3;
  background: #f0f0f0;
}

.map-wrap iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.footer-text {
  text-align: center;
  font-size: 12px;
  margin: 0;
  padding: 28px 16px;
  background: linear-gradient(to top, #020202, #414345);
  color: #fff;
}

.footer-text p {
  margin: 0;
}

@media screen and (max-width: 480px) {
  .contact-form-card,
  .contact-side-card {
    padding: 28px 24px 32px;
  }

  .contact-section {
    padding: 72px 16px 56px;
  }

  .contact-header {
    margin-bottom: 32px;
  }

  .title {
    font-size: 32px;
  }

  .description {
    font-size: 14px;
    letter-spacing: 2px;
  }

  .social-media-list a {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
}
</style>
