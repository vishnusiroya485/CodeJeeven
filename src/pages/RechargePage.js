import React from 'react';
import { Link } from 'react-router-dom';
import { MobileIcon, ChevronRightIcon } from '../components/Icons';

export default function RechargePage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#ea3b53] font-medium">Home</Link>
          <ChevronRightIcon className="w-3 h-3" />
          <span className="text-gray-900 font-bold">BSNL Recharge</span>
        </div>

        {/* Hero Area */}
        <div className="bg-white rounded-[32px] p-10 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <MobileIcon className="w-10 h-10 text-rose-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#12141D] mb-6 leading-tight">
              Instant BSNL Mobile Recharges
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-xl">
              Power your retail business with India's fastest BSNL recharge API. Enjoy 99.9% success rate, instant commission payouts, and 24/7 technical support.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3.5 bg-[#ea3b53] text-white rounded-xl font-bold hover:bg-[#0f3d30] transition-colors shadow-lg shadow-rose-500/20">
                Get API Access
              </button>
              <button className="px-8 py-3.5 bg-rose-50 text-rose-700 border border-rose-100 rounded-xl font-bold hover:bg-rose-100 transition-colors">
                View Plans
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full bg-gradient-to-br from-rose-50 to-[#E8F5F1] rounded-3xl p-8 border border-rose-100 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-400 rounded-full blur-[60px] opacity-20"></div>
            <h3 className="text-xl font-extrabold text-[#ea3b53] mb-6">Why Choose Our API?</h3>
            <ul className="space-y-4">
              {[
                { title: 'Highest Margins', desc: 'Industry best commission rates on all BSNL circles.' },
                { title: 'Zero Downtime', desc: 'Direct operator connectivity ensures 99.9% uptime.' },
                { title: 'Instant Refunds', desc: 'Auto-refund mechanism for failed transactions.' },
                { title: 'Easy Integration', desc: 'RESTful APIs with complete documentation.' },
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-rose-50">
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ea3b53" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
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
