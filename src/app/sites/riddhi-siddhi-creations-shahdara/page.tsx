"use client";

import { Playfair_Display, DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Star,
  Scissors,
  Sparkles,
  ShieldCheck,
  ShoppingBag,
  Smile,
  Menu,
  X,
} from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const services = [
  { icon: <Scissors className="w-6 h-6 text-[#D4AF37]" />, title: "Ethnic Wear Collections" },
  { icon: <ShoppingBag className="w-6 h-6 text-[#D4AF37]" />, title: "Modern Dress Collections" },
  { icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />, title: "High-Quality Fabrics" },
  { icon: <Sparkles className="w-6 h-6 text-[#D4AF37]" />, title: "Unique & Trendy Designs" },
  { icon: <Smile className="w-6 h-6 text-[#D4AF37]" />, title: "Personalized Shopping Experience" },
];

const reviews = [
  {
    stars: 5,
    text: "Great dress shop with beautiful collections and good quality outfits. The staff is friendly and helpful, and the prices are reasonable. Highly recommended! ✨👗",
    date: "a month ago",
  },
  {
    stars: 5,
    text: "Beautiful collection of ethnic wear with great quality and unique designs. Staff is very polite and helpful. Loved the overall shopping experience! 💖",
    date: "2 months ago",
  },
  {
    stars: 5,
    text: "The experience is awesome and that shop owner is to kind, all the staff is too good. The material of clothes is bestest",
    date: "2 months ago",
  },
  {
    stars: 5,
    text: "Nice staff nd great quality of fabric with amazing designs",
    date: "2 months ago",
  },
  {
    stars: 5,
    text: "Great experience with Riddhi Siddhi Creations! The quality of products is excellent and the service is very professional. The staff is polite and helpful. Highly recommended for anyone looking for good quality and reliable service.",
    date: "2 months ago",
  },
];

const galleryImages = [
  "https://img.magicpin.com/9010436_store_images_3.jpg",
  "https://img.magicpin.com/9010436_cover_0.jpg",
  "https://img.magicpin.com/9010436_store_images_7.jpg",
  "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=575724107892191",
];

