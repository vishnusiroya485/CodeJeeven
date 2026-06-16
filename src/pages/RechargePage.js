import React from 'react';
import { Link } from 'react-router-dom';
import { MobileIcon, ChevronRightIcon } from '../components/Icons';

export default function RechargePage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-[#0A0A0A] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 animate-fade-in-up">
          <Link to="/" className="hover:text-[#14b8a6] font-medium transition-colors">Home</Link>
          <ChevronRightIcon className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 dark:text-white font-bold">BSNL Recharge</span>
        </div>

        {/* Hero Area */}
        <div className="bg-white dark:bg-[#111111] rounded-[32px] p-10 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.02)] dark:shadow-none border border-gray-100 dark:border-white/5 flex flex-col lg:flex-row gap-12 items-center mb-16 animate-fade-in-up">
          <div className="flex-1">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-blue-900/10 dark:to-blue-950/5 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <MobileIcon className="w-10 h-10 text-[#14b8a6]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#12141D] dark:text-white mb-6 leading-tight">
              Instant BSNL Mobile Recharges
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
              Power your retail business with India's fastest BSNL recharge API. Enjoy 99.9% success rate, instant commission payouts, and 24/7 technical support.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3.5 bg-[#14b8a6] text-white rounded-xl font-bold hover:bg-[#059669] transition-colors shadow-lg shadow-teal-500/20">
                Get API Access
              </button>
              <button className="px-8 py-3.5 bg-teal-50 dark:bg-white/5 text-[#14b8a6] dark:text-white border border-teal-100 dark:border-white/10 rounded-xl font-bold hover:bg-teal-100 dark:hover:bg-white/10 transition-colors">
                View Plans
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full bg-gradient-to-br from-teal-50 to-[#E8F5F1] dark:from-[#111827] dark:to-[#0C1B1A] rounded-3xl p-8 border border-teal-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-400 rounded-full blur-[60px] opacity-20"></div>
            <h3 className="text-xl font-extrabold text-[#14b8a6] mb-6">Why Choose Our API?</h3>
            <ul className="space-y-4">
              {[
                { title: 'Highest Margins', desc: 'Industry best commission rates on all BSNL circles.' },
                { title: 'Zero Downtime', desc: 'Direct operator connectivity ensures 99.9% uptime.' },
                { title: 'Instant Refunds', desc: 'Auto-refund mechanism for failed transactions.' },
                { title: 'Easy Integration', desc: 'RESTful APIs with complete documentation.' },
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-4 bg-white dark:bg-[#1A1A1A] p-4 rounded-xl shadow-sm border border-teal-50 dark:border-white/5">
                  <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-blue-900/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
