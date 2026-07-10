import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X, MessageCircle, Phone, Sparkles } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState([
    {
      sender: "agent",
      text: "Hello! Oscar here with OsaPlumbing Dispatch. 🛠️ Need an urgent 24/7 crew or looking for a premium project quote? What can I help you resolve?",
      time: "Just now"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = {
      sender: "user",
      text: inputVal,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    const query = inputVal.toLowerCase();
    setInputVal("");
    setIsTyping(true);

    // Simulate realistic AI dispatcher responses
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "";

      if (query.includes("leak") || query.includes("emergency") || query.includes("burst") || query.includes("flood")) {
        replyText = "🚨 Urgent issue detected! Please close your main water valve immediately. I have flagged 2 crews in your grid. Please type your phone number or call us immediately at (800) 555-0199 so we can dispatch the truck right away!";
      } else if (query.includes("price") || query.includes("cost") || query.includes("fee") || query.includes("charge")) {
        replyText = "We run on simple, transparent flat rates. Our standard non-destructive diagnostic camera scan is a flat $149, which is credited 100% toward any final repairs you choose to authorize. No hidden surprises!";
      } else if (query.includes("remodel") || query.includes("install") || query.includes("tankless") || query.includes("heater")) {
        replyText = "Excellent project! We specialized in high-efficiency Navien and Rinnai systems. I can assign our senior mechanical engineer to review your building plans and provide a comprehensive proposal. Would you like to schedule a virtual planning consult?";
      } else {
        replyText = "Thank you! I've recorded your inquiry on our master board. To lock in an immediate site diagnostic visit, please leave your name and phone number on our website's Booking form or call us directly at (800) 555-0199!";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }, 1500);
  };

  return (
    <div id="whatsapp-container" className="fixed bottom-6 right-6 z-45 flex flex-col items-end">
      
      {/* Floating Chat Bubble Toggle Button */}
      <button
        id="whatsapp-bubble"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer relative"
        aria-label="Toggle WhatsApp Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 fill-white stroke-[2]" />
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-mono text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center animate-bounce border-2 border-white">
                {unreadCount}
              </span>
            )}
          </>
        )}
      </button>

      {/* Mini Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-chatbox"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-3xl w-[21rem] sm:w-[23rem] h-[28rem] shadow-2xl border border-gray-150 flex flex-col justify-between overflow-hidden mb-4 mr-0"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                    alt="Oscar Ramirez"
                    className="w-9 h-9 rounded-full object-cover border border-white/20"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-[#075E54]" />
                </div>
                <div className="text-left leading-tight">
                  <h4 className="text-sm font-bold flex items-center gap-1">
                    <span>Oscar Ramirez</span>
                    <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                  </h4>
                  <p className="text-[10px] text-emerald-100 font-mono">Live Dispatch Agent</p>
                </div>
              </div>
              <button
                id="close-whatsapp-chatbox"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body messages area */}
            <div className="flex-1 bg-[#ECE5DD] p-4 overflow-y-auto space-y-3.5">
              {messages.map((msg, i) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={i}
                    className={`flex flex-col max-w-[85%] text-left ${
                      isUser ? "ml-auto items-end" : "mr-auto items-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-sm shadow-xs ${
                        isUser
                          ? "bg-[#DCF8C6] text-neutral-800 rounded-tr-none"
                          : "bg-white text-neutral-800 rounded-tl-none"
                      }`}
                    >
                      <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                    </div>
                    <span className="text-[9px] text-gray-500 font-mono mt-1 px-1">
                      {msg.time}
                    </span>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex flex-col items-start mr-auto max-w-[85%]">
                  <div className="p-3 rounded-2xl bg-white shadow-xs rounded-tl-none">
                    <div className="flex gap-1 items-center py-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input form footer */}
            <form onSubmit={handleSend} className="bg-gray-50 p-3 border-t border-gray-150 flex items-center gap-2">
              <input
                id="whatsapp-input"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type your concern..."
                className="flex-1 bg-white border border-gray-200 text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#075E54] text-neutral-800 font-medium"
              />
              <button
                id="whatsapp-submit"
                type="submit"
                className="p-2.5 bg-[#075E54] hover:bg-[#128C7E] text-white rounded-xl transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4 fill-white" />
              </button>
            </form>

            {/* Help Call Link Strip */}
            <div className="bg-[#128C7E]/10 py-1.5 px-4 text-center text-[10px] text-[#075E54] font-mono font-bold flex items-center justify-center gap-1">
              <Phone className="w-3 h-3 text-[#128C7E]" />
              <span>Urgent calls: dial (800) 555-0199 directly</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
