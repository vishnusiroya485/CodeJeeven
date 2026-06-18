import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../components/Icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(formError) setFormError(''); // Clear error on typing
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    if(!formData.firstName || !formData.message) {
      setFormError("Please enter at least your first name and project details.");
      return;
    }
    setFormError('');
    const text = `Hello CodeJeevan!%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/917734887834?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-[950px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 animate-fade-in-up">
          <Link to="/" className="hover:text-[#14b8a6] font-bold transition-colors">Home</Link>
          <ChevronRightIcon className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 dark:text-white font-extrabold">Contact Us</span>
        </div>

        {/* Contact Layout (Height reduced and colors matched to brand theme) */}
        <div className="bg-white dark:bg-[#111111] rounded-2xl border border-gray-150 dark:border-white/5 shadow-[0_15px_50px_rgba(0,0,0,0.02)] dark:shadow-none overflow-hidden flex flex-col md:flex-row animate-fade-in-up">
          
          {/* Left Side: Contact Info (Lighter Emerald Gradient) */}
          <div className="md:w-5/12 bg-gradient-to-br from-[#10b981] to-[#0f766e] p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden group">
            <style>{`
              @keyframes contact-shine {
                0% { transform: translateX(-150%) skewX(-15deg); }
                50% { transform: translateX(250%) skewX(-15deg); }
                100% { transform: translateX(250%) skewX(-15deg); }
              }
              .animate-contact-shine { animation: contact-shine 4s ease-in-out infinite; }
            `}</style>
            
            {/* Animated Shining Beam */}
            <div className="absolute top-0 -left-[100%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-contact-shine pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/20 text-white font-extrabold text-[9px] mb-4 uppercase tracking-wider">
                  Contact
                </span>
                <h3 className="text-2xl lg:text-3xl font-black mb-3 leading-tight">
                  Let's Build Together
                </h3>
                <p className="text-white/80 text-xs lg:text-sm leading-relaxed font-semibold max-w-[280px]">
                  Whether you need custom APIs, apps, or web systems, we are ready to build.
                </p>
              </div>
              
              <div className="flex flex-col gap-6 mt-4 relative z-10">
                {/* WhatsApp Clickable Link */}
                <a href="https://wa.me/917734887834" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:opacity-80 transition-all cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-0.5">WhatsApp Us</p>
                    <span className="font-extrabold text-base block tracking-wide group-hover:text-white transition-colors">+91 77348 87834</span>
                  </div>
                </a>
                
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-0.5">Email</p>
                    <span className="font-extrabold text-base block tracking-wide">Codejeevan2025@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Accents */}
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          {/* Right Side: Form (Compact height, clean margins) */}
          <div className="md:w-7/12 p-6 lg:p-10 bg-white dark:bg-[#111111] relative z-10">
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1 tracking-tight">Send a Message</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 font-semibold">Fill out the details and we will reach out shortly.</p>
            
            <form onSubmit={handleWhatsAppRedirect} className="flex flex-col gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John" 
                    className="px-3.5 py-2.5 rounded-lg border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-[#151515] focus:border-[#14b8a6] focus:ring-4 focus:ring-[#14b8a6]/5 outline-none transition-all text-xs font-semibold" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe" 
                    className="px-3.5 py-2.5 rounded-lg border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-[#151515] focus:border-[#14b8a6] focus:ring-4 focus:ring-[#14b8a6]/5 outline-none transition-all text-xs font-semibold" 
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="px-3.5 py-2.5 rounded-lg border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-[#151515] focus:border-[#14b8a6] focus:ring-4 focus:ring-[#14b8a6]/5 outline-none transition-all text-xs font-semibold" 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">How can we help?</label>
                <textarea 
                  rows="3" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project..." 
                  className="px-3.5 py-2.5 rounded-lg border border-gray-150 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-[#151515] focus:border-[#14b8a6] focus:ring-4 focus:ring-[#14b8a6]/5 outline-none transition-all text-xs font-semibold resize-none"
                ></textarea>
              </div>
              
              {formError && (
                <div className="text-red-500 text-[10px] font-extrabold uppercase tracking-widest animate-pulse mt-1">
                  {formError}
                </div>
              )}

              <button 
                type="submit" 
                className="mt-2 w-full py-3 bg-gradient-to-r from-[#14b8a6] to-[#059669] text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:shadow-md hover:shadow-teal-500/10 transition-all transform active:scale-98"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
