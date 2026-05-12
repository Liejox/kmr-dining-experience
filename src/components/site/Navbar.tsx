import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "oklch(0.18 0.012 60 / 0.85)" } : undefined}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-gold text-charcoal font-serif text-lg font-semibold shadow-gold">
            K
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-cream text-lg tracking-wide">KMR Kannimara</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80">Multi-cuisine Restaurant</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-cream/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+910000000000"
            className="text-sm text-cream/80 hover:text-gold transition-colors"
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-charcoal shadow-gold hover:scale-[1.03] transition-transform"
          >
            Reserve Table
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: "oklch(0.18 0.012 60 / 0.97)" }}>
          <ul className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block text-cream/90 text-base font-medium hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-charcoal"
              >
                Reserve Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
