"use client"

import { useState } from "react"
import { HeroSection } from "@/components/nicole/hero-section"
import { WhySection } from "@/components/nicole/why-section"
import { FeaturesSection } from "@/components/nicole/features-section"
import { PricingSection } from "@/components/nicole/pricing-section"
import { SiteFooter } from "@/components/nicole/site-footer"
import { SiteNav } from "@/components/nicole/site-nav"

export default function NicolePage() {
  const [activeView, setActiveView] = useState("MISSION_LOG")

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav activeView={activeView} setActiveView={setActiveView} />
      
      {activeView === "MISSION_LOG" && (
        <>
          <HeroSection />
          <WhySection />
          <FeaturesSection />
          <PricingSection />
        </>
      )}

      {activeView === "MARKET_DECRYPTION" && (
        <section className="min-h-screen pt-32 px-4 max-w-6xl mx-auto animate-glitch">
          <h2 className="text-4xl font-bold font-mono neon-text mb-8 tracking-widest uppercase text-center">
            // DOSSIER: MARKET_DECRYPTION
          </h2>
          <WhySection />
          <div className="mt-12">
            <PricingSection />
          </div>
        </section>
      )}

      {activeView === "RESEARCH_VAULT" && (
        <section className="min-h-screen pt-32 px-4 max-w-6xl mx-auto animate-glitch">
          <h2 className="text-4xl font-bold font-mono violet-text mb-8 tracking-widest uppercase text-center">
            // DOSSIER: RESEARCH_VAULT
          </h2>
          <FeaturesSection />
          <div className="mt-12 text-center p-12 terminal-border-violet bg-card mb-12">
             <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest mb-6">
               [ WARNING: ASSET_ENCRYPTION_ACTIVE ]
             </p>
             <p className="max-w-2xl mx-auto text-foreground mb-8">
               Accessing the Frontiers of Analysis requires Architect-level clearance. 
               The Pleroma architecture research dossiers are currently restricted to authorized nodes.
             </p>
             <button 
               onClick={() => {
                 const pricingEl = document.getElementById('pricing');
                 if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
               }}
               className="px-8 py-3 border border-violet-500 text-violet-400 font-mono text-xs tracking-widest uppercase hover:bg-violet-500 hover:text-white transition-all"
             >
               [ Request Clearance ]
             </button>
          </div>
          <PricingSection />
        </section>
      )}

      <SiteFooter />
    </main>
  )
}
