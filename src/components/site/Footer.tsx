import { Instagram, Facebook, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-walnut-deep text-cream/80" style={{ backgroundColor: "oklch(0.22 0.04 50)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-11 w-11 rounded-full bg-gradient-gold text-charcoal font-serif text-lg font-semibold">K</span>
              <div>
                <div className="font-serif text-xl text-cream tracking-wide">KMR Kannimara</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold/80">Multi-cuisine Restaurant</div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-cream/65">
              Premium South Indian and multi-cuisine dining in Tiruppur — authentic flavors, family hospitality
              and quality dining at honest pricing.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="grid place-items-center h-10 w-10 rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="grid place-items-center h-10 w-10 rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="tel:+910000000000" aria-label="Call" className="grid place-items-center h-10 w-10 rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors"><Phone className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Reserve</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Hours</div>
            <ul className="space-y-3 text-sm">
              <li>Mon – Sun</li>
              <li className="text-cream">11:00 AM – 11:00 PM</li>
              <li className="pt-3 text-cream/60">Tiruppur, Tamil Nadu</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} KMR Kannimara Multi-cuisine Restaurant. All rights reserved.</div>
          <div>Crafted with warmth in Tiruppur</div>
        </div>
      </div>
    </footer>
  );
}
