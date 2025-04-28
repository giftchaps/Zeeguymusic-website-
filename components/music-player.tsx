"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface MusicPlayerProps {
  title: string
  type: string
  image: string
  releaseDate: string
  className?: string
  streamUrl?: string
}

export default function MusicPlayer({ title, type, image, releaseDate, className, streamUrl }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <Card className={cn("overflow-hidden bg-zinc-900/50 border-zinc-800", className)}>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="text-sm text-zinc-400 mb-1">
            {type} • {releaseDate}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <SkipBack className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button onClick={togglePlay} size="icon" className="h-10 w-10 rounded-full">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <SkipForward className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-zinc-400" />
              <Slider defaultValue={[70]} max={100} step={1} className="w-20" />
            </div>
          </div>
          <div className="space-y-2">
            <Slider
              value={[progress]}
              max={100}
              step={1}
              onValueChange={(value) => setProgress(value[0])}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-zinc-400">
              <span>0:00</span>
              <span>3:45</span>
            </div>
          </div>
          {streamUrl && (
            <Button variant="outline" size="sm" className="w-full mt-2" asChild>
              <Link
                href={streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" /> Stream
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
