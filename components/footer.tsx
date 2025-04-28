import Link from "next/link"
import { Instagram, Youtube, Facebook } from "lucide-react"
import Image from "next/image"
import { TwitterIcon as TikTok } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
              <div className="relative h-14 w-44">
                <Image src="/images/zeey-logo.png" alt="ZEEY" fill style={{ objectFit: "contain" }} priority />
              </div>
            </Link>
            <p className="text-sm text-zinc-500 mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <nav className="flex gap-6 text-sm text-zinc-400">
              <Link href="/privacy" className="hover:text-brand-terracotta transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-terracotta transition-colors">
                Terms of Use
              </Link>
              <Link href="/contact" className="hover:text-brand-terracotta transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link href="https://instagram.com/zeeyguy_" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-[#E1306C] hover:text-white transition-colors" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.tiktok.com/@zeeyguy2" target="_blank" rel="noopener noreferrer">
                <TikTok className="h-5 w-5 text-white hover:text-white/80 transition-colors" />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="https://youtube.com/@zeeyguy" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-[#FF0000] hover:text-white transition-colors" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://facebook.com/share/1654JXobxj/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-[#1877F2] hover:text-white transition-colors" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
