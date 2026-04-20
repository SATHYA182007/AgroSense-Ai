import { useState } from 'react';
import { 
  Plus, 
  Send, 
  User, 
  Search, 
  Settings, 
  Video, 
  Phone, 
  ShieldCheck, 
  Activity,
  FileText,
  Image as ImageIcon,
  CheckCheck
} from 'lucide-react';

const FarmChat = () => {
  const [activeChat, setActiveChat] = useState('Expert Advice');
  const [message, setMessage] = useState('');

  const chatSessions = [
    { name: "Expert Advisory Feed", lastMsg: "Historical paddy cycles suggests...", type: "Broadcast", active: true, online: true },
    { name: "Dr. Arvind (Plant Pathologist)", lastMsg: "The fungal samples are analyzed.", type: "Direct", active: false, online: true },
    { name: "Regional Market Intel", lastMsg: "Spot price increase in Wheat (v2).", type: "Group", active: false, online: true },
    { name: "Global Climate Alerts", lastMsg: "Heatwave trajectory shifted.", type: "Alerts", active: false, online: false },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex gap-10">
      
      {/* Sidebar - Chat List */}
      <div className="w-96 flex flex-col gap-8 h-full">
         <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white shadow-premium shrink-0 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 blur-3xl" />
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-black italic">Conversations</h2>
               <button className="p-3 bg-brand-primary text-white rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all"><Plus className="h-5 w-5" /></button>
            </div>
            <div className="relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-brand-primary transition-colors" />
               <input 
                 type="text" 
                 placeholder="Search contacts..."
                 className="w-full bg-slate-800 border-none rounded-xl py-4 pl-12 pr-4 text-xs font-black text-white placeholder:text-slate-500 focus:ring-2 focus:ring-brand-primary/20"
               />
            </div>
         </div>

         <div className="bg-white rounded-[3.5rem] p-8 border border-slate-100 shadow-premium flex-1 overflow-y-auto space-y-4">
            {chatSessions.map((chat, i) => (
               <div 
                 key={i} 
                 onClick={() => setActiveChat(chat.name)}
                 className={`flex items-center justify-between p-6 rounded-3xl cursor-pointer transition-all ${activeChat === chat.name ? 'bg-brand-primary/5 ring-2 ring-brand-primary/10 shadow-sm' : 'hover:bg-slate-50'}`}
               >
                  <div className="flex items-center gap-4">
                     <div className="relative">
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.name}`} 
                          className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm" 
                        />
                        {chat.online && <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />}
                     </div>
                     <div>
                        <p className={`font-black text-slate-900 ${activeChat === chat.name ? 'text-brand-primary' : ''}`}>{chat.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 italic truncate w-32">{chat.lastMsg}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-2">12m</p>
                     <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-[8px] font-black uppercase tracking-widest">{chat.type}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-full gap-8">
         {/* Top Header */}
         <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-premium flex items-center justify-between shrink-0">
            <div className="flex items-center gap-6">
               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeChat}`} className="w-16 h-16 rounded-[2rem] bg-slate-50 shadow-sm border border-slate-100" />
               <div>
                  <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                     {activeChat} <ShieldCheck className="h-5 w-5 text-brand-primary" fill="currentColor" />
                  </h3>
                  <div className="flex items-center gap-3">
                     <span className="flex items-center gap-2 text-xs font-black text-emerald-500 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live Now
                     </span>
                     <span className="text-xs font-black text-slate-300 uppercase tracking-widest ml-4 italic">• Sector: TN-Global</span>
                  </div>
               </div>
            </div>
            <div className="flex items-center gap-4">
               {[Video, Phone, Settings].map((Icon, i) => (
                  <button key={i} className="p-4 hover:bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-900 transition-all active:scale-95 border border-transparent hover:border-slate-100"><Icon className="h-6 w-6" /></button>
               ))}
               <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all ml-4">Export Log</button>
            </div>
         </div>

         {/* Messages Feed */}
         <div className="flex-1 bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-premium overflow-y-auto space-y-12 flex flex-col relative">
            <div className="flex items-center gap-4 justify-center py-6 text-[10px] font-black uppercase tracking-widest text-slate-300 separator relative">
               <span className="px-6 bg-white relative z-10 italic">Intelligence Protocol Established</span>
            </div>

            {/* Mock Messages */}
            <div className="flex flex-col gap-10">
               <div className="flex gap-6 max-w-2xl group">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                     <Activity className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="space-y-3">
                     <div className="bg-slate-50 p-8 rounded-[2.5rem] rounded-tl-none border-none relative">
                        <p className="text-slate-900 font-bold leading-relaxed italic text-lg opacity-80">"Analyzing historical paddy cycles in the Erode district. Based on Q1-Q3 results, a phosphorus-heavy intervention is recommended within the next 48 hours to maximize yield velocity."</p>
                     </div>
                     <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Expert System • 10:42 AM</span>
                  </div>
               </div>

               <div className="flex flex-row-reverse gap-6 max-w-2xl ml-auto text-right group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                     <User className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="space-y-3">
                     <div className="bg-brand-primary p-8 rounded-[2.5rem] rounded-tr-none text-white shadow-premium">
                        <p className="font-black leading-relaxed text-lg">Confirmed. Initiating procurement for Phosphate-MAX via the marketplace now. Will sync farm sensors accordingly.</p>
                     </div>
                     <div className="flex items-center justify-end gap-2 text-[10px] font-black text-brand-primary uppercase tracking-widest mr-1">
                        Seen <CheckCheck className="h-3 w-3" />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Input Box */}
         <div className="bg-white rounded-[3.5rem] p-8 border border-slate-100 shadow-premium flex items-center gap-6 shrink-0 relative group">
            <div className="absolute inset-0 bg-brand-primary/5 rounded-[3.5rem] opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
            <div className="flex gap-4">
               {[ImageIcon, FileText].map((Icon, i) => (
                  <button key={i} className="p-4 hover:bg-slate-100 rounded-3xl text-slate-400 group-focus-within:text-brand-primary transition-all active:scale-90"><Icon className="h-6 w-6" /></button>
               ))}
            </div>
            <input 
              type="text" 
              placeholder="Inject command or message to the intelligence network..."
              className="flex-1 bg-transparent border-none py-4 text-lg font-bold text-slate-900 placeholder:text-slate-300 focus:ring-0 italic"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="bg-brand-primary text-white p-6 rounded-[2rem] shadow-premium hover:shadow-premium-hover hover:scale-105 active:scale-95 transition-all group/send flex items-center gap-3">
               <span className="text-xs font-black uppercase tracking-widest ml-1 px-4 border-r border-white/20 hidden md:block">Transmit</span>
               <Send className="h-6 w-6 group-hover/send:translate-x-1 group-hover/send:-translate-y-1 transition-transform" />
            </button>
         </div>

      </div>

    </div>
  );
};

export default FarmChat;
