"use client"

import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Award, Briefcase, GraduationCap, Languages } from "lucide-react"
import Image from "next/image"
import content from "@/content.json"

export function About() {
  const { language } = useLanguage()
  const t = content[language]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground">{t.about.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 reveal">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105">
              <Image src="/avatar.jpg" alt="Oussama Osseili" fill className="object-cover shadow-none" priority />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg leading-relaxed mb-6">{t.about.bio}</p>
              <Button asChild size="lg" className="gap-2">
                <a href="/cv-oussama-osseili.pdf" download>
                  <Download className="h-4 w-4" />
                  {t.about.downloadCV}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="reveal hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{t.about.education.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {t.about.education.items.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 hover:border-primary/60 transition-colors">
                  <h4 className="font-semibold">{edu.school}</h4>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="reveal hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <CardHeader>
              <CardTitle>{t.about.skills.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {t.about.skills.categories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-sm font-semibold mb-2 text-primary">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="reveal mb-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>{t.about.certifications.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {t.about.certifications.items.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="reveal mb-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Languages className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>{t.about.languages.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.about.languages.items.map((lang, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors bg-sidebar-border shadow-xl">
                  <p className="font-semibold">{lang.name}</p>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="reveal hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>{t.about.experience.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {t.about.experience.items.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary pl-4 hover:border-primary/60 transition-colors">
                <h4 className="font-semibold text-lg">{exp.role}</h4>
                <p className="text-sm text-primary">{exp.company}</p>
                <p className="text-xs text-muted-foreground mb-2">
                  {exp.period} {exp.location && `• ${exp.location}`}
                </p>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
