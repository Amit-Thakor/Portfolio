"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Award, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const experiences = [
  {
    title: "Full Stack Development Training",
    company: "QSpiders Software Training Institute",
    period: "Jul 2025 - Current",
    description:
      "Comprehensive training in Python, SQL, and Web Technologies (HTML, CSS, JavaScript, Tailwind CSS). Gaining practical experience in OOP Concepts, Database Design, and Backend Integration.",
    achievements: [
      "Completed training in Python, SQL, and Web Technologies",
      "Gained practical experience in OOP Concepts and Database Design",
      "Learned to build responsive web applications using React.js and modern frontend practices",
      "Worked on mini-projects applying development skills in real-time scenarios",
    ],
    technologies: [
      "Python",
      "SQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "React.js",
      "OOP",
    ],
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Trainee PHP Developer",
    company: "Lemtoj Infotech Pvt. Ltd.",
    period: "May 2025 - Jun 2025",
    description:
      "Developed a Student Result Management System using PHP and PostgreSQL (pgAdmin). Designed and implemented search filters, pagination, and responsive UI components with HTML, CSS, JavaScript, and Tailwind CSS.",
    achievements: [
      "Developed a Student Result Management System using PHP and PostgreSQL",
      "Designed and implemented search filters, pagination, and responsive UI components",
      "Improved coding by 40% through efficient development practices",
      "Worked in an Agile team using Git/GitHub for version control and collaborative development",
    ],
    technologies: [
      "PHP",
      "PostgreSQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "pgAdmin",
      "Git",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Software Developer Intern",
    company: "Ittanta Technology Pvt. Ltd.",
    period: "Jan 2025 - Apr 2025",
    description:
      "Built and enhanced UI components using Django, HTML, CSS, JavaScript, React.js and Tailwind CSS. Implemented search filters and pagination to improve user experience and efficiency and Developed and customized Vendor Management System.",
    achievements: [
      "Built and enhanced UI components using Django, HTML, CSS, JavaScript, React.js and Tailwind CSS",
      "Implemented search filters and pagination to improve user experience and efficiency",
      "Developed and customized Vendor Management System, improved Code by 50%",
      "Collaborated in an Agile team using Git/GitHub for version control and project workflows",
    ],
    technologies: [
      "Python",
      "Django",
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Python Developer Intern",
    company: "BrainyBeam Infotech Pvt. Ltd.",
    period: "Sep 2024 - Oct 2024",
    description:
      "Developed a Blood Test Management System using Python and Django framework. Improved Coding by 30%. Designed and implemented UI components with HTML, CSS, JavaScript, and Tailwind CSS.",
    achievements: [
      "Developed a Blood Test Management System using Python and Django framework",
      "Improved Coding by 30% through efficient development practices",
      "Designed and implemented UI components with HTML, CSS, JavaScript, and Tailwind CSS",
      "Collaborated in an Agile team using Git/GitHub for version control and project workflows",
    ],
    technologies: [
      "Python",
      "Django",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Git",
    ],
    color: "from-red-500 to-orange-500",
  },
  {
    title: "React.js Intern",
    company: "Infolabz It Services Pvt. Ltd.",
    period: "Jul 2024 - Aug 2024",
    description:
      "Built a University API Data Fetching Project using React.js and JavaScript for dynamic data rendering. Improved Coding by 10%. Designed and styled responsive UI components with HTML, CSS, and Tailwind CSS.",
    achievements: [
      "Built a University API Data Fetching Project using React.js and JavaScript",
      "Improved Coding by 10% through dynamic data rendering techniques",
      "Designed and styled responsive UI components with HTML, CSS, and Tailwind CSS",
      "Collaborated in an Agile team using Git/GitHub for version control and workflow management",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "API Integration",
      "Git",
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

export function ExperienceSection() {
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

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <TrendingUp className="h-8 w-8 text-primary animate-pulse" />
            <Award className="h-8 w-8 text-secondary animate-bounce" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A progressive career in Python development and quality assurance,
            delivering impactful solutions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
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
                        <h3 className="text-xl font-bold text-foreground">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground text-sm bg-muted/50 px-3 py-1 rounded-full">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>

                      <div className="flex items-center text-primary">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">
                          {experience.company}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-pretty">
                        {experience.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground flex items-center">
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="text-primary mr-2 font-bold">
                                ▸
                              </span>
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
  );
}
