import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans'
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"

export const metadata: Metadata = {
  title: "Black Flag White Paper",
  description: "A primer on copyright and 3d guns",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'