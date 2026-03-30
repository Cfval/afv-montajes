# AFV Cocinas — Especificaciones del Proyecto

## 1. Visión General

**Proyecto:** Web corporativa / portfolio para un profesional autónomo de montaje y venta de cocinas.
**Nombre:** AFV Cocinas
**Zona:** Provincia de Alicante, España
**Objetivo:** Web tipo escaparate premium que genere confianza, muestre trabajos realizados y capte leads (presupuestos).
**Tono:** Profesional, premium, elegante. Cocinas de gama alta.

---

## 2. Stack Tecnológico

### Frontend (core)
| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 14+ (App Router) | Framework React con SSG, optimización de imágenes, SEO |
| **TypeScript** | 5+ | Tipado estático |
| **Tailwind CSS** | 3.4+ | Sistema de estilos utility-first |
| **Framer Motion** | 11+ | Animaciones de scroll, transiciones, hover effects |
| **Shadcn/ui** | Latest | Componentes base accesibles (botones, inputs, modals) |

### Librerías adicionales
| Librería | Propósito |
|---|---|
| `next-mdx-remote` o `@next/mdx` | Blog con archivos MDX |
| `yet-another-react-lightbox` | Lightbox para galería de imágenes |
| `react-hook-form` + `zod` | Formularios con validación |
| `resend` | Envío de emails (formularios de contacto/presupuesto) |
| `react-compare-slider` | Slider antes/después (Fase 5) |
| `embla-carousel` | Carrusel para testimonios o hero |
| `@react-google-maps/api` | Mapa de contacto |

### Hosting y deploy
| Servicio | Propósito |
|---|---|
| **Vercel** | Hosting (plan gratuito), deploy automático desde GitHub |
| **GitHub** | Repositorio del código |
| **Resend** | Servicio de emails (plan gratuito: 100 emails/día) |

### NO se necesita
- Backend con Spring Boot / Java
- Base de datos
- CMS headless
- Autenticación

---

## 3. Identidad Visual

### 3.1 Paleta de Colores

```
FONDOS (de más oscuro a más claro)
──────────────────────────────────
--bg-dark:      #0E0E0C    → Fondo principal del body
--bg-card:      #1A1A17    → Tarjetas, cards, superficies elevadas
--bg-surface:   #222220    → Superficies secundarias, hovers
--bg-subtle:    #2A2A27    → Bordes de secciones, separadores sutiles

DORADOS (acento principal)
──────────────────────────
--gold:         #C9A96E    → Color principal de acento (CTAs, títulos destacados, iconos)
--gold-light:   #E2CFA0    → Hover de dorado, énfasis extra
--gold-dim:     #8B7444    → Dorado sutil (bordes, líneas decorativas)
--gold-glow:    rgba(201, 169, 110, 0.15)  → Glows y sombras sutiles

TEXTOS
──────
--text-primary:   #F2F0E8  → Texto principal (blanco roto cálido)
--text-secondary: #9C9A8E  → Texto secundario (descripciones, párrafos)
--text-muted:     #6B6A60  → Texto terciario (placeholders, hints)

ESTADOS
───────
--success:  #5DCAA5   → Confirmaciones
--error:    #E24B4A   → Errores en formularios
--warning:  #EF9F27   → Avisos
```

### 3.2 Tipografías (Google Fonts)

```
TÍTULOS — Cormorant Garamond
────────────────────────────
Familia: 'Cormorant Garamond', serif
Pesos:   400 (normal), 500 (medium), 600 (semibold), 700 (bold)
Uso:     Todos los títulos (h1-h4), nombre de marca, textos destacados

CUERPO — Outfit
───────────────
Familia: 'Outfit', sans-serif
Pesos:   300 (light), 400 (regular), 500 (medium)
Uso:     Párrafos, navegación, botones, labels, formularios
```

### 3.3 Escalas Tipográficas

