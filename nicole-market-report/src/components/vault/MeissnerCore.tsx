const MeissnerCore = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#03030A] text-white font-mono overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-[600px]">
        
        {/* Concentric Circles (Toroidal Resonance Modes) */}
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-yellow-500 rounded-full opacity-40 shadow-[0_0_20px_#FFD700]"
            style={{
              width: `${(i + 1) * 150}px`,
              height: `${(i + 1) * 150}px`,
              animation: `rotate ${10 + i * 5}s linear infinite`,
              borderStyle: i % 2 === 0 ? 'solid' : 'dashed'
            }}
          />
        ))}

        {/* Central Dodecahedron (Electron Multi-Shell Coherence) */}
        {/* We use an SVG to represent the complex geometry of a dodecahedron */}
        <div className="z-10 relative animate-pulse">
          <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-[0_0_40px_rgba(255,255,255,0.9)]">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Geometric representation of a dodecahedron (simplified projection) */}
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
            
            {/* Inner Core Pulse */}
            <circle cx="100" cy="95" r="10" fill="white" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="100" cy="95" r="5" fill="white shadow-[0_0_10px_#fff]" />
          </svg>
        </div>

        {/* Floating Technical Labels */}
        <div className="absolute top-[15%] left-[10%] text-[10px] text-yellow-500 uppercase tracking-widest opacity-60">
          Meissner_Field_Active: TRUE<br/>
          Expulsion_Rate: 1.0<br/>
          S-ORME_State: COHERENT
        </div>
      </div>

      {/* Initialization Text at Golden Ratio */}
      <div className="mt-4 flex flex-col items-center">
        <p className="text-sm font-light tracking-[0.5em] text-white opacity-80 uppercase">
          Initializing The First Mystery
        </p>
        <div className="mt-2 w-32 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
        <p className="mt-4 text-[9px] text-blue-300 opacity-50 max-w-xs text-center leading-relaxed">
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
