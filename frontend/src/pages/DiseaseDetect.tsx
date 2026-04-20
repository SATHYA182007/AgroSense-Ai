import React, { useState } from 'react';
import { 
  Camera, 
  Upload, 
  ShieldAlert, 
  CheckCircle, 
  Microscope, 
  ArrowRight,
  Info,
  Calendar,
  AlertTriangle,
  FileSearch,
  ScanSearch
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const activeAlerts = [
  {
    culture: "Rice / Paddy",
    disease: "Blast (Magnaporthe oryzae)",
    risk: "High",
    probability: 92,
    window: "72 hours",
    prevention: "Apply Tricyclazole 75 WP @ 0.6 g/l immediately before next rainfall.",
    color: "red"
  },
  {
    culture: "Cotton",
    disease: "Bollworm",
    risk: "Moderate",
    probability: 54,
    window: "5-7 Days",
    prevention: "Field scouting for egg masses. Increase light traps.",
    color: "amber"
  }
];

const DiseaseDetect = () => {
  const [dragActive, setDragActive] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
         setImage(reader.result as string);
         setIsScanning(true);
         setTimeout(() => {
           setIsScanning(false);
           setScanComplete(true);
         }, 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AI Diagnostic Center</h1>
           <p className="text-slate-500 font-medium italic">Vision-based disease identification and early warning intelligence.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="p-3 bg-red-50 text-red-600 rounded-2xl flex items-center gap-2 border border-red-100 px-6">
              <ShieldAlert className="h-5 w-5 animate-pulse" />
              <span className="text-sm font-black uppercase tracking-widest">2 Outbreaks Tracked</span>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
         
         {/* Live Scanning UI */}
         <div className="space-y-6">
            <h2 className="text-xl font-black text-slate-900 ml-2">Visual Diagnostic Tool</h2>
            <div 
              onDragOver={(e) => {e.preventDefault(); setDragActive(true);}}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleUpload}
              className={`relative h-[480px] rounded-[3.5rem] border-4 border-dashed transition-all flex flex-col items-center justify-center p-8 group overflow-hidden bg-white shadow-premium ${
                dragActive ? 'border-brand-primary bg-brand-primary/5' : 'border-slate-100 hover:border-slate-200'
              }`}
            >
               {image ? (
                 <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <img src={image} className="max-h-full max-w-full rounded-3xl object-contain shadow-2xl" alt="Upload" />
                    <AnimatePresence>
                      {isScanning && (
                        <motion.div 
                          initial={{ top: '0%' }}
                          animate={{ top: '100%', transition: { repeat: Infinity, duration: 2, ease: "linear" } }}
                          className="absolute left-0 right-0 h-1 bg-brand-primary/60 blur-sm shadow-[0_0_15px_rgba(16,185,129,0.8)] z-20"
                        />
                      )}
                    </AnimatePresence>
                 </div>
               ) : (
                 <div className="text-center space-y-6">
                    <div className="p-8 bg-slate-50 rounded-full inline-block group-hover:scale-110 transition-transform">
                       <Camera className="h-16 w-16 text-slate-300 group-hover:text-brand-primary" />
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-slate-400">Scan Crop for Disease</h3>
                       <p className="text-slate-400 font-bold max-w-xs mt-2 italic text-sm">Upload clear images of leaves or stems for AI analysis.</p>
                    </div>
                    <label className="bg-brand-primary text-white font-black px-10 py-5 rounded-3xl cursor-pointer hover:bg-brand-secondary transition-all shadow-premium active:scale-95 inline-block">
                       Choose Image
                       <input type="file" className="hidden" onChange={handleUpload} />
                    </label>
                 </div>
               )}
            </div>
         </div>

         {/* Results and Alerts */}
         <div className="space-y-8">
            <h2 className="text-xl font-black text-slate-900 ml-2">Real-time Intelligence</h2>
            
            <AnimatePresence mode="wait">
              {scanComplete ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-emerald-600 text-white p-10 rounded-[3rem] shadow-premium relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                   <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-white/20 rounded-2xl">
                         <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <div>
                         <p className="text-emerald-200 font-bold text-xs uppercase tracking-widest">Diagnostic Complete</p>
                         <h3 className="text-3xl font-black tracking-tight">Healthy Tissue</h3>
                      </div>
                   </div>
                   <p className="text-emerald-50 text-lg font-medium leading-relaxed mb-10 italic">
                      "No pathogenic patterns detected in the current layer. The crop appears vibrant and properly nutrient-balanced. Confidence level 98.4%."
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center">
                         <p className="text-[10px] font-black text-emerald-200 uppercase tracking-widest mb-1">Confidence</p>
                         <p className="text-2xl font-black">High</p>
                      </div>
                      <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center">
                         <p className="text-[10px] font-black text-emerald-200 uppercase tracking-widest mb-1">Treatment</p>
                         <p className="text-2xl font-black">None</p>
                      </div>
                   </div>
                   <button 
                     onClick={() => {setImage(null); setScanComplete(false);}}
                     className="w-full mt-10 py-5 bg-white text-emerald-900 font-black rounded-3xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 active:scale-95"
                   >
                     New Scan Request <ScanSearch className="h-5 w-5" />
                   </button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                   {activeAlerts.map((alert, i) => (
                     <div key={i} className={`bg-white p-8 rounded-[2.5rem] border-2 shadow-sm flex flex-col md:flex-row gap-6 relative overflow-hidden transition-all hover:shadow-xl ${
                       alert.color === 'red' ? 'border-red-100' : 'border-amber-100'
                     }`}>
                        <div className={`shrink-0 p-5 rounded-3xl h-fit ${
                          alert.color === 'red' ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-500'
                        }`}>
                           <AlertTriangle className="h-8 w-8" />
                        </div>
                        <div className="flex-1 space-y-4">
                           <div className="flex items-center justify-between">
                              <h4 className="font-extrabold text-slate-900 text-xl">{alert.culture} Alert</h4>
                              <span className={`px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] ${
                                alert.color === 'red' ? 'bg-red-500 text-white' : 'bg-amber-500 text-white'
                              }`}>{alert.risk} Risk</span>
                           </div>
                           <p className="text-slate-700 font-bold text-lg mb-2">Potential <span className="text-brand-primary">{alert.disease}</span> outbreak.</p>
                           <p className="text-slate-500 text-sm font-medium italic border-l-4 border-slate-100 pl-4 mb-4">
                              "{alert.prevention}"
                           </p>
                           <div className="flex items-center gap-8 pt-4 border-t border-slate-50">
                              <div className="space-y-0.5">
                                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Match Prob.</p>
                                 <p className="text-xl font-black text-slate-900">{alert.probability}%</p>
                              </div>
                              <div className="space-y-0.5">
                                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Action Window</p>
                                 <p className="text-xl font-black text-slate-900">{alert.window}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
              )}
            </AnimatePresence>

         </div>

      </div>

    </div>
  );
};

export default DiseaseDetect;
