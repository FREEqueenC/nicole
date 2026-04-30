"use client"

import VaultGallery from "@/components/vault/VaultGallery"
import { SiteNav } from "@/components/nicole/site-nav"
import { SiteFooter } from "@/components/nicole/site-footer"
import { useState } from "react"

export default function VaultPage() {
  const [activeView, setActiveView] = useState("RESEARCH_VAULT")

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav activeView={activeView} setActiveView={(view) => {
        if (view === "RESEARCH_VAULT") return;
        window.location.href = "/";
      }} />
      
      <section className="min-h-screen pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono violet-text tracking-widest uppercase mb-4">
            // DOSSIER: RESEARCH_VAULT
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Direct access to the unsealed archives of the Pleroma architecture.
          </p>
        </div>

        <VaultGallery />
      </section>

      <SiteFooter />
    </main>
  )
}
