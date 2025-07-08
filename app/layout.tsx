import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"
import { AnimationProvider } from "@/contexts/animation-context"
import { getMetaInfo } from "@/lib/data"

const inter = Inter({ subsets: ["latin"] })

const metaInfo = getMetaInfo()

export const metadata = {
  title: "Muhammad Qasim  | Full Stack Developer",
  description: "Explore projects by Qasim - React, AI, and full stack development.",
  openGraph: {
    title: "Qasim Yousaf | Full Stack Developer",
    description: "Explore projects by Qasim - React, AI, and full stack development.",
    url: "https://qasimcode.vercel.app/",
    siteName: "Qasim's Portfolio",
    images: [
      {
        url: "https://qasimcode.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Qasim  Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Qasim  | Full Stack Developer",
    description: "Explore projects by Qasim - React, AI, and full stack development.",
    images: ["https://qasimcode.vercel.app/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
         <head>
        <link rel="icon" href="/favicon.ico" />
        {/* optional: favicon type */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AnimationProvider>
          <ScrollProgressIndicator />
          {children}
        </AnimationProvider>
      </body>
    </html>
  )
}
