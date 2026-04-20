import { useState } from 'react';
import { 
  Camera, 
  Upload, 
  Scan, 
  ShieldCheck, 
  AlertTriangle, 
  Microscope, 
  Leaf, 
  ArrowRight,
  Smartphone,
  Loader2,
  Trash2
} from 'lucide-react';
import { motion } from 'framer-motion';

const DiseaseDetection = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        disease: "Blast Disease (Pyricularia oryzae)",
        accuracy: "98.4%",
        threat: "Critical",
        recommendation: "Immediate application of Tricyclazole 75 WP (0.6g/L) is required. Ensure soil moisture is above the threshold of 45%.",
        spreadRisk: "High (Regional)",
        detectedAt: new Date().toLocaleString()
      });
    }, 3000);
  };

  return (
    <div className="space-y-10">
      
      {/* Detection Engine Hero */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white shadow-premium relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary opacity-10 blur-[120px] -mr-32 -mt-32" />
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
            <div className="space-y-6 max-w-2xl">
               <div className="flex items-center gap-3 text-brand-primary">
                  <Scan className="h-6 w-6" />
                  <span className="text-xs font-black uppercase tracking-widest">Neural Vision v4.0 Active</span>
               </div>
               <h1 className="text-5xl font-black italic tracking-tight leading-tight">AI Pathogen Diagnostic Engine</h1>
               <p className="text-slate-400 font-bold text-lg leading-relaxed italic opacity-80">"Scan your crops with precision neural networks to detect 420+ diseases, nutrient deficiencies, and pest infestations in real-world conditions."</p>
            </div>
            <div className="shrink-0 flex gap-4">
               <button className="bg-white text-slate-900 p-8 rounded-[3rem] shadow-premium hover:shadow-premium-hover transition-all active:scale-95 group/btn">
                  <Upload className="h-8 w-8 group-hover/btn:-translate-y-1 transition-transform duration-500" />
               </button>
               <button 
                 onClick={startScan}
                 disabled={isScanning}
                 className="bg-brand-primary text-white px-10 py-8 rounded-[3rem] shadow-premium hover:shadow-premium-hover transition-all active:scale-95 flex items-center gap-4 font-black"
               >
                  {isScanning ? <Loader2 className="h-8 w-8 animate-spin" /> : <Camera className="h-8 w-8" />}
                  <span className="text-xl">Initialize Scan</span>
               </button>
            </div>
         </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
         
         {/* Live Preview / Scan Area */}
         <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-[4rem] p-12 border border-slate-100 shadow-premium aspect-video relative overflow-hidden group flex items-center justify-center bg-slate-50">
               <div className="absolute inset-0 bg-slate-900/5 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
               
               {isScanning ? (
                  <div className="relative z-10 text-center space-y-8">
                     <div className="w-32 h-32 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto flex items-center justify-center relative shadow-premium">
                        <Scan className="h-10 w-10 text-brand-primary" />
                        <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-xl animate-pulse" />
                     </div>
                     <div className="space-y-2">
                        <p className="text-3xl font-black text-slate-900">Neural Syncing...</p>
                        <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Analyzing Molecular Signatures • Frame 412/1200</p>
                     </div>
                  </div>
               ) : scanResult ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 w-full"
                  >
                     <img src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover rounded-[3rem] shadow-premium absolute inset-0 opacity-20 grayscale brightness-125" />
                     
                     <div className="relative bg-white/40 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/50 shadow-premium max-w-xl mx-auto space-y-8">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <div className="p-3 bg-red-500 rounded-2xl shadow-lg shadow-red-500/20">
                                 <AlertTriangle className="h-6 w-6 text-white" />
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Critical Threat Found</span>
                           </div>
                           <button onClick={() => setScanResult(null)} className="p-3 hover:bg-white/50 rounded-xl transition-all text-slate-400 hover:text-red-500 group"><Trash2 className="h-5 w-5" /></button>
                        </div>

                        <div className="space-y-4">
                           <h2 className="text-4xl font-black text-slate-900 tracking-tight">{scanResult.disease}</h2>
                           <div className="grid grid-cols-2 gap-4">
                              <div className="p-5 bg-white/50 rounded-2xl border border-white shadow-sm">
                                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">AI Accuracy Score</p>
                                 <p className="text-2xl font-black text-brand-primary">{scanResult.accuracy}</p>
                              </div>
                              <div className="p-5 bg-white/50 rounded-2xl border border-white shadow-sm">
                                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Spread Risk</p>
                                 <p className="text-2xl font-black text-amber-500">{scanResult.spreadRisk}</p>
                              </div>
                           </div>
                        </div>

                        <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4 border-none shadow-premium relative group/rec cursor-pointer">
                           <h3 className="text-brand-primary text-xs font-black uppercase tracking-widest flex items-center gap-2">
                              <Microscope className="h-4 w-4" /> Recommended Protocol
                           </h3>
                           <p className="text-slate-300 font-bold leading-relaxed text-sm italic">{scanResult.recommendation}</p>
                           <ArrowRight className="absolute bottom-6 right-6 h-6 w-6 text-brand-primary group-hover/rec:translate-x-2 transition-transform" />
                        </div>
                     </div>
                  </motion.div>
               ) : (
                  <div className="text-center space-y-6">
                     <div className="w-32 h-32 bg-slate-100 rounded-[3rem] border-4 border-dashed border-slate-200 flex items-center justify-center mx-auto text-slate-300 group-hover:border-brand-primary/50 group-hover:text-brand-primary transition-all">
                        <Smartphone className="h-12 w-12" />
                     </div>
                     <p className="text-slate-400 font-black italic">Awaiting Crop Vision Stream • Upload or Scan for Diagnostics</p>
                  </div>
               )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {[
                 { label: "Detected Pathogens", value: "3", icon: Microscope, color: "text-brand-primary", bg: "bg-brand-primary/5" },
                 { label: "Healthy Crops Identified", value: "142", icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-50" },
               ].map((s, i) => (
                 <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex items-center gap-8">
                    <div className={`w-16 h-16 rounded-[2rem] ${s.bg} ${s.color} flex items-center justify-center shrink-0`}>
                       <s.icon className="h-8 w-8" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{s.label}</p>
                       <p className="text-4xl font-black text-slate-900 mt-1">{s.value}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Sidebar - Regional Health */}
         <div className="space-y-10">
            <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-premium">
               <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3 italic">
                  <ShieldCheck className="h-5 w-5 text-brand-primary" /> Network Protection
               </h3>
               <div className="space-y-6">
                  {[
                    { district: "Erode", status: "Secure", health: "98%", color: "text-emerald-500", bg: "bg-emerald-50" },
                    { district: "Salem", status: "Monitoring", health: "82%", color: "text-amber-500", bg: "bg-amber-50" },
                    { district: "Tiruppur", status: "Critical", health: "45%", color: "text-red-500", bg: "bg-red-50" },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-3xl border-none hover:bg-white hover:shadow-lg transition-all cursor-crosshair">
                       <div>
                          <p className="font-black text-slate-900">{d.district}</p>
                          <span className={`text-[9px] font-black uppercase tracking-widest ${d.color}`}>{d.status}</span>
                       </div>
                       <div className="text-right">
                          <p className="text-xl font-black text-slate-900">{d.health}</p>
                          <div className="w-16 h-1.5 bg-slate-200 rounded-full mt-1">
                             <div className={`h-full rounded-full ${d.color === 'text-red-500' ? 'bg-red-500' : d.color === 'text-amber-500' ? 'bg-amber-500' : 'bg-brand-primary'}`} style={{ width: d.health }} />
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-premium group cursor-pointer overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 blur-3xl" />
               <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-black">Archive Management</h3>
                  <p className="text-slate-500 text-xs font-bold leading-relaxed italic">Access historical molecular logs and past intervention efficacy records.</p>
               </div>
               <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">42 Scan Records</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
         </div>

      </div>

    </div>
  );
};

export default DiseaseDetection;
