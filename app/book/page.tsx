"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Music, MapPin, DollarSign, Users, Clock } from "lucide-react"
import { toast } from "react-hot-toast"

export default function BookingPage() {
  const [formState, setFormState] = useState({
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit booking request')
      }

      setIsSubmitted(true)
      setFormState({
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
    } catch (error) {
      console.error('Booking submission error:', error)
      toast.error(error.message || 'Failed to submit booking request. Please try again.')
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
            <Badge className="mb-6 bg-brand-terracotta/20 text-brand-terracotta border-none">BOOKINGS</Badge>
            <TextReveal>
              <h1 className="text-5xl md:text-7xl font-heading tracking-wide mb-6 text-brand-terracotta">BOOK ZEEY</h1>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Bring ZEEY's electrifying performance to your venue, festival, or private event.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Booking Info Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading mb-6 text-brand-terracotta">Performance Options</h2>
                  <div className="space-y-4">
                    <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-brand-terracotta/50 transition-colors hover-lift">
                      <h3 className="text-xl font-medium text-brand-terracotta mb-2">Full Band Experience</h3>
                      <p className="text-zinc-300 mb-4">
                        ZEEY's complete live band setup featuring drums, bass, guitar, keys, and backing vocals. Perfect
                        for festivals, concert venues, and large events.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Clock className="h-4 w-4" />
                        <span>60-90 minute performance</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-brand-terracotta/50 transition-colors hover-lift">
                      <h3 className="text-xl font-medium text-brand-terracotta mb-2">Acoustic Set</h3>
                      <p className="text-zinc-300 mb-4">
                        An intimate, stripped-down performance showcasing ZEEY's vocal prowess and musical versatility.
                        Ideal for smaller venues, private events, and special occasions.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Clock className="h-4 w-4" />
                        <span>45-60 minute performance</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-brand-terracotta/50 transition-colors hover-lift">
                      <h3 className="text-xl font-medium text-brand-terracotta mb-2">Special Appearances</h3>
                      <p className="text-zinc-300 mb-4">
                        ZEEY is available for guest appearances, collaborations, and special events. Contact for custom
                        performance options tailored to your specific needs.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Clock className="h-4 w-4" />
                        <span>Customizable duration</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-heading mb-6 text-brand-terracotta">Technical Requirements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                          <Music className="h-5 w-5 text-brand-terracotta" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Sound System</h3>
                          <ul className="text-sm text-zinc-300 space-y-1">
                            <li>• Professional PA system</li>
                            <li>• 4+ monitor speakers</li>
                            <li>• Digital mixing console</li>
                            <li>• Wireless microphones</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                          <MapPin className="h-5 w-5 text-brand-terracotta" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Venue Requirements</h3>
                          <ul className="text-sm text-zinc-300 space-y-1">
                            <li>• Minimum stage size: 16' x 12'</li>
                            <li>• Secure green room</li>
                            <li>• Adequate lighting system</li>
                            <li>• Load-in access</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                          <Users className="h-5 w-5 text-brand-terracotta" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Hospitality</h3>
                          <ul className="text-sm text-zinc-300 space-y-1">
                            <li>• Accommodations for team</li>
                            <li>• Meals for performance day</li>
                            <li>• Bottled water and refreshments</li>
                            <li>• Transportation from hotel</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-terracotta/20 p-3 rounded-lg">
                          <DollarSign className="h-5 w-5 text-brand-terracotta" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Booking Process</h3>
                          <ul className="text-sm text-zinc-300 space-y-1">
                            <li>• Initial inquiry</li>
                            <li>• Date confirmation</li>
                            <li>• Contract signing</li>
                            <li>• 50% deposit to secure date</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
                <h2 className="text-3xl font-heading mb-6 text-gradient">Booking Request</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-brand-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-brand-terracotta" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Request Received!</h3>
                    <p className="text-zinc-300 mb-6">
                      Thank you for your interest in booking ZEEY. Our team will review your request and get back to you
                      within 48 hours.
                    </p>
                    <Button
                      className="bg-brand-terracotta hover:bg-brand-terracotta/90"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name *
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
                          Email *
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
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
                          value={formState.organization}
                          onChange={handleChange}
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
                        value={formState.eventType}
                        onChange={handleChange}
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
                          value={formState.eventDate}
                          onChange={handleChange}
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
                          value={formState.eventLocation}
                          onChange={handleChange}
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
                        value={formState.budget}
                        onChange={handleChange}
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
                        value={formState.additionalInfo}
                        onChange={handleChange}
                        rows={5}
                        className="bg-zinc-900/50 border-zinc-800"
                        placeholder="Please include any specific requirements, expected attendance, or other relevant details"
                      />
                    </div>

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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-950 relative">
        <div className="container">
          <h2 className="text-3xl font-heading mb-8 text-center text-brand-terracotta">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-terracotta/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-terracotta/20 flex items-center justify-center">
                  <span className="text-brand-terracotta font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-medium">Michael Johnson</h4>
                  <p className="text-xs text-zinc-400">Festival Director, SoundWave</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">
                "ZEEY's performance was the highlight of our festival. His energy and connection with the audience was
                incredible. We've already booked him for next year's event!"
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-terracotta/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-terracotta/20 flex items-center justify-center">
                  <span className="text-brand-terracotta font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-medium">Sarah Williams</h4>
                  <p className="text-xs text-zinc-400">Event Coordinator, Luxury Hotels</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">
                "We hired ZEEY for our corporate gala and he exceeded all expectations. Professional, punctual, and
                delivered an unforgettable performance that our guests are still talking about."
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-terracotta/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-terracotta/20 flex items-center justify-center">
                  <span className="text-brand-terracotta font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-medium">James & Tanya</h4>
                  <p className="text-xs text-zinc-400">Private Wedding Clients</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">
                "Having ZEEY perform at our wedding was the best decision we made. His acoustic set created the perfect
                atmosphere for our special day. Truly a magical experience!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <h2 className="text-3xl font-heading mb-8 text-center text-brand-terracotta">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-medium text-brand-terracotta mb-2">How far in advance should I book?</h3>
              <p className="text-zinc-300">
                We recommend booking at least 3-6 months in advance for private events and 6-12 months for festivals and
                larger venues to ensure availability. However, we occasionally have last-minute openings, so don't
                hesitate to inquire about your date.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-medium text-brand-terracotta mb-2">
                What is the typical performance duration?
              </h3>
              <p className="text-zinc-300">
                ZEEY's full band performances typically run 60-90 minutes, while acoustic sets are usually 45-60
                minutes. Custom durations can be arranged based on your event needs.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-medium text-brand-terracotta mb-2">Do you travel internationally?</h3>
              <p className="text-zinc-300">
                Yes! ZEEY is available for international bookings. Additional travel fees and accommodation requirements
                will apply. Please provide as much advance notice as possible for international events.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-medium text-brand-terracotta mb-2">What is the booking process?</h3>
              <p className="text-zinc-300">
                After submitting your inquiry, our team will contact you to discuss details and confirm availability.
                Once terms are agreed upon, we'll send a contract and request a 50% deposit to secure your date, with
                the balance due prior to the event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
