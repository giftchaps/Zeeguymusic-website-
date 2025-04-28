# Zeeguy Website

A modern website built with Next.js and Nodemailer for email functionality.

## Prerequisites

- Node.js 18.x or later
- Namecheap email hosting account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_USER=your_email@yourdomain.com
SMTP_PASS=your_email_password
ADMIN_EMAIL=your_admin_email
```

### Namecheap Email Settings

1. Log in to your Namecheap account
2. Go to "Email & Office" > "Email Forwarding"
3. Find your domain and click "Manage"
4. Use these SMTP settings:
   - SMTP Host: mail.privateemail.com
   - SMTP Port: 465
   - Username: Your full email address
   - Password: Your email password
   - Security: SSL/TLS

## Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

## Production Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Features

- Contact form with email notifications
- Gallery display
- Music streaming
- Video content
- Tour information

## Tech Stack

- Next.js 14
- Nodemailer (Email)
- Tailwind CSS