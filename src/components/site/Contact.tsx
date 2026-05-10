import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  area: z.string().min(1, "Select an area"),
  time: z.string().trim().min(2, "Tell us a preferred time").max(120),
});

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `Hi MAQ, I'd like to book lessons.\nName: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nArea: ${parsed.data.area}\nPreferred time: ${parsed.data.time}`;
    window.open(`https://wa.me/447459139318?text=${encodeURIComponent(msg)}`, "_blank");
    setStatus("Opening WhatsApp to confirm your booking...");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-[2.5rem] bg-hero text-white p-8 md:p-14 relative overflow-hidden shadow-elegant">
          <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial)" }} />
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-[1.1]">
                Ready to <span className="text-gradient">Start Driving?</span>
              </h2>
              <p className="mt-4 text-white/75 text-lg max-w-md">
                Tell us a bit about you and we'll get back within hours to book your first lesson.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:07459139318"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
                >
                  <Phone className="h-5 w-5" /> Call 07459 139318
                </a>
                <a
                  href="https://wa.me/447459139318"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 font-semibold hover:bg-white/15 transition"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp Booking
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="rounded-3xl glass p-6 md:p-8 space-y-4">
              <Field label="Your name" name="name" placeholder="e.g. Alex Johnson" error={errors.name} />
              <Field label="Phone number" name="phone" type="tel" placeholder="07…" error={errors.phone} />
              <div>
                <label className="text-sm font-medium text-white/85">Area</label>
                <select
                  name="area"
                  defaultValue=""
                  className="mt-1.5 w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled className="text-foreground">Select an area</option>
                  <option className="text-foreground">Reading</option>
                  <option className="text-foreground">Slough</option>
                  <option className="text-foreground">Wokingham</option>
                </select>
                {errors.area && <p className="mt-1 text-xs text-red-300">{errors.area}</p>}
              </div>
              <Field label="Preferred lesson time" name="time" placeholder="e.g. Weekday evenings" error={errors.time} />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
              >
                <Send className="h-4 w-4" /> Send Booking Request
              </button>
              {status && <p className="text-sm text-primary text-center">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, error }: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-white/85">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <p className="mt-1 text-xs text-red-300">{error}</p>}
    </div>
  );
}
