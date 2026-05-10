import { Award, Users, Clock } from "lucide-react";
import carRear from "@/assets/maq-car-rear.webp";

const stats = [
  { icon: Users, label: "Happy Learners", value: "500+" },
  { icon: Award, label: "Pass Rate", value: "92%" },
  { icon: Clock, label: "Years Experience", value: "10+" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary blur-2xl opacity-20" />
          <img
            src={carRear}
            alt="MAQ Driving School branded learner car ready for lessons"
            width={768}
            height={1024}
            loading="lazy"
            className="relative rounded-[2rem] shadow-elegant w-full h-auto object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">
            Learn with <span className="text-gradient">MAQ Driving Instructor</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We provide calm, professional and affordable driving lessons tailored for beginners,
            nervous drivers and learners preparing for their driving test. Covering Reading, Slough
            and Wokingham with flexible lesson times and block booking discounts.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-card border p-6 shadow-elegant hover:-translate-y-1 transition-transform"
              >
                <s.icon className="h-7 w-7 text-primary" />
                <div className="mt-4 text-3xl font-bold font-display text-navy-deep">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
