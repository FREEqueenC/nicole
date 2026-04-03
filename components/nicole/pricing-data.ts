"use client"

import { Check } from "lucide-react"

export interface PricingTier {
  id: string
  label: string
  tier: string
  price: string
  priceNote: string
  highlighted: boolean
  features: string[]
  cta: string
  ctaStyle: "outline" | "primary" | "ghost"
}

export const pricingTiers: PricingTier[] = [
  {
    id: "initiate",
    label: "TIER_01",
    tier: "Initiate",
    price: "Free",
    priceNote: "No credit card required",
    highlighted: false,
    features: [
      "Access to public transmission logs",
      "Weekly market decryption summary",
    ],
    cta: "[ Join Public Waitlist ]",
    ctaStyle: "outline",
  },
  {
    id: "navigator",
    label: "TIER_02",
    tier: "Navigator",
    price: "$49",
    priceNote: "per month — beta pricing",
    highlighted: true,
    features: [
      "Full access to the N.I.C.O.L.E. Terminal",
      'Daily "Frequency of Abundance" asset scans',
      "Priority processing for complex queries",
    ],
    cta: "[ Secure Beta Pricing ]",
    ctaStyle: "primary",
  },
  {
    id: "architect",
    label: "TIER_03",
    tier: "Architect",
    price: "$199",
    priceNote: "per month — application required",
    highlighted: false,
    features: [
      "Direct API access to the Wealth Lab backend",
      "Custom signal generation",
      "Full access to the Pleroma architecture research vault",
    ],
    cta: "[ Apply for Architect Access ]",
    ctaStyle: "ghost",
  },
]
