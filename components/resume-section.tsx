"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload, Download, FileText, CheckCircle, Award, Star, Sparkles, Trophy } from "lucide-react"
import { useState, useRef } from "react"

export function ResumeSection() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF or Word document")
      return
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB")
      return
    }

    setIsUploading(true)
    setUploadedFile(file)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setUploadSuccess(true)
      setTimeout(() => setUploadSuccess(false), 3000)
    }, 2000)
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      const fakeEvent = { target: { files: [file] } } as any
      handleFileUpload(fakeEvent)
    }
  }

  const downloadSampleResume = () => {
    // In a real application, this would download an actual resume file
    const link = document.createElement("a")
    link.href = "/professional-resume-template.png"
    link.download = "Amit_Thakor_Resume.pdf"
    link.click()
  }

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-green-900/20 dark:to-cyan-900/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-28 h-28 bg-gradient-to-br from-green-400/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-20 w-36 h-36 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Award className="h-8 w-8 text-green-500 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Resume & Documents
            </h2>
            <Trophy className="h-8 w-8 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Download my comprehensive resume showcasing Python development and QA testing expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Download Resume */}
          <Card className="bg-gradient-to-br from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 border-green-200 dark:border-green-800 shadow-xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700 dark:text-green-300">
                <div className="p-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 mr-3">
                  <Download className="h-5 w-5 text-white" />
                </div>
                Download Resume
              </CardTitle>
              <CardDescription>
                Get my latest resume with detailed Python development and QA testing experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white/80 to-green-50/80 dark:from-slate-800/80 dark:to-green-900/20 rounded-lg border border-green-200/50">
                <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Amit Thakor - Resume</p>
                  <p className="text-sm text-muted-foreground">PDF • Updated Jan 2025</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-xs text-muted-foreground">CGPA: 9.15/10 • 5+ Internships</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
                  Resume Highlights
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Python & Django</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>React.js & Testing</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>5+ Internships</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>SAP Hackathon</span>
                  </div>
                </div>
              </div>

              <button
                onClick={downloadSampleResume}
                className="w-full font-semibold py-3 px-4 rounded-md shadow-lg transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #10b981, #06b6d4)",
                  color: "#ffffff",
                  border: "none",
                }}
              >
                <Download className="h-4 w-4 mr-2 inline-block" />
                Download PDF Resume
              </button>
            </CardContent>
          </Card>

          {/* Upload Resume */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3">
                  <Upload className="h-5 w-5 text-white" />
                </div>
                Upload Document
              </CardTitle>
              <CardDescription>
                Share your resume or project documents for collaboration (PDF, DOC, DOCX)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg p-8 text-center hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 cursor-pointer group"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                {isUploading ? (
                  <div className="space-y-3">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="text-sm text-blue-600 font-medium">Uploading your document...</p>
                  </div>
                ) : uploadSuccess ? (
                  <div className="space-y-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 w-fit mx-auto">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-sm text-green-600 font-semibold">Upload successful!</p>
                    <p className="text-xs text-muted-foreground">Your document has been received</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Upload className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 font-medium mb-1">Drag and drop your file here</p>
                      <p className="text-xs text-muted-foreground">or click to browse</p>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>PDF</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>DOC</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>DOCX</span>
                      </span>
                      <span>• Max 5MB</span>
                    </div>
                  </div>
                )}
              </div>

              <Input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />

              {uploadedFile && (
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-slate-800/80 dark:to-blue-900/20 rounded-lg border border-blue-200/50">
                  <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{uploadedFile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • Uploaded successfully
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
