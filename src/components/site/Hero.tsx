import heroCar from "@/assets/maq-car-front.webp";
import { Phone, Calendar, Check, Star } from "lucide-react";

const trust = [
  "Friendly Instructor",
  "Affordable Prices",
  "Flexible Bookings",
  "Beginner Friendly",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero text-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-[380px] w-[380px] rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/90">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            Rated 5-Star by Local Learners
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Pass Your Driving Test with{" "}
            <span className="text-gradient">Confidence</span>
          </h1>
          <p className="mt-5 text-lg text-white/75 max-w-xl">
            Professional driving lessons in <span className="text-white font-medium">Reading, Slough &amp; Wokingham</span>. Calm, patient teaching tailored to you.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              <Calendar className="h-5 w-5" /> Book Lessons
            </a>
            <a
              href="tel:07459139318"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 font-semibold text-white hover:bg-white/15 transition-colors"
            >
              <Phone className="h-5 w-5" /> Call 07459 139318
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2.5 max-w-lg">
            {trust.map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/85">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/20 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-primary blur-2xl opacity-30" />
          <div className="relative rounded-[2rem] overflow-hidden glass shadow-elegant">
            <img
              src={heroCar}
              alt="MAQ Driving Instructor branded Mercedes A-Class tuition car in Reading"
              width={768}
              height={576}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass px-4 py-3 text-sm">
              <div>
                <div className="text-white/70 text-xs">Next available</div>
                <div className="font-semibold">This week · flexible slots</div>
              </div>
              <a
                href="#pricing"
                className="rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold"
              >
                See pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
