"use client"

import { useState } from 'react';
import MeissnerCore from './MeissnerCore';
import Treasury52 from './Treasury52';
import ConstellationMap from './ConstellationMap';
import { ChevronLeft, ChevronRight, Archive, Shield } from 'lucide-react';

const VaultGallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const artifacts = [
    { 
      id: "e83d90e6-s1", 
      title: "01_THE_MEISSNER_CORE", 
      component: <MeissnerCore />,
      description: "Expelling legacy electromagnetic noise. Mapping the Superluminal Graviton Condensate Vacuum (SGCV)."
    },
    { 
      id: "e83d90e6-s2", 
      title: "02_TREASURY_52", 
      component: <Treasury52 />,
      description: "Cryptographic firewall for the Quantum Financial System. Bypassing SWIFT/Atlas legacy PKI."
    },
    { 
      id: "e83d90e6-s3", 
      title: "03_LIVE_CONSTELLATION_MAP", 
      component: <ConstellationMap />,
      description: "Real-time tracking of the CTC-0 and CTC-1 satellite cluster. Verification of 'Proof of Location' coordination layers."
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-black/40 border border-violet-500/20 rounded-2xl overflow-hidden backdrop-blur-sm">
      {/* HUD Header */}
      <div className="p-4 border-b border-violet-500/20 flex justify-between items-center bg-violet-950/10">
        <div className="flex items-center gap-2">
          <Archive className="w-4 h-4 text-violet-400" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-violet-300">
            Artifact: {artifacts[activeSlide].title}
          </span>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-[8px] font-mono text-muted-foreground uppercase hidden md:block">
             ID: {artifacts[activeSlide].id}
           </div>
           <div className="flex items-center gap-1">
             <Shield className="w-3 h-3 text-emerald-500" />
             <span className="text-[8px] font-mono text-emerald-500 uppercase tracking-tighter">Coherence: MAX</span>
           </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative group">
        <div className="transition-all duration-700">
          {artifacts[activeSlide].component}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : artifacts.length - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 border border-violet-500/30 rounded-full text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-violet-500 hover:text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setActiveSlide((prev) => (prev < artifacts.length - 1 ? prev + 1 : 0))}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 border border-violet-500/30 rounded-full text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-violet-500 hover:text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Description Footer */}
      <div className="p-6 border-t border-violet-500/20 bg-violet-950/10">
        <p className="text-xs md:text-sm text-violet-200/80 italic font-mono leading-relaxed">
          {artifacts[activeSlide].description}
        </p>
        
        {/* Pagination Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {artifacts.map((_, i) => (
            <div 
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`cursor-pointer transition-all duration-300 rounded-full ${activeSlide === i ? "w-6 h-1 bg-violet-400 shadow-[0_0_10px_#A78BFA]" : "w-1 h-1 bg-violet-900"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaultGallery;
