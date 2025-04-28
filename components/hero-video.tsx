"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      setHasError(false)
    }

    const handleError = () => {
      console.error("Error loading video")
      setHasError(true)
      setIsLoaded(false)
    }

    // Add event listeners
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    // Try to play the video
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay prevented:", error)
      })
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      {/* Loading placeholder or error state */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-black/50 animate-pulse">
          <img
            src="/images/zeey-hero-portrait.png"
            alt="ZEEY with acoustic guitar"
            className="w-full h-full object-cover object-[center_40%]"
          />
        </div>
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover object-center hidden lg:block transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="/videos/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 