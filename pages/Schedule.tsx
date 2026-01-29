
import React, { useState } from 'react';
import { EVENTS } from '../constants';

type FilterType = 'on-stage' | 'day-1' | 'day-2' | 'online';

const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterType>('on-stage');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getFilteredEvents = () => {
    switch (activeTab) {
      case 'on-stage': return EVENTS.filter(e => e.type === 'on-stage');
      case 'day-1': return EVENTS.filter(e => e.type === 'off-stage' && e.day === 1);
      case 'day-2': return EVENTS.filter(e => e.type === 'off-stage' && e.day === 2);
      case 'online': return EVENTS.filter(e => e.type === 'online');
      default: return [];
    }
  };

  const currentEvents = getFilteredEvents();
  const session1 = currentEvents.filter(e => e.session === 1);
  const session2 = currentEvents.filter(e => e.session === 2);

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="h-[1px] w-12 bg-primary"></span>
          <span className="text-xs font-bold tracking-[0.3em] uppercase">Temporal Synchronization</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
          System<br/><span className="text-primary italic">Schedule</span>
        </h1>
        <p className="text-white/40 mt-6 max-w-xl text-lg uppercase tracking-tight font-light border-l border-primary/30 pl-6">
          Real-time timetable for the Tantra cultural network. Ensure your neural link is active for live updates on session transitions.
        </p>
      </div>

      {/* Temporal Navigation Tabs */}
      <div className="mb-12 border-b border-white/10 flex flex-wrap gap-4 overflow-x-auto pb-px">
        {[
          { id: 'on-stage', label: 'On Stage', icon: 'podium' },
          { id: 'day-1', label: 'Day 1 Schedule', icon: 'calendar_today' },
          { id: 'day-2', label: 'Day 2 Schedule', icon: 'calendar_month' },
          { id: 'online', label: 'Online Streams', icon: 'router' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as FilterType);
              setExpandedId(null);
            }}
            className={`px-8 py-4 font-black text-sm uppercase tracking-[0.2em] border-b-2 flex items-center gap-2 transition-all min-w-max ${
              activeTab === tab.id 
                ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(242,13,13,0.3)]' 
                : 'text-white/40 hover:text-white border-transparent'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{tab.icon}</span> 
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {activeTab === 'on-stage' || activeTab === 'online' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentEvents.map(event => (
              <ScheduleCard 
                key={event.id} 
                event={event} 
                isExpanded={expandedId === event.id}
                onToggle={() => setExpandedId(expandedId === event.id ? null : event.id)}
              />
            ))}
          </div>
        ) : (
          <>
            {/* Session 01 Timetable */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Phase 01: Morning</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                <span className="text-primary/50 text-[10px] font-mono uppercase tracking-[0.2em]">09:00 - 13:00 HRS</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {session1.map(event => (
                  <ScheduleCard 
                    key={event.id} 
                    event={event} 
                    isExpanded={expandedId === event.id}
                    onToggle={() => setExpandedId(expandedId === event.id ? null : event.id)}
                  />
                ))}
              </div>
            </div>

            {/* Session 02 Timetable */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Phase 02: Afternoon</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                <span className="text-primary/50 text-[10px] font-mono uppercase tracking-[0.2em]">14:00 - 18:00 HRS</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {session2.map(event => (
                  <ScheduleCard 
                    key={event.id} 
                    event={event} 
                    isExpanded={expandedId === event.id}
                    onToggle={() => setExpandedId(expandedId === event.id ? null : event.id)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ScheduleCard: React.FC<{ event: any; isExpanded: boolean; onToggle: () => void }> = ({ event, isExpanded, onToggle }) => (
  <div className={`group border transition-all duration-500 rounded-xl overflow-hidden bg-accent-dark/20 scanline relative flex flex-col ${
    isExpanded ? 'border-primary shadow-[0_0_30px_rgba(242,13,13,0.2)]' : 'border-white/10 hover:border-primary/50'
  }`}>
    <div className="aspect-video relative overflow-hidden">
      <img 
        alt={event.title} 
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
        src={event.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-primary/30 px-3 py-1 rounded text-primary text-[10px] font-mono font-bold uppercase tracking-widest">
        {event.location}
      </div>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-primary text-sm">schedule</span>
            <span className="text-primary font-bold text-[10px] tracking-widest uppercase">{event.time}</span>
          </div>
          <h3 className="text-white text-2xl font-black uppercase group-hover:text-primary transition-colors leading-tight">
            {event.title}
          </h3>
        </div>
      </div>
      <p className="text-white/60 text-xs mb-6 flex-1 italic">{event.description}</p>
      
      {/* Expandable Guidelines Section */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] mb-6' : 'max-h-0'}`}>
        <div className="p-4 bg-black/60 border border-primary/20 rounded-lg tech-border relative">
          <div className="flex items-center gap-2 mb-4 text-primary text-[10px] font-black tracking-widest uppercase">
            <span className="material-symbols-outlined text-sm">terminal</span> System Guidelines
          </div>
          <ul className="space-y-3">
            {event.guidelines.map((g: string, i: number) => (
              <li key={i} className="flex gap-3 text-[11px] text-white/70 font-mono leading-relaxed">
                <span className="text-primary font-bold">::</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button 
        onClick={onToggle}
        className={`w-full py-3 rounded text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
          isExpanded 
            ? 'bg-primary text-white shadow-inner' 
            : 'border border-primary/40 text-primary hover:bg-primary/10'
        }`}
      >
        <span className="material-symbols-outlined text-sm">
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
        {isExpanded ? 'Collapse Protocol' : 'View Mission Details'}
      </button>
    </div>
  </div>
);

export default Schedule;
