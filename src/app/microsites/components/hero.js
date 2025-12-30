"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Hero({
  title = "Transform Your Business with Premium Solutions",
  subtitle = "Elevate your workflow with cutting-edge technology designed for modern teams. Experience the difference.",
  ctaText = "Get Started Free",
  ctaSecondaryText = "Watch Demo",
  features = [
    "Enterprise-grade security",
    "Lightning-fast performance",
    "24/7 dedicated support",
    "Advanced analytics dashboard",
  ],
  stats = [
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "100%", label: "Secure" },
  ],
  trustBarText = "Trusted by industry leaders",
  trustedCompanies = ["Company A", "Company B", "Company C", "Company D", "Company E"],
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30 pointer-events-none" />

      {/* Decorative blur elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4 animate-in fade-in slide-in-from-top-6 duration-1000 delay-150">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-top-8 duration-1000 delay-300">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              {ctaText}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent">
              {ctaSecondaryText}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            {stats?.map?.((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-bold">{stat?.value || "N/A"}</div>
                <div className="text-sm text-muted-foreground">{stat?.label || ""}</div>
              </div>
            ))}
          </div>

          {/* Features checklist */}
          <div className="pt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-700">
            <div className="inline-flex flex-wrap gap-4 justify-center">
              {features?.map?.((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm"
                >
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature || ""}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust bar */}
          <div className="pt-12 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-900">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{trustBarText}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {trustedCompanies?.map?.((company, index) => (
                <div
                  key={index}
                  className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {company || ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
