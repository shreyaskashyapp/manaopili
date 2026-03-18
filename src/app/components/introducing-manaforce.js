

const items = [
  {
    title: "Zero Trust Architecture",
    desc: "Identity-first security that assumes breach by default — no implicit trust, ever.",
  },
  {
    title: "Zscaler Platform",
    desc: "Enterprise-grade cloud-native security powering our Zero Trust delivery at scale.",
  },
  {
    title: "Security Capabilities",
    desc: "From architecture design to automated security operations and compliance readiness.",
  },
  {
    title: "Regulated Industry Focus",
    desc: "Healthcare, life sciences, finance, energy, and critical infrastructure.",
  },
]

export default function IntroducingManaForce() {
  return (
    <section className="w-full px-6">
      <div className=" mx-auto">

        {/* Header split */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">

          {/* Left: big headline */}
          <div>
            <h2
              className="text-6xl md:text-7xl  text-white leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Introducing
            </h2>
            <h2
              className="text-6xl md:text-7xl font-bold leading-none mt-1"
              style={{ letterSpacing: "-0.03em", color: "#455CFF" }}
            >
              ManaForce
            </h2>
          </div>

          {/* Right: description */}
          <div className="flex flex-col gap-5">
            <p className="text-zinc-300 text-lg leading-relaxed">
              ManaForce is the cybersecurity practice of Mana&apos;o Pili, focused on Zero Trust architecture and modern enterprise security.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Built on the Zscaler platform, ManaForce helps organizations replace legacy network perimeter models with identity-driven access that protects users, applications, and data across cloud, hybrid, and remote environments.
            </p>
            {/* Zscaler badge */}
            <div className="inline-flex items-center gap-2.5 w-fit mt-1">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#455CFF", boxShadow: "0 0 6px #455CFF" }}
              />
              <span className="text-xs text-zinc-500 tracking-wide">Approved Zscaler Partner</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col gap-4 cursor-default transition-all duration-300 border border-white/[0.07] bg-gray-900/40 hover:border-[#455CFF]/50 hover:bg-[#455CFF]/5 hover:shadow-[0_0_32px_rgba(69,92,255,0.1)]"
            >
              <h3 className="text-[#455cff]/80 font-bold text-lg leading-snug">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
