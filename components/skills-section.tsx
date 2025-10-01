"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import {
  Code,
  TestTube,
  Database,
  Zap,
  BathIcon as Python,
  Bug,
  Globe,
  Cloud,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Scripting",
    icon: Python,
    color: "from-green-500 to-blue-500",
    skills: [
      { name: "C", level: 90 },
      { name: "Python", level: 95 },
      { name: "PHP", level: 85 },
      { name: "Java (Basic)", level: 70 },
    ],
  },
  {
    title: "Web & Frameworks",
    icon: Globe,
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 90 },
      { name: "Node.js (Basic)", level: 70 },
      { name: "Django", level: 88 },
      { name: "Flask (Basic)", level: 75 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB (Basic)", level: 70 },
      { name: "SQLite", level: 85 },
      { name: "Oracle Database", level: 80 },
    ],
  },
  {
    title: "Testing & QA",
    icon: TestTube,
    color: "from-red-500 to-pink-500",
    skills: [
      { name: "Manual Testing", level: 90 },
      { name: "API Testing", level: 85 },
      { name: "Automation Testing (Basic)", level: 75 },
      { name: "Selenium", level: 80 },
      { name: "Postman", level: 88 },
      { name: "Pytest", level: 82 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: 75 },
      { name: "Azure (Basic)", level: 65 },
      { name: "Google Cloud (Basic)", level: 65 },
      { name: "Docker (Basic)", level: 70 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    title: "Developer Tools",
    icon: Code,
    color: "from-cyan-500 to-teal-500",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "IntelliJ IDEA", level: 80 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "PyCharm", level: 88 },
      { name: "PgAdmin", level: 85 },
      { name: "MySQL Workbench", level: 82 },
      { name: "Eclipse", level: 75 },
    ],
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-muted/30 to-muted/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <img
                src="/ai-brain-neural-network-icon-glowing-blue.jpg"
                alt="AI"
                className="h-12 w-12 animate-pulse"
              />
            </div>
            <Bug className="h-8 w-8 text-primary animate-bounce" />
            <Code className="h-8 w-8 text-secondary animate-pulse" />
            <div className="relative">
              <img
                src="/machine-learning-algorithm-icon-gradient.jpg"
                alt="ML"
                className="h-12 w-12 animate-pulse"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Full-stack development skills with expertise in Python, web
            technologies, testing, and cloud platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="relative group">
            <img
              src="/modern-python-code-editor-with-syntax-highlighting.jpg"
              alt="Python Development"
              className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-4">
              <span className="text-white font-semibold">Python & Django</span>
            </div>
          </div>
          <div className="relative group">
            <img
              src="/automated-testing-dashboard-with-selenium-webdrive.jpg"
              alt="Automated Testing"
              className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-4">
              <span className="text-white font-semibold">Testing & QA</span>
            </div>
          </div>
          <div className="relative group">
            <img
              src="/ai-machine-learning-neural-network-visualization-c.jpg"
              alt="AI & Machine Learning"
              className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-4">
              <span className="text-white font-semibold">AI & ML</span>
            </div>
          </div>
          <div className="relative group">
            <img
              src="/cloud-computing-architecture-aws-azure-modern-dash.jpg"
              alt="Cloud & DevOps"
              className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-4">
              <span className="text-white font-semibold">Cloud & DevOps</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`transition-all duration-700 hover-lift border-0 bg-gradient-to-br from-background to-muted/50 glass ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={isVisible ? skill.level : 0}
                        className="h-3 bg-muted"
                        style={{
                          transition: `all 1s ease-out ${
                            categoryIndex * 200 + skillIndex * 100
                          }ms`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
