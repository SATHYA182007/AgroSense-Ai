import { useState } from 'react';
import { 
  Search, 
  Filter, 
  PlayCircle, 
  FileText, 
  Download, 
  Bookmark,
  ExternalLink,
  ChevronRight,
  Newspaper,
  Microscope,
  Database,
  ArrowRight
} from 'lucide-react';

const KnowledgeCenter = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Diseases', 'Irrigation', 'Market Data', 'Climate Science', 'Policy'];

  const resources = [
    { title: "Advanced Pest Management in Rice", type: "Guide", time: "15 min read", category: "Diseases", tags: ["Rice", "Pest"], premium: true },
    { title: "Drip Irrigation: A Farmer's Guide", type: "Video", time: "12 min watch", category: "Irrigation", tags: ["Water", "Efficiency"], premium: false },
    { title: "Q3 Market Price Projections", type: "Report", time: "8 min read", category: "Market Data", tags: ["Finance", "Trends"], premium: true },
    { title: "Climate Resilience in Semiarid Zones", type: "Paper", time: "25 min read", category: "Climate Science", tags: ["Soil", "Climate"], premium: false },
  ];

  return (
    <div className="space-y-10">
      
      {/* Search & Hero */}
      <div className="bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-premium">
         <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Agricultural Intelligence Hub</h1>
            <p className="text-slate-400 font-bold text-lg leading-relaxed italic house">Access the world's most advanced agricultural database, scientific journals, and real-time market research.</p>
            
            <div className="relative group">
               <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
               </div>
               <input 
                 type="text" 
                 placeholder="Search scientific records, crop guides, or expert papers..."
                 className="w-full bg-slate-50 border-none rounded-3xl py-6 pl-16 pr-8 focus:ring-4 focus:ring-brand-primary/10 font-bold text-slate-900 placeholder:text-slate-300 shadow-inner"
               />
            </div>
         </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-10">
         
         {/* Categories Sidebar */}
         <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-900 rounded-[3rem] p-8 text-white shadow-premium">
               <h3 className="text-xs font-black uppercase tracking-widest text-brand-primary mb-6">Subject Filter</h3>
               <div className="space-y-2">
                  {categories.map(cat => (
                     <button 
                       key={cat}
                       onClick={() => setActiveCategory(cat)}
                       className={`w-full text-left py-4 px-6 rounded-2xl text-sm font-black transition-all ${activeCategory === cat ? 'bg-brand-primary text-white' : 'text-slate-400 hover:text-white'}`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-premium">
               <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 italic">
                  <Bookmark className="h-5 w-5 text-brand-primary" /> Curated Registry
               </h3>
               <div className="space-y-4">
                  {[
                    { label: "IPCC 2026 Soil Summary", icon: Microscope },
                    { label: "Global Wheat Shortage", icon: Newspaper },
                    { label: "Tamil Nadu Agri Stats", icon: Database }
                  ].map((cur, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                       <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors flex items-center gap-3">
                          <cur.icon className="h-4 w-4 opacity-50" /> {cur.label}
                       </span>
                       <ChevronRight className="h-4 w-4 text-slate-200 group-hover:text-brand-primary transition-colors" />
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Resources Feed */}
         <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between px-4">
               <h2 className="text-2xl font-black text-slate-900">Recommended Intelligence</h2>
               <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-4 py-2 shadow-sm text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <Filter className="h-3 w-3" /> Sort by Relevance
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               {resources.filter(r => activeCategory === 'All' || r.category === activeCategory).map((res, i) => (
                  <div key={i} className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm hover:shadow-premium transition-all group relative overflow-hidden">
                     {res.premium && (
                        <div className="absolute top-0 right-0 py-2 px-6 bg-brand-primary text-white text-[9px] font-black uppercase tracking-widest rounded-bl-3xl">
                           Premium
                        </div>
                     )}
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                              {res.type === 'Video' ? <PlayCircle className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
                           </div>
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{res.type} • {res.time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-brand-primary transition-colors">{res.title}</h3>
                        <div className="flex flex-wrap gap-2 pt-2">
                           {res.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-[9px] font-black uppercase tracking-widest italic">{tag}</span>
                           ))}
                        </div>
                        <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-4">
                           <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-primary hover:gap-3 transition-all">
                              Read Insight <ArrowRight className="h-3 w-3" />
                           </button>
                           <button className="p-3 hover:bg-slate-50 rounded-xl text-slate-300 hover:text-slate-900 transition-colors">
                              <Download className="h-4 w-4" />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Pagination / Load More */}
            <button className="w-full py-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] font-black text-slate-400 uppercase tracking-widest hover:border-brand-primary/50 hover:bg-white hover:text-brand-primary transition-all active:scale-95 flex items-center justify-center gap-3">
               Explore Extended Database <ExternalLink className="h-4 w-4" />
            </button>
         </div>

      </div>

    </div>
  );
};

export default KnowledgeCenter;
