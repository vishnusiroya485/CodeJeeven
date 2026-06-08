import React from 'react';
import { Link } from 'react-router-dom';
import { WalletIcon, ChevronRightIcon } from '../components/Icons';

export default function ApiPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-rose-600 font-medium">Home</Link>
          <ChevronRightIcon className="w-3 h-3" />
          <span className="text-gray-900 font-bold">API Integration</span>
        </div>

        {/* Hero Area */}
        <div className="bg-white rounded-[32px] p-10 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <WalletIcon className="w-10 h-10 text-rose-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#12141D] mb-6 leading-tight">
              Developer-First APIs
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-xl">
              Build your fintech solutions with our robust, secure, and scalable APIs. We offer integrations for Recharges, Bill Payments, Fastag, and Bus Booking.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3.5 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-500/20">
                Read Documentation
              </button>
              <button className="px-8 py-3.5 bg-rose-50 text-rose-700 border border-rose-100 rounded-xl font-bold hover:bg-rose-100 transition-colors">
                Generate API Key
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full relative max-w-[500px] mx-auto lg:mx-0">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-8 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-bl-full -z-10 opacity-50"></div>
               
               <h3 className="text-xl font-extrabold text-gray-900 mb-6">Key API Capabilities</h3>
               
               <div className="flex flex-col gap-4">
                 {[
                   { method: 'GET', endpoint: '/v1/balance', desc: 'Check wallet balance in real-time.' },
                   { method: 'POST', endpoint: '/v1/recharge', desc: 'Process instant mobile & DTH recharges.' },
                   { method: 'POST', endpoint: '/v1/bus/search', desc: 'Search available buses & live inventory.' },
                   { method: 'GET', endpoint: '/v1/status', desc: 'Track transaction status & callbacks.' },
                 ].map((api, idx) => (
                   <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-rose-200 transition-colors">
                     <span className={`px-2 py-1 text-[10px] font-extrabold rounded-md shadow-sm mt-0.5 ${api.method === 'GET' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                       {api.method}
                     </span>
                     <div>
                       <p className="font-mono text-sm font-bold text-gray-800 mb-1">{api.endpoint}</p>
                       <p className="text-xs text-gray-500 font-medium">{api.desc}</p>
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
