import React from 'react';
import { Link } from 'react-router-dom';
import { WalletIcon, ChevronRightIcon } from '../components/Icons';

export default function ApiPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-[#0A0A0A] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 animate-fade-in-up">
          <Link to="/" className="hover:text-teal-500 font-medium transition-colors">Home</Link>
          <ChevronRightIcon className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 dark:text-white font-bold">API Integration</span>
        </div>

        {/* Hero Area */}
        <div className="bg-white dark:bg-[#111111] rounded-[32px] p-10 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.02)] dark:shadow-none border border-gray-100 dark:border-white/5 flex flex-col lg:flex-row gap-12 items-center mb-16 animate-fade-in-up">
          <div className="flex-1">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-blue-900/10 dark:to-blue-950/5 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <WalletIcon className="w-10 h-10 text-[#14b8a6]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#12141D] dark:text-white mb-6 leading-tight">
              Developer-First APIs
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
              Build your fintech solutions with our robust, secure, and scalable APIs. We offer integrations for Recharges, Bill Payments, Fastag, and Bus Booking.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3.5 bg-teal-500 text-white rounded-xl font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-teal-500/20">
                Read Documentation
              </button>
              <button className="px-8 py-3.5 bg-teal-50 dark:bg-white/5 text-[#14b8a6] dark:text-white border border-teal-100 dark:border-white/10 rounded-xl font-bold hover:bg-teal-100 dark:hover:bg-white/10 transition-colors">
                Generate API Key
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full relative max-w-[500px] mx-auto lg:mx-0">
            <div className="bg-white dark:bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 p-8 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 dark:bg-blue-950/20 rounded-bl-full -z-10 opacity-50"></div>
               
               <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6">Key API Capabilities</h3>
               
               <div className="flex flex-col gap-4">
                 {[
                   { method: 'GET', endpoint: '/v1/balance', desc: 'Check wallet balance in real-time.' },
                   { method: 'POST', endpoint: '/v1/recharge', desc: 'Process instant mobile & DTH recharges.' },
                   { method: 'POST', endpoint: '/v1/bus/search', desc: 'Search available buses & live inventory.' },
                   { method: 'GET', endpoint: '/v1/status', desc: 'Track transaction status & callbacks.' },
                 ].map((api, idx) => (
                   <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5 hover:border-blue-200 transition-colors">
                     <span className={`px-2 py-1 text-[10px] font-extrabold rounded-md shadow-sm mt-0.5 ${api.method === 'GET' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/35 dark:text-emerald-400' : 'bg-teal-100 text-[#14b8a6] dark:bg-blue-950/35 dark:text-blue-450'}`}>
                       {api.method}
                     </span>
                     <div>
                       <p className="font-mono text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">{api.endpoint}</p>
                       <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{api.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
