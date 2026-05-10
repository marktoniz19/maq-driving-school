import { ShieldCheck, HeartHandshake, CalendarClock, BadgePoundSterling, ClipboardCheck, GraduationCap } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "DVSA Friendly Teaching", desc: "Lessons aligned with current DVSA standards & test routes." },
  { icon: HeartHandshake, title: "Patient & Calm Instructor", desc: "Relaxed environment, perfect for nervous learners." },
  { icon: CalendarClock, title: "Flexible Scheduling", desc: "Evening & weekend slots that fit around your week." },
  { icon: BadgePoundSterling, title: "Affordable Prices", desc: "Honest pricing with discounts for block bookings." },
  { icon: ClipboardCheck, title: "Mock Test Preparation", desc: "Realistic mocks so you walk into your test confident." },
  { icon: GraduationCap, title: "Beginner Friendly", desc: "Step-by-step from your very first time behind the wheel." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">
            Built around your confidence
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl bg-card border p-7 shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