```
DESKTOP                          MOBILE
────────                         ──────
h1: 56px / 1.1   (Cormorant)    h1: 36px / 1.15
h2: 36px / 1.2   (Cormorant)    h2: 28px / 1.25
h3: 24px / 1.3   (Cormorant)    h3: 20px / 1.3
h4: 18px / 1.4   (Cormorant)    h4: 16px / 1.4
body: 16px / 1.7 (Outfit 300)   body: 15px / 1.6
small: 14px      (Outfit 400)   small: 13px
caption: 12px    (Outfit 400)   caption: 11px
tag/label: 11px  (Outfit 500, uppercase, letter-spacing: 3-4px)
```

### 3.4 Espaciado y Layout

```
CONTENEDOR MÁXIMO
─────────────────
max-width: 1280px (contenido general)
max-width: 1440px (imágenes a sangre / hero)
padding horizontal: 32px desktop, 20px mobile

SECCIONES
─────────
padding vertical: 96px desktop, 64px mobile (entre secciones)
gap entre elementos: 16px-24px

BORDES DECORATIVOS
──────────────────
Separadores entre secciones: 0.5px solid rgba(201, 169, 110, 0.1)
Bordes de tarjetas: 0.5px solid rgba(201, 169, 110, 0.08)
Border-radius tarjetas: 0px (estilo angular = premium)
Border-radius botones: 0px
Border-radius imágenes: 0px (angular, premium) o 4px máximo
```

### 3.5 Imágenes Grandes y Efectos Visuales

```
IMÁGENES FULL-BLEED (borde a borde, sin padding)
─────────────────────────────────────────────────
Dónde: Hero de CADA página, secciones parallax entre bloques, galería lightbox
Tamaño: 100vw (ancho completo de pantalla), height variable
Overlay: gradient oscuro semitransparente para legibilidad del texto encima
Componente next/image: priority={true} en hero, sizes="100vw"

SECCIONES PARALLAX (imagen fija al hacer scroll)
─────────────────────────────────────────────────
Efecto: background-attachment: fixed (CSS) o scroll-driven con Framer Motion
Dónde: Entre servicios y portfolio, entre portfolio y stats, en sobre-mi
Altura: min-height 400px desktop, 280px mobile
Contenido: imagen de cocina a sangre + texto centrado o solo imagen
Ejemplo: Foto panorámica de cocina terminada con overlay oscuro y frase tipo
         "Cada detalle importa" en Cormorant Garamond dorado

IMÁGENES DESTACADAS EN PÁGINAS
──────────────────────────────
/cocinas/[slug]:  Imagen principal a sangre completa (hero del detalle)
                  + galería de 3-6 fotos debajo con lightbox
/sobre-mi:        Foto grande del profesional trabajando (hero)
/galeria:         Masonry con imágenes de tamaños variados, click → lightbox fullscreen
/blog/[slug]:     Imagen de cabecera a sangre completa

OPTIMIZACIÓN (next/image)
─────────────────────────
Formatos: WebP/AVIF automático
Placeholder: blur (blurDataURL generado en build)
Lazy loading: todas excepto hero (priority)
Sizes responsive: sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
Quality: 85 (buen balance calidad/peso)
```

### 3.6 Componentes Base

#### Botón Primario (CTA)
```
Background: var(--gold)
Color texto: var(--bg-dark)
Padding: 14px 32px
Font: Outfit 500, 12px, uppercase, letter-spacing: 2.5px
Hover: background var(--gold-light)
Transición: all 0.3s ease
Icono: flecha → a la derecha (opcional)
```

#### Botón Secundario (outline)
```
Background: transparent
Border: 1px solid var(--gold)
Color texto: var(--gold)
Hover: background var(--gold), color var(--bg-dark)
Resto: igual que primario
```

#### Tags / Labels de sección
```
Font: Outfit 500, 11px, uppercase
Letter-spacing: 4px
Color: var(--gold)
Margen inferior: 12-16px
```

#### Tarjetas de servicio
```
Background: var(--bg-card)
Border: 0.5px solid rgba(201, 169, 110, 0.08)
Padding: 28px 24px
Hover: border-color rgba(201, 169, 110, 0.25), translateY(-2px)
Transición: 0.3s ease
```

---

