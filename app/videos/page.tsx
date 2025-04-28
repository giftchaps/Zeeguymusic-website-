import { Play, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import TextReveal from "@/components/animations/text-reveal"
import { Badge } from "@/components/ui/badge"
import YouTubeEmbed from "@/components/youtube-embed"
import MainNav from "@/components/main-nav"

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
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
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-brand-terracotta">VIDEOS</h1>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Visual journeys through sound and space. Experience ZEEY's music through cinematic storytelling.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-terracotta to-brand-terracotta rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900">
                  <YouTubeEmbed videoId="NrBv8C1R4tU" title="Tari - Official Music Video" />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="space-y-6">
                <div>
                  <Badge className="mb-1 bg-brand-terracotta/20 text-brand-terracotta border-none">LATEST VIDEO</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 text-brand-terracotta">TARI</h2>
                  <p className="text-zinc-400">Released: November 3, 2023</p>
                </div>

                <p className="text-zinc-300">
                  "Tari" tells the story of a modest girl who caught the eye of two young men while remaining loyal to
                  her partner. Directed and produced by Trevor Mhariwa at Shona Pixel Studios, with production by MT
                  Productions & Nigel Nyangombe, this captivating video was proudly brought to you by Xcelerate
                  Entertainment.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button className="gap-2 bg-brand-terracotta hover:bg-brand-terracotta/90">
                    <Play className="h-4 w-4" /> Watch Now
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                    asChild
                  >
                    <a href="https://youtube.com/@zeeyguy" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> YouTube
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="text-2xl font-bold text-brand-terracotta">4:32</div>
                    <div className="text-xs text-zinc-400">DURATION</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="text-2xl font-bold text-brand-terracotta">2.4M</div>
                    <div className="text-xs text-zinc-400">VIEWS</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="text-2xl font-bold text-brand-terracotta">4K</div>
                    <div className="text-xs text-zinc-400">QUALITY</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-zinc-950 relative">
        <div className="container">
          <Tabs defaultValue="music-videos" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger
                  value="music-videos"
                  className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
                >
                  Music Videos
                </TabsTrigger>
                <TabsTrigger
                  value="live"
                  className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
                >
                  Live Performances
                </TabsTrigger>
                <TabsTrigger
                  value="behind"
                  className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
                >
                  Behind The Scenes
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="music-videos" className="space-y-8">
              <StaggerChildren>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
                    <YouTubeEmbed videoId="NrBv8C1R4tU" title="Tari - Official Music Video" />
                    <div className="p-4">
                      <h3 className="font-medium text-brand-terracotta">Tari</h3>
                      <p className="text-sm text-zinc-400">Official Music Video</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
                    <YouTubeEmbed videoId="PZ01myUxnxA" title="Starlight - Official Music Video" />
                    <div className="p-4">
                      <h3 className="font-medium text-brand-terracotta">Starlight</h3>
                      <p className="text-sm text-zinc-400">Official Music Video</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
                    <YouTubeEmbed videoId="73rnFVgWNHI" title="Digital Love - Official Music Video" />
                    <div className="p-4">
                      <h3 className="font-medium text-brand-terracotta">Digital Love</h3>
                      <p className="text-sm text-zinc-400">Official Music Video</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
                    <YouTubeEmbed videoId="51wzSyLRpmU" title="Midnight City - Official Music Video" />
                    <div className="p-4">
                      <h3 className="font-medium text-brand-terracotta">Midnight City</h3>
                      <p className="text-sm text-zinc-400">Official Music Video</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
                    <YouTubeEmbed videoId="7NIhhte4f1E" title="Neon Lights - Official Music Video" />
                    <div className="p-4">
                      <h3 className="font-medium text-brand-terracotta">Neon Lights</h3>
                      <p className="text-sm text-zinc-400">Official Music Video</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
                    <YouTubeEmbed videoId="VYM14nkiTRs" title="AMAI - Official Music Video" />
                    <div className="p-4">
                      <h3 className="font-medium text-brand-terracotta">AMAI</h3>
                      <p className="text-sm text-zinc-400">Official Music Video</p>
                    </div>
                  </div>
                </div>
              </StaggerChildren>
            </TabsContent>

            <TabsContent value="live" className="space-y-8">
              <StaggerChildren>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 border border-zinc-800 hover:border-brand-terracotta/50">
                    <YouTubeEmbed videoId="3K2L57ZqzWg" title="Live at Music Festival - Full Performance" />
                    <div className="p-4">
                      <h3 className="font-medium text-brand-terracotta">Live at Music Festival</h3>
                      <p className="text-sm text-zinc-400">Full Performance</p>
                    </div>
                  </div>
                </div>
              </StaggerChildren>
            </TabsContent>

            <TabsContent value="behind" className="space-y-8">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-brand-terracotta mb-2">Coming Soon</h3>
                <p className="text-zinc-400">Behind the scenes content is currently being edited. Check back soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* YouTube Channel */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to the Channel</h2>
            <p className="text-zinc-300 mb-8">
              Never miss a video release. Join subscribers on the official ZEEY YouTube channel for exclusive content,
              live performances, and behind-the-scenes footage.
            </p>
            <Button size="lg" className="gap-2 bg-brand-terracotta hover:bg-brand-terracotta/90" asChild>
              <a href="https://youtube.com/@zeeyguy" target="_blank" rel="noopener noreferrer">
                <svg
                  className="h-5 w-5"
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
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
