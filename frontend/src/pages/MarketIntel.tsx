import { 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  DollarSign, 
  ArrowUpRight, 
  Download, 
  Activity,
  ArrowRight
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip
} from 'recharts';

const MarketIntel = () => {
  const priceData = [
    { time: 'Mon', wheat: 420, rice: 380, sugar: 310 },
    { time: 'Tue', wheat: 452, rice: 395, sugar: 315 },
    { time: 'Wed', wheat: 430, rice: 410, sugar: 308 },
    { time: 'Thu', wheat: 480, rice: 425, sugar: 325 },
    { time: 'Fri', wheat: 465, rice: 440, sugar: 330 },
  ];

  const marketQuotes = [
    { name: "Paddy (Medium)", price: "₹2,100 / Qtl", trend: "+4.2%", status: "Bullish", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Turmeric (Erode)", price: "₹8,450 / Qtl", trend: "-1.8%", status: "Correction", icon: TrendingDown, color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Sugar Cane (TN)", price: "₹3,400 / Ton", trend: "+0.5%", status: "Stable", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Organic Wheat", price: "₹2,850 / Qtl", trend: "+12%", status: "Surge", icon: TrendingUp, color: "text-brand-primary", bg: "bg-brand-primary/5" },
  ];

  return (
    <div className="space-y-10">
      
      {/* Market Command Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white shadow-premium relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary opacity-10 blur-[120px] -mr-32 -mt-32" />
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
            <div className="space-y-4">
               <h1 className="text-5xl font-black tracking-tight leading-none flex items-center gap-6">
                  Global Agri-Trade Intel <span className="p-3 bg-brand-primary text-white rounded-2xl shadow-lg shadow-brand-primary/20"><Globe className="h-8 w-8" /></span>
               </h1>
               <p className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs">Real-Time Commodities Liquidity • Predictive Arbitrage</p>
               <div className="flex items-center gap-6 pt-6">
                  <div className="bg-slate-800 px-6 py-3 rounded-2xl border border-slate-700 flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-xs font-black uppercase tracking-widest text-slate-400">Exchange Hub: Nominal</span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 italic">Connected to 142 Global Markets</span>
               </div>
            </div>
            <div className="flex gap-4">
               <button className="bg-slate-800 p-6 rounded-[2.5rem] hover:bg-slate-700 transition-all border border-slate-700"><Download className="h-6 w-6" /></button>
               <button className="bg-brand-primary text-white px-10 py-6 rounded-[2.5rem] shadow-premium hover:shadow-premium-hover transition-all active:scale-95 font-black text-lg">Execute Trade Scan</button>
            </div>
         </div>
      </div>

      {/* Ticker Cards */}
      <div className="grid md:grid-cols-4 gap-6">
         {marketQuotes.map((q, i) => (
           <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
              <div className="flex items-center justify-between mb-8">
                 <div className={`w-12 h-12 rounded-2xl ${q.bg} ${q.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <q.icon className="h-6 w-6" />
                 </div>
                 <span className={`text-[10px] font-black uppercase tracking-widest ${q.color}`}>{q.trend}</span>
              </div>
              <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">{q.name}</p>
              <p className="text-2xl font-black text-slate-900">{q.price}</p>
              <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-50">
                 <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{q.status}</span>
                 <ArrowUpRight className={`h-4 w-4 ${q.color} opacity-50`} />
              </div>
           </div>
         ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
         
         {/* Price Velocity Chart */}
         <div className="lg:col-span-2 bg-white rounded-[4rem] p-12 border border-slate-100 shadow-premium">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
               <div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Price Velocity Matrix</h2>
                  <p className="text-slate-400 font-bold text-sm italic mt-1 leading-relaxed">Cross-commodity volatility monitoring for the current trading week.</p>
               </div>
               <div className="flex gap-2">
                  {['WEEK', 'MONTH', 'YEAR'].map(t => (
                     <button key={t} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${t === 'WEEK' ? 'bg-brand-primary text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:text-slate-900'}`}>{t}</button>
                  ))}
               </div>
            </div>
            <div className="h-[400px]">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={priceData}>
                     <defs>
                        <linearGradient id="colorWheat" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#10B981" stopOpacity={0.15}/>
                           <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorRice" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15}/>
                           <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}} />
                     <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}} />
                     <Tooltip 
                       contentStyle={{ borderRadius: '2rem', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', padding: '1.5rem' }}
                       itemStyle={{ fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                     />
                     <Area type="monotone" dataKey="wheat" stroke="#10B981" strokeWidth={4} fillOpacity={1} fill="url(#colorWheat)" />
                     <Area type="monotone" dataKey="rice" stroke="#2563EB" strokeWidth={4} fillOpacity={1} fill="url(#colorRice)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Sector Insights Sidebar */}
         <div className="space-y-10">
            <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white shadow-premium relative group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 blur-2xl" />
               <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
                  <Activity className="h-5 w-5 text-brand-primary" /> Sector Liquidities
               </h3>
               <div className="space-y-8">
                  {[
                    { label: "Domestic Retail", value: "High", trend: "+45%", status: "Hot" },
                    { label: "Export Port", value: "Normal", trend: "+12%", status: "Stable" },
                    { label: "Cold Storage", value: "Low", trend: "-5%", status: "Slow" },
                  ].map((s, i) => (
                    <div key={i} className="group cursor-pointer">
                       <div className="flex items-center justify-between mb-4">
                          <p className="text-sm font-black text-slate-400 group-hover:text-white transition-colors">{s.label}</p>
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary italic">{s.status}</span>
                       </div>
                       <div className="flex items-center justify-between">
                          <p className="text-2xl font-black text-white">{s.value}</p>
                          <span className="text-xs font-bold text-slate-500">{s.trend}</span>
                       </div>
                       <div className="w-full h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
                          <div className={`h-full bg-brand-primary transition-all duration-1000 ${s.value === 'High' ? 'w-full' : s.value === 'Normal' ? 'w-1/2' : 'w-1/5'}`} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-premium text-center space-y-6">
               <div className="w-20 h-20 bg-brand-primary/5 text-brand-primary rounded-[2rem] flex items-center justify-center mx-auto shadow-inner">
                  <DollarSign className="h-10 w-10" />
               </div>
               <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">Arbitrage Engine</h3>
                  <p className="text-slate-400 text-sm font-bold leading-relaxed italic">The AI engine is scanning for 12.4% opportunistic margin gap in South Indian markets.</p>
               </div>
               <button className="w-full py-5 bg-slate-900 text-white rounded-3xl font-black text-sm uppercase tracking-widest transition-all hover:bg-black active:scale-95 flex items-center justify-center gap-3">
                  Request Deep Scrutiny <ArrowRight className="h-4 w-4" />
               </button>
            </div>
         </div>

      </div>

    </div>
  );
};

export default MarketIntel;
