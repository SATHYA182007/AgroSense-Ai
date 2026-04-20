import React from 'react';
import { 
  Settings as SettingsIcon, 
  Moon, 
  Sun, 
  Globe, 
  Bell, 
  Lock, 
  Shield, 
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  Database,
  Cpu,
  Smartphone
} from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-10">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Platform Configuration</h1>
            <p className="text-slate-400 font-bold mt-1 uppercase tracking-widest text-[10px]">AgroSense AI • Global Environment v1.0.4</p>
         </div>
         <div className="flex items-center gap-4 p-2 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <button className="p-3 bg-slate-900 text-white rounded-xl"><Moon className="h-5 w-5" /></button>
            <button className="p-3 text-slate-400 hover:text-slate-900 transition-all"><Sun className="h-5 w-5" /></button>
         </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
         
         {/* Navigation */}
         <div className="lg:col-span-1 space-y-4">
            {[
              { label: "General", icon: SettingsIcon, active: true },
              { label: "Security", icon: Lock, active: false },
              { label: "Notifications", icon: Bell, active: false },
              { label: "Billing", icon: CreditCard, active: false },
              { label: "Language", icon: Globe, active: false },
              { label: "Integrations", icon: Cpu, active: false },
            ].map((item, i) => (
               <button 
                 key={i}
                 className={`w-full p-4 rounded-2xl flex items-center gap-4 font-black transition-all ${item.active ? 'bg-brand-primary text-white shadow-premium' : 'bg-white text-slate-400 hover:bg-slate-50 border border-slate-100'}`}
               >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm tracking-tight">{item.label}</span>
               </button>
            ))}
         </div>

         {/* Content */}
         <div className="lg:col-span-3 space-y-8">
            
            <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-premium">
               <h2 className="text-2xl font-black text-slate-900 mb-10">Data & Privacy Control</h2>
               <div className="space-y-8">
                  {[
                    { title: "AI Learning Mode", desc: "Allow AgroSense AI to learn from your farm data to improve predictions.", icon: Cpu, active: true },
                    { title: "Public Profile", desc: "Show your farm success metrics on the regional leaderboard.", icon: Globe, active: false },
                    { title: "Automatic Backups", desc: "Sync farm records to the secure cloud every 24 hours.", icon: Database, active: true },
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between p-6 hover:bg-slate-50 rounded-3xl transition-all border border-transparent hover:border-slate-100 group">
                       <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all">
                             <pref.icon className="h-6 w-6" />
                          </div>
                          <div>
                             <p className="font-black text-slate-900">{pref.title}</p>
                             <p className="text-xs font-medium text-slate-400 mt-1 max-w-sm">{pref.desc}</p>
                          </div>
                       </div>
                       <div className={`w-14 h-7 rounded-full relative transition-all cursor-pointer ${pref.active ? 'bg-brand-primary' : 'bg-slate-200'}`}>
                          <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${pref.active ? 'right-1' : 'left-1'}`} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-premium relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-10 blur-[100px]" />
               <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-brand-primary">
                        <Smartphone className="h-6 w-6" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Mobile Integration</span>
                     </div>
                     <h3 className="text-2xl font-black">Get the AgroSense AI Mobile App</h3>
                     <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-md italic">Unlock real-time field sensors and push alerts directly on your device. Sync your account scan below.</p>
                  </div>
                  <div className="p-6 bg-white rounded-[2rem] shadow-premium shrink-0 group-hover:scale-105 transition-transform duration-500">
                     <div className="w-32 h-32 bg-slate-100 rounded-xl flex items-center justify-center border-4 border-slate-50">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">QR Sync</span>
                     </div>
                  </div>
               </div>
            </div>

         </div>

      </div>

    </div>
  );
};

export default Settings;
