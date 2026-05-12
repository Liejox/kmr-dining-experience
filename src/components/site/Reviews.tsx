import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Priya Ramesh", role: "Family Diner", text: "One of the best South Indian dining experiences in the area. The biryani is unforgettable and the staff treats you like family.", rating: 5 },
  { name: "Karthik S.", role: "Local Foodie", text: "Clean place, great ambience, and excellent staff behavior. The Chicken Kari Dosa is a must-try.", rating: 5 },
  { name: "Anitha M.", role: "Weekend Regular", text: "Affordable pricing with surprisingly premium quality. Our go-to spot for family weekends.", rating: 4 },
  { name: "Vignesh R.", role: "Office Lunch Group", text: "Perfect place for family dining and weekend outings. Spacious, comfortable and the food is consistent.", rating: 5 },
];

export function Reviews() {
  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider mb-6">Loved by Guests</span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight text-balance">
            Stories from our <span className="italic text-walnut">happy tables.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <figure key={r.name} className="relative rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-soft hover:shadow-elegant transition-shadow">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/30" />
              <div className="flex gap-1 mb-5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl lg:text-2xl text-foreground leading-snug">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-warm text-cream font-serif text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
