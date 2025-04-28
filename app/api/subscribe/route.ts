import { NextResponse } from "next/server"
import { sendNewsletterConfirmation } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address" }, { status: 400 })
    }

    // Send welcome email
    const result = await sendNewsletterConfirmation(email)
    
    if (!result.success) {
      throw new Error("Failed to send confirmation email")
    }

    // In a real application, you would also:
    // 1. Store the subscriber in your database
    // 2. Add them to your email list in your email service provider

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing! Please check your email for confirmation.",
    })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request" },
      { status: 500 },
    )
  }
}
