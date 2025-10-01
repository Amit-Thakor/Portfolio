"use client";

import Link from "next/link";
import { Home, ArrowLeft, Code, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        {/* 404 Animation */}
        <div className="relative">
          <div className="text-8xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AlertTriangle className="h-16 w-16 text-yellow-400 animate-bounce" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-lg text-muted-foreground">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Code Block */}
        <div className="bg-slate-800 rounded-lg p-4 text-left">
          <div className="flex items-center space-x-2 mb-2">
            <Code className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-mono">error.py</span>
          </div>
          <div className="font-mono text-sm">
            <span className="text-purple-400">def</span>{" "}
            <span className="text-yellow-400">find_page</span>
            <span className="text-white">(</span>
            <span className="text-orange-400">url</span>
            <span className="text-white">):</span>
            <br />
            <span className="text-white ml-4">
              <span className="text-purple-400">if</span> url =={" "}
              <span className="text-green-400">"this_page"</span>:
            </span>
            <br />
            <span className="text-white ml-8">
              <span className="text-purple-400">raise</span>{" "}
              <span className="text-red-400">PageNotFoundError</span>
              <span className="text-white">(</span>
              <span className="text-green-400">"404"</span>
              <span className="text-white">)</span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Contact Info */}
        <div className="pt-8 border-t border-slate-700">
          <p className="text-sm text-muted-foreground">
            Still can't find what you're looking for?{" "}
            <Link
              href="#contact"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              Contact me
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
