import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../types";
import { ChevronDown, ChevronUp, HelpCircle, Flame } from "lucide-react";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState("faq-1"); // keep first one open by default

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FBFBFD] border-t border-slate-150">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-pill bg-brand-blue/10 text-brand-blue">FREQUENT QUERIES</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Inquiries & Safety Guidelines
          </h2>
          <p className="text-slate-600">
            Get transparent answers regarding our certifications, flat-rate tariffs, workmanship guarantees, and immediate emergency dispatches.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {["all", "general", "pricing", "emergency", "warranty"].map((category) => (
              <button
                key={category}
                id={`faq-filter-${category}`}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-500 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-3xl border transition-all duration-300 bg-white ${
                  isOpen 
                    ? "border-brand-blue/20 shadow-md shadow-brand-blue/2" 
                    : "border-slate-150 hover:border-slate-300"
                }`}
              >
                {/* Question Row */}
                <button
                  id={`faq-toggle-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${
                      isOpen ? "text-brand-blue" : "text-gray-400"
                    }`} />
                    <span className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {/* Answer Row */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-500 leading-relaxed space-y-3">
                        <p>{faq.answer}</p>
                        
                        {/* Emergency context warning banner */}
                        {faq.category === "emergency" && (
                          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-800 border border-red-100 text-[11px] font-medium mt-3">
                            <Flame className="w-4 h-4 text-red-500 shrink-0" />
                            <span>Urgent water or pipe bursts require immediate water line isolation. If you cannot locate your main water shutoff valve, call our emergency line immediately.</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
