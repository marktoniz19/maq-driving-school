import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#areas", label: "Areas" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-light shadow-elegant" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-navy-deep">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              M
            </span>
            <span className="text-base sm:text-lg">MAQ Driving</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-navy-deep transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:07459139318"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
          >
            <Phone className="h-4 w-4" /> 07459 139318
          </a>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass-light p-4 shadow-elegant animate-fade-in">
            <nav className="flex flex-col gap-3 text-sm font-medium">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
                  {l.label}
                </a>
              ))}
              <a
                href="tel:07459139318"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call 07459 139318
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
