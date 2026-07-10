import React from "react";
import { Wrench, Phone, Mail, Award, CheckCircle, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0B0F19] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Logo & Vision */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-orange flex items-center justify-center text-white">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-lg font-black tracking-tight text-white">
                  Osa<span className="text-brand-orange">Plumbing</span>
                </span>
                <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                  Elite Engineering
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              We deliver premium-grade residential piping, tankless thermal systems, non-destructive leak locator imaging, and around-the-clock emergency services.
            </p>
            {/* Regulatory licenses list */}
            <div className="pt-2 text-[10px] text-neutral-500 font-mono space-y-1">
              <p>CA Lic. Master Plumber No. 40813-A</p>
              <p>Certified backflow assemblies technician No. BF-8902</p>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400 mb-4">
              Structural Sections
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="text-neutral-400 hover:text-brand-orange transition-colors">Services Specs</a>
              <a href="#why-choose-us" onClick={(e) => handleScrollTo(e, "#why-choose-us")} className="text-neutral-400 hover:text-brand-orange transition-colors">Why Osa</a>
              <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="text-neutral-400 hover:text-brand-orange transition-colors">Who We Are</a>
              <a href="#process" onClick={(e) => handleScrollTo(e, "#process")} className="text-neutral-400 hover:text-brand-orange transition-colors">Our Process</a>
              <a href="#projects" onClick={(e) => handleScrollTo(e, "#projects")} className="text-neutral-400 hover:text-brand-orange transition-colors">Featured Cases</a>
              <a href="#faq" onClick={(e) => handleScrollTo(e, "#faq")} className="text-neutral-400 hover:text-brand-orange transition-colors">Faq Desk</a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="text-neutral-400 hover:text-brand-orange transition-colors">Direct Portal</a>
            </div>
          </div>

          {/* Column 3: Contact quick facts */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400">
              Immediate Dispatch
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span className="font-mono text-white">(800) 555-0199</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <span className="font-mono">support@osaplumbing.com</span>
              </p>
              <p className="text-[10px] text-neutral-500">
                Live dispatch monitoring active. Sub-hour response window on emergencies.
              </p>
            </div>
          </div>

          {/* Column 4: Certified badging */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400">
              Regulatory Badges
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-[9px] font-bold font-mono tracking-tight text-neutral-300">OSHA COMPLIANT</span>
              </div>
              <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-[9px] font-bold font-mono tracking-tight text-neutral-300">EPA LEAD-SAFE</span>
              </div>
              <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
                <span className="text-[9px] font-bold font-mono tracking-tight text-neutral-300">IAPMO CERTIFIED</span>
              </div>
              <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[9px] font-bold font-mono tracking-tight text-neutral-300">100% BONDED</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} OsaPlumbing. All Rights Reserved. Engineered with precision.</p>
          <div className="flex gap-4 font-mono text-[10px]">
            <a href="#" className="hover:text-brand-orange">Terms of Compliance</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange">Safety Warranties</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange">EPA Certifications</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
