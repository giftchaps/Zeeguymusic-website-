import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ["latin"],
  fallback: ['system-ui', 'arial']
})
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  fallback: ['Impact', 'Arial Black', 'sans-serif']
})

export const metadata: Metadata = {
  title: "ZEEY - Official Website",
  description: "Official website of ZEEY - Music Artist and Producer",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", type: "image/png" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} ${bebas.variable} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MainNav />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
