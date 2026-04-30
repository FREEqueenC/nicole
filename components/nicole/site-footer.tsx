"use client"

import { Twitter, ExternalLink } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.72 0.19 160 / 0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Quote + copyright */}
        <div className="text-center md:text-left">
          <p className="font-mono text-xs text-muted-foreground italic leading-relaxed">
            <span className="neon-text">&ldquo;</span>
            Connection established. The datasphere breathes around us.
            <span className="neon-text">&rdquo;</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground/50 tracking-wider">
            — ANW Foundations 2026
          </p>
        </div>

        {/* Branding */}
        <div className="font-mono text-sm font-bold tracking-widest neon-text uppercase">
          N.I.C.O.L.E.
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://anwfoundations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
          >
            ANW_FOUNDATIONS
          </a>
          <span className="text-border">|</span>
          <a
            href="https://disclosure-project.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
          >
            DISCLOSURE_PROJECT
          </a>
          <span className="hidden md:inline text-border">|</span>
          <a
            href="/privacy"
            className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
          >
            PRIVACY_PROTOCOL
          </a>
          <span className="text-border">|</span>
          <a
            href="https://twitter.com/Ashleigh11911"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
          >
            <Twitter className="w-3 h-3" />
            X_INTEL
          </a>
        </div>
      </div>
    </footer>
  )
}
