import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import AuthLayout from '../layouts/AuthLayout';
import { Link, useLocation } from 'react-router-dom';
import { 
  User, 
  Settings, 
  Microscope, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  CheckCircle,
  Mail,
  Lock,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { authService } from '../api/auth';

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["FARMER", "ADMIN", "EXPERT"]),
});

type SignupFormValues = z.infer<typeof signupSchema>;

const Signup = () => {
  const [role, setRole] = useState<"FARMER" | "ADMIN" | "EXPERT">("FARMER");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const { login: finishLogin } = useAuth();

  const isLogin = location.pathname === '/login';

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { 
      role: "FARMER",
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: SignupFormValues) => {
    setIsLoading(true);
    setError("");
    try {
      if (isLogin) {
        const res = await authService.login({ email: data.email, password: data.password });
        finishLogin(res.token, { id: res.id, name: res.name, email: res.email, role: res.role });
      } else {
        const res = await authService.signup(data);
        finishLogin(res.token, { id: res.id, name: res.name, email: res.email, role: res.role });
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Authentication failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (demoRole: "FARMER" | "ADMIN" | "EXPERT") => {
    setIsLoading(true);
    setError("");
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockUsers = {
      FARMER: { id: "demo-farmer", name: "Demo Farmer", email: "farmer@agrosense.ai", role: "FARMER" as const },
      ADMIN: { id: "demo-admin", name: "System Administrator", email: "admin@agrosense.ai", role: "ADMIN" as const },
      EXPERT: { id: "demo-expert", name: "Agronomy Expert", email: "expert@agrosense.ai", role: "EXPERT" as const },
    };

    try {
      finishLogin("demo-token", mockUsers[demoRole]);
    } catch (err) {
      setError("Demo login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const roles = [
    { 
      id: "FARMER", 
      title: "Farmer", 
      desc: "Manage farm & crops", 
      icon: User,
      color: "bg-brand-primary" 
    },
    { 
      id: "ADMIN", 
      title: "Admin", 
      desc: "Platform & District ops", 
      icon: Settings,
      color: "bg-slate-800" 
    },
    { 
      id: "EXPERT", 
      title: "Expert", 
      desc: "Agricultural advisory", 
      icon: Microscope,
      color: "bg-emerald-600" 
    }
  ] as const;

  return (
    <AuthLayout 
      title={isLogin ? "Sign In" : "Create Account"} 
      subtitle={isLogin ? "Welcome back to AgroSense AI Command Center." : "Join the AI-powered agriculture revolution today."}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" autoComplete="off">
        
        {error && (
            <motion.div 
               initial={{ opacity: 0, y: -10 }} 
               animate={{ opacity: 1, y: 0 }}
               className="bg-red-50 text-red-500 p-4 rounded-2xl border border-red-100 text-sm font-bold flex items-center gap-3"
            >
               <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
               {error}
            </motion.div>
        )}

        {/* Role Selection (Only for Signup) */}
        {!isLogin && (
          <div className="space-y-3">
            <label className="text-slate-700 font-bold text-sm uppercase tracking-widest ml-1 text-[10px]">Select Your Role</label>
            <div className="grid grid-cols-3 gap-3">
              {roles.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setRole(item.id);
                    setValue('role', item.id);
                  }}
                  className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center gap-1.5 text-center group relative overflow-hidden ${
                    role === item.id 
                    ? 'border-brand-primary bg-brand-primary/5 shadow-premium' 
                    : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${role === item.id ? 'text-brand-primary' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span className={`text-[9px] font-black leading-tight uppercase tracking-widest ${role === item.id ? 'text-slate-900' : 'text-slate-600'}`}>{item.title}</span>
                  {role === item.id && (
                     <motion.div layoutId="check" className="absolute -top-1 -right-1 text-brand-primary">
                        <CheckCircle className="h-5 w-5 bg-white rounded-full" fill="white" />
                     </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Fields */}
        <div className="space-y-6 relative">
          {!isLogin && (
            <div className="relative group">
              <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1 block mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
                <input 
                  {...register("name")}
                  type="text" 
                  placeholder="John Doe"
                  autoComplete="off"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 flex pl-12 pr-4 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium text-slate-900 outline-none placeholder:text-slate-300" 
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm font-bold mt-1 ml-1">{errors.name.message}</p>}
            </div>
          )}

          <div className="relative group">
            <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1 block mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
              <input 
                {...register("email")}
                type="email" 
                placeholder="Enter mail"
                autoComplete="new-password"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 flex pl-12 pr-4 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium text-slate-900 outline-none placeholder:text-slate-300" 
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm font-bold mt-1 ml-1">{errors.email.message}</p>}
          </div>

          <div className="relative group">
            <div className="flex justify-between items-center mb-2">
               <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Password</label>
               {isLogin && <Link to="#" className="text-[10px] font-black text-brand-primary uppercase tracking-widest hover:underline decoration-emerald-200">Forgot?</Link>}
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
              <input 
                {...register("password")}
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                autoComplete="new-password"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 flex pl-12 pr-12 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium text-slate-900 outline-none placeholder:text-slate-300" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm font-bold mt-1 ml-1">{errors.password.message}</p>}
          </div>
        </div>

        <div className="pt-2">
           <button 
             type="submit"
             disabled={isLoading}
             className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-premium hover:shadow-premium-hover flex items-center justify-center gap-3 group active:scale-95 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
           >
             {isLoading ? (
               <>Validating <Loader2 className="h-5 w-5 animate-spin" /></>
             ) : (
               <>{isLogin ? "Sign In to Dashboard" : "Create Account"} <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></>
             )}
           </button>

           {/* Demo Access Section */}
           <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                 <div className="h-[1px] flex-1 bg-slate-100" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Quick Demo Access</span>
                 <div className="h-[1px] flex-1 bg-slate-100" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                 {[
                    { role: 'FARMER', label: 'Farmer', icon: User },
                    { role: 'ADMIN', label: 'Admin', icon: Settings },
                    { role: 'EXPERT', label: 'Expert', icon: Microscope }
                 ].map((demo) => (
                    <button
                       key={demo.role}
                       type="button"
                       onClick={() => handleDemoLogin(demo.role as any)}
                       disabled={isLoading}
                       className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-slate-100 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all group disabled:opacity-50"
                    >
                       <demo.icon className="h-5 w-5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                       <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-900">{demo.label}</span>
                    </button>
                 ))}
              </div>
           </div>
        </div>

        <div className="text-center">
           <span className="text-slate-400 font-medium tracking-tight text-sm">
             {isLogin ? "New to the platform? " : "Already have an account? "}
           </span>
           <Link to={isLogin ? "/signup" : "/login"} className="text-brand-primary font-bold hover:underline hover:decoration-emerald-200 ml-1 transition-all text-sm">
             {isLogin ? "Sign Up Now" : "Sign In Now"}
           </Link>
        </div>

      </form>
    </AuthLayout>
  );
};

export default Signup;
