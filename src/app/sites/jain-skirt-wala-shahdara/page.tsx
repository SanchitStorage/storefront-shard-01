"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Phone,
  ShoppingBag,
  Heart,
  Sparkles,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Playfair_Display, Nunito_Sans, Caveat } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

// Reusable animated section wrapper
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    title: "Women's Trendy Apparel",
    icon: Sparkles,
    image: "https://lh3.googleusercontent.com/XCsZe8xbOX-c9D4ucDde4qodNNEC9LO5StzTpD98yI8X3qePMNsHICnbPh-ogER2ZigS8os5NPuDYJOMzOKi3Hk9NTXO=w1200-rw",
    gradient: "from-plum/5 to-plum/10",
  },
  {
    title: "Kids' Clothing Collection",
    icon: Heart,
    image: "https://content.jdmagicbox.com/v2/comp/delhi/22/011p5503122/catalogue/jain-skirt-wala-shahdara-delhi-kids-readymade-garment-retailers-pte7ocskpw-250.jpg",
    gradient: "from-gold/5 to-gold/10",
  },
  {
    title: "Casual Wear",
    icon: ShoppingBag,
    image: "https://content3.jdmagicbox.com/v2/comp/delhi/22/011p5503122/catalogue/jain-skirt-wala-shahdara-delhi-kids-readymade-garment-retailers-sb9kqbqgas.jpg",
    gradient: "from-coral/5 to-coral/10",
  },
  {
    title: "Formal & Party Wear",
    icon: Sparkles,
    image: "https://content3.jdmagicbox.com/v2/comp/delhi/22/011p5503122/catalogue/jain-skirt-wala-shahdara-delhi-kids-readymade-garment-retailers-x40xrbfhdk.jpg",
    gradient: "from-teal/5 to-teal/10",
  },
  {
    title: "Seasonal Fashion",
    icon: Sparkles,
    // No image – decorative gradient placeholder
    image: null,
    gradient: "from-plum/10 to-gold/10",
  },
];

const testimonials = [
  {
    stars: 5,
    time: "5 months ago",
    text: "They sell amazing clothes. Every cloth is different from the other. I personally feel it's a bit expensive but it's always crowded which means that people value quality over pockets",
  },
  {
    stars: 5,
    time: "5 years ago",
    text: "Many gent's wear brand under one one roof from top to bottom at a very reasonable price. Nice dealing of staff with customers.",
  },
  {
    stars: 5,
    time: "7 months ago",
    text: "Unique and trendy clothes ….. owner is very nice and humble and staff is very good.",
  },
  {
    stars: 5,
    time: "4 years ago",
    text: "Best shop for all your clothing needs. Here you can find all the varieties whether its (Formal, Casual, Daily wear or even the auspicious party wear). All the products are available at unbeatable prices and the product quality is topnotch👌. If you're shopaholic then do visit here you'll surely love it & gonna recommend the same to all you near & dear ones. Customer service at ots best",
  },
  {
    stars: 5,
    time: "11 months ago",
    text: "All time my favourite shop for kids collection!",
  },
];

export default function LandingPage() {
  return (
    <main
      className={`${playfair.variable} ${nunito.variable} ${caveat.variable} font-nunito bg-cream text-charcoal antialiased`}
    >
      {/* --------------------------------- HERO --------------------------------- */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image
          src="https://images.jdmagicbox.com/v2/comp/delhi/22/011p5503122/catalogue/jain-skirt-wala-shahdara-delhi-readymade-garment-retailers-1m3xi6d.jpg"
          alt="Jain Skirt Wala storefront"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay – subtle plum tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-plum/60 via-plum/40 to-plum/20" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10"
        >
          <span
            className={`font-caveat text-3xl md:text-4xl text-gold mb-3 tracking-wide`}
          >
            Jain Skirt Wala
          </span>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl">
            Your Destination for Unique & Trendy Clothing
          </h1>
          <p className="font-nunito text-white/80 text-lg md:text-xl mt-6 max-w-2xl">
            Women & Kids | Shahdara, Delhi
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10"
          >
            <Link
              href="#services"
              className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-coral/30 hover:bg-coral-dark hover:shadow-coral/50 transition-all duration-300"
            >
              Explore Collection
              <ChevronRight size={20} />
            </Link>
          </motion.div>

          {/* Minor rating badge */}
          <div className="flex items-center gap-2 mt-8 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-white/90 text-sm">
            <Star size={16} className="fill-gold text-gold" />
            <span className="font-semibold">4.6</span>
            <span className="text-white/70">· 103 reviews</span>
          </div>
        </motion.div>
      </section>

      {/* --------------------------------- ABOUT / WHY US --------------------------------- */}
      <AnimatedSection className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <Image
              src="https://lh3.googleusercontent.com/XCsZe8xbOX-c9D4ucDde4qodNNEC9LO5StzTpD98yI8X3qePMNsHICnbPh-ogER2ZigS8os5NPuDYJOMzOKi3Hk9NTXO=w1200-rw"
              alt="Women's apparel collection"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <span className="font-caveat text-3xl text-gold">
              Handpicked with love
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-plum leading-snug">
              Where comfort meets confidence
            </h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              At Jain Skirt Wala, every piece tells a story. We believe in
              curating wardrobes that reflect personality – not just trends.
              With a devoted local following and an eye for detail, we bring
              you unique styles that feel as good as they look.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="inline-flex items-center gap-2 bg-plum/5 text-plum font-semibold px-4 py-2 rounded-full text-sm">
                <Heart size={16} /> Unique Pieces
              </span>
              <span className="inline-flex items-center gap-2 bg-gold/10 text-plum font-semibold px-4 py-2 rounded-full text-sm">
                <Sparkles size={16} /> Humble Service
              </span>
              <span className="inline-flex items-center gap-2 bg-coral/5 text-coral font-semibold px-4 py-2 rounded-full text-sm">
                <ShoppingBag size={16} /> Unbeatable Prices
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* --------------------------------- SERVICES / CATEGORIES --------------------------------- */}
      <section id="services" className="py-24 bg-cream-dark/30">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16 space-y-4">
            <span className="font-caveat text-3xl text-gold">
              Our Specialties
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-plum">
              What we offer
            </h2>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
              Five curated categories to dress the women and kids you love
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl shadow-card overflow-hidden hover:-translate-y-2 hover:shadow-card-hover transition-all duration-500"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-plum/20 via-gold/10 to-coral/10 flex items-center justify-center">
                      <service.icon size={64} className="text-plum/30" />
                    </div>
                  )}
                  {/* Overlay on hover for non-image card */}
                  {!service.image && (
                    <div className="absolute inset-0 bg-gradient-to-br from-plum/10 to-gold/10" />
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-playfair font-semibold text-xl text-plum">
                    {service.title}
                  </h3>
                  <div className="mt-2 inline-flex items-center text-coral text-sm font-semibold">
                    View collection
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- TESTIMONIALS --------------------------------- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16 space-y-4">
          <span className="font-caveat text-3xl text-gold">
            What they say
          </span>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-plum">
            Loved by the community
          </h2>
          <p className="text-charcoal/70 text-lg">
            Real reviews from real customers who trust us
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-cream-light border border-cream-dark/30 rounded-xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star
                    key={s}
                    size={18}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="italic text-charcoal/80 flex-1 leading-relaxed mb-4">
                <Quote size={14} className="inline mr-1 text-plum/50" />
                {t.text}
              </p>
              <span className="text-sm text-charcoal/50 mt-auto font-medium">
                {t.time}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <span className="inline-flex items-center gap-2 bg-plum/5 text-plum font-semibold px-6 py-3 rounded-full">
            <Star size={18} className="fill-gold text-gold" />
            4.6 rating · 103 Google reviews
          </span>
        </motion.div>
      </section>

      {/* --------------------------------- CONTACT / VISIT --------------------------------- */}
      <section className="py-24 bg-plum text-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16 space-y-4">
            <span className="font-caveat text-3xl text-gold">
              Visit us today
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl">
              Find your next favourite outfit
            </h2>
            <p className="text-white/70 text-lg">
              We’re just around the corner, waiting to welcome you
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Address & phone card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 space-y-8 border border-white/10"
            >
              <div className="flex gap-4 items-start">
                <MapPin size={28} className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-playfair font-semibold text-xl mb-1">
                    Address
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    484, Telibara, Shahdara, Delhi, 110032, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone size={28} className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-playfair font-semibold text-xl mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:09811155206"
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    098111 55206
                  </a>
                </div>
              </div>

              <motion.a
                href="tel:09811155206"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gold text-plum font-bold px-8 py-4 rounded-full shadow-lg shadow-gold/20 hover:bg-gold/90 transition-all mt-4"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
            </motion.div>

            {/* Decorative image (store interior or another image) */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant hidden md:block">
              <Image
                src="https://content.jdmagicbox.com/v2/comp/delhi/22/011p5503122/catalogue/jain-skirt-wala-shahdara-delhi-kids-readymade-garment-retailers-pte7ocskpw-250.jpg"
                alt="Inside Jain Skirt Wala"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------- FOOTER --------------------------------- */}
      <footer className="bg-charcoal text-white/70 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-playfair font-bold text-2xl text-gold">
              Jain Skirt Wala
            </span>
            <p className="text-sm mt-1">
              Your Destination for Unique & Trendy Clothing
            </p>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} Jain Skirt Wala. All rights reserved.</p>
            <p className="mt-1">
              484, Telibara, Shahdara, Delhi, 110032
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}