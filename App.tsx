
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Events from './pages/Events';
import Team from './pages/Team';
import Register from './pages/Register';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioCtxRef.current && ambientGainRef.current) {
      const targetGain = isMuted ? 0.03 : 0; // Gentle volume
      ambientGainRef.current.gain.setTargetAtTime(targetGain, audioCtxRef.current.currentTime, 0.5);
    }
  };

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;

    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioCtxRef.current = ctx;

    // Ambient Drone Setup
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0; // Start muted
    masterGain.connect(ctx.destination);
    ambientGainRef.current = masterGain;

    // Layer 1: Deep Hum
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.value = 55; // Low A
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.25; // Very slow breathe
    lfoGain.gain.value = 5;
    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);
    
    const layer1Gain = ctx.createGain();
    layer1Gain.gain.value = 0.5;
    osc1.connect(layer1Gain);
    layer1Gain.connect(masterGain);

    // Layer 2: Shimmering Filtered Noise
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400;
    filter.Q.value = 10;

    whiteNoise.connect(filter);
    filter.connect(masterGain);

    osc1.start();
    lfo.start();
    whiteNoise.start();
    
    oscillatorsRef.current = [osc1, lfo];
  }, []);

  const triggerVortexSound = useCallback(() => {
    if (!audioCtxRef.current) {
      initAudio();
      return;
    }
    
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.15);

    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.15);

    if ('vibrate' in navigator) navigator.vibrate(10);
  }, [initAudio]);

  useEffect(() => {
    const handleGlobalClick = () => {
      if (!audioCtxRef.current) initAudio();
      if (audioCtxRef.current?.state === 'suspended') audioCtxRef.current.resume();
      triggerVortexSound();
    };

    document.addEventListener('mousedown', handleGlobalClick);
    return () => document.removeEventListener('mousedown', handleGlobalClick);
  }, [triggerVortexSound, initAudio]);

  return (
    <Router>
      <div className="relative min-h-screen bg-background-dark text-white selection:bg-primary selection:text-white">
        <div className="fixed inset-0 vortex-grid pointer-events-none opacity-40 z-0"></div>
        
        <Navigation isMuted={isMuted} onToggleMute={toggleMute} />
        
        <main className="relative z-10">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
