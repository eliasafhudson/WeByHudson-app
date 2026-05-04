import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Cuerpo de la petición inválido.' }, { status: 400 })
  }

  const { name, email, phone, message } = body as {
    name?: string
    email?: string
    phone?: string
    message?: string
  }

  // Validación de campos requeridos
  if (!name || name.trim() === '') {
    return NextResponse.json({ error: 'El nombre es requerido.' }, { status: 400 })
  }
  if (!email || email.trim() === '') {
    return NextResponse.json({ error: 'El email es requerido.' }, { status: 400 })
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: 'El formato del email es inválido.' }, { status: 400 })
  }
  if (!message || message.trim() === '') {
    return NextResponse.json({ error: 'El mensaje es requerido.' }, { status: 400 })
  }

  // Verificar variables de entorno
  const apiKey = process.env.RESEND_API_KEY
  const emailFrom = process.env.EMAIL_FROM
  const emailTo = process.env.EMAIL_TO

  if (!apiKey || !emailFrom || !emailTo) {
    return NextResponse.json(
      { error: 'Error de configuración del servidor. Contacta al administrador.' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `Nuevo mensaje de contacto de ${name.trim()}`,
      html: `
        <h2>Nuevo mensaje desde WeByHudson</h2>
        <p><strong>Nombre:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone.trim()}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${message.trim().replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ message: 'Mensaje enviado correctamente.' }, { status: 200 })
  } catch {
    return NextResponse.json(
      { error: 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.' },
      { status: 500 }
    )
  }
}
