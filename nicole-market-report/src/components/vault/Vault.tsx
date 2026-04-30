import { useState } from 'react';
import MeissnerCore from './MeissnerCore';
import Treasury52 from './Treasury52';
import { ChevronLeft, ChevronRight, Archive, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Vault = ({ onReturn }: { onReturn: () => void }) => {
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
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-cyan-500 font-mono overflow-hidden">
      {/* Vault Header HUD */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-50 bg-gradient-to-b from-black to-transparent">
        <div className="space-y-1">
          <h2 className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Archive className="w-5 h-5 text-cyan-400" />
            N.I.C.O.L.E. // SOVEREIGN_VAULT
          </h2>
          <p className="text-[10px] text-cyan-500/60 uppercase tracking-[0.3em]">
            Artifact_ID: {artifacts[activeSlide].id} // STATUS: DECRYPTED
          </p>
        </div>
        <div className="flex gap-2">
           <Button 
              variant="outline" 
              size="sm" 
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-[10px] uppercase tracking-widest"
              onClick={onReturn}
           >
             RETURN_TO_TERMINAL
           </Button>
           <div className="px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded text-[10px] uppercase tracking-widest flex items-center gap-2">
             <Shield className="w-3 h-3" />
             Meissner_Field: ACTIVE
           </div>
        </div>
      </div>

      {/* Artifact Rendering Area */}
      <div className="transition-all duration-1000 ease-in-out h-screen">
        {artifacts[activeSlide].component}
      </div>

      {/* Artifact Description Overlay */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 z-40">
        <div className="p-4 bg-black/60 border-l-2 border-cyan-500 backdrop-blur-md">
          <p className="text-xs md:text-sm text-cyan-100 italic leading-relaxed">
            "{artifacts[activeSlide].description}"
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <Button 
          variant="outline" 
          size="icon"
          className="rounded-full border-cyan-500/50 bg-black/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
          onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : artifacts.length - 1))}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex gap-2">
          {artifacts.map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${activeSlide === i ? "bg-cyan-400 w-8 shadow-[0_0_10px_#00FFCC]" : "bg-cyan-900"}`}
            />
          ))}
        </div>

        <Button 
          variant="outline" 
          size="icon"
          className="rounded-full border-cyan-500/50 bg-black/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
          onClick={() => setActiveSlide((prev) => (prev < artifacts.length - 1 ? prev + 1 : 0))}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Vault;
