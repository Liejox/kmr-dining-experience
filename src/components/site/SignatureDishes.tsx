import biryani from "@/assets/dish-biryani.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import parotta from "@/assets/dish-parotta.jpg";
import chicken65 from "@/assets/dish-chicken65.jpg";
import falooda from "@/assets/dish-falooda.jpg";
import kaadai from "@/assets/dish-kaadai.jpg";

const dishes = [
  { name: "Hyderabadi Biryani", desc: "Long-grain basmati slow-cooked with aromatic spices, tender meat and crisp fried onions.", img: biryani, tag: "Signature" },
  { name: "Chicken Kari Dosa", desc: "Crisp golden dosa stuffed with our house chicken kari masala, served with chutneys.", img: dosa, tag: "Bestseller" },
  { name: "Ceylon Mushroom Parotta", desc: "Layered Kerala parotta tossed with Ceylon-style mushroom masala and curry leaves.", img: parotta, tag: "Chef's Pick" },
  { name: "Chicken 65", desc: "Crispy, fiery and unforgettable — our take on the South Indian classic appetizer.", img: chicken65, tag: "Spicy" },
  { name: "Kaadai Roast", desc: "Quail roasted in slow-cooked masala, an aromatic Chettinad-inspired specialty.", img: kaadai, tag: "Rare" },
  { name: "Dry Fruit & Nut Falooda", desc: "Layered rose, vermicelli and ice cream finished with pistachio, almond and cashew.", img: falooda, tag: "Dessert" },
];

const more = ["Nei Podi Chicken", "Kerala Parotta", "Wheat Parotta", "Egg Curry", "Chicken Manchurian"];

export function SignatureDishes() {
  return (
    <section id="menu" className="relative py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider mb-6">Signature Dishes</span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight text-balance">
            Crafted from <span className="italic text-walnut">tradition.</span>
            <br /> Loved by <span className="italic text-walnut">generations.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg">
            A curated taste of our most celebrated dishes — every plate prepared fresh, with care and South Indian soul.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((d) => (
            <article key={d.name} className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                />
              </div>
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center rounded-full bg-charcoal/70 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold">
                  {d.tag}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 bg-gradient-to-t from-charcoal/95 via-charcoal/70 to-transparent">
                <h3 className="font-serif text-2xl lg:text-3xl text-cream">{d.name}</h3>
                <p className="mt-2 text-cream/80 text-sm leading-relaxed line-clamp-2">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mr-2">Also loved:</span>
          {more.map((m) => (
            <span key={m} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">{m}</span>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-warm px-8 py-4 text-sm font-semibold text-cream shadow-soft hover:shadow-elegant transition-shadow">
            Order Now / Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}
