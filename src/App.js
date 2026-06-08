import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { MenuIcon, CloseIcon } from './components/Icons';

import Home from './pages/Home';
import RechargePage from './pages/RechargePage';
import BusBookingPage from './pages/BusBookingPage';
import ApiPage from './pages/ApiPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    // Hide loader after 1.5s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] font-sans text-gray-900 dark:text-white overflow-x-hidden relative transition-colors duration-300">
        
        {/* Global Preloader */}
        <div className={`fixed inset-0 z-[100] bg-white dark:bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="relative flex items-center justify-center">
            {/* Pulsing outer rings */}
            <div className="absolute w-24 h-24 rounded-full border-4 border-[#F02476]/20 animate-ping"></div>
            <div className="absolute w-32 h-32 rounded-full border-4 border-[#F35F20]/10 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            
            {/* Spinning gradient ring */}
            <div className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-[#F02476] border-r-[#F35F20] animate-spin"></div>
            
            {/* Center Logo */}
            <img src="/images/LOGO.png" alt="Loading" className="w-10 h-10 object-contain rounded-md animate-pulse relative z-10" />
          </div>
          <h2 className="mt-8 text-sm font-extrabold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#F02476] to-[#F35F20] animate-pulse">
            JAIJUI
          </h2>
        </div>

        {/* Custom Styles */}
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
        `}</style>

        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[45%] h-[900px] bg-gradient-to-b from-[#F7F8F9] dark:from-[#111111] to-transparent -z-10 hidden lg:block"></div>
        
        {/* 1. HEADER / NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-gray-100/50 dark:border-white/10 transition-all duration-300">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
            
            {/* Enhanced Logo */}
            <a href="/" className="flex items-center cursor-pointer hover:scale-105 transition-transform animate-fade-in-up">
              <img src="/images/LOGO.png" alt="JaiJui Logo" className="h-[46px] w-auto object-contain rounded-md" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 animate-fade-in-up delay-100">
              <a href="/#product" className="text-[13px] font-bold text-gray-900 dark:text-gray-200 hover:text-[#F02476] dark:hover:text-[#F02476] transition-colors">Product</a>
              <a href="/#services" className="text-[13px] font-bold text-gray-900 dark:text-gray-200 hover:text-[#F02476] dark:hover:text-[#F02476] transition-colors">Services</a>
              <a href="/#about" className="text-[13px] font-bold text-gray-900 dark:text-gray-200 hover:text-[#F02476] dark:hover:text-[#F02476] transition-colors">About</a>
              <Link to="/contact" className="text-[13px] font-bold text-gray-900 dark:text-gray-200 hover:text-[#F02476] dark:hover:text-[#F02476] transition-colors">Contact</Link>
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4 animate-fade-in-up delay-200">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                )}
              </button>
              <button className="px-6 py-2.5 text-[13px] font-bold text-[#F02476] dark:text-white bg-[#FFF0F5] dark:bg-white/5 border border-[#FFD1E3] dark:border-white/10 rounded-xl hover:bg-[#FFE4EE] dark:hover:bg-white/10 transition-colors shadow-sm">
                Log in
              </button>
              <button className="px-6 py-2.5 text-[13px] font-bold text-white bg-gradient-to-r from-[#F02476] to-[#F35F20] rounded-xl hover:shadow-lg hover:shadow-[#F02476]/30 transition-all transform hover:-translate-y-0.5">
                Sign Up
              </button>
            </div>

            {/* Mobile Actions (Dark Mode + Hamburger) */}
            <div className="flex lg:hidden items-center gap-2 z-50 relative">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                )}
              </button>
              <button className="text-gray-900 dark:text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu Slider */}
        <div className={`fixed top-0 right-0 h-full w-[280px] z-[60] bg-white dark:bg-[#111111] shadow-2xl transition-transform duration-300 ease-out p-8 flex flex-col lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end mb-8">
            <button className="p-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 rounded-full hover:bg-gray-200 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <a href="/#product" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-gray-900 dark:text-white hover:text-[#F02476] transition-colors border-b border-gray-100 dark:border-white/5 pb-4">Product</a>
            <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-gray-900 dark:text-white hover:text-[#F02476] transition-colors border-b border-gray-100 dark:border-white/5 pb-4">Services</a>
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-gray-900 dark:text-white hover:text-[#F02476] transition-colors border-b border-gray-100 dark:border-white/5 pb-4">About</a>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-gray-900 dark:text-white hover:text-[#F02476] transition-colors border-b border-gray-100 dark:border-white/5 pb-4">Contact</Link>
          </div>
          
          <div className="flex flex-col gap-4 w-full mt-8">
            <button className="w-full py-3 text-sm font-bold text-[#F02476] dark:text-white bg-[#FFF0F5] dark:bg-white/5 border border-[#FFD1E3] dark:border-white/10 rounded-xl hover:bg-[#FFE4EE] transition-colors">Log in</button>
            <button className="w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-[#F02476] to-[#F35F20] rounded-xl shadow-lg shadow-[#F02476]/30">Sign Up</button>
          </div>
        </div>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/recharge" element={<RechargePage />} />
          <Route path="/service/bus-booking" element={<BusBookingPage />} />
          <Route path="/service/api" element={<ApiPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* 6. FOOTER */}
        <footer className="bg-[#111111] pt-16 pb-8 mt-auto border-t-0">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="mb-4 text-3xl font-extrabold tracking-tight">
                  <span className="text-[#F02476]">Jai</span><span className="text-[#F35F20]">Jui</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-sm text-sm leading-relaxed">
                  India's Smartest Digital Payment & Travel Platform. Offering seamless API solutions for recharges, payouts, and bookings.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="/#about" className="text-gray-400 text-sm hover:text-[#F02476] transition-colors">About Us</a></li>
                  <li><a href="/#services" className="text-gray-400 text-sm hover:text-[#F02476] transition-colors">Services</a></li>
                  <li><Link to="/contact" className="text-gray-400 text-sm hover:text-[#F02476] transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="text-gray-400 text-sm hover:text-[#F02476] transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-[#F02476] transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#222222] pt-8 flex justify-center items-center">
              <p className="text-gray-500 text-xs font-medium">© 2026 JaiJui FinTech. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}
