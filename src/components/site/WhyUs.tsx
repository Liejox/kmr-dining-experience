import { Flame, BadgeIndianRupee, Sparkles, Users, Timer, Car, Bike, HeartHandshake } from "lucide-react";

const items = [
  { icon: Flame, title: "Authentic South Indian Taste", desc: "Recipes rooted in tradition, prepared with regional spices." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Premium experience without the premium price tag." },
  { icon: Sparkles, title: "Clean & Hygienic Dining", desc: "Spotless kitchens and dining areas, every single day." },
  { icon: Users, title: "Family-Friendly Atmosphere", desc: "Spacious seating designed for memorable family meals." },
  { icon: Timer, title: "Fast, Friendly Service", desc: "Warm hospitality with quick, attentive table service." },
  { icon: Car, title: "Spacious Parking", desc: "Hassle-free parking for cars and two-wheelers." },
  { icon: Bike, title: "Dine-In · Takeaway · Delivery", desc: "Enjoy your favorites your way, wherever you are." },
  { icon: HeartHandshake, title: "Courteous Staff", desc: "A team that treats every guest like family." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 lg:py-36 bg-charcoal text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="gold-divider mb-6">Why Guests Choose Us</span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance">
            Premium taste at <span className="italic text-gold">affordable pricing.</span>
          </h2>
          <p className="mt-6 text-cream/70 text-base lg:text-lg">
            Eight reasons families across Tiruppur keep coming back — meal after meal.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:bg-white/[0.06] hover:border-gold/30 transition-all duration-500"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-gold text-charcoal shadow-gold mb-5">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-xl text-cream">{it.title}</h3>
              <p className="mt-2 text-sm text-cream/65 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
