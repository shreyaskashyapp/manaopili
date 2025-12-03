"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactBanner({
  title = "Ready to Transform Your ServiceNow Journey?",
  subtitle = "Let our experts guide you through every step of your ServiceNow transformation. From discovery to ongoing innovation, we're here to help you succeed.",
  features = [
    "Easy consultation process",
    "Tailored to your specific needs",
    "Expert guidance throughout",
  ],
  ctaData = {
    url: "https://www.manaopili.com",
    title: "Start Now",
  },
  viewport,
}) {
  // Conditional class helpers
  const titleClass =
    viewport === "mobile"
      ? "text-3xl"
      : viewport === "tablet"
      ? "text-4xl"
      : "text-3xl md:text-4xl lg:text-5xl"

  const subtitleClass =
    viewport === "mobile"
      ? "text-sm"
      : viewport === "tablet"
      ? "text-base"
      : "text-sm md:text-base lg:text-lg"

  const featureTextClass =
    viewport === "mobile"
      ? "text-sm"
      : viewport === "tablet"
      ? "text-base"
      : "text-sm md:text-base lg:text-base"

  const buttonTextClass =
    viewport === "mobile"
      ? "text-sm px-4 py-2"
      : viewport === "tablet"
      ? "text-base px-5 py-3"
      : "text-sm px-4 py-2 md:text-base md:px-5 md:py-3 lg:text-lg lg:px-6 lg:py-3"

  return (
    <section className="w-full bg-[#141414] pb-10 md:pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <Card className="border border-zinc-500/20 bg-gradient-to-br from-zinc-900 to-[#141414] shadow-sm p-6 md:p-10 lg:p-14 relative overflow-hidden">
          <div
            className={`grid ${
              viewport === "mobile"
                ? "grid-cols-1 gap-8"
                : viewport === "tablet"
                ? "grid-cols-2 gap-10"
                : "grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12"
            } items-center`}
          >
            {/* Left Content */}
            <div className="space-y-6 lg:col-span-2">
              <div className="space-y-4">
                <h2
                  className={`${titleClass} font-semibold leading-tight text-gray-200`}
                >
                  {title}
                </h2>
                <p
                  className={`${subtitleClass} text-gray-400 leading-relaxed`}
                >
                  {subtitle}
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={ctaData?.url || "#"} target="_blank">
                  <button
                    className={`flex items-center gap-2 border border-gray-400 text-white hover:bg-[#455CFF] hover:border-[#455CFF] font-medium transition-all duration-200 rounded-lg ${buttonTextClass}`}
                  >
                    <p>{ctaData?.title}</p>
                    <img
                      src="/arrow_white.png"
                      alt="Arrow"
                      width={11}
                      height={11}
                    />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-4">
              {features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className={featureTextClass}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
