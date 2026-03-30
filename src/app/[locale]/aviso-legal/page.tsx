import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import LegalLayout from '@/components/legal/LegalLayout'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de AFV Cocinas. Información sobre el titular del sitio web, condiciones de uso y propiedad intelectual.',
  robots: { index: false },
}

export default async function AvisoLegalPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <LegalLayout title="Aviso Legal" subtitle="Última actualización: marzo 2026">
      <LegalSection title="1. Datos del titular">
        <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
        <ul>
          <li><strong>Titular:</strong> [Nombre completo del profesional]</li>
          <li><strong>NIF/NIE:</strong> [Número de identificación fiscal]</li>
          <li><strong>Actividad:</strong> Montaje, diseño y reforma de cocinas</li>
          <li><strong>Dirección:</strong> Provincia de Alicante, España</li>
          <li><strong>Email:</strong> info@afvcocinas.es</li>
          <li><strong>Teléfono:</strong> +34 600 000 000</li>
        </ul>
      </LegalSection>
      <LegalSection title="2. Objeto del sitio web">
        <p>AFV Cocinas (en adelante, «el sitio web») tiene por objeto presentar los servicios profesionales de montaje, diseño y reforma de cocinas ofrecidos por su titular, así como facilitar el contacto entre el profesional y los potenciales clientes.</p>
        <p>El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de las presentes condiciones.</p>
      </LegalSection>
      <LegalSection title="3. Propiedad intelectual e industrial">
        <p>Todos los contenidos del sitio web —incluyendo textos, fotografías, gráficos, imágenes, logotipos, iconos, código fuente y diseño visual— son propiedad del titular o de terceros que han autorizado su uso.</p>
        <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de dichos contenidos sin la autorización expresa y por escrito del titular.</p>
      </LegalSection>
      <LegalSection title="4. Responsabilidad">
        <p>El titular no se responsabiliza de los daños o perjuicios de cualquier naturaleza que pudieran ocasionarse por el uso del sitio web, ni por la presencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos.</p>
        <p>Los presupuestos orientativos mostrados en la calculadora del sitio web tienen carácter meramente informativo y no constituyen oferta contractual.</p>
      </LegalSection>
      <LegalSection title="5. Legislación aplicable y jurisdicción">
        <p>Las presentes condiciones legales se rigen por la legislación española. Para la resolución de cualquier controversia derivada del uso del sitio web, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados y Tribunales de Alicante.</p>
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