export default function LandingPage() {
  return (
    <div className={`${dmSans.className} bg-[#FDFBD4] text-[#171717] min-h-screen`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FDFBD4]/90 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16">
          <Link href="/" className={`${playfair.className} text-2xl font-bold text-[#171717]`}>
            Riddhi Siddhi Creations
          </Link>
          <a
            href="tel:09818230709"
            className="flex items-center gap-2 text-sm font-medium text-[#171717] hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">098182 30709</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-24 lg:py-32 text-center"
        >
          <p className="text-[#CE8946] uppercase tracking-widest text-xs font-medium mb-4">
            Delhi's premier boutique
          </p>
          <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-7xl font-bold text-[#171717] leading-tight mb-6`}>
            Riddhi Siddhi Creations
          </h1>
          <p className="text-lg md:text-xl text-[#737373] max-w-2xl mx-auto mb-10">
            Discover Exquisite Ethnic & Modern Wear with Unmatched Quality and Service.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
            <span className="ml-2 text-sm font-medium text-[#171717]">4.9 (32 reviews)</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#collections"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#D4AF37] text-[#171717] font-semibold text-sm uppercase tracking-wider shadow-md hover:bg-[#bfa732] transition-colors"
            >
              Explore Collections
            </a>
            <a
              href="tel:09818230709"
              className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-[#BDB76B] text-[#BDB76B] font-semibold text-sm uppercase tracking-wider hover:bg-[#BDB76B]/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <pattern id="mandala" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="40" fill="none" stroke="#BDB76B" strokeWidth="1" />
              <circle cx="60" cy="60" r="25" fill="none" stroke="#BDB76B" strokeWidth="1" />
              <circle cx="60" cy="60" r="10" fill="none" stroke="#BDB76B" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mandala)" />
          </svg>
        </div>
      </section>

      {/* About / Introduction */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20"
      >
        <div className="text-center mb-12">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#171717] mb-4`}>
            Our Story
          </h2>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-lg text-[#737373] max-w-3xl mx-auto leading-relaxed">
            Nestled in the heart of Shahdara, Riddhi Siddhi Creations has become a cherished destination for women
            who appreciate the finest fabrics and timeless designs. Every piece in our collection is chosen with
            an eye for quality and tradition, offering a personalised shopping experience that feels like home.
          </p>
        </div>
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://img.magicpin.com/9010436_cover_0.jpg"
            alt="Riddhi Siddhi Creations interior showing elegant display"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBD4]/80 via-transparent to-transparent" />
        </div>
      </motion.section>

      {/* Services */}
      <section id="collections" className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#171717] mb-4`}>
              What We Offer
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-6" />
            <p className="text-[#737373] max-w-xl mx-auto">
              From handpicked ethnic classics to contemporary silhouettes, every piece is a celebration of craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#E5E5E5] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-[#FDFBD4] rounded-xl">
                  {service.icon}
                </div>
                <h3 className={`${playfair.className} text-xl font-bold text-[#171717]`}>
                  {service.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  {/* Generic yet high-quality descriptions aligned with offerings */}
                  {service.title === "Ethnic Wear Collections" && "Curated lehengas, sarees, and salwar suits for every celebration."}
                  {service.title === "Modern Dress Collections" && "Chic western and fusion wear that redefines everyday elegance."}
                  {service.title === "High-Quality Fabrics" && "Premium silks, cottons, and linens chosen for comfort and longevity."}
                  {service.title === "Unique & Trendy Designs" && "Stand out with one-of-a-kind styles you won't find anywhere else."}
                  {service.title === "Personalized Shopping Experience" && "One-on-one assistance to find the perfect outfit just for you."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#171717] mb-4`}>
              A Glimpse of Our Collection
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Riddhi Siddhi Creations collection ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#171717] mb-4`}>
              What Our Customers Say
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FDFBD4] p-6 rounded-2xl shadow-sm border border-[#E5E5E5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-[#171717] leading-relaxed italic mb-4">"{review.text}"</p>
                </div>
                <div className="flex justify-between items-center text-sm text-[#737373] mt-2 border-t border-[#E5E5E5] pt-3">
                  <span className="font-medium">— Customer</span>
                  <span className="uppercase tracking-wide text-xs">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Location */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#171717]`}>
                Visit Us
              </h2>
              <div className="w-12 h-1 bg-[#D4AF37]" />
              <p className="text-lg text-[#737373] max-w-md">
                Come and experience the finest fabrics and personalised service at our boutique in Shahdara.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#171717]">Address</p>
                    <p className="text-[#737373]">
                      1/9245, Mohan Park, West Rohtash Nagar, Shahdara, Delhi, 110032, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#171717]">Phone</p>
                    <a href="tel:09818230709" className="text-[#D4AF37] hover:underline">
                      098182 30709
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=1/9245+Mohan+Park+West+Rohtash+Nagar+Shahdara+Delhi+110032"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-[#D4AF37] text-[#171717] font-semibold text-sm uppercase tracking-wider shadow-md hover:bg-[#bfa732] transition-colors"
              >
                Get Directions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E5E5]"
            >
              {/* Placeholder for map or decorative image */}
              <Image
                src="https://img.magicpin.com/9010436_store_images_7.jpg"
                alt="Riddhi Siddhi Creations storefront"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBD4]/50 to-transparent" />
              {/* Overlay subtle text */}
              <div className="absolute bottom-6 left-6 right-6 text-right">
                <span className="bg-[#D4AF37]/90 text-[#171717] px-4 py-2 rounded-lg text-sm font-medium shadow">
                  4.9 ★ (32 reviews)
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E5] py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#737373]">
          <p className="flex items-center gap-2">
            <span className={`${playfair.className} text-lg font-bold text-[#171717]`}>Riddhi Siddhi Creations</span>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> 098182 30709
          </p>
        </div>
      </footer>
    </div>
  );
}