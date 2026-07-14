import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../types";
import { Star, MapPin, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FBFBFD] overflow-hidden border-y border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Background ambient accents */}
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-blue/5 blur-3xl -z-10" />

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-pill bg-brand-blue/10 text-brand-blue">VOICE OF THE CLIENT</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Verified Commercial & Homeowner Reviews
          </h2>
          <p className="text-slate-600">
            Read certified job reviews regarding our technician cleanliness, response rates, and final diagnostic breakdowns.
          </p>
        </div>

        {/* Carousel Content */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-slate-150 shadow-xl relative text-left"
            >
              {/* Quote Mark Accent */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 stroke-[1.5]" />

              {/* Star Rating & Location */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex text-amber-400">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono font-bold uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full border border-slate-150">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{activeTestimonial.location}</span>
                </div>
              </div>

              {/* Comment */}
              <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed mb-8">
                "{activeTestimonial.comment}"
              </p>

              {/* User Bio */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-6 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  
                  <div>
                    <h4 className="font-display font-bold text-slate-900 flex items-center gap-1.5 leading-none">
                      <span>{activeTestimonial.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">{activeTestimonial.role}</p>
                  </div>
                </div>
                
                <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50/50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest">
                  Verified Contract Repair
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="p-3 bg-white border border-slate-150 hover:border-brand-blue text-slate-500 hover:text-brand-blue rounded-full shadow-md transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  id={`testimonial-dot-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-6 bg-brand-blue" : "w-2 bg-slate-200"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="p-3 bg-white border border-slate-150 hover:border-brand-blue text-slate-500 hover:text-brand-blue rounded-full shadow-md transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
