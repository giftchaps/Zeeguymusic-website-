"use client"

import { Mail } from "lucide-react"

export default function NewsletterForm() {
  return (
    <div className="relative text-center py-16 px-8 md:px-16 rounded-3xl bg-gradient-to-br from-brand-terracotta/30 via-black/90 to-brand-terracotta/10 border border-brand-terracotta/40 shadow-2xl overflow-hidden flex flex-col items-center">
      {/* Large, soft background glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-terracotta/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-terracotta/20 rounded-full blur-3xl z-0" />
      {/* Badge */}
      <span className="inline-block px-5 py-2 mb-4 rounded-full bg-brand-terracotta/40 text-brand-terracotta text-sm font-extrabold tracking-widest shadow-md border border-brand-terracotta/40 backdrop-blur-md z-10">
        NEWSLETTER
      </span>
      {/* Glowing, animated mail icon */}
      <div className="relative flex items-center justify-center mb-4 z-10">
        <span className="absolute w-20 h-20 rounded-full bg-brand-terracotta/30 blur-2xl animate-pulse-slow" />
        <span className="absolute w-16 h-16 rounded-full bg-brand-terracotta/40 blur-xl animate-glow" />
        <Mail className="h-14 w-14 text-brand-terracotta animate-bounce-slow relative z-10 drop-shadow-xl" style={{ filter: 'drop-shadow(0 0 16px #e76f51cc)' }} />
      </div>
      {/* Animated, bold heading */}
      <h3 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-brand-terracotta via-orange-400 to-brand-terracotta bg-clip-text text-transparent animate-fade-in">
        Coming Soon
      </h3>
      <p className="text-zinc-200 mb-6 max-w-xl mx-auto text-base md:text-lg font-medium">
        Our subscription service will be available soon. Stay tuned for exclusive updates, early access, and more!
      </p>
      {/* Improved button styling */}
      <button
        disabled
        className="mt-2 px-10 py-4 rounded-xl bg-brand-terracotta/50 text-brand-terracotta font-bold cursor-not-allowed opacity-90 border-2 border-brand-terracotta/60 shadow-lg transition-all hover:scale-105 text-lg tracking-wide backdrop-blur-md"
      >
        Subscribe (Coming Soon)
      </button>
    </div>
  )
}

// Add this to your global CSS (e.g., globals.css):
// .animate-glow {
//   animation: glow 2s infinite alternate;
// }
// @keyframes glow {
//   0% { opacity: 0.7; box-shadow: 0 0 8px #e76f51cc, 0 0 24px #e76f51cc; }
//   100% { opacity: 1; box-shadow: 0 0 24px #e76f51cc, 0 0 48px #e76f51cc; }
// }