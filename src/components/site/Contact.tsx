import { MapPin, Phone, Clock, Car, MessageCircle, Navigation } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36 bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="gold-divider mb-6">Visit Us</span>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance">
              Come savor the <span className="italic text-gold">KMR experience.</span>
            </h2>
            <p className="mt-6 text-cream/70 text-base lg:text-lg max-w-lg">
              Reserve a table, place a takeaway order, or simply walk in — we'd love to host you.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-gold text-charcoal shrink-0"><MapPin className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-gold">Location</div>
                  <div className="text-cream font-medium mt-1">Tiruppur, Tamil Nadu</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-gold text-charcoal shrink-0"><Clock className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-gold">Hours</div>
                  <div className="text-cream font-medium mt-1">Open Daily · 11:00 AM – 11:00 PM</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-gold text-charcoal shrink-0"><Car className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-gold">Parking</div>
                  <div className="text-cream font-medium mt-1">Spacious complimentary parking</div>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="tel:+910000000000" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-charcoal shadow-gold hover:scale-[1.03] transition-transform">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=KMR+Kannimara+Multi-cuisine+Restaurant+Tiruppur" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cream hover:bg-white/10 transition-colors">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cream hover:bg-white/10 transition-colors">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-elegant aspect-[4/3] lg:aspect-auto lg:h-[560px]">
            <iframe
              title="KMR Kannimara Restaurant location in Tiruppur"
              src="https://www.google.com/maps?q=Tiruppur,+Tamil+Nadu&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[0.3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
