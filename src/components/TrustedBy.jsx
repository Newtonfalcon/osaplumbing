import { PARTNERS } from "../types";
import { Building, Award, ShieldAlert, Sparkle } from "lucide-react";

export default function TrustedBy() {
  return (
    <section id="partners" className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Section Left Title */}
          <div className="text-center md:text-left md:max-w-xs shrink-0">
            <span className="badge-pill bg-brand-blue/10 text-brand-blue mb-2">PARTNERSHIPS</span>
            <h3 className="font-display text-lg font-extrabold tracking-tight text-slate-800">
              Trusted by Local Builders & Facility Managers
            </h3>
          </div>

          {/* Logos grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
            {PARTNERS.map((partner, index) => {
              // Custom icons to represent different industries
              const iconMap = [
                <Building className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />,
                <Sparkle className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />,
                <Award className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />,
                <ShieldAlert className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />,
                <Building className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />
              ];
              
              return (
                <div
                  key={index}
                  className="flex items-center gap-2.5 group transition-all duration-300 hover:scale-105"
                >
                  <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-brand-blue/5 transition-all">
                    {iconMap[index % iconMap.length]}
                  </div>
                  <div>
                    <p className="text-sm font-display font-extrabold text-gray-500 group-hover:text-slate-800 transition-colors tracking-tight leading-none">
                      {partner.name}
                    </p>
                    <p className="text-[10px] font-medium font-mono text-gray-400 leading-tight">
                      {partner.industry}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
