import React from 'react';
import { 
  Droplets, 
  Wind, 
  Thermometer, 
  CloudRain, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Power,
  RefreshCcw,
  Waves,
  ArrowDownCircle,
  Menu,
  MoreVertical
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Cell 
} from 'recharts';
import { motion } from 'framer-motion';

const waterStats = [
  { day: 'Mon', usage: 4500, threshold: 5000 },
  { day: 'Tue', usage: 3200, threshold: 5000 },
  { day: 'Wed', usage: 5100, threshold: 5000 },
  { day: 'Thu', usage: 2800, threshold: 5000 },
  { day: 'Fri', usage: 4900, threshold: 5000 },
  { day: 'Sat', usage: 3000, threshold: 5000 },
];

const Irrigation = () => {
  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Smart Irrigation Intelligence</h1>
           <p className="text-slate-500 font-medium italic">Precision water management using soil moisture sensors and satellite evapotranspiration data.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="bg-blue-50 px-6 py-2.5 rounded-2xl border border-blue-100 flex items-center gap-4 shadow-sm">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Water Stress Level</span>
              <div className="flex items-center gap-1">
                 <div className="h-4 w-4 rounded-full bg-blue-500" />
                 <span className="text-sm font-black text-slate-800">12% Optimal</span>
              </div>
           </div>
           <button className="bg-slate-900 text-white font-black px-8 py-2.5 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all flex items-center gap-2 group">
              <RefreshCcw className="h-4 w-4 group-hover:rotate-180 transition-all duration-700" /> Sync Sensors
           </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
         
         {/* Main Controls Card */}
         <div className="lg:col-span-1 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-premium flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-5 blur-3xl pointer-events-none group-hover:opacity-10 transition-all" />
            <div className="relative w-48 h-48 mb-8">
               <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="88" stroke="#F1F5F9" strokeWidth="16" fill="#F8FAFC" />
                  <circle 
                    cx="96" cy="96" r="88" 
                    stroke="#3b82f6" strokeWidth="16" 
                    fill="transparent" 
                    strokeDasharray={552.9}
                    strokeDashoffset={552.9 - (552.9 * 68) / 100}
                    className="transition-all duration-1000"
                  />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Droplets className="h-8 w-8 text-blue-500 mb-2" />
                  <span className="text-4xl font-black text-slate-900">68%</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Avg. Soil Moisture</span>
               </div>
            </div>
            
            <div className="w-full space-y-4 mb-8">
               <div className="flex justify-between font-bold text-sm">
                  <span className="text-slate-500">System Ready</span>
                  <span className="text-emerald-500">Online</span>
               </div>
               <div className="flex justify-between font-bold text-sm">
                  <span className="text-slate-500">Last Irrigated</span>
                  <span className="text-slate-900">14h Ago</span>
               </div>
            </div>

            <button className="w-full bg-blue-600 text-white font-black py-5 rounded-[2rem] hover:bg-blue-700 transition-all shadow-[0_20px_40px_rgba(59,130,246,0.3)] active:scale-95 flex items-center justify-center gap-3">
               <Power className="h-5 w-5" /> Activate Pump Now
            </button>
            <p className="text-[10px] font-medium text-slate-400 mt-6 tracking-widest uppercase italic">Automatic schedule: 6:00 PM</p>
         </div>

         {/* Middle Analytics Panel */}
         <div className="lg:col-span-3 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { title: "Evapotranspiration", val: "4.8mm", icon: Wind, color: "text-blue-500", bg: "bg-blue-50" },
                 { title: "Avg. Temp", val: "32°C", icon: Thermometer, color: "text-amber-500", bg: "bg-amber-50" },
                 { title: "Rain Prediction", val: "12%", icon: CloudRain, color: "text-slate-500", bg: "bg-slate-50" }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex items-center gap-6">
                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                       <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.title}</p>
                       <h4 className="text-2xl font-black text-slate-900">{item.val}</h4>
                    </div>
                 </div>
               ))}
            </div>

            {/* Usage Chart */}
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-premium group">
               <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Daily Water Consumption Profile</h3>
                    <p className="text-sm text-slate-500 font-medium italic">Measured in Liters/Acre against sustainable threshold.</p>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center gap-4">
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Usage</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-slate-200 rounded-full" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Threshold</span>
                     </div>
                  </div>
               </div>

               <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={waterStats}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '10px 20px 40px rgba(0,0,0,0.1)' }} />
                        <Bar dataKey="usage" radius={[12, 12, 12, 12]} barSize={40}>
                           {waterStats.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.usage > entry.threshold ? '#ef4444' : '#3b82f6'} />
                           ))}
                        </Bar>
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>

            {/* Smart Advisory Verdict */}
            <div className="bg-blue-600 p-10 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-premium group">
               <div className="absolute top-0 right-0 w-64 h-full bg-white/5 skew-x-12 blur-[100px] pointer-events-none" />
               <div className="shrink-0 p-8 bg-white/10 rounded-[2.5rem] backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform">
                  <Waves className="h-10 w-10 text-white animate-pulse" />
               </div>
               <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className="text-3xl font-black tracking-tight">AI Irrigation Strategy: Predictive Adjustment</h3>
                  <p className="text-blue-50 text-xl font-medium max-w-2xl leading-relaxed">
                     "Surface soil is at 68% moisture, but deep root zones show signs of drying (42%). Predictive data suggests 12% rain tomorrow, so we have adjusted today's irrigation volume down by 450L to preserve water."
                  </p>
                  <div className="flex justify-center md:justify-start gap-10 pt-4">
                     <div className="space-y-1">
                        <p className="text-xs font-black text-blue-200 uppercase tracking-widest">Water Saved Today</p>
                        <p className="text-2xl font-black">450 Liters</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-xs font-black text-blue-200 uppercase tracking-widest">Crop Stress Status</p>
                        <p className="text-2xl font-black text-emerald-400">Minimal</p>
                     </div>
                  </div>
               </div>
               <div className="shrink-0 w-full md:w-auto">
                  <button className="bg-white text-blue-800 w-full md:w-auto px-10 py-5 rounded-3xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl active:scale-95">
                     View Schedule
                  </button>
               </div>
            </div>

         </div>

      </div>

    </div>
  );
};

export default Irrigation;
