"use client"

import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

interface AlbumCardProps {
  title: string
  year: string
  image: string
  tracks: number
  runtime: string
  type?: string
  streamUrl?: string
}

export default function AlbumCard({ title, year, image, tracks, runtime, type = "Album", streamUrl }: AlbumCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden bg-zinc-900/50 border-zinc-800 group">
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <Button size="icon" className="rounded-full h-12 w-12">
              <Play className="h-6 w-6 ml-0.5" />
              <span className="sr-only">Play {title}</span>
            </Button>
          </div>
          <motion.img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <CardContent className="p-6">
          <div className="mb-4">
            <div className="text-sm text-zinc-400 mb-1">
              {type} • {year}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <div className="flex items-center justify-between text-sm text-zinc-400">
            <div>{tracks} Tracks</div>
            <div>{runtime}</div>
          </div>
          <div className="mt-4">
            {streamUrl ? (
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={streamUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> Stream
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={`/music/${title.toLowerCase().replace(/\s+/g, "-")}`} className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> Details
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
