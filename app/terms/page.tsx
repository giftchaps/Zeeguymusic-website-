import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeIn from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"

export default function TermsPage() {
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
                Terms of Use
              </h1>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Please read these terms carefully before using our website.
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
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the ZEEY website ("Site"), you accept and agree to be bound by the terms and
                  provisions of this agreement. If you do not agree to these terms, please do not use our Site.
                </p>

                <h2>2. Use License</h2>
                <p>
                  Permission is granted to temporarily view the materials on ZEEY's website for personal, non-commercial
                  use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>

                <h2>3. Content</h2>
                <p>
                  All content included on this Site, such as text, graphics, logos, images, audio clips, digital
                  downloads, and data compilations, is the property of ZEEY or its content suppliers and protected by
                  international copyright laws.
                </p>

                <h2>4. User Submissions</h2>
                <p>
                  Any material, information, or idea you submit to this Site will be treated as non-confidential and
                  non-proprietary. ZEEY may use such submissions for any purpose whatsoever.
                </p>

                <h2>5. Site Terms of Use Modifications</h2>
                <p>
                  ZEEY may revise these terms of use at any time without notice. By using this Site, you are agreeing to
                  be bound by the then current version of these Terms and Conditions of Use.
                </p>

                <h2>6. Governing Law</h2>
                <p>
                  Any claim relating to ZEEY's website shall be governed by the laws of the jurisdiction in which ZEEY
                  is registered without regard to its conflict of law provisions.
                </p>

                <h2>7. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Use, please contact us at{" "}
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
