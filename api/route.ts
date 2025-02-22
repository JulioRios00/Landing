import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(req: Request) {
  const { email, subject, message } = await req.json()

  const msg = {
    to: 'julio.rios.araujo@gmail.com',
    from: email,
    subject,
    text: message,
  }

  try {
    await sgMail.send(msg)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}
