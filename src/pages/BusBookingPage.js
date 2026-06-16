import React from 'react';
import { Link } from 'react-router-dom';
import { BusIcon, ChevronRightIcon } from '../components/Icons';

export default function BusBookingPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-[#0A0A0A] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 animate-fade-in-up">
          <Link to="/" className="hover:text-teal-500 font-medium transition-colors">Home</Link>
          <ChevronRightIcon className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 dark:text-white font-bold">Bus Booking</span>
        </div>

        {/* Hero Area */}
        <div className="bg-white dark:bg-[#111111] rounded-[32px] p-10 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.02)] dark:shadow-none border border-gray-100 dark:border-white/5 flex flex-col lg:flex-row gap-12 items-center mb-16 animate-fade-in-up">
          <div className="flex-1">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-blue-900/10 dark:to-blue-950/5 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <BusIcon className="w-10 h-10 text-[#14b8a6]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#12141D] dark:text-white mb-6 leading-tight">
              Pan-India Bus Booking
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
              Access inventory from over 3,500+ bus operators across India. Offer your customers seamless booking experiences with live seat layouts.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3.5 bg-teal-500 text-white rounded-xl font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-teal-500/20">
                Partner With Us
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full relative max-w-[450px] mx-auto lg:mx-0">
             <div className="bg-white dark:bg-[#1A1A1A] rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-white/5 relative z-10 transition-transform duration-500">
                <img src="/images/bus.jpg" alt="Bus Travel" className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm" />
                
                <div className="flex justify-between items-center mb-4 bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/5">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest mb-1">Boarding</p>
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">DELHI</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-[#111111] shadow-sm flex items-center justify-center border border-gray-100 dark:border-white/5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l-4-4M17 20l4-4"/></svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest mb-1">Dropping</p>
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">MUMBAI</h3>
                  </div>
                </div>
 
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold py-3 rounded-lg text-sm hover:bg-black dark:hover:bg-gray-100 transition-colors">
                     Check Availability
                  </button>
                </div>
             </div>
             
             <div className="absolute top-10 -right-10 w-full h-full bg-teal-50 dark:bg-blue-900/5 rounded-3xl -z-10 transform -rotate-3"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
