import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../components/Icons';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ShieldIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
  const DataIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
  const CookieIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 10 10 0 1 0 0-20z"></path><path d="M12 2a14.5 14.5 0 0 1 0 20"></path></svg>;
  const UseIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
  const LockIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
  const HandshakeIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>;
  const ContactIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;

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
          <span className="text-gray-900 dark:text-white font-extrabold px-3 py-1 rounded-full bg-white dark:bg-[#1A1A1A] shadow-sm border border-gray-100 dark:border-white/5">Privacy Policy</span>
        </div>

        {/* Redesigned Sleek Hero Card */}
        <div className="bg-gradient-to-br from-[#0f766e] to-[#10b981] rounded-3xl p-8 md:p-10 text-center mb-10 shadow-lg shadow-[#10b981]/20 relative overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-black text-[10px] mb-4 uppercase tracking-widest backdrop-blur-sm border border-white/20">
              Legal Documentation
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">Privacy Policy</h1>
            <p className="text-emerald-50 font-semibold text-sm">Last Updated: April 2, 2026</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="animate-fade-in-up delay-100">
          
          <PolicySection title="Introduction" icon={ShieldIcon}>
            <p>
              Welcome to <strong>Code Jeevan</strong>. We highly value your privacy and are committed to protecting your personal data. This Privacy Policy strictly outlines how we collect, use, and safeguard your information when you utilize our high-end IT services, and custom API solutions (including Payment Gateway, UPI, and WhatsApp APIs).
            </p>
          </PolicySection>

          <PolicySection title="Information We Collect" icon={DataIcon}>
            <p className="mb-4">To deliver our premium services efficiently, we collect the following types of information:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start gap-3 bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#10b981] transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 shrink-0"></div>
                <span><strong className="text-gray-900 dark:text-white">Personal ID:</strong> Name, email address, phone number, and verified business details.</span>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#10b981] transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 shrink-0"></div>
                <span><strong className="text-gray-900 dark:text-white">Technical Data:</strong> IP address, device specs, and usage patterns via secure cookies.</span>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/5 md:col-span-2 hover:border-[#10b981] transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 shrink-0"></div>
                <span><strong className="text-gray-900 dark:text-white">Transaction Data:</strong> Encrypted details required for API processing, IMPS payout settlements, and gateway logs.</span>
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="How We Use Your Information" icon={UseIcon}>
            <p className="mb-4">Code Jeevan securely utilizes your collected data exclusively for the following structural purposes:</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[15px] bg-gray-50 dark:bg-[#1A1A1A] p-3 rounded-lg border border-transparent hover:border-[#10b981]/30 transition-colors">
                <div className="text-[#10b981] font-black w-5 h-5 rounded bg-[#10b981]/10 flex items-center justify-center shrink-0">✓</div>
                <p>To provide, scale, and maintain our enterprise IT services.</p>
              </div>
              <div className="flex items-center gap-3 text-[15px] bg-gray-50 dark:bg-[#1A1A1A] p-3 rounded-lg border border-transparent hover:border-[#10b981]/30 transition-colors">
                <div className="text-[#10b981] font-black w-5 h-5 rounded bg-[#10b981]/10 flex items-center justify-center shrink-0">✓</div>
                <p>To rapidly process payments and facilitate ultra-fast UPI/IMPS payouts.</p>
              </div>
              <div className="flex items-center gap-3 text-[15px] bg-gray-50 dark:bg-[#1A1A1A] p-3 rounded-lg border border-transparent hover:border-[#10b981]/30 transition-colors">
                <div className="text-[#10b981] font-black w-5 h-5 rounded bg-[#10b981]/10 flex items-center justify-center shrink-0">✓</div>
                <p>To integrate and dispatch official WhatsApp API notifications.</p>
              </div>
            </div>
          </PolicySection>

          <PolicySection title="Enterprise Data Security" icon={LockIcon}>
            <p>
              We implement military-grade security standards. Our infrastructure features <strong className="text-[#10b981]">SSL Encryption</strong>, <strong className="text-[#10b981]">DDoS Protection</strong>, and <strong className="text-[#10b981]">Secure Firewalls</strong> to absolutely prevent unauthorized access, leaks, or alteration of your personal and financial data. Your data is housed on strictly isolated, high-security cloud servers.
            </p>
          </PolicySection>

          <PolicySection title="Cookie Policy" icon={CookieIcon}>
            <p>
              Our website uses strictly necessary and performance cookies to heavily optimize your browsing experience and analyze network traffic. You have full autonomy to disable cookies through your browser, though it may limit the functionality of some API dashboards.
            </p>
          </PolicySection>

          <PolicySection title="Third-Party Disclosure" icon={HandshakeIcon}>
            <p>
              We absolutely <strong className="text-red-500">do not sell, trade, or expose</strong> your personal information to outside marketing parties. This safely excludes trusted banking and network partners who actively assist us in operating payout APIs or servers, strictly bound by Non-Disclosure Agreements (NDAs).
            </p>
          </PolicySection>

          <PolicySection title="Contact Our Legal Team" icon={ContactIcon}>
            <p className="mb-4">
              If you have any questions, compliance requests, or concerns regarding this Privacy Policy, please reach out to our dedicated legal team:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:legal@codejeevan.com" className="flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-gray-50 dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-white/10 hover:border-[#10b981] hover:bg-white dark:hover:bg-[#222] shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="text-sm font-bold text-gray-900 dark:text-white">legal@codejeevan.com</span>
              </a>
              <a href="mailto:support@codejeevan.com" className="flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-gray-50 dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-white/10 hover:border-[#10b981] hover:bg-white dark:hover:bg-[#222] shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                <span className="text-sm font-bold text-gray-900 dark:text-white">support@codejeevan.com</span>
              </a>
            </div>
          </PolicySection>

          <div className="mt-10 mb-10 text-center">
            <Link to="/terms" className="inline-flex items-center justify-center px-8 py-4 bg-[#10b981] text-white font-extrabold rounded-2xl hover:bg-[#0f766e] hover:scale-105 shadow-lg shadow-[#10b981]/30 transition-all uppercase tracking-wider text-sm">
              Read Terms & Conditions &rarr;
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
