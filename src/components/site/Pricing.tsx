import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    area: "Reading",
    badge: "Most Popular",
    highlight: true,
    items: [
      { label: "Per hour", price: "£42" },
      { label: "2 hours booking", price: "£80" },
      { label: "10 hours block booking", price: "£410", note: "Save with block booking" },
    ],
  },
  {
    area: "Slough",
    badge: "Best Value",
    highlight: false,
    items: [
      { label: "Per hour", price: "£40" },
      { label: "2 hours booking", price: "£76" },
      { label: "10 hours block booking", price: "£390", note: "Save with block booking" },
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pricing</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy-deep">
            Transparent, fair lesson pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pay-as-you-go or save more with block booking discounts.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.area}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                p.highlight
                  ? "bg-navy-deep text-white shadow-elegant"
                  : "bg-card text-foreground border shadow-elegant"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-glow">
                  <Sparkles className="h-3.5 w-3.5" /> {p.badge}
                </div>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{p.area}</h3>
                {!p.highlight && (
                  <span className="rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="mt-2 text-sm opacity-70">Driving lessons in {p.area}</div>

              <ul className="mt-7 space-y-4">
                {p.items.map((it) => (
                  <li key={it.label} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium">{it.label}</div>
                      {it.note && (
                        <div className="text-xs mt-0.5 opacity-70">★ {it.note}</div>
                      )}
                    </div>
                    <div className="text-2xl font-bold font-display whitespace-nowrap">
                      {it.price}
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "bg-navy-deep text-white"
                }`}
              >
                <Check className="h-4 w-4" /> Book {p.area} Lessons
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Wokingham lessons available — contact us for a tailored quote.
        </p>
      </div>
    </section>
  );
}
