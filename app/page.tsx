import { HeroSection } from "@/components/nicole/hero-section"
import { WhySection } from "@/components/nicole/why-section"
import { FeaturesSection } from "@/components/nicole/features-section"
import { PricingSection } from "@/components/nicole/pricing-section"
import { SiteFooter } from "@/components/nicole/site-footer"
import { SiteNav } from "@/components/nicole/site-nav"

export default function NicolePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />
      <HeroSection />
      <WhySection />
      <FeaturesSection />
      <PricingSection />
      <SiteFooter />
    </main>
  )
}
