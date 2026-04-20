import { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Plus, 
  Search, 
  MoreVertical,
  Activity,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Database,
  MapPin,
  ClipboardList
} from 'lucide-react';

const Tasks = () => {
  const [isAdding, setIsAdding] = useState(false);

  const taskStats = [
    { label: "Active Operations", value: "12", icon: Activity, color: "text-brand-primary", bg: "bg-brand-primary/5" },
    { label: "Completed Steps", value: "450+", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Urgent Interventions", value: "2", icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Data Integrity", value: "99.9%", icon: Database, color: "text-blue-500", bg: "bg-blue-50" },
  ];

  const tasks = [
    { title: "Calibrate Water Sensors", farm: "West Field B", priority: "High", date: "Today, 4:00 PM", status: "In Progress", category: "Maintenance" },
    { title: "Fertilizer Cycle IV", farm: "Main Orchard", priority: "Medium", date: "Tomorrow, 8:00 AM", status: "Scheduled", category: "Fertilization" },
    { title: "Soil Sample Collection", farm: "North Ridge", priority: "Low", date: "Wed, Oct 12", status: "Draft", category: "Research" },
    { title: "Market Price Review", farm: "Global Market", priority: "High", date: "Today, 10:00 AM", status: "Overdue", category: "Finance" },
  ];

  return (
    <div className="space-y-10">
      
      {/* Task Header Card */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white shadow-premium relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary opacity-10 blur-[120px] -mr-32 -mt-32" />
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
            <div className="space-y-4">
               <h1 className="text-5xl font-black tracking-tight leading-none italic">Task Command Hub</h1>
               <p className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs">Precision Management • Operational Excellence</p>
               <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center -space-x-2">
                     {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 shadow-sm" />)}
                  </div>
                  <span className="text-xs font-black text-slate-400">Collaborative Mode Active</span>
               </div>
            </div>
            <button 
              onClick={() => setIsAdding(!isAdding)}
              className="bg-brand-primary text-white p-6 md:p-8 rounded-[2.5rem] shadow-premium hover:shadow-premium-hover transition-all active:scale-95 group/btn"
            >
               <Plus className="h-8 w-8 group-hover/btn:rotate-90 transition-transform duration-500" />
            </button>
         </div>
      </div>

      {/* Task Metrics */}
      <div className="grid md:grid-cols-4 gap-8">
         {taskStats.map((s, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all">
              <div className={`w-12 h-12 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center mb-6`}>
                 <s.icon className="h-6 w-6" />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
              <p className="text-3xl font-black text-slate-900">{s.value}</p>
           </div>
         ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
         
         {/* Operations List */}
         <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between px-6">
               <h2 className="text-2xl font-black text-slate-900">Current Assignments</h2>
               <div className="flex items-center gap-4">
                  <div className="relative group">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                     <input 
                       type="text" 
                       placeholder="Find tasks..."
                       className="bg-white border border-slate-100 py-3 pl-10 pr-4 rounded-xl text-xs font-black transition-all focus:ring-4 focus:ring-brand-primary/10 shadow-sm"
                     />
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               {tasks.map((task, i) => (
                  <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-premium transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
                     {task.priority === 'High' && (
                        <div className="absolute top-0 right-0 w-1 h-full bg-brand-primary group-hover:w-4 transition-all duration-500" />
                     )}
                     <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                           <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                              task.priority === 'High' ? 'bg-brand-primary/10 text-brand-primary' : 
                              task.priority === 'Medium' ? 'bg-amber-50 text-amber-500' : 
                              'bg-slate-100 text-slate-500'
                           }`}>
                              {task.priority} Priority
                           </span>
                           <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-1 italic">
                              <MapPin className="h-2.5 w-2.5" /> {task.farm}
                           </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{task.title}</h3>
                        <div className="flex items-center gap-6">
                           <div className="flex items-center gap-2 text-xs font-black text-slate-400">
                              <Clock className="h-4 w-4" /> {task.date}
                           </div>
                           <div className="flex items-center gap-2 text-xs font-black text-slate-400">
                              <ClipboardList className="h-4 w-4" /> {task.category}
                           </div>
                        </div>
                     </div>
                     <div className="flex items-center gap-6 self-end md:self-center">
                        <div className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest leading-none ${
                           task.status === 'In Progress' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                           task.status === 'Scheduled' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                           'bg-slate-50 text-slate-400 border border-slate-100'
                        }`}>
                           {task.status}
                        </div>
                        <button className="p-3 hover:bg-slate-50 rounded-xl transition-colors">
                           <MoreVertical className="h-5 w-5 text-slate-300 hover:text-slate-900" />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Calendar Support */}
         <div className="space-y-10">
            <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-premium">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-slate-900 italic">Timeline</h3>
                  <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-300 transition-colors"><ChevronRight className="h-5 w-5" /></button>
               </div>
               <div className="grid grid-cols-7 gap-4 mb-8 text-center">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                     <p key={d} className="text-[10px] font-black text-slate-300">{d}</p>
                  ))}
                  {[...Array(28)].map((_, i) => (
                     <div key={i} className={`h-12 flex items-center justify-center rounded-2xl text-[11px] font-black cursor-pointer transition-all ${
                        i === 11 ? 'bg-brand-primary text-white shadow-premium' : 
                        [5, 12, 19].includes(i) ? 'text-brand-primary italic' : 'text-slate-900 hover:bg-slate-50'
                     }`}>
                        {i + 1}
                        { [5, 12, 19].includes(i) && <div className="absolute w-1 h-1 bg-brand-primary rounded-full bottom-2" /> }
                     </div>
                  ))}
               </div>
               <div className="p-6 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Upcoming Cycle</h4>
                  <div className="flex items-center gap-3">
                     <TrendingUp className="h-5 w-5 text-emerald-500" />
                     <p className="text-sm font-bold text-slate-700">Pre-Harvest Readiness Assessment Schedule</p>
                  </div>
               </div>
            </div>

            <div className="bg-brand-primary rounded-[3rem] p-10 text-white shadow-premium group relative overflow-hidden cursor-pointer active:scale-95 transition-all">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 blur-2xl" />
               <h3 className="text-xl font-black mb-4">View Performance Archive</h3>
               <p className="text-white/60 text-xs font-bold leading-relaxed mb-6 italic">Historical data analysis of team efficiency and task completion velocity across all sectors.</p>
               <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform duration-500" />
            </div>
         </div>

      </div>

    </div>
  );
};

export default Tasks;
