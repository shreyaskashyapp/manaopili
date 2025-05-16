"use client"

import { useState, useEffect } from "react"

export default function Staller({
  messages = ["Loading...", "Cooking something...", "Calculating scores..."],
  interval = 2000,
  size = "medium",
  color = "indigo",
  disclaimer ="please make sure to not close the page",
}) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  // Map size to Tailwind classes
  const sizeClasses = {
    small: "w-6 h-6 border-2",
    medium: "w-10 h-10 border-3",
    large: "w-16 h-16 border-4",
  }

  // Map color to Tailwind classes
  const colorClasses = {
    indigo: "border-indigo-500",
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    gray: "border-gray-500",
    lime: "border-lime-500",
  }

  // Get the correct classes based on props
  const spinnerSize = sizeClasses[size] || "w-10 h-10 border-3"
  const spinnerColor = colorClasses[color] || "border-yellow-500"

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, interval)

    return () => clearInterval(timer)
  }, [messages, interval])

  return (
    <div className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className={`${spinnerSize} rounded-full ${spinnerColor} border-t-transparent animate-spin`}
          role="status"
          aria-label="Loading"
        />
        
        {messages && messages.length > 0 && (
          <p className="text-white font-medium">{messages[currentMessageIndex]}</p>
        )}
        
        {disclaimer && (
          <p className="text-white text-sm opacity-75 max-w-xs text-center">{disclaimer}</p>
        )}
      </div>
    </div>
  )
}