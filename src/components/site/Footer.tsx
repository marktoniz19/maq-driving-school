import { Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">M</span>
            <span className="text-lg">MAQ Driving Instructor</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
            Calm, patient, professional driving lessons in Reading, Slough &amp; Wokingham.
            Helping learners pass with confidence since day one.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold">Areas Covered</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Reading</li>
            <li>Slough</li>
            <li>Wokingham</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> 07459 139318</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@maqdriving.co.uk</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 mt-12 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row gap-2 justify-between">
        <p>© {new Date().getFullYear()} MAQ Driving Instructor. All rights reserved.</p>
        <p>Built with care in the UK.</p>
      </div>
    </footer>
  );
}
