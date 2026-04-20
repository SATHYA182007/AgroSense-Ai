import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  User, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  Edit3, 
  Globe, 
  Bell, 
  Lock, 
  MoreVertical,
  CheckCircle,
  Activity,
  Award,
  ArrowRight
} from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  const userStats = [
    { label: "Account Status", value: "Verified", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Platform Tenure", value: "6 Months", icon: Calendar, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Trust Score", value: "9.8/10", icon: Award, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Active Connections", value: "142", icon: Activity, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-10">
      
      {/* Hero Profile Card */}
      <div className="bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-premium relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary opacity-5 blur-[120px] -mr-32 -mt-32" />
         <div className="flex flex-col md:flex-row items-center md:items-start gap-12 relative z-10">
            <div className="relative group">
               <img 
                 src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || "Farmer"}`} 
                 className="w-48 h-48 rounded-[3rem] bg-slate-50 border-4 border-white shadow-premium group-hover:scale-105 transition-transform duration-500" 
                 alt="Profile"
               />
               <button className="absolute bottom-4 right-4 bg-brand-primary text-white p-3 rounded-2xl border-4 border-white shadow-lg hover:bg-brand-secondary transition-all active:scale-95">
                  <Edit3 className="h-5 w-5" />
               </button>
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
               <div>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                     <h1 className="text-5xl font-black text-slate-900 tracking-tight">{user?.name || "Premium User"}</h1>
                     <CheckCircle className="h-8 w-8 text-brand-primary" fill="currentColor" />
                  </div>
                  <p className="text-slate-400 font-bold text-lg flex items-center justify-center md:justify-start gap-2">
                     <Mail className="h-5 w-5" /> {user?.email}
                  </p>
               </div>
               <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                  <div className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest leading-none flex items-center gap-2">
                     <ShieldCheck className="h-3 w-3 text-brand-primary" /> Multi-Factor Active
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest leading-none border border-emerald-100">
                     Agri-Expert Tier I
                  </div>
               </div>
            </div>
            <button className="p-4 hover:bg-slate-50 rounded-2xl transition-all self-start hidden md:block">
               <MoreVertical className="h-6 w-6 text-slate-400" />
            </button>
         </div>
      </div>

      {/* Profile Metrics */}
      <div className="grid md:grid-cols-4 gap-8">
         {userStats.map((s, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className={`w-12 h-12 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center mb-6`}>
                 <s.icon className="h-6 w-6" />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
              <p className="text-3xl font-black text-slate-900">{s.value}</p>
           </div>
         ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
         
         {/* Details Panel */}
         <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-premium">
               <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3">
                  <User className="h-6 w-6 text-brand-primary" /> Personal Intelligence Overview
               </h2>
               <div className="grid md:grid-cols-2 gap-12">
                  {[
                    { label: "Operating District", value: "Erode, Tamil Nadu", icon: MapPin },
                    { label: "Expert License ID", value: "AG-EXPER-4290", icon: ShieldCheck },
                    { label: "Primary Language", value: "English, Tamil", icon: Globe },
                    { label: "Last System Login", value: "Active 2h ago", icon: ClockIcon }
                  ].map((field, i) => (
                    <div key={i} className="space-y-2 group">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                          <field.icon className="h-3 w-3" /> {field.label}
                       </label>
                       <div className="p-5 bg-slate-50 rounded-2xl border-none font-bold text-slate-900 group-hover:bg-brand-primary/5 transition-all">
                          {field.value}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Security Quick Actions */}
         <div className="space-y-10">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-premium">
               <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <Lock className="h-5 w-5 text-brand-primary" /> Security Center
               </h3>
               <div className="space-y-4">
                  <button className="w-full p-5 bg-slate-800 rounded-2xl flex items-center justify-between group hover:bg-slate-700 transition-all font-bold">
                     <span className="text-sm">Reset Root Password</span>
                     <ArrowRight className="h-4 w-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full p-5 bg-slate-800 rounded-2xl flex items-center justify-between group hover:bg-slate-700 transition-all font-bold">
                     <span className="text-sm">Manage Active Sessions</span>
                     <ArrowRight className="h-4 w-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full p-5 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-between group hover:bg-red-500/20 transition-all font-bold border border-red-500/20">
                     <span className="text-sm">Deactivate Account</span>
                     <ShieldCheck className="h-4 w-4 opacity-50" />
                  </button>
               </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-premium">
               <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Bell className="h-5 w-5 text-brand-primary" /> Communication
               </h3>
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <p className="text-sm font-bold text-slate-700">Email Notifications</p>
                     <div className="w-12 h-6 bg-brand-primary rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                     </div>
                  </div>
                  <div className="flex items-center justify-between">
                     <p className="text-sm font-bold text-slate-700">Mobile Push Alerts</p>
                     <div className="w-12 h-6 bg-slate-200 rounded-full relative">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>

    </div>
  );
};

export default Profile;

const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
