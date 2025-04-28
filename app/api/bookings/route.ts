import { NextResponse } from "next/server";
import { sendContactFormNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    console.log('Received booking form submission request')
    
    const body = await request.json();
    console.log('Request body:', body);

    const { name, email, phone, organization, eventType, eventDate, eventLocation, budget, additionalInfo } = body;

    // Basic validation
    if (!name || !email || !phone || !eventType || !eventDate || !eventLocation) {
      console.log('Validation failed: Missing required fields', body);
      return NextResponse.json(
        { 
          success: false, 
          message: "All required fields must be filled",
          details: body
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

    // Format the message for the email
    const message = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Organization: ${organization || 'N/A'}
Event Type: ${eventType}
Event Date: ${eventDate}
Event Location: ${eventLocation}
Budget Range: ${budget || 'Not specified'}
Additional Information: ${additionalInfo || 'None'}
    `.trim();

    console.log('Attempting to send booking notification email');
    // Send notification email
    const result = await sendContactFormNotification({ 
      name, 
      email, 
      subject: `New Booking Request: ${eventType} on ${eventDate}`,
      message 
    });

    if (!result.success) {
      console.error('Email sending failed:', result);
      throw new Error("Failed to send booking notification email");
    }

    console.log('Booking email sent successfully');
    return NextResponse.json({
      success: true,
      message: "Your booking request has been submitted successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred while processing your booking request",
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 