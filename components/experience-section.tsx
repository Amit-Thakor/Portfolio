"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Award, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

const experiences = [
  {
    title: "Senior Python Developer & QA Lead",
    company: "TechFlow Solutions",
    period: "2022 - Present",
    description:
      "Leading Python development initiatives and establishing comprehensive testing frameworks for enterprise applications. Managing QA processes and mentoring development teams.",
    achievements: [
      "Reduced bug reports by 65% through automated testing implementation",
      "Built scalable Django applications serving 100K+ users",
      "Led QA team of 6 testers across multiple projects",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
    ],
    technologies: ["Python", "Django", "PyTest", "Selenium", "Docker", "AWS", "PostgreSQL"],
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Python Developer & Test Automation Engineer",
    company: "DataTech Innovations",
    period: "2020 - 2022",
    description:
      "Developed Python applications for data processing and created comprehensive test automation suites for web and API testing.",
    achievements: [
      "Automated 90% of regression testing processes",
      "Built data processing pipelines handling 1M+ records daily",
      "Improved application performance by 45% through optimization",
      "Created reusable testing frameworks adopted company-wide",
    ],
    technologies: ["Python", "Flask", "Selenium", "BeautifulSoup", "Pandas", "Redis"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Junior Python Developer & QA Tester",
    company: "StartupTech Labs",
    period: "2019 - 2020",
    description:
      "Started career in Python development while learning testing methodologies and contributing to various web development projects.",
    achievements: [
      "Developed 8+ Python web applications from scratch",
      "Created comprehensive test cases for 15+ features",
      "Maintained 99.5% uptime for production applications",
      "Collaborated with cross-functional agile teams",
    ],
    technologies: ["Python", "Django", "HTML/CSS", "JavaScript", "SQLite", "Git"],
    color: "from-orange-500 to-yellow-500",
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <TrendingUp className="h-8 w-8 text-primary animate-pulse" />
            <Award className="h-8 w-8 text-secondary animate-bounce" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A progressive career in Python development and quality assurance, delivering impactful solutions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`absolute left-6 w-6 h-6 bg-gradient-to-r ${experience.color} rounded-full border-4 border-background shadow-lg animate-pulse`}
                ></div>

                <Card className="ml-20 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
                        <div className="flex items-center text-muted-foreground text-sm bg-muted/50 px-3 py-1 rounded-full">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>

                      <div className="flex items-center text-primary">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">{experience.company}</span>
                      </div>

                      <p className="text-muted-foreground text-pretty">{experience.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground flex items-center">
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2 font-bold">▸</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className={`bg-gradient-to-r ${experience.color} text-white border-0 hover:scale-105 transition-transform`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
