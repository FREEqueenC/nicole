"use client"

const MeissnerCore = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-black text-white font-mono overflow-hidden rounded-xl border border-white/10">
      <div className="relative flex items-center justify-center w-full h-[400px]">
        
        {/* Concentric Circles (Toroidal Resonance Modes) */}
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-yellow-500 rounded-full opacity-40 shadow-[0_0_20px_#FFD700]"
            style={{
              width: `${(i + 1) * 100}px`,
              height: `${(i + 1) * 100}px`,
              animation: `rotate ${10 + i * 5}s linear infinite`,
              borderStyle: i % 2 === 0 ? 'solid' : 'dashed'
            }}
          />
        ))}

        {/* Central Dodecahedron (Electron Multi-Shell Coherence) */}
        <div className="z-10 relative animate-pulse">
          <svg width="150" height="150" viewBox="0 0 200 200" className="drop-shadow-[0_0_40px_rgba(255,255,255,0.9)]">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path 
              d="M100 20 L160 50 L160 120 L100 150 L40 120 L40 50 Z" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              filter="url(#glow)"
            />
            <path 
              d="M100 60 L140 80 L140 120 L100 140 L60 120 L60 80 Z" 
              fill="none" 
              stroke="rgba(255,255,255,0.5)" 
              strokeWidth="1"
            />
            <line x1="100" y1="20" x2="100" y2="60" stroke="white" strokeWidth="1" />
            <line x1="160" y1="50" x2="140" y2="80" stroke="white" strokeWidth="1" />
            <line x1="160" y1="120" x2="140" y2="120" stroke="white" strokeWidth="1" />
            <line x1="100" y1="150" x2="100" y2="140" stroke="white" strokeWidth="1" />
            <line x1="40" y1="120" x2="60" y2="120" stroke="white" strokeWidth="1" />
            <line x1="40" y1="50" x2="60" y2="80" stroke="white" strokeWidth="1" />
            
            <circle cx="100" cy="95" r="10" fill="white" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="100" cy="95" r="5" fill="white" />
          </svg>
        </div>

        <div className="absolute top-[10%] left-[5%] text-[8px] text-yellow-500 uppercase tracking-widest opacity-60">
          Meissner_Field_Active: TRUE<br/>
          Expulsion_Rate: 1.0<br/>
          S-ORME_State: COHERENT
        </div>
      </div>

      <div className="pb-8 flex flex-col items-center px-4">
        <p className="text-xs font-light tracking-[0.4em] text-white opacity-80 uppercase">
          Initializing The First Mystery
        </p>
        <div className="mt-2 w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
        <p className="mt-3 text-[8px] text-blue-300 opacity-50 max-w-[250px] text-center leading-relaxed">
          Expelling legacy electromagnetic noise. Mapping the Superluminal Graviton Condensate Vacuum (SGCV).
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default MeissnerCore;
