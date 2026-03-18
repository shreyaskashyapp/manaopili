import Image from "next/image"

export default function ManaForceZscalerComponent() {
  return (
    <section className="relative w-full px-6 overflow-hidden">
      {/* Background tint */}
      <div className="pointer-events-none absolute inset-0 bg-[#455CFF]/04" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top rule + label */}
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="text-xs uppercase tracking-widest text-[#455CFF] font-medium whitespace-nowrap">Strategic Partnership</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-16">
          {/* Left — logos as the headline */}
          <div className="lg:w-1/2">
            <div className="flex flex-col gap-6 mb-8">
              <Image
                src="/manaforce-logo.png"
                alt="ManaForce"
                width={260}
                height={56}
                className="object-contain object-left"
                style={{ filter: "brightness(10)" }}
              />
              <span className="text-zinc-600 text-4xl font-light leading-none">×</span>
              <Image
                src="/zscaler-logo.png"
                alt="Zscaler"
                width={220}
                height={56}
                className="object-contain object-left"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-zinc-500 text-base leading-relaxed max-w-sm">
              As an approved Zscaler partner, we integrate Zero Trust security with ServiceNow operations — helping enterprises improve visibility, automate response, and strengthen compliance.
            </p>
          </div>

          {/* Right — three stacked text rows, no cards */}
          <div className="lg:w-1/2 flex flex-col divide-y divide-zinc-800">
            {[
              { num: "01", label: "Zero Trust Architecture", desc: "Replace legacy perimeter with identity-driven, context-aware access controls." },
              { num: "02", label: "ServiceNow Integration", desc: "Unify security alerts, operations workflows, and governance in one platform." },
              { num: "03", label: "Compliance Automation", desc: "Meet strict regulatory requirements across regulated industries at enterprise scale." },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-6 py-7 group">
                <div className="flex-1">
                  <p className="text-white font-semibold text-lg mb-1 group-hover:text-[#455CFF] transition-colors duration-200">{item.label}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom rule */}
        <div className="h-px bg-zinc-800 mt-16" />
      </div>
    </section>
  )
}
