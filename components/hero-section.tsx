"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  TestTube,
  BathIcon as Python,
} from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden z-2">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-green-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-bl from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 hover-lift ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-primary/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-15%20at%2020.20.19_305c3c72.jpg-qUeaPvUJHN6UYqQ2gzBREOrsp3OumH.jpeg"
                  alt="Amit Thakor - Python Developer & QA Tester"
                  className="w-full h-80 object-cover object-top rounded-xl mb-6"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2 bg-blue-600 px-6 py-3 rounded-full">
                    <Python className="h-6 w-6 text-white" />
                    <span className="text-white font-bold text-base">
                      Python Expert
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-600 px-6 py-3 rounded-full">
                    <TestTube className="h-6 w-6 text-white" />
                    <span className="text-white font-bold text-base">
                      QA Tester
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <Code2 className="h-8 w-8 text-primary animate-pulse" />
                  <span className="text-primary font-semibold">
                    Python Full Stack Developer & QA Engineer
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-balance">
                  <span className="text-foreground">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Amit Thakor
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                  Python Full Stack Developer & QA Engineer
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                  Enthusiastic IT graduate with passion for Full Stack
                  Development, Python, AI/ML, and Software Testing. Skilled in
                  creating efficient, real-world solutions with strong
                  problem-solving, analytical, innovative, and testing
                  expertise. Seeking a dynamic, challenging role to apply
                  creativity, adaptability, and advanced technical skills.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold px-8 py-3 transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  style={{
                    backgroundColor: "#1e40af",
                    color: "#ffffff",
                    border: "none",
                  }}
                >
                  <a
                    href="#projects"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    View My Projects
                  </a>
                </button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 bg-transparent border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary font-semibold"
                  asChild
                >
                  <a href="#contact">Hire Me</a>
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-8">
                <a
                  href="https://github.com/Anit-Thakor"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-7 w-7" />
                </a>
                <a
                  href="https://linkedin.com/in/thakoramit"
                  className="text-muted-foreground hover:text-blue-500 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-7 w-7" />
                </a>
                <a
                  href="mailto:211250116037@gtu.edu.in"
                  className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-7 w-7" />
                </a>
              </div>

              <div className="flex justify-center lg:justify-start pt-12">
                <div className="flex flex-col items-center space-y-2 animate-bounce">
                  <span className="text-sm text-muted-foreground">
                    Scroll Down
                  </span>
                  <ArrowDown className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
