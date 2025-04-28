import Link from "next/link"
import { Instagram, Youtube, Facebook } from "lucide-react"
import { TwitterIcon as TikTok } from "lucide-react"

interface SocialIconsProps {
  className?: string
}

export default function SocialIcons({ className = "h-6 w-6" }: SocialIconsProps) {
  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <Instagram
          className={`${className} text-[#E1306C] hover:text-[#E1306C]/80 transition-colors hover:scale-125 transition-transform`}
        />
      ),
      url: "https://www.instagram.com/zeeyguy_",
    },
    {
      name: "TikTok",
      icon: (
        <TikTok
          className={`${className} text-white hover:text-white/80 transition-colors hover:scale-125 transition-transform`}
        />
      ),
      url: "https://www.tiktok.com/@zeeyguy2",
    },
    {
      name: "YouTube",
      icon: (
        <Youtube
          className={`${className} text-[#FF0000] hover:text-[#FF0000]/80 transition-colors hover:scale-125 transition-transform`}
        />
      ),
      url: "https://youtube.com/@zeeyguy",
    },
    {
      name: "Facebook",
      icon: (
        <Facebook
          className={`${className} text-[#1877F2] hover:text-[#1877F2]/80 transition-colors hover:scale-125 transition-transform`}
        />
      ),
      url: "https://www.facebook.com/share/1654JXobxj/",
    },
  ]

  return (
    <>
      {socialLinks.map((social) => (
        <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
          {social.icon}
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </>
  )
}
