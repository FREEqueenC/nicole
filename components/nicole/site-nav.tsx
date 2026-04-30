import { Terminal, Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

interface SiteNavProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function SiteNav({ activeView, setActiveView }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navLinks = [
    { label: "MISSION_LOG", view: "MISSION_LOG" },
    { label: "MARKET_DECRYPTION", view: "MARKET_DECRYPTION" },
    { label: "RESEARCH_VAULT", view: "RESEARCH_VAULT" },
  ]

  const handleNavClick = (view: string) => {
    if (view === "RESEARCH_VAULT") {
      router.push("/vault")
    } else {
      if (pathname !== "/") {
        router.push("/")
      }
      setActiveView(view)
    }
    setMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick("MISSION_LOG")}
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest neon-text uppercase hover:opacity-80 transition-opacity"
        >
          <Terminal className="w-4 h-4" />
          N.I.C.O.L.E.
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className={`hover:text-primary transition-colors ${
                activeView === link.view ? "text-primary border-b border-primary" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href="#pricing" className="hover:text-primary transition-colors">ACCESS_TIERS</a>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => {
            const pricingEl = document.getElementById('pricing');
            if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden md:inline-flex font-mono text-[10px] tracking-widest uppercase border border-primary/40 text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          [ Request Access ]
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-6 space-y-4 font-mono text-xs tracking-widest uppercase">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className={`block w-full text-left py-2 transition-colors ${
                activeView === link.view ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMenuOpen(false)}>Access Tiers</a>
          <button
            onClick={() => {
              const pricingEl = document.getElementById('pricing');
              if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
              setMenuOpen(false);
            }}
            className="block w-full border border-primary/40 text-primary px-4 py-3 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 mt-4"
          >
            [ Request Access ]
          </button>
        </div>
      )}
    </nav>
  )
}
