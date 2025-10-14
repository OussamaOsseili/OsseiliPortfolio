"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { LanguageProvider } from "@/lib/language-context"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>{children}</LanguageProvider>
    </NextThemesProvider>
  )
}
