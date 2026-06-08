import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CountUp = ({ end, duration, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      // Use easeOutQuart for a smoother counting effect
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(easeProgress * end);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
};

const servicesData = [
  {
    id: 1,
    title: "BSNL Authorities Service",
    desc: "Instant BSNL prepaid and postpaid recharges. Never run out of balance with our blazing fast API. Experience seamless, highly secure digital payments right at your fingertips.",
    image: "/images/About_BSnl.png",
    color: "#F02476",
    bgColor: "bg-[#FFF0F5] dark:bg-[#F02476]/10",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F02476" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
  },
  {
    id: 2,
    title: "AEPS Service",
    desc: "Aadhaar Enabled Payment System allows seamless cash withdrawals and balance inquiries using biometric authentication. Extremely secure and available 24/7.",
    image: "/images/About_API.png",
    color: "#8B5CF6",
    bgColor: "bg-[#F5F3FF] dark:bg-[#8B5CF6]/10",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
  },
  {
    id: 3,
    title: "BBPS (Bharat Bill Pay)",
    desc: "Pay all your utility bills including Electricity, Water, Gas, and Fastag instantly through the integrated Bharat Bill Payment System. One stop solution.",
    image: "/images/About_BSnl.png",
    color: "#F97316",
    bgColor: "bg-[#FFF7ED] dark:bg-[#F97316]/10",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  },
  {
    id: 4,
    title: "Bus Booking",
    desc: "Book bus tickets across India seamlessly via our robust API integration. Wide network, confirmed seats, and real-time updates for a hassle-free travel experience.",
    image: "/images/About_bus.jpg",
    color: "#3B82F6",
    bgColor: "bg-[#EFF6FF] dark:bg-[#3B82F6]/10",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><path d="M2 17h20"></path><path d="M6 17v2"></path><path d="M18 17v2"></path></svg>
  }
];

const miniServices = [
  { id: 1, title: "Mobile Recharge", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
  { id: 2, title: "DTH Booking", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"></path><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> },
  { id: 3, title: "Electricity Bill", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> },
  { id: 4, title: "FASTag Recharge", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> },
  { id: 5, title: "Bus Booking", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><path d="M2 17h20"></path><path d="M6 17v2"></path><path d="M18 17v2"></path></svg> },
  { id: 6, title: "Insurance", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
  { id: 7, title: "Water Bill", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg> },
];

function useScrollFade() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return [ref, isVisible];
}

export default function Home() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  );
  
  // Scroll Animation Observer for Why Choose Us
  const whyChooseUsRef = useRef(null);
  const [isWhyChooseUsVisible, setIsWhyChooseUsVisible] = useState(false);
  
  // Scroll Animation Observers for Zig-Zag Services
  const [service1Ref, s1Visible] = useScrollFade();
  const [service2Ref, s2Visible] = useScrollFade();
  const [service3Ref, s3Visible] = useScrollFade();
  const [service4Ref, s4Visible] = useScrollFade();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhyChooseUsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (whyChooseUsRef.current) {
      observer.observe(whyChooseUsRef.current);
    }
    return () => {
      if (whyChooseUsRef.current) observer.unobserve(whyChooseUsRef.current);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-24 lg:pt-32 pb-20 overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
        {/* Adjusted max-w and reduced gap to fix excessive center spacing */}
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10 mt-4 lg:mt-0 mb-12 lg:mb-0 animate-fade-in-up delay-200">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF0F5] dark:bg-white/5 border border-[#FFD1E3] dark:border-white/10 text-[#F02476] font-bold text-xs mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F02476] animate-pulse"></span>
              100% Secure & Trusted
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] dark:text-white leading-[1.1] mb-4 tracking-tight">
              <span className="whitespace-nowrap">
                Smart{' '}
                <span className="relative inline-block">
                  <span className="text-[#F02476] relative z-10">BSNL</span>
                  {/* Overlay for shine with overflow-hidden so it doesn't break baseline */}
                  <span className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none z-20">
                    <div className="absolute inset-0 top-0 -left-[100%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/60 dark:via-white/20 to-transparent animate-[shine_4s_infinite]"></div>
                  </span>
                </span>{' '}
                Recharge
              </span><br />
              <span className="text-[#F35F20]">Platform</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-[480px] leading-relaxed mx-auto lg:mx-0">
              Fast, secure, and reliable APIs for BSNL recharges and digital payments. Grow your retail business today.
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-col gap-2.5 mb-8 text-gray-600 dark:text-gray-300 font-semibold mx-auto lg:mx-0 max-w-[500px] text-[14px]">
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#FFF0F5] dark:bg-white/5 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F02476" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>99.99% Industry-leading API Uptime</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#FFF0F5] dark:bg-white/5 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F02476" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Instant Commission Settlements</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#FFF0F5] dark:bg-white/5 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F02476" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>24/7 Dedicated Retailer Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
              <button className="relative overflow-hidden w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#F02476] to-[#F35F20] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#F02476]/30 transition-all transform hover:-translate-y-0.5 group">
                <span className="relative z-10">Get Started</span>
                {/* Shine effect */}
                <div className="absolute inset-0 top-0 -left-[100%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_4s_infinite]"></div>
              </button>
              <button className="w-full sm:w-auto px-7 py-3.5 bg-[#FFF0F5] dark:bg-white/5 text-[#F02476] dark:text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FFE4EE] dark:hover:bg-white/10 transition-colors border border-[#FFD1E3] dark:border-white/10">
                Learn More <span>&rarr;</span>
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-3">
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#F02476] text-white flex items-center justify-center font-bold text-[9px] shadow-sm">RK</div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#F35F20] text-white flex items-center justify-center font-bold text-[9px] shadow-sm">MS</div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-500 text-white flex items-center justify-center font-bold text-[9px] shadow-sm">PJ</div>
              </div>
              <div className="text-xs font-semibold text-gray-500">
                Active Retailers & Distributors
              </div>
            </div>
          </div>
          
          {/* Right Content: Mobile Mockup */}
          <div className="flex-1 w-full relative flex justify-center lg:justify-end animate-fade-in-up delay-300 -mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0F5] dark:from-[#F02476]/10 to-[#FFF5F0] dark:to-[#F35F20]/5 rounded-[60px] transform scale-110 -z-10 translate-x-0 lg:translate-x-4"></div>
            
            {/* The Phone (Smaller) */}
            <div className="w-[270px] h-[490px] bg-white dark:bg-[#1A1A1A] rounded-[36px] border-[8px] border-[#111111] dark:border-[#222222] shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col transition-colors duration-300">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-4 bg-[#111111] dark:bg-[#222222] w-[100px] mx-auto rounded-b-xl z-20"></div>
              
              {/* Screen Top */}
              <div className="px-4 pt-3 pb-2 flex justify-between items-center text-gray-900 dark:text-white z-10 bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-md">
                <img src="/images/LOGO.png" alt="JaiJui" className="h-4 w-auto object-contain" />
                <div className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                  <span className="text-[10px] font-bold ml-0.5">{currentTime}</span>
                </div>
              </div>
              
              <div className="px-4 flex-1 bg-gray-50 dark:bg-[#111111] pt-1">
                <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">Recharge</h2>
                
                {/* BSNL Banner */}
                <div className="flex items-center gap-2 mb-3 bg-white dark:bg-[#1A1A1A] p-2 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm p-0.5">
                    <img src="/images/BSNL_icon.png" alt="BSNL" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-extrabold text-[12px] leading-tight">BSNL Pre-Paid</h3>
                    <p className="text-[9px] text-[#F02476] font-medium mt-0.5">Fast & Secure</p>
                  </div>
                </div>
                
                {/* Input */}
                <div className="w-full bg-white dark:bg-[#1A1A1A] rounded-xl p-2.5 mb-3 shadow-sm border border-gray-100 dark:border-white/5 flex items-center">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" className="mr-2 shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span className="text-gray-900 dark:text-white font-bold text-[12px] tracking-wide">+91 99999 00000</span>
                </div>
                
                {/* Plan Grid */}
                <div className="flex gap-2 mb-3">
                  <div className="flex-1 rounded-xl bg-gradient-to-br from-[#F02476] to-[#F35F20] p-2 relative overflow-hidden shadow-md shadow-[#F02476]/30 group">
                    <div className="absolute inset-0 top-0 -left-[100%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_3s_infinite]"></div>
                    <div className="bg-white text-[#F02476] text-[7px] font-extrabold px-1.5 py-0.5 rounded inline-block mb-1 shadow-sm relative z-10">POPULAR</div>
                    <div className="text-lg font-black text-white mb-0.5 relative z-10">₹399</div>
                    <div className="text-[8px] text-white/90 leading-tight font-medium relative z-10">56 Days -<br/>2GB/Day</div>
                  </div>
                  <div className="flex-1 rounded-xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/5 p-2 flex flex-col justify-center shadow-sm">
                    <div className="text-base font-extrabold text-gray-900 dark:text-white mb-0.5">₹199</div>
                    <div className="text-[8px] text-gray-500 dark:text-gray-400 leading-tight font-medium">28 Days -<br/>1.5GB/Day</div>
                  </div>
                </div>
                
                {/* Button */}
                <button className="relative overflow-hidden w-full py-2.5 bg-[#111111] dark:bg-white text-white dark:text-[#111111] rounded-xl font-bold text-[11px] hover:bg-black dark:hover:bg-gray-200 transition-colors mb-3 shadow-lg shadow-black/10">
                  <span className="relative z-10">Proceed to Pay</span>
                  <div className="absolute inset-0 top-0 -left-[100%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent animate-[shine_4s_infinite]"></div>
                </button>
                
                {/* Success Alert */}
                <div className="w-full bg-[#ECFDF5] dark:bg-[#10B981]/10 border border-[#A7F3D0] dark:border-[#10B981]/20 rounded-xl p-2.5 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 shadow-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-[#065F46] dark:text-[#34D399] text-[10px] font-extrabold leading-none mb-0.5">Recharge Successful</p>
                    <p className="text-[#059669] dark:text-[#10B981] text-[8px] font-medium leading-none">Today 10:45 AM</p>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>



      {/* 2. ABOUT SECTION */}
      <section id="about" className="relative py-16 bg-[#F8FAFC] dark:bg-[#111111] transition-colors duration-300">
        
        <div className="relative max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-8 items-center z-10 text-center">
          
          <div className="max-w-4xl">
            <h4 className="text-[#F02476] font-extrabold text-[11px] tracking-widest mb-4 uppercase inline-flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#F02476]/30"></span>
              About JaiJui
              <span className="w-10 h-0.5 bg-[#F02476]/30"></span>
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F02476] to-[#F35F20]">Digital India</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed text-lg max-w-3xl mx-auto">
              At JaiJui FinTech, we are more than just a payment platform. We are the architects of a seamless digital economy. By blending cutting-edge technology with unparalleled user convenience, we deliver lightning-fast BSNL mobile recharges, robust API-driven bus ticket bookings, and a secure payment gateway trusted by millions across the nation.
            </p>
          </div>
          
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-2">
            {/* Pink Tint */}
            <div className="bg-[#FFF0F5] dark:bg-[#F02476]/10 p-4 rounded-3xl border border-[#F02476]/10 dark:border-[#F02476]/20 text-center flex flex-col justify-center items-center h-[110px] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#F02476]/20 transition-all duration-300 group">
              <h3 className="text-3xl font-extrabold text-[#F02476] dark:text-[#FFD1E3] mb-1 tracking-tight">
                <CountUp end={10} duration={2.5} suffix="L+" />
              </h3>
              <p className="text-[10px] text-[#F02476]/70 dark:text-[#FFD1E3]/70 font-bold uppercase tracking-wider">Active Users</p>
            </div>
            {/* Orange Tint */}
            <div className="bg-[#FFF7ED] dark:bg-[#F97316]/10 p-4 rounded-3xl border border-[#F97316]/10 dark:border-[#F97316]/20 text-center flex flex-col justify-center items-center h-[110px] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#F97316]/20 transition-all duration-300 delay-100 group">
              <h3 className="text-3xl font-extrabold text-[#F97316] dark:text-[#FFDBB5] mb-1 tracking-tight">
                <CountUp end={50} duration={3} suffix="L+" />
              </h3>
              <p className="text-[10px] text-[#F97316]/70 dark:text-[#FFDBB5]/70 font-bold uppercase tracking-wider">Transactions</p>
            </div>
            {/* Blue Tint */}
            <div className="bg-[#EFF6FF] dark:bg-[#3B82F6]/10 p-4 rounded-3xl border border-[#3B82F6]/10 dark:border-[#3B82F6]/20 text-center flex flex-col justify-center items-center h-[110px] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all duration-300 delay-200 group">
              <h3 className="text-3xl font-extrabold text-[#3B82F6] dark:text-[#BFDBFE] mb-1 tracking-tight">
                <CountUp end={500} duration={2.5} suffix="+" />
              </h3>
              <p className="text-[10px] text-[#3B82F6]/70 dark:text-[#BFDBFE]/70 font-bold uppercase tracking-wider">Retailers</p>
            </div>
            {/* Purple Tint */}
            <div className="bg-[#F5F3FF] dark:bg-[#8B5CF6]/10 p-4 rounded-3xl border border-[#8B5CF6]/10 dark:border-[#8B5CF6]/20 text-center flex flex-col justify-center items-center h-[110px] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all duration-300 delay-300 group">
              <h3 className="text-3xl font-extrabold text-[#8B5CF6] dark:text-[#DDD6FE] mb-1 tracking-tight">
                <CountUp end={99.9} duration={3} decimals={1} suffix="%" />
              </h3>
              <p className="text-[10px] text-[#8B5CF6]/70 dark:text-[#DDD6FE]/70 font-bold uppercase tracking-wider">Uptime</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. SERVICES SECTION (ZIG-ZAG) */}
      <section id="services" className="py-24 bg-white dark:bg-[#0A0A0A] transition-colors duration-300 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#F02476] font-bold text-[10px] mb-4 uppercase tracking-widest shadow-sm">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] dark:text-white">Premium Digital Services</h2>
          </div>
          
          <div className="flex flex-col gap-24">
            
            {/* Service 1: BSNL */}
            <div ref={service1Ref} className={`flex flex-col lg:flex-row items-center gap-12 ${s1Visible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="w-full lg:w-1/2">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF0F5] dark:bg-[#F02476]/10 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F02476" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">BSNL Authorities Service</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                  Instant BSNL prepaid and postpaid recharges. Never run out of balance with our blazing fast API. Experience seamless, highly secure digital payments right at your fingertips.
                </p>
                <Link to="/service/bsnl" className="font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all w-max px-6 py-3 rounded-xl text-white shadow-md hover:shadow-lg bg-gradient-to-r from-[#F02476] to-[#F35F20]">
                  Explore Service &rarr;
                </Link>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-[32px] shadow-sm border border-gray-100 dark:border-white/5 w-full flex justify-center items-center h-[250px] lg:h-[320px] overflow-hidden">
                  <img src="/images/BSNL_Authorise.jpg" alt="BSNL Authorities Service" className="w-[85%] h-[85%] object-contain rounded-2xl drop-shadow-xl" />
                </div>
              </div>
            </div>

            {/* Service 2: AEPS */}
            <div ref={service2Ref} className={`flex flex-col lg:flex-row-reverse items-center gap-12 ${s2Visible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="w-full lg:w-1/2">
                <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] dark:bg-[#8B5CF6]/10 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">AEPS</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                  Aadhaar Enabled Payment System allows seamless cash withdrawals and balance inquiries using biometric authentication. Extremely secure and available 24/7.
                </p>
                <Link to="/service/aeps" className="font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all w-max px-6 py-3 rounded-xl text-white shadow-md hover:shadow-lg bg-gradient-to-r from-[#F02476] to-[#F35F20]">
                  Explore Service &rarr;
                </Link>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-[32px] shadow-sm border border-gray-100 dark:border-white/5 w-full flex justify-center items-center h-[250px] lg:h-[320px] overflow-hidden">
                  <img src="/images/About_AEPs.png" alt="AEPS" className="w-full h-full object-contain p-4 lg:p-6 drop-shadow-xl" />
                </div>
              </div>
            </div>

            {/* Service 3: BBPS */}
            <div ref={service3Ref} className={`flex flex-col lg:flex-row items-center gap-12 ${s3Visible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="w-full lg:w-1/2">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF7ED] dark:bg-[#F97316]/10 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">BBPS</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                  Pay all your utility bills including Electricity, Water, Gas, and Fastag instantly through the integrated Bharat Bill Payment System. Your one-stop solution.
                </p>
                <Link to="/service/bbps" className="font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all w-max px-6 py-3 rounded-xl text-white shadow-md hover:shadow-lg bg-gradient-to-r from-[#F02476] to-[#F35F20]">
                  Explore Service &rarr;
                </Link>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-[32px] shadow-sm border border-gray-100 dark:border-white/5 w-full flex justify-center items-center h-[250px] lg:h-[320px] overflow-hidden">
                  <img src="/images/BBPS.png" alt="BBPS" className="w-full h-full object-contain p-4 lg:p-6 drop-shadow-xl" />
                </div>
              </div>
            </div>

            {/* Service 4: Bus Booking */}
            <div ref={service4Ref} className={`flex flex-col lg:flex-row-reverse items-center gap-12 ${s4Visible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="w-full lg:w-1/2">
                <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] dark:bg-[#3B82F6]/10 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><path d="M2 17h20"></path><path d="M6 17v2"></path><path d="M18 17v2"></path></svg>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">Bus Booking</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                  Book bus tickets across India seamlessly via our robust API integration. Wide network, confirmed seats, and real-time updates for a hassle-free travel experience.
                </p>
                <Link to="/service/bus-booking" className="font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all w-max px-6 py-3 rounded-xl text-white shadow-md hover:shadow-lg bg-gradient-to-r from-[#F02476] to-[#F35F20]">
                  Explore Service &rarr;
                </Link>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-[32px] shadow-sm border border-gray-100 dark:border-white/5 w-full flex justify-center items-center h-[250px] lg:h-[320px] overflow-hidden">
                  <img src="/images/About_bus.jpg" alt="Bus Booking" className="w-[90%] h-[90%] object-cover rounded-2xl drop-shadow-xl" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" ref={whyChooseUsRef} className="py-16 bg-gray-50 dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          
          {/* Header */}
          <div className={`text-center mb-20 ${isWhyChooseUsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#F02476]/10 border border-[#F02476]/20 text-[#F02476] font-bold text-[10px] mb-4 uppercase tracking-widest shadow-sm">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] dark:text-white leading-tight">
              Smart Digital Payment Solutions <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F02476] to-[#F35F20]">For Your Business</span>
            </h2>
          </div>

          {/* 3-Column Layout */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Features */}
            <div className={`flex flex-col gap-8 ${isWhyChooseUsVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {/* Item 1 */}
              <div className="flex gap-4 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F02476] to-[#F35F20] flex items-center justify-center shrink-0 shadow-md shadow-[#F02476]/20 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#F02476] transition-colors mb-1">Secure Transactions</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Top-tier encryption ensures your digital information is protected. We maintain the highest trust and security standards.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex gap-4 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F02476] to-[#F35F20] flex items-center justify-center shrink-0 shadow-md shadow-[#F02476]/20 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#F02476] transition-colors mb-1">Real-Time Alerts</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Stay informed instantly. Real-time notifications play a crucial role in keeping you in control of your activities.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex gap-4 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F02476] to-[#F35F20] flex items-center justify-center shrink-0 shadow-md shadow-[#F02476]/20 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#F02476] transition-colors mb-1">24/7 Customer Support</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Our dedicated support team is always available. We serve as your primary point of contact whenever you need help.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column: Mockup */}
            <div className={`relative flex justify-center py-10 lg:py-0 ${isWhyChooseUsVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F02476]/20 to-[#3B82F6]/20 blur-3xl rounded-full scale-75"></div>

              {/* The Phone Mockup & Ripples Wrapper */}
              <div className="relative animate-float z-10 flex justify-center items-center">
                {/* Circular Animated Ripples with Gradient Pattern */}
                <div className="absolute top-1/2 left-1/2 w-[340px] h-[340px] rounded-full animate-pulse-ring -z-10" style={{ background: 'radial-gradient(circle, transparent 35%, rgba(240,36,118,0.4) 60%, rgba(243,95,32,0.9) 85%, transparent 100%)' }}></div>
                <div className="absolute top-1/2 left-1/2 w-[340px] h-[340px] rounded-full animate-pulse-ring -z-10" style={{ background: 'radial-gradient(circle, transparent 35%, rgba(240,36,118,0.4) 60%, rgba(243,95,32,0.9) 85%, transparent 100%)', animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-[340px] h-[340px] rounded-full animate-pulse-ring -z-10" style={{ background: 'radial-gradient(circle, transparent 35%, rgba(240,36,118,0.4) 60%, rgba(243,95,32,0.9) 85%, transparent 100%)', animationDelay: '2s' }}></div>
                
                {/* Phone Mockup */}
                <div className="w-[260px] h-[480px] bg-[#111] dark:bg-[#1A1A1A] rounded-[36px] border-[8px] border-gray-900 dark:border-[#222] shadow-[0_0_50px_rgba(240,36,118,0.15)] relative flex flex-col bg-clip-padding">
                  <div className="absolute top-0 inset-x-0 h-5 bg-gray-900 dark:bg-[#222] w-[120px] mx-auto rounded-b-2xl z-20"></div>
                  
                  {/* App Screen */}
                <div className="flex-1 bg-gray-50 dark:bg-[#111111] rounded-[32px] overflow-hidden flex flex-col pt-8 pb-4 px-4 relative">
                  
                  {/* Top Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#F02476] flex items-center justify-center text-white font-bold text-xs">JA</div>
                      <div>
                        <p className="text-[9px] text-gray-500 font-bold">Welcome back,</p>
                        <p className="text-xs font-extrabold text-gray-900 dark:text-white">Admin User</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F02476" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    </div>
                  </div>

                  {/* Balance Card inside mockup (Glassmorphic) */}
                  <div className="w-full bg-gradient-to-br from-[#8B5CF6]/90 to-[#F02476]/90 backdrop-blur-xl border border-white/20 rounded-2xl p-5 text-white mb-6 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F02476]/40 rounded-full blur-xl -ml-10 -mb-10"></div>
                    <p className="text-xs font-medium text-white/90 mb-1 relative z-10">Total Balance</p>
                    <h3 className="text-3xl font-black mb-4 relative z-10 drop-shadow-sm">₹ 3,403.09</h3>
                    <div className="flex justify-between items-center text-[10px] font-bold bg-white/20 border border-white/10 p-2 rounded-lg backdrop-blur-md relative z-10">
                      <span>Card Limit: ₹ 10,000</span>
                      <div className="flex -space-x-1">
                        <div className="w-4 h-4 rounded-full bg-red-500/90 shadow-sm"></div>
                        <div className="w-4 h-4 rounded-full bg-yellow-400/90 mix-blend-screen shadow-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Grid Services */}
                  <h4 className="text-sm font-extrabold text-gray-900 dark:text-white mb-3">Quick Services</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="aspect-square bg-white dark:bg-[#1A1A1A] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-1">
                        <div className="w-5 h-5 rounded bg-gray-100 dark:bg-gray-800"></div>
                        <div className="w-8 h-1 rounded bg-gray-200 dark:bg-gray-700"></div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
              </div>

            </div>

            {/* Right Column: Features */}
            <div className={`flex flex-col gap-8 ${isWhyChooseUsVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              {/* Item 4 */}
              <div className="flex gap-4 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F02476] to-[#F35F20] flex items-center justify-center shrink-0 shadow-md shadow-[#F02476]/20 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#F02476] transition-colors mb-1">Bank Beating Rates</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    We offer highly competitive commission rates on financial products and API services that banks can't match.
                  </p>
                </div>
              </div>
              {/* Item 5 */}
              <div className="flex gap-4 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F02476] to-[#F35F20] flex items-center justify-center shrink-0 shadow-md shadow-[#F02476]/20 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#F02476] transition-colors mb-1">Faster & Cheaper</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Our fast and cost-effective solutions are in high demand as businesses seek greater efficiency and profit.
                  </p>
                </div>
              </div>
              {/* Item 6 */}
              <div className="flex gap-4 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F02476] to-[#F35F20] flex items-center justify-center shrink-0 shadow-md shadow-[#F02476]/20 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#F02476] transition-colors mb-1">24/7 Account Access</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Enjoy complete flexibility and convenience. Manage your accounts and transactions anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
