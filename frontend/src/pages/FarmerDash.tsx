import React from 'react';
import { 
  CloudSun, 
  TrendingUp, 
  Leaf, 
  Droplets, 
  AlertTriangle, 
  ArrowUpRight, 
  ArrowDownRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Jan', yield: 4000, risk: 2400 },
  { name: 'Feb', yield: 3000, risk: 1398 },
  { name: 'Mar', yield: 2000, risk: 9800 },
  { name: 'Apr', yield: 2780, risk: 3908 },
  { name: 'May', yield: 1890, risk: 4800 },
  { name: 'Jun', yield: 2390, risk: 3800 },
];

const StatCard = ({ title, value, change, icon: Icon, color, trend }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 opacity-5 blur-2xl transform translate-x-8 -translate-y-8 ${color}`} />
    
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color} text-white`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className={`flex items-center gap-1 text-sm font-bold ${trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
        {trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        {change}
      </div>
    </div>
    
    <p className="text-slate-500 font-bold tracking-tight mb-1">{title}</p>
    <h3 className="text-3xl font-extrabold text-slate-900">{value}</h3>
  </motion.div>
);

const FarmerDash = () => {
  return (
    <div className="space-y-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Main Command Center</h1>
           <p className="text-slate-500 font-medium">Hello Sathyam! Here is your farm's intelligence overview for today.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="bg-white px-5 py-2.5 rounded-2xl border border-slate-100 flex items-center gap-3 shadow-sm">
              <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-700">Real-time Sync Active</span>
           </div>
           <button className="bg-brand-primary text-white font-bold px-6 py-2.5 rounded-2xl hover:bg-brand-secondary transition-all shadow-premium">
              Refresh Data
           </button>
        </div>
      </div>

      {/* Main KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Farm Health Score" value="82/100" change="+4.2%" icon={ShieldCheck} color="bg-emerald-600" trend="up" />
        <StatCard title="Climate Risk" value="Low" change="-12%" icon={CloudSun} color="bg-blue-600" trend="down" />
        <StatCard title="Disease Risk" value="Moderate" change="+2%" icon={AlertTriangle} color="bg-amber-600" trend="up" />
        <StatCard title="Market Potential" value="High" change="+24.5%" icon={TrendingUp} color="bg-slate-800" trend="up" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Intelligence Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
             <div>
                <h3 className="text-xl font-extrabold text-slate-900">Yield Prediction Analytics</h3>
                <p className="text-sm text-slate-500 font-medium">Monthly projected yield vs climate risk impact</p>
             </div>
             <select className="bg-slate-50 border-none rounded-xl py-2 px-4 text-sm font-bold text-slate-600 outline-none focus:ring-2 focus:ring-brand-primary/20">
                <option>Last 6 Months</option>
                <option>Last 12 Months</option>
             </select>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontWeight: 600, fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontWeight: 600, fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontWeight: 700 }}
                />
                <Area type="monotone" dataKey="yield" stroke="#10B981" strokeWidth={4} fillOpacity={1} fill="url(#colorYield)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Sidebar Widgets */}
        <div className="space-y-8">
           
           {/* Climate Insight Card */}
           <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 blur-3xl group-hover:opacity-20 transition-all" />
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-brand-primary/20 rounded-2xl">
                    <CloudSun className="h-6 w-6 text-brand-primary" />
                 </div>
                 <h4 className="font-bold text-lg">Climate Verdict</h4>
              </div>
              <p className="text-slate-400 text-sm font-medium mb-6 leading-relaxed">
                 High probability of mild heat stress expected next week. Consider increasing irrigation by 15% on Tuesday.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Confidence</span>
                 <span className="text-brand-primary font-bold">92% High</span>
              </div>
           </div>

           {/* Quick Actions / Alerts */}
           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm border-l-4 border-l-brand-primary">
              <h4 className="font-extrabold text-slate-900 mb-6">Immediate Actions</h4>
              <div className="space-y-4">
                 <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all cursor-pointer group">
                    <div className="p-2 bg-white rounded-xl group-hover:scale-110 transition-transform">
                       <Droplets className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Schedule Irrigation</p>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Today at 6:00 PM</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all cursor-pointer group">
                    <div className="p-2 bg-white rounded-xl group-hover:scale-110 transition-transform">
                       <Leaf className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Spray Pest Control</p>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Weather Window: 4h Open</p>
                    </div>
                 </div>
              </div>
           </div>

        </div>

      </div>

      {/* Bottom Grid: Market & Crop Recommendation */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm group">
            <div className="flex items-center justify-between mb-6">
                <h4 className="font-extrabold text-slate-900">Mandi Pulse</h4>
                <TrendingUp className="h-5 w-5 text-brand-primary" />
            </div>
            <div className="space-y-4">
               {[
                 { crop: 'Premium Wheat', price: '₹2,450', trend: '+1.2%', status: 'rising' },
                 { crop: 'Organic Paddy', price: '₹3,100', trend: '-0.5%', status: 'falling' },
                 { crop: 'Cotton', price: '₹6,800', trend: '+4.5%', status: 'rising' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0 border-dashed">
                    <p className="font-bold text-slate-700 text-sm">{item.crop}</p>
                    <div className="text-right">
                       <p className="text-sm font-bold text-slate-900">{item.price}</p>
                       <p className={`text-[10px] font-bold ${item.status === 'rising' ? 'text-emerald-500' : 'text-red-500'}`}>
                          {item.trend}
                       </p>
                    </div>
                 </div>
               ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
               Full Market Insight <ArrowRight className="h-4 w-4" />
            </button>
         </div>

         <div className="lg:col-span-2 bg-gradient-to-br from-emerald-600 to-emerald-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden shadow-premium">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
               <div className="space-y-6 flex-1">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">AI Expert Choice</div>
                  <h3 className="text-3xl font-extrabold tracking-tight">Recommended Crop: <br />Black Chickpeas</h3>
                  <p className="text-emerald-100 text-sm font-medium leading-relaxed max-w-md">
                     Based on your current soil nitrogen levels and the projected dry spell in May, Black Chickpeas offer the highest profitability margin of 32%.
                  </p>
                  <div className="flex gap-4">
                     <div className="bg-white/10 p-3 rounded-2xl text-center flex-1">
                        <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-tight">Yield Score</p>
                        <p className="text-xl font-extrabold">95/100</p>
                     </div>
                     <div className="bg-white/10 p-3 rounded-2xl text-center flex-1">
                        <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-tight">Water Need</p>
                        <p className="text-xl font-extrabold">Low</p>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-[250px] aspect-square bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <Zap className="h-12 w-12 text-brand-accent animate-pulse" />
                  <p className="text-xs font-bold leading-relaxed">System ready for <br />Next Season planning</p>
                  <button className="bg-white text-emerald-900 w-full py-3 rounded-xl font-extrabold hover:bg-emerald-50 transition-all shadow-lg active:scale-95">
                     View Seed Guide
                  </button>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default FarmerDash;

const ArrowRight = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" 
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)
