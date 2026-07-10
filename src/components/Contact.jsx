import React from "react";
import { Phone, MapPin, Mail, Clock, Calendar } from "lucide-react";

export default function Contact({ onOpenBooking }) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-pill bg-brand-blue/10 text-brand-blue font-mono uppercase tracking-wider">COMMUNICATIONS HUB</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Direct Technician Communications
          </h2>
          <p className="text-slate-600">
            Reach out to our certified engineering dispatchers directly, or schedule an appointment instantly through our online priority system.
          </p>
        </div>

        {/* Bento Grid Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left">
          
          {/* Card 1: Regional Center */}
          <div className="p-6 bg-slate-50 border border-slate-150 rounded-3xl flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue inline-block">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">Logistics Center</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  1240 Copper Ridge Blvd, Suite 400<br />
                  Industrial Waterway Grid, CA 90425
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Telephone Hub */}
          <div className="p-6 bg-slate-50 border border-slate-150 rounded-3xl flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue inline-block">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">Telephone Hub</h4>
                <p className="text-xs text-slate-500 mt-2 font-mono leading-relaxed">
                  Toll-Free: (800) 555-0199<br />
                  Local Office: (310) 555-0245
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Electronic Logistics */}
          <div className="p-6 bg-slate-50 border border-slate-150 rounded-3xl flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue inline-block">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">Electronic Logistics</h4>
                <p className="text-xs text-slate-500 mt-2 font-mono leading-relaxed">
                  Estimates: diagnostics@osaplumbing.com<br />
                  Licensing: info@osaplumbing.com
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Support Windows */}
          <div className="p-6 bg-slate-50 border border-slate-150 rounded-3xl flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue inline-block">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">Support Windows</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Emergencies: <strong>24/7/365 Live</strong><br />
                  Estimates: Mon - Sat (7am - 6pm)
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Action strip with coverage and booking trigger */}
        <div className="mt-10 p-8 bg-slate-50 border border-slate-150 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest font-mono">
              Active Coverage & Rapid Dispatch Area
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our service crews are active across Downtown Core, Oakwood Heights, Culinary District, Beverly Crest, Marina Basin, and all suburbs up to a 45-mile radius.
            </p>
          </div>
          <button
            id="contact-book-cta"
            onClick={onOpenBooking}
            className="px-6 py-4 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg shadow-brand-blue/20 flex items-center gap-2 shrink-0 font-semibold"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Priority Slot</span>
          </button>
        </div>

      </div>
    </section>
  );
}
