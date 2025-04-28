import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com", // Namecheap's SMTP server
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Zeeguy Website" <info@zeeguymusic.com>`,
      to: "info@zeeguymusic.com",
      subject: "New Contact Form Submission",
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);

    // Ensure JSON response even in case of errors
    if (error.response) {
      return res.status(500).json({ message: "Failed to send email", error: error.response });
    }
    return res.status(500).json({ message: "Failed to send email", error: error.message });
  }
}