## 4. Estructura de Rutas y Páginas

### 4.1 Mapa del sitio

```
/                    → Home (página principal)
/sobre-mi            → Sobre mí / Quién soy
/cocinas             → Portfolio de cocinas (listado)
/cocinas/[slug]      → Detalle de cocina individual
/galeria             → Galería de imágenes masiva
/presupuesto         → Formulario de presupuesto online
/contacto            → Página de contacto
/blog                → Listado de artículos
/blog/[slug]         → Artículo individual
```

### 4.2 Home (`/`)

**Objetivo:** Impactar visualmente, generar confianza, dirigir a presupuesto.

**Secciones en orden de scroll:**

1. **Hero Section**
   - Imagen/foto de cocina espectacular a sangre o con overlay oscuro
   - Tag superior: "MONTAJE · DISEÑO · REFORMA"
   - Título grande serif: "Tu cocina a medida" (o similar)
   - Párrafo breve descriptivo
   - CTA principal: "Pide presupuesto →"
   - Animación: fade-in + slide-up al cargar

2. **Servicios** (3 columnas)
   - Tag: "SERVICIOS"
   - Título: "Lo que hacemos"
   - 3 tarjetas: Montaje de cocinas | Diseño integral | Venta directa
   - Cada tarjeta: icono circular dorado + título serif + descripción
   - Animación: stagger fade-in al entrar en viewport

3. **IMAGEN PARALLAX** (interstitial full-bleed)
   - Foto panorámica de cocina a sangre completa, 100vw
   - Efecto parallax: imagen fija mientras el contenido sube
   - Altura: 400px desktop, 280px mobile
   - Overlay oscuro sutil + frase centrada en Cormorant dorado (opcional)
   - Ejemplo: "Cada detalle importa"

4. **Portfolio Destacado** (grid asimétrico)
   - Tag: "PORTFOLIO"
   - Título: "Trabajos recientes"
   - Grid: 1 imagen grande (2 filas) + 2 imágenes apiladas a la derecha
   - Cada imagen con overlay gradient + etiqueta de estilo + nombre
   - Hover: escala sutil
   - Enlace: "Ver todos los trabajos →"

5. **IMAGEN PARALLAX** (segunda interstitial)
   - Otra foto de cocina diferente, mismo efecto parallax
   - Rompe la monotonía entre secciones de contenido

6. **Estadísticas** (barra horizontal)
   - 4 columnas con separadores verticales
   - Números grandes en Cormorant dorado
   - Labels en Outfit uppercase
   - Ejemplo: "15+ años" | "500+ cocinas" | "100% satisfacción" | "Alicante"
   - Animación: counter incrementando al entrar en viewport
w
5. **Marcas Colaboradoras**
   - Tag: "MARCAS COLABORADORAS"
   - Logos en fila, grises/apagados, hover resalta
   - Silestone, Siemens, Franke, Bosch, Neff, Smeg (ajustar a reales)

6. **Testimonios** (carrusel) — Fase 5
   - Carrusel con citas de clientes reales
   - Foto + nombre + ubicación + texto
   - Flechas de navegación doradas

7. **CTA Final**
   - Tag: "EMPEZAMOS"
   - Título: "Tu cocina perfecta te espera"
   - Párrafo + botón grande "Solicitar presupuesto →"

8. **Footer**
   - Logo AFV Cocinas
   - Links: Aviso legal, Privacidad, Cookies
   - Copyright
   - Redes sociales (iconos)

### 4.3 Sobre Mí (`/sobre-mi`)

**Objetivo:** Generar confianza personal. Poner cara al profesional.

**Secciones:**

1. **Hero con foto** — Foto del profesional trabajando + título "Quién soy"
2. **Historia** — Párrafos sobre trayectoria, años de experiencia, filosofía de trabajo
3. **Valores** — 3-4 valores con iconos (Calidad, Puntualidad, Confianza, Detalle)
4. **Proceso de trabajo** — Timeline visual: Contacto → Medición → Presupuesto → Montaje → Entrega
5. **CTA** — "¿Hablamos sobre tu cocina?"

