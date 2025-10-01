"use client";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Code,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Anit-Thakor",
    icon: Github,
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/thakoramit",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    href: "mailto:211250116037@gtu.edu.in",
    icon: Mail,
    color: "hover:text-green-400",
  },
];

const quickLinks = [
  { name: "About", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  "Python",
  "Django",
  "React.js",
  "JavaScript",
  "PHP",
  "PostgreSQL",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Amit Thakor
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Enthusiastic IT graduate with passion for Full Stack
                Development, Python, AI/ML, and Software Testing. Creating
                efficient, real-world solutions with strong problem-solving and
                analytical skills.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span>Gandhinagar, Gujarat, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span>+91-9974932098</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>211250116037@gtu.edu.in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-xs hover:bg-slate-700 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-slate-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>

              {/* Back to Top Button */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="bg-transparent border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 mt-8 pt-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 text-sm text-gray-400">
              <span>© 2025 Amit Thakor. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>using Next.js, React & Tailwind CSS</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Designed and developed by Amit Thakor - Python Full Stack
              Developer & QA Engineer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
