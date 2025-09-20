"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, TestTube, Database, Users, GraduationCap } from "lucide-react"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "Vendor Management System",
    description:
      "Comprehensive vendor management system for vendor registration, purchase orders, and performance tracking. Built with responsive UI for mobile/desktop, reducing manual vendor tracking efforts by 70%.",
    image: "/placeholder.svg?height=300&width=500&text=Vendor+Management+System",
    technologies: ["Python", "Django", "PostgreSQL", "React.js", "HTML5", "CSS3"],
    liveUrl: "https://github.com/Amit-Thakor",
    githubUrl: "https://github.com/Amit-Thakor",
    featured: true,
    icon: Users,
    color: "from-blue-500 to-purple-500",
    date: "March 2025",
  },
  {
    title: "Student Result Management System",
    description:
      "Complete student result management system with admin and student login modules. Features result entry, storage, and retrieval using PHP and PostgreSQL, reducing manual result processing by 60%.",
    image: "/placeholder.svg?height=300&width=500&text=Student+Result+System",
    technologies: ["PHP", "PostgreSQL", "HTML5", "CSS3", "JavaScript", "pgAdmin"],
    liveUrl: "https://github.com/Amit-Thakor",
    githubUrl: "https://github.com/Amit-Thakor",
    featured: true,
    icon: GraduationCap,
    color: "from-green-500 to-blue-500",
    date: "May 2025",
  },
  {
    title: "Blood Test Management System",
    description:
      "Healthcare management system built with Python and Django framework. Designed responsive UI components with modern styling and implemented efficient data management workflows.",
    image: "/placeholder.svg?height=250&width=400&text=Blood+Test+Management",
    technologies: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://github.com/Amit-Thakor",
    githubUrl: "https://github.com/Amit-Thakor",
    featured: false,
    icon: TestTube,
    color: "from-red-500 to-pink-500",
    date: "October 2024",
  },
  {
    title: "University API Data Fetching Project",
    description:
      "Dynamic data rendering application built with React.js and JavaScript. Features responsive UI components with modern styling and efficient API data management.",
    image: "/placeholder.svg?height=250&width=400&text=University+API+Project",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "API Integration"],
    liveUrl: "https://github.com/Amit-Thakor",
    githubUrl: "https://github.com/Amit-Thakor",
    featured: false,
    icon: Database,
    color: "from-purple-500 to-indigo-500",
    date: "August 2024",
  },
]

export function ProjectsSection() {
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <Database className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real-world applications showcasing full-stack development skills and problem-solving expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${project.featured ? "lg:col-span-2" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`${project.featured ? "md:flex" : ""}`}>
                <div className={`${project.featured ? "md:w-1/2" : ""}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                    >
                      <project.icon className="h-16 w-16 text-white animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className={`${project.featured ? "md:w-1/2" : ""}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                          <project.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{project.date}</p>
                        </div>
                      </div>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-muted-foreground text-pretty">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 hover:bg-primary/10 bg-transparent"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