### 4.4 Cocinas (`/cocinas`)

**Objetivo:** Explicar por qué elegir AFV Cocinas. Transmitir valores y diferenciación.

**Secciones:**

1. **Hero** — Título "Cocinas" + subtítulo descriptivo, imagen de fondo con overlay oscuro
2. **Cards de valores** (grid 2x2 desktop, 1 columna mobile)
   - 4 tarjetas estilo premium: Calidad | Funcionalidad | Diseño personalizado | Precio competitivo
   - Cada card: icono dorado + título serif + párrafo descriptivo
   - Animación stagger fade-in al scroll
3. **Sección editorial** (imagen + texto lado a lado)
   - Imagen grande a un lado, texto al otro
   - Título: "Personalizamos hasta el último detalle"
   - Párrafo + CTA "Ver galería →"
   - En mobile: imagen arriba, texto debajo
4. **Grid de cocinas** — Grid responsive (3 columnas desktop, 2 tablet, 1 mobile)
   - Filtros tipo pill: Todas | Modernas | Rústicas | Minimalistas | Con isla
   - Cada item: imagen principal + overlay con nombre + estilo
   - Click → `/cocinas/[slug]`
5. **CTA** — "¿No encuentras lo que buscas? Cuéntanos tu idea"

### 4.5 Detalle Cocina (`/cocinas/[slug]`)

**Contenido:**

- Galería de fotos (3-6 fotos) con lightbox
- Título de la cocina
- Descripción del proyecto
- Ficha técnica: estilo, materiales, metros, ubicación, duración del montaje
- Botón: "Quiero algo similar → Presupuesto"

### 4.6 Galería (`/galeria`)

**Objetivo:** Impactar con volumen visual. Demostrar experiencia.

**Layout:** Masonry grid (estilo Pinterest)
- Imágenes de distintos tamaños/ratios
- Lazy loading progresivo
- Click → lightbox a pantalla completa
- Filtros opcionales por categoría
- Animación: fade-in escalonado al cargar

### 4.7 Presupuesto Online (`/presupuesto`)

**Objetivo:** Captar leads cualificados.

**Formulario (react-hook-form + zod):**

```
Datos personales:
  - Nombre completo *
  - Email *
  - Teléfono *
  - Población (Alicante) *

Sobre tu cocina:
  - Tipo de servicio * (select): Montaje | Reforma integral | Diseño + montaje | Solo diseño | Otro
  - Metros aproximados (input number)
  - ¿Tienes electrodomésticos? (radio): Sí | No | Algunos
  - Descripción del proyecto (textarea)
  - Presupuesto orientativo (select): < 3.000€ | 3.000-6.000€ | 6.000-10.000€ | > 10.000€ | No sé

Adjuntos:
  - Subir fotos/planos (input file multiple, max 5 archivos, max 5MB cada uno)
    Formatos: jpg, png, pdf
    Preview de las imágenes seleccionadas

CTA: "Enviar solicitud de presupuesto"
Nota: "Te respondemos en menos de 48 horas"
```

**Comportamiento:**
- Validación en tiempo real con mensajes de error
- Al enviar → POST a `/api/contact` → Resend envía email al profesional
- Feedback visual: loading spinner → mensaje de éxito/error
- Las imágenes se convierten a base64 o se adjuntan al email

### 4.8 Contacto (`/contacto`)

**Secciones:**

1. **Info directa** — Teléfono, email, horario, zona de trabajo
2. **Formulario simple** — Nombre, email, mensaje (más simple que presupuesto)
3. **Mapa** — Google Maps embebido con ubicación/zona de trabajo
4. **WhatsApp** — Botón directo a WhatsApp (siempre visible)

### 4.9 Blog (`/blog`)

**Contenido:** Archivos MDX en `/content/blog/`

**Listado:** Grid de artículos con imagen, título, fecha, extracto
**Detalle:** Artículo completo con tipografía editorial, imágenes, índice lateral

