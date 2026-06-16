import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SitemapPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sitemapData = [
    {
      title: "Core Pages",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
      links: [
        { label: "Home Page", path: "/" },
        { label: "About Company", path: "/about" },
        { label: "All Services", path: "/services" },
        { label: "Project Gallery", path: "/#projects" },
        { label: "Latest Blogs", path: "/#blog" },
        { label: "Contact Us", path: "/contact" }
      ]
    },
    {
      title: "Service Index",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      links: [
        { label: "Web Development", path: "/services" },
        { label: "Logo Design", path: "/services" },
        { label: "WhatsApp Bulk API", path: "/service/api" },
        { label: "Payment Gateway", path: "/service/api" },
        { label: "IMPS Payout API", path: "/service/api" },
        { label: "UPI Transfer API", path: "/service/api" },
        { label: "Advanced SEO", path: "/services" }
      ]
    },
    {
      title: "Legal & Support",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
      links: [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms & Conditions", path: "/terms" },
        { label: "HTML Sitemap", path: "/sitemap" },
        { label: "FAQs", path: "/#faq" },
        { label: "Help Desk", path: "/contact" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-white dark:bg-[#0A0A0A] min-h-screen transition-colors duration-300 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0f766e]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Sleek Header Card */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-gradient-to-br from-[#0f766e] to-[#10b981] rounded-3xl p-8 md:p-10 text-center mb-16 shadow-lg shadow-[#10b981]/20 relative overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-black text-[10px] mb-4 uppercase tracking-widest backdrop-blur-sm border border-white/20">
              Site Navigation
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">Website Sitemap</h1>
            <p className="text-emerald-50 font-semibold text-sm md:text-lg max-w-2xl mx-auto">Easily navigate through all the premium sections and pages of Code Jeevan.</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sitemapData.map((section, idx) => (
            <div key={idx} className="bg-white dark:bg-[#111111] rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#10b981]/10 text-[#10b981] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-white/10 pb-4">{section.title}</h2>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link to={link.path} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-[#10b981] dark:hover:text-[#10b981] font-medium transition-colors group/link">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 mr-3 group-hover/link:bg-[#10b981] group-hover/link:scale-150 transition-all"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
