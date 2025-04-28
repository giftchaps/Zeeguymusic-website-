import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Calendar, ExternalLink, ArrowRight, Star, Award, Headphones } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import SocialIcons from "@/components/social-icons"
import NewsletterForm from "@/components/newsletter-form"
import { Badge } from "@/components/ui/badge"
import PlatformIcon from "@/components/platform-icon"
import HeroVideo from "@/components/hero-video"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Image/Video Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black z-10" />
          {/* Image for mobile */}
          <img
            src="/images/zeey-hero-portrait.png"
            alt="ZEEY with acoustic guitar"
            className="absolute inset-0 w-full h-full object-cover object-[center_40%] lg:hidden"
          />
          {/* Video for desktop */}
          <HeroVideo />
        </div>
        <div className="container relative z-20 flex flex-col items-center text-center gap-6 pt-16">
          <Badge
            variant="outline"
            className="bg-black/50 backdrop-blur-sm border-brand-terracotta/50 px-4 py-1.5 animate-pulse-slow"
          >
            New Music Coming Soon
          </Badge>

          <FadeIn delay={0.3}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading tracking-wide text-brand-terracotta mb-2">
              ZEEY
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl font-light">
              Soul, Rhythm, and Truth in Every Note
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                size="lg"
                className="gap-2 px-8 py-6 text-lg bg-brand-terracotta hover:bg-brand-terracotta/90 text-white"
                asChild
              >
                <Link href="https://open.spotify.com/artist/2cHTFyFIpbT7JU3qrt4A4j?si=IvGT3Z40QC-aa6y4QWy5Rg">
                  <Play className="h-5 w-5" /> Listen Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8 py-6 text-lg border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                asChild
              >
                <Link href="/tour">
                  <Calendar className="h-5 w-5" /> Tour Dates
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.7} className="mt-8">
            <div className="flex gap-6">
              <SocialIcons className="h-7 w-7" />
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#music" className="text-white/50 hover:text-white transition-colors">
            <svg
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
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Featured Release */}
      <section id="music" className="py-24 bg-gradient-to-b from-black to-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <FadeIn direction="left" className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-terracotta to-brand-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/images/zeey-hoodie.png"
                    alt="ZEEY in hoodie"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3} className="w-full md:w-1/2">
              <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">ABOUT THE ARTIST</Badge>
              <h2 className="text-4xl md:text-6xl font-heading mb-2 text-brand-terracotta">ZEEY</h2>
              <p className="text-zinc-400 mb-6">Music Artist & Producer</p>

              <div className="space-y-4 text-zinc-300 mb-8">
                <p>
                  Zeey is a dynamic music artist and producer whose sound blends soul, rhythm, and truth in a way that
                  resonates deeply with listeners. With a passion for storytelling through music, Zeey has crafted a
                  unique sonic identity that draws from diverse influences — fusing afrobeat, gospel, R&B, and
                  contemporary vibes into a fresh, authentic experience.
                </p>
                <p>
                  Beyond the studio, Zeey is known for electrifying live performances that create space for connection,
                  inspiration, and joy. Whether it's a high-energy stage set or an intimate unplugged session, Zeey's
                  music bridges the gap between sound and spirit.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="gap-2 bg-brand-terracotta hover:bg-brand-terracotta/90" asChild>
                  <Link href="https://open.spotify.com/artist/2cHTFyFIpbT7JU3qrt4A4j?si=IvGT3Z40QC-aa6y4QWy5Rg">
                    <Play className="h-4 w-4" /> Listen Now
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                  asChild
                >
                  <Link href="/about">
                    <ExternalLink className="h-4 w-4" /> Learn More
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="mt-20">
            <h3 className="text-2xl md:text-3xl font-heading mb-8 text-center text-brand-terracotta">
              Stream My Music
            </h3>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <Link
                href="https://open.spotify.com/artist/2cHTFyFIpbT7JU3qrt4A4j?si=IvGT3Z40QC-aa6y4QWy5Rg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover-lift"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3 text-[#1DB954]">
                  <PlatformIcon platform="spotify" className="w-12 h-12" />
                </div>
                <span className="text-sm">Spotify</span>
              </Link>
              <Link
                href="https://music.apple.com/us/artist/zeeyguy/1755126347"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover-lift"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3 text-[#FA243C]">
                  <PlatformIcon platform="apple music" className="w-12 h-12" />
                </div>
                <span className="text-sm">Apple Music</span>
              </Link>
              <Link
                href="https://youtube.com/@zeeyguy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover-lift"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3 text-[#FF0000]">
                  <PlatformIcon platform="youtube music" className="w-12 h-12" />
                </div>
                <span className="text-sm">YouTube</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Music & Videos Section */}
      <section className="py-24 bg-zinc-950 relative">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">MEDIA</Badge>
              <h2 className="text-4xl md:text-5xl font-heading mb-4 text-brand-terracotta">Music & Videos</h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">
                Experience Zeey's music through stunning visuals and live performances.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn direction="left">
              <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50 animate-border-glow">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/3K2L57ZqzWg"
                  title="Zeey Live Performance"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <h3 className="text-2xl font-heading mb-4 text-brand-terracotta">Latest Performance</h3>
              <p className="text-zinc-300 mb-6">
                Watch Zeey's electrifying live performance that showcases his unique ability to connect with audiences
                through soulful vocals and authentic stage presence. This performance highlights his signature blend of
                afrobeat, gospel, and R&B influences.
              </p>
              <Button className="gap-2 bg-brand-terracotta hover:bg-brand-terracotta/90" asChild>
                <Link href="https://youtube.com/@zeeyguy">
                  <Play className="h-4 w-4" /> Watch More
                </Link>
              </Button>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PZ01myUxnxA"
                title="Zeey Music Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/73rnFVgWNHI"
                title="Zeey Music Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/51wzSyLRpmU"
                title="Zeey Music Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </StaggerChildren>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="gap-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                asChild
              >
                <Link href="/videos">
                  <ArrowRight className="h-4 w-4" /> View All Videos
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl" />

        <div className="container relative">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">MISSION</Badge>
              <h2 className="text-4xl md:text-5xl font-heading mb-4 text-brand-terracotta">The Vision</h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">
                With every beat, every lyric, and every moment, Zeey is on a mission: to move people, uplift souls, and
                make music that matters.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-terracotta to-brand-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative rounded-lg overflow-hidden">
                  {/* Reduced image size by setting max-height */}
                  <img
                    src="/images/zeey-orange-portrait.jpeg"
                    alt="ZEEY artistic portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 max-h-[500px]"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="space-y-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-terracotta/50 transition-colors hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-terracotta/20 flex items-center justify-center">
                      <Star className="h-5 w-5 text-brand-terracotta" />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-terracotta">As an Artist</h4>
                    </div>
                  </div>
                  <p className="text-zinc-300">
                    "My music is a bridge between cultures and emotions. I create sounds that speak to the heart and
                    move the soul."
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-terracotta/50 transition-colors hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-terracotta/20 flex items-center justify-center">
                      <Award className="h-5 w-5 text-brand-terracotta" />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-terracotta">As a Producer</h4>
                    </div>
                  </div>
                  <p className="text-zinc-300">
                    "I'm driven by purpose, helping other artists bring their vision to life with excellence and heart."
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-terracotta/50 transition-colors hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-terracotta/20 flex items-center justify-center">
                      <Headphones className="h-5 w-5 text-brand-terracotta" />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-terracotta">Live Performance</h4>
                    </div>
                  </div>
                  <p className="text-zinc-300">
                    "On stage is where the magic happens—creating space for connection, inspiration, and joy."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Book Me Section - Updated to link to Contact page */}
      <section id="book" className="py-24 bg-zinc-950 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative rounded-lg overflow-hidden group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-terracotta to-brand-orange rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/images/zeey-stage.png"
                    alt="ZEEY Live Performance"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">BOOKINGS</Badge>
              <h2 className="text-4xl md:text-5xl font-heading mb-4 text-brand-terracotta">Book ZEEY</h2>
              <div className="space-y-4 text-zinc-300 mb-8">
                <p>
                  Bring Zeey's electrifying performance to your venue, festival, or private event. With a versatile
                  repertoire spanning multiple genres and a dynamic stage presence, Zeey delivers an unforgettable
                  experience for audiences of all sizes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-brand-terracotta/50 transition-colors">
                    <h4 className="font-medium text-brand-terracotta mb-2">Performance Types</h4>
                    <ul className="text-sm text-zinc-300 space-y-1">
                      <li>• Full band performances</li>
                      <li>• Acoustic sets</li>
                      <li>• Festival appearances</li>
                      <li>• Private events</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-brand-terracotta/50 transition-colors">
                    <h4 className="font-medium text-brand-terracotta mb-2">Technical Requirements</h4>
                    <ul className="text-sm text-zinc-300 space-y-1">
                      <li>• Professional sound system</li>
                      <li>• Stage monitors</li>
                      <li>• Lighting (for evening shows)</li>
                      <li>• Green room access</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="gap-2 bg-brand-terracotta hover:bg-brand-terracotta/90" asChild>
                  <Link href="/contact?tab=booking">
                    <Calendar className="h-4 w-4" /> Book Now
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                  asChild
                >
                  <Link href="/contact">Contact for Details</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-zinc-950 relative">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">GALLERY</Badge>
              <h2 className="text-4xl md:text-5xl font-heading mb-4 text-brand-terracotta">Visual Journey</h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">
                Moments captured in time, reflecting the soul behind the music.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
              <img src="/images/zeey-orange-portrait.jpeg" alt="ZEEY portrait" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
              <img
                src="/images/zeey-contemplative.jpeg"
                alt="ZEEY contemplative"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
              <img
                src="/images/zeey-guitar-closeup.jpeg"
                alt="Guitar close-up"
                className="w-full h-full object-cover"
              />
            </div>
          </StaggerChildren>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="gap-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                asChild
              >
                <Link href="/gallery">
                  <ArrowRight className="h-4 w-4" /> View Full Gallery
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter/Contact */}
      <section id="contact" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">STAY CONNECTED</Badge>
                <h2 className="text-4xl md:text-5xl font-heading mb-4 text-brand-terracotta">Join the Community</h2>
                <p className="text-zinc-300 mb-8">
                  Subscribe to get exclusive updates, behind-the-scenes content, and early access to tickets and
                  merchandise.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:border-brand-terracotta/50 transition-colors">
                <NewsletterForm />
              </div>
            </FadeIn>

            <StaggerChildren delay={0.5} staggerDelay={0.1} className="mt-12 flex justify-center gap-6">
              <SocialIcons className="h-8 w-8" />
            </StaggerChildren>
          </div>
        </div>
      </section>
    </div>
  )
}
