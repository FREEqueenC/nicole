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
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
          >
            <Twitter className="w-3.5 h-3.5" />
            Twitter / X
          </a>
          <span className="text-border">|</span>
          <a
            href="https://farcaster.xyz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Farcaster"
            className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Farcaster
          </a>
        </div>
      </div>
    </footer>
  )
}
