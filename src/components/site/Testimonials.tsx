import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Sarah M.", area: "Reading", text: "Passed first time! MAQ was so patient and made me feel comfortable from lesson one. Honestly couldn't recommend more.", rating: 5 },
  { name: "Jay P.", area: "Slough", text: "Great instructor, calm and clear explanations. The mock tests were a game changer for my nerves.", rating: 5 },
  { name: "Amelia R.", area: "Wokingham", text: "Flexible around my work hours and very affordable with the block booking. Passed in just 3 months!", rating: 5 },
  { name: "Daniel K.", area: "Reading", text: "Excellent teaching style. I went from anxious learner to confident driver. Worth every penny.", rating: 5 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, []);
  const r = reviews[i];

  return (
    <section id="reviews" className="py-24 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial)" }} />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">What our learners say</h2>

        <div key={i} className="mt-12 rounded-3xl glass p-8 md:p-12 animate-fade-in">
          <Quote className="h-10 w-10 mx-auto text-primary" />
          <p className="mt-6 text-xl md:text-2xl leading-relaxed font-display">
            "{r.text}"
          </p>
          <div className="mt-6 flex items-center justify-center gap-1">
            {Array.from({ length: r.rating }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <div className="mt-3 text-sm text-white/70">
            <span className="font-semibold text-white">{r.name}</span> · {r.area}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setI((x) => (x - 1 + reviews.length) % reviews.length)}
            className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/15"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to review ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-white/30"}`}
            />
          ))}
          <button
            onClick={() => setI((x) => (x + 1) % reviews.length)}
            className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/15"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
