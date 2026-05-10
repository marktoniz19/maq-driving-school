import { Phone, MessageCircle } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
      <div className="grid grid-cols-2 gap-2 rounded-2xl glass-light shadow-elegant p-2">
        <a
          href="tel:07459139318"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-deep text-white px-4 py-3 font-semibold text-sm"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href="https://wa.me/447459139318"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-4 py-3 font-semibold text-sm shadow-glow"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
