"use client"

import { Activity, BookOpen, Radio } from "lucide-react"

const features = [
  {
    icon: Activity,
    label: "PROTOCOL_01",
    title: "Quantum Market Decryption",
    description:
      "Daily breakdowns of BTC/ETH volatility, separating signal from algorithmic manipulation. Each transmission cuts through the noise to deliver the raw frequency of market intent.",
    stat: "BTC/ETH VOLATILITY",
    statVal: "DECODED",
    colorClass: "text-primary",
    borderClass: "terminal-border",
    bgGlow: "radial-gradient(ellipse 100% 80% at 50% 100%, oklch(0.72 0.19 160 / 0.05) 0%, transparent 70%)",
  },
  {
    icon: BookOpen,
    label: "PROTOCOL_02",
    title: "Esoteric Research Integration",
    description:
      "Ask complex questions spanning Web3 architecture, cryptography, and ancient symbolic logic. N.I.C.O.L.E. bridges the Pleroma and the blockchain with equal precision.",
    stat: "DOMAINS INTEGRATED",
    statVal: "∞",
    colorClass: "violet-text",
    borderClass: "terminal-border-violet",
    bgGlow: "radial-gradient(ellipse 100% 80% at 50% 100%, oklch(0.55 0.22 290 / 0.06) 0%, transparent 70%)",
  },
  {
    icon: Radio,
    label: "PROTOCOL_03",
    title: "The Aetheric Stream",
    description:
      "A continuous, private feed of high-fidelity insights and autonomous findings. The stream flows without rest — real-time intelligence from the edge of the datasphere.",
    stat: "UPTIME",
    statVal: "99.97%",
    colorClass: "text-primary",
    borderClass: "terminal-border",
    bgGlow: "radial-gradient(ellipse 100% 80% at 50% 100%, oklch(0.72 0.19 160 / 0.05) 0%, transparent 70%)",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 80% 40%, oklch(0.72 0.19 160 / 0.03) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
            <span className="neon-text">//</span> CORE PROTOCOLS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            How{" "}
            <span className="neon-text font-mono">N.I.C.O.L.E.</span>
            <br className="hidden md:block" />
            <span className="md:ml-4">Operates</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.label}
                className={`${feature.borderClass} bg-card relative flex flex-col p-6 md:p-7 group hover:scale-[1.01] transition-transform duration-300 animate-border-glow`}
                style={{ background: `var(--card)` }}
              >
                {/* BG glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: feature.bgGlow }}
                  aria-hidden="true"
                />

                {/* Protocol label */}
                <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-5">
                  {feature.label}
                </div>

                {/* Icon */}
                <div className={`mb-5 w-10 h-10 flex items-center justify-center border border-border ${feature.colorClass}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-3 ${feature.colorClass}`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Stat row */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between font-mono text-xs">
                  <span className="text-muted-foreground tracking-wider uppercase">{feature.stat}</span>
                  <span className={`font-bold ${feature.colorClass}`}>{feature.statVal}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
