"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import content from "@/content.json"
import { withBasePath } from "@/lib/withBasePath" // ✅

export function Hero() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-muted-foreground mb-2 animate-fade-in">{t.hero.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in-up">
          {t.hero.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 animate-fade-in-up">{t.hero.title}</h2>
        <p className="text-lg text-muted-foreground mb-4 animate-fade-in-up">{t.hero.subtitle}</p>
        <p className="text-lg mb-8 leading-relaxed animate-fade-in-up max-w-2xl mx-auto">{t.hero.description}</p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up">
          <Button asChild size="lg" className="hover:scale-105 transition-transform">
            <a href="#work">{t.hero.cta1}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 hover:scale-105 transition-transform bg-transparent"
          >
            {/* ✅ CV link fixed for subpath */}
            <a href={withBasePath("/cv-oussama-osseili.pdf")} download>
              <Download className="h-4 w-4" />
              {t.hero.cta2}
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <Counter value={content.counters.projects} label={t.hero.counters.projects} />
          <Counter value={content.counters.years} label={t.hero.counters.years} />
          <Counter value={content.counters.certifications} label={t.hero.counters.certifications} />
        </div>
      </div>
    </section>
  )
}

function Counter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.5 },
    )
    if (counterRef.current) observer.observe(counterRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [value, started])

  return (
    <div ref={counterRef} className="text-center hover:scale-110 transition-transform">
      <div className="text-4xl md:text-5xl font-bold text-primary counter-animate">{count}</div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  )
}
