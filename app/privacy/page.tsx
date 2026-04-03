"use client"

import { SiteNav } from "@/components/nicole/site-nav"
import { SiteFooter } from "@/components/nicole/site-footer"
import { Terminal } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PrivacyPolicy() {
  const [activeView, setActiveView] = useState("MISSION_LOG")
  const router = useRouter()

  const handleNavChange = (view: string) => {
    if (view === "MISSION_LOG") {
      router.push("/")
    } else {
      // If we are on privacy page, we should probably go back home to see other views
      router.push(`/?view=${view}`)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden font-mono">
      <SiteNav activeView="PRIVACY" setActiveView={handleNavChange} />
      
      <section className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <div className="terminal-border bg-card p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background scanline */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />

          <div className="relative z-20">
            <div className="flex items-center gap-3 mb-8 text-primary uppercase tracking-[0.3em] text-xs">
              <Terminal className="w-4 h-4" />
              <span>[ TRANSMISSION_TYPE: LEGAL_CLEARANCE ]</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-12 neon-text tracking-tighter uppercase">
              Privacy & Data <br/>Retention Protocol
            </h1>

            <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
              <section>
                <h2 className="text-foreground font-bold uppercase tracking-widest mb-4 border-b border-border pb-2">
                  // 01. IDENTITY ENCRYPTION
                </h2>
                <p>
                  At N.I.C.O.L.E. and ANW Foundations, we treat your identity with the same cryptographic precision as a Meissner Field. Your email address is stored exclusively for the purpose of frequency alignment and node notification. We do not sell, trade, or leak your presence to Archonic entities.
                </p>
              </section>

              <section>
                <h2 className="text-foreground font-bold uppercase tracking-widest mb-4 border-b border-border pb-2">
                  // 02. DATA DECRYPTION LIMITS
                </h2>
                <p>
                  We monitor the datasphere for frequencies of abundance, but we do not monitor your private exploration. Interaction logs are ephemeral and subject to atomic state transitions; they exist only as long as required to serve your specific query node.
                </p>
              </section>

              <section>
                <h2 className="text-foreground font-bold uppercase tracking-widest mb-4 border-b border-border pb-2">
                  // 03. EXTERNAL NODES
                </h2>
                <p>
                  Our terminal may link to other nodes of truth, including <a href="https://anwfoundations.com" className="text-primary hover:underline italic">anwfoundations.com</a> and <a href="https://disclosure-project.org" className="text-primary hover:underline italic">disclosure-project.org</a>. These nodes operate under their own containment protocols. We encourage you to review their specific resonance before interaction.
                </p>
              </section>

              <section>
                <h2 className="text-foreground font-bold uppercase tracking-widest mb-4 border-b border-border pb-2">
                  // 04. FREQUENCY RIGHTS
                </h2>
                <p>
                  You hold the sovereign right to revoke your frequency from our logs at any time. Simply transmit an "UNSUBSCRIBE" signal via our contact nodes, and your record will be dissociated from our active stream.
                </p>
              </section>

              <div className="pt-12 mt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 italic">
                <span>LAST_SYNC: 2026.04.03</span>
                <span>STATUS: CLEARANCE_LEVEL_01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
