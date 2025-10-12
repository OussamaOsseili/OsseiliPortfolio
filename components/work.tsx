"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import content from "@/content.json"

export function Work() {
  const { language } = useLanguage()
  const t = content[language]
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

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
  }, [filter, search])

  const filters = [
    { key: "all", label: t.work.filters.all },
    { key: "software", label: t.work.filters.software },
    { key: "data", label: t.work.filters.data },
    { key: "cloud", label: t.work.filters.cloud },
    { key: "erp", label: t.work.filters.erp },
    { key: "sports", label: t.work.filters.sports },
  ]

  const filteredProjects = content.projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter
    const matchesSearch =
      search === "" ||
      project.title[language].toLowerCase().includes(search.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(search.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.work.title}</h2>
          <p className="text-lg text-muted-foreground">{t.work.subtitle}</p>
        </div>

        <div className="mb-8 reveal">
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {filters.map((f) => (
              <Badge
                key={f.key}
                variant={filter === f.key ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </Badge>
            ))}
          </div>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t.work.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="reveal hover:shadow-lg transition-shadow group shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">{project.title[language]}</CardTitle>
                <CardDescription>{project.description[language]}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
