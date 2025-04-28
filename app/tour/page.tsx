import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TourMap from "@/components/tour-map"
import FadeIn from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"

export default function TourPage() {
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
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-brand-terracotta">TOUR DATES</h1>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Experience the sonic journey live. Find upcoming shows and secure your tickets to the next dimension.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Current Tour */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-brand-terracotta mb-1">CURRENT TOUR</h4>
                <h2 className="text-4xl md:text-5xl font-bold mb-2 text-brand-terracotta">ELEVATION WORLD TOUR</h2>
                <p className="text-zinc-400">2024-2025</p>
              </div>

              <p className="text-zinc-300">
                The Elevation World Tour brings ZEEY's groundbreaking music to life with an immersive audio-visual
                experience. Featuring state-of-the-art production, stunning visuals, and interactive moments, this tour
                redefines the live music experience by blending afrobeat rhythms, soulful vocals, and contemporary
                production.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <div className="text-2xl font-bold text-brand-terracotta">25</div>
                  <div className="text-xs text-zinc-400">SHOWS</div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <div className="text-2xl font-bold text-brand-terracotta">12</div>
                  <div className="text-xs text-zinc-400">COUNTRIES</div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <div className="text-2xl font-bold text-brand-terracotta">4</div>
                  <div className="text-xs text-zinc-400">CONTINENTS</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="gap-2 bg-brand-terracotta hover:bg-brand-terracotta/90">
                  <Calendar className="h-4 w-4" /> View All Dates
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                >
                  <MapPin className="h-4 w-4" /> Tour Map
                </Button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-terracotta to-brand-terracotta rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative rounded-lg overflow-hidden">
                <img src="/images/zeey-stage.png" alt="Elevation Tour Poster" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Dates */}
      <section className="py-16 bg-zinc-950 relative">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-2/3">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input placeholder="Search by city or venue" className="pl-10 bg-zinc-900 border-zinc-800" />
                </div>
                <div className="flex gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-800">
                      <SelectValue placeholder="Filter by region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="na">North America</SelectItem>
                      <SelectItem value="eu">Europe</SelectItem>
                      <SelectItem value="as">Asia</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon" className="bg-zinc-900 border-zinc-800">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
                  <TabsTrigger
                    value="upcoming"
                    className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
                  >
                    Upcoming Shows
                  </TabsTrigger>
                  <TabsTrigger
                    value="past"
                    className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
                  >
                    Past Shows
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="space-y-4">
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-brand-terracotta/20 rounded-full flex items-center justify-center mb-6">
                      <Calendar className="h-8 w-8 text-brand-terracotta" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                    <p className="text-zinc-400 max-w-lg">
                      Tour dates for the upcoming season are currently being finalized. Subscribe to our newsletter to
                      be the first to know when tickets become available.
                    </p>
                    <Button className="mt-8 bg-brand-terracotta hover:bg-brand-terracotta/90">Get Notified</Button>
                  </div>
                </TabsContent>

                <TabsContent value="past" className="space-y-4">
                  {[
                    {
                      date: "May 20, 2023",
                      venue: "Madison Square Garden",
                      location: "New York, NY",
                      time: "8:00 PM",
                    },
                    {
                      date: "May 15, 2023",
                      venue: "Red Rocks Amphitheatre",
                      location: "Morrison, CO",
                      time: "7:00 PM",
                    },
                    {
                      date: "May 10, 2023",
                      venue: "The Anthem",
                      location: "Washington, DC",
                      time: "7:30 PM",
                    },
                    {
                      date: "May 05, 2023",
                      venue: "The Masonic",
                      location: "San Francisco, CA",
                      time: "8:00 PM",
                    },
                  ].map((show, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 opacity-70"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4 md:mb-0">
                        <div className="flex items-center gap-2 text-zinc-300">
                          <Calendar className="h-4 w-4 text-zinc-400" />
                          <span>{show.date}</span>
                        </div>
                        <div>
                          <h3 className="font-bold">{show.venue}</h3>
                          <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                            <MapPin className="h-3 w-3" />
                            <span>{show.location}</span>
                            <span className="text-zinc-600">•</span>
                            <Clock className="h-3 w-3" />
                            <span>{show.time}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" disabled>
                          Past Event
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            <div className="w-full md:w-1/3">
              <div className="sticky top-20">
                <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/50">
                  <div className="p-4 border-b border-zinc-800">
                    <h3 className="font-bold">Tour Map</h3>
                  </div>
                  <div className="aspect-square relative">
                    <TourMap />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-terracotta/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-terracotta/10 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get Tour Updates</h2>
            <p className="text-zinc-300 mb-8">
              Subscribe to receive early access to tickets, exclusive pre-sales, and tour announcements before anyone
              else.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="bg-zinc-900 border-zinc-800" />
              <Button type="submit" className="bg-brand-terracotta hover:bg-brand-terracotta/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
