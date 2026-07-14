import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Calendar, Star, Shield, ArrowRight, Check } from "lucide-react";
import heroImage from "../assets/images/hero_plumbing_1783608138296.jpg";

export default function Hero({ onOpenBooking }) {
  const [quickService, setQuickService] = useState("emergency");
  const [dispatchTime, setDispatchTime] = useState("Under 35 Mins");

  const handleQuickServiceChange = (service) => {
    setQuickService(service);
    switch (service) {
      case "emergency":
        setDispatchTime("Under 35 Mins");
        break;
      case "water-heater":
        setDispatchTime("Same-Day Dispatch");
        break;
      case "drain":
        setDispatchTime("Under 45 Mins");
        break;
      case "leak":
        setDispatchTime("Within 1 Hour");
        break;
      default:
        setDispatchTime("On-Demand");
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 bg-gradient-to-br from-[#F5F7FA] via-white to-[#EEF2F6] overflow-hidden"
    >
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-brand-blue/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-brand-orange/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-xs"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-700 font-mono">
                4.9/5 Certified Yelp & Google Rating
              </span>
            </motion.div>

            {/* Display Headings */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
            >
              Elite Plumbing Engineering. <br />
              <span className="text-brand-blue">Surgical Precision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed"
            >
              Osasere plumbing and construction delivers master-grade mechanical installations and rapid 24/7 emergency response. We respect your architecture, stand behind our warranties, and price transparently.
            </motion.p>

            {/* Benefit Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 max-w-lg"
            >
              <div className="flex items-start gap-2.5">
                <div className="mt-1 bg-brand-blue/10 p-1 rounded-md text-brand-blue">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">No Diagnostic Fees</h4>
                  <p className="text-xs text-slate-500">Credited with repairs.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="mt-1 bg-brand-blue/10 p-1 rounded-md text-brand-blue">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Licensed & Bonded</h4>
                  <p className="text-xs text-slate-500">Full general coverage.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="mt-1 bg-brand-blue/10 p-1 rounded-md text-brand-blue">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Under 45-Min Arrival</h4>
                  <p className="text-xs text-gray-500">Real-time GPS dispatch.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="mt-1 bg-brand-blue/10 p-1 rounded-md text-brand-blue">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Fixed Estimates</h4>
                  <p className="text-xs text-slate-500">Never hidden up-charges.</p>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                id="hero-book-now"
                onClick={onOpenBooking}
                className="btn-primary gap-2 text-base group cursor-pointer"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Book Priority Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                id="hero-call-now"
                href="tel:+2349066172210"
                className="btn-secondary gap-2 text-base bg-white border border-slate-200 hover:bg-slate-50"
              >
                <div className="text-left leading-none">
                  <span className="block text-[9px] text-slate-400 font-bold uppercase font-mono tracking-wider">Emergency Line</span>
                  <span className="text-sm font-bold text-slate-800 font-mono">+234 906 617 2210</span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Premium image container */}
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/10 lg:aspect-square shadow-2xl border-4 border-white">
                <img
                  src={heroImage}
                  alt="OsaPlumbing Elite Precision"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Overlap badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg border border-slate-150 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Shield className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">Workmanship Guarantee</p>
                      <p className="text-sm text-slate-600 font-medium">100% Insured & Fully Warranted</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dispatch Panel Widget */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-slate-900 text-white p-5 rounded-3xl shadow-xl w-60 border border-slate-800">
                <p className="text-[10px] text-brand-blue font-bold uppercase tracking-widest font-mono mb-2">Dispatch Tracker</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Select Plumbing Service</label>
                    <select
                      id="hero-est-select"
                      value={quickService}
                      onChange={(e) => handleQuickServiceChange(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 text-xs rounded-lg p-2 text-slate-200 focus:outline-none focus:border-brand-blue font-medium"
                    >
                      <option value="emergency">Emergency Unblocking</option>
                      <option value="water-heater">Tankless Water Heater</option>
                      <option value="drain">Sewer Drain Camera</option>
                      <option value="leak">Non-Destructive Leak Scan</option>
                    </select>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Est. Dispatch</span>
                    <span className="text-xs font-extrabold text-brand-blue font-mono">{dispatchTime}</span>
                  </div>
                  <button
                    id="hero-est-book"
                    onClick={onOpenBooking}
                    className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-2 px-3 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Lock In Priority Dispatch
                  </button>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
