import { Check, ShieldCheck, HelpCircle } from "lucide-react";
import aboutImage from "../assets/images/about_plumber_1783608157373.jpg";

export default function AboutPreview() {
  const credentials = [
    { title: "Licensed Master Plumbing Contractors", desc: "No. 40813-A issued under strict testing standards." },
    { title: "OSHA-30 Certified Techs", desc: "Ensuring zero-hazard workplace setups." },
    { title: "IAPMO Universal Clean Water", desc: "Advanced commercial purification certification." },
    { title: "EPA Lead-Safe Certified", desc: "Safe handling of heritage architecture materials." }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/10 lg:aspect-square shadow-xl">
              <img
                src={aboutImage}
                alt="OsaPlumbing diagnostic assessment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-150 shadow-lg text-left">
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider font-mono">Company Creed</span>
                <p className="text-sm font-semibold text-slate-900 mt-1 italic">
                  "We believe in clean pipes, quiet systems, and spotless work areas. Plumbing is a high discipline."
                </p>
                <p className="text-[11px] text-slate-500 font-mono mt-2">— Oscar Ramirez, Founder & Master Plumber</p>
              </div>
            </div>

            {/* Behind Background Card Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-blue/10 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue/10 rounded-full -z-10 blur-xl" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="badge-pill bg-brand-blue/10 text-brand-blue">Who We Are</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Elevating Plumbing Standards for Decades
            </h2>
            
            <p className="text-slate-600 leading-relaxed">
              OsaPlumbing was established to combat the corner-cutting, erratic pricing, and poor cleanliness standards that plague the service industry. We approach residential water safety and commercial drain diagnostics with mechanical engineering precision.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-mono">
                Certified Industry Credentials
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-3xl hover:bg-slate-100 transition-colors border border-slate-150 bg-slate-50/60">
                    <div className="mt-1 bg-brand-blue/10 p-1.5 rounded-lg text-brand-blue">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{cred.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{cred.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick trust strip */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-150 text-xs text-slate-500">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${[
                      "1534528741775-53994a69daeb",
                      "1506794778202-cad84cf45f1d",
                      "1494790108377-be9c29b29330",
                      "1500648767791-00dcc994a43e"
                    ][i]}?q=80&w=100&auto=format&fit=crop`}
                    alt="vetted team"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p>Vetted by over <strong>350+ local luxury property owners</strong> and commercial site general managers.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
