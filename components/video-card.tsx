"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

interface VideoCardProps {
  title: string
  duration: string
  date: string
  views: string
  image: string
  type?: string
  videoUrl?: string
}

export default function VideoCard({
  title,
  duration,
  date,
  views,
  image,
  type = "Music Video",
  videoUrl,
}: VideoCardProps) {
  return (
    <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900 mb-3">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <Button size="icon" className="rounded-full h-12 w-12">
            <Play className="h-6 w-6 ml-0.5" />
            <span className="sr-only">Play {title}</span>
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs z-10">{duration}</div>
        {type !== "Music Video" && (
          <div className="absolute top-2 left-2 bg-purple-500/80 px-2 py-0.5 rounded text-xs z-10">{type}</div>
        )}
        <Link href={videoUrl || "#"}>
          <motion.img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </Link>
      </div>
      <h3 className="font-medium group-hover:text-brand-terracotta transition-colors">{title}</h3>
      <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
        <span>{date}</span>
        <span className="text-zinc-600">•</span>
        <span>{views} views</span>
      </div>
    </motion.div>
  )
}
