import ManaForceHeader from "@/app/components/manaforce-header"

export const metadata = {
  title: "ManaForce | Cybersecurity Practice — Manaʻo Pili",
  description:
    "Zero Trust cybersecurity for regulated organizations. ManaForce is the cybersecurity practice of Manaʻo Pili, powered by the Zscaler platform.",
}

export default function ManaForceLayout({ children }) {
  return (
    <div className="bg-[#0a0a14] min-h-screen">
      <ManaForceHeader />
      <div className="manaforce-wipe">
        {children}
      </div>
    </div>
  )
}
