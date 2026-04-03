"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"
import { pricingTiers } from "./pricing-data"
import { WaitlistModal } from "./waitlist-modal"

export function PricingSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTier, setActiveTier] = useState("")

  function openModal(tier: string) {
    setActiveTier(tier)
    setModalOpen(true)
  }

  return (
    <section className="relative py-24 px-4 overflow-hidden" id="pricing">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, oklch(0.45 0.18 290 / 0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
            <span className="neon-text">//</span> ACCESS TIERS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            Choose Your{" "}
            <span className="violet-text">Frequency</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto">
            Each tier grants a different depth of access to the N.I.C.O.L.E. intelligence network.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col p-7 ${
                tier.highlighted
                  ? "terminal-border-violet bg-card scale-[1.02] md:scale-105 z-10"
                  : "terminal-border bg-card"
              } transition-transform duration-200`}
            >
              {/* Highlighted badge */}
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase px-4 py-1 bg-card border border-primary/40 text-primary whitespace-nowrap">
                  <Star className="w-3 h-3 fill-primary" />
                  OPTIMAL FREQUENCY
                </div>
              )}

              {/* Tier label */}
              <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
                {tier.label}
              </div>

              {/* Tier name */}
              <h3
                className={`text-xl font-bold mb-1 font-mono ${
                  tier.highlighted ? "violet-text" : "neon-text"
                }`}
              >
                {tier.tier}
              </h3>

              {/* Price */}
              <div className="mb-1">
                <span className="text-3xl font-bold text-foreground font-mono">
                  {tier.price}
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground mb-6 pb-6 border-b border-border">
                {tier.priceNote}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        tier.highlighted ? "text-primary" : "text-primary/70"
                      }`}
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => openModal(tier.tier)}
                className={`cta-button w-full font-mono text-xs tracking-widest uppercase py-3.5 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                  tier.highlighted
                    ? "border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground animate-neon-pulse"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tier={activeTier}
      />
    </section>
  )
}
