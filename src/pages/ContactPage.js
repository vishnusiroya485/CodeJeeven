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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    if(!formData.firstName || !formData.message) {
      alert("Please enter at least your name and message.");
      return;
    }
    const text = `Hello CodeJeevan!%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 animate-fade-in-up">
          <Link to="/" className="hover:text-[#14b8a6] font-bold transition-colors">Home</Link>
          <ChevronRightIcon className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 dark:text-white font-extrabold">Contact Us</span>
        </div>

        {/* Contact Layout (Height reduced and colors matched to brand theme) */}
        <div className="bg-white dark:bg-[#111111] rounded-2xl border border-gray-150 dark:border-white/5 shadow-[0_15px_50px_rgba(0,0,0,0.02)] dark:shadow-none overflow-hidden flex flex-col md:flex-row animate-fade-in-up">
          
          {/* Left Side: Contact Info (Sober corporate dark-navy gradient) */}
          <div className="md:w-5/12 bg-gradient-to-br from-[#0f766e] to-[#0f172a] p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
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
              
              <div className="flex flex-col gap-5 mt-4">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 border border-white/10">
                    <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-[9px] font-bold uppercase tracking-wider">Call</p>
                    <span className="font-extrabold text-sm block tracking-wide">+91 98765 43210</span>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 border border-white/10">
                    <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-[9px] font-bold uppercase tracking-wider">Email</p>
                    <span className="font-extrabold text-sm block tracking-wide">hello@codejeevan.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Accents */}
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          {/* Right Side: Form (Compact height, clean margins) */}
          <div className="md:w-7/12 p-6 lg:p-10 bg-white dark:bg-[#111111]">
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
