export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://nhsolutions.com.ar'

const PAGE_META = {
  en: {
    title: 'New Horizons Solutions | Technology & Custom Software',
    description:
      'Custom software, platform engineering, cybersecurity consulting, and integrations. New Horizons Solutions helps businesses evolve with technology — including AI capabilities we are actively building.'
  },
  es: {
    title: 'New Horizons Solutions | Tecnología y Software a Medida',
    description:
      'Software a medida, plataformas de despliegue, consultoría en ciberseguridad e integraciones. New Horizons Solutions acompaña la evolución de tu negocio con tecnología — incluidas capacidades de IA en desarrollo.'
  }
}

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function applyPageSeo(lang) {
  const locale = lang === 'es' ? 'es' : 'en'
  const { title, description } = PAGE_META[locale]

  document.title = title
  document.documentElement.lang = locale

  setMeta('name', 'description', description)
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', SITE_URL)
  setMeta('property', 'og:locale', locale === 'es' ? 'es_AR' : 'en_US')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
}
