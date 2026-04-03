"use client"

import { useEffect, useRef, useState } from "react"
import { Terminal } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [glitchActive, setGlitchActive] = useState(false)

  // Subtle random glitch trigger
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.75) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Canvas noise background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animFrameId: number
    let offset = 0

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Subtle grid
      ctx.strokeStyle = "rgba(74,222,128,0.04)"
      ctx.lineWidth = 0.5
      const gridSize = 60
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = (offset % gridSize); y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Subtle diagonal scan
      const scanY = (offset * 0.4) % (canvas.height + 200)
      const gradient = ctx.createLinearGradient(0, scanY - 80, 0, scanY + 80)
      gradient.addColorStop(0, "rgba(74,222,128,0)")
      gradient.addColorStop(0.5, "rgba(74,222,128,0.025)")
      gradient.addColorStop(1, "rgba(74,222,128,0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, scanY - 80, canvas.width, 160)

      offset += 0.5
      animFrameId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-24">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.72 0.19 160 / 0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Top status bar */}
      <div className="relative z-10 mb-12 flex items-center gap-3 font-mono text-xs text-muted-foreground tracking-widest uppercase">
        <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span>SYSTEM ONLINE</span>
        <span className="text-border">|</span>
        <span className="neon-text">NODE_ACTIVE</span>
        <span className="text-border">|</span>
        <span>v2.6.1-quantum</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* NICOLE acronym */}
        <div className="mb-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.35em] text-muted-foreground border border-border px-4 py-2">
          <Terminal className="w-3 h-3 text-primary" />
          <span>
            <span className="neon-text">N</span>etworked{" "}
            <span className="neon-text">I</span>ntelligence &amp;{" "}
            <span className="neon-text">C</span>ryptographic{" "}
            <span className="neon-text">O</span>racle for{" "}
            <span className="neon-text">L</span>uminous{" "}
            <span className="neon-text">E</span>xploration
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance leading-tight text-foreground ${glitchActive ? "animate-glitch" : ""}`}
        >
          Decode the{" "}
          <span className="neon-text">Datasphere.</span>
          <br />
          <span className="text-foreground/70">Escape the Noise.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          N.I.C.O.L.E. is an advanced autonomous agent operating at the intersection of{" "}
          <span className="text-foreground/80">atomic state transitions</span>,{" "}
          <span className="violet-text">bio-acoustic resonance</span>, and{" "}
          <span className="neon-text">quantum market decryption.</span> Stop
          trading the charts; start trading the{" "}
          <span className="neon-text font-mono">frequency.</span>
        </p>

        {/* CTA Button */}
        <button
          className="cta-button group relative inline-flex items-center gap-3 px-8 py-4 font-mono text-sm tracking-widest uppercase bg-transparent border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground animate-neon-pulse focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Request Terminal Access"
        >
          <Terminal className="w-4 h-4" />
          <span>[</span>
          <span>Request Terminal Access</span>
          <span>]</span>
        </button>

        {/* Terminal prompt line */}
        <div className="mt-16 font-mono text-xs text-muted-foreground flex items-center justify-center gap-1">
          <span className="text-primary">{">"}</span>
          <span>scanning_for_orbitally_rearranged_monoatomic_elements_ORMEs</span>
          <span className="animate-cursor neon-text">_</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(transparent, oklch(0.06 0 0))" }}
        aria-hidden="true"
      />
    </section>
  )
}
