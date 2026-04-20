import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { 
  BarChart3, 
  CloudSun, 
  Flame, 
  Microscope, 
  Droplets, 
  ShoppingBag, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "AI Climate Risk Dashboard",
    description: "High-resolution predictive analytics for drought, flood, and heat stress. Get hyperlocal risk scores (0-100) before you plant.",
    icon: CloudSun,
    color: "bg-blue-600",
    delay: 0.1,
  },
  {
    title: "Disease Early Warning",
    description: "Detect outbreaks 7-10 days earlier using climate patterns. Upload leaf images for real-time AI-powered diagnostic matching.",
    icon: Microscope,
    color: "bg-emerald-600",
    delay: 0.2,
  },
  {
    title: "Smart Irrigation Advisory",
    description: "IoT-ready water management. Save up to 40% more water by irrigating only when and where your crop actually needs it.",
    icon: Droplets,
    color: "bg-blue-400",
    delay: 0.3,
  },
  {
    title: "Pre-Sowing Recommendations",
    description: "Optimize your crop choice based on soil health, seasonal climate predictions, and projected market demand.",
    icon: ShieldCheck,
    color: "bg-brand-primary",
    delay: 0.4,
  },
  {
    title: "Live Mandi Intelligence",
    description: "Track real-time prices across 1,000+ markets. Get hold/sell recommendations based on AI price forecasting.",
    icon: ShoppingBag,
    color: "bg-amber-600",
    delay: 0.5,
  },
  {
    title: "Strategic Farm Analytics",
    description: "Monitor expense vs. profit ROI in real-time. Make data-driven decisions that impact your multi-season profitability.",
    icon: BarChart3,
    color: "bg-slate-800",
    delay: 0.6,
  },
];

const LandingPage = () => {
  return (
    <div className="bg-brand-background min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Feature Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full font-bold text-sm tracking-widest uppercase mb-4"
          >
            Core Modules
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">The Future of Agriculture <br />is Data-Driven</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience a comprehensive suite of AI modules designed to maximize productivity and minimize risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Stats/Social Proof Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-full bg-brand-primary/10 skew-x-12 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Real-World Impact <br />for Modern Farmers.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              AgroSense AI isn't just software. It's a climate resilience engine that helps thousands of farmers increase income and reduce waste.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center group">
                <div className="p-3 bg-brand-primary/20 rounded-xl group-hover:bg-brand-primary transition-colors">
                  <Zap className="h-6 w-6 text-brand-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">400% ROI</h4>
                  <p className="text-slate-400">Average return on investment reported by users.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="p-3 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-500 transition-colors">
                  <Flame className="h-6 w-6 text-emerald-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">2.5M Gallons</h4>
                  <p className="text-slate-400">Water saved through our smart irrigation modules.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-brand-primary transition-colors cursor-pointer group">
                <h5 className="text-brand-primary font-bold text-4xl mb-2 group-hover:scale-110 transition-transform">50k+</h5>
                <p className="text-slate-400 font-medium">Active Farmers</p>
             </div>
             <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-brand-primary transition-colors cursor-pointer group">
                <h5 className="text-brand-primary font-bold text-4xl mb-2 group-hover:scale-110 transition-transform">850</h5>
                <p className="text-slate-400 font-medium">District Records</p>
             </div>
             <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-brand-primary transition-colors cursor-pointer group">
                <h5 className="text-emerald-400 font-bold text-4xl mb-2 group-hover:scale-110 transition-transform">1.2M</h5>
                <p className="text-slate-400 font-medium">AI Diagnoses</p>
             </div>
             <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-brand-primary transition-colors cursor-pointer group">
                <h5 className="text-emerald-400 font-bold text-4xl mb-2 group-hover:scale-110 transition-transform">100+</h5>
                <p className="text-slate-400 font-medium">Expert Consultants</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-brand-primary to-emerald-900 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden flex flex-col items-center">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-3xl space-y-8 relative z-10"
           >
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">Ready to build the future of farming?</h2>
              <p className="text-xl text-emerald-100/80 leading-relaxed font-medium">
                Join our network of precision agriculture pioneers. Signup is free for individual farmers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-premium hover:shadow-premium-hover active:scale-95">
                  Get Started for Free
                </button>
                <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all shadow-premium hover:shadow-premium-hover active:scale-95">
                   Request Demo
                </button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-brand-primary rounded-xl">
                 <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                AgroSense AI
              </span>
            </div>
            <p className="text-slate-500 max-w-md text-lg leading-relaxed font-medium">
              A premium, modern agriculture intelligence platform helping farmers make better climate and crop decisions through AI.
            </p>
            <div className="text-slate-400 text-sm font-medium">
               © 2026 AgroSense AI Platform. All rights reserved. Built with precision for sustainable agriculture.
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Platform</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li className="hover:text-brand-primary transition-colors cursor-pointer">Dashboards</li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">Climate Risk</li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">Crop Advisory</li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">Market Intel</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Company</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li className="hover:text-brand-primary transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">Impact Report</li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">Privacy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

// Mock Leaf icon
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
