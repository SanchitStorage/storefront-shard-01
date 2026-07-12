"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import {
  Phone,
  MapPin,
  Menu,
  X,
  Star,
  Verified,
  Shirt,
  TrendingUp,
  ShoppingBag,
  Tag,
} from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const services = [
  {
    icon: ShoppingBag,
    text: "Latest fashion collections for women",
  },
  {
    icon: Verified,
    text: "High-quality clothing materials",
  },
  {
    icon: Shirt,
    text: "Wide variety of styles and sizes",
  },
  {
    icon: TrendingUp,
    text: "Trendy fashion wear",
  },
  {
    icon: Tag,
    text: "Reasonably priced apparel",
  },
];

const reviews = [
  {
    stars: 5,
    text: "Nice collection 👌 every material quality is very good sizes is available I am happy to shopping in spice A fashion bistro all workers behavior is very good.",
  },
  {
    stars: 5,
    text: "Nice collection !! Prices are little Bit Higher !!!! I am very happy coz whatever I want I can have",
  },
  {
    stars: 5,
    text: "Latest fashion, still inexpensive, wide variety,\nResonable rates for fashion wears with tons of varieties, staff experience was also good.\nAm very Happy and Satisfied SPICE 'A 'FASHION BISTRO'👍",
  },
  {
    stars: 5,
    text: "Stuff quality is awesome ... always they have a latest collection .... most important thing is every1 nature is very polite n cool ❤",
  },
  {
    stars: 5,
    text: "Excellent place for Shopping.... 👌👌\nNot too much big shop but the shop is like small shopping mall.... Because here a cloth quality and design is same as malls and the clothes are in reasonable price 😃",
  },
];

