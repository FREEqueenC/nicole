"use client"

import { useEffect, useState } from "react";

const Treasury52 = () => {
  const [data, setData] = useState<any>(null);
  const squares = [1, 2, 3, 4]; // Four nested squares
  const copticKeys = ["PEYPA", "NZWA", "IWYI", "IEOU"];

  useEffect(() => {
    fetch("/api/vault").then(res => res.json()).then(setData).catch(() => {});
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-black text-cyan-400 font-mono overflow-hidden rounded-xl border border-cyan-500/20">
      <div className="relative flex items-center justify-center w-full h-[400px]">
        {/* Concentric Squares with Fibonacci-like scaling and Glow */}
        {squares.map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-cyan-400 opacity-80"
            style={{
              width: `${(i + 1) * 80}px`,
              height: `${(i + 1) * 80}px`,
              boxShadow: '0 0 15px #00FFCC, inset 0 0 15px #00FFCC',
              borderRadius: '2px',
              animation: `pulse_square ${2 + i}s infinite ease-in-out`
            }}
          >
            {/* Alpha Gates */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan-200 shadow-[0_0_10px_#fff]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan-200 shadow-[0_0_10px_#fff]" />
          </div>
        ))}

        {/* Central Cryptographic Keys */}
        <div className="z-10 flex flex-col items-center justify-center space-y-3 text-2xl font-bold tracking-widest animate-pulse">
          {copticKeys.map((key, i) => (
            <span key={i} className="drop-shadow-[0_0_10px_#00FFCC]">{key}</span>
          ))}
        </div>

        {/* Live Economic Feed Overlay */}
        <div className="absolute top-0 right-0 p-4 border border-cyan-500/20 bg-black/40 backdrop-blur-md rounded text-[8px] uppercase tracking-[0.2em] space-y-2 hidden md:block">
           <div className="text-cyan-200 border-b border-cyan-500/30 pb-1 font-bold">ICCH_STAKING_LIVE</div>
           <div className="flex justify-between gap-4">
             <span>Base_APR:</span>
             <span className="text-white">{data?.economics?.base_apr || "10.0%"}</span>
           </div>
           <div className="space-y-1 opacity-80">
             <div className="text-[7px] text-cyan-500/60">Node_Bonuses:</div>
             {data?.economics?.bonus_tiers?.map((tier: string, i: number) => (
               <div key={i} className="flex justify-between gap-2">
                 <span className="truncate max-w-[100px]">{tier.split('receive')[0].replace('Operators running', '').trim()}</span>
                 <span className="text-emerald-400">+{tier.split('receive')[1]?.trim().split(' ')[0] || "..."}</span>
               </div>
             )) || (
               <>
                 <div className="flex justify-between"><span>1-5 Nodes:</span><span className="text-emerald-400">+2%</span></div>
                 <div className="flex justify-between"><span>6-10 Nodes:</span><span className="text-emerald-400">+5%</span></div>
                 <div className="flex justify-between"><span>10+ Nodes:</span><span className="text-emerald-400">+10%</span></div>
               </>
             )}
           </div>
        </div>
      </div>

      <div className="pb-8 flex flex-col items-center">
        <div className="w-16 h-10 border border-purple-500 flex items-center justify-center relative">
           <div className="w-6 h-6 border-2 border-purple-400 rounded-full flex items-center justify-center shadow-[0_0_15px_#8A2BE2]">
             <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]" />
           </div>
        </div>
        <p className="mt-4 text-[10px] text-purple-400 uppercase tracking-[0.3em] opacity-70">
          Sign of Benediction Seal // Treasury 52 Activated
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse_square {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
      `}} />
    </div>
  );
};

export default Treasury52;
