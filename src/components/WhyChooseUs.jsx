import { motion } from "motion/react";
import { Shield, Sparkles, Award, HeartHandshake, Glasses } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Glasses className="w-6 h-6 text-brand-blue" />,
      title: "Diagnostic Equipment",
      description: "We invest in high-frequency acoustic leak sensors, sub-slab tracer gases, and HD thermal imaging cameras. No guessing, no unnecessary drywall damage.",
      size: "md:col-span-2",
      badge: "TECHNOLOGY"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
      title: "Surgical-Level Cleanness",
      description: "Our technicians wear protective boot overlays, lay floor tarps, seal off containment boundaries, and perform high-grade disinfection of all workspaces.",
      size: "md:col-span-1",
      badge: "HYGIENE"
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-blue" />,
      title: "Licensed & Vetted Master Craftsmen",
      description: "We bypass general sub-contracting pools. Every Osa plumber is fully background-checked, drug-tested, and possesses advanced mechanical plumbing engineering licenses.",
      size: "md:col-span-1",
      badge: "TRUST"
    },
    {
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: "Structured Service Warranties",
      description: "We issue fully legal, written workmanship guarantees on everything from general valve repairs to trenchless epoxy sewer linings. If anything fails, we resolve it within hours.",
      size: "md:col-span-2",
      badge: "WARRANTY"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-brand-blue/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="badge-pill bg-brand-blue/20 text-brand-blue mb-3">
              Uncompromised Standards
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              The OsaPlumbing Difference
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Plumbing is not just about tightening nuts; it is an integrated mechanical safety infrastructure. We design and service systems with meticulous craftsmanship that outlasts industry defaults.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-3xl shrink-0 lg:max-w-sm">
            <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold">100% Satisfaction</h4>
              <p className="text-xs text-slate-400">If you are not delighted, we redo the work for free.</p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              id={`why-card-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-3xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-slate-850 hover:border-slate-800 transition-all group hover:shadow-2xl hover:shadow-brand-blue/5 ${card.size}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:bg-brand-dark transition-colors">
                  {card.icon}
                </div>
                <span className="text-[10px] font-bold font-mono tracking-widest text-slate-400 bg-slate-900/65 px-2.5 py-1 rounded-md border border-slate-800/40">
                  {card.badge}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors text-left">
                {card.title}
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed text-left">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
