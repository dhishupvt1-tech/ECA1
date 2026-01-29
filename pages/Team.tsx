
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16">
      <div className="text-center mb-16">
        {/* Fixed: Changed 'class' to 'className' */}
        <p className="text-primary text-xs font-mono font-medium tracking-[0.4em] uppercase opacity-80 mb-4 animate-pulse">
          [ SECURE_ACCESS_GRANTED ]
        </p>
        <h1 className="text-white tracking-[0.1em] text-4xl md:text-6xl font-black leading-tight uppercase drop-shadow-sm mb-6">
          Excellence Association
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 md:w-20 bg-primary/50"></div>
          <p className="text-primary text-sm font-bold tracking-[0.2em] px-4 uppercase">Command Personnel Database</p>
          <div className="h-[1px] w-12 md:w-20 bg-primary/50"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {TEAM.map(member => (
          <div 
            key={member.id} 
            className="group relative flex flex-col gap-4 text-center pb-8 p-6 border border-primary/20 rounded-xl bg-background-dark/40 backdrop-blur-md hover:border-primary/80 transition-all duration-500"
          >
            {/* HUD Corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
            
            <div className="relative flex justify-center mt-4">
              <div className="relative size-32 rounded-full border-2 border-primary p-1 group-hover:shadow-[0_0_30px_rgba(242,13,13,0.3)] transition-all">
                <div 
                  className="w-full h-full rounded-full bg-center bg-no-repeat bg-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  style={{ backgroundImage: `url("${member.image}")` }}
                ></div>
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-fast pointer-events-none"></div>
              </div>
            </div>

            <div className="space-y-1 mt-4">
              <p className="text-white text-xl font-bold leading-tight tracking-wider uppercase group-hover:text-primary transition-colors">{member.name}</p>
              <p className="text-primary/80 text-xs font-bold leading-normal tracking-widest uppercase">{member.role}</p>
              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-white/60 text-[10px] font-mono leading-relaxed uppercase tracking-wider">
                  ID: {member.id.replace('t','00')} | LEVEL: {member.level}<br/>
                  SPEC: {member.specialization}<br/>
                  DIRECTIVE: {member.directive}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="relative p-8 md:p-12 border border-primary/30 rounded-xl bg-background-dark/60 backdrop-blur-lg overflow-hidden tech-border">
        {/* Fixed: Changed 'class' to 'className' */}
        <div className="absolute top-0 right-0 p-6 opacity-20">
          <span className="material-symbols-outlined text-6xl text-primary">security</span>
        </div>
        <h2 className="text-white text-3xl font-black leading-tight tracking-widest pb-10 uppercase flex items-center gap-4">
          <span className="text-primary">/</span> Contact the Command
        </h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-primary text-[10px] font-mono tracking-widest ml-1 uppercase">[ Source_Name ]</label>
            <input 
              className="w-full bg-black border border-primary/30 rounded px-4 py-4 text-white placeholder:text-white/10 focus:border-primary outline-none transition-all uppercase text-xs tracking-widest" 
              placeholder="Enter Identifier..." 
            />
          </div>
          <div className="space-y-2">
            <label className="text-primary text-[10px] font-mono tracking-widest ml-1 uppercase">[ Encrypted_Email ]</label>
            <input 
              className="w-full bg-black border border-primary/30 rounded px-4 py-4 text-white placeholder:text-white/10 focus:border-primary outline-none transition-all uppercase text-xs tracking-widest" 
              placeholder="secure_address@node.net" 
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-primary text-[10px] font-mono tracking-widest ml-1 uppercase">[ Transmission_Data ]</label>
            <textarea 
              className="w-full bg-black border border-primary/30 rounded px-4 py-4 text-white placeholder:text-white/10 focus:border-primary outline-none transition-all uppercase text-xs tracking-widest resize-none" 
              placeholder="Initiating communication sequence..." 
              rows={4}
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button className="group flex items-center gap-3 bg-primary hover:bg-red-600 text-white font-black tracking-[0.2em] px-12 py-5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(242,13,13,0.5)]">
              <span>TRANSMIT</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Team;