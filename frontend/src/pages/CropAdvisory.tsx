import React, { useState } from 'react';
import { 
  Leaf, 
  ArrowRight, 
  Droplets, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Search,
  Sparkles,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const recommendations = [
  {
    name: "Black Chickpeas",
    suitability: 98,
    yield: "1.2 - 1.5 Tons/Acre",
    profit: "₹45,000 / Acre",
    water: "Low",
    confidence: "94%",
    traits: ["Drought Tolerant", "Nitrogen Fixing", "High ROI"],
    summary: "Perfectly suited for current low moisture soil levels and projected dry spell in May.",
    color: "emerald"
  },
  {
    name: "Premium Maize",
    suitability: 82,
    yield: "2.5 - 3.0 Tons/Acre",
    profit: "₹38,000 / Acre",
    water: "Medium",
    confidence: "78%",
    traits: ["Quick Harvest", "High Demand", "Pest Sensitive"],
    summary: "Moderate susceptibility to heat stress. Recommended only if irrigation sync is active.",
    color: "amber"
  },
  {
    name: "Organic Millet",
    suitability: 75,
    yield: "0.8 - 1.0 Tons/Acre",
    profit: "₹32,000 / Acre",
    water: "Very Low",
    confidence: "88%",
    traits: ["Zero Waste", "Nutrient Dense", "Hardy"],
    summary: "Highly resilient but lower absolute profit compared to pulses this season.",
    color: "blue"
  }
];

const CropAdvisory = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AI Crop Intelligence</h1>
           <p className="text-slate-500 font-medium italic">Our neural network analyzes 20+ variables for maximum yield optimization.</p>
        </div>
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-2xl border border-emerald-100">
           <Sparkles className="h-4 w-4 text-emerald-600 animate-bounce" />
           <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">v2.4 Engine Active</span>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-premium overflow-hidden relative">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
               <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Soil Type</label>
               <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-brand-primary/10 transition-all">
                  <option>Loamy Red Soil</option>
                  <option>Black Cotton Soil</option>
                  <option>Sandy Clay</option>
                  <option>Laterite</option>
               </select>
            </div>
            <div className="space-y-3">
               <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Water Source</label>
               <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-brand-primary/10 transition-all">
                  <option>Borewell Drip</option>
                  <option>Open Well</option>
                  <option>Canal/Rain Only</option>
               </select>
            </div>
            <div className="space-y-3">
               <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Season Goal</label>
               <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-brand-primary/10 transition-all">
                  <option>Maximize Profit</option>
                  <option>Minimum Risk</option>
                  <option>Low Water Need</option>
               </select>
            </div>
            <div className="flex items-end">
               <button 
                 onClick={handleAnalyze}
                 disabled={isAnalyzing}
                 className="w-full bg-brand-primary hover:bg-brand-secondary text-white p-4 rounded-2xl font-black text-lg transition-all shadow-premium hover:shadow-premium-hover flex items-center justify-center gap-3 active:scale-95 disabled:grayscale"
               >
                 {isAnalyzing ? (
                   <>
                     <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                     <span>Analyzing...</span>
                   </>
                 ) : (
                   <>
                     <Zap className="h-5 w-5" />
                     <span>Get Advisory</span>
                   </>
                 )}
               </button>
            </div>
         </div>
      </div>

      <AnimatePresence mode="wait">
        {showResults && (
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0 }}
             className="space-y-8"
           >
              <div className="flex items-center gap-4 mb-4">
                 <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight underline decoration-emerald-200 decoration-8 underline-offset-[-2px]">
                   Top Intelligence Recommendations
                 </h2>
                 <span className="text-sm font-bold text-slate-400">Match found in 0.8s</span>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {recommendations.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`bg-white p-8 rounded-[3rem] border border-slate-100 shadow-premium relative overflow-hidden group ${i === 0 ? 'ring-4 ring-emerald-500/20' : ''}`}
                  >
                    {i === 0 && (
                       <div className="absolute top-0 right-0 py-2 px-6 bg-emerald-500 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-bl-3xl z-10">
                          Primary Choice
                       </div>
                    )}
                    
                    <div className="relative z-10">
                       <div className={`p-4 rounded-3xl mb-8 flex items-center justify-between ${
                         i === 0 ? 'bg-emerald-50 text-emerald-600' : 
                         i === 1 ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                       }`}>
                          <Leaf className="h-8 w-8" />
                          <div className="text-right">
                             <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Suitability</p>
                             <p className="text-2xl font-black">{item.suitability}%</p>
                          </div>
                       </div>

                       <h3 className="text-2xl font-black text-slate-900 mb-2">{item.name}</h3>
                       <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed italic">
                          "{item.summary}"
                       </p>

                       <div className="space-y-4 mb-10">
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100/50">
                             <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-emerald-500" />
                                <span className="text-xs font-bold text-slate-500">Exp. Profit</span>
                             </div>
                             <span className="text-sm font-extrabold text-slate-900">{item.profit}</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100/50">
                             <div className="flex items-center gap-2">
                                <Droplets className="h-4 w-4 text-blue-500" />
                                <span className="text-xs font-bold text-slate-500">Water Need</span>
                             </div>
                             <span className="text-sm font-extrabold text-slate-900">{item.water}</span>
                          </div>
                       </div>

                       <div className="flex flex-wrap gap-2 mb-10">
                          {item.traits.map(t => (
                            <span key={t} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-wider">{t}</span>
                          ))}
                       </div>

                       <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-black transition-all group-hover:shadow-xl flex items-center justify-center gap-3">
                          Select Crop <ArrowRight className="h-5 w-5" />
                       </button>
                    </div>

                    {/* Background Glow */}
                    <div className={`absolute -bottom-16 -left-16 w-48 h-48 blur-[100px] opacity-10 group-hover:opacity-30 transition-all ${
                       i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-amber-500' : 'bg-blue-500'
                    }`} />
                  </motion.div>
                ))}
              </div>
           </motion.div>
        )}
      </AnimatePresence>

      {!showResults && !isAnalyzing && (
         <div className="flex flex-col items-center justify-center py-24 text-center opacity-40">
            <div className="p-8 bg-slate-100 rounded-full mb-8">
               <Search className="h-16 w-16 text-slate-300" />
            </div>
            <h3 className="text-2xl font-black text-slate-400">Ready to suggest.</h3>
            <p className="text-slate-400 font-bold max-w-xs mt-2">Adjust your farm settings above and click 'Get Advisory' to run the engine.</p>
         </div>
      )}

    </div>
  );
};

export default CropAdvisory;
