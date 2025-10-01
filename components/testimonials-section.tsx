"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User, Building } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Senior Developer",
    company: "Ittanta Technology Pvt. Ltd.",
    content:
      "Amit demonstrated exceptional skills in Django and React.js development during his internship. His ability to implement complex UI components and improve code efficiency by 50% was remarkable. He's a dedicated developer with strong problem-solving abilities.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=RP",
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "Priya Sharma",
    role: "Project Manager",
    company: "BrainyBeam Infotech Pvt. Ltd.",
    content:
      "Working with Amit on the Blood Test Management System was a great experience. He delivered high-quality Python and Django solutions while improving our coding standards by 30%. His collaborative approach and technical expertise made him a valuable team member.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=PS",
    color: "from-green-500 to-blue-500",
  },
  {
    name: "Vikram Singh",
    role: "Tech Lead",
    company: "Infolabz It Services Pvt. Ltd.",
    content:
      "Amit's work on the University API Data Fetching Project showcased his React.js and JavaScript skills. He created responsive UI components with excellent attention to detail. His ability to work with APIs and implement dynamic data rendering was impressive.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=VS",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Neha Gupta",
    role: "Senior PHP Developer",
    company: "Lemtoj Infotech Pvt. Ltd.",
    content:
      "Amit's development of the Student Result Management System using PHP and PostgreSQL was outstanding. His implementation of search filters, pagination, and responsive design improved our system efficiency significantly. He's a quick learner with great technical skills.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=NG",
    color: "from-orange-500 to-red-500",
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Quote className="h-8 w-8 text-primary animate-pulse" />
            <Star className="h-8 w-8 text-yellow-500 animate-bounce" />
            <User className="h-8 w-8 text-secondary animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Colleagues Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Feedback from industry professionals I've worked with during
            internships and projects
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-12">
          <Card
            className={`max-w-4xl mx-auto hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-background to-muted/30 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${testimonials[currentIndex].color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                  >
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Quote className="h-8 w-8 text-primary mr-2" />
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-500 fill-current"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <div className="flex items-center justify-center md:justify-start text-muted-foreground">
                      <Building className="h-4 w-4 mr-1" />
                      <span className="text-sm">
                        {testimonials[currentIndex].company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold shadow-md`}
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Building className="h-3 w-3 mr-1" />
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
