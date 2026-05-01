"use client"

import { Orbit, Radio, Shield } from "lucide-react";

const ConstellationMap = () => {
  const satellites = [
    { name: "CTC-0", lat: "-0.0000°", lon: "0.0000°", alt: "550 km", status: "Operational" },
    { name: "CTC-1A", lat: "10.1234° N", lon: "20.5678° E", alt: "550 km", status: "Operational" },
    { name: "CTC-1B", lat: "-15.9876° S", lon: "45.1234° W", alt: "550 km", status: "Operational" },
    { name: "CTC-1C", lat: "5.4321° N", lon: "30.8765° E", alt: "550 km", status: "Operational" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-black text-cyan-400 font-mono overflow-hidden rounded-xl border border-cyan-500/20 p-8">
      <div className="w-full max-w-2xl relative">
        {/* Orbital Header */}
        <div className="flex justify-between items-center mb-8 border-b border-cyan-500/30 pb-4">
          <div className="flex items-center gap-3">
            <Orbit className="w-6 h-6 animate-spin-slow text-cyan-500" />
            <h3 className="text-lg font-bold tracking-tighter uppercase">SpaceCoin_Constellation_Live</h3>
          </div>
          <div className="text-[10px] text-cyan-500/60">
            SYNC_TIME: 2026-05-01_03:16_Z
          </div>
        </div>

        {/* Satellite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {satellites.map((sat, i) => (
            <div key={i} className="p-4 bg-cyan-950/20 border border-cyan-500/20 rounded flex flex-col gap-2 relative overflow-hidden group hover:border-cyan-400 transition-colors">
              <div className="flex justify-between items-start z-10">
                <div className="text-xs font-bold text-white">{sat.name}</div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] text-emerald-400 uppercase tracking-tighter">{sat.status}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-[9px] uppercase tracking-widest text-cyan-300/80 z-10">
                <div>Lat: <span className="text-white">{sat.lat}</span></div>
                <div>Lon: <span className="text-white">{sat.lon}</span></div>
                <div>Alt: <span className="text-white">{sat.alt}</span></div>
                <div className="flex items-center gap-1">
                  <Radio className="w-3 h-3 text-cyan-500" />
                  Signal: MAX
                </div>
              </div>

              {/* Background Scan Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>
          ))}
        </div>

        {/* Global Network Status HUD */}
        <div className="mt-8 p-4 border border-cyan-500/10 bg-cyan-900/5 rounded-lg flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="text-[10px] uppercase tracking-widest text-cyan-500/60">Coverage_Integrity</div>
              <div className="flex gap-1">
                {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="w-3 h-1 bg-cyan-400" />)}
              </div>
           </div>
           <div className="flex items-center gap-2">
             <Shield className="w-4 h-4 text-cyan-500" />
             <span className="text-[10px] text-white font-bold">99.9% Uptime</span>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default ConstellationMap;
