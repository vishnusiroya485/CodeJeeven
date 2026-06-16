import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../components/Icons';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FileIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
  const CreditCardIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
  const AlertIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
  const CodeIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
  const ActivityIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
  const RefreshIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>;

  const PolicySection = ({ title, icon, children }) => (
    <div className="bg-white dark:bg-[#111111] rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.05)] dark:shadow-none transition-all duration-300 mb-6 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#10b981]/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10b981]/10 to-[#0f766e]/10 flex items-center justify-center text-[#10b981] shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">{title}</h2>
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-[15px]">
        {children}
      </div>
    </div>
  );

  return (
    <div className="pt-28 pb-20 bg-[#F8FAFC] dark:bg-[#0A0A0A] min-h-screen transition-colors duration-300">
      <div className="max-w-[850px] mx-auto px-6">
        
        {/* Sleek Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-8 animate-fade-in-up">
          <Link to="/" className="hover:text-[#10b981] font-bold transition-colors">Home</Link>
          <ChevronRightIcon className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 dark:text-white font-extrabold px-3 py-1 rounded-full bg-white dark:bg-[#1A1A1A] shadow-sm border border-gray-100 dark:border-white/5">Terms & Conditions</span>
        </div>

        {/* Redesigned Sleek Hero Card */}
        <div className="bg-gradient-to-br from-[#0f766e] to-[#10b981] rounded-3xl p-8 md:p-10 text-center mb-10 shadow-lg shadow-[#10b981]/20 relative overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-black text-[10px] mb-4 uppercase tracking-widest backdrop-blur-sm border border-white/20">
              Service Agreement
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">Terms & Conditions</h1>
            <p className="text-emerald-50 font-semibold text-sm">Effective Date: April 2, 2026</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="animate-fade-in-up delay-100">
          
          <PolicySection title="1. Acceptance of Terms" icon={FileIcon}>
            <p>
              By accessing the <strong>Code Jeevan</strong> website and utilizing our enterprise services (Web Development, API Integrations, Payouts, etc.), you agree to be legally bound by these Terms and Conditions. If you do not agree with any structural part of this agreement, please refrain from using our services.
            </p>
          </PolicySection>

          <PolicySection title="2. Service Usage & API Access" icon={ActivityIcon}>
            <p>
              Users are strictly responsible for maintaining the confidentiality of their <strong className="text-[#10b981]">API keys</strong> and account credentials. Any unauthorized utilization of our WhatsApp API, Payment Gateway, or Payout services must be reported immediately to Code Jeevan support to prevent immediate service termination.
            </p>
          </PolicySection>

          <PolicySection title="3. Payment & Refunds" icon={CreditCardIcon}>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 bg-gray-50 dark:bg-[#1A1A1A] p-3 rounded-lg border border-transparent hover:border-[#10b981]/30 transition-colors">
                <div className="text-[#10b981] font-black w-5 h-5 rounded bg-[#10b981]/10 flex items-center justify-center shrink-0">✓</div>
                <span>All service fees are to be paid strictly in advance unless otherwise established in a customized written contract.</span>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 dark:bg-[#1A1A1A] p-3 rounded-lg border border-transparent hover:border-[#10b981]/30 transition-colors">
                <div className="text-[#10b981] font-black w-5 h-5 rounded bg-[#10b981]/10 flex items-center justify-center shrink-0">✓</div>
                <span>API setup and onboarding fees are <strong className="text-red-500">non-refundable</strong> once the integration and architectural process has actively commenced.</span>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 dark:bg-[#1A1A1A] p-3 rounded-lg border border-transparent hover:border-[#10b981]/30 transition-colors">
                <div className="text-[#10b981] font-black w-5 h-5 rounded bg-[#10b981]/10 flex items-center justify-center shrink-0">✓</div>
                <span>Refunds for complex web development projects will be actively handled according to the specific project milestone agreement signed.</span>
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Prohibited Activities" icon={AlertIcon}>
            <p className="mb-4">You agree not to utilize our infrastructure for any illegal or disruptive purposes, including but not limited to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start gap-3 bg-red-50 dark:bg-red-500/5 p-4 rounded-xl border border-red-100 dark:border-red-500/10">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                <span>Fraudulent financial transactions via our Payout or UPI APIs.</span>
              </li>
              <li className="flex items-start gap-3 bg-red-50 dark:bg-red-500/5 p-4 rounded-xl border border-red-100 dark:border-red-500/10">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                <span>Spamming or sending unsolicited marketing via WhatsApp Bulk API.</span>
              </li>
              <li className="flex items-start gap-3 bg-red-50 dark:bg-red-500/5 p-4 rounded-xl border border-red-100 dark:border-red-500/10 md:col-span-2">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                <span>Hacking, scraping, or attempting to disrupt our server infrastructure and routing systems.</span>
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Intellectual Property" icon={CodeIcon}>
            <p>
              All proprietary content, modern designs, and custom backend code strictly developed by Code Jeevan remain our intellectual property until the final payment is cleared in full and absolute ownership is officially transferred to the client.
            </p>
          </PolicySection>

          <PolicySection title="6. Modifications & Updates" icon={RefreshIcon}>
            <p>
              We heavily reserve the right to legally modify these terms at any time. Continued usage of our website or APIs following any functional changes constitutes your definitive acceptance of the newly deployed Terms and Conditions.
            </p>
          </PolicySection>

          <div className="bg-gradient-to-r from-gray-50 to-white dark:from-[#111] dark:to-[#161616] rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-white/5 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white m-0">Questions about our Terms?</h3>
              <p className="text-gray-500 dark:text-gray-400 m-0 mt-2 font-medium">Our enterprise support team is here to actively help clarify any technical or legal questions.</p>
            </div>
            <Link to="/contact" className="px-8 py-3.5 bg-gradient-to-r from-[#0f766e] to-[#10b981] text-white font-extrabold rounded-xl hover:shadow-lg hover:shadow-[#10b981]/30 hover:scale-105 transition-all whitespace-nowrap">
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
