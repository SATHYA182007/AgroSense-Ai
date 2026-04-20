import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="p-8 rounded-3xl bg-white border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all group overflow-hidden relative"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl transform translate-x-12 -translate-y-12 transition-all group-hover:scale-150 ${color}`} />
      
      <div className={`p-4 rounded-2xl inline-block mb-6 shadow-sm group-hover:scale-110 transition-transform ${color} text-white`}>
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand-primary transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg line-clamp-3">
        {description}
      </p>

      <div className="mt-8 flex items-center text-brand-primary font-bold gap-2 group/btn cursor-pointer">
        Learn More 
        <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
