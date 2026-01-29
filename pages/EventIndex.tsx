
import React, { useState } from 'react';
import { EVENTS } from '../constants';

const EventIndex: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Day 1' | 'Day 2' | 'Online'>('Day 1');

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="h-[1px] w-12 bg-primary"></span>
          <span className="text-xs font-bold tracking-[0.3em] uppercase">Sector: Scheduled Events</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
          Event<br/><span className="text-primary italic">Index</span>
        </h1>
        <p className="text-white/40 mt-6 max-w-xl text-lg uppercase tracking-tight font-light border-l border-primary/30 pl-6">
          Real-time synchronization for the Tantra cultural network. Filter by temporal phase or deployment stage.
        </p>
      </div>

      <div className="mb-12 border-b border-white/10 flex flex-wrap gap-4 overflow-x-auto pb-px">
        {(['Day 1', 'Day 2', 'Online'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 font-black text-sm uppercase tracking-[0.2em] border-b-2 flex items-center gap-2 transition-all ${
              activeTab === tab 
                ? 'bg-primary text-white border-primary' 
                : 'text-white/40 hover:text-white border-transparent'
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {tab === 'Day 1' ? 'calendar_today' : tab === 'Day 2' ? 'calendar_month' : 'router'}
            </span> 
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-20">
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">podium</span>
              <h2 className="text-white text-3xl font-black uppercase tracking-tighter">On-Stage Deployment</h2>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
            <span className="text-primary/50 text-xs font-mono uppercase tracking-widest">Zone_01</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {EVENTS.filter(e => e.type === 'on-stage').map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">developer_board</span>
              <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Off-Stage Sessions</h2>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
            <span className="text-primary/50 text-xs font-mono uppercase tracking-widest">Lab_Alpha</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS.filter(e => e.type === 'off-stage').map(event => (
              <MiniEventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const EventCard: React.FC<{ event: any }> = ({ event }) => (
  <div className="group border border-white/10 bg-accent-dark/40 rounded-xl overflow-hidden scanline relative flex flex-col md:flex-row hover:border-primary/50 transition-all duration-500 shadow-[0_0_20px_rgba(242,13,13,0.05)]">
    <div className="w-full md:w-2/5 aspect-video md:aspect-square relative overflow-hidden">
      <img 
        alt={event.title} 
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
        src={event.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-accent-dark/40"></div>
    </div>
    <div className="flex-1 p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-primary font-bold text-[10px] tracking-widest uppercase mb-1 block">{event.time}</span>
          <h3 className="text-white text-2xl font-black uppercase group-hover:text-primary transition-colors">{event.title}</h3>
        </div>
        <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">
          {event.sector === 'Music' ? 'graphic_eq' : 'bolt'}
        </span>
      </div>
      <p className="text-white/60 text-sm mb-6 flex-1">{event.description}</p>
      
      {event.guidelines && (
        <details className="group/guidelines mb-4">
          <summary className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/60 cursor-pointer hover:text-primary transition-colors select-none">
            <span className="material-symbols-outlined text-sm">terminal</span> System Guidelines
          </summary>
          <div className="p-3 bg-black/40 border border-white/5 rounded text-[11px] text-white/50 space-y-2 font-mono mt-2">
            {event.guidelines.map((g: string, i: number) => <p key={i}>&gt; {g}</p>)}
          </div>
        </details>
      )}

      <button className="w-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 text-white py-2 rounded text-xs font-bold uppercase tracking-widest transition-all">
        Initialize Entry
      </button>
    </div>
  </div>
);

const MiniEventCard: React.FC<{ event: any }> = ({ event }) => (
  <div className="group border border-white/5 bg-black/40 p-6 rounded-xl relative overflow-hidden transition-all hover:border-primary/40 hover:shadow-[0_0_20px_rgba(242,13,13,0.1)]">
    <div className="flex justify-between items-start mb-6">
      <div className="p-2 bg-primary/10 rounded">
        <span className="material-symbols-outlined text-primary">
          {event.sector === 'Tech' ? 'memory' : event.sector === 'Art' ? 'brush' : 'sports_esports'}
        </span>
      </div>
      <span className="text-[10px] font-mono text-white/40 uppercase">{event.time}</span>
    </div>
    <h4 className="text-white font-black uppercase text-lg mb-2 group-hover:text-primary transition-colors">{event.title}</h4>
    <p className="text-white/40 text-xs leading-relaxed mb-6">{event.description}</p>
    <div className="text-[10px] font-bold text-primary/60 uppercase tracking-widest flex items-center gap-2">
      <span className="material-symbols-outlined text-sm">settings</span> Protocol: Ready
    </div>
  </div>
);

export default EventIndex;
