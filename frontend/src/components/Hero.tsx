import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, CloudRain, ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-dashboard.png';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-light/30 to-transparent pointer-events-none -z-10" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 -left-64 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-emerald-300/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 border border-brand-primary/20 rounded-full text-brand-secondary font-semibold text-sm glass-effect">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              Trusted by 50,000+ Farmers Worldwide
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              AI-Powered <br />
              <span className="bg-gradient-to-r from-brand-primary to-emerald-700 bg-clip-text text-transparent">
                Climate-Resilient
              </span> <br />
              Smart Agriculture
            </h1>

            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              AgroSense AI transforms raw agricultural data into clear, actionable farming decisions. 
              Reduce climate risk, prevent crop disease, and maximize yield with high-fidelity intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-premium hover:shadow-premium-hover flex items-center justify-center gap-2 group">
                Begin Onboarding <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-effect border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/80 transition-all">
                Explore Features
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-brand-primary">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-bold text-2xl">45%</span>
                </div>
                <p className="text-slate-500 font-medium text-sm">Yield Increase</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-brand-primary">
                  <CloudRain className="h-5 w-5" />
                  <span className="font-bold text-2xl">30%</span>
                </div>
                <p className="text-slate-500 font-medium text-sm">Water Saving</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-brand-primary">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-bold text-2xl">92%</span>
                </div>
                <p className="text-slate-500 font-medium text-sm">Risk Avoidance</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-brand-primary/20 blur-[80px] rounded-full group-hover:bg-brand-primary/30 transition-all duration-700" />
              <img 
                src={heroImage} 
                alt="AgroSense AI Dashboard Mockup" 
                className="relative rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/20 transform transition-all duration-700 hover:rotate-2 hover:scale-[1.02]"
              />
              
              {/* Floating Action Badge */}
              <div className="absolute -bottom-8 -left-8 glass-effect p-6 rounded-2xl border border-white/30 shadow-premium animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-primary/20 text-brand-primary rounded-xl">
                    <CloudRain className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Weather Alert</h4>
                    <p className="text-sm text-slate-500">Unusual rainfall in District X</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
