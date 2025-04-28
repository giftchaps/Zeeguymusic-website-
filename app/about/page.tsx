import { Badge } from "@/components/ui/badge"
import { Music, Mic, Headphones, Users } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"
import StaggerChildren from "@/components/animations/stagger-children"
import SocialIcons from "@/components/social-icons"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-terracotta/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <TextReveal>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-brand-terracotta">ABOUT ZEEY</h1>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                The story behind the sound. Discover the journey, influences, and vision that shape the music.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-terracotta to-brand-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/images/zeey-leather.png"
                    alt="ZEEY Portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">THE ARTIST</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 text-brand-terracotta">ZEEY</h2>
                  <p className="text-zinc-400">Music Artist & Producer</p>
                </div>

                <div className="space-y-4 text-zinc-300">
                  <p>
                    Zeey is a dynamic music artist and producer whose sound blends soul, rhythm, and truth in a way that
                    resonates deeply with listeners. With a passion for storytelling through music, Zeey has crafted a
                    unique sonic identity that draws from diverse influences — fusing afrobeat, gospel, R&B, and
                    contemporary vibes into a fresh, authentic experience.
                  </p>
                  <p>
                    Beyond the studio, Zeey is known for electrifying live performances that create space for
                    connection, inspiration, and joy. Whether it's a high-energy stage set or an intimate unplugged
                    session, Zeey's music bridges the gap between sound and spirit.
                  </p>
                  <p>
                    As a producer, Zeey is driven by purpose, helping other artists bring their vision to life with
                    excellence and heart. His dedication to both the craft and the culture has made him a trusted name
                    among collaborators and fans alike.
                  </p>
                  <p>
                    With every beat, every lyric, and every moment, Zeey is on a mission: to move people, uplift souls,
                    and make music that matters.
                  </p>
                </div>

                <div className="flex gap-4">
                  <SocialIcons />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Musical Journey */}
      <section className="py-16 bg-zinc-950 relative">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">THE JOURNEY</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-terracotta">Musical Influences</h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">
                Zeey's unique sound is shaped by a diverse range of musical traditions and personal experiences.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-terracotta/50 transition-colors hover-lift">
              <div className="w-12 h-12 rounded-full bg-brand-terracotta/20 flex items-center justify-center mb-4">
                <Music className="h-5 w-5 text-brand-terracotta" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-brand-terracotta">Afrobeat</h3>
              <p className="text-zinc-300">
                The rhythmic innovations of West African music provide a foundation for Zeey's dynamic sound, bringing
                energy and movement to every track.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-purple/50 transition-colors hover-lift">
              <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4">
                <Mic className="h-5 w-5 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-brand-terracotta">Gospel</h3>
              <p className="text-zinc-300">
                Soul-stirring harmonies and spiritual depth from gospel traditions infuse Zeey's music with authenticity
                and emotional resonance.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-terracotta/50 transition-colors hover-lift">
              <div className="w-12 h-12 rounded-full bg-brand-terracotta/20 flex items-center justify-center mb-4">
                <Headphones className="h-5 w-5 text-brand-terracotta" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-brand-terracotta">R&B</h3>
              <p className="text-zinc-300">
                Contemporary R&B artists have shaped Zeey's approach to melody and vocal expression, creating a smooth,
                modern sound.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-purple/50 transition-colors hover-lift">
              <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-brand-terracotta">Contemporary</h3>
              <p className="text-zinc-300">
                Innovative producers in electronic and hip-hop spaces have influenced Zeey's production style, keeping
                his sound fresh and relevant.
              </p>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Performance Style */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" className="order-2 md:order-1">
              <div className="space-y-6">
                <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">ON STAGE</Badge>
                <h2 className="text-4xl font-heading mb-4 text-brand-terracotta">Performance Style</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Zeey's live performances are known for their electric energy and deep connection with the audience.
                    Whether commanding a festival stage or creating intimate moments in smaller venues, each show is
                    crafted as a journey through sound and emotion.
                  </p>
                  <p>
                    The live band brings additional dimensions to the studio recordings, with extended instrumental
                    sections and spontaneous moments that make each performance unique. Zeey believes in the
                    transformative power of live music and approaches each show as an opportunity.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-terracotta to-brand-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/images/zeey-contemplative.jpeg"
                    alt="ZEEY in contemplative pose"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
