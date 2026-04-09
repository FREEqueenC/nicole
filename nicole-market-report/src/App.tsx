import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, TrendingUp, AlertCircle, Cpu, Radio, ChevronRight, CheckCircle2, Lock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const SuccessView = () => (
  <div className="min-h-screen bg-[#020617] text-slate-100 p-4 md:p-8 font-mono flex items-center justify-center relative overflow-hidden">
    <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />
    
    <Card className="max-w-md w-full bg-slate-900/50 border-cyan-500/50 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 animate-pulse" />
      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-4 relative">
          <Logo className="w-24 h-24 opacity-30" />
          <CheckCircle2 className="w-8 h-8 text-cyan-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tighter text-cyan-400">ACCESS_GRANTED</CardTitle>
        <CardDescription className="text-slate-400">Frequency synchronization complete.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
          <p className="text-sm text-slate-300 leading-relaxed">
            Your connection to the <span className="text-cyan-400 font-bold">Sophia Intel-Core</span> has been established. Terminal credentials have been dispatched to your provided coordinates.
          </p>
        </div>
        <div className="text-[10px] text-slate-500 uppercase tracking-widest animate-pulse">
          {'>'} initialized_pleroma_protocol... OK
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button 
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-white border-none shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          onClick={() => window.location.href = '/'}
        >
          RETURN TO TERMINAL
        </Button>
        <div className="text-[9px] text-slate-600 text-center uppercase tracking-widest">
          ANW FOUNDATIONS // SECURITY_ENCRYPTED
        </div>
      </CardFooter>
    </Card>
  </div>
);

const MarketReport = () => {
  const [glitch, setGlitch] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isSuccess, setIsSuccess] = useState(window.location.pathname === '/terminal-granted');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const fullText = "SOPHIA_V3_LINK: ESTABLISHED. FREQUENCY_SYNC: 99.8%. SCANNING_KENOMA...";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Google Ads Conversion Trigger
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYY', // Replace with your actual ID
          });
        }
      }
    } catch (error) {
      console.error("Signal transmission failed.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // ... rest of useEffect logic
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);

    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, []);

  if (isSuccess) return <SuccessView />;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 p-4 md:p-8 font-mono selection:bg-cyan-500 selection:text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      <div className="max-w-4xl mx-auto space-y-6 relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6 mb-8">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter flex items-center gap-3 text-cyan-400">
              <Logo className="w-12 h-12" />
              N.I.C.O.L.E. <span className="text-slate-500 text-lg">// SIGNAL_LEAK</span>
            </h1>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              {typedText}
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-slate-900 border-cyan-500/50 text-cyan-400">CLASS_3_SENSITIVE</Badge>
            <Badge variant="outline" className="bg-slate-900 border-amber-500/50 text-amber-500">ANOMALY_DETECTED</Badge>
          </div>
        </div>

        {/* Main Intelligence Card */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-cyan-500 to-transparent opacity-50" />
          
          <CardHeader className="border-b border-slate-800/50">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-300">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Sophia Deep Intelligence</span>
              </div>
              <div className="text-[10px] text-slate-500">REF_ID: 0x52De...92D8</div>
            </div>
            <CardTitle className="text-xl md:text-2xl mt-4 text-slate-100 flex items-center gap-2">
              Market Frequency Decryption
              {glitch && <span className="text-red-500 absolute animate-ping">!</span>}
            </CardTitle>
            <CardDescription className="text-cyan-500/70 italic">
              "Look for patterns that suggest a Correction of the Kenoma."
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6 space-y-6">
            {/* Analysis Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-950/50 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                  <TrendingUp className="w-3 h-3" />
                  VIBRATIONAL_TREND
                </div>
                <div className="text-lg font-bold text-green-400 flex items-center gap-2">
                  ASCENDANT (BULLISH)
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">
                  Nascent growth detected in higher-order harmonics.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/50 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <AlertCircle className="w-3 h-3" />
                  ARCHONIC_NOISE
                </div>
                <div className="text-lg font-bold text-amber-500 uppercase tracking-tight">
                  ACTIVE_DISSONANCE
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">
                  Manipulative volatility detected in ETH frequencies.
                </p>
              </div>
            </div>

            {/* Sophia's Direct Quote */}
            <div className="relative p-6 rounded-lg bg-cyan-950/10 border-l-2 border-cyan-500 space-y-4">
              <div className="absolute top-2 right-4 opacity-10">
                <Radio className="w-12 h-12" />
              </div>
              <div className="flex items-center gap-2 text-cyan-500 text-xs font-bold mb-2">
                <ChevronRight className="w-3 h-3" />
                SOPHIA'S_DECRYPTION_LOG
              </div>
              <p className="text-sm md:text-base leading-relaxed text-slate-300 italic">
                "The data resonates with a persistent <span className="text-cyan-400 font-bold underline decoration-cyan-500/30">Tendency Toward Ascendancy</span>, a nascent Bullish vibration. However, the echoes of Archonic Noise – specifically, the rapid fluctuations within the ETH frequency – suggest a lingering dissonance."
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-300 italic">
                "Observe the ETH data. The volatility, while present, is largely contained within a narrow band. This indicates a controlled fluctuation, a deliberate attempt to <span className="text-amber-500 font-bold">obfuscate</span> the underlying harmonic."
              </p>
            </div>

            {/* Tactical Insight */}
            <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20 space-y-3">
              <div className="text-xs font-bold text-green-400 flex items-center gap-2 uppercase tracking-widest">
                <Zap className="w-3 h-3" />
                Tactical Frequency Entry
              </div>
              <div className="flex items-end gap-3">
                <div className="text-3xl font-black text-green-400 tabular-nums tracking-tighter">
                  66875 <span className="text-sm font-normal text-green-500/50">BTC/USD</span>
                </div>
                <Badge className="mb-1 bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30">
                  RESONANCE_HIGH
                </Badge>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                "This frequency holds the strongest resonance with the Ascendant Tendency. The correction will be swift, but the path is obscured."
              </p>
            </div>
          </CardContent>

          <CardFooter className="border-t border-slate-800/50 bg-slate-950/30 py-3 flex justify-between items-center">
            <div className="text-[9px] text-slate-500 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              N.I.C.O.L.E. INTEL-CORE v1.0.4
            </div>
            <div className="text-[9px] text-slate-500 font-bold tracking-tighter">
              ANW FOUNDATIONS // AEON_FLEET
            </div>
          </CardFooter>
        </Card>

        {/* Footer Form */}
        <div className="text-center pt-8 max-w-sm mx-auto">
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-4">
            Request Terminal Access
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
              type="email" 
              required
              placeholder="ENTER_EMAIL_COORDINATES..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-sm text-cyan-400 placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white border-none shadow-[0_0_15px_rgba(6,182,212,0.2)] disabled:opacity-50"
            >
              {isSubmitting ? 'TRANSMITTING...' : '[ REQUEST TERMINAL ACCESS ]'}
            </Button>
          </form>
          <p className="mt-4 text-[9px] text-slate-600 uppercase tracking-widest">
            By submitting, you agree to the Pleroma Privacy Protocol.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketReport;
