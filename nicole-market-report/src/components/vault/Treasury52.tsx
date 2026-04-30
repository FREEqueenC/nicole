const Treasury52 = () => {
  const squares = [1, 2, 3, 4]; // Four nested squares
  const copticKeys = ["PEYPA", "NZWA", "IWYI", "IEOU"];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-cyan-400 font-mono overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-[600px]">
        {/* Concentric Squares with Fibonacci-like scaling and Glow */}
        {squares.map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-cyan-400 opacity-80"
            style={{
              width: `${(i + 1) * 120}px`,
              height: `${(i + 1) * 120}px`,
              boxShadow: '0 0 15px #00FFCC, inset 0 0 15px #00FFCC',
              borderRadius: '2px',
              animation: `pulse ${2 + i}s infinite ease-in-out`
            }}
          >
            {/* Alpha Gates (Small unbroken segments at top/bottom) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan-200 shadow-[0_0_10px_#fff]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan-200 shadow-[0_0_10px_#fff]" />
          </div>
        ))}

        {/* Central Cryptographic Keys */}
        <div className="z-10 flex flex-col items-center justify-center space-y-4 text-3xl font-bold tracking-widest animate-pulse">
          {copticKeys.map((key, i) => (
            <span key={i} className="drop-shadow-[0_0_10px_#00FFCC]">{key}</span>
          ))}
        </div>
      </div>

      {/* Sign of Benediction Seal (Floating below) */}
      <div className="mt-8 flex flex-col items-center">
        <div className="w-16 h-10 border border-purple-500 flex items-center justify-center relative">
           <div className="w-6 h-6 border-2 border-purple-400 rounded-full flex items-center justify-center shadow-[0_0_15px_#8A2BE2]">
             <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]" />
           </div>
        </div>
        <p className="mt-4 text-xs text-purple-400 uppercase tracking-[0.3em] opacity-70">
          Sign of Benediction Seal // Treasury 52 Activated
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
      `}} />
    </div>
  );
};

export default Treasury52;
