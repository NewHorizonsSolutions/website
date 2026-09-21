<template>
  <section id="contact">
    <div class="contact-section">
      <div class="contact-divider" aria-hidden="true"></div>
      <header class="contact-header">
        <h2 class="title">{{ storeLang.languaje == 'en' ? 'Contact Us' : 'Contáctanos' }}</h2>
        <p class="description">
          {{
            storeLang.languaje == 'en' ? 'We will email you soon.' : 'Te vamos a responder pronto.'
          }}
        </p>
      </header>

      <div class="contact-grid">
        <div class="contact-form-card">
          <form
            name="contactos"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            id="contact-form"
            class="contact-form"
            role="form"
          >
            <input type="hidden" name="form-name" value="contactos" />

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

            <button class="btn send-button" id="submit" type="submit">
              {{ storeLang.languaje == 'en' ? 'SEND' : 'ENVIAR' }}
            </button>
          </form>
        </div>

        <aside class="contact-aside">
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

          <div class="map-wrap">
            <iframe
              title="New Horizons Solutions office — Sarmiento 1828, CABA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9377154861277!2d-58.3952473241178!3d-34.60573645760501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac227399ed1%3A0xaee820b239723567!2sSarmiento%201828%2C%20C1044AAB%20CABA!5e0!3m2!1sen!2sar!4v1686682189059!5m2!1sen!2sar"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
import { store } from '../stores/languaje.js'
const storeLang = store()
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
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}

.contact-form-card {
  background: #fff;
  border-radius: 20px;
  padding: 32px 36px 36px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  align-items: center;
  text-align: center;
  gap: 28px;
  padding: 8px 0;
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

.map-wrap {
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
  aspect-ratio: 4 / 3;
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

@media screen and (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 520px;
    margin: 0 auto;
  }

  .contact-form-card {
    padding: 28px 24px 32px;
  }

  .contact-aside {
    padding-bottom: 8px;
  }

  .map-wrap {
    max-width: none;
  }
}

@media screen and (max-width: 480px) {
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
