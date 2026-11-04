import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../components/Icons';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-[1150px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6 animate-fade-in-up">
          <Link to="/" className="hover:text-teal-500 font-bold transition-colors">Home</Link>
          <ChevronRightIcon className="w-2.5 h-2.5 text-gray-400" />
          <span className="text-gray-900 dark:text-white font-extrabold">About Us</span>
        </div>

        {/* Hero Section (Vision Card Height Reduced for Premium UX) */}
        <div className="bg-white dark:bg-[#111111] rounded-2xl p-6 lg:p-10 border border-gray-100 dark:border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.02)] dark:shadow-none mb-10 flex flex-col md:flex-row gap-8 items-center animate-fade-in-up">
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0FDF4] dark:bg-teal-500/10 border border-[#A7F3D0] dark:border-teal-500/20 text-[#10b981] font-extrabold text-[10px] mb-4 uppercase tracking-wider">
              Our Vision
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
              Scaling Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#10b981]">with SaaS & APIs</span>
            </h1>
            <p className="text-gray-550 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              CodeJeevan is an elite development agency. We architect highly secure, lighting fast custom portals, mobile apps, and developer-first utility APIs that fuel digital growth.
            </p>
            <div className="flex gap-3 text-xs">
              <Link to="/contact" className="px-5 py-3 bg-gradient-to-r from-[#0f766e] to-[#10b981] text-white rounded-xl font-bold hover:shadow-md hover:shadow-[#10b981]/20 transition-all">
                Work With Us
              </Link>
              <Link to="/services" className="px-5 py-3 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors border border-transparent dark:border-white/5">
                Our Services
              </Link>
            </div>
          </div>

          {/* Graphics block (Image) */}
          <div className="flex-1 w-full max-w-[340px] flex items-center justify-center relative">
            <div className="w-full aspect-[4/3] rounded-2xl border border-gray-100 dark:border-white/5 flex items-center justify-center relative overflow-hidden group shadow-md dark:shadow-none bg-white dark:bg-[#1A1A1A]">
              <img src="/images/26.png" alt="CodeJeevan Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-fade-in-up delay-100">
          {[
            { value: "500+", label: "Projects Completed", desc: "SaaS portals & websites.", bg: "bg-teal-500/5", color: "text-[#10b981]" },
            { value: "200+", label: "API Systems Live", desc: "Fast payout integrations.", bg: "bg-cyan-500/5", color: "text-[#059669]" },
            { value: "99%", label: "Success Rate", desc: "Active business scaling.", bg: "bg-emerald-500/5", color: "text-emerald-500" },
            { value: "24/7", label: "Expert Support", desc: "Standby engineering team.", bg: "bg-purple-500/5", color: "text-purple-500" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-[#111111] p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-[0_4px_15px_rgba(0,0,0,0.01)] text-center">
              <h3 className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</h3>
              <h4 className="text-xs font-extrabold text-gray-900 dark:text-white mb-0.5">{stat.label}</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Our Team Section */}
        <div className="mb-12 animate-fade-in-up delay-200">
          <div className="text-center mb-8">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] font-bold text-[9px] mb-3 uppercase tracking-widest shadow-sm">
              Our Experts
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
              Meet Our Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
            {[
              { name: "Sachin Balyan", role: "Founder", desc: "Visionary leader driving innovation with over 10 years of expertise in software architecture and business strategy. Dedicated to building systems that scale to millions.", img: "/images/Sachin_Balyan.jpeg" },
              { name: "Kapil Choudhary", role: "CEO", desc: "Strategic leader driving business growth and operational excellence. Passionate about scaling enterprise solutions.", img: "/images/kapil.jpg" },
              { name: "Neha Dalal", role: "Director", desc: "Guiding the company vision and ensuring operational success across all departments.", img: "/images/Neha.jpeg" },
              { name: "Pratham Tiwari", role: "Sales Executive", desc: "Driving business growth through strategic partnerships and client relations. Dedicated to delivering value and ensuring client success.", img: "/images/pratham.jpeg" }
            ].map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 dark:from-[#1E1E1E] dark:to-[#111111] dark:hover:from-[#151515] dark:hover:to-[#080808] rounded-3xl p-6 md:p-8 flex flex-row items-center text-left gap-5 md:gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 dark:border-white/10 hover:border-[#10b981]/30 hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)] hover:-translate-y-1.5 transition-all duration-500 group w-full relative overflow-hidden min-h-[160px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#10b981]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-[3px] border-white dark:border-[#2A2A2A] shadow-md relative z-10">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#10b981] scale-[1.18] opacity-50 group-hover:rotate-180 group-hover:opacity-100 transition-all duration-700 pointer-events-none border-dashed"></div>
                </div>
                <div className="flex-1 min-w-0 z-10">
                  <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white mb-1 truncate">{member.name}</h3>
                  <p className="text-[#10b981] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-2 truncate">{member.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed line-clamp-3">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values Section (Re-added, redesigned to brand sky/blue theme, smaller compact cards) */}
        <div className="animate-fade-in-up delay-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#10b981]">Values</span></h2>
            <div className="w-8 h-1 bg-[#10b981] mx-auto rounded-full mt-2.5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { 
                title: "Integrity", 
                desc: "Complete transparency and ethical engineering in every project line of code.", 
                color: "text-[#10b981]", 
                bg: "bg-[#10b981]/5", 
                border: "hover:border-[#10b981]/30",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                )
              },
              { 
                title: "Innovation", 
                desc: "Constantly upgrading integrations with the latest web standards and systems.", 
                color: "text-[#10b981]", 
                bg: "bg-[#10b981]/5", 
                border: "hover:border-[#10b981]/30",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                )
              },
              { 
                title: "Client Success", 
                desc: "Your growth is our benchmark. We deliver structures optimized for conversions.", 
                color: "text-emerald-500", 
                bg: "bg-emerald-500/5", 
                border: "hover:border-emerald-500/30",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                )
              }
            ].map((value, idx) => (
              <div key={idx} className={`bg-white dark:bg-[#111111] p-5 rounded-xl border border-gray-150 dark:border-white/5 ${value.border} text-center transition-all duration-300 group`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${value.bg} ${value.color} mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-inner`}>
                  {value.icon}
                </div>
                <h3 className="text-base font-extrabold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
