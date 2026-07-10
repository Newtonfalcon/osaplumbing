/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, CheckCircle, Calendar, Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutPreview from "./components/AboutPreview";
import Process from "./components/Process";
import Statistics from "./components/Statistics";
import FeaturedProjects from "./components/FeaturedProjects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState({ id: "", queueNum: 0 });

  const handleOpenBooking = (preselectedService) => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    } else {
      setSelectedService("General Diagnostics");
    }
    setBookingConfirmed(false);
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    // Simulate dispatch mapping delay
    setTimeout(() => {
      const bID = "book_" + Math.random().toString(36).substr(2, 9);
      const qNum = Math.floor(Math.random() * 80) + 201;

      // Add to local storage inquiries so it syncs with contact records
      const saved = localStorage.getItem("osaplumbing_inquiries") || "[]";
      try {
        const arr = JSON.parse(saved);
        arr.unshift({
          id: bID,
          name: formData.name,
          phone: formData.phone,
          service: selectedService,
          notes: formData.notes || "Urgent direct schedule via online booking portal.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          queueNum: qNum,
          status: "pending"
        });
        localStorage.setItem("osaplumbing_inquiries", JSON.stringify(arr));
        
        // Trigger a window custom event to notify Contact history tracker to refresh list
        window.dispatchEvent(new Event("storage"));
      } catch (err) {
        console.error(err);
      }

      setConfirmationDetails({ id: bID, queueNum: qNum });
      setIsSubmitting(false);
      setBookingConfirmed(true);
      setFormData({ name: "", phone: "", notes: "" });
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans antialiased text-[#1F2937]">
      {/* Sticky Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Trusted By / Partners */}
        <TrustedBy />

        {/* Services Showcase */}
        <Services onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* Why Choose Us Bento Grid */}
        <WhyChooseUs />

        {/* About Company Credentials */}
        <AboutPreview />

        {/* Integrated Process Workflow */}
        <Process />

        {/* Analytical Statistics Indicators */}
        <Statistics />

        {/* Featured Case Projects */}
        <FeaturedProjects />

        {/* Testimonials Review Slider */}
        <Testimonials />

        {/* Collapsible FAQ Desk */}
        <FAQ />

        {/* Interactive Call to Action Panel Strip */}
        <CTABanner onOpenBooking={() => handleOpenBooking()} />

        {/* Direct Contact Form & Dispatch Database Logger */}
        <Contact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer Sitemap & Badges */}
      <Footer />

      {/* Floating Interactive Live WhatsApp Chat */}
      <WhatsAppWidget />

      {/* Global Priority Booking Modal Drawer */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-55 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              id="priority-booking-modal"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-150 overflow-hidden z-10 p-6 sm:p-8 text-left"
            >
              {/* Close button */}
              <button
                id="close-booking-modal"
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!bookingConfirmed ? (
                <div className="space-y-6">
                  <div>
                    <span className="badge-pill bg-brand-blue/10 text-brand-blue mb-2">Priority Dispatch Reservation</span>
                    <h3 className="font-display text-2xl font-black text-slate-900 leading-tight">
                      Schedule Master Technician
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your plumbing symptoms and lock in your priority diagnostic arrival slot. No upfront deposits.
                    </p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1">Your Full Name *</label>
                      <input
                        id="modal-book-name"
                        type="text"
                        required
                        placeholder="e.g. Eleanor Sterling"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-blue text-slate-900 font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1">Direct Phone Number *</label>
                      <input
                        id="modal-book-phone"
                        type="tel"
                        required
                        placeholder="e.g. (310) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-blue text-slate-900 font-mono font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1">Target Service Concern</label>
                      <input
                        id="modal-book-service"
                        type="text"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        placeholder="e.g. Clogged sewer drain"
                        className="w-full bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-blue text-slate-900 font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1">Diagnostic Notes / Symptoms (Optional)</label>
                      <textarea
                        id="modal-book-notes"
                        rows={3}
                        placeholder="Describe what you hear, see, or smell (e.g. hot water fluctuations, wall moisture)..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-blue text-slate-900 font-medium"
                      />
                    </div>

                    <button
                      id="modal-book-submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Submit Reservation request</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-6 text-center py-6">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-10 h-10 stroke-[1.8]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-black text-slate-900">
                      Priority Dispatch Confirmed!
                    </h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      We have logged your intake file in our active service queue. An engineer has been allocated to review your notes.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 inline-block w-full max-w-sm font-mono text-xs text-left space-y-1.5">
                    <p className="flex justify-between">
                      <span className="text-slate-400">Intake Record ID:</span>
                      <strong className="text-slate-900 font-bold">{confirmationDetails.id}</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400">Queue Position:</span>
                      <strong className="text-brand-blue font-extrabold">#{confirmationDetails.queueNum}</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400">Response ETA:</span>
                      <strong className="text-emerald-600 font-bold">Under 3 Minutes</strong>
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      id="modal-confirmed-close"
                      onClick={() => setIsBookingOpen(false)}
                      className="w-full sm:w-1/2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-750 text-xs font-bold font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer"
                    >
                      Close Window
                    </button>
                    <a
                      id="modal-confirmed-call"
                      href="tel:+18005550199"
                      className="w-full sm:w-1/2 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold font-mono uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 fill-white animate-pulse" />
                      <span>Dial (800) 555-0199</span>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
