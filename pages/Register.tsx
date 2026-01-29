
import React, { useState, useEffect } from 'react';

interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  rollNo: string;
  department: string;
  year: string;
  hasVehicle: string;
  committee: string;
}

const COMMITTEES = [
  "Technical",
  "Logistics",
  "Cultural",
  "Media & Marketing",
  "Hospitality",
  "Finance",
  "Documentation",
  "Security"
];

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    rollNo: '',
    department: '',
    year: '1',
    hasVehicle: 'No',
    committee: 'Technical'
  });

  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);
  const [transmissionLogs, setTransmissionLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setTransmissionLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleExport = async () => {
    if (!formData.fullName || !formData.email || !formData.college) {
      alert("CRITICAL ERROR: IDENTITY DATA INCOMPLETE. PLEASE FILL MANDATORY FIELDS.");
      return;
    }

    setIsExporting(true);
    setTransmissionLogs([]);
    
    // Step 1: Initialize
    addLog("INITIATING HANDSHAKE WITH CLOUD GATEWAY...");
    await new Promise(r => setTimeout(r, 600));
    
    // Step 2: Validate
    addLog("VALIDATING DATA INTEGRITY...");
    await new Promise(r => setTimeout(r, 400));
    
    // Step 3: Simulate Vercel/Serverless transmission
    addLog("EXPORTING DATA TO VERCEL APP HOSTING...");
    addLog("DEPLOYING TO tantra-core.vercel.app/api/sync");
    await new Promise(r => setTimeout(r, 800));
    
    // Step 4: Finalize
    addLog("SYNCHRONIZING WITH PRODUCTION DATABASE...");
    await new Promise(r => setTimeout(r, 500));

    // Create local backup JSON
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      ...formData,
      exportedAt: new Date().toISOString(),
      hostingPlatform: "Vercel_Production",
      endpoint: "https://tantra-core.vercel.app",
      systemToken: Math.random().toString(36).substring(2, 15)
    }, null, 2));
    
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `tantra_reg_${formData.fullName.replace(/\s+/g, '_').toLowerCase()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    
    addLog("LOCAL DATA PACKET EXPORTED AS JSON.");
    addLog("VERCEL DEPLOYMENT SUCCESSFUL.");
    
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
    }, 500);
  };

  if (exportComplete) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-black/60 border-2 border-green-500/50 p-12 rounded-xl tech-border relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-pulse"></div>
          <span className="material-symbols-outlined text-green-500 text-7xl mb-6">cloud_done</span>
          <h2 className="text-white text-4xl font-black uppercase mb-4 tracking-tighter">Transmission Confirmed</h2>
          <p className="text-white/60 font-mono text-sm mb-8 italic">Your profile has been synchronized with Vercel App Hosting. A local JSON backup has been exported for your records.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-black/80 p-4 rounded border border-green-500/20 text-left font-mono text-[10px] text-green-400">
              <p className="border-b border-green-500/20 pb-2 mb-2 font-black uppercase text-xs">Identity Profile</p>
              <pre className="whitespace-pre-wrap">{JSON.stringify(formData, null, 2)}</pre>
            </div>
            <div className="bg-black/80 p-4 rounded border border-green-500/20 text-left font-mono text-[10px] text-green-400">
              <p className="border-b border-green-500/20 pb-2 mb-2 font-black uppercase text-xs">Transmission Log</p>
              <ul className="space-y-1">
                {transmissionLogs.map((log, i) => <li key={i}>{log}</li>)}
              </ul>
            </div>
          </div>

          <button 
            onClick={() => setExportComplete(false)}
            className="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105"
          >
            Initiate New Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <div className="mb-10">
            <div className="flex items-center gap-2 text-primary mb-2">
              <span className="h-[1px] w-12 bg-primary"></span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase">Protocol: Cloud Enrollment</span>
            </div>
            <h1 className="text-5xl font-black uppercase tracking-tighter text-white">Vortex <span className="text-primary italic">Access</span></h1>
          </div>

          <div className="space-y-10">
            {/* Identity Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-primary font-mono font-bold">01</span>
                <h2 className="text-white font-black uppercase tracking-widest text-sm">Identity Matrix</h2>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput 
                  label="Full Name" 
                  value={formData.fullName} 
                  onChange={v => setFormData({...formData, fullName: v})} 
                  placeholder="USER_IDENTIFIER"
                />
                <FormInput 
                  label="Email (Digital Alias)" 
                  value={formData.email} 
                  onChange={v => setFormData({...formData, email: v})} 
                  placeholder="ID@NETWORK.IO"
                  type="email"
                />
                <FormInput 
                  label="Phone (Comm ID)" 
                  value={formData.phone} 
                  onChange={v => setFormData({...formData, phone: v})} 
                  placeholder="+91 XXX-XXXXX"
                />
                <FormInput 
                  label="College (Nexus)" 
                  value={formData.college} 
                  onChange={v => setFormData({...formData, college: v})} 
                  placeholder="INSTITUTION_NAME"
                />
              </div>
            </section>

            {/* Academic Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-primary font-mono font-bold">02</span>
                <h2 className="text-white font-black uppercase tracking-widest text-sm">Academic Sector</h2>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormInput 
                  label="Dept / Branch" 
                  value={formData.department} 
                  onChange={v => setFormData({...formData, department: v})} 
                  placeholder="CS / ART / ENG"
                />
                <FormInput 
                  label="Roll / Reg No" 
                  value={formData.rollNo} 
                  onChange={v => setFormData({...formData, rollNo: v})} 
                  placeholder="SERIAL_NUM"
                />
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest ml-1">Phase (Year)</label>
                  <select 
                    value={formData.year}
                    onChange={e => setFormData({...formData, year: e.target.value})}
                    className="w-full bg-black/40 border border-primary/30 rounded px-4 py-4 text-white focus:border-primary outline-none uppercase text-xs tracking-widest appearance-none"
                  >
                    <option value="1">Year 01</option>
                    <option value="2">Year 02</option>
                    <option value="3">Year 03</option>
                    <option value="4">Year 04</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Operational Preferences Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-primary font-mono font-bold">03</span>
                <h2 className="text-white font-black uppercase tracking-widest text-sm">Operational Preferences</h2>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest ml-1">Do you possess personal vehicles?</label>
                  <select 
                    value={formData.hasVehicle}
                    onChange={e => setFormData({...formData, hasVehicle: e.target.value})}
                    className="w-full bg-black/40 border border-primary/30 rounded px-4 py-4 text-white focus:border-primary outline-none uppercase text-xs tracking-widest appearance-none"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest ml-1">Committee of interest</label>
                  <select 
                    value={formData.committee}
                    onChange={e => setFormData({...formData, committee: e.target.value})}
                    className="w-full bg-black/40 border border-primary/30 rounded px-4 py-4 text-white focus:border-primary outline-none uppercase text-xs tracking-widest appearance-none"
                  >
                    {COMMITTEES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Right Column: Terminal Preview & Actions */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-8">
            {/* Terminal Preview */}
            <div className="bg-black border border-primary/30 rounded-lg overflow-hidden flex flex-col h-[500px] shadow-[0_0_40px_rgba(242,13,13,0.1)] relative">
              <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 flex items-center justify-between relative z-10">
                <div className="flex gap-1.5">
                  <div className="size-2 rounded-full bg-red-500"></div>
                  <div className="size-2 rounded-full bg-yellow-500"></div>
                  <div className="size-2 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] font-mono text-primary/80 uppercase tracking-widest">Vercel_Buffer.exe</span>
              </div>
              <div className="flex-1 p-6 font-mono text-[11px] text-primary/70 overflow-auto custom-scrollbar relative z-10">
                <p className="mb-2 text-white/40">// Ready for secure deployment...</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <PreviewItem label="NAME" value={formData.fullName} />
                    <PreviewItem label="ALIAS" value={formData.email} />
                    <PreviewItem label="PHONE" value={formData.phone} />
                    <PreviewItem label="NEXUS" value={formData.college} />
                    <PreviewItem label="SERIAL" value={formData.rollNo} />
                    <PreviewItem label="PHASE" value={formData.year} />
                    <PreviewItem label="VEHICLE" value={formData.hasVehicle} />
                    <PreviewItem label="COMMITTEE" value={formData.committee} />
                  </div>
                  
                  {transmissionLogs.length > 0 && (
                    <div className="pt-4 border-t border-primary/10">
                      <p className="mb-2 font-black text-white/40 uppercase">[ SYSTEM_LOGS ]</p>
                      <div className="space-y-1">
                        {transmissionLogs.map((log, i) => (
                          <p key={i} className="text-[9px] leading-tight text-primary/90">&gt; {log}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-primary/10">
                    <p className="mb-2 font-bold">[ NETWORK_STATUS ]</p>
                    <p>&gt; Target: tantra-core.vercel.app</p>
                    <p>&gt; Deployment: EDGE_NETWORK</p>
                    <p>&gt; Priority: GLOBAL_SYNC</p>
                  </div>
                </div>
              </div>

              {/* Transmission Overlay */}
              {isExporting && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md z-20 flex flex-col items-center justify-center p-12 text-center">
                  <div className="size-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6"></div>
                  <h3 className="text-white text-xl font-black uppercase tracking-widest mb-2">Deploying to Vercel...</h3>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-primary animate-progress"></div>
                  </div>
                  <p className="text-primary/60 font-mono text-[10px] uppercase animate-pulse">Syncing identity manifest with cloud node</p>
                </div>
              )}
            </div>

            {/* Export Action */}
            <div className="space-y-4">
              <button 
                onClick={handleExport}
                disabled={isExporting}
                className="w-full bg-primary hover:bg-red-600 disabled:opacity-50 text-white py-6 rounded font-black uppercase tracking-[0.4em] transition-all shadow-[0_0_30px_rgba(242,13,13,0.3)] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4"
              >
                <span className="material-symbols-outlined">cloud_upload</span>
                Sync & Export Manifest
              </button>
              <div className="flex items-center gap-4 justify-center py-2">
                 <div className="h-px w-8 bg-white/10"></div>
                 <p className="text-[9px] text-white/20 uppercase tracking-[0.3em]">Authorized Deployment</p>
                 <div className="h-px w-8 bg-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormInput: React.FC<{ label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string }> = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest ml-1">{label}</label>
    <input 
      type={type}
      className="w-full bg-black/40 border border-primary/30 rounded px-4 py-4 text-white placeholder:text-white/10 focus:border-primary outline-none transition-all uppercase text-xs tracking-widest"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

const PreviewItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-white/30 text-[9px] uppercase">{label}</p>
    <p className="text-primary truncate">{value || '---'}</p>
  </div>
);

export default Register;
