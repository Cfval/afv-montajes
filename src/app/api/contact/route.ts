export async function POST(request: Request) {
  const body = await request.json()

  console.log('[AFV Cocinas] Form submission:', JSON.stringify(body, null, 2))

  // TODO: Integrate Resend email service
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'AFV Cocinas <noreply@afvcocinas.es>',
  //   to: process.env.CONTACT_EMAIL ?? '',
  //   subject: body.type === 'contacto' ? 'Nuevo mensaje de contacto' : 'Nueva solicitud de presupuesto',
  //   html: buildEmailHtml(body),
  // })

  return Response.json({ success: true, message: 'Solicitud recibida correctamente' })
}
