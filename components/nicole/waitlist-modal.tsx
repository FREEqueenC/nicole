"use client"

import { useState } from "react"
import { X, Terminal } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  tier: string
}

export function WaitlistModal({ isOpen, onClose, tier }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    
    try {
      const response = await fetch("https://formspree.io/f/mqegypvr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, tier: tier })
      });
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        console.error("Transmission failed");
      }
    } catch (error) {
      console.error("Network error in datasphere:", error);
    }
  }

  function handleClose() {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md terminal-border bg-card p-8 animate-float-up">
        {/* Terminal header bar */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20 font-mono text-xs text-muted-foreground">
          <button
            onClick={handleClose}
            className="w-3 h-3 rounded-full bg-destructive/60 hover:bg-destructive transition-colors cursor-pointer"
            aria-label="Close modal"
          />
          <span className="w-3 h-3 rounded-full bg-yellow-700/60" />
          <span className="w-3 h-3 rounded-full bg-primary/40" />
          <span className="ml-2 tracking-widest uppercase neon-text">CAPACITY_LIMIT.sys</span>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <>
            {/* Icon + Title */}
            <div className="flex items-start gap-3 mb-4">
              <Terminal className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <h2
                id="modal-title"
                className="font-mono text-sm tracking-widest uppercase text-foreground font-bold leading-relaxed"
              >
                TERMINAL AT{" "}
                <span className="neon-text">MAXIMUM CAPACITY</span>
              </h2>
            </div>

            {/* Body text */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-1">
              N.I.C.O.L.E. is currently processing the datasphere at full load.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Enter your email to secure{" "}
              <span className="text-foreground font-mono font-semibold">{tier}</span>{" "}
              pricing when the next node opens.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your_handle@domain.com"
                  className="w-full bg-background border border-border text-foreground placeholder:text-muted-foreground font-mono text-sm px-4 py-3 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="cta-button w-full font-mono text-xs tracking-widest uppercase border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground py-3 transition-all duration-200 animate-neon-pulse focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                [ Submit Frequency Request ]
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="font-mono text-xs tracking-widest uppercase neon-text mb-4">
              // FREQUENCY REGISTERED
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              Request logged in the datasphere.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You will be contacted when a node opens for{" "}
              <span className="text-foreground font-mono font-semibold">{tier}</span>.
            </p>
            <div className="mt-6 font-mono text-xs text-muted-foreground flex items-center justify-center gap-1">
              <span className="neon-text">{">"}</span>
              <span>awaiting_node_availability</span>
              <span className="animate-cursor neon-text">_</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
