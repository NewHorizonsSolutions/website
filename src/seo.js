export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://nhsolutions.com.ar'

const PAGE_META = {
  en: {
    title: 'New Horizons Solutions | Custom Software Development',
    description:
      'End-to-end custom software design, development, and implementation. New Horizons Solutions helps businesses streamline production and grow with tailored technology.'
  },
  es: {
    title: 'New Horizons Solutions | Desarrollo de Software a Medida',
    description:
      'Diseño, desarrollo e implementación de software a medida de punta a punta. New Horizons Solutions agiliza tu producción y suma valor a tu negocio.'
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
