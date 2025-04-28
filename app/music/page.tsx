"use client"

import { Button } from "@/components/ui/button"
import { Play, ExternalLink, ListMusic, Pause, Volume2 } from "lucide-react"
import Link from "next/link"
import FadeIn from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"
import TextReveal from "@/components/animations/text-reveal"
import { useState, useRef, useEffect } from "react"
import StaggerChildren from "@/components/animations/stagger-children"
import PlatformIcon from "@/components/platform-icon"

export default function MusicPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black z-10" />
          <img
            src="/images/zeey-guitar-closeup.jpeg"
            alt="Guitar strings close-up"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <TextReveal>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-brand-terracotta">MUSIC</h1>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Explore Zeey's music - a fusion of soul, rhythm, and truth that resonates with listeners worldwide.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Release */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <FadeIn direction="left">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-terracotta to-brand-terracotta rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <img
                      src="/images/zeey-leather.png"
                      alt="Zeey Latest Release"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <FadeIn direction="right" delay={0.3}>
                <div>
                  <Badge className="mb-1 bg-brand-terracotta/20 text-brand-terracotta border-none">
                    LATEST RELEASE
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 text-brand-terracotta">SHAMISO</h2>
                  <p className="text-zinc-400">Released: March 12, 2025</p>
                </div>

                <p className="text-zinc-300">
                  "SHAMISO" is Zeey's latest single, a soulful track that showcases his unique vocal style and heartfelt
                  lyrics. The song blends afrobeat rhythms with contemporary R&B elements, creating a sound that's both
                  fresh and authentic to Zeey's musical identity.
                </p>

                <div className="flex flex-wrap gap-6 mt-8">
                  <Button className="gap-2 bg-brand-terracotta hover:bg-brand-terracotta/90" asChild>
                    <Link
                      href="https://open.spotify.com/track/3KugDYRFo9mR6iP3DCC5c3?si=263a95cc2dc4457f"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="h-4 w-4" /> Play Now
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                  >
                    <ListMusic className="h-4 w-4" /> View Lyrics
                  </Button>
                  <Button
                    variant="ghost"
                    className="gap-2 hover:bg-brand-terracotta/10 hover:text-brand-terracotta"
                    asChild
                  >
                    <Link
                      href="https://open.spotify.com/track/3KugDYRFo9mR6iP3DCC5c3?si=263a95cc2dc4457f"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" /> Stream Everywhere
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="text-2xl font-bold text-brand-terracotta">3:42</div>
                    <div className="text-xs text-zinc-400">DURATION</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="text-2xl font-bold text-brand-terracotta">2025</div>
                    <div className="text-xs text-zinc-400">RELEASE</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="text-2xl font-bold text-brand-terracotta">Single</div>
                    <div className="text-xs text-zinc-400">TYPE</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="text-2xl font-bold text-brand-terracotta">Streaming</div>
                    <div className="text-xs text-zinc-400">AVAILABLE ON</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Song List Section */}
      <section className="py-16 bg-zinc-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="container relative">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">TRACKS</Badge>
              <h2 className="text-4xl md:text-5xl font-heading mb-4 text-brand-terracotta">Featured Songs</h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">
                Listen to samples of Zeey's most popular tracks and stream them on your favorite platform.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="space-y-6">
            <SongItem
              title="SHAMISO"
              duration="3:15"
              year="2025"
              image="/images/zeey-leather.png"
              streamUrl="https://open.spotify.com/track/3KugDYRFo9mR6iP3DCC5c3"
            />

            <SongItem
              title="TARI"
              duration="4:15"
              year="2023"
              image="/images/zeey-hoodie.png"
              streamUrl="https://open.spotify.com/track/3zfqzYIdgelIuDkcjP8fwC"
            />

            <SongItem
              title="HERE I AM"
              duration="3:28"
              year="2022"
              image="/images/zeey-bw.png"
              streamUrl="https://open.spotify.com/track/6XNVOMlrfCFgbVBKDxvcqk"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* Spotify Embeds */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="container relative">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-brand-terracotta/20 text-brand-terracotta border-none">LISTEN</Badge>
              <h2 className="text-4xl md:text-5xl font-heading mb-4 text-brand-terracotta">Stream Full Tracks</h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">
                Listen to Zeey's music directly from Spotify without leaving the page.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-brand-terracotta/50 transition-colors">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/21CDMmIOrhuKTf75CGegpj?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-brand-terracotta/50 transition-colors">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/3zfqzYIdgelIuDkcjP8fwC?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-brand-terracotta/50 transition-colors">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/6XNVOMlrfCFgbVBKDxvcqk?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-brand-terracotta/50 transition-colors">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/3KugDYRFo9mR6iP3DCC5c3?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl" />

        <div className="container relative">
          <FadeIn delay={0.5}>
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
            <div className="text-center">
              <Button className="gap-2 bg-brand-terracotta hover:bg-brand-terracotta/90 px-8 py-6 text-lg" asChild>
                <Link href="https://open.spotify.com/artist/2cHTFyFIpbT7JU3qrt4A4j?si=IvGT3Z40QC-aa6y4QWy5Rg">
                  <ExternalLink className="h-5 w-5" /> Stream Everywhere
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

function SongItem({ title, duration, year, image, streamUrl }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const togglePreview = () => {
    setShowPreview(!showPreview)
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors group">
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        <div className="relative h-16 w-16 rounded-md overflow-hidden shrink-0">
          <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-none"
            onClick={togglePreview}
          >
            {showPreview ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white" />}
            <span className="sr-only">
              {showPreview ? "Hide" : "Show"} preview for {title}
            </span>
          </Button>
        </div>
        <div>
          <h3 className="font-medium group-hover:text-brand-terracotta transition-colors">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>{duration}</span>
            <span className="text-zinc-600">•</span>
            <span>{year}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
        <Button variant="ghost" size="sm" className="text-brand-terracotta hover:bg-brand-terracotta/10" asChild>
          <Link href={streamUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <ExternalLink className="h-3 w-3" /> Stream
          </Link>
        </Button>
      </div>
      {showPreview && (
        <div className="col-span-full mt-4">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <iframe
              style={{ borderRadius: "12px" }}
              src={`https://open.spotify.com/embed/track/${streamUrl.split('/').pop()}?utm_source=generator`}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}
