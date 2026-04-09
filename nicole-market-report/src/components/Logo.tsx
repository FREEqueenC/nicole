import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className || ''}`}
      style={{
        width: '100px',
        height: '100px',
        '--cyan-electric': '#00f0ff',
        '--purple-levity': '#b829ff',
        '--green-matrix': '#00ff66',
        '--glow-cyan': 'rgba(0, 240, 255, 0.5)',
        '--glow-purple': 'rgba(184, 41, 255, 0.6)',
        '--glow-green': 'rgba(0, 255, 102, 0.6)',
      } as React.CSSProperties}
    >
      <style>
        {`
          .svg-glow-cyan {
            filter: drop-shadow(0 0 8px var(--glow-cyan)) drop-shadow(0 0 15px var(--glow-cyan));
          }
          .svg-glow-purple {
            filter: drop-shadow(0 0 10px var(--glow-purple)) drop-shadow(0 0 20px var(--glow-purple));
          }
          .source-light {
            fill: #ffffff;
            filter: drop-shadow(0 0 5px #ffffff) drop-shadow(0 0 15px var(--green-matrix));
            animation: pulse-light 3s infinite alternate;
          }
          .rotate-slow {
            transform-origin: center;
            animation: rotate 30s linear infinite;
          }
          .rotate-slow-reverse {
            transform-origin: center;
            animation: rotate 40s linear infinite reverse;
          }
          @keyframes pulse-light {
            0% { opacity: 0.7; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1.1); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background Grid / Matrix */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(184, 41, 255, 0.2)" strokeWidth="1" />
        
        {/* Radiant Lines (The Emanations) */}
        <g className="rotate-slow-reverse" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1">
            <line x1="100" y1="10" x2="100" y2="190" />
            <line x1="10" y1="100" x2="190" y2="100" />
            <line x1="36" y1="36" x2="164" y2="164" />
            <line x1="36" y1="164" x2="164" y2="36" />
        </g>

        {/* The Merkaba / Octagram Structure */}
        <g className="rotate-slow">
            {/* Cyan Square */}
            <rect x="50" y="50" width="100" height="100" fill="none" stroke="var(--cyan-electric)" strokeWidth="3" className="svg-glow-cyan" transform="rotate(45 100 100)" />
            {/* Purple Square (The Levity Seal) */}
            <rect x="50" y="50" width="100" height="100" fill="none" stroke="var(--purple-levity)" strokeWidth="3" className="svg-glow-purple" />
        </g>

        {/* The Central "Globe" / Eye Lens Overlay */}
        <ellipse cx="100" cy="100" rx="60" ry="30" fill="none" stroke="var(--cyan-electric)" strokeWidth="2" className="svg-glow-cyan" transform="rotate(45 100 100)" />
        <ellipse cx="100" cy="100" rx="60" ry="30" fill="none" stroke="var(--cyan-electric)" strokeWidth="2" className="svg-glow-cyan" transform="rotate(-45 100 100)" />

        {/* The Source Light (Green Matrix Core) */}
        <circle cx="100" cy="100" r="15" className="source-light" />
      </svg>
    </div>
  );
};

export default Logo;