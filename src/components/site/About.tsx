import diningImg from "@/assets/gallery-dining.jpg";
import tableImg from "@/assets/gallery-table.jpg";
import { Sparkles, Users, Car, HeartHandshake, Leaf } from "lucide-react";

const points = [
  { icon: Sparkles, label: "Hygienic environment" },
  { icon: Users, label: "Spacious family seating" },
  { icon: HeartHandshake, label: "Courteous staff" },
  { icon: Car, label: "Comfortable parking" },
  { icon: Leaf, label: "Fresh, daily ingredients" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-36 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img src={diningImg} alt="Family dining at KMR Kannimara" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-4 lg:-right-12 w-44 lg:w-60 aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant border-4 border-background">
            <img src={tableImg} alt="Elegant table setting" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -top-6 -left-6 hidden lg:flex flex-col items-center justify-center h-32 w-32 rounded-full bg-gradient-warm text-cream shadow-elegant">
            <span className="font-serif text-3xl">10+</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold mt-1">Years</span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="gold-divider mb-6">Our Story</span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground leading-[1.05] text-balance">
            A Tiruppur favorite for <span className="italic text-walnut">flavor, warmth & affordability.</span>
          </h2>
          <p className="mt-8 text-base lg:text-lg text-muted-foreground leading-relaxed">
            KMR Kannimara Multi-cuisine Restaurant is a beloved dining destination known for combining
            authentic taste, welcoming hospitality, and accessible pricing. From flavorful biryanis to
            traditional South Indian specialties, every dish is prepared with freshness, consistency,
            and the care of a family kitchen.
          </p>

          <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {points.map((p) => (
              <li key={p.label} className="flex items-center gap-3">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-secondary text-walnut shrink-0">
                  <p.icon className="h-4 w-4" />
                </span>
                <span className="text-foreground font-medium">{p.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-walnut-deep transition-colors">
              Explore the Menu
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
