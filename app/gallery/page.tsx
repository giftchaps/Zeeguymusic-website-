import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import TextReveal from "@/components/animations/text-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function GalleryPage() {
  // Gallery categories
  const categories = [
    { id: "portraits", label: "Portraits" },
    { id: "performances", label: "Performances" },
    { id: "artistic", label: "Artistic" },
    { id: "travel", label: "Travel" },
  ]

  // Gallery images
  const galleryImages = {
    portraits: [
      {
        id: "portrait-7",
        src: "/images/zeey-with-fan-1.jpg",
        alt: "Zeey with a fan at an event",
        caption: "Meet & greet, 2025",
      },
      {
        id: "portrait-8",
        src: "/images/zeey-with-fan-2.jpg",
        alt: "Zeey with a fan outside venue",
        caption: "After show, 2025",
      },
      {
        id: "portrait-9",
        src: "/images/zeey-with-artist.jpg",
        alt: "Zeey with another artist at night",
        caption: "Collaboration, 2025",
      },
      {
        id: "portrait-1",
        src: "/images/zeey-portrait-white.jpeg",
        alt: "Zeey in white t-shirt",
        caption: "Studio portrait session, 2023",
      },
      {
        id: "portrait-2",
        src: "/images/zeey-orange-portrait.jpeg",
        alt: "Zeey against orange background",
        caption: "Terracotta series, 2023",
      },
      {
        id: "portrait-3",
        src: "/images/zeey-studio-bw.jpeg",
        alt: "Zeey in studio black and white",
        caption: "Studio session, 2023",
      },
      {
        id: "portrait-4",
        src: "/images/zeey-bw.png",
        alt: "Zeey black and white portrait",
        caption: "Monochrome series, 2022",
      },
      {
        id: "portrait-5",
        src: "/images/zeey-hoodie-bw.jpeg",
        alt: "Zeey in hoodie",
        caption: "Dramatic lighting series, 2023",
      },
      {
        id: "portrait-6",
        src: "/images/zeey-leather.png",
        alt: "Zeey in leather jacket",
        caption: "Album cover shoot, 2023",
      },
    ],
    performances: [
      {
        id: "perf-5",
        src: "/images/zeey-stage-3.jpg",
        alt: "Zeey performing on stage with crowd",
        caption: "Unplugged Show, 2025",
      },
      {
        id: "perf-6",
        src: "/images/zeey-stage-4.jpg",
        alt: "Zeey on stage with microphone and lights",
        caption: "Encore Night, 2025",
      },
      {
        id: "perf-3",
        src: "/images/zeey-stage-1.jpg",
        alt: "Zeey performing on stage with microphone",
        caption: "Unplugged Live performance, 2025",
      },
      {
        id: "perf-4",
        src: "/images/zeey-stage-2.jpg",
        alt: "Zeey singing on stage with lights",
        caption: " Unplugged Concert night, 2025",
      },
      {
        id: "perf-1",
        src: "/images/zeey-stage.png",
        alt: "Zeey on stage",
        caption: "Live at Music Festival, 2023",
      },
      {
        id: "perf-2",
        src: "/images/zeey-guitar.png",
        alt: "Zeey with guitar",
        caption: "Acoustic set at The Venue, 2022",
      },
    ],
    artistic: [
      {
        id: "art-1",
        src: "/images/zeey-guitar-closeup.jpeg",
        alt: "Guitar strings close-up",
        caption: "The Strings Series, 2023",
      },
      {
        id: "art-2",
        src: "/images/zeey-chain-bw.jpeg",
        alt: "Zeey holding chain",
        caption: "Connections, 2023",
      },
      {
        id: "art-3",
        src: "/images/zeey-hand.jpeg",
        alt: "Zeey's hand",
        caption: "Boundaries, 2023",
      },
      {
        id: "art-4",
        src: "/images/zeey-contemplative.jpeg",
        alt: "Zeey contemplative",
        caption: "Reflection, 2023",
      },
    ],
    travel: [
      {
        id: "travel-1",
        src: "/images/zeey-usa.jpeg",
        alt: "Zeey in front of government building",
        caption: "Washington DC Tour, 2023",
      },
      {
        id: "travel-2",
        src: "/images/zeey-artistic.png",
        alt: "Zeey artistic portrait",
        caption: "International Tour, 2022",
      },
    ],
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
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-brand-terracotta">GALLERY</h1>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Visual moments from Zeey's journey through music and life.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <FadeIn>
            <Tabs defaultValue="portraits" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList>
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {(galleryImages[category.id as keyof typeof galleryImages] as typeof galleryImages.portraits).map((image: { id: string; src: string; alt: string; caption: string }) => (
                      <div
                        key={image.id}
                        className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-brand-terracotta/50 transition-colors"
                      >
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm text-white">{image.caption}</p>
                        </div>
                      </div>
                    ))}
                  </StaggerChildren>
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-zinc-950 relative">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-center text-brand-terracotta">Instagram</h2>
              <p className="text-zinc-300 mb-6">
                Follow Zeey on Instagram for daily updates, behind-the-scenes content, and more.
              </p>
              <Button
                className="gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 mb-12"
                asChild
              >
                <Link href="https://www.instagram.com/zeeyguy_" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" /> @zeeyguy_
                </Link>
              </Button>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "/images/zeey-portrait-white.jpeg",
              "/images/zeey-hoodie-bw.jpeg",
              "/images/zeey-usa.jpeg",
              "/images/zeey-hand.jpeg",
              "/images/zeey-chain-bw.jpeg",
              "/images/zeey-studio-bw.jpeg",
              "/images/zeey-orange-portrait.jpeg",
              "/images/zeey-contemplative.jpeg",
            ].map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/zeeyguy_"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Instagram post ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </a>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <a
                href="https://www.instagram.com/zeeyguy_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-terracotta hover:text-brand-terracotta/80 transition-colors"
              >
                <span>View more on Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