const galleryImages = [
  {
    src: "https://content3.jdmagicbox.com/v2/comp/delhi/q8/011p1229963488m8l8q8/catalogue/spice-fashion-bistro-shahdara-delhi-readymade-garment-retailers-xs96wenphg.jpg",
    alt: "SPICE fashion bistro store front",
    badge: "New",
  },
  {
    src: "https://content3.jdmagicbox.com/v2/comp/delhi/q8/011p1229963488m8l8q8/catalogue/spice-fashion-bistro-shahdara-delhi-readymade-garment-retailers-k4gt7oq8ry.jpg",
    alt: "Latest women's clothing collection",
  },
  {
    src: "https://content3.jdmagicbox.com/v2/comp/delhi/q8/011p1229963488m8l8q8/catalogue/spice-fashion-bistro-shahdara-delhi-readymade-garment-retailers-0y8mp5psi9.jpg",
    alt: "Trendy outfits on display",
    badge: "Trending",
  },
  {
    src: "https://images.jdmagicbox.com/v2/comp/delhi/q8/011p1229963488m8l8q8/catalogue/spice-fashion-bistro-shahdara-delhi-readymade-garment-retailers-2b56zuhu0e.jpg",
    alt: "Quality fabrics and styles",
  },
  {
    src: "https://lookaside.fbsbx.com/lookaside/crawler/threads/DYpHa91kvWc/0/image.jpg",
    alt: "SPICE bistro interior",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${inter.variable} ${playfair.variable} min-h-screen bg-[#F5F5DC] text-[#171717]`}
    >
      {/* Noise texture for background */}
      <style jsx global>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
        }
        .testimonial-card {
          position: relative;
        }
        .testimonial-card::before {
          content: "“";
          font-family: var(--font-playfair), serif;
          font-size: 6rem;
          color: rgba(244, 164, 96, 0.15);
          position: absolute;
          top: -10px;
          left: -10px;
          line-height: 1;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5F5DC] border-b border-black/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#A0522D] font-[family-name:var(--font-playfair)]">
              SPICE
            </span>
            <span className="hidden sm:inline text-sm text-[#737373] font-[family-name:var(--font-inter)]">
              A Fashion Bistro
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#171717] font-[family-name:var(--font-inter)]">
            <a href="#services" className="hover:text-[#E35336] transition">
              Services
            </a>
            <a href="#gallery" className="hover:text-[#E35336] transition">
              Gallery
            </a>
            <a href="#testimonials" className="hover:text-[#E35336] transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-[#E35336] transition">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#171717]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-black/10 overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-3 space-y-2 font-[family-name:var(--font-inter)] text-sm">
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="py-2 hover:text-[#E35336]"
                >
                  Services
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMenuOpen(false)}
                  className="py-2 hover:text-[#E35336]"
                >
                  Gallery
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMenuOpen(false)}
                  className="py-2 hover:text-[#E35336]"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="py-2 hover:text-[#E35336]"
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
          <Image
            src={galleryImages[0].src}
            alt="SPICE fashion bistro hero"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/70 to-[#171717]/30" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-4 tracking-tight"
            >
              SPICE – A Fashion Bistro
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-base md:text-lg font-[family-name:var(--font-inter)] text-white/90 mb-8"
            >
              Your destination for the latest women&apos;s fashion, quality
              clothing, and unbeatable prices.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="#gallery"
                className="inline-block bg-[#E35336] text-white font-medium py-3 px-8 rounded-md text-sm uppercase tracking-wider shadow-md hover:bg-[#D14B2E] transition"
              >
                Explore Collection
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-20 lg:py-24 bg-[#F5F5DC] bg-noise">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-[#171717] font-[family-name:var(--font-playfair)] mb-3"
              >
                Why shop with us?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#737373] font-[family-name:var(--font-inter)] max-w-2xl mx-auto text-sm md:text-base"
              >
                Discover the boutique experience blending the latest trends with
                artisanal quality.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition group"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#F5F5DC] flex items-center justify-center">
                      <Icon
                        size={24}
                        className="text-[#E35336] group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <p className="text-sm font-medium text-[#171717] font-[family-name:var(--font-inter)]">
                      {service.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-[#171717] font-[family-name:var(--font-playfair)] mb-3"
              >
                Curated Collection
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#737373] font-[family-name:var(--font-inter)] max-w-2xl mx-auto text-sm md:text-base"
              >
                A glimpse of our boutique window – fresh arrivals, premium
                textures, and every size you love.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="relative group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {img.badge && (
                      <span className="absolute top-3 left-3 bg-[#E35336] text-white text-xs font-semibold px-2 py-1 rounded-md uppercase tracking-wide">
                        {img.badge}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 md:py-20 lg:py-24 bg-[#F5F5DC] bg-noise"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-[#171717] font-[family-name:var(--font-playfair)] mb-3"
              >
                Loved by our customers
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#737373] font-[family-name:var(--font-inter)] max-w-2xl mx-auto text-sm md:text-base"
              >
                4.9 ★ (40 reviews) – Real stories from our boutique family.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="testimonial-card bg-[#F5F5DC] border border-[#F4A460]/20 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-center mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#E35336] text-[#E35336]"
                      />
                    ))}
                  </div>
                  <p className="text-[#171717] text-sm italic leading-relaxed font-[family-name:var(--font-inter)] mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <span className="text-xs text-[#A0522D] font-semibold font-[family-name:var(--font-inter)]">
                    — Customer
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact / Location */}
        <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-[#171717] font-[family-name:var(--font-playfair)] mb-3"
              >
                Visit us or call
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#737373] font-[family-name:var(--font-inter)] max-w-2xl mx-auto text-sm md:text-base"
              >
                We&apos;re right in the heart of Shahdara, Delhi.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-[#F5F5DC] rounded-xl p-6 flex flex-col items-center text-center"
              >
                <MapPin size={32} className="text-[#E35336] mb-3" />
                <p className="text-[#171717] font-medium font-[family-name:var(--font-inter)] mb-1">
                  Address
                </p>
                <p className="text-[#737373] text-sm font-[family-name:var(--font-inter)]">
                  424, Telibara, Shahdara,
                  <br />
                  Delhi, 110032, India
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-[#F5F5DC] rounded-xl p-6 flex flex-col items-center text-center"
              >
                <Phone size={32} className="text-[#E35336] mb-3" />
                <p className="text-[#171717] font-medium font-[family-name:var(--font-inter)] mb-1">
                  Phone
                </p>
                <a
                  href="tel:09891177662"
                  className="text-[#E35336] font-semibold font-[family-name:var(--font-inter)] hover:underline"
                >
                  098911 77662
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <a
                href="tel:09891177662"
                className="inline-flex items-center gap-2 bg-[#E35336] text-white font-medium py-3 px-8 rounded-md text-sm uppercase tracking-wider shadow-md hover:bg-[#D14B2E] transition"
              >
                Call now
                <Phone size={16} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#171717] text-[#F5F5DC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-[#F5F5DC]"
            >
              SPICE
            </Link>
            <p className="text-sm mt-1 font-[family-name:var(--font-inter)] text-[#A3A3A3]">
              A Fashion Bistro
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-[family-name:var(--font-inter)] text-[#A3A3A3]">
              424, Telibara, Shahdara, Delhi, 110032
            </p>
            <a
              href="tel:09891177662"
              className="text-sm hover:text-[#E35336] transition font-[family-name:var(--font-inter)]"
            >
              098911 77662
            </a>
            <p className="text-xs mt-3 text-[#A3A3A3] font-[family-name:var(--font-inter)]">
              © {new Date().getFullYear()} SPICE – A Fashion Bistro. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}