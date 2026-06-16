import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { MenuIcon, CloseIcon } from './components/Icons';

import Home from './pages/Home';
import RechargePage from './pages/RechargePage';
import BusBookingPage from './pages/BusBookingPage';
import ApiPage from './pages/ApiPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SitemapPage from './pages/SitemapPage';

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
            <div className="absolute w-24 h-24 rounded-full border-4 border-[#14b8a6]/20 animate-ping"></div>
            <div className="absolute w-32 h-32 rounded-full border-4 border-[#059669]/10 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            
            {/* Spinning gradient ring */}
            <div className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-[#14b8a6] border-r-[#059669] animate-spin"></div>
            
            {/* Center Logo */}
            <img src="/images/LOGO_BROWSER.png" className="h-12 w-auto object-contain animate-float relative z-10 scale-[1.3] drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" alt="Loading..." />
          </div>
          <h2 className="mt-8 text-sm font-extrabold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#059669] animate-pulse">
            CODEJEEVAN
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
          @keyframes wa-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          @keyframes wa-pulse {
            0% { transform: scale(0.95); opacity: 0.4; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          .animate-wa-float { animation: wa-float 6s ease-in-out infinite; }
          .animate-wa-pulse-1 { animation: wa-pulse 4s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
          .animate-wa-pulse-2 { animation: wa-pulse 4s cubic-bezier(0.25, 1, 0.5, 1) infinite 2s; }
        `}</style>

        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[45%] h-[900px] bg-gradient-to-b from-[#F7F8F9] dark:from-[#111111] to-transparent -z-10 hidden lg:block"></div>
        
        {/* 1. HEADER / NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-gray-100/50 dark:border-white/10 transition-all duration-300">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-14">
            
            {/* Enhanced Logo */}
            <a href="/" className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform animate-fade-in-up">
              <img src="/images/LOGO_CJ.png" className="h-[50px] w-auto scale-[2.2] origin-left -ml-2" alt="CodeJeevan Logo" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 animate-fade-in-up delay-100">
              <Link to="/" className="text-[13px] font-bold text-gray-900 dark:text-gray-200 hover:text-[#14b8a6] dark:hover:text-[#059669] transition-colors">Home</Link>
              <Link to="/services" className="text-[13px] font-bold text-gray-900 dark:text-gray-200 hover:text-[#14b8a6] dark:hover:text-[#059669] transition-colors">Services</Link>
              <Link to="/about" className="text-[13px] font-bold text-gray-900 dark:text-gray-200 hover:text-[#14b8a6] dark:hover:text-[#059669] transition-colors">About</Link>
              <Link to="/contact" className="text-[13px] font-bold text-gray-900 dark:text-gray-200 hover:text-[#14b8a6] dark:hover:text-[#059669] transition-colors">Contact</Link>
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
              <button className="text-gray-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu Slider (Premium Redesign) */}
        <div className={`fixed top-0 right-0 h-full w-[300px] z-[60] bg-gradient-to-b from-[#111111] to-[#0A0A0A] shadow-2xl transition-transform duration-300 ease-out p-6 flex flex-col lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#10b981] font-black text-xl tracking-widest">MENU</span>
            <button className="p-2 text-white bg-white/5 rounded-full hover:bg-[#10b981] hover:text-white transition-all border border-white/10 shadow-lg" onClick={() => setMobileMenuOpen(false)}>
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white hover:text-[#10b981] transition-colors p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#10b981]/30 flex items-center justify-between group">
              Home <span className="text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white hover:text-[#10b981] transition-colors p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#10b981]/30 flex items-center justify-between group">
              Services <span className="text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white hover:text-[#10b981] transition-colors p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#10b981]/30 flex items-center justify-between group">
              About Us <span className="text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white hover:text-[#10b981] transition-colors p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#10b981]/30 flex items-center justify-between group">
              Contact <span className="text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service/recharge" element={<RechargePage />} />
          <Route path="/service/bus-booking" element={<BusBookingPage />} />
          <Route path="/service/api" element={<ApiPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
        </Routes>

        {/* 6. FOOTER */}
        <footer className="bg-white dark:bg-[#111111] pt-8 pb-4 mt-auto border-t-[4px] border-[#10b981] relative overflow-hidden transition-colors duration-300 shadow-[0_-5px_25px_rgba(0,0,0,0.02)]">
          {/* Ambient Footer Glow */}
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#10b981]/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 mt-2">
              <div className="md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <img src="/images/LOGO_CJ.png" className="h-[55px] w-auto scale-[1.7] origin-left drop-shadow-sm" alt="CodeJeevan Logo" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-sm text-[13px] leading-relaxed font-medium">
                  An elite software engineering and strategy agency. We craft high-performance SaaS applications, custom APIs, and pixel-perfect UI/UX interfaces that scale with your growth.
                </p>
              </div>
              <div>
                <h4 className="font-extrabold text-gray-900 dark:text-white mb-4 text-[13px] tracking-widest uppercase">Company</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/about" className="text-gray-500 dark:text-gray-400 text-sm hover:text-[#10b981] hover:translate-x-1.5 transition-all inline-block font-medium">About Us</Link></li>
                  <li><Link to="/services" className="text-gray-500 dark:text-gray-400 text-sm hover:text-[#10b981] hover:translate-x-1.5 transition-all inline-block font-medium">Services</Link></li>
                  <li><Link to="/contact" className="text-gray-500 dark:text-gray-400 text-sm hover:text-[#10b981] hover:translate-x-1.5 transition-all inline-block font-medium">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-extrabold text-gray-900 dark:text-white mb-4 text-[13px] tracking-widest uppercase">Legal</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/privacy" className="text-gray-500 dark:text-gray-400 text-sm hover:text-[#10b981] hover:translate-x-1.5 transition-all inline-block font-medium">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-500 dark:text-gray-400 text-sm hover:text-[#10b981] hover:translate-x-1.5 transition-all inline-block font-medium">Terms of Service</Link></li>
                  <li><Link to="/sitemap" className="text-gray-500 dark:text-gray-400 text-sm hover:text-[#10b981] hover:translate-x-1.5 transition-all inline-block font-medium">Website Sitemap</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-white/5 pt-6 flex items-center justify-center">
              <p className="text-gray-400 dark:text-gray-500 text-xs font-semibold tracking-wide">© 2026 CodeJeevan. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-wa-float group"
          aria-label="Contact on WhatsApp"
        >
          {/* Pulsing rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-wa-pulse-1 pointer-events-none"></span>
          <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-wa-pulse-2 pointer-events-none"></span>
          
          {/* WhatsApp SVG Icon */}
          <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.444 5.703 1.445h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

      </div>
    </BrowserRouter>
  );
}
