"use client"

import { Star } from "lucide-react"

export default function TestimonialsSection({
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it. Here's what our clients have to say about working with us.",
  testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      content:
        "Working with this team transformed our business. Their expertise and dedication to our success was evident in every interaction. Highly recommended!",
      rating: 5,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateCo",
      content:
        "The quality of work exceeded our expectations. They delivered on time, within budget, and the final product was exactly what we envisioned.",
      rating: 5,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Digital Solutions",
      content:
        "Their attention to detail and commitment to excellence is unmatched. They took the time to understand our needs and delivered a solution that truly works.",
      rating: 5,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ],
  viewport,
}) {
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

  const paragraphClass =
    viewport === "mobile"
      ? "text-sm"
      : viewport === "tablet"
        ? "text-base"
        : "text-sm md:text-base lg:text-md"

  const sectionPadding =
    viewport === "mobile"
      ? "pb-10"
      : viewport === "tablet"
        ? "pb-14"
        : "pb-10 md:pb-14 lg:pb-20"

  return (
    <section className={`relative bg-[#141414] overflow-hidden ${sectionPadding}`}>
      <div className="container relative z-10 px-4 mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 animate-in fade-in slide-in-from-top-6 duration-1000">
          <h2 className={`${titleClass} font-medium text-white tracking-tight text-balance`}>
            {title}
          </h2>
          <p className={`${subtitleClass} text-gray-400 text-pretty leading-relaxed`}>
            {subtitle}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className={`grid ${gridCols} gap-6 max-w-7xl mx-auto`}>
          {testimonials?.map?.((testimonial, index) => {
            const animationDelay = 150 + index * 100

            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-[#141414] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 space-y-4"
                style={{ animationDelay: `${animationDelay}ms` }}
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(testimonial?.rating || 5, 5) }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#455CFF] text-[#455CFF]" />
                  ))}
                </div>

                {/* Content */}
                <p className={`${paragraphClass} text-gray-300 leading-relaxed`}>
                  {testimonial?.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
                  {testimonial?.avatarUrl && (
                    <img
                      src={testimonial?.avatarUrl}
                      alt={testimonial?.name}
                      className="w-12 h-12 rounded-full bg-zinc-800"
                    />
                  )}
                  <div>
                    <div className="font-medium text-white">{testimonial?.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial?.role} at {testimonial?.company}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
