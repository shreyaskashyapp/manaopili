"use client"

import Link from "next/link"

const industries = [
  { slug: "life-sciences-pharma", name: "Life Sciences & Pharma" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "energy-utilities", name: "Energy & Utilities" },
  { slug: "finance-insurance", name: "Finance & Insurance" },
  { slug: "regulated-manufacturing", name: "Regulated Manufacturing" },
  { slug: "public-sector", name: "Public Sector" },
  { slug: "telecommunications", name: "Telecommunications" },
]

export default function IndustriesSection() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-[#e2e2e2] text-4xl md:text-5xl text-center mb-10">Industries We Serve</h2>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Labels above the line */}
          <div className="flex justify-between mb-3">
            {industries.map((industry, i) => (
              <div key={industry.slug} className="flex-1 flex justify-center">
                {i % 2 === 0 ? (
                  <Link
                    href={`/manaforce/industries/${industry.slug}`}
                    className="text-zinc-400 hover:text-[#455cff] transition-colors text-xs text-center leading-tight max-w-[90px]"
                  >
                    {industry.name}
                  </Link>
                ) : (
                  <span className="invisible text-xs max-w-[90px]">{industry.name}</span>
                )}
              </div>
            ))}
          </div>

          {/* Line + dots */}
          <div className="relative flex items-center">
            <div className="absolute left-0 right-0 h-px bg-zinc-700" />
            <div className="relative flex justify-between w-full">
              {industries.map((industry, i) => (
                <div key={industry.slug} className="flex-1 flex justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#455cff] hover:bg-[#455cff] transition-colors cursor-pointer relative z-10" />
                </div>
              ))}
            </div>
          </div>

          {/* Labels below the line */}
          <div className="flex justify-between mt-3">
            {industries.map((industry, i) => (
              <div key={industry.slug} className="flex-1 flex justify-center">
                {i % 2 !== 0 ? (
                  <Link
                    href={`/manaforce/industries/${industry.slug}`}
                    className="text-zinc-400 hover:text-[#455cff] transition-colors text-xs text-center leading-tight max-w-[90px]"
                  >
                    {industry.name}
                  </Link>
                ) : (
                  <span className="invisible text-xs max-w-[90px]">{industry.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
