"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import SocialIcons from "@/components/social-icons"
import Image from "next/image"

export default function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const routes = [
    { href: "/", label: "Home" },
    { href: "/music", label: "Music" },
    { href: "/videos", label: "Videos" },
    { href: "/tour", label: "Tour" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className={cn("fixed top-0 w-full z-50 sticky-nav", scrolled ? "scrolled" : "bg-transparent")}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative h-12 w-40">
            <Image src="/images/zeey-logo.png" alt="ZEEY" fill style={{ objectFit: "contain" }} priority />
          </motion.div>
        </Link>
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-terracotta relative py-1",
                pathname === route.href
                  ? "text-brand-terracotta after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-terracotta"
                  : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <SocialIcons className="h-5 w-5" />
          </div>
          <Button
            variant="default"
            size="sm"
            className="hidden md:flex btn-glow bg-brand-terracotta hover:bg-brand-terracotta/90"
            asChild
          >
            <Link href="https://open.spotify.com/artist/2cHTFyFIpbT7JU3qrt4A4j">STREAM NOW</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-black/95 border-brand-terracotta/20">
              <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsOpen(false)}>
                <div className="relative h-12 w-40">
                  <Image src="/images/zeey-logo.png" alt="ZEEY" fill style={{ objectFit: "contain" }} priority />
                </div>
              </Link>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-brand-terracotta",
                      pathname === route.href ? "text-brand-terracotta" : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="flex gap-4 mt-4">
                  <SocialIcons className="h-5 w-5" />
                </div>
                <Button
                  variant="default"
                  size="sm"
                  className="mt-4 w-full btn-glow bg-brand-terracotta hover:bg-brand-terracotta/90"
                  asChild
                >
                  <Link href="https://open.spotify.com/artist/2cHTFyFIpbT7JU3qrt4A4j">STREAM NOW</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
