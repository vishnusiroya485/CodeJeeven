import React from 'react';
import { PhoneIcon, BusIcon } from './Icons';

export const PhoneFrame = ({ children, style, className }) => (
  <div 
    className={`absolute top-0 left-0 w-[240px] h-[460px] bg-[#0F172A] rounded-[2.5rem] border-[5px] border-[#0F172A] shadow-2xl overflow-hidden flex flex-col ring-1 ring-gray-800/50 transition-all duration-700 ease-in-out ${className}`}
    style={style}
  >
    <div className="flex-1 bg-[#F8FAFC] overflow-hidden flex flex-col relative w-full h-full rounded-[2.2rem]">
      <div className="flex justify-between items-center px-4 pt-2 pb-1.5 relative z-50 bg-[#F8FAFC]">
        <span className="text-[9px] font-extrabold text-gray-800 tracking-wide">12:33</span>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[18px] bg-[#0F172A] rounded-b-[10px]"></div>
        <div className="flex items-center gap-1 text-gray-800">
           <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
           <svg className="w-2.5 h-2.5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
        </div>
      </div>
      <div className="px-3 flex-1 flex flex-col relative">
        {children}
      </div>
      <div className="w-20 h-1 bg-gray-300 rounded-full mx-auto mt-1 mb-1"></div>
    </div>
  </div>
);

export const Mockup1 = () => (
  <>
    <div className="flex justify-between items-center mt-1 mb-4">
      <div>
        <p className="text-[9px] text-gray-500 font-bold mb-0.5">JaiJui Services</p>
        <h3 className="text-[14px] font-extrabold text-gray-900 leading-tight">Mobile Recharge</h3>
      </div>
      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shadow-sm border border-blue-100">
        <PhoneIcon className="w-4 h-4"/>
      </div>
    </div>
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 mb-3 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-white rounded-lg p-1 border border-gray-100 flex items-center justify-center">
           <img src="/images/bsnl_logo.png" alt="BSNL" className="w-full h-full object-contain" />
        </div>
        <div>
           <p className="text-[12px] font-bold text-gray-900">BSNL Pre-Paid</p>
           <p className="text-[9px] text-gray-500">Fast & Secure</p>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-2 border border-gray-200 flex items-center mb-3">
         <span className="text-[11px] font-bold text-gray-800 tracking-wider">+91 98765 43210</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
         <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-2 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[5px] font-bold px-1 py-0.5 rounded-bl-md">POPULAR</div>
            <p className="text-[14px] font-extrabold text-blue-700 mt-1">₹399</p>
            <p className="text-[7.5px] font-bold text-blue-600/80 mt-0.5 leading-tight">56 Days<br/>2GB/Day</p>
         </div>
         <div className="bg-white border border-gray-200 rounded-xl p-2 text-center relative">
            <p className="text-[14px] font-extrabold text-gray-700 mt-1">₹199</p>
            <p className="text-[7.5px] font-bold text-gray-500 mt-0.5 leading-tight">28 Days<br/>1.5GB/Day</p>
         </div>
      </div>
      <button className="w-full bg-[#12141D] text-white text-[11px] font-bold py-2.5 rounded-xl shadow-lg hover:bg-black transition-colors">
         Proceed to Pay
      </button>
    </div>
    
    <div className="flex justify-between items-center bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 shadow-sm mt-auto mb-2">
       <div className="flex items-center gap-2">
         <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
         <div>
           <p className="text-[9px] font-extrabold text-emerald-800">Last Recharge</p>
           <p className="text-[7.5px] font-bold text-emerald-600">Successful • Today 10:45 AM</p>
         </div>
       </div>
    </div>
  </>
);

export const Mockup2 = () => (
  <>
    <div className="flex justify-between items-center mt-1 mb-4">
      <div>
        <p className="text-[9px] text-gray-500 font-bold mb-0.5">JaiJui Services</p>
        <h3 className="text-[14px] font-extrabold text-gray-900 leading-tight">Bus Ticket Booking</h3>
      </div>
      <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center shadow-sm border border-orange-100">
        <BusIcon className="w-4 h-4"/>
      </div>
    </div>
    <div className="rounded-2xl mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.08)] relative overflow-hidden bg-white h-[100px]">
       <img src="/images/bus.jpg" alt="Bus" className="w-full h-full object-cover" />
       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
       <div className="absolute bottom-2 left-3">
         <p className="text-[12px] font-extrabold text-white leading-tight">Save Upto 20%</p>
         <p className="text-[8px] font-medium text-gray-200">On your first booking</p>
       </div>
    </div>
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 mb-2">
       <div className="flex justify-between items-center mb-3">
          <div className="flex-1">
             <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">From</p>
             <p className="text-[13px] font-extrabold text-gray-900">Delhi (DEL)</p>
          </div>
          <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center mx-2 text-gray-500 border border-gray-200 shadow-sm">
             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l-4-4M17 20l4-4"/></svg>
          </div>
          <div className="flex-1 text-right">
             <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">To</p>
             <p className="text-[13px] font-extrabold text-gray-900">Mumbai (BOM)</p>
          </div>
       </div>
       <div className="h-[1px] bg-gray-100 w-full mb-3"></div>
       <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-lg border border-gray-200 w-full">
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
             <span className="text-[9.5px] font-bold text-gray-700">Tomorrow, 15 Oct 2026</span>
          </div>
       </div>
       <button className="w-full bg-[#165141] text-white text-[11px] font-bold py-2.5 rounded-xl shadow-lg hover:bg-[#0f3d30] transition-colors">
          Search Buses
       </button>
    </div>
  </>
);

export const Mockup3 = () => (
  <>
    <div className="flex justify-between items-center mt-1 mb-4">
      <div>
        <p className="text-[9px] text-gray-500 font-bold mb-0.5">JaiJui Services</p>
        <h3 className="text-[14px] font-extrabold text-gray-900 leading-tight">API Integration</h3>
      </div>
      <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shadow-sm border border-purple-100">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      </div>
    </div>
    
    <div className="rounded-2xl mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.08)] relative overflow-hidden bg-white h-[90px]">
       <img src="/images/API_SERVICE.png" alt="API Service" className="w-full h-full object-cover" />
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
       <div className="absolute bottom-2 left-3">
         <div className="flex items-center gap-1.5 mb-0.5">
           <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
           <p className="text-[11px] font-extrabold text-white leading-tight">Servers Online</p>
         </div>
         <p className="text-[8px] font-medium text-gray-200">99.99% Guaranteed Uptime</p>
       </div>
    </div>
    
    <div className="bg-gradient-to-br from-[#12141D] to-[#1E293B] rounded-2xl p-3 text-white mb-2 shadow-xl border border-gray-800">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
           <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
           </div>
           <div>
             <p className="text-[9px] font-bold text-gray-300">BSNL Master API</p>
             <p className="text-[7.5px] text-emerald-400 font-mono">v2.1.0 Active</p>
           </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
         <div className="bg-white/5 rounded-lg p-2 border border-white/10">
            <p className="text-[8px] text-gray-400 mb-0.5">Avg Latency</p>
            <p className="text-[11px] font-bold text-white font-mono">42ms</p>
         </div>
         <div className="bg-white/5 rounded-lg p-2 border border-white/10">
            <p className="text-[8px] text-gray-400 mb-0.5">Success Rate</p>
            <p className="text-[11px] font-bold text-emerald-400 font-mono">100%</p>
         </div>
      </div>
      
      <button className="w-full bg-purple-600 text-white text-[11px] font-bold py-2 rounded-xl shadow-lg hover:bg-purple-700 transition-colors">
         View Documentation
      </button>
    </div>
  </>
);
