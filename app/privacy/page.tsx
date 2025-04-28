import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeIn from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
            <FadeIn>
              <div className="prose prose-invert max-w-none">
                <h2>1. Information We Collect</h2>
                <p>
                  We collect information when you subscribe to our newsletter, fill out a form, or enter information on
                  our site. The information may include your name and email address.
                </p>

                <h2>2. How We Use Your Information</h2>
                <p>We may use the information we collect from you in the following ways:</p>
                <ul>
                  <li>To personalize your experience and deliver content most relevant to you</li>
                  <li>To improve our website to better serve you</li>
                  <li>To send periodic emails regarding your order or other products and services</li>
                  <li>To follow up with you after correspondence</li>
                </ul>

                <h2>3. Website Cookies</h2>
                <p>
                  Our website may use "cookies" to enhance user experience. Your web browser places cookies on your hard
                  drive for record-keeping purposes and sometimes to track information about you. You may choose to set
                  your web browser to refuse cookies or to alert you when cookies are being sent.
                </p>

                <h2>4. Third-Party Disclosure</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personally identifiable information to outside
                  parties unless we provide users with advance notice. This does not include website hosting partners
                  and other parties who assist us in operating our website, conducting our business, or serving our
                  users, so long as those parties agree to keep this information confidential.
                </p>

                <h2>5. Third-Party Links</h2>
                <p>
                  Occasionally, at our discretion, we may include or offer third-party products or services on our
                  website. These third-party sites have separate and independent privacy policies. We therefore have no
                  responsibility or liability for the content and activities of these linked sites.
                </p>

                <h2>6. GDPR Compliance</h2>
                <p>
                  We are committed to ensuring that your privacy is protected. If you are within the European Union, you
                  have the following rights:
                </p>
                <ul>
                  <li>The right to be informed</li>
                  <li>The right of access</li>
                  <li>The right to rectification</li>
                  <li>The right to erasure</li>
                  <li>The right to restrict processing</li>
                  <li>The right to data portability</li>
                  <li>The right to object</li>
                  <li>Rights in relation to automated decision making and profiling</li>
                </ul>

                <h2>7. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any
                  changes.
                </p>

                <h2>8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:info@zeeyguymusic.com" className="text-brand-terracotta hover:underline">
                    info@zeeyguymusic.com
                  </a>
                  .
                </p>
              </div>

              <div className="mt-12 text-center">
                <Button asChild className="bg-brand-terracotta hover:bg-brand-terracotta/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
