import type { Metadata } from "next"
import "./globals.css"                 // ✅ makes Tailwind styles load
import Providers from "./providers"

export const metadata: Metadata = {
  title: "Oussama Osseili",
  description: "Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
