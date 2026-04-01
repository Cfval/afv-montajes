import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { redirect } from 'next/navigation'
import LegalLayout from '@/components/legal/LegalLayout'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de AFV Cocinas. Cómo tratamos tus datos personales conforme al RGPD.',
  robots: { index: false },
}

export default async function PoliticaPrivacidadPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  // Redirect EN to ES since legal content is only in Spanish
  if (locale === 'en') {
    redirect('/es/politica-privacidad')
  }
  return (
    <LegalLayout title="Política de Privacidad" subtitle="Última actualización: marzo 2026">
      <LegalSection title="1. Responsable del tratamiento">
        <p><strong>Responsable:</strong> [Nombre completo del profesional]<br />
          <strong>NIF/NIE:</strong> [Número de identificación fiscal]<br />
          <strong>Dirección:</strong> Provincia de Alicante, España<br />
          <strong>Email:</strong> info@afvcocinas.es</p>
      </LegalSection>
      <LegalSection title="2. Datos que recopilamos">
        <p>A través de los formularios del sitio web (formulario de contacto y solicitud de presupuesto) podemos recopilar los siguientes datos personales:</p>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Población de residencia</li>
          <li>Información sobre el proyecto de cocina (descripción, fotografías, planos)</li>
        </ul>
      </LegalSection>
      <LegalSection title="3. Finalidad del tratamiento">
        <p>Los datos personales recopilados se utilizan para las siguientes finalidades:</p>
        <ul>
          <li>Gestionar y responder a las solicitudes de información y presupuesto</li>
          <li>Comunicarnos contigo sobre tu proyecto</li>
          <li>Enviar información comercial sobre nuestros servicios, siempre que hayas dado tu consentimiento</li>
        </ul>
      </LegalSection>
      <LegalSection title="4. Base legal del tratamiento">
        <p>El tratamiento de tus datos se realiza sobre las siguientes bases legales:</p>
        <ul>
          <li><strong>Ejecución de un contrato o medidas precontractuales:</strong> para gestionar tu solicitud de presupuesto.</li>
          <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales.</li>
          <li><strong>Interés legítimo:</strong> para responder a consultas de información general.</li>
        </ul>
      </LegalSection>
      <LegalSection title="5. Conservación de los datos">
        <p>Los datos personales se conservarán durante el tiempo necesario para atender tu solicitud y, en su caso, durante los plazos legalmente establecidos. Los datos de presupuestos y contratos se conservarán durante 5 años tras la finalización de la relación comercial.</p>
      </LegalSection>
      <LegalSection title="6. Comunicación a terceros">
        <p>Los datos personales no se cederán a terceros, salvo obligación legal. Para el envío de correos electrónicos utilizamos el servicio Resend, que actúa como encargado del tratamiento bajo las condiciones establecidas en el RGPD.</p>
      </LegalSection>
      <LegalSection title="7. Tus derechos">
        <p>Puedes ejercer los siguientes derechos respecto a tus datos personales:</p>
        <ul>
          <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
          <li><strong>Oposición y limitación:</strong> oponerte al tratamiento o solicitar su limitación.</li>
        </ul>
        <p>Para ejercer estos derechos, envíanos un email a <strong>info@afvcocinas.es</strong> con el asunto «Protección de datos».</p>
        <p>Si consideras que tus derechos no han sido atendidos correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <strong>www.aepd.es</strong>.</p>
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
