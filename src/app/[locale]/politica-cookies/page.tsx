import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { redirect } from 'next/navigation'
import LegalLayout from '@/components/legal/LegalLayout'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de AFV Cocinas. Información sobre el uso de cookies en nuestro sitio web.',
  robots: { index: false },
}

export default async function PoliticaCookiesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  // Redirect EN to ES since legal content is only in Spanish
  if (locale === 'en') {
    redirect('/es/politica-cookies')
  }
  return (
    <LegalLayout title="Política de Cookies" subtitle="Última actualización: marzo 2026">
      <LegalSection title="1. ¿Qué son las cookies?">
        <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador cuando los visitas. Sirven para que el sitio recuerde información sobre tu visita, lo que puede facilitar tu próxima visita y hacer que el sitio te resulte más útil.</p>
      </LegalSection>
      <LegalSection title="2. Cookies que utilizamos">
        <p>Este sitio web puede utilizar los siguientes tipos de cookies:</p>
        <div style={{ overflowX: 'auto', marginTop: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr>
                {['Nombre', 'Tipo', 'Duración', 'Finalidad'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 14px', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A96E', borderBottom: '0.5px solid rgba(201,169,110,0.15)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'afv-cookies', type: 'Técnica', duration: '1 año', purpose: 'Guarda tu preferencia de aceptación o rechazo de cookies' },
                { name: '_ga', type: 'Analítica', duration: '2 años', purpose: 'Google Analytics — mide el tráfico del sitio web (solo si aceptas)' },
                { name: '_ga_*', type: 'Analítica', duration: '2 años', purpose: 'Google Analytics — identificador de sesión (solo si aceptas)' },
              ].map((row, i) => (
                <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(201,169,110,0.02)' }}>
                  <td style={{ padding: '10px 14px', borderBottom: '0.5px solid rgba(201,169,110,0.06)', color: '#E2CFA0', fontFamily: 'monospace', fontSize: '12px' }}>{row.name}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '0.5px solid rgba(201,169,110,0.06)', color: '#9C9A8E' }}>{row.type}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '0.5px solid rgba(201,169,110,0.06)', color: '#9C9A8E' }}>{row.duration}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '0.5px solid rgba(201,169,110,0.06)', color: '#9C9A8E' }}>{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>
      <LegalSection title="3. Cookies técnicas (necesarias)">
        <p>Las cookies técnicas son imprescindibles para el correcto funcionamiento del sitio web. No requieren tu consentimiento. Incluyen la cookie <code style={{ fontFamily: 'monospace', color: '#E2CFA0', fontSize: '13px' }}>afv-cookies</code> que guarda tu preferencia sobre el uso de cookies.</p>
      </LegalSection>
      <LegalSection title="4. Cookies analíticas">
        <p>Las cookies analíticas nos permiten medir el número de visitas y las fuentes de tráfico para mejorar el rendimiento del sitio. Toda la información recogida es anónima y agregada. Solo se activan si has aceptado las cookies en el banner de consentimiento.</p>
      </LegalSection>
      <LegalSection title="5. Cómo gestionar o eliminar las cookies">
        <p>Puedes configurar tu navegador para que rechace todas las cookies o para que te avise cuando se envíe una cookie.</p>
        <p>Instrucciones para los navegadores más comunes:</p>
        <ul>
          <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
          <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad</li>
          <li><strong>Safari:</strong> Preferencias → Privacidad</li>
          <li><strong>Edge:</strong> Configuración → Permisos del sitio → Cookies</li>
        </ul>
        <p>También puedes revocar tu consentimiento en cualquier momento borrando las cookies de tu navegador o usando el botón «Rechazar» del banner de cookies.</p>
      </LegalSection>
      <LegalSection title="6. Más información">
        <p>Para cualquier consulta sobre nuestra política de cookies, puedes contactarnos en <strong>info@afvcocinas.es</strong>.</p>
        <p>Para más información sobre las cookies, puedes visitar el portal de la Agencia Española de Protección de Datos: <strong>www.aepd.es</strong>.</p>
      </LegalSection>
    </LegalLayout>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(18px, 2vw, 24px)', color: '#F2F0E8', lineHeight: 1.3, marginBottom: '16px', paddingBottom: '10px', borderBottom: '0.5px solid rgba(201,169,110,0.1)' }}>
        {title}
      </h2>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '15px', color: '#9C9A8E', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {children}
      </div>
    </div>
  )
}
