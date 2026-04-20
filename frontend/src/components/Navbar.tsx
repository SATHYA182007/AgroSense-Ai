import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-brand-primary rounded-xl"
            >
              <Leaf className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              AgroSense <span className="text-brand-primary underline decoration-emerald-200">AI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-brand-primary transition-colors font-medium">Home</Link>
            <Link to="/features" className="text-slate-600 hover:text-brand-primary transition-colors font-medium">Features</Link>
            <Link to="/impact" className="text-slate-600 hover:text-brand-primary transition-colors font-medium">Impact</Link>
            <Link to="/about" className="text-slate-600 hover:text-brand-primary transition-colors font-medium">About</Link>
            
            <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
              <Link to="/login" className="text-slate-900 font-semibold hover:text-brand-primary transition-colors">Login</Link>
              <Link 
                to="/signup" 
                className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-premium hover:shadow-premium-hover flex items-center gap-2 group"
              >
                Sign Up <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-effect border-b border-white/20 p-4 space-y-4"
        >
          <Link to="/" className="block text-slate-900 font-medium py-2">Home</Link>
          <Link to="/features" className="block text-slate-900 font-medium py-2">Features</Link>
          <Link to="/impact" className="block text-slate-900 font-medium py-2">Impact</Link>
          <Link to="/about" className="block text-slate-900 font-medium py-2">About</Link>
          <hr className="border-slate-200" />
          <Link to="/login" className="block text-slate-900 font-semibold py-2">Login</Link>
          <Link to="/signup" className="block bg-brand-primary text-white text-center py-3 rounded-xl font-bold">Get Started</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
