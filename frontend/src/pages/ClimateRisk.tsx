import React from 'react';
import { 
  CloudSun, 
  Wind, 
  Droplets, 
  Thermometer, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  BarChart,
  Calendar,
  Waves,
  AlertCircle,
  Loader2,
  ThermometerSun,
  CloudRain
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { farmerService } from '../api/farmer';

const ClimateRisk = () => {
  const { data: riskData, isLoading } = useQuery({
    queryKey: ['climateRisk'],
    queryFn: () => farmerService.getRiskReport('current-farm'),
    retry: false
  });

  if (isLoading) return (
    <div className="h-[60vh] flex items-center justify-center">
       <Loader2 className="h-12 w-12 text-brand-primary animate-spin" />
    </div>
  );

  const risk = riskData || {
    riskScore: 65,
    droughtProb: 0.2,
    floodProb: 0.1,
    heatStressProb: 0.7,
    summary: "Historical data suggests peak heat stress. Local advisories incoming."
  };

  const pieData = [
    { name: 'Drought', value: risk.droughtProb * 100, color: '#F59E0B' },
    { name: 'Flood', value: risk.floodProb * 100, color: '#3B82F6' },
    { name: 'Heat Stress', value: risk.heatStressProb * 100, color: '#EF4444' },
    { name: 'Other', value: 10, color: '#8B5CF6' },
  ];

  const historicalTrends = [
    { month: 'Jan', temp: 28, humidity: 45, rain: 10 },
    { month: 'Feb', temp: 30, humidity: 40, rain: 5 },
    { month: 'Mar', temp: 32, humidity: 35, rain: 15 },
    { month: 'Apr', temp: 35, humidity: 30, rain: 20 },
    { month: 'May', temp: 38, humidity: 25, rain: 12 },
  ];

  return (
    <div className="space-y-10">
      
      {/* Risk Hero */}
      <div className="grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-premium relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-5 blur-3xl group-hover:opacity-10 transition-all" />
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="relative w-64 h-64 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie
                          data={[{ value: risk.riskScore }, { value: 100 - risk.riskScore }]}
                          innerRadius={80}
                          outerRadius={100}
                          startAngle={180}
                          endAngle={0}
                          dataKey="value"
                        >
                           <Cell fill={risk.riskScore > 70 ? "#EF4444" : "#10B981"} />
                           <Cell fill="#F1F5F9" />
                        </Pie>
                     </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                     <span className="text-5xl font-black text-slate-900 leading-none">{risk.riskScore}%</span>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{risk.riskScore > 50 ? 'Moderate Risk' : 'Low Risk'}</span>
                  </div>
               </div>
               <div className="flex-1 space-y-6 text-center md:text-left">
                  <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Climate Risk Assessment</h1>
                  <p className="text-slate-500 font-medium leading-relaxed italic">{risk.summary}</p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                     <div className="px-6 py-2.5 bg-emerald-50 text-emerald-600 rounded-2xl text-[10px] font-black tracking-widest uppercase border border-emerald-100">Live Prediction Active</div>
                     <div className="px-6 py-2.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                        <AlertTriangle className="h-3 w-3 text-amber-400" /> 2 Alerts Pending
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden group shadow-premium flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-full bg-brand-primary opacity-5 skew-x-12 blur-[100px]" />
            <div className="space-y-6">
               <div className="flex items-center gap-3 text-brand-primary">
                  <AlertCircle className="h-6 w-6" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Early Warning System</span>
               </div>
               <h3 className="text-2xl font-black leading-tight">Heatwave Warning: District Erode</h3>
               <p className="text-slate-400 text-sm font-medium leading-relaxed">Temperatures expected to touch 42°C in the next 72 hours. High evaporative loss predicted for organic paddy crops.</p>
            </div>
            <button className="w-full py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-brand-accent transition-all group-hover:shadow-lg flex items-center justify-center gap-3 mt-8 active:scale-95">
               View Mitigation Strategy <ArrowRight className="h-5 w-5" />
            </button>
         </div>
      </div>

      {/* Metrics Row */}
      <div className="grid md:grid-cols-4 gap-8">
         {[
           { label: "Drought", value: risk.droughtProb * 100, icon: SunIcon, color: "text-amber-500", bg: "bg-amber-50" },
           { label: "Humidity", value: 65, icon: Droplets, color: "text-blue-500", bg: "bg-blue-50" },
           { label: "Heat Stress", value: risk.heatStressProb * 100, icon: ThermometerSun, color: "text-red-500", bg: "bg-red-50" },
           { label: "Wind Pattern", value: 18, icon: Wind, color: "text-slate-500", bg: "bg-slate-50" }
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-4">
                 <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                    <stat.icon className="h-6 w-6" />
                 </div>
                 <TrendingUp className="h-4 w-4 text-emerald-500" />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label} Probability</p>
              <p className="text-3xl font-black text-slate-900 mt-2">{stat.value}%</p>
           </div>
         ))}
      </div>

      {/* Historical Trends Chart */}
      <div className="bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-premium">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
               <h2 className="text-2xl font-black text-slate-900">Historical Climate Pattern</h2>
               <p className="text-slate-400 text-sm font-medium italic mt-1">Multi-year average benchmarked against current season.</p>
            </div>
            <div className="flex gap-4">
               <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest">Temperature</button>
               <button className="bg-slate-50 text-slate-500 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all">Rainfall</button>
            </div>
         </div>
         <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={historicalTrends}>
                  <defs>
                     <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                     </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12, fontWeight: 700}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12, fontWeight: 700}} />
                  <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                  <Area type="monotone" dataKey="temp" stroke="#10B981" strokeWidth={4} fillOpacity={1} fill="url(#colorTemp)" />
               </AreaChart>
            </ResponsiveContainer>
         </div>
      </div>

    </div>
  );
};

export default ClimateRisk;

const SunIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);