**Ideas de artículos iniciales:**
- "Cómo elegir la encimera perfecta para tu cocina"
- "Tendencias en cocinas 2026"
- "5 errores comunes al reformar una cocina"
- "¿Cuánto cuesta montar una cocina? Guía de precios"
- "Materiales de cocina: ¿laminado, madera o lacado?"

---

## 5. Funcionalidades Especiales

### 5.1 Calculadora de Presupuesto Orientativo (Fase 5)

Mini-wizard interactivo de 3-4 pasos:

```
Paso 1: ¿Cuántos metros lineales tiene tu cocina?
        → Slider: 2m - 8m+

Paso 2: ¿Qué tipo de encimera prefieres?
        → Opciones: Laminado | Silestone | Granito | Dekton
        → Cada una con rango de precio por metro

Paso 3: ¿Incluir electrodomésticos?
        → Sí (gama media) | Sí (gama alta) | No

Paso 4: ¿Qué tipo de trabajo?
        → Solo montaje | Montaje + muebles | Reforma integral

Resultado: "Tu cocina podría costar entre X€ y Y€"
           + CTA: "Pide un presupuesto exacto →"
```

**Nota:** Los rangos de precio los definirá el profesional. La calculadora es orientativa.

### 5.2 Slider Antes/Después (Fase 5)

- Librería: `react-compare-slider`
- Componente reutilizable: `<BeforeAfter before={img1} after={img2} />`
- Usar en: Home (sección portfolio), página de cocinas, galería
- El usuario arrastra un divisor horizontal para ver antes/después

### 5.3 WhatsApp Flotante

- Botón fijo en esquina inferior derecha
- Icono de WhatsApp + tooltip "¿Hablamos?"
- Link: `https://wa.me/34XXXXXXXXX?text=Hola, me interesa...`
- Aparece tras 3 segundos de scroll
- Animación: bounce sutil al aparecer
- Z-index alto para estar siempre visible

### 5.4 Blog con MDX

Estructura de archivos:
```
/content/blog/
  ├── como-elegir-encimera.mdx
  ├── tendencias-cocinas-2026.mdx
  └── errores-reforma-cocina.mdx
```

Cada archivo MDX tiene frontmatter:
```yaml
---
title: "Cómo elegir la encimera perfecta"
date: "2026-03-15"
excerpt: "Guía completa de materiales, precios y durabilidad"
image: "/images/blog/encimeras.jpg"
tags: ["encimeras", "materiales", "guía"]
---
```

---

## 6. SEO y Rendimiento

### 6.1 SEO Técnico

- **Metadata** por página con Next.js Metadata API
- **Sitemap** automático con `next-sitemap`
- **Robots.txt** configurado
- **Open Graph** + Twitter Cards por página
- **Schema.org** para negocio local:
  ```json
  {
    "@type": "LocalBusiness",
    "name": "AFV Cocinas",
    "description": "Montaje profesional de cocinas en Alicante",
    "areaServed": "Provincia de Alicante",
    "telephone": "+34...",
    "address": { ... }
  }
  ```

### 6.2 Rendimiento

- Todas las imágenes con `next/image` (WebP/AVIF automático, lazy loading)
- Blur placeholder para imágenes pesadas
- Fuentes optimizadas con `next/font/google`
- CSS mínimo gracias a Tailwind (purge automático)
- Target: Lighthouse 90+ en todas las métricas

### 6.3 Legal (obligatorio en España)

- Aviso legal (datos del autónomo)
- Política de privacidad (RGPD)
- Política de cookies + banner de consentimiento
- Textos legales en formularios

---

## 7. Estructura del Proyecto

