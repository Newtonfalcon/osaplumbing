import React from "react";
import { STATS } from "../types";
import { CheckCircle, Clock, Heart, ShieldCheck } from "lucide-react";

const iconMap = {
  CheckCircle: CheckCircle,
  Clock: Clock,
  Heart: Heart,
  ShieldCheck: ShieldCheck
};

export default function Statistics() {
  return (
    <section id="statistics" className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => {
            const IconComponent = iconMap[stat.iconName] || CheckCircle;
            return (
              <div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                    VERIFIED
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white font-mono">
                    {stat.value.toLocaleString()}
                  </span>
                  <span className="text-xl font-extrabold text-brand-blue font-mono">
                    {stat.suffix}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-200 mt-2">
                  {stat.label}
                </h4>

                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
