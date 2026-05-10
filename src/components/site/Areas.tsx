import { MapPin } from "lucide-react";

const areas = [
  { name: "Reading", desc: "RG postcodes, town centre & surrounding villages.", color: "from-emerald-400/20 to-teal-500/10" },
  { name: "Slough", desc: "SL areas including Langley, Burnham & Cippenham.", color: "from-lime-400/20 to-green-500/10" },
  { name: "Wokingham", desc: "RG40/RG41 with flexible scheduling around work.", color: "from-cyan-400/20 to-blue-500/10" },
];

export function Areas() {
  return (
    <section id="areas" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Areas Covered</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">
            Lessons across the Thames Valley
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div
              key={a.name}
              className="group relative overflow-hidden rounded-3xl border bg-card p-7 shadow-elegant hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${a.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-navy-deep">{a.name}</h3>
                <p className="mt-2 text-muted-foreground">{a.desc}</p>

                {/* faux map */}
                <div className="mt-5 h-28 rounded-2xl border bg-secondary/50 overflow-hidden relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full text-primary/60">
                    <path d="M0 50 Q50 10 100 40 T200 30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 4"/>
                    <path d="M0 70 Q60 60 110 65 T200 55" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
                    <circle cx="100" cy="40" r="4" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
