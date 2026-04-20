import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CloudSun, 
  Microscope, 
  ShoppingBag, 
  BarChart3, 
  CheckSquare, 
  MessageSquareText, 
  BookOpen, 
  UserCircle,
  Bell,
  Search,
  LogOut,
  ChevronRight,
  Menu,
  Globe,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

interface SidebarItemProps {
  icon: any;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, href, isActive }) => (
  <Link 
    to={href}
    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group ${
      isActive 
      ? 'bg-brand-primary text-white shadow-premium' 
      : 'text-slate-500 hover:bg-brand-primary/5 hover:text-brand-primary font-medium'
    }`}
  >
    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'group-hover:text-brand-primary'}`} />
    <span className="flex-1 text-sm font-bold uppercase tracking-tight">{label}</span>
    {isActive && <ChevronRight className="h-4 w-4" />}
  </Link>
);

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { user, logout } = useAuth();

  const farmerItems = [
    { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Market Intel", icon: ShoppingBag, href: "/dashboard/market" },
    { label: "Disease Detect", icon: Microscope, href: "/dashboard/disease" },
    { label: "Climate Risk", icon: CloudSun, href: "/dashboard/climate" },
    { label: "Regional Risk", icon: Globe, href: "/dashboard/crops" },
    { label: "Knowledge Hub", icon: BookOpen, href: "/dashboard/knowledge" },
    { label: "Tasks & Alerts", icon: CheckSquare, href: "/dashboard/tasks" },
    { label: "AI Assistant", icon: MessageSquareText, href: "/dashboard/chat" },
  ];

  const adminItems = [
    { label: "System Control", icon: LayoutDashboard, href: "/admin" },
    { label: "Global Trends", icon: BarChart3, href: "/admin/trends" },
    { label: "User Registry", icon: UserCircle, href: "/admin/users" },
    { label: "Master Config", icon: Settings, href: "/admin/settings" },
  ];

  const expertItems = [
    { label: "Advisory Feed", icon: LayoutDashboard, href: "/expert" },
    { label: "Regional Risk", icon: Globe, href: "/expert/risk" },
    { label: "Farmer Issues", icon: MessageSquareText, href: "/expert/issues" },
  ];

  const menuItems = user?.role === 'ADMIN' ? adminItems : user?.role === 'EXPERT' ? expertItems : farmerItems;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
      
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 h-full bg-white border-r border-slate-200 z-40 overflow-hidden hidden lg:block"
      >
        <div className="p-6 flex items-center gap-3 border-b border-slate-50 h-20 overflow-hidden whitespace-nowrap">
          <div className="p-2 bg-brand-primary rounded-xl shrink-0">
             <LeafIcon className="h-6 w-6 text-white" />
          </div>
          {isSidebarOpen && (
            <span className="text-xl font-bold tracking-tight text-slate-900 transition-opacity duration-300">
               AgroSense <span className="text-brand-primary">AI</span>
            </span>
          )}
        </div>

        <div className="p-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <SidebarItem 
              key={item.href}
              {...item}
              isActive={location.pathname === item.href}
            />
          ))}
        </div>

        <div className="absolute bottom-4 left-0 w-full px-4 space-y-2">
           <SidebarItem icon={UserCircle} label="Profile" href="/dashboard/profile" isActive={false} />
           <button 
             onClick={logout}
             className="flex items-center gap-3 px-4 py-3 rounded-2xl w-full text-red-500 hover:bg-red-50 font-semibold transition-all"
           >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
           </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:pl-[280px]' : 'lg:pl-[80px]'}`}>
        
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-50 rounded-xl transition-colors hidden lg:block"
            >
              <Menu className="h-6 w-6 text-slate-500" />
            </button>
            <div className="relative group hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-brand-primary" />
              <input 
                type="text" 
                placeholder="Search farm records, weather, or mandi prices..." 
                className="bg-slate-100 border-none rounded-xl py-2.5 pl-10 pr-4 w-[350px] focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 hover:bg-slate-50 rounded-xl transition-colors relative border border-slate-100">
               <Bell className="h-5 w-5 text-slate-500" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-brand-accent rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
               <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-slate-900">{user?.name || "Farmer User"}</p>
                  <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">{user?.role || "FARMER"} • Premium</p>
               </div>
               <img 
                 src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || "Farmer"}`} 
                 className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200" 
                 alt="Profile"
               />
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="p-8 max-w-[1600px] mx-auto">
          {children}
        </div>

      </main>

    </div>
  );
};

export default DashboardLayout;

const LeafIcon = ({ className }: { className?: string }) => (
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
