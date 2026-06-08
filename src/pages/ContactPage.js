import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../components/Icons';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-rose-600 font-medium">Home</Link>
          <ChevronRightIcon className="w-3 h-3" />
          <span className="text-gray-900 font-bold">Contact Us</span>
        </div>

        <div className="bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row mb-12">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-5/12 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">Let's build something great together.</h3>
              <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                Whether you need a custom API integration, or have questions about our services, our team is ready to help.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1 font-medium">Call us</p>
                    <span className="font-bold text-lg">+91 98765 43210</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1 font-medium">Email us</p>
                    <span className="font-bold text-lg">hello@jaijui.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative shapes */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 p-10 lg:p-16 bg-white">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Send us a message</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <input type="text" placeholder="John" className="px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20 outline-none transition-all text-sm font-medium" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20 outline-none transition-all text-sm font-medium" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20 outline-none transition-all text-sm font-medium" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">How can we help?</label>
                <textarea rows="5" placeholder="Tell us about your project or inquiry..." className="px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20 outline-none transition-all text-sm font-medium resize-none"></textarea>
              </div>
              <button type="button" className="mt-2 w-full py-4 bg-[#12141D] text-white rounded-xl font-bold text-[15px] hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
