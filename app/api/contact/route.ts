import { NextResponse } from "next/server";
import { sendContactFormNotification } from "@/lib/email";

// Force dynamic route to ensure this runs as a serverless function
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    console.log('Received contact form submission request')
    
    const body = await request.json();
    console.log('Request body:', body);

    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      console.log('Validation failed: Missing required fields', { name, email, subject, message });
      return NextResponse.json(
        { 
          success: false, 
          message: "All fields are required",
          details: { name, email, subject, message }
        }, 
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Validation failed: Invalid email format', { email });
      return NextResponse.json(
        { 
          success: false, 
          message: "Please provide a valid email address",
          details: { email }
        }, 
        { status: 400 }
      );
    }

    console.log('Attempting to send notification email');
    // Send notification email
    const result = await sendContactFormNotification({ name, email, subject, message });

    if (!result.success) {
      console.error('Email sending failed:', result);
      throw new Error("Failed to send notification email");
    }

    console.log('Email sent successfully');
    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred while processing your request",
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
