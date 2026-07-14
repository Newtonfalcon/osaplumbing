import { Phone, Calendar, Sparkles } from "lucide-react";

export default function CTABanner({ onOpenBooking }) {
  return (
    <section id="cta-banner" className="py-16 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Decorative vector background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-wider font-mono uppercase">
              <Sparkles className="w-3 h-3 text-cyan-300 fill-cyan-300" />
              <span>Crews Dispatched Near You</span>
            </div> 
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Facing a plumbing emergency or planning a high-end project?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Don't wait for damage to escalate. Talk directly to a certified technician in under 3 minutes, or secure your appointment slot instantly online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto justify-center">
            <button
              id="cta-book-button"
              onClick={onOpenBooking}
              className="px-6 py-4 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider font-mono rounded-full hover:bg-brand-blue-hover transition-all cursor-pointer shadow-lg shadow-brand-blue/20 text-center"
            >
              Book Priority Slots
            </button>
            <a
              id="cta-call-button"
              href="tel:+234 906 617 2210"
              className="px-6 py-4 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider font-mono rounded-full hover:bg-slate-50 transition-all shadow-lg shadow-white/5 text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-slate-900 animate-pulse" />
              <span>Dial Call Center (234) 906 617 2210</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
