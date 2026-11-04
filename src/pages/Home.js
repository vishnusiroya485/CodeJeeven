import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CountUp = ({ end, duration, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    let animationFrameId;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      // Use easeOutQuart for a smoother counting effect
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(easeProgress * end);
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);
    
    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
};


function useScrollFade() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);
  return [ref, isVisible];
}

export default function Home() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  );

  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "How many days does it take to get a website ready?", a: "Small websites take 7-10 days, while custom portals take 20-30 days to be fully ready." },
    { q: "Do you provide API documentation?", a: "Yes, we provide complete and comprehensive Postman documentation for all our API integrations." },
    { q: "How is the after-sales support?", a: "We provide 24/7 dedicated support along with 3-6 months of free maintenance for all projects." }
  ];
  
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
    const currentRef = whyChooseUsRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let count = 0;
    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cols = 35;
      const rows = 4; // Only 4 elegant wave lines
      const gapX = canvas.width / (cols - 1);
      const gapY = canvas.height / (rows - 1);
      
      // Draw flowing wave lines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const angleX = c * 0.1 + count * 0.008;
          const angleY = r * 0.5 + count * 0.005;
          const x = c * gapX;
          const y = (r * gapY * 0.6) + (canvas.height * 0.15) + Math.sin(angleX) * 40 + Math.cos(angleY) * 20;
          
          if (c === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        const opacity = 0.06; // Extremely light, faint opacity
        const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
        grad.addColorStop(0, `rgba(59, 130, 246, 0.01)`);
        grad.addColorStop(0.3, `rgba(59, 130, 246, ${opacity})`);
        grad.addColorStop(0.7, `rgba(14, 165, 233, ${opacity})`);
        grad.addColorStop(1, `rgba(14, 165, 233, 0.01)`);
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2; // Thin premium line
        ctx.stroke();
      }
      
      count += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      {/* Custom Keyframes for Background Blobs */}
      <style>{`
        @keyframes float-slow-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.08); }
          66% { transform: translate(-20px, 20px) scale(0.96); }
        }
        @keyframes float-slow-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1.08); }
          50% { transform: translate(-40px, 40px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1.08); }
        }
        .animate-float-slow-1 { animation: float-slow-1 16s ease-in-out infinite; }
        .animate-float-slow-2 { animation: float-slow-2 20s ease-in-out infinite; }
      `}</style>

      <section id="hero" className="relative pt-20 lg:pt-24 pb-16 overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
        {/* HERO_BG_CJ Background Image (Clear and Visible) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/HERO_BG_CJ.JPG" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-95 dark:opacity-85 pointer-events-none"
          />
          {/* Subtle gradient overlay to ensure text contrast while keeping image visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white dark:from-[#0A0A0A]/10 dark:via-[#0A0A0A]/60 dark:to-[#0A0A0A] pointer-events-none"></div>
        </div>

        {/* Dynamic Canvas Background (Flowing Waves) */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-1 opacity-70 dark:opacity-80 pointer-events-none"
        />

        {/* Subtle Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-1"></div>

        {/* Adjusted max-w and reduced gap to fix excessive center spacing */}
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10 mt-6 lg:mt-4 mb-8 lg:mb-0 animate-fade-in-up delay-200">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0FDF4] dark:bg-white/5 border border-[#A7F3D0] dark:border-white/10 text-[#10b981] font-bold text-xs mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
              100% Secure & Trusted
            </div>
            
            <h1 className="text-[34px] md:text-[46px] lg:text-[56px] font-extrabold text-[#111111] dark:text-white leading-[1.1] mb-6 tracking-tight">
              Scale Your Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#10b981]">with CodeJeevan</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-[500px] leading-relaxed mx-auto lg:mx-0">
              Next-generation Web Development, High-Speed Payment APIs, and aggressive SEO strategies designed for the modern enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
              <button className="relative overflow-hidden w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#0f766e] to-[#10b981] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#10b981]/30 transition-all transform hover:-translate-y-0.5 group">
                <span className="relative z-10">Explore Solutions</span>
                {/* Shine effect */}
                <div className="absolute inset-0 top-0 -left-[100%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_4s_infinite]"></div>
              </button>
              <Link to="/contact" className="w-full sm:w-auto px-7 py-3.5 bg-transparent text-[#10b981] dark:text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-80 hover:scale-95 transition-all border border-[#10b981] dark:border-white/20">
                Contact Us <span>&rarr;</span>
              </Link>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-3">
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#0f766e] text-white flex items-center justify-center font-bold text-[9px] shadow-sm">RK</div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#10b981] text-white flex items-center justify-center font-bold text-[9px] shadow-sm">MS</div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-500 text-white flex items-center justify-center font-bold text-[9px] shadow-sm">PJ</div>
              </div>
              <div className="text-xs font-semibold text-gray-500">
                Happy Clients & Partners
              </div>
            </div>
          </div>
          
          {/* Right Content: Illustration Only */}
          <div className="flex-1 w-full relative flex items-center justify-center lg:justify-end animate-fade-in-up delay-300 mt-12 lg:mt-0 py-8 z-10">
            <img 
              src="/images/illustration.png" 
              alt="CodeJeevan Software Agency Illustration" 
              className="w-full max-w-[580px] h-auto object-contain hover:scale-[1.03] transition-transform duration-500 ease-out z-10" 
            />
          </div>
        </div>
      </section>

      {/* 1.5 SERVICES TICKER (PILL BADGES) */}
      <div className="py-5 bg-[#0B0E14] border-y border-white/[0.02] overflow-hidden">
        {(() => {
          const tickerServices = [
             { name: "WhatsApp Bulk API", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>, color: "text-[#10B981]", bg: "bg-[#10B981]/10" },
             { name: "Payment Gateway", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>, color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10" },
             { name: "IMPS Payout API", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 3h5v5"></path><path d="M4 21h5v-5"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>, color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10" },
             { name: "SEO Services", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><polyline points="11 8 11 12 14 15"></polyline></svg>, color: "text-[#EC4899]", bg: "bg-[#EC4899]/10" },
             { name: "Custom Portals", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, color: "text-[#14B8A6]", bg: "bg-[#14B8A6]/10" },
             { name: "Web Development", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, color: "text-[#10b981]", bg: "bg-[#10b981]/10" },
             { name: "Digital Marketing", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>, color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10" }
          ];

          return (
            <div className="relative w-full overflow-hidden flex items-center group">
              {/* Fade Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0E14] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0E14] to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling Container */}
              <div className="flex animate-scroll-x group-hover:[animation-play-state:paused] w-max">
                
                {/* First Set */}
                <div className="flex gap-4 pr-4">
                  {tickerServices.map((service, idx) => (
                    <div key={`set1-${idx}`} className="flex items-center gap-3 bg-[#161B22] hover:bg-[#1E242D] border border-white/5 hover:border-white/10 rounded-full px-5 py-2.5 transition-all duration-300 cursor-pointer group/pill shadow-sm">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center ${service.bg} ${service.color} group-hover/pill:scale-110 transition-transform duration-300 shadow-inner`}>
                        {service.icon}
                      </div>
                      <span className="text-gray-300 font-bold text-[13px] tracking-wide whitespace-nowrap group-hover/pill:text-white transition-colors">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Second Set (Duplicate for seamless loop) */}
                <div className="flex gap-4 pr-4">
                  {tickerServices.map((service, idx) => (
                    <div key={`set2-${idx}`} className="flex items-center gap-3 bg-[#161B22] hover:bg-[#1E242D] border border-white/5 hover:border-white/10 rounded-full px-5 py-2.5 transition-all duration-300 cursor-pointer group/pill shadow-sm">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center ${service.bg} ${service.color} group-hover/pill:scale-110 transition-transform duration-300 shadow-inner`}>
                        {service.icon}
                      </div>
                      <span className="text-gray-300 font-bold text-[13px] tracking-wide whitespace-nowrap group-hover/pill:text-white transition-colors">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          );
        })()}
      </div>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="relative py-16 bg-[#F8FAFC] dark:bg-[#111111] transition-colors duration-300">
        
        <div className="relative max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-8 items-center z-10 text-center">
          
          <div className="max-w-4xl">
            <h4 className="text-[#10b981] font-extrabold text-[11px] tracking-widest mb-4 uppercase inline-flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#10b981]/30"></span>
              About CodeJeevan
              <span className="w-10 h-0.5 bg-[#10b981]/30"></span>
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Empowering Enterprises with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#10b981]">Next-Gen Tech</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed text-lg max-w-3xl mx-auto">
              At CodeJeevan, we are the architects of digital transformation. We blend cutting-edge web development, seamless API integrations, and data-driven SEO strategies to build scalable, high-performance platforms that drive explosive growth for modern businesses.
            </p>
          </div>
          
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-2">
            {/* Blue Tint */}
            <div className="bg-[#F0FDF4] dark:bg-[#10b981]/10 p-4 rounded-3xl border border-[#10b981]/10 dark:border-[#10b981]/20 text-center flex flex-col justify-center items-center h-[110px] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#10b981]/20 transition-all duration-300 group">
              <h3 className="text-3xl font-extrabold text-[#10b981] dark:text-[#C7D2FE] mb-1 tracking-tight">
                <CountUp end={500} duration={2.5} suffix="+" />
              </h3>
              <p className="text-[10px] text-[#10b981]/70 dark:text-[#C7D2FE]/70 font-bold uppercase tracking-wider">Projects Delivered</p>
            </div>
            {/* Orange Tint */}
            <div className="bg-[#FFF7ED] dark:bg-[#F97316]/10 p-4 rounded-3xl border border-[#F97316]/10 dark:border-[#F97316]/20 text-center flex flex-col justify-center items-center h-[110px] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#F97316]/20 transition-all duration-300 delay-100 group">
              <h3 className="text-3xl font-extrabold text-[#F97316] dark:text-[#FFDBB5] mb-1 tracking-tight">
                <CountUp end={200} duration={3} suffix="+" />
              </h3>
              <p className="text-[10px] text-[#F97316]/70 dark:text-[#FFDBB5]/70 font-bold uppercase tracking-wider">API Integrations</p>
            </div>
            {/* Blue Tint */}
            <div className="bg-[#F0FDF4] dark:bg-[#10b981]/10 p-4 rounded-3xl border border-[#10b981]/10 dark:border-[#10b981]/20 text-center flex flex-col justify-center items-center h-[110px] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#10b981]/20 transition-all duration-300 delay-200 group">
              <h3 className="text-3xl font-extrabold text-[#10b981] dark:text-[#C7D2FE] mb-1 tracking-tight">
                <CountUp end={99} duration={2.5} suffix="%" />
              </h3>
              <p className="text-[10px] text-[#10b981]/70 dark:text-[#C7D2FE]/70 font-bold uppercase tracking-wider">Client Satisfaction</p>
            </div>
            {/* Purple Tint */}
            <div className="bg-[#F5F3FF] dark:bg-[#8B5CF6]/10 p-4 rounded-3xl border border-[#8B5CF6]/10 dark:border-[#8B5CF6]/20 text-center flex flex-col justify-center items-center h-[110px] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all duration-300 delay-300 group">
              <h3 className="text-3xl font-extrabold text-[#8B5CF6] dark:text-[#DDD6FE] mb-1 tracking-tight">
                <CountUp end={24} duration={3} suffix="/7" />
              </h3>
              <p className="text-[10px] text-[#8B5CF6]/70 dark:text-[#DDD6FE]/70 font-bold uppercase tracking-wider">Expert Support</p>
            </div>
          </div>
          
        </div>
      </section>
      {/* 3. INFINITE MARQUEE SERVICES SECTION */}
      {(() => {
        const row1Services = [
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, title: "Web Development", desc: "Scalable and secure web apps using React, Node, and PHP.", color: "blue-bg", link: "/service/web" },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>, title: "Logo Design", desc: "Unique brand identities that tell your company's story.", color: "green-bg", link: "/service/design" },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>, title: "Digital Marketing", desc: "Results-driven marketing to increase your ROI.", color: "blue-bg", link: "/service/marketing" },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>, title: "WhatsApp Bulk API", desc: "Send automated alerts and marketing messages via WhatsApp.", color: "green-bg", link: "/service/whatsapp" }
        ];
        
        const row2Services = [
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>, title: "Payment Gateway", desc: "Secure and instant payment collection for your website.", color: "blue-bg", link: "/service/payments" },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"></path><path d="M4 21h5v-5"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>, title: "IMPS Payout API", desc: "Instant merchant payouts and fund settlements 24x7.", color: "green-bg", link: "/service/payouts" },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>, title: "SEO Services", desc: "Aggressive SEO strategies designed for modern enterprise.", color: "blue-bg", link: "/service/seo" },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, title: "Custom Portals", desc: "Tailored portal development for your specific business.", color: "green-bg", link: "/service/portals" }
        ];

        return (
          <section id="services" className="pt-24 pb-12 bg-[#F8FAFC] dark:bg-[#0A0A0A] relative transition-colors duration-300 overflow-hidden z-0">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 text-[#14b8a6] font-bold text-[10px] mb-4 uppercase tracking-widest shadow-sm">
                Our Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#10b981]">Digital</span> Excellence
              </h2>
            </div>

            <div className="services-marquee-wrapper">
              {/* TOP TRACK (Scrolls Left) */}
              <div className="services-track scroll-left mb-6">
                {[...row1Services, ...row1Services, ...row1Services].map((service, idx) => (
                  <div className="glass-card group" key={`r1-${idx}`}>
                    <div className={`icon-box ${service.color}`}>{service.icon}</div>
                    <h4 className="mt-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#14b8a6] transition-colors">{service.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* BOTTOM TRACK (Scrolls Right) */}
              <div className="services-track scroll-right">
                {[...row2Services, ...row2Services, ...row2Services].map((service, idx) => (
                  <div className="glass-card group" key={`r2-${idx}`}>
                    <div className={`icon-box ${service.color}`}>{service.icon}</div>
                    <h4 className="mt-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#14b8a6] transition-colors">{service.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* 3.5 TECH STACK SECTION */}
      <section className="pt-8 pb-20 bg-white dark:bg-[#111111] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Built with <span className="text-[#10b981]">Modern Tech</span>
          </h2>
          <div className="w-12 h-1.5 bg-[#10b981] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 dark:text-gray-400 mb-14 text-sm md:text-lg max-w-2xl mx-auto font-medium">
            Scalable, fast, and secure technologies tailored for your business needs.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-6">
            {[
              { name: "Android", icon: "android/android-original.svg" },
              { name: "iOS", icon: "apple/apple-original.svg", invertDark: true },
              { name: "React.js", icon: "react/react-original.svg" },
              { name: "React Native", icon: "react/react-original.svg" },
              { name: "TypeScript", icon: "typescript/typescript-original.svg" },
              { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
              { name: "Express.js", icon: "express/express-original.svg", invertDark: true },
              { name: "Laravel", icon: "laravel/laravel-original.svg" },
              { name: "Python", icon: "python/python-original.svg" },
              { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
              { name: "MySQL", icon: "mysql/mysql-original.svg" },
              { name: "AWS Cloud", icon: "amazonwebservices/amazonwebservices-original-wordmark.svg", invertDark: true },
              { name: "WordPress", icon: "wordpress/wordpress-plain.svg", invertDark: true },
              { name: "PHP", icon: "php/php-original.svg" },
              { name: "Flutter", icon: "flutter/flutter-original.svg" },
              { name: ".NET", icon: "dot-net/dot-net-original.svg" },
              { name: ".NET Core", icon: "dotnetcore/dotnetcore-original.svg" },
              { name: "MSSQL", icon: "microsoftsqlserver/microsoftsqlserver-plain.svg", invertDark: true }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-white/5 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,166,81,0.15)] hover:border-[#10b981]/30 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                {/* Subtle gradient glow behind the icon on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 relative z-10">
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`} alt={tech.name} className={`w-full h-full object-contain ${tech.invertDark ? 'dark:invert' : ''}`} />
                </div>
                <span className="text-gray-900 dark:text-white font-bold text-[13px] text-center relative z-10 group-hover:text-[#10b981] transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" ref={whyChooseUsRef} className="py-16 bg-gray-50 dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          
          {/* Header */}
          <div className={`text-center mb-16 ${isWhyChooseUsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] font-bold text-[10px] mb-4 uppercase tracking-widest shadow-sm">
              Why Choose Us
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] dark:text-white leading-snug tracking-tight">
              Elite Engineering & Strategy <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#10b981]">For Unstoppable Growth</span>
            </h2>
          </div>

          {/* Grid Layout for Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "High-Performance", desc: "Blazingly fast, infinitely scalable systems built to handle millions of requests effortlessly." },
              { num: "02", title: "Pixel-Perfect UI/UX", desc: "Stunning designs engineered with psychology to turn your visitors into loyal customers." },
              { num: "03", title: "Bulletproof Security", desc: "Enterprise-grade encryption and audits to ensure complete protection of your data." },
              { num: "04", title: "Flawless APIs", desc: "Whether it's complex payment gateways or CRMs, our APIs connect seamlessly with zero latency." },
              { num: "05", title: "SEO Dominance", desc: "We don't just build websites; we rank them. Put your business at the top of search results." },
              { num: "06", title: "24/7 Elite Support", desc: "Our dedicated team provides round-the-clock technical support to ensure 99.99% uptime." }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100/80 dark:border-white/5 relative overflow-hidden group hover:-translate-y-1.5 hover:border-[#10b981]/30 dark:hover:border-[#10b981]/20 hover:shadow-[0_20px_40px_rgba(13,148,136,0.08)] dark:hover:shadow-[0_20px_40px_rgba(13,148,136,0.15)] transition-all duration-300 ease-out ${isWhyChooseUsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${0.1 * idx}s` }}>
                
                <div className="flex items-start gap-5 relative z-10">
                  <span className="text-[50px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 group-hover:from-[#0f766e] group-hover:to-[#10b981] transition-all duration-300 drop-shadow-sm shrink-0 select-none">
                    {item.num}
                  </span>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#10b981] transition-colors mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle Background Glow on hover */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#0f766e]/5 to-[#10b981]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 6. MEET OUR TEAM SECTION */}
      <section className="py-24 bg-white dark:bg-[#111111] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Meet Our <span className="text-[#10b981]">Team</span>
          </h2>
          <div className="w-12 h-1.5 bg-[#10b981] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-550 dark:text-gray-400 mb-16 text-sm md:text-lg mx-auto font-medium max-w-2xl">
            The elite minds behind every pixel and every line of code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-14 bg-[#F8FAFC] dark:bg-[#0A0A0A] transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Frequently <span className="text-[#10b981]">Asked Questions</span>
          </h2>
          <div className="w-12 h-1.5 bg-[#10b981] mx-auto rounded-full mb-12"></div>

          <div className="flex flex-col gap-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_40px_rgba(16,185,129,0.08)] hover:-translate-y-1 hover:border-[#10b981]/30 group">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)} 
                    className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-extrabold text-gray-900 dark:text-white text-[15px] sm:text-base pr-4 group-hover:text-[#10b981] transition-colors">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#10b981] text-white rotate-180' : 'bg-teal-50 dark:bg-[#10b981]/10 text-[#10b981]'}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5 text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-50 dark:border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
