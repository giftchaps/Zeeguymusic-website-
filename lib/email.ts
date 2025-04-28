import nodemailer from 'nodemailer'
import { z } from 'zod'

// Log environment variables (without sensitive data)
console.log('Checking environment variables...')
console.log('SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'Not Set')
console.log('SMTP_PORT:', process.env.SMTP_PORT ? 'Set' : 'Not Set')
console.log('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Not Set')
console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL ? 'Set' : 'Not Set')

// Environment variable validation
const envSchema = z.object({
  SMTP_HOST: z.string().min(1, 'SMTP host is required'),
  SMTP_PORT: z.string().min(1, 'SMTP port is required'),
  SMTP_USER: z.string().email('Valid email address is required'),
  SMTP_PASS: z.string().min(1, 'SMTP password is required'),
  ADMIN_EMAIL: z.string().email('Valid admin email is required'),
})

// Helper function to get environment variable
function getEnvVar(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

export class EmailError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message)
    this.name = 'EmailError'
  }
}

let transporter: nodemailer.Transporter | null = null

try {
  const env = {
    SMTP_HOST: getEnvVar('SMTP_HOST'),
    SMTP_PORT: getEnvVar('SMTP_PORT'),
    SMTP_USER: getEnvVar('SMTP_USER'),
    SMTP_PASS: getEnvVar('SMTP_PASS'),
    ADMIN_EMAIL: getEnvVar('ADMIN_EMAIL'),
  }

  console.log('SMTP Configuration:', {
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    user: env.SMTP_USER,
    adminEmail: env.ADMIN_EMAIL
  })

  // Create transporter with TLS options to handle certificate issues
  transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: true, // Namecheap requires SSL for port 465
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
    tls: {
      // Namecheap's certificate settings
      rejectUnauthorized: false,
      minVersion: 'TLSv1.2'
    }
  })

  // Verify transporter configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.error('SMTP Connection Error:', error)
      throw new EmailError(`SMTP Connection Error: ${error.message}`, 'SMTP_ERROR')
    } else {
      console.log('SMTP Server is ready to send messages')
    }
  })
} catch (error) {
  console.error('Environment Configuration Error:', error)
  throw error
}

export async function sendContactFormNotification(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  if (!transporter) {
    throw new EmailError('Email service not configured', 'CONFIG_ERROR')
  }

  try {
    const { name, email, subject, message } = formData

    // Determine the recipient email based on the form type
    let toEmail = process.env.ADMIN_EMAIL
    let emailType = 'New Contact Form Submission'

    if (subject.toLowerCase().includes('booking request')) {
      toEmail = 'bookings@zeeguymusic.com'
      emailType = 'New Booking Request'
    } else if (subject.toLowerCase().includes('press inquiry') || subject.toLowerCase().includes('media kit')) {
      toEmail = 'info@zeeguymusic.com'
      emailType = 'New Press Inquiry'
    }

    console.log('Attempting to send email with data:', {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: subject
    })

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: subject,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<h2>${emailType}</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info)
    return { success: true }
  } catch (error) {
    console.error('Detailed Email Error:', error)
    throw new EmailError(error instanceof Error ? error.message : 'Failed to send email', 'EMAIL_ERROR')
  }
}

export async function sendNewsletterConfirmation(email: string) {
  if (!transporter) {
    throw new EmailError('Email service not configured', 'CONFIG_ERROR')
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Welcome to Zeeguy Music Newsletter!',
      html: `
        <h1>Welcome to Zeeguy Music Newsletter!</h1>
        <p>Thank you for subscribing to our newsletter. You'll now receive updates about:</p>
        <ul>
          <li>New music releases</li>
          <li>Upcoming shows and tours</li>
          <li>Exclusive content and behind-the-scenes</li>
        </ul>
        <p>If you didn't subscribe to our newsletter, please ignore this email.</p>
        <p>Best regards,<br>Zeeguy Music Team</p>
      `
    })

    return { success: true }
  } catch (error) {
    console.error('Newsletter confirmation email error:', error)
    throw new EmailError('Failed to send newsletter confirmation', 'SEND_ERROR')
  }
} 