import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Wrench, AlertTriangle } from "lucide-react";

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "About", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Wait for the drawer to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // height of navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 250);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg  flex items-center justify-center text-white transition-all duration-300 group-hover:bg-brand-blue/90 group-hover:scale-105">
              <img src="/logo.png" alt="Osa Plumbing Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-display text-xl font-extrabold tracking-tight text-slate-800 group-hover:text-brand-blue transition-colors">
                Osa<span className="text-brand-blue group-hover:text-slate-800">Plumbing</span>
              </span>
              <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                Elite Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`navlink-${link.name.toLowerCase().replace(" ", "-")}`}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-brand-blue rounded-full hover:bg-slate-50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              id="nav-emergency-phone"
              href="tel:+2349066172210"
              className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-brand-blue transition-colors"
            >
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-mono font-bold leading-none uppercase mb-0.5">Emergency 24/7</p>
                <p className="text-sm font-bold font-mono tracking-tight text-slate-800">+234 906 617 2210</p>
              </div>
            </a>
            <button
              id="nav-booking-cta"
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-slate-900 text-white hover:bg-slate-800 rounded-full text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-200 cursor-pointer shadow-sm"
            >
              Book Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              id="mobile-phone-urgent"
              href="tel:+2349066172210"
              className="p-2 h-9 w-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shadow-inner"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 h-9 w-9 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-brand-dark"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 mt-3 shadow-lg max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    id={`mobile-navlink-${link.name.toLowerCase().replace(" ", "-")}`}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-brand-blue rounded-xl bg-slate-50 hover:bg-brand-blue/5 transition-all text-center"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a
                  id="mobile-drawer-emergency-link"
                  href="tel:+23489066172210"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-red-50 text-red-700 font-bold font-mono text-center hover:bg-red-100 transition-colors"
                >
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span>EMERGENCY DISPATCH: +234 890 661 72210</span>
                </a>
                <button
                  id="mobile-drawer-booking-cta"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-4 bg-brand-blue text-white text-sm font-bold uppercase tracking-wider font-mono rounded-full hover:bg-brand-blue-hover shadow-md cursor-pointer"
                >
                  Book Priority Dispatch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
