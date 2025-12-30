"use client"

import { Zap, Shield, Headphones, BarChart, Rocket, Users } from "lucide-react"

const iconMap = {
  zap: Zap,
  shield: Shield,
  headphones: Headphones,
  barChart: BarChart,
  rocket: Rocket,
  users: Users,
}

export default function ServicesCards({
  title = "Our Premium Services",
  subtitle = "Comprehensive solutions tailored to elevate your business and drive sustainable growth.",
  services = [
    {
      icon: "zap",
      title: "Lightning Fast Performance",
      description: "Experience blazing-fast load times and seamless interactions with our optimized infrastructure.",
    },
    {
      icon: "shield",
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to keep your data safe and compliant.",
    },
    {
      icon: "headphones",
      title: "24/7 Support",
      description: "Round-the-clock dedicated support team ready to assist you whenever you need help.",
    },
    {
      icon: "barChart",
      title: "Advanced Analytics",
      description: "Gain deep insights with powerful analytics and reporting tools to make data-driven decisions.",
    },
    {
      icon: "rocket",
      title: "Rapid Deployment",
      description: "Get up and running in minutes with our streamlined onboarding and deployment process.",
    },
    {
      icon: "users",
      title: "Team Collaboration",
      description: "Seamless collaboration tools designed for modern teams working across multiple locations.",
    },
  ],
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

  const gridCols =
    viewport === "mobile"
      ? "grid-cols-1"
      : viewport === "tablet"
        ? "grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

  const cardTitleClass =
    viewport === "mobile"
      ? "text-lg"
      : viewport === "tablet"
        ? "text-xl"
        : "text-lg md:text-xl lg:text-2xl"

  const cardDescClass =
    viewport === "mobile"
      ? "text-sm"
      : viewport === "tablet"
        ? "text-base"
        : "text-sm md:text-base lg:text-md"

  return (
    <section className="relative pb-10 md:pb-20 bg-[#141414] overflow-hidden">
      <div className="container relative z-10 px-4 mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <h2
            className={`${titleClass} font-medium text-white text-balance`}
          >
            {title}
          </h2>
          <p
            className={`${subtitleClass} text-gray-400 text-pretty leading-relaxed`}
          >
            {subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div
          className={`grid ${gridCols} gap-6 max-w-7xl mx-auto`}
        >
          {services?.map?.((service, index) => {
            const IconComponent = iconMap[service?.icon] || Zap
            const animationDelay = 150 + index * 100

            return (
              <div
                key={index}
                className="group flex-1 p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-[#141414] backdrop-blur-sm border shadow-sm hover:shadow-xl border-zinc-900 hover:border-zinc-500/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${animationDelay}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-4 border border-[#455CFF]/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#455CFF]" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h2
                    className={`${cardTitleClass} font-medium text-gray-200 transition-colors`}
                  >
                    {service?.title || "Service Title"}
                  </h2>
                  <p
                    className={`${cardDescClass} text-gray-400 leading-relaxed`}
                  >
                    {service?.description || "Service description goes here."}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