```
afv-cocinas/
├── public/
│   ├── images/
│   │   ├── hero/           # Imágenes hero de cada página
│   │   ├── cocinas/         # Fotos de cocinas (portfolio)
│   │   ├── galeria/         # Fotos adicionales
│   │   ├── blog/            # Imágenes de artículos
│   │   ├── brands/          # Logos de marcas (SVG preferible)
│   │   └── about/           # Fotos del profesional
│   ├── favicon.ico
│   └── og-image.jpg         # Open Graph default
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout global: metadata, fonts, navbar, footer, WhatsApp
│   │   ├── page.tsx         # Home
│   │   ├── sobre-mi/
│   │   │   └── page.tsx
│   │   ├── cocinas/
│   │   │   ├── page.tsx     # Listado
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Detalle
│   │   ├── galeria/
│   │   │   └── page.tsx
│   │   ├── presupuesto/
│   │   │   └── page.tsx
│   │   ├── contacto/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx     # Listado
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Post
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts # Email endpoint
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── FeaturedWork.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Brands.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CtaSection.tsx
│   │   ├── cocinas/
│   │   │   ├── KitchenGrid.tsx
│   │   │   ├── KitchenCard.tsx
│   │   │   ├── KitchenFilters.tsx
│   │   │   └── KitchenDetail.tsx
│   │   ├── gallery/
│   │   │   ├── MasonryGrid.tsx
│   │   │   └── LightboxModal.tsx
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── BudgetForm.tsx
│   │   │   ├── FileUpload.tsx
│   │   │   └── BudgetCalculator.tsx  # Fase 5
│   │   ├── blog/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostList.tsx
│   │   │   └── MdxComponents.tsx
│   │   ├── shared/
│   │   │   ├── BeforeAfter.tsx       # Fase 5
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── AnimateOnScroll.tsx
│   │   │   └── ScrollProgress.tsx
│   │   └── ui/                       # Shadcn components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       └── ...
│   │
│   ├── content/
│   │   └── blog/                     # Archivos .mdx
│   │
│   ├── data/
│   │   ├── kitchens.ts               # Array con datos de cocinas
│   │   ├── services.ts               # Datos de servicios
│   │   ├── brands.ts                 # Marcas colaboradoras
│   │   └── testimonials.ts           # Testimonios
│   │
│   ├── lib/
│   │   ├── email.ts                  # Configuración Resend
│   │   ├── mdx.ts                    # Helpers para MDX
│   │   └── utils.ts                  # cn() y utilidades
│   │
│   ├── hooks/
│   │   ├── useInView.ts              # Detectar viewport
│   │   ├── useScrollProgress.ts
│   │   └── useMediaQuery.ts
│   │
│   └── styles/
│       └── globals.css               # Tailwind directives + CSS custom properties
│
├── tailwind.config.ts                # Colores, fuentes, extensiones
├── next.config.mjs
├── tsconfig.json
├── package.json
└── .env.local                        # RESEND_API_KEY, etc.
```

---

