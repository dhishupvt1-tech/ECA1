
import React, { useState } from 'react';
import { EVENTS } from '../constants';
import { SectorType } from '../types';

const Gallery: React.FC = () => {
  const [activeSector, setActiveSector] = useState<SectorType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = EVENTS.filter(e => {
    const matchesSector = activeSector === 'All' || e.sector === activeSector;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  const sectors: { name: SectorType; icon: string }[] = [
    { name: 'All', icon: 'grid_view' },
    { name: 'Music', icon: 'equalizer' },
    { name: 'Dance', icon: 'settings_accessibility' },
    { name: 'Tech', icon: 'terminal' },
    { name: 'Art', icon: 'palette' },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-primary mb-2">
            <span className="h-1 w-12 bg-primary"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">System Online</span>
          </div>
          <h1 className="text-white text-6xl font-black leading-tight tracking-[-0.033em] uppercase">Events Gallery</h1>
          <p className="text-white/60 text-lg font-light leading-relaxed mt-4">
            Access the master event index. Filter through diverse cultural sectors and synchronize your schedule with the Tantra network.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="flex items-center rounded-lg bg-white/5 border border-white/10 px-4 py-2 gap-2">
            <span className="material-symbols-outlined text-white/40">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder-white/30 w-full md:w-64 uppercase tracking-widest"
              placeholder="Query events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-10 overflow-x-auto">
        <div className="flex border-b border-white/10 min-w-max">
          {sectors.map(sector => (
            <button
              key={sector.name}
              onClick={() => setActiveSector(sector.name)}
              className={`flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.1em] transition-all border-b-2 ${
                activeSector === sector.name 
                  ? 'border-primary text-white font-bold' 
                  : 'border-transparent text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`material-symbols-outlined text-xl ${activeSector === sector.name ? 'text-primary' : ''}`}>
                {sector.icon}
              </span>
              {sector.name === 'All' ? 'All Sectors' : sector.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-white text-2xl font-bold uppercase italic tracking-widest">Featured Highlights</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {filteredEvents.map(event => (
          <GalleryCard key={event.id} event={event} />
        ))}
      </div>

      {/* Fixed: Changed 'class' to 'className' */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-9xl">database</span>
        </div>
        <h3 className="text-primary font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          Ancillary Modules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AncillaryItem icon="theater_comedy" title="Stage Play" sub="Auditorium Main" />
          <AncillaryItem icon="sports_esports" title="E-Sports Arena" sub="Server Room 4" />
          <AncillaryItem icon="photo_camera" title="Lens Craft" sub="Digital Lab B" />
        </div>
      </div>
    </div>
  );
};

const GalleryCard: React.FC<{ event: any }> = ({ event }) => (
  <div className="group relative border border-white/10 bg-accent-dark/40 rounded-xl overflow-hidden scanline aspect-[3/4]">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(5, 5, 5, 0.9) 10%, transparent 60%), url('${event.image}')`
      }}
    ></div>
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${
          event.status === 'Live' ? 'bg-primary/20 text-primary border-primary/30' : 'bg-white/10 text-white/60 border-white/20'
        }`}>
          {event.status}
        </span>
        <span className="text-white/40 text-[10px] uppercase tracking-tighter">Sector: {event.sector}</span>
      </div>
      <h3 className="text-white text-xl font-black leading-none mb-4 uppercase group-hover:text-primary transition-colors">
        {event.title}
      </h3>
      <button className="w-full bg-white text-black py-2 rounded font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300">
        View Details
      </button>
    </div>
  </div>
);

const AncillaryItem: React.FC<{ icon: string; title: string; sub: string }> = ({ icon, title, sub }) => (
  // Fixed: Changed 'class' to 'className'
  <div className="flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-white/5 hover:border-primary/50 transition-all group cursor-pointer">
    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div>
      <h4 className="text-white font-bold uppercase">{title}</h4>
      <p className="text-white/40 text-xs">{sub}</p>
    </div>
  </div>
);

export default Gallery;