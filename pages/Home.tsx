
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EVENTS } from '../constants';

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Calculate actual event count dynamically
  const eventCount = EVENTS.length;

  useEffect(() => {
    const targetDate = new Date('2026-03-27T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0')
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">EXCELLENCE CULTURAL ASSOCIATION INITIATES</span>
            <h1 className="glitch-text text-white text-7xl md:text-9xl font-black leading-none tracking-tighter">
              TANTRA
            </h1>
            <h2 className="text-white/80 text-lg md:text-2xl font-light uppercase tracking-widest mt-4">
              A New Dimension of Culture.
            </h2>
          </div>
          
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed text-sm md:text-base border-l border-primary/40 pl-6 text-left">
            Enter the vortex of futuristic excellence. A collision of high-tech innovation and ancestral rhythm. 
            <span className="text-primary ml-2 font-bold font-mono">Sys.admin access granted.</span>
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
            <Link 
              to="/events" 
              className="group relative px-10 py-5 bg-primary text-white font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(242,13,13,0.5)]"
            >
              <span className="relative z-10">Enter the Vortex</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity font-black">ACCESS GRANTED</span>
            </Link>
            <Link to="/schedule" className="px-8 py-5 border border-primary/30 text-white/70 font-bold uppercase tracking-widest text-xs hover:border-primary hover:text-white transition-all text-center">
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-primary/20 bg-accent-dark/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard label="Network Density" value="2000+" sub="Walk-in Members" />
            <StatCard label="Operational Units" value={String(eventCount)} sub="Active Events Listed" />
            <StatCard label="Event Magnitude" value="Elite" sub="Biggest Cultural Fest" />
          </div>
        </div>
      </section>

      {/* Timer Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h3 className="text-white text-xl font-bold uppercase tracking-[0.3em] mb-12 italic">Countdown to Blast</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimerBox value={timeLeft.days} label="Days" />
          <TimerBox value={timeLeft.hours} label="Hours" />
          <TimerBox value={timeLeft.minutes} label="Minutes" />
          <TimerBox value={timeLeft.seconds} label="Seconds" />
        </div>
        <p className="mt-8 text-primary/40 font-mono text-[10px] tracking-[0.5em] uppercase">Target Date: 27th March 2026</p>
      </section>

      {/* Sector Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20" id="events">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-primary mb-4">
              <span className="h-px w-10 bg-primary"></span>
              <p className="text-xs font-black uppercase tracking-[0.4em]">The Vortex Experience</p>
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter">
              High-Tech Cultural Fusion
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-sm border-l-2 border-primary pl-4 uppercase">
            Immerse yourself in a celebration featuring asymmetrical grids and technical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px]">
          <div className="md:col-span-8 group relative overflow-hidden rounded-lg scanline">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(10,5,5,0.9) 0%, transparent 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO-PXpNZ98GYYVa35yvkZkrJhTt2qYK45luKW9FlnIedmdHerNgDMnxdjy6Ey4sWO6nkFcJHMlr38-zTVrSVrH57LepXpci2fWI5lPnwyaInA-hFfl099loG0Gj0Oq77BzQ2XcvULWlnospwiIz6GrL2dQ_ltVi61iw49QUukdcxbC-7QNwG3otzWRZx2L6qCasIwt4Tq7nySkeoimbbXb2-dBSq4Sps_xnrFHOBCYQEc9dFqzKDy9KtFG8JfRp-W3I7PtisIP8eQ")`
              }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-primary text-xs font-black uppercase tracking-widest mb-2">Sector 01</p>
              <h4 className="text-white text-3xl font-black uppercase tracking-tighter">Acoustics</h4>
              <p className="text-white/60 text-sm mt-2">Sonic waves in the digital void</p>
            </div>
          </div>

          <div className="md:col-span-4 group relative overflow-hidden rounded-lg scanline">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(10,5,5,0.9) 0%, transparent 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtmrAyczinbLK3HhlP1GDFHZoDBuudNFU73V9YdTWUOCK9iSBY05F0--zMN66WE4oXfP6c3YS27i92OT-hlMMPr7WFLJ5Tm5g6iCYood_s1h35K1x2ZybO-C5f0DBOexZfiQFyc3HQBGIzZg_gUJIVUji-TKmdNVx9RaiJhuwVczlZ6K2lBS0fqRNJ6w0j76fsC9RFJn9f7RUHAfICJ9KWrYdh8besERb_L8miErnyGPZaC61ErsfleMBIDwFxU21yJYasFkBXjmw")`
              }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-primary text-xs font-black uppercase tracking-widest mb-2">Sector 02</p>
              <h4 className="text-white text-2xl font-black uppercase tracking-tighter">Kinetic</h4>
              <p className="text-white/60 text-sm mt-2">Cybernetic motion</p>
            </div>
          </div>

          <div className="md:col-span-4 group relative overflow-hidden rounded-lg scanline">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(10,5,5,0.9) 0%, transparent 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCb-HoNN0spUJR4rjbXoFBK5cS9iGRkZUiWkNOnWQ0OaLJO-zi0rojuM9-0GZrSeGynMUFubh8Cy5jb7apS5-KM6-MKJOehXVly3abBpZcA9fuW-RgTqUbUXrHW2s3bSderdDZZR6YJW1Ldhb_wPYd61M2NeD2aboRKI3CkMALh4bWXb9XOANpczl-nfybKw4TB9moQAETfX1F-PSZYBHxYalHCNGJdPTZ52FsgHsN8NYD7B_4saHmyiFfrhZNUNEHMF932wjicvj0")`
              }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-primary text-xs font-black uppercase tracking-widest mb-2">Sector 03</p>
              <h4 className="text-white text-2xl font-black uppercase tracking-tighter">Innovation</h4>
              <p className="text-white/60 text-sm mt-2">Future hardware</p>
            </div>
          </div>

          <div className="md:col-span-8 group relative overflow-hidden rounded-lg scanline">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(10,5,5,0.9) 0%, transparent 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDK2g3Ct58GhFS1VvsCJ8NcKOeytInt4i4vz8ngATUQdDoQckNgYJsXi20xti3kVUvXXqGqfSGgjUf93oeyHVfd6Al8IZ4agAd9JYcTbmu1COqk1w-wKU6ycW2NzdjT4ez3H_A4m2c4NJJXd1t2Flr86TDMqbtJH9cRIJTf1rodJRHptaND0tNIeWsogspwVrG3CNFzx507tzUktJ57gWaJRu3hN7JzEpnKnxE6BA8zgaFyReRZuXG0wKqk_A3nu_MOauqMT1fSe20")`
              }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-primary text-xs font-black uppercase tracking-widest mb-2">Sector 04</p>
              <h4 className="text-white text-3xl font-black uppercase tracking-tighter">Canvas</h4>
              <p className="text-white/60 text-sm mt-2">Digital visual synthesis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid CTA */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-16 flex flex-col items-center text-center tech-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <span className="material-symbols-outlined text-primary text-6xl mb-6 relative z-10">dynamic_form</span>
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter relative z-10">Connect to the Grid</h2>
          <p className="text-white/60 max-w-lg mb-10 relative z-10">Receive real-time data transmissions regarding event timings, workshop slots, and priority access passes.</p>
          <div className="w-full max-w-md flex flex-col md:flex-row gap-4 relative z-10">
            <input 
              className="flex-1 bg-black border border-primary/30 rounded px-4 py-4 text-white placeholder:text-white/20 focus:border-primary outline-none transition-all uppercase text-xs tracking-widest" 
              placeholder="USER_ID@NETWORK.IO" 
              type="email"
            />
            <button className="bg-primary text-white font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white hover:text-primary transition-all duration-300">Authorize</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; sub: string }> = ({ label, value, sub }) => (
  <div className="tech-border relative p-8 flex flex-col items-center justify-center text-center bg-black/40 border border-primary/10 overflow-hidden group">
    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2 relative z-10">{label}</p>
    <p className="text-white text-5xl font-black tracking-tighter relative z-10">{value}</p>
    <p className="text-white/40 text-[10px] mt-2 uppercase relative z-10">{sub}</p>
  </div>
);

const TimerBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center gap-4">
    <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center border-2 border-primary/40 bg-primary/5 rounded-xl tech-border relative">
      <p className="text-white text-4xl md:text-5xl font-black">{value}</p>
    </div>
    <p className="text-primary text-xs font-bold uppercase tracking-widest">{label}</p>
  </div>
);

export default Home;
