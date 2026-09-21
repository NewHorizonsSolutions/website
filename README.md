# New Horizons Solutions — Website

Sitio corporativo de [New Horizons Solutions](https://nhsolutions.com.ar): SPA en Vue 3 con secciones de una sola página (inicio, servicios, tecnologías, clientes, nosotros, contacto). Idioma **español por defecto**; también **inglés** en el cliente (Pinia + `localStorage`, clave `nh-lang`).

## Requisitos

- Node.js **≥ 22**

## Comandos

| Comando | Descripción |
|--------|-------------|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo (Vite) |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run lint` | ESLint (+ fix) en `.vue` y `.js` |
| `npm run format` | Prettier sobre `src/` |
| `npm run netlify-deploy` | Instala y compila (usado en Netlify) |

## Stack

- **Vue 3** + **Vue Router** + **Pinia**
- **Vite 4**
- **Vuetify 3**, **Bootstrap Vue 3**, jQuery (animaciones en servicios)
- Despliegue: **Netlify** (`netlify.toml`)

## Estructura del proyecto

```
├── index.html          # Meta SEO base, JSON-LD, verificación Google
├── public/             # Archivos servidos en la raíz (robots, sitemap, assets estáticos)
├── src/
│   ├── App.vue         # Layout: header, router-view, footer; aplica SEO al cambiar idioma
│   ├── main.js
│   ├── seo.js          # Título, description y Open Graph dinámicos (EN/ES)
│   ├── router/         # Ruta `/` + scroll a anclas (#contact, etc.)
│   ├── stores/         # Pinia: idioma (`nh-lang` en localStorage)
│   ├── views/          # HomeView (landing completa)
│   └── components/     # Hero, servicios, tech, clientes, about, contacto…
└── netlify.toml        # Build + redirect SPA (/* → index.html)
```

Los recursos referenciados desde la UI (`logo.png`, `video.mp4`, iconos de servicios, logos de clientes, etc.) van en **`public/`** para que queden en la raíz del sitio tras el build.

## SEO y Google Search

Configuración orientada a indexación de la SPA:

- **`index.html`**: `description`, canonical, Open Graph, Twitter Card, `hreflang`, datos estructurados (Schema.org), meta de verificación de Search Console.
- **`public/robots.txt`**: permite rastreo y apunta al sitemap.
- **`public/sitemap.xml`**: URL principal del sitio (por defecto `https://nhsolutions.com.ar/`).
- **`src/seo.js`**: al cambiar idioma se actualizan `document.title`, `lang`, description y tags OG/Twitter.

Tras un deploy a producción:

1. Verificar la propiedad en [Google Search Console](https://search.google.com/search-console).
2. En **Sitemaps**, enviar: `https://nhsolutions.com.ar/sitemap.xml`
3. Usar **Inspección de URL** en la home para solicitar indexación si hace falta.

### URL del sitio (opcional)

Canonical, sitemap y OG usan `https://nhsolutions.com.ar` por defecto. Para otro dominio en build:

```sh
VITE_SITE_URL=https://tu-dominio.com npm run build
```

En Netlify podés definir `VITE_SITE_URL` en variables de entorno del sitio.

## Formulario de contacto

Formulario compatible con **Netlify Forms** (`data-netlify` en el componente de contacto + formulario oculto en `index.html`).

## Desarrollo local

```sh
git clone <repo>
cd website
npm install
npm run dev
```

Abrir la URL que muestra Vite (por ejemplo `http://localhost:5173`).
