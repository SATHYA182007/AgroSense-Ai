import React, { useState } from 'react';
import { 
  Users, 
  MessageSquareText, 
  AlertTriangle, 
  Leaf, 
  CheckCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  MapPin,
  Send,
  Plus,
  Loader2,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { expertService } from '../api/expert';

const ExpertDash = () => {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('publish');
  const [newAdvisory, setNewAdvisory] = useState({ advisory: '', region: '', crop: '' });

  const { data: advisories, isLoading } = useQuery({
    queryKey: ['expertAdvisories'],
    queryFn: () => expertService.getMyAdvisories(),
    retry: false
  });

  const mutation = useMutation({
    mutationKey: ['publishAdvisory'],
    mutationFn: (data: any) => expertService.publishAdvisory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expertAdvisories'] });
      setNewAdvisory({ advisory: '', region: '', crop: '' });
      setActiveTab('history');
    }
  });

  if (isLoading) return (
     <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-brand-primary animate-spin" />
     </div>
  );

  return (
    <div className="space-y-10">
      
      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
         {[
           { label: "Total Advisories", value: advisories?.length || 0, icon: MessageSquareText, color: "text-brand-primary", bg: "bg-brand-primary/5" },
           { label: "Active Regional Risk", value: "High", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50" },
           { label: "Farmer Reach", value: "2.4k", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
           { label: "Impact Score", value: "9.8", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
         ].map((s, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className={`w-12 h-12 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center mb-6`}>
                 <s.icon className="h-6 w-6" />
              </div>
              <p className="text-xs font-black text-slate-400 tracking-widest uppercase">{s.label}</p>
              <p className="text-3xl font-black text-slate-900 mt-2">{s.value}</p>
           </div>
         ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
         
         {/* Action Panel */}
         <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-premium relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 blur-3xl" />
               <h3 className="text-2xl font-black mb-6">Expert Command</h3>
               <div className="space-y-4">
                  <button 
                    onClick={() => setActiveTab('publish')}
                    className={`w-full py-4 px-6 rounded-2xl flex items-center justify-between font-black transition-all ${activeTab === 'publish' ? 'bg-brand-primary text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                  >
                     Publish Advisory <Plus className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('history')}
                    className={`w-full py-4 px-6 rounded-2xl flex items-center justify-between font-black transition-all ${activeTab === 'history' ? 'bg-brand-primary text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                  >
                     Advisory History <Clock className="h-5 w-5" />
                  </button>
               </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-premium">
               <div className="flex items-center gap-3 text-amber-500 mb-6">
                  <AlertTriangle className="h-6 w-6" />
                  <span className="text-xs font-black uppercase tracking-widest leading-none">Critical Alerts</span>
               </div>
               <div className="space-y-6">
                  <div className="p-5 bg-amber-50 rounded-2xl border border-amber-100 ring-2 ring-amber-100/20">
                     <p className="text-amber-900 font-bold text-sm">Flood Warning: Western Districts</p>
                     <p className="text-amber-700/70 text-xs mt-1 font-medium italic">Urgent advisory required for Paddy crops.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Content Area */}
         <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
               {activeTab === 'publish' ? (
                  <motion.div 
                    key="publish"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-premium"
                  >
                     <h2 className="text-3xl font-black text-slate-900 mb-8">Publish New Advisory</h2>
                     <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Target Region</label>
                              <div className="relative">
                                 <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                 <input 
                                   type="text" 
                                   placeholder="e.g. Erode, Tamil Nadu"
                                   className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary/20 font-bold text-slate-900 placeholder:text-slate-300"
                                   value={newAdvisory.region}
                                   onChange={(e) => setNewAdvisory({...newAdvisory, region: e.target.value})}
                                 />
                              </div>
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Affected Crop</label>
                              <div className="relative">
                                 <Leaf className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                 <input 
                                   type="text" 
                                   placeholder="e.g. Organic Paddy"
                                   className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary/20 font-bold text-slate-900 placeholder:text-slate-300"
                                   value={newAdvisory.crop}
                                   onChange={(e) => setNewAdvisory({...newAdvisory, crop: e.target.value})}
                                 />
                              </div>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Advisory Content</label>
                           <textarea 
                             rows={6}
                             placeholder="Provide detailed scientific advice, mitigation steps, and recommended treatments..."
                             className="w-full bg-slate-50 border-none rounded-[2rem] p-8 focus:ring-2 focus:ring-brand-primary/20 font-bold text-slate-900 placeholder:text-slate-300 resize-none"
                             value={newAdvisory.advisory}
                             onChange={(e) => setNewAdvisory({...newAdvisory, advisory: e.target.value})}
                           />
                        </div>

                        <button 
                           onClick={() => mutation.mutate(newAdvisory)}
                           disabled={mutation.isPending || !newAdvisory.advisory}
                           className="w-full py-5 bg-brand-primary text-white rounded-3xl font-black text-xl shadow-premium hover:shadow-premium-hover transition-all flex items-center justify-center gap-3 active:scale-95 disabled:grayscale disabled:opacity-50"
                        >
                           {mutation.isPending ? <Loader2 className="h-6 w-6 animate-spin" /> : <><Send className="h-6 w-6" /> Finalize & Broadcast</>}
                        </button>
                     </div>
                  </motion.div>
               ) : (
                  <motion.div 
                    key="history"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                     <div className="flex items-center justify-between px-6">
                        <h2 className="text-3xl font-black text-slate-900">Broadcast History</h2>
                        <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-4 py-2 shadow-sm">
                           <Filter className="h-4 w-4 text-slate-400" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Filter Feed</span>
                        </div>
                     </div>
                     
                     <div className="space-y-4">
                        {advisories?.map((adv: any) => (
                           <div key={adv.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                              <div className="flex items-start justify-between mb-4">
                                 <div>
                                    <div className="flex items-center gap-2 mb-2">
                                       <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-widest">{adv.crop || 'Global'}</span>
                                       <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                          <MapPin className="h-2 w-2" /> {adv.region}
                                       </span>
                                    </div>
                                    <p className="text-slate-900 font-bold leading-relaxed">{adv.advisory}</p>
                                 </div>
                                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{new Date(adv.createdAt).toLocaleDateString()}</span>
                              </div>
                              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                 <div className="flex items-center -space-x-2">
                                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />)}
                                    <span className="text-[10px] font-black text-slate-400 ml-4">+420 Farmers Reacted</span>
                                 </div>
                                 <button className="text-brand-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group">
                                    View Engagement <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>

      </div>

    </div>
  );
};

export default ExpertDash;
