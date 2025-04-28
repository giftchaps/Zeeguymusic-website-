"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { Lock, ImageIcon, Music, Video, Calendar, Users, Settings } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // This is a simple authentication check - in a real app, you would use a secure authentication system
    // For demo purposes, we're using a hardcoded admin credential
    if (email === "admin@zeeyguy.com" && password === "admin123") {
      setIsAuthenticated(true)
    } else {
      setError("Invalid email or password")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-full max-w-md">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center mb-4">
                <Lock className="h-12 w-12 text-brand-terracotta" />
              </div>
              <CardTitle className="text-2xl text-center text-brand-terracotta">Admin Login</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@zeeyguy.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button type="submit" className="w-full bg-brand-terracotta hover:bg-brand-terracotta/90">
                    Login
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t border-zinc-800 pt-4">
              <p className="text-xs text-zinc-500 text-center w-full">
                This is a protected area. Unauthorized access is prohibited.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-brand-terracotta">Admin Dashboard</h1>
          <Button
            variant="outline"
            className="border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid grid-cols-6 mb-8">
            <TabsTrigger
              value="gallery"
              className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
            >
              <ImageIcon className="h-4 w-4 mr-2" /> Gallery
            </TabsTrigger>
            <TabsTrigger
              value="music"
              className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
            >
              <Music className="h-4 w-4 mr-2" /> Music
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
            >
              <Video className="h-4 w-4 mr-2" /> Videos
            </TabsTrigger>
            <TabsTrigger
              value="tour"
              className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
            >
              <Calendar className="h-4 w-4 mr-2" /> Tour
            </TabsTrigger>
            <TabsTrigger
              value="subscribers"
              className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
            >
              <Users className="h-4 w-4 mr-2" /> Subscribers
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-brand-terracotta data-[state=active]:text-white"
            >
              <Settings className="h-4 w-4 mr-2" /> Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-brand-terracotta">Gallery Management</CardTitle>
                <CardDescription>Add, edit, or remove images from the gallery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Upload New Image</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="image">Image File</Label>
                        <Input id="image" type="file" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <select
                          id="category"
                          className="w-full h-10 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
                        >
                          <option value="portraits">Portraits</option>
                          <option value="performances">Performances</option>
                          <option value="artistic">Artistic</option>
                          <option value="travel">Travel</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="alt">Alt Text</Label>
                        <Input id="alt" placeholder="Describe the image" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="caption">Caption</Label>
                        <Input id="caption" placeholder="Image caption" className="bg-zinc-800 border-zinc-700" />
                      </div>
                    </div>
                    <Button className="mt-4 bg-brand-terracotta hover:bg-brand-terracotta/90">Upload Image</Button>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <h3 className="text-lg font-medium mb-4">Current Gallery Images</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
                        <div key={i} className="relative group">
                          <img
                            src={src || "/placeholder.svg"}
                            alt={`Gallery image ${i + 1}`}
                            className="w-full aspect-square object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 rounded-lg">
                            <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
                              Edit
                            </Button>
                            <Button size="sm" variant="destructive">
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="music">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-brand-terracotta">Music Management</CardTitle>
                <CardDescription>Add, edit, or remove music tracks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Add New Track</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="title">Track Title</Label>
                        <Input id="title" placeholder="Track title" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Release Year</Label>
                        <Input id="year" placeholder="2023" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Input id="duration" placeholder="3:45" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="streamUrl">Stream URL</Label>
                        <Input
                          id="streamUrl"
                          placeholder="https://open.spotify.com/track/..."
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="cover">Cover Image</Label>
                        <Input id="cover" type="file" className="bg-zinc-800 border-zinc-700" />
                      </div>
                    </div>
                    <Button className="mt-4 bg-brand-terracotta hover:bg-brand-terracotta/90">Add Track</Button>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <h3 className="text-lg font-medium mb-4">Current Tracks</h3>
                    <div className="space-y-4">
                      {["SHAMISO", "Higher Dimension", "Starlight", "Digital Love", "Neon Lights"].map((track, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                          <div>
                            <h4 className="font-medium">{track}</h4>
                            <p className="text-sm text-zinc-400">2023 • 3:45</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
                              Edit
                            </Button>
                            <Button size="sm" variant="destructive">
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscribers">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-brand-terracotta">Email Subscribers</CardTitle>
                <CardDescription>Manage your newsletter subscribers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Subscriber List</h3>
                    <Button
                      variant="outline"
                      className="border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta/10"
                    >
                      Export CSV
                    </Button>
                  </div>

                  <div className="border rounded-lg border-zinc-800 overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-zinc-800">
                          <th className="px-4 py-2 text-left">Email</th>
                          <th className="px-4 py-2 text-left">Date Subscribed</th>
                          <th className="px-4 py-2 text-left">Status</th>
                          <th className="px-4 py-2 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { email: "fan1@example.com", date: "2023-05-15", status: "Active" },
                          { email: "fan2@example.com", date: "2023-06-22", status: "Active" },
                          { email: "fan3@example.com", date: "2023-07-10", status: "Inactive" },
                          { email: "fan4@example.com", date: "2023-08-05", status: "Active" },
                          { email: "fan5@example.com", date: "2023-09-18", status: "Active" },
                        ].map((subscriber, i) => (
                          <tr key={i} className="border-t border-zinc-800">
                            <td className="px-4 py-3">{subscriber.email}</td>
                            <td className="px-4 py-3">{subscriber.date}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  subscriber.status === "Active"
                                    ? "bg-green-500/20 text-green-500"
                                    : "bg-red-500/20 text-red-500"
                                }`}
                              >
                                {subscriber.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-right">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 text-red-500 hover:text-red-700 hover:bg-red-500/10"
                              >
                                Remove
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <h3 className="text-lg font-medium mb-4">Send Newsletter</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject Line</Label>
                        <Input id="subject" placeholder="Newsletter subject" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="content">Email Content</Label>
                        <Textarea
                          id="content"
                          placeholder="Write your newsletter content here..."
                          className="bg-zinc-800 border-zinc-700 min-h-[200px]"
                        />
                      </div>
                      <Button className="bg-brand-terracotta hover:bg-brand-terracotta/90">Send Newsletter</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-brand-terracotta">Video Management</CardTitle>
                <CardDescription>Add, edit, or remove videos from the website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Add New Video</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="videoTitle">Video Title</Label>
                        <Input id="videoTitle" placeholder="Video title" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="videoType">Video Type</Label>
                        <select
                          id="videoType"
                          className="w-full h-10 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
                        >
                          <option value="music-video">Music Video</option>
                          <option value="live">Live Performance</option>
                          <option value="behind">Behind The Scenes</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="videoUrl">YouTube URL</Label>
                        <Input
                          id="videoUrl"
                          placeholder="https://youtube.com/watch?v=..."
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="videoDuration">Duration</Label>
                        <Input id="videoDuration" placeholder="4:32" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="videoThumbnail">Thumbnail Image</Label>
                        <Input id="videoThumbnail" type="file" className="bg-zinc-800 border-zinc-700" />
                      </div>
                    </div>
                    <Button className="mt-4 bg-brand-terracotta hover:bg-brand-terracotta/90">Add Video</Button>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <h3 className="text-lg font-medium mb-4">Current Videos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Higher Dimension", "Starlight", "Digital Love", "Midnight City", "Neon Lights", "AMAI"].map(
                        (video, i) => (
                          <div key={i} className="flex gap-4 p-4 bg-zinc-800 rounded-lg">
                            <div className="w-24 h-16 bg-zinc-700 rounded flex-shrink-0"></div>
                            <div className="flex-grow">
                              <h4 className="font-medium">{video}</h4>
                              <p className="text-sm text-zinc-400">Music Video • 4:32</p>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button size="sm" variant="ghost" className="h-8">
                                Edit
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 text-red-500">
                                Delete
                              </Button>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tour">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-brand-terracotta">Tour Management</CardTitle>
                <CardDescription>Add, edit, or remove tour dates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Add New Tour Date</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="tourDate">Date</Label>
                        <Input id="tourDate" type="date" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tourVenue">Venue</Label>
                        <Input id="tourVenue" placeholder="Venue name" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tourLocation">Location</Label>
                        <Input
                          id="tourLocation"
                          placeholder="City, State/Country"
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tourTime">Time</Label>
                        <Input id="tourTime" placeholder="8:00 PM" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tourStatus">Status</Label>
                        <select
                          id="tourStatus"
                          className="w-full h-10 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
                        >
                          <option value="available">Available</option>
                          <option value="limited">Limited Tickets</option>
                          <option value="soldout">Sold Out</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tourTicketUrl">Ticket URL</Label>
                        <Input
                          id="tourTicketUrl"
                          placeholder="https://ticketmaster.com/..."
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                    </div>
                    <Button className="mt-4 bg-brand-terracotta hover:bg-brand-terracotta/90">Add Tour Date</Button>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <h3 className="text-lg font-medium mb-4">Upcoming Tour Dates</h3>
                    <div className="space-y-4">
                      {[
                        {
                          date: "Jun 15, 2023",
                          venue: "The Fillmore",
                          location: "San Francisco, CA",
                          status: "Sold Out",
                        },
                        { date: "Jun 18, 2023", venue: "The Wiltern", location: "Los Angeles, CA", status: "Limited" },
                        {
                          date: "Jun 22, 2023",
                          venue: "Brooklyn Steel",
                          location: "Brooklyn, NY",
                          status: "Available",
                        },
                      ].map((show, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                          <div>
                            <h4 className="font-medium">{show.venue}</h4>
                            <p className="text-sm text-zinc-400">
                              {show.date} • {show.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span
                              className={`text-sm font-medium ${
                                show.status === "Sold Out"
                                  ? "text-zinc-400"
                                  : show.status === "Limited"
                                    ? "text-amber-500"
                                    : "text-emerald-500"
                              }`}
                            >
                              {show.status}
                            </span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
                                Edit
                              </Button>
                              <Button size="sm" variant="destructive">
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-brand-terracotta">Website Settings</CardTitle>
                <CardDescription>Manage general website settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">General Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="artistName">Artist Name</Label>
                        <Input id="artistName" defaultValue="ZEEY" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tagline">Tagline</Label>
                        <Input
                          id="tagline"
                          defaultValue="Soul, Rhythm, and Truth in Every Note"
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="bio">Short Bio</Label>
                        <Textarea
                          id="bio"
                          defaultValue="Zeey is a dynamic music artist and producer whose sound blends soul, rhythm, and truth in a way that resonates deeply with listeners."
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                    </div>
                    <Button className="mt-4 bg-brand-terracotta hover:bg-brand-terracotta/90">Save Changes</Button>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <h3 className="text-lg font-medium mb-4">Social Media Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="instagram">Instagram URL</Label>
                        <Input
                          id="instagram"
                          defaultValue="https://www.instagram.com/zeeyguy_"
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tiktok">TikTok URL</Label>
                        <Input
                          id="tiktok"
                          defaultValue="https://www.tiktok.com/@zeeyguy2"
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="youtube">YouTube URL</Label>
                        <Input
                          id="youtube"
                          defaultValue="https://youtube.com/@zeeyguy"
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="spotify">Spotify URL</Label>
                        <Input
                          id="spotify"
                          defaultValue="https://open.spotify.com/artist/2cHTFyFIpbT7JU3qrt4A4j"
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </div>
                    </div>
                    <Button className="mt-4 bg-brand-terracotta hover:bg-brand-terracotta/90">Save Changes</Button>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <h3 className="text-lg font-medium mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" className="bg-zinc-800 border-zinc-700" />
                      </div>
                      <Button className="bg-brand-terracotta hover:bg-brand-terracotta/90">Update Password</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
