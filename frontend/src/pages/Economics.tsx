import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ArrowUpCircle, 
  ArrowDownCircle,
  FileText,
  Calendar,
  Filter,
  ArrowRight,
  Zap,
  ShoppingBag,
  User,
  Plus
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

const econData = [
  { month: 'Jan', profit: 45000, cost: 20000 },
  { month: 'Feb', profit: 52000, cost: 18000 },
  { month: 'Mar', profit: 38000, cost: 25000 },
  { month: 'Apr', profit: 65000, cost: 22000 },
  { month: 'May', profit: 58000, cost: 15000 },
  { month: 'Jun', profit: 72000, cost: 10000 },
];

const expenseBreakdown = [
  { name: 'Seeds', value: 4500, color: '#10B981' },
  { name: 'Fertilizer', value: 3200, color: '#3B82F6' },
  { name: 'Labor', value: 8500, color: '#F59E0B' },
  { name: 'Machinery', value: 5000, color: '#8B5CF6' },
  { name: 'Pesticides', value: 2000, color: '#EF4444' },
];

const EconCard = ({ title, value, sub, icon: Icon, color, trend }: any) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
    <div className={`absolute top-0 right-0 w-24 h-24 opacity-5 blur-3xl transform translate-x-12 -translate-y-12 ${color}`} />
    <div className="flex justify-between items-start mb-6">
       <div className={`p-4 rounded-2xl ${color} text-white group-hover:scale-110 transition-transform`}>
          <Icon className="h-6 w-6" />
       </div>
       {trend && (
         <div className={`flex items-center gap-1 text-xs font-black ${trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
            {trend === 'up' ? <ArrowUpCircle className="h-4 w-4" /> : <ArrowDownCircle className="h-4 w-4" />}
            {trend === 'up' ? 'Rising' : 'Falling'}
         </div>
       )}
    </div>
    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">{title}</p>
    <h3 className="text-4xl font-black text-slate-900 tracking-tight">{value}</h3>
    <p className="text-slate-400 font-medium text-[10px] uppercase tracking-widest mt-2">{sub}</p>
  </div>
);

const Economics = () => {
  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Farm Economic Insights</h1>
           <p className="text-slate-500 font-medium italic">Comprehensive profitability analysis and expense management engine.</p>
        </div>
        <div className="flex items-center gap-4">
           <button className="bg-slate-50 text-slate-600 font-black px-6 py-3 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-all flex items-center gap-2">
              <Calendar className="h-5 w-5" /> All Seasons
           </button>
           <button className="bg-brand-primary text-white font-black px-8 py-3 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all flex items-center gap-3 active:scale-95">
              <Plus className="h-5 w-5" /> Add Expense
           </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <EconCard title="Net Profit FY-26" value="₹4.2L" sub="32% higher than prev yr" icon={TrendingUp} color="bg-emerald-600" trend="up" />
        <EconCard title="Total Production Cost" value="₹1.8L" sub="Avg ₹32k / Month" icon={BarChart3} color="bg-slate-800" trend="down" />
        <EconCard title="Estimated Revenue" value="₹6.0L" sub="Current Market Value" icon={DollarSign} color="bg-blue-600" trend="up" />
        <EconCard title="Return on Investment" value="230%" sub="Efficiency: Highly Solvent" icon={Zap} color="bg-brand-accent" trend="up" />
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
         
         {/* Profitability Trend */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-premium relative overflow-hidden group">
            <div className="flex items-center justify-between mb-10">
               <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Revenue Generation Index</h3>
                  <p className="text-sm text-slate-500 font-medium italic">Profit vs Operating Cost Analysis per Month</p>
               </div>
               <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-emerald-500" />
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Profit</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-slate-900" />
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Cost</span>
                  </div>
               </div>
            </div>

            <div className="h-[450px]">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={econData}>
                     <defs>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0F172A" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#0F172A" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                     <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                     <Area type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={4} fillOpacity={1} fill="url(#colorProfit)" />
                     <Area type="monotone" dataKey="cost" stroke="#0F172A" strokeWidth={3} fillOpacity={1} fill="url(#colorCost)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Distribution & History */}
         <div className="space-y-10">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group">
               <h3 className="text-lg font-black text-slate-900 mb-8 border-b border-slate-50 pb-4">Cost Distribution</h3>
               <div className="h-[250px] mb-10">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie data={expenseBreakdown} dataKey="value" innerRadius={60} outerRadius={85} paddingAngle={8} stroke="none">
                           {expenseBreakdown.map((entry, i) => (
                             <Cell key={i} fill={entry.color} />
                           ))}
                        </Pie>
                        <Tooltip />
                     </PieChart>
                  </ResponsiveContainer>
               </div>
               <div className="space-y-4">
                  {expenseBreakdown.map((item, i) => (
                     <div key={i} className="flex items-center justify-between font-bold text-xs">
                        <div className="flex items-center gap-3">
                           <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                           <span className="text-slate-500 uppercase tracking-widest">{item.name}</span>
                        </div>
                        <span className="text-slate-900">₹{item.value} / Qnt</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Recent Ledger */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-black text-slate-900">Recent Log</h3>
                  <button className="text-brand-primary text-xs font-black uppercase tracking-widest hover:underline decoration-emerald-200">View All</button>
               </div>
               <div className="space-y-4">
                  {[
                    { item: "Organic Fertilizer", val: "- ₹5,200", date: "Apr 12", type: "neg" },
                    { item: "Wheat Sale (Mandi)", val: "+ ₹28,400", date: "Apr 08", type: "pos" },
                    { item: "Seed Stock (Rice)", val: "- ₹2,800", date: "Mar 25", type: "neg" }
                  ].map((log, i) => (
                    <div key={i} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl hover:bg-slate-100 transition-all border border-transparent hover:border-slate-100">
                       <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-xl ${log.type === 'pos' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                             {log.type === 'pos' ? <ArrowUpCircle className="h-4 w-4" /> : <ArrowDownCircle className="h-4 w-4" />}
                          </div>
                          <div>
                             <p className="text-sm font-bold text-slate-900">{log.item}</p>
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{log.date} • 2026</p>
                          </div>
                       </div>
                       <p className={`text-sm font-black ${log.type === 'pos' ? 'text-emerald-500' : 'text-red-500'}`}>{log.val}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>

      </div>

      {/* Economic Advisory */}
      <div className="bg-slate-900 text-white p-10 rounded-[4rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-10 shadow-premium group">
         <div className="absolute top-0 right-0 w-96 h-full bg-brand-primary opacity-5 blur-[100px] pointer-events-none group-hover:opacity-10 transition-all duration-1000" />
         <div className="shrink-0 p-10 bg-white/5 rounded-[3rem] backdrop-blur-md border border-white/10 group-hover:scale-105 transition-transform duration-500">
            <BarChart3 className="h-12 w-12 text-brand-primary" />
         </div>
         <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-black tracking-tight flex items-center gap-3">
               Profit Maximization Advisory <Zap className="h-6 w-6 text-brand-primary animate-pulse" />
            </h3>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-4xl">
               "Your operational efficiency is top 5% in Coimbatore. Predicted Mandi patterns for next quarter suggest shifting 20% of your production capacity to Paddy for an estimated profit surge of ₹32,000 extra. ROI is healthy at 230%."
            </p>
            <div className="flex gap-12 pt-6">
               <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Solvency Status</p>
                  <p className="text-2xl font-black text-emerald-400">Excellent</p>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Risk Tolerance</p>
                  <p className="text-2xl font-black text-white">Moderate</p>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Water Saving ROI</p>
                  <p className="text-2xl font-black text-blue-400">Saved ₹12k</p>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Economics;
