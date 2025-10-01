import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Thakor - Python Full Stack Developer & QA Engineer | Portfolio",
  description:
    "Enthusiastic IT graduate with passion for Full Stack Development, Python, AI/ML, and Software Testing. Showcasing innovative solutions, 5+ internships, and technical expertise in modern web technologies.",
  keywords: [
    "Amit Thakor",
    "Python Developer",
    "Full Stack Developer",
    "QA Engineer",
    "Django",
    "React.js",
    "JavaScript",
    "Software Testing",
    "Web Development",
    "Portfolio",
    "Gandhinagar",
    "Gujarat",
    "India",
  ],
  authors: [{ name: "Amit Thakor", url: "https://github.com/Anit-Thakor" }],
  creator: "Amit Thakor",
  publisher: "Amit Thakor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://amit-thakor-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amit Thakor - Python Full Stack Developer & QA Engineer",
    description:
      "Enthusiastic IT graduate with passion for Full Stack Development, Python, AI/ML, and Software Testing. Showcasing innovative solutions and technical expertise.",
    url: "https://amit-thakor-portfolio.vercel.app",
    siteName: "Amit Thakor Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amit Thakor - Python Full Stack Developer & QA Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Thakor - Python Full Stack Developer & QA Engineer",
    description:
      "Enthusiastic IT graduate with passion for Full Stack Development, Python, AI/ML, and Software Testing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
