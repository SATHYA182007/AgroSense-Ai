import React from 'react';
import { 
  Users, 
  Database, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  Server,
  Globe,
  Settings,
  AlertCircle,
  TrendingDown,
  ArrowRight,
  Loader2,
  Calendar
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  LineChart, 
  Line 
} from 'recharts';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { adminService } from '../api/admin';

const AdminDash = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['adminStats'],
    queryFn: () => adminService.getSystemStats(),
    retry: false
  });

  const { data: users, isLoading: isUsersLoading } = useQuery({
     queryKey: ['adminUsers'],
     queryFn: () => adminService.getAllUsers(),
     retry: false
  });

  if (isLoading || isUsersLoading) return (
     <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-brand-primary animate-spin" />
     </div>
  );

  const growthData = [
    { name: 'Mon', users: 120, ads: 45 },
    { name: 'Tue', users: 150, ads: 52 },
    { name: 'Wed', users: 180, ads: 60 },
    { name: { name: 'Thu', users: 210, ads: 75 } },
    { name: 'Fri', users: 250, ads: 90 },
  ];

  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900 rounded-[3rem] p-10 text-white shadow-premium relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-10 blur-[100px]" />
         <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight">System Control Center</h1>
            <p className="text-brand-primary font-black uppercase tracking-widest text-xs">Global Network • Sector A-14 Live</p>
         </div>
         <div className="flex gap-4">
            <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex items-center gap-4">
               <Activity className="h-6 w-6 text-brand-primary" />
               <div>
                  <p className="text-[10px] font-black uppercase text-slate-500">Latency</p>
                  <p className="text-xl font-black">24ms</p>
               </div>
            </div>
            <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex items-center gap-4">
               <ShieldCheck className="h-6 w-6 text-emerald-400" />
               <div>
                  <p className="text-[10px] font-black uppercase text-slate-500">Protection</p>
                  <p className="text-xl font-black">Active</p>
               </div>
            </div>
         </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
         {[
           { label: "Total Platform Users", value: stats?.users || 0, icon: Users, color: "text-brand-primary", bg: "bg-brand-primary/5", trend: "+12%" },
           { label: "Total Active Farms", value: stats?.farms || 0, icon: Globe, color: "text-emerald-600", bg: "bg-emerald-50", trend: "+18%" },
           { label: "Expert Advisories", value: stats?.advisories || 0, icon: MessageSquareText, color: "text-blue-600", bg: "bg-blue-50", trend: "+5" },
           { label: "System Health", value: stats?.systemHealth || "100%", icon: Server, color: "text-slate-600", bg: "bg-slate-100", trend: "Stable" },
         ].map((s, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                 <div className={`w-12 h-12 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <s.icon className="h-6 w-6" />
                 </div>
                 <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">{s.trend}</span>
              </div>
              <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">{s.label}</p>
              <p className="text-3xl font-black text-slate-900">{s.value}</p>
           </div>
         ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
         
         {/* User List Panel */}
         <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-premium">
            <div className="flex items-center justify-between mb-10">
               <div>
                  <h2 className="text-2xl font-black text-slate-900">User Management</h2>
                  <p className="text-slate-400 text-sm font-medium">Recent registrations across all roles.</p>
               </div>
               <button className="text-brand-primary text-xs font-black uppercase tracking-widest hover:underline decoration-emerald-200">Export Registry</button>
            </div>
            <div className="space-y-4">
               {users?.map((u: any) => (
                  <div key={u.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl group hover:bg-white hover:shadow-lg hover:ring-1 hover:ring-slate-100 transition-all">
                     <div className="flex items-center gap-4">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.name}`} className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm" />
                        <div>
                           <p className="font-black text-slate-900">{u.name}</p>
                           <p className="text-xs font-bold text-slate-400 italic lowercase">{u.email}</p>
                        </div>
                     </div>
                     <div className="text-right flex flex-col items-end gap-2">
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                           u.role === 'ADMIN' ? 'bg-slate-900 text-white' : 
                           u.role === 'EXPERT' ? 'bg-emerald-500 text-white' : 
                           'bg-brand-primary text-white'
                        }`}>
                           {u.role}
                        </span>
                        <p className="text-[10px] font-bold text-slate-300 flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(u.createdAt).toLocaleDateString()}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Secondary Stats */}
         <div className="space-y-10">
            <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-premium h-full">
               <h3 className="text-xl font-bold text-slate-900 mb-8">Platform Traffic</h3>
               <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={growthData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 10, fontWeight: 700}} />
                        <YAxis hide />
                        <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                        <Bar dataKey="users" fill="#10B981" radius={[10, 10, 10, 10]} />
                     </BarChart>
                  </ResponsiveContainer>
               </div>
               <div className="mt-8 p-6 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Cloud Infrastructure</p>
                  <p className="text-sm font-bold text-slate-600 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     Node E-14 (Erode) Performance Nominal
                  </p>
               </div>
            </div>
         </div>

      </div>

    </div>
  );
};

export default AdminDash;

const MessageSquareText = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8H7"/><path d="M17 12H7"/>
  </svg>
)
