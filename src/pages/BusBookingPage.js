import React from 'react';
import { Link } from 'react-router-dom';
import { BusIcon, ChevronRightIcon } from '../components/Icons';

export default function BusBookingPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-rose-600 font-medium">Home</Link>
          <ChevronRightIcon className="w-3 h-3" />
          <span className="text-gray-900 font-bold">Bus Booking</span>
        </div>

        {/* Hero Area */}
        <div className="bg-white rounded-[32px] p-10 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <BusIcon className="w-10 h-10 text-rose-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#12141D] mb-6 leading-tight">
              Pan-India Bus Booking
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-xl">
              Access inventory from over 3,500+ bus operators across India. Offer your customers seamless booking experiences with live seat layouts.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3.5 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-500/20">
                Partner With Us
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full relative max-w-[450px] mx-auto lg:mx-0">
             <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 relative z-10 transition-transform duration-500">
                <img src="/images/bus.jpg" alt="Bus Travel" className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm" />
                
                <div className="flex justify-between items-center mb-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Boarding</p>
                    <h3 className="text-xl font-extrabold text-gray-900">DELHI</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l-4-4M17 20l4-4"/></svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Dropping</p>
                    <h3 className="text-xl font-extrabold text-gray-900">MUMBAI</h3>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-900 text-white font-bold py-3 rounded-lg text-sm hover:bg-black">
                     Check Availability
                  </button>
                </div>
             </div>
             
             <div className="absolute top-10 -right-10 w-full h-full bg-rose-50 rounded-3xl -z-10 transform -rotate-3"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
