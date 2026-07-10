import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROCESS_STEPS } from "../types";
import { ArrowRight, Clock } from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 bg-[#FBFBFD] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-pill bg-brand-blue/10 text-brand-blue">HOW WE WORK</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Elite Service Workflow
          </h2>
          <p className="text-slate-600">
            No chaotic dispatch calls. No guessing on pricing. We run on a synchronized engineering workflow designed to minimize your stress and maximize structural reliability.
          </p>
        </div>

        {/* Process Interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Steps List */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  id={`process-step-btn-${idx}`}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-5 rounded-3xl border text-left transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? "bg-white shadow-xl border-brand-blue/10 shadow-brand-blue/5 translate-x-2"
                      : "bg-transparent border-transparent hover:bg-slate-50/50"
                  }`}
                >
                  {/* Step Number */}
                  <span className={`font-mono text-2xl font-black shrink-0 ${
                    isSelected ? "text-brand-blue" : "text-slate-300"
                  }`}>
                    {step.number}
                  </span>

                  {/* Step Info */}
                  <div className="space-y-1">
                    <h3 className={`font-display text-lg font-bold transition-colors ${
                      isSelected ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm transition-colors ${
                      isSelected ? "text-slate-600" : "text-slate-400"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Step Details Pane */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 bg-white border border-slate-150 rounded-3xl p-8 shadow-xl text-left relative overflow-hidden">
              {/* Visual accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono tracking-widest text-brand-blue uppercase bg-brand-blue/10 px-3 py-1 rounded-full">
                      Step {PROCESS_STEPS[activeStep].number} Specification
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-blue" />
                      {PROCESS_STEPS[activeStep].timeframe}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-extrabold text-slate-900">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>

                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {PROCESS_STEPS[activeStep].description}
                    </p>
                    <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-150">
                      <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-slate-900 mb-1">
                        Mechanical Execution Spec:
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {PROCESS_STEPS[activeStep].details}
                      </p>
                    </div>
                  </div>

                  {/* Interactive hint */}
                  <div className="pt-6 border-t border-slate-150 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {activeStep < PROCESS_STEPS.length - 1 
                        ? "Click next step on the left to explore" 
                        : "Everything is fully tracked in our logs"}
                    </span>
                    {activeStep < PROCESS_STEPS.length - 1 && (
                      <button
                        id="process-next-step"
                        onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)}
                        className="p-2 bg-slate-55 hover:bg-brand-blue hover:text-white rounded-full transition-all cursor-pointer text-slate-400"
                        title="Next step"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
