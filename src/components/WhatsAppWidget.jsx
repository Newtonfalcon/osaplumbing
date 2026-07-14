import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/+2349066172210";

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="whatsapp-container" className="fixed bottom-6 right-6 z-45">
      <button
        id="whatsapp-bubble"
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Open WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-[2]" />
      </button>
    </div>
  );
}
