import heroImg from "@/assets/hero-interior.jpg";
import { Star, UtensilsCrossed, ShoppingBag, Bike, Users } from "lucide-react";

const badges = [
  { icon: UtensilsCrossed, label: "Dine-In" },
  { icon: ShoppingBag, label: "Takeaway" },
  { icon: Bike, label: "Delivery" },
  { icon: Users, label: "Family Dining" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Warm interior of KMR Kannimara restaurant in Tiruppur"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-overlay-hero" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, transparent 0%, oklch(0.12 0.02 60 / 0.55) 80%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-32 lg:py-40 w-full">
        <div className="max-w-3xl animate-float-up">
          <span className="gold-divider mb-8">Tiruppur · Since A Decade</span>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-cream leading-[1.02] text-balance">
            Authentic Flavors.
            <br />
            <span className="italic text-gold">Memorable</span> Dining.
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-cream/85 max-w-2xl leading-relaxed">
            Experience premium South Indian and multi-cuisine dining with delicious biryani,
            signature dosas, fresh parottas, and family-style hospitality in the heart of Tiruppur.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold tracking-wide text-charcoal shadow-gold hover:scale-[1.03] transition-transform"
            >
              View Menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-cream/5 backdrop-blur-md px-8 py-4 text-sm font-semibold tracking-wide text-cream hover:bg-cream/15 transition-colors"
            >
              Reserve a Table
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-cream/90 text-sm">
                <span className="font-semibold text-cream">4.2★</span> by hundreds of happy guests
              </div>
            </div>
            <div className="h-8 w-px bg-cream/20 hidden sm:block" />
            <div className="text-cream/90 text-sm">
              <span className="text-gold font-semibold">Quality dining</span> from just ₹200
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 max-w-3xl">
          {badges.map((b, i) => (
            <div
              key={b.label}
              className="group flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/[0.06] backdrop-blur-xl px-4 py-4 hover:border-gold/40 hover:bg-cream/10 transition-all animate-float-up"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-gold text-charcoal shrink-0">
                <b.icon className="h-5 w-5" />
              </span>
              <span className="text-cream font-medium text-sm tracking-wide">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-cream/60 animate-shimmer">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="h-10 w-px bg-gold/60" />
      </div>
    </section>
  );
}
