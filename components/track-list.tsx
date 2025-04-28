import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Track {
  title: string
  duration: string
  year: string
  featured?: boolean
  artist?: string
  streamUrl?: string
}

interface TrackListProps {
  tracks: Track[]
}

export default function TrackList({ tracks }: TrackListProps) {
  return (
    <div className="space-y-4">
      {tracks.map((track, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-3 sm:mb-0">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full shrink-0">
              <Play className="h-4 w-4" />
              <span className="sr-only">Play {track.title}</span>
            </Button>
            <div>
              <h3 className="font-medium group-hover:text-brand-terracotta transition-colors">{track.title}</h3>
              {track.featured && track.artist && <p className="text-sm text-zinc-400">{track.artist}</p>}
            </div>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span>{track.duration}</span>
              <span className="text-zinc-600">•</span>
              <span>{track.year}</span>
            </div>
            {track.streamUrl && (
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href={track.streamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Stream
                </Link>
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
