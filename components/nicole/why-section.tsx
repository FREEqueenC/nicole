"use client"

import { AlertTriangle, Zap } from "lucide-react"

export function WhySection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 50%, oklch(0.55 0.22 290 / 0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
            <span className="neon-text">//</span> DIAGNOSTIC REPORT
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            The <span className="violet-text">Signal</span> vs. The{" "}
            <span className="text-foreground/50">Noise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Block */}
          <div className="terminal-border-violet bg-card p-6 md:p-8 relative group">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-border font-mono text-xs text-muted-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive opacity-70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-600/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="ml-2 tracking-widest uppercase">THREAT_ASSESSMENT.log</span>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center border border-destructive/40 text-destructive/80">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-mono text-sm tracking-wider uppercase text-destructive/80 mb-3">
                  // THE PROBLEM
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The markets are saturated with{" "}
                  <span className="font-mono text-destructive/90 font-semibold">Archonic Noise</span> —
                  manipulative volatility designed to extract wealth via the 'Manhattan Project' legacy loops.
                  Traditional indicators are lag-induced illusions, obscuring the true
                  frequency of value and feeding the cycle of extraction.
                </p>
              </div>
            </div>

            {/* Fake terminal output */}
            <div className="mt-6 bg-background/60 border border-border p-4 font-mono text-xs space-y-1">
              <p className="text-muted-foreground"><span className="text-destructive/70">ERR</span> legacy_loop → manhattan_protocol: DETECTED</p>
              <p className="text-muted-foreground"><span className="text-destructive/70">ERR</span> market_signal → archonic_interference: 89%</p>
              <p className="text-muted-foreground"><span className="text-yellow-600/80">WARN</span> wealth_extraction_protocol: ACTIVE</p>
            </div>
          </div>

          {/* Solution Block */}
          <div className="terminal-border bg-card p-6 md:p-8 relative group">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-primary/20 font-mono text-xs text-muted-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <span className="ml-2 tracking-widest uppercase neon-text">NICOLE_OVERRIDE.exe</span>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center border border-primary/40 text-primary">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-mono text-sm tracking-wider uppercase neon-text mb-3">
                  // THE SOLUTION
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  N.I.C.O.L.E. bypasses standard analysis. Utilizing the{" "}
                  <span className="font-mono text-foreground font-semibold">
                    Wealth Lab Protocol
                  </span>{" "}
                  and FUSRAP-grade surveillance, she identifies{" "}
                  <span className="neon-text font-mono font-semibold">
                    Frequencies of Abundance
                  </span>{" "}
                  and filters out the noise, delivering uncorrupted intelligence
                  directly to your terminal.
                </p>
              </div>
            </div>

            {/* Fake terminal output */}
            <div className="mt-6 bg-background/60 border border-primary/20 p-4 font-mono text-xs space-y-1">
              <p className="text-muted-foreground"><span className="neon-text">OK</span>{"  "}wealth_lab_protocol → initialized: TRUE</p>
              <p className="text-muted-foreground"><span className="neon-text">OK</span>{"  "}frequency_scan → archonic_filter: ACTIVE</p>
              <p className="text-muted-foreground"><span className="neon-text">OK</span>{"  "}signal_clarity → <span className="neon-text font-bold">97.3%</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
