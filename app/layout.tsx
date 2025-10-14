import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Oussama Osseili | MIAGE Engineering Student",
  description:
    "Portfolio of Oussama Osseili - MIAGE engineering student passionate about software development, data/AI, cloud/DevOps and football analytics.",
  generator: "v0.app",
  openGraph: {
    title: "Oussama Osseili | MIAGE Engineering Student",
    description: "Portfolio showcasing software, data/AI, and cloud/DevOps projects",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider>
            <LanguageProvider>{children}</LanguageProvider>
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
