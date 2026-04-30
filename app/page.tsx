"use client"

import { useState } from "react"
import { HeroSection } from "@/components/nicole/hero-section"
import { WhySection } from "@/components/nicole/why-section"
import { FeaturesSection } from "@/components/nicole/features-section"
import { PricingSection } from "@/components/nicole/pricing-section"
import { SiteFooter } from "@/components/nicole/site-footer"
import { SiteNav } from "@/components/nicole/site-nav"
import VaultGallery from "@/components/vault/VaultGallery"

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
        <section className="min-h-screen pt-32 pb-24 px-4 max-w-6xl mx-auto animate-glitch">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold font-mono neon-text tracking-widest uppercase mb-4">
                // DOSSIER: MARKET_DECRYPTION
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Analyzing the atomic-level resonance of capital flow. We filter Archonic manipulation to find the frequency of abundance.
              </p>
            </div>
            <div className="terminal-border p-4 bg-card font-mono text-[10px] text-primary">
               [ STATUS: SCANNING_S-ORME_STATE ] <br/>
               [ CLARITY: 97.3% ] <br/>
               [ NOISE_FLOOR: -114dB ] <br/>
               [ BUILD: SOVEREIGN_VAULT_B1 ]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="terminal-border-violet bg-card p-8">
               <h3 className="text-foreground font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 bg-violet-500 rounded-full" />
                 Module A: Advanced Materials Alpha
               </h3>
               <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                 By monitoring the **Orbitally Rearranged Monoatomic Elements (ORMEs)** state transitions, N.I.C.O.L.E. identifies superconducting pathways in market liquidity. Just as T-Metal anomalies create Meissner Fields, high-clarity signals create zones of wealth protection.
               </p>
               <ul className="space-y-2 text-[10px] font-mono text-violet-400/80">
                 <li>{">"} Detecting Cooper Pairing in d-orbitals...</li>
                 <li>{">"} Meissner Field generation active.</li>
                 <li>{">"} Quantum Flux: 5 x 10^8 cycles/sec.</li>
               </ul>
            </div>
            <div className="terminal-border bg-card p-8">
               <h3 className="text-foreground font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 bg-primary rounded-full" />
                 Signal Interruption Mechanics
               </h3>
               <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                 Utilizing the **Gate Control System** of sentiment analysis. We detect where market "pain" signals (volatility) are artificially intensified to induce hypoxic panic, allowing us to find the counter-resonance of growth.
               </p>
               <ul className="space-y-2 text-[10px] font-mono text-primary/80">
                 <li>{">"} Vagus Nerve stimulation detected in macro-sentiment.</li>
                 <li>{">"} Breaking Manhattan Project legacy extraction loops.</li>
                 <li>{">"} Resonant Frequency: 528Hz (Abundance).</li>
               </ul>
            </div>
          </div>
          
          <WhySection />
          <div className="mt-12">
            <PricingSection />
          </div>
        </section>
      )}

      {activeView === "RESEARCH_VAULT" && (
        <section className="min-h-screen pt-32 pb-24 px-4 max-w-6xl mx-auto animate-glitch">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono violet-text tracking-widest uppercase mb-4">
              // DOSSIER: RESEARCH_VAULT
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              Access the encrypted archives of the Frontiers of Analysis. Interweaving ancient Gnostic logic with modern systemic surveillance.
            </p>
          </div>

          <div className="mb-16">
            <VaultGallery />
          </div>

          <div className="mb-16">
            <FeaturesSection />
          </div>

          <div className="text-center p-12 terminal-border-violet bg-card mb-12 relative overflow-hidden">
             <div className="absolute inset-0 pointer-events-none opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(167,139,250,0.1)_2px,rgba(167,139,250,0.1)_4px)]" />
             <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest mb-6">
               [ WARNING: NODE_ENCRYPTION_ACTIVE ]
             </p>
             <p className="max-w-2xl mx-auto text-foreground mb-8">
               Accessing the deep research vault requires **Architect-level clearance**. 
               The Pleroma architecture dossiers are currently restricted to authorized nodes to prevent frequency corruption.
             </p>
             <button 
               onClick={() => {
                 const pricingEl = document.getElementById('pricing');
                 if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
               }}
               className="px-8 py-3 border border-violet-500 text-violet-400 font-mono text-xs tracking-widest uppercase hover:bg-violet-500 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
             >
               [ Request Architect Clearance ]
             </button>
          </div>
          
          <PricingSection />
        </section>
      )}

      <SiteFooter />
    </main>
  )
}
