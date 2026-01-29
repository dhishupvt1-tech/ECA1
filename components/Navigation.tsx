
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TANTRA_LOGO } from '../constants';

interface NavigationProps {
  isMuted?: boolean;
  onToggleMute?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMuted, onToggleMute }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Initiate', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] flex h-20 items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-primary">
              {TANTRA_LOGO}
            </div>
            <h2 className="text-white text-2xl font-black uppercase tracking-tighter">Tantra</h2>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white border-b-2 border-primary pb-1'
                    : 'text-white/70 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          {/* Ambient Sound Toggle */}
          <button 
            onClick={onToggleMute}
            className="flex items-center gap-2 p-2 rounded-full border border-primary/20 hover:border-primary/60 transition-all text-primary"
            title={isMuted ? "Initialize Audio Grid" : "Mute System Ambience"}
          >
            <span className={`material-symbols-outlined text-sm ${!isMuted ? 'animate-pulse' : ''}`}>
              {isMuted ? 'volume_off' : 'graphic_eq'}
            </span>
            <span className="hidden lg:inline text-[9px] font-mono uppercase tracking-widest font-black">
              {isMuted ? 'OFFLINE' : 'LIVE_FEED'}
            </span>
          </button>

          <Link
            to="/register"
            className="hidden sm:block bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded font-bold text-xs transition-all shadow-[0_0_15px_rgba(242,13,13,0.3)] uppercase"
          >
            Join Team
          </Link>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background-dark border-b border-primary/20 px-6 py-8 flex flex-col gap-6 z-40">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold uppercase tracking-widest ${
                isActive(link.path) ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 items-center border-t border-white/10 pt-6">
             <button 
              onClick={onToggleMute}
              className="flex-1 border border-primary/40 text-primary py-4 rounded font-black uppercase text-xs flex justify-center items-center gap-2"
            >
              <span className="material-symbols-outlined">{isMuted ? 'volume_off' : 'graphic_eq'}</span>
              Ambience: {isMuted ? 'OFF' : 'ON'}
            </button>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="flex-[2] bg-primary text-white text-center py-4 rounded font-black uppercase tracking-widest"
            >
              Join Team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
