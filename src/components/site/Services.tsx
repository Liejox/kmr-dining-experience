import { UtensilsCrossed, ShoppingBag, Bike, Users, PartyPopper } from "lucide-react";

const services = [
  { icon: UtensilsCrossed, title: "Dine-In", desc: "Spacious, comfortable seating with warm hospitality." },
  { icon: ShoppingBag, title: "Takeaway", desc: "Freshly packed orders ready when you arrive." },
  { icon: Bike, title: "Delivery", desc: "Hot meals delivered across Tiruppur via leading partners." },
  { icon: Users, title: "Family Dining", desc: "Family-style portions and child-friendly seating." },
  { icon: PartyPopper, title: "Group Dining", desc: "Larger tables for celebrations and gatherings." },
];

export function Services() {
  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider mb-6">Services</span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight text-balance">
            Enjoy KMR <span className="italic text-walnut">your way.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 hover:border-gold/40 hover:shadow-soft transition-all">
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-secondary text-walnut group-hover:bg-gradient-gold group-hover:text-charcoal transition-colors mb-5">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
