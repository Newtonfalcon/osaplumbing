import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../types";
import {
  Flame,
  Thermometer,
  Radar,
  Building2,
  Droplet,
  Sparkles,
  ArrowRight,
  Check,
  X,
  Phone,
  ShieldCheck
} from "lucide-react";

// Icon mapper to prevent dynamic string importing issues in Vite
const iconMap = {
  Flame: Flame,
  Thermometer: Thermometer,
  Radar: Radar,
  Building2: Building2,
  Droplet: Droplet,
  Sparkles: Sparkles
};

export default function Services({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = SERVICES.filter(
    (service) => activeFilter === "all" || service.category === activeFilter
  );

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FBFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-pill bg-brand-blue/10 text-brand-blue">Master Services Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Precision Mechanical & Plumbing Solutions
          </h2>
          <p className="text-slate-600">
            From critical residential failures requiring sub-hour dispatches to heavy-duty commercial system certifications, our specialists deliver spotless, high-caliber engineering.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {["all", "residential", "commercial", "emergency"].map((category) => (
              <button
                key={category}
                id={`services-filter-${category}`}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === category
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-500 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {category === "all" ? "Show All Specs" : `${category} Services`}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          id="services-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Droplet;
              return (
                <motion.div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-blue/20 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon & Estimate */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-xl transition-colors ${
                        service.category === 'emergency' 
                          ? 'bg-red-50 text-red-500' 
                          : service.category === 'commercial' 
                            ? 'bg-purple-50 text-purple-600'
                            : 'bg-brand-blue/10 text-brand-blue'
                      }`}>
                        <IconComponent className="w-6.5 h-6.5 stroke-[1.8]" />
                      </div>
                      <span className="text-xs font-extrabold font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                        {service.priceEst}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Actions & Highlights */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="space-y-2">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                          <span className="text-xs font-semibold text-slate-600">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      id={`service-more-info-${service.id}`}
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-hover cursor-pointer group/btn font-mono uppercase tracking-wider"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Service Details */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
              />

              {/* Modal Card */}
              <motion.div
                id="service-details-modal"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-150 overflow-hidden z-10"
              >
                {/* Close Button */}
                <button
                  id="close-service-modal"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="p-6 md:p-8 bg-gradient-to-br from-[#F5F7FA] to-white border-b border-slate-100 flex items-start gap-4 pr-12">
                  <div className={`p-4 rounded-xl shrink-0 ${
                    selectedService.category === 'emergency' 
                      ? 'bg-red-50 text-red-500' 
                      : selectedService.category === 'commercial' 
                        ? 'bg-purple-50 text-purple-600'
                        : 'bg-brand-blue/10 text-brand-blue'
                  }`}>
                    {(() => {
                      const IconComponent = iconMap[selectedService.iconName] || Droplet;
                      return <IconComponent className="w-8 h-8 stroke-[1.8]" />;
                    })()}
                  </div>
                  <div>
                    <span className="badge-pill bg-brand-blue/10 text-brand-blue mb-2">
                      {selectedService.category} Specification
                    </span>
                    <h3 className="font-display text-2xl font-extrabold text-slate-900">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">Technical Overview</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedService.longDesc}
                    </p>
                  </div>

                  {/* Dispatch and Warranties */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Dispatch Profile</p>
                      <p className="text-lg font-black text-slate-900 font-mono mt-1">{selectedService.priceEst}</p>
                      <p className="text-[10px] text-slate-400">Guaranteed priority scheduling response.</p>
                    </div>
                    <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider font-mono flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span>WARRANTY CERTIFIED</span>
                        </p>
                        <p className="text-xs text-emerald-800 font-medium mt-1">Guaranteed Lifetime Flow Protection</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">Service Scope Checklist</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50">
                          <div className="bg-emerald-50 text-emerald-600 p-0.5 rounded-full">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-xs font-medium text-slate-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                    <span>Or dial +234 906 617 2210 for instant response</span>
                  </span>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      id="modal-close-cancel"
                      onClick={() => setSelectedService(null)}
                      className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold font-mono uppercase bg-white border border-slate-200 text-slate-500 rounded-full hover:bg-slate-100 cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      id="modal-book-this-service"
                      onClick={() => {
                        onOpenBooking(selectedService.title);
                        setSelectedService(null);
                      }}
                      className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold font-mono uppercase bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full cursor-pointer shadow-md shadow-brand-blue/10"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
