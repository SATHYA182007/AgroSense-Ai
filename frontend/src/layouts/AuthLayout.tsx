import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Globe, Shield, Zap } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  showBackButton?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, showBackButton = true }) => {
  return (
    <div className="h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden font-inter">
      {/* Left Column: Information / Marketing */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-between p-12 lg:p-20">
        {/* Background Image Mockup */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/Users/sathyam/.gemini/antigravity/brain/6102c18f-9ebb-4c83-8e59-ad0f4e0c47e2/premium_agrotech_dashboard_mockup_1775460694042.png" 
             alt="AgroSense AI Mockup"
             className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-110 lg:scale-100 transition-transform duration-[10s] ease-in-out hover:scale-110"
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/80 to-slate-900/40" />
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 z-0">
           <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-primary rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
           <Link to="/" className="flex items-center gap-4 transition-transform hover:scale-105 inline-block w-fit group">
              <div className="relative">
                 <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full scale-150 animate-pulse" />
                 <Leaf className="h-9 w-9 text-brand-primary relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              </div>
              <div className="flex flex-col">
                 <span className="text-2xl font-black tracking-tighter text-white italic group-hover:text-brand-primary transition-colors duration-500 leading-none">AgroSense AI</span>
                 <span className="text-[8px] font-black tracking-[0.3em] text-brand-primary/60 uppercase mt-1">Smart Agriculture Intelligence</span>
              </div>
           </Link>

           <div className="mt-20 max-w-md">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight italic uppercase"
              >
                Visionary <span className="text-brand-primary">Agri-Intelligence</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-lg font-bold leading-relaxed border-l-4 border-brand-primary/50 pl-6"
              >
                Empowering farmers with AI-driven intelligence and resilient crop management strategies.
              </motion.p>
           </div>
        </div>

        <div className="relative z-10 space-y-8">
           {[
             { icon: Globe, text: "Global Market & Weather Intelligence", desc: "Real-time insights from 1,000+ markets." },
             { icon: Shield, text: "Climate-Resilient Strategies", desc: "Predictive analytics for risk avoidance." },
             { icon: Zap, text: "Instant AI Diagnostics", desc: "Identify crop diseases in seconds." }
           ].map((feature, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 + i * 0.1 }}
               className="flex items-start gap-4 group"
             >
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-brand-primary/20 group-hover:border-brand-primary/30 transition-all">
                   <feature.icon className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                   <h4 className="text-white font-bold text-sm mb-1">{feature.text}</h4>
                   <p className="text-slate-500 text-xs font-medium">{feature.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="relative z-10 pt-12 border-t border-white/10">
           <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Trusted by 50,000+ Farmers Globally
           </p>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 flex flex-col h-full bg-slate-50 lg:bg-white overflow-y-auto">
        {/* Mobile Header / Back Button */}
        <div className="flex items-center justify-between p-6 lg:px-12 lg:py-8 sticky top-0 bg-white/80 backdrop-blur-xl z-20">
           {showBackButton ? (
             <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group px-4 py-2 hover:bg-slate-50 rounded-xl font-bold text-sm">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
             </Link>
           ) : <div />}
           
           <div className="lg:hidden flex items-center gap-2">
              <div className="p-1.5 bg-brand-primary rounded-lg shadow-sm">
                 <Leaf className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-black tracking-tighter text-slate-900 italic uppercase">AgroSense AI</span>
           </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 lg:px-24">
           <div className="w-full max-w-sm mx-auto">
              {/* Form Header */}
              <div className="mb-10 text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-black text-slate-900 mb-2 tracking-tight italic uppercase"
                >
                  {title}
                </motion.h1>
                <p className="text-slate-500 font-bold text-sm tracking-tight">{subtitle}</p>
              </div>

              {/* Form Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {children}
              </motion.div>
           </div>
        </div>

        {/* Footer */}
        <div className="p-8 text-center text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] opacity-50">
          © 2026 AgroSense AI Platform.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

const Leaf = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" 
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a13 13 0 0 1-10 10Z" />
    <path d="M19 2a13 13 0 0 1-10 10" />
    <path d="M11 20a13 13 0 0 0 10-10" />
  </svg>
)
