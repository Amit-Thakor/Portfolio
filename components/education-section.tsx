"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Star,
  Trophy,
  BookOpen,
  FileText,
} from "lucide-react";
import { useState, useEffect } from "react";

const education = [
  {
    degree: "Bachelor of Engineering (B.E.) in Information Technology",
    institution: "Shree Swaminarayan Institute of Technology (GTU)",
    period: "07 2021 - 05 2025",
    location: "Ahmedabad, India",
    cgpa: "9.15/10",
    description:
      "Specialized in Information Technology with focus on software development, database management, and system design.",
    achievements: [
      "CGPA: 9.15/10 - Excellent Academic Performance",
      "Completed 5+ internships during academic tenure",
      "Active participation in coding competitions and hackathons",
      "Strong foundation in programming, web development, and software testing",
    ],
    color: "from-blue-500 to-purple-500",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "SSV Campus",
    period: "04 2020 - 05 2021",
    location: "Gandhinagar, India",
    cgpa: "82%",
    description:
      "Science stream with Mathematics, Physics, and Chemistry as core subjects.",
    achievements: [
      "Percentage: 82% - Good Academic Performance",
      "Strong foundation in Mathematics and Science",
      "Developed analytical and problem-solving skills",
      "Prepared for engineering entrance examinations",
    ],
    color: "from-green-500 to-blue-500",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "SSV Campus",
    period: "03 2018 - 03 2019",
    location: "Gandhinagar, India",
    cgpa: "81.5%",
    description:
      "Completed secondary education with strong academic foundation.",
    achievements: [
      "Percentage: 81.5% - Good Academic Performance",
      "Well-rounded education in core subjects",
      "Developed strong communication and analytical skills",
      "Active participation in school activities and competitions",
    ],
    color: "from-orange-500 to-yellow-500",
  },
];

const certifications = [
  {
    title: "Full AI/ML, IOT, Cloud, SAP ABAP, DL, Cyber Security (2 years)",
    issuer: "SAP",
    date: "Apr 2025",
    description:
      "Comprehensive certification covering AI/ML, IoT, Cloud technologies, SAP ABAP, Deep Learning, and Cyber Security.",
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "Python with Django",
    issuer: "Udemy",
    date: "Jun 2023",
    description:
      "Advanced Python programming with Django framework for web development.",
    color: "from-green-600 to-blue-600",
  },
  {
    title: "C Official Course",
    issuer: "Arraysoft Institute",
    date: "Dec 2021",
    description:
      "Comprehensive C programming language course covering fundamentals and advanced concepts.",
    color: "from-purple-600 to-pink-600",
  },
  {
    title: "Software Testing With Selenium",
    issuer: "Talent Spiral",
    date: "Nov 2022",
    description:
      "Automated testing using Selenium WebDriver for web application testing.",
    color: "from-red-600 to-orange-600",
  },
  {
    title: "Frontend Mastery",
    issuer: "Coursera",
    date: "Sept 2024",
    description:
      "Modern frontend development with HTML5, CSS3, JavaScript, and responsive design principles.",
    color: "from-cyan-600 to-teal-600",
  },
];

const achievements = [
  {
    title: "Semi-Finalist in SAP India Hackathon 2024",
    description:
      "Achieved semi-finalist position in prestigious SAP India Hackathon, demonstrating innovation and technical excellence.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "4th Place in 'Codegrati' Coding Competition",
    description:
      "Secured 4th place in college-level coding competition, showcasing strong programming and problem-solving skills.",
    icon: Award,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Runner-up in College Cricket Championship 2023",
    description:
      "Demonstrated leadership and teamwork skills as runner-up in college cricket championship.",
    icon: Star,
    color: "from-green-500 to-blue-500",
  },
];

export function EducationSection() {
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

    const element = document.getElementById("education");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <GraduationCap className="h-8 w-8 text-primary animate-bounce" />
            <BookOpen className="h-8 w-8 text-secondary animate-pulse" />
            <FileText className="h-8 w-8 text-green-500 animate-bounce" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Academic journey and professional certifications that shaped my
            technical expertise
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Academic Background
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`absolute left-6 w-6 h-6 bg-gradient-to-r ${edu.color} rounded-full border-4 border-background shadow-lg animate-pulse`}
                  ></div>

                  <Card className="ml-20 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h4 className="text-xl font-bold text-foreground">
                              {edu.degree}
                            </h4>
                            <div className="flex items-center text-primary mt-1">
                              <GraduationCap className="h-4 w-4 mr-2" />
                              <span className="font-medium">
                                {edu.institution}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-1">
                            <div className="flex items-center text-muted-foreground text-sm bg-muted/50 px-3 py-1 rounded-full">
                              <Calendar className="h-4 w-4 mr-1" />
                              {edu.period}
                            </div>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <MapPin className="h-4 w-4 mr-1" />
                              {edu.location}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-2" />
                          <span className="text-lg font-semibold text-foreground">
                            CGPA/Percentage: {edu.cgpa}
                          </span>
                        </div>

                        <p className="text-muted-foreground text-pretty">
                          {edu.description}
                        </p>

                        <div className="space-y-3">
                          <h5 className="font-medium text-foreground flex items-center">
                            <Award className="h-4 w-4 mr-2 text-primary" />
                            Key Highlights:
                          </h5>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
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
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className={`hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} w-fit`}
                    >
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {cert.title}
                      </h4>
                      <div className="flex items-center text-muted-foreground text-sm mb-2">
                        <Award className="h-4 w-4 mr-1" />
                        <span className="font-medium">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Issued: {cert.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Notable Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className={`hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} w-fit mx-auto`}
                    >
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
