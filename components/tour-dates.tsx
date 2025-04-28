"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

const TOUR_DATES = [
  {
    date: "Jun 15, 2023",
    venue: "The Fillmore",
    location: "San Francisco, CA",
    time: "8:00 PM",
    status: "Sold Out",
  },
  {
    date: "Jun 18, 2023",
    venue: "The Wiltern",
    location: "Los Angeles, CA",
    time: "7:30 PM",
    status: "Limited",
  },
  {
    date: "Jun 22, 2023",
    venue: "Brooklyn Steel",
    location: "Brooklyn, NY",
    time: "8:00 PM",
    status: "Available",
  },
  {
    date: "Jun 25, 2023",
    venue: "9:30 Club",
    location: "Washington, DC",
    time: "7:00 PM",
    status: "Available",
  },
  {
    date: "Jun 28, 2023",
    venue: "House of Blues",
    location: "Chicago, IL",
    time: "7:30 PM",
    status: "Available",
  },
]

export default function TourDates() {
  return (
    <div className="space-y-4">
      {TOUR_DATES.map((show, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-colors"
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
          <div className="flex items-center gap-4">
            {show.status === "Sold Out" ? (
              <span className="text-sm font-medium text-zinc-400">Sold Out</span>
            ) : show.status === "Limited" ? (
              <span className="text-sm font-medium text-amber-500">Limited Tickets</span>
            ) : (
              <span className="text-sm font-medium text-emerald-500">Tickets Available</span>
            )}
            <Button variant={show.status === "Sold Out" ? "outline" : "default"} disabled={show.status === "Sold Out"}>
              {show.status === "Sold Out" ? "Sold Out" : "Get Tickets"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
