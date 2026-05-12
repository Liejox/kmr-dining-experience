import dining from "@/assets/gallery-dining.jpg";
import table from "@/assets/gallery-table.jpg";
import chef from "@/assets/gallery-chef.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import parotta from "@/assets/dish-parotta.jpg";
import hero from "@/assets/hero-interior.jpg";
import falooda from "@/assets/dish-falooda.jpg";

const images = [
  { src: hero, alt: "Restaurant ambience", span: "lg:col-span-2 lg:row-span-2" },
  { src: biryani, alt: "Hyderabadi biryani", span: "" },
  { src: dining, alt: "Family dining area", span: "" },
  { src: chef, alt: "Chef plating signature dish", span: "lg:col-span-2" },
  { src: dosa, alt: "Crispy ghee roast dosa", span: "" },
  { src: parotta, alt: "Kerala parotta with curry", span: "" },
  { src: table, alt: "Elegant table setting", span: "" },
  { src: falooda, alt: "Dry fruit and nut falooda", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <span className="gold-divider mb-6">Gallery</span>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight text-balance">
              A glimpse inside <span className="italic text-walnut">KMR Kannimara.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Interiors, signature plates, and the warm Tiruppur hospitality that makes every visit memorable.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-3 lg:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
