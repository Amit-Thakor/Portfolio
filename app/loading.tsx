import { Code, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="relative">
              <Code className="h-16 w-16 text-cyan-400 animate-pulse" />
              <Sparkles className="h-8 w-8 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Amit Thakor
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Python Full Stack Developer & QA Engineer
          </p>
        </div>

        {/* Loading Animation */}
        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">
            Loading portfolio...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
