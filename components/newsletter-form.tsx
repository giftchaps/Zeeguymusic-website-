"use client"

import { Mail } from "lucide-react"

export default function NewsletterForm() {
  return (
    <div className="relative text-center py-14 px-8 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-black/90 to-brand-terracotta/20 border border-brand-terracotta/30 shadow-2xl overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-5 relative z-10">
        <span className="inline-block px-4 py-1 mb-2 rounded-full bg-brand-terracotta/30 text-brand-terracotta text-xs font-bold tracking-widest shadow-sm border border-brand-terracotta/30">
          NEWSLETTER
        </span>
        <div className="relative flex items-center justify-center mb-2">
          <span className="absolute w-16 h-16 rounded-full bg-brand-terracotta/20 blur-2xl animate-pulse-slow" />
          <Mail className="h-12 w-12 text-brand-terracotta animate-bounce-slow relative z-10 drop-shadow-lg" />
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-brand-terracotta via-orange-400 to-brand-terracotta bg-clip-text text-transparent animate-fade-in">
          Coming Soon
        </h3>
        <p className="text-zinc-300 mb-4 max-w-lg mx-auto text-base md:text-lg">
          Our subscription service will be available soon. Stay tuned for exclusive updates, early access, and more!
        </p>
        <button
          disabled
          className="mt-2 px-8 py-3 rounded-lg bg-brand-terracotta/40 text-brand-terracotta font-bold cursor-not-allowed opacity-80 border border-brand-terracotta/50 shadow transition-all hover:scale-105"
        >
          Subscribe (Coming Soon)
        </button>
      </div>
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-terracotta/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-brand-terracotta/10 rounded-full blur-3xl z-0" />
    </div>
  )
}