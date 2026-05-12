import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { SignatureDishes } from "@/components/site/SignatureDishes";
import { WhyUs } from "@/components/site/WhyUs";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KMR Kannimara Multi-cuisine Restaurant — Tiruppur" },
      {
        name: "description",
        content:
          "Premium South Indian & multi-cuisine restaurant in Tiruppur. Famous biryani, signature dosas, parottas & family dining. Quality dining from ₹200.",
      },
      { property: "og:title", content: "KMR Kannimara Multi-cuisine Restaurant — Tiruppur" },
      {
        property: "og:description",
        content:
          "Authentic South Indian flavors, biryani, dosas & family hospitality in Tiruppur. Dine-in, takeaway & delivery.",
      },
      { property: "og:type", content: "restaurant" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <WhyUs />
      <Reviews />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
