import React, { useState, useEffect } from 'react'
import { Sparkles, Code, Palette, Zap } from 'lucide-react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)

  const features = [
    { icon: Code, text: "Full Stack Development", color: "text-blue-400" },
    { icon: Palette, text: "Beautiful UI/UX Design", color: "text-pink-400" },
    { icon: Zap, text: "Lightning Fast Performance", color: "text-yellow-400" },
    { icon: Sparkles, text: "AI-Powered Solutions", color: "text-purple-400" }
  ]

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => window.clearInterval(interval)
  }, [features.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-2xl shadow-purple-500/25">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Hello!
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-2">
            Welcome to the future of development
          </p>
          <p className="text-lg text-neutral-400">
            Where AI meets exceptional software engineering
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="mb-12">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold text-white mb-6">What We Excel At</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border transition-all duration-500 ${
                      currentFeature === index
                        ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 scale-105'
                        : 'bg-neutral-800/30 border-neutral-700 hover:border-neutral-600'
                    }`}
                  >
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${feature.color}`} />
                    <p className="text-sm text-neutral-300 font-medium">{feature.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
              Start Building
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-neutral-600 text-neutral-300 font-semibold rounded-xl hover:border-purple-500 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-sm text-neutral-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-sm text-neutral-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-sm text-neutral-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Powered by WebSparks AI */}
        <div className="mt-16 pt-8 border-t border-neutral-700">
          <div className="flex items-center justify-center space-x-2 text-neutral-500">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Powered by WebSparks AI</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