## 8. Configuración Tailwind

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0E0E0C',
          card: '#1A1A17',
          surface: '#222220',
          subtle: '#2A2A27',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E2CFA0',
          dim: '#8B7444',
        },
        text: {
          primary: '#F2F0E8',
          secondary: '#9C9A8E',
          muted: '#6B6A60',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '1.1' }],
        'h1': ['42px', { lineHeight: '1.15' }],
        'h2': ['36px', { lineHeight: '1.2' }],
        'h3': ['24px', { lineHeight: '1.3' }],
        'h4': ['18px', { lineHeight: '1.4' }],
        'tag': ['11px', { lineHeight: '1', letterSpacing: '0.25em' }],
      },
      spacing: {
        'section': '96px',
        'section-mobile': '64px',
      },
      maxWidth: {
        'content': '1280px',
        'wide': '1440px',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 9. Datos Estáticos (ejemplo)

```typescript
// src/data/kitchens.ts
export interface Kitchen {
  slug: string
  name: string
  style: 'moderna' | 'rustica' | 'minimalista' | 'con-isla' | 'clasica'
  description: string
  images: string[]         // rutas en /public/images/cocinas/
  details: {
    meters: string
    materials: string
    duration: string
    location: string
  }
  featured: boolean        // mostrar en home
}

export const kitchens: Kitchen[] = [
  {
    slug: 'cocina-moderna-blanca-elche',
    name: 'Cocina Moderna Blanca',
    style: 'moderna',
    description: 'Cocina de líneas puras con acabado lacado blanco...',
    images: ['/images/cocinas/moderna-blanca-1.jpg', ...],
    details: {
      meters: '4.5 metros lineales',
      materials: 'Lacado blanco mate, encimera Silestone',
      duration: '3 días de montaje',
      location: 'Elche, Alicante',
    },
    featured: true,
  },
  // ... más cocinas
]
```

---

## 10. Fases de Desarrollo

### Fase 1 — Setup + Layout global (2-3 días)
- [ ] `npx create-next-app@latest afv-cocinas --typescript --tailwind --app`
- [ ] Configurar tailwind.config.ts con paleta y fuentes
- [ ] Instalar dependencias: framer-motion, shadcn/ui
- [ ] Implementar Navbar responsive (desktop + menú hamburguesa mobile)
- [ ] Implementar Footer
- [ ] Layout global (metadata base, fuentes, estructura)
- [ ] CSS custom properties en globals.css

### Fase 2 — Home (3-4 días)
- [ ] Hero section con animaciones de entrada
- [ ] Sección servicios (3 cards)
- [ ] Portfolio destacado (grid asimétrico)
- [ ] Barra de estadísticas con counter animation
- [ ] Logos de marcas
- [ ] CTA final
- [ ] Animaciones de scroll con Framer Motion
- [ ] Responsive completo

### Fase 3 — Páginas de contenido (3-4 días)
- [ ] Sobre mí (hero + historia + valores + proceso)
- [ ] Cocinas listado (grid + filtros)
- [ ] Cocinas detalle (galería + ficha técnica)
- [ ] Galería masiva (masonry + lightbox)

### Fase 4 — Formularios + Contacto (2-3 días)
- [ ] Formulario de presupuesto (react-hook-form + zod + file upload)
- [ ] Página de contacto (formulario + mapa + datos)
- [ ] API route para envío de emails (Resend)
- [ ] Validación + feedback visual
- [ ] WhatsApp flotante

### Fase 5 — Blog + Extras (3-4 días)
- [ ] Sistema de blog con MDX
- [ ] Listado + detalle de posts
- [ ] Calculadora de presupuesto orientativo (wizard)
- [ ] Slider antes/después
- [ ] Testimonios (carrusel)

### Fase 6 — SEO + Legal + Deploy (1-2 días)
- [ ] Metadata por página
- [ ] Sitemap + robots.txt
- [ ] Schema.org LocalBusiness
- [ ] Páginas legales (aviso, privacidad, cookies)
- [ ] Banner de cookies

### Fase 7 — Internacionalización (i18n)
- [ ] Instalar next-intl
- [ ] Extraer todos los textos a /messages/es.json y /messages/en.json
- [ ] Configurar middleware de i18n con prefijo de ruta (/en)
- [ ] Botón de cambio de idioma en Navbar (banderita o ES/EN)
- [ ] Traducir todos los textos al inglés

### Fase 8 — Testing final + Preparación para deploy
- [ ] npm run build sin errores
- [ ] .env.example con todas las variables documentadas
- [ ] Testing final en móvil y desktop
- [ ] Deploy manual desde vercel.com (conectar repo GitHub)

---

## 11. Variables de Entorno

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=correo@afvcocinas.es
NEXT_PUBLIC_WHATSAPP_NUMBER=34XXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIzaXXXXXX (opcional)
NEXT_PUBLIC_SITE_URL=https://afvcocinas.es
```

---

## 12. Notas para Claude Code

Al trabajar con Claude Code, referencia este documento para mantener consistencia. Tips:

1. **Siempre pasa el contexto de diseño:** "Usa la paleta oscura con dorados definida en las specs"
2. **Pide componentes aislados:** "Crea el componente Hero.tsx siguiendo las specs de la sección 4.2"
3. **Para animaciones:** "Usa Framer Motion con fade-in + slide-up, duración 0.6s, ease-out"
4. **Para formularios:** "Usa react-hook-form con zod, validación inline, estilos de la paleta oscura"
5. **Imágenes placeholder:** Mientras no tengas las fotos reales, usa placeholder grises con texto descriptivo o imágenes de Unsplash de cocinas (solo para desarrollo, sustituir antes de publicar)
