"use client"

import { Layers, Network, Cpu, Database } from "lucide-react";

const AlphaSystemArchitecture = () => {
  const tiers = [
    { 
      name: "INTELLIGENCE_LAYER", 
      icon: <Cpu className="w-5 h-5" />, 
      color: "text-violet-400",
      description: "Sovereign AI nodes (N.I.C.O.L.E.) processing Gnostic logic and multi-source signals."
    },
    { 
      name: "TRANSPORT_LAYER", 
      icon: <Network className="w-5 h-5" />, 
      color: "text-cyan-400",
      description: "SpaceRouter SOCKS5 mesh routing intelligence through orbital CTC constellation."
    },
    { 
      name: "DATA_RESONANCE_LAYER", 
      icon: <Database className="w-5 h-5" />, 
      color: "text-emerald-400",
      description: "Cymatic storage of decrypted market structures and Pleroma architecture dossiers."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-black text-white font-mono overflow-hidden rounded-xl border border-white/5 p-8">
      <div className="w-full max-w-2xl">
        {/* Header HUD */}
        <div className="flex items-center gap-4 mb-12 border-l-2 border-violet-500 pl-4">
          <Layers className="w-8 h-8 text-violet-500 animate-pulse" />
          <div>
            <h3 className="text-xl font-bold tracking-tighter uppercase">ALPHA_SYSTEM_ARCHITECTURE</h3>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em]">VERSION: 1.0.4 // PROTOCOL: PLEROMA_SYNC</p>
          </div>
        </div>

        {/* Visual Stack */}
        <div className="space-y-6 relative">
          {/* Connecting Vertical Line */}
          <div className="absolute left-[26px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-violet-500 via-cyan-500 to-emerald-500 opacity-30" />

          {tiers.map((tier, i) => (
            <div key={i} className="flex gap-6 group">
              <div className={`z-10 w-14 h-14 rounded-lg bg-black border border-white/10 flex items-center justify-center ${tier.color} shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500`}>
                {tier.icon}
              </div>
              
              <div className="flex-1 pt-2">
                <div className={`text-xs font-bold tracking-widest mb-1 ${tier.color}`}>{tier.name}</div>
                <div className="text-[10px] text-muted-foreground leading-relaxed">
                  {tier.description}
                </div>
                <div className="mt-3 flex gap-1 opacity-20 group-hover:opacity-60 transition-opacity">
                   {[1,2,3,4,5,6,7,8,9,10].map(j => (
                     <div key={j} className={`w-2 h-1 ${tier.color.replace('text', 'bg')}`} />
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Technical Specs */}
        <div className="mt-12 pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
           <div className="text-center">
             <div className="text-[8px] text-muted-foreground uppercase mb-1">Latency</div>
             <div className="text-xs font-bold text-cyan-500">14ms</div>
           </div>
           <div className="text-center border-x border-white/5">
             <div className="text-[8px] text-muted-foreground uppercase mb-1">Encryption</div>
             <div className="text-xs font-bold text-violet-500">X-POLY-1305</div>
           </div>
           <div className="text-center">
             <div className="text-[8px] text-muted-foreground uppercase mb-1">Sync_State</div>
             <div className="text-xs font-bold text-emerald-500">STABLE</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AlphaSystemArchitecture;
