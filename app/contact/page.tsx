"use client"

import { useState } from "react"
import { Instagram, Youtube, Calendar, MapPin, Clock, Music } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FadeIn from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"
import { TwitterIcon as TikTok } from "lucide-react"
import { toast } from "sonner"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdovqjqg" // Replace with your Formspree endpoint
const BOOKING_FORMSPREE_ENDPOINT = "https://formspree.io/f/xdovqjqg" // Replace with your booking form Formspree endpoint
const PRESS_FORMSPREE_ENDPOINT = "https://formspree.io/f/xdovqjqg" // Replace with your press form Formspree endpoint

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [bookingState, setBookingState] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    budget: "",
    additionalInfo: "",
  })

  const [pressState, setPressState] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    details: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingState((prev) => ({ ...prev, [name]: value }))
  }

  const handlePressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPressState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message")
      }

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      toast.success("Message sent successfully!")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message")
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: bookingState.name,
          email: bookingState.email,
          subject: "Booking Request",
          message: `
Organization: ${bookingState.organization}
Event Type: ${bookingState.eventType}
Event Date: ${bookingState.eventDate}
Event Location: ${bookingState.eventLocation}
Budget: ${bookingState.budget}
Additional Info: ${bookingState.additionalInfo}
          `,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send booking request")
      }

      setIsSubmitted(true)
      setBookingState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        eventType: "",
        eventDate: "",
        eventLocation: "",
        budget: "",
        additionalInfo: "",
      })
      toast.success("Booking request sent successfully!")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send booking request")
      toast.error("Failed to send booking request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePressSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: pressState.name,
          email: pressState.email,
          subject: `Press Inquiry: ${pressState.inquiryType}`,
          message: `
Organization: ${pressState.organization}
Inquiry Type: ${pressState.inquiryType}

Details:
${pressState.details}
          `,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send press inquiry")
      }

      setIsSubmitted(true)
      setPressState({
        name: "",
        email: "",
        organization: "",
        inquiryType: "",
        details: "",
      })
      toast.success("Press inquiry sent successfully!")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send press inquiry")
      toast.error("Failed to send press inquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-terracotta/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <TextReveal>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-brand-terracotta">
                CONTACT & BOOKING
              </h1>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Get in touch for inquiries, bookings, or just to say hello.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <Tabs defaultValue="contact" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-zinc-900/50">
                <TabsTrigger
                  value="contact"
                  className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
                >
                  General Inquiries
                </TabsTrigger>
                <TabsTrigger
                  value="booking"
                  className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
                >
                  Booking
                </TabsTrigger>
                <TabsTrigger
                  value="press"
                  className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
                >
                  Press
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="contact">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-brand-terracotta">Get In Touch</h2>
                  <p className="text-zinc-300 mb-8">
                    Have a question or just want to say hello? Fill out the form and we'll get back to you as soon as
                    possible.
                  </p>

                  {isSubmitted ? (
                    <Card className="bg-zinc-900/50 border-zinc-800">
                      <CardContent className="pt-6">
                        <div className="text-center py-8">
                          <div className="w-12 h-12 bg-brand-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                              className="w-6 h-6 text-brand-terracotta"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                          <p className="text-zinc-300">Thank you for reaching out. We'll be in touch soon.</p>
                          <Button
                            className="mt-6 bg-brand-terracotta hover:bg-brand-terracotta/90"
                            onClick={() => setIsSubmitted(false)}
                          >
                            Send Another Message
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="bg-zinc-900/50 border-zinc-800"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="bg-zinc-900/50 border-zinc-800"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="bg-zinc-900/50 border-zinc-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="bg-zinc-900/50 border-zinc-800"
                        />
                      </div>
                      {error && <p className="text-red-500 text-sm">{error}</p>}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-terracotta hover:bg-brand-terracotta/90"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </div>

                <div className="lg:pl-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-zinc-900/50 border-zinc-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                            <svg
                              className="h-5 w-5 text-brand-terracotta"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 17.607c.386.6.387 1.27.036 1.868-.986 1.66-3.34 2.525-5.036 2.525-3.156 0-7-2.3-10-5.3s-5.3-6.844-5.3-10c0-1.696.865-4.05 2.525-5.036.597-.35 1.267-.349 1.868.037l3.59 2.214c.602.372.833 1.14.532 1.788l-1.227 2.608c-.203.432-.114.935.203 1.26l2.5 2.5c.325.317.828.406 1.26.203l2.608-1.227c.647-.301 1.416-.07 1.788.532l2.214 3.59z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Email</h3>
                            <p className="text-zinc-400">info@zeeyguymusic.com</p>
                            <Link
                              href="mailto:info@zeeyguymusic.com"
                              className="text-sm text-brand-terracotta hover:underline mt-2 inline-block"
                            >
                              Send an email
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-zinc-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                            <svg
                              className="h-5 w-5 text-brand-terracotta"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Phone</h3>
                            <p className="text-zinc-400">+1 (940) 390-5968</p>
                            <Link
                              href="tel:+19403905968"
                              className="text-sm text-brand-terracotta hover:underline mt-2 inline-block"
                            >
                              Call now
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-zinc-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                            <svg
                              className="h-5 w-5 text-brand-terracotta"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Location</h3>
                            <p className="text-zinc-400">Prairie Xing, Texas</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-zinc-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                            <svg
                              className="h-5 w-5 text-brand-terracotta"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Availability</h3>
                            <p className="text-zinc-400">Booking for 2024-2025</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-zinc-900/50 border-zinc-800 mt-6">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-4">Connect on Social Media</h3>
                      <div className="grid grid-cols-4 gap-4">
                        <Link
                          href="https://instagram.com/zeeyguy_"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                        >
                          <Instagram className="h-6 w-6 text-[#E1306C]" />
                          <span className="text-xs">Instagram</span>
                        </Link>
                        <Link
                          href="https://www.tiktok.com/@zeeyguy2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                        >
                          <TikTok className="h-6 w-6 text-white" />
                          <span className="text-xs">TikTok</span>
                        </Link>
                        <Link
                          href="https://youtube.com/@zeeyguy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                        >
                          <Youtube className="h-6 w-6 text-[#FF0000]" />
                          <span className="text-xs">YouTube</span>
                        </Link>
                        <Link
                          href="https://open.spotify.com/artist/2cHTFyFIpbT7JU3qrt4A4j"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                        >
                          <svg
                            className="h-6 w-6 text-[#1DB954]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.059 14.406c-.192 0-.286-.093-.477-.187-1.241-.73-2.76-1.09-4.434-1.09-1.004 0-2.008.093-2.917.28-.096 0-.192.093-.288.093-.286 0-.477-.187-.477-.467 0-.28.19-.466.476-.466 1.051-.187 2.102-.373 3.248-.373 1.912 0 3.633.467 5.072 1.308.096.093.192.187.286.187.19 0 .381-.094.381-.468 0-.187-.19-.374-.381-.467-1.533-.84-3.248-1.308-5.358-1.308-1.148 0-2.293.187-3.344.374-.286.093-.572.28-.572.653 0 .374.286.654.667.654.096 0 .286-.094.381-.094.954-.186 1.912-.28 2.868-.28 1.77 0 3.344.374 4.673 1.214.096.094.286.187.381.187.286 0 .572-.187.572-.56 0-.28-.19-.468-.381-.56z" />
                            <path d="M16.152 13.198c-.19 0-.285-.094-.476-.188-1.337-.746-2.96-1.12-4.768-1.12-1.052 0-2.198.094-3.153.282-.095 0-.19.094-.286.094-.286 0-.477-.188-.477-.47 0-.282.19-.47.477-.47 1.052-.187 2.103-.374 3.343-.374 1.91 0 3.82.47 5.25 1.308.094.094.19.188.285.188.19 0 .38-.094.38-.47 0-.188-.19-.376-.38-.47-1.53-.84-3.44-1.308-5.54-1.308-1.15 0-2.39.187-3.63.374-.29.093-.57.282-.57.658 0 .376.286.658.66.658.1 0 .29-.094.38-.094.96-.188 2.01-.282 2.96-.282 1.91 0 3.63.376 5.06 1.214.09.094.28.188.38.188.28 0 .57-.188.57-.564 0-.282-.19-.47-.38-.564z" />
                            <path d="M17.016 10.358c-.19 0-.286-.093-.476-.187-1.434-.747-3.153-1.12-5.073-1.12-1.052 0-2.198.093-3.153.28-.096 0-.19.094-.286.094-.286 0-.477-.187-.477-.467 0-.28.19-.467.477-.467 1.05-.187 2.2-.374 3.44-.374 2.1 0 4.02.467 5.64 1.307.1.094.19.187.29.187.19 0 .38-.093.38-.467 0-.187-.19-.374-.38-.467-1.72-.84-3.72-1.307-5.93-1.307-1.24 0-2.48.187-3.63.374-.29.093-.57.28-.57.653 0 .374.28.654.67.654.09 0 .28-.094.38-.094 1.05-.186 2.1-.28 3.15-.28 2.01 0 3.82.374 5.36 1.214.09.093.28.187.38.187.29 0 .57-.187.57-.56 0-.28-.19-.467-.38-.56z" />
                          </svg>
                          <span className="text-xs">Spotify</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="booking">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-brand-terracotta">Booking Inquiries</h2>
                  <p className="text-zinc-300 mb-8">
                    Interested in booking Zeey for a performance, event, or special appearance? Fill out the form with
                    details about your event.
                  </p>

                  {isSubmitted ? (
                    <Card className="bg-zinc-900/50 border-zinc-800">
                      <CardContent className="pt-6">
                        <div className="text-center py-8">
                          <div className="w-12 h-12 bg-brand-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                              className="w-6 h-6 text-brand-terracotta"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold mb-2">Booking Request Received!</h3>
                          <p className="text-zinc-300">
                            Thank you for your interest in booking ZEEY. Our team will review your request and get back
                            to you within 48 hours.
                          </p>
                          <Button
                            className="mt-6 bg-brand-terracotta hover:bg-brand-terracotta/90"
                            onClick={() => setIsSubmitted(false)}
                          >
                            Submit Another Request
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={bookingState.name}
                            onChange={handleBookingChange}
                            required
                            className="bg-zinc-900/50 border-zinc-800"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={bookingState.email}
                            onChange={handleBookingChange}
                            required
                            className="bg-zinc-900/50 border-zinc-800"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={bookingState.phone}
                            onChange={handleBookingChange}
                            required
                            className="bg-zinc-900/50 border-zinc-800"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="organization" className="text-sm font-medium">
                            Organization/Company
                          </label>
                          <Input
                            id="organization"
                            name="organization"
                            value={bookingState.organization}
                            onChange={handleBookingChange}
                            className="bg-zinc-900/50 border-zinc-800"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="eventType" className="text-sm font-medium">
                          Event Type *
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={bookingState.eventType}
                          onChange={handleBookingChange}
                          required
                          className="w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm"
                        >
                          <option value="">Select Event Type</option>
                          <option value="festival">Music Festival</option>
                          <option value="concert">Concert/Show</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="private">Private Party</option>
                          <option value="wedding">Wedding</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="eventDate" className="text-sm font-medium">
                            Event Date *
                          </label>
                          <Input
                            id="eventDate"
                            name="eventDate"
                            type="date"
                            value={bookingState.eventDate}
                            onChange={handleBookingChange}
                            required
                            className="bg-zinc-900/50 border-zinc-800"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="eventLocation" className="text-sm font-medium">
                            Event Location *
                          </label>
                          <Input
                            id="eventLocation"
                            name="eventLocation"
                            value={bookingState.eventLocation}
                            onChange={handleBookingChange}
                            required
                            className="bg-zinc-900/50 border-zinc-800"
                            placeholder="City, State/Country"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={bookingState.budget}
                          onChange={handleBookingChange}
                          className="w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="under5k">Under $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-20k">$10,000 - $20,000</option>
                          <option value="20k-plus">$20,000+</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="additionalInfo" className="text-sm font-medium">
                          Additional Information
                        </label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={bookingState.additionalInfo}
                          onChange={handleBookingChange}
                          rows={5}
                          className="bg-zinc-900/50 border-zinc-800"
                          placeholder="Please include any specific requirements, expected attendance, or other relevant details"
                        />
                      </div>

                      {error && <p className="text-red-500 text-sm">{error}</p>}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-terracotta hover:bg-brand-terracotta/90"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                      </Button>

                      <p className="text-xs text-center text-zinc-500">
                        * Required fields. We typically respond to booking inquiries within 48 hours.
                      </p>
                    </form>
                  )}
                </div>

                <div className="lg:pl-8">
                  <Card className="bg-zinc-900/50 border-zinc-800">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-brand-terracotta">Booking Information</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                            <Music className="h-5 w-5 text-brand-terracotta" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Performance Types</h4>
                            <ul className="text-zinc-400 space-y-1">
                              <li>• Full band performances</li>
                              <li>• Acoustic sets</li>
                              <li>• Private events</li>
                              <li>• Festivals</li>
                              <li>• Corporate events</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                            <Calendar className="h-5 w-5 text-brand-terracotta" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Booking Timeline</h4>
                            <p className="text-zinc-400">
                              For optimal availability, please book at least 4-6 weeks in advance. For festival
                              bookings, 3-6 months is recommended.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                            <MapPin className="h-5 w-5 text-brand-terracotta" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Venue Requirements</h4>
                            <ul className="text-sm text-zinc-300 space-y-1">
                              <li>• Minimum stage size: 16' x 12'</li>
                              <li>• Secure green room</li>
                              <li>• Adequate lighting system</li>
                              <li>• Load-in access</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                            <Clock className="h-5 w-5 text-brand-terracotta" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Performance Duration</h4>
                            <ul className="text-sm text-zinc-300 space-y-1">
                              <li>• Full band: 60-90 minutes</li>
                              <li>• Acoustic set: 45-60 minutes</li>
                              <li>• Custom durations available</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-6">
                    <Card className="bg-zinc-900/50 border-zinc-800">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-brand-terracotta">What Clients Say</h3>
                        <div className="space-y-4">
                          <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-full bg-brand-terracotta/20 flex items-center justify-center">
                                <span className="text-brand-terracotta font-bold">M</span>
                              </div>
                              <div>
                                <h5 className="font-medium">Michael Johnson</h5>
                                <p className="text-xs text-zinc-400">Festival Director</p>
                              </div>
                            </div>
                            <p className="text-zinc-300 text-sm italic">
                              "ZEEY's performance was the highlight of our festival. His energy and connection with the
                              audience was incredible."
                            </p>
                          </div>

                          <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-full bg-brand-terracotta/20 flex items-center justify-center">
                                <span className="text-brand-terracotta font-bold">S</span>
                              </div>
                              <div>
                                <h5 className="font-medium">Sarah Williams</h5>
                                <p className="text-xs text-zinc-400">Event Coordinator</p>
                              </div>
                            </div>
                            <p className="text-zinc-300 text-sm italic">
                              "Professional, punctual, and delivered an unforgettable performance that our guests are
                              still talking about."
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="press">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-brand-terracotta">Press & Media</h2>
                  <p className="text-zinc-300 mb-8">
                    For press inquiries, interview requests, or media kit access, please fill out the form with your
                    details.
                  </p>

                  {isSubmitted ? (
                    <Card className="bg-zinc-900/50 border-zinc-800">
                      <CardContent className="pt-6">
                        <div className="text-center py-8">
                          <div className="w-12 h-12 bg-brand-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                              className="w-6 h-6 text-brand-terracotta"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold mb-2">Press Inquiry Sent!</h3>
                          <p className="text-zinc-300">
                            Thank you for your inquiry. We'll get back to you as soon as possible.
                          </p>
                          <Button
                            className="mt-6 bg-brand-terracotta hover:bg-brand-terracotta/90"
                            onClick={() => setIsSubmitted(false)}
                          >
                            Send Another Inquiry
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <form onSubmit={handlePressSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="press-name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input 
                            id="press-name" 
                            name="name"
                            value={pressState.name}
                            onChange={handlePressChange}
                            required 
                            className="bg-zinc-900/50 border-zinc-800" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="press-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input 
                            id="press-email" 
                            name="email"
                            type="email"
                            value={pressState.email}
                            onChange={handlePressChange}
                            required 
                            className="bg-zinc-900/50 border-zinc-800" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="organization" className="text-sm font-medium">
                          Organization/Publication
                        </label>
                        <Input 
                          id="organization" 
                          name="organization"
                          value={pressState.organization}
                          onChange={handlePressChange}
                          required 
                          className="bg-zinc-900/50 border-zinc-800" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="inquiry-type" className="text-sm font-medium">
                          Inquiry Type
                        </label>
                        <select
                          id="inquiry-type"
                          name="inquiryType"
                          value={pressState.inquiryType}
                          onChange={handlePressChange}
                          required
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select an option</option>
                          <option value="interview">Interview Request</option>
                          <option value="feature">Feature Article</option>
                          <option value="media-kit">Media Kit Access</option>
                          <option value="press-release">Press Release</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="press-details" className="text-sm font-medium">
                          Details
                        </label>
                        <Textarea
                          id="press-details"
                          name="details"
                          value={pressState.details}
                          onChange={handlePressChange}
                          required
                          rows={5}
                          className="bg-zinc-900/50 border-zinc-800"
                          placeholder="Please provide details about your inquiry, including deadlines if applicable"
                        />
                      </div>
                      {error && <p className="text-red-500 text-sm">{error}</p>}
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-brand-terracotta hover:bg-brand-terracotta/90"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Press Inquiry"}
                      </Button>
                    </form>
                  )}
                </div>

                <div className="lg:pl-8">
                  <Card className="bg-zinc-900/50 border-zinc-800">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-brand-terracotta">Press Resources</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-3">Press Photos</h4>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
                              <img
                                src="/images/zeey-bw.png"
                                alt="Press Photo 1"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
                              <img
                                src="/images/zeey-hoodie.png"
                                alt="Press Photo 2"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
                              <img
                                src="/images/zeey-artistic.png"
                                alt="Press Photo 3"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 w-full border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                          >
                            Download Press Kit
                          </Button>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">Recent Press</h4>
                          <div className="space-y-3">
                            <div className="p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
                              <h5 className="font-medium text-sm">Music Today Magazine</h5>
                              <p className="text-xs text-zinc-400">
                                "Zeey's latest release showcases his unique ability to blend genres while maintaining
                                authenticity."
                              </p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
                              <h5 className="font-medium text-sm">Sound & Soul Blog</h5>
                              <p className="text-xs text-zinc-400">
                                "One of the most promising voices in contemporary gospel and R&B fusion."
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Press Contact</h4>
                          <p className="text-zinc-300">
                            info@zeeguymusic.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
