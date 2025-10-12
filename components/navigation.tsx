"use client"

import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Globe } from "lucide-react"
import content from "@/content.json"

export function Navigation() {
  const { language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const t = content[language]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold">
          OO
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#work" className="hover:text-primary transition-colors">
            {t.nav.work}
          </a>
          <a href="#services" className="hover:text-primary transition-colors">
            {t.nav.services}
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            {t.nav.about}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5" />
            <span className="ml-1 text-xs">{language.toUpperCase()}</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
