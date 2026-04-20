import { useState } from 'react';
import { 
  MapPin, 
  Thermometer, 
  Waves, 
  Activity, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  Satellite
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  ZAxis, 
  CartesianGrid, 
  Tooltip, 
  Cell 
} from 'recharts';

const RegionalInsights = () => {
  const [activeDistrict, setActiveDistrict] = useState('Erode');

  const regionalYieldData = [
    { x: 45, y: 380, z: 200, name: 'Erode North' },
    { x: 52, y: 410, z: 300, name: 'Erode East' },
    { x: 38, y: 350, z: 150, name: 'Modakkurichi' },
    { x: 60, y: 450, z: 400, name: 'Kodumudi' },
    { x: 30, y: 320, z: 100, name: 'Perundurai' },
  ];

  const metrics = [
    { label: "Overall Soil Health", value: "88%", icon: Thermometer, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Water Reservoir Level", value: "72.4%", icon: Waves, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Regional Risk Index", value: "Low", icon: ShieldCheck, color: "text-brand-primary", bg: "bg-brand-primary/5" },
    { label: "Active Satellite Feed", value: "Live", icon: Satellite, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-10">
      
      {/* Geolocation Hero */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-premium relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-primary opacity-5 blur-[120px] -mr-48 -mt-48" />
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
            <div className="space-y-6 max-w-2xl">
               <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-primary text-white rounded-2xl shadow-lg shadow-brand-primary/20"><Globe className="h-6 w-6" /></div>
                  <span className="text-xs font-black uppercase tracking-widest text-brand-primary">Geospatial Intelligence v8.2</span>
               </div>
               <h1 className="text-5xl font-black italic tracking-tight leading-tight">Remote Sensing & Regional Analysis</h1>
               <p className="text-slate-400 font-bold text-lg leading-relaxed italic opacity-80 text-ellipsis">"Advanced spatial intelligence mapping for localized soil fertility, water retention, and crop health across the entire agro-sector."</p>
            </div>
            <div className="flex items-center gap-6 bg-slate-800 p-8 rounded-[3.5rem] border border-slate-700 shadow-premium">
               <div className="shrink-0 w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center border-4 border-slate-700">
                  <Satellite className="h-10 w-10 text-brand-primary animate-pulse" />
               </div>
               <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest leading-none mb-2">Live Sentinel-2 Feed</p>
                  <p className="text-xl font-black text-white">99.8% Spatial Resolution</p>
                  <div className="flex items-center gap-3 mt-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-500" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Syncing...</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-4 gap-8">
         {metrics.map((m, i) => (
           <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-8">
                 <div className={`w-14 h-14 rounded-2xl ${m.bg} ${m.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <m.icon className="h-7 w-7" />
                 </div>
                 <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Active</span>
              </div>
              <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">{m.label}</p>
              <p className="text-4xl font-black text-slate-900 leading-none">{m.value}</p>
           </div>
         ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
         
         {/* Yield Cluster Map (Scatter Chart Sim) */}
         <div className="lg:col-span-2 bg-white rounded-[4rem] p-12 border border-slate-100 shadow-premium">
            <div className="flex items-center justify-between mb-12 px-2">
               <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Yield-Efficiency Spatiogram</h2>
                  <p className="text-slate-400 font-bold text-sm italic mt-1">Cross-referencing soil quality with localized biomass accumulation.</p>
               </div>
               <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">
                  Switch Terrain Mode <GridIcon className="h-4 w-4" />
               </button>
            </div>
            <div className="h-[400px]">
               <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart>
                     <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="#f1f5f9" />
                     <XAxis type="number" dataKey="x" name="Soil Score" unit="%" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}} />
                     <YAxis type="number" dataKey="y" name="Yield Potential" unit="T/ha" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}} />
                     <ZAxis type="number" dataKey="z" range={[100, 1000]} name="Area Size" unit="Acres" />
                     <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '2rem', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', padding: '1.5rem' }} />
                     <Scatter name="Yield Map" data={regionalYieldData} fill="#10B981">
                        {regionalYieldData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#10B981' : '#2563EB'} fillOpacity={0.8} />
                        ))}
                     </Scatter>
                  </ScatterChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Sector Insights Sidebar */}
         <div className="space-y-10">
            <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white shadow-premium relative group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 blur-2xl" />
               <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-primary" /> District Focus
               </h3>
               <div className="space-y-6">
                  {['Erode', 'Salem', 'Tiruppur', 'Coimbatore'].map(dist => (
                    <button 
                      key={dist}
                      onClick={() => setActiveDistrict(dist)}
                      className={`w-full flex items-center justify-between p-6 rounded-3xl transition-all border ${activeDistrict === dist ? 'bg-brand-primary/10 border-brand-primary text-white shadow-lg' : 'bg-slate-800 border-transparent text-slate-400 hover:text-white'}`}
                    >
                       <span className="font-black italic">{dist}</span>
                       <ChevronRight className={`h-5 w-5 ${activeDistrict === dist ? 'text-brand-primary' : 'text-slate-600'}`} />
                    </button>
                  ))}
               </div>
            </div>

            <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-premium relative overflow-hidden group h-full">
               <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -mr-8 -mt-8" />
               <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Activity className="h-5 w-5 text-brand-primary" /> Localized Alert
               </h3>
               <div className="space-y-6">
                  <div className="p-6 bg-red-50 rounded-[2.5rem] border border-red-100 space-y-3 relative group-hover:bg-red-100 transition-colors">
                     <div className="flex items-center gap-2 text-red-500">
                        <AlertTriangleIcon className="h-5 w-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest italic">Soil Alkalinity Surge</span>
                     </div>
                     <p className="text-red-900/70 font-bold text-sm leading-relaxed italic">Critical PH Shift detected in Sector E-14 (Erode North). Emergency neutralization recommended.</p>
                  </div>
                  <button className="w-full flex items-center justify-center gap-3 py-5 bg-slate-900 text-white rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all active:scale-95">
                     Initiate Deep Map <ArrowRight className="h-4 w-4" />
                  </button>
               </div>
            </div>
         </div>

      </div>

    </div>
  );
};

export default RegionalInsights;

const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

const AlertTriangleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>
  </svg>
)

const GridIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>
  </svg>
)
