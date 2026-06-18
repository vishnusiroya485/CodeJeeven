import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../components/Icons';

export default function ServicesPage() {
  const servicesList = [
    {
      title: "Mobile App Development",
      desc: "Native & cross-platform Android & iOS applications developed with React Native and Flutter.",
      link: "/contact",
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      border: "hover:border-violet-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: "Web Development",
      desc: "Custom high-performance web applications built with React, Node.js, and modern tech stacks.",
      link: "/contact",
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      border: "hover:border-teal-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "API Services",
      desc: "Instant developer APIs for mobile recharges, utility bills, and financial transactions.",
      link: "/service/api",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "hover:border-cyan-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z"></path>
          <path d="M21 12H13v5h8z"></path>
        </svg>
      )
    },
    {
      title: "WhatsApp Bulk API",
      desc: "Reach customers instantly with automated alerts, updates, and custom campaign integrations.",
      link: "/contact",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      title: "Recharge Portals",
      desc: "Robust utility and mobile recharge software built with high uptime operator channels.",
      link: "/service/recharge",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: "Bus Booking Systems",
      desc: "Live inventory search, passenger seat selection, and reliable API reservation portal setup.",
      link: "/service/bus-booking",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <line x1="4" y1="11" x2="20" y2="11"></line>
          <line x1="8" y1="15" x2="8.01" y2="15"></line>
          <line x1="16" y1="15" x2="16.01" y2="15"></line>
          <path d="M6 20v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2"></path>
          <path d="M14 20v2a1 1 0 0 0 1-1v-2"></path>
        </svg>
      )
    },
    {
      title: "SEO Services",
      desc: "Aggressive on-page and off-page optimizations to rank your business at the top of Google.",
      link: "/contact",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "hover:border-pink-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <polyline points="11 8 11 12 14 15"></polyline>
        </svg>
      )
    },
    {
      title: "Payment Gateway",
      desc: "Secure checkout channels supporting cards, UPI, netbanking and wallet transactions.",
      link: "/service/api",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      border: "hover:border-indigo-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      )
    },
    {
      title: "Custom Portals",
      desc: "Tailor-made merchant platforms, B2B agent panels, and specialized administrative software.",
      link: "/contact",
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      border: "hover:border-teal-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      title: "Logo & Graphic Design",
      desc: "Stunning brand styling, visual assets, and high-impact digital graphics for modern brands.",
      link: "/contact",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "hover:border-orange-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
        </svg>
      )
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven marketing campaigns and advanced social media strategies to boost your ROI and scale your brand reach.",
      link: "/contact",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 animate-fade-in-up">
          <Link to="/" className="hover:text-teal-500 font-bold transition-colors">Home</Link>
          <ChevronRightIcon className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 dark:text-white font-extrabold">Services</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-[#10b981] font-bold text-[10px] mb-4 uppercase tracking-widest shadow-sm">
            Our Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#10b981]">Agency Services</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Choose from our specialized technical services. Click on any card below to get started or read more about our systems.
          </p>
        </div>

        {/* Services Grid (cards are made slightly smaller with p-6 and tighter spacings) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up delay-100">
          {servicesList.map((service, idx) => (
            <div 
              key={idx}
              className={`bg-white dark:bg-[#111111] rounded-2xl p-6 border border-gray-100 dark:border-white/5 ${service.border} shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none hover:shadow-[0_20px_45px_rgba(37,99,235,0.06)] dark:hover:bg-[#161616] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden`}
            >
              <div>
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bg} ${service.color} mb-4 group-hover:scale-105 transition-transform duration-300 shadow-inner`}>
                  {service.icon}
                </div>

                {/* Service Text */}
                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white group-hover:text-[#10b981] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>

              {/* Interactive subtle corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#10b981]/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
