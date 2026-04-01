# CONTEXTO del proyecto — AFV Cocinas

Fecha: 2026-04-01

Resumen
-------
Este documento refleja el estado actual del proyecto tras una limpieza orientada a mantener únicamente las rutas y funcionalidades necesarias para el sitio principal: la página Home, el listado de trabajos (antes "cocinas"), la galería y las páginas legales. El objetivo fue reducir el código y las traducciones a lo imprescindible sin tocar `public/images`.

Qué se conserva (funcionalidad principal)
-----------------------------------------
- Rutas públicas y funcionales:
  - `/` → Home (Hero, AboutMe, Contact)
  - `/trabajos` (antes `/cocinas`) → Listado de trabajos/portfolio
  - `/trabajos/[slug]` (detalles de trabajo)
  - `/galeria` → Masonry gallery + lightbox
  - Páginas legales: `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`
- Sistema de internacionalización: `next-intl` con dos locales `es` y `en`.
  - Archivos de traducción principales: `messages/es.json` y `messages/en.json` (limpiados para contener sólo las keys usadas por las rutas conservadas: `home`, `cocinas`/`trabajos`, `gallery`/`galeria`, `navbar`, `footer`, `cookies`, `whatsapp`, `metadata`).
- API endpoint para enviar formularios: `src/app/api/contact/route.ts` (mantenido).
- Componentes clave conservados (no exhaustivo):
  - `src/components/home/*` (Hero, AboutMe, Contact, CtaSection, Services, Stats, FeaturedWork)
  - `src/components/cocinas/*` (KitchenGrid, KitchenCard, KitchenDetail, KitchenFilters)
  - `src/components/gallery/*` (MasonryGrid, CocinasLink)
  - `src/components/layout/*` (Navbar, Footer, Logo, CookieBanner, WhatsAppButton)
  - `src/components/legal/LegalLayout.tsx`
- Datos y contenido:
  - `src/content/data/kitchens.ts` (portfolio data), `src/content/data/kitchens-translations.ts` (traducciones específicas de items)
  - `public/images/` se mantiene íntegro (no se ha borrado nada en `public/images`).

Qué se eliminó / simplificó
---------------------------
- Eliminadas páginas específicas:
  - `src/app/[locale]/sobre-mi/_content.tsx` y `src/app/[locale]/sobre-mi/page.tsx` (ruta `/sobre-mi` removida).
- Traducciones: se eliminaron secciones completas no referenciadas por las rutas conservadas (p. ej. keys completas de `sobreMi`, `presupuesto`, `blog`, `forms`, `calculator`) en `messages/en.json` y `messages/es.json`.
- Sitemap: se ha retirado `/sobre-mi` de `src/app/sitemap.ts`.
- Enlaces: referencias internas a `/presupuesto` fueron redirigidas a `/trabajos` en los componentes donde aparecían (p. ej. `CtaSection`, `KitchenDetail`).

Notas de integridad y compatibilidad
-----------------------------------
- No se ha tocado `public/images` para preservar todos los activos multimedia.
- Quedan por verificar (recomendado):
  - Ejecutar `npm run build` para detectar imports o keys faltantes en tiempo de compilación.
  - Ejecutar linters (`npm run lint`) y tests si existen para asegurar que no hay referencias rotas.
  - Revisar manualmente contenido externo o MDX si existiera (no se han modificado archivos bajo `content/blog/` si existen — en este repo no se encontraron rutas activas de blog).

