
import React from 'react';
import { TANTRA_LOGO } from '../constants';

const Footer: React.FC = () => {
  return (
    // Fixed: Changed 'class' to 'className'
    <footer className="border-t border-primary/20 bg-black py-16 px-6 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="size-6 text-primary">
              {TANTRA_LOGO}
            </div>
            <h2 className="text-white text-lg font-black uppercase italic tracking-tighter">Tantra Fest</h2>
          </div>
          <div className="space-y-1">
            <p className="text-white/40 text-xs leading-relaxed uppercase tracking-wider">
              Terminal Version 4.0.2
            </p>
            <p className="text-white/40 text-xs leading-relaxed uppercase tracking-wider">
              Location: [REDACTED]
            </p>
            <p className="text-primary/60 text-xs leading-relaxed uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Status: SYST_OPERATIONAL
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6">Navigation</h5>
          <ul className="flex flex-col gap-4 text-white/50 text-xs font-bold uppercase tracking-widest">
            <li><a className="hover:text-primary transition-colors" href="#">Archive</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Sponsorships</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Guidelines</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6">Social Feed</h5>
          <ul className="flex flex-col gap-4 text-white/50 text-xs font-bold uppercase tracking-widest">
            <li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Discord</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Twitter X</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6">Emergency</h5>
          <button className="w-full border border-primary/20 text-primary py-3 hover:bg-primary hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.2em]">
            Contact SysAdmin
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2024 TANTRA UNIT. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-white/20 text-sm">privacy_tip</span>
          <span className="material-symbols-outlined text-white/20 text-sm">terminal</span>
          <span className="material-symbols-outlined text-white/20 text-sm">settings_input_component</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;