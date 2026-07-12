"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Star,
  Menu,
  X,
  Crown,
  Heart,
  Sparkles,
  ShoppingBag,
  Scissors,
  Grid3X3,
  Flower,
  Gem,
} from "lucide-react";
import { Poppins, Lato } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const services = [
  { name: "Bridal Lehengas", icon: Crown },
  { name: "Wedding Gowns", icon: Heart },
  { name: "Non-Bridal Fashion Wear", icon: Sparkles },
  { name: "Ethnic Dresses", icon: ShoppingBag },
  { name: "Custom Outfits", icon: Scissors },
  { name: "Wide Collection of Apparel", icon: Grid3X3 },
];

const images = [
  "https://lh3.googleusercontent.com/SuMqXYuVPyZm7eNpzVOpD6fQ-20Bh9vJKCRd_Yrh3NUXV2njF9S4za9Xb-AMKnKAO6_uTSflWFr53yaR4LxywlXbEV_H=w1600-rw",
  "https://content3.jdmagicbox.com/v2/comp/delhi/r2/011pxx11.xx11.231213001431.e6r2/catalogue/urmil-fashion-studio-shahdara-delhi-fashion-designers-t1qwbyfutn.jpg",
  "https://content3.jdmagicbox.com/v2/comp/delhi/r2/011pxx11.xx11.231213001431.e6r2/catalogue/urmil-fashion-studio-shahdara-delhi-fashion-designers-6mluggu5mc.jpg",
  "https://content.jdmagicbox.com/v2/comp/delhi/r2/011pxx11.xx11.231213001431.e6r2/catalogue/urmil-fashion-studio-shahdara-delhi-fashion-designers-82beuz2frs.jpg",
  "https://content3.jdmagicbox.com/v2/comp/delhi/r2/011pxx11.xx11.231213001431.e6r2/catalogue/urmil-fashion-studio-shahdara-delhi-fashion-designers-2t3u72n4e0.jpg",
];

const reviews = [
  {
    text: "Experience is very good low price heavy design, I am happy customer service 😊😊😊😊",
    rating: 5,
    time: "2 years ago",
  },
  {
    text: "Urmil Fashion Studio boasts the absolute best collection  with an incredible variety of stylish and high-quality items that cater to every taste! The curated selection is always on-trend, and the staff is incredibly knowledgeable and helpful, ensuring you find the perfect piece for any occasion. Thanks to Naresh ji - he really took the time to understand my style and helped me find the perfect outfit. If you're looking for top-notch quality and a curated selection, Urmil Fashion Studio is the only place to go. I purchased the dresses for all functions of my brother's wedding. I also bought clothes for my family and bride.",
    rating: 5,
    time: "a year ago",
  },
  {
    text: "I can't explain my review, here I experienced like best ever shop I had seen in my life I purchased a product I was expecting good but here I get best 👍👍👍💯💯 . Thankyou Urmil fashion ❤❤💓",
    rating: 5,
    time: "2 years ago",
  },
  {
    text: "They have amazing collection of bridal and non-bridal wear go and check their store they have an amazing varieties of every wedding function and occasions 😍",
    rating: 5,
    time: "2 years ago",
  },
  {
    text: "The best place for all your fashion related needs. They have a wide range of beautiful lehengas, gowns and many more. The staff is so cooperative.",
    rating: 5,
    time: "2 years ago",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main
      className={`${lato.className} min-h-screen bg-[#50C878] text-[#1A1A1A] antialiased`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#50C878]/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a
            href="#"
            className={`${poppins.className} text-2xl font-bold tracking-tight text-[#1A1A1A] hover:text-[#1A1A1A]`}
            aria-label="Urmil Fashion Studio"
          >
            Urmil Fashion Studio
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8 text-[#1A1A1A]">
            {["Home", "Services", "Gallery", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium hover:text-[#71AA34] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu trigger */}
          <button
            className="md:hidden p-2 rounded-md text-[#1A1A1A] hover:bg-[#7E8C54]/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#50C878] border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {["Home", "Services", "Gallery", "Testimonials"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-base font-medium text-[#1A1A1A] hover:text-[#71AA34] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[700px] overflow-hidden">
        <Image
          src={images[0]}
          alt="Urmil Fashion Studio bridal collection"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4"
        >
          <h1
            className={`${poppins.className} text-4xl md:text-[48px] leading-[1.1] font-bold mb-4`}
          >
            Urmil Fashion Studio
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8 text-white/90">
            Your Destination for Exquisite Bridal and Contemporary Fashion Wear
          </p>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] bg-[#4F7942] text-white font-bold text-base rounded-lg shadow-[0_2px_6px_rgba(79,121,66,0.25)] hover:bg-[#3F6533] transition-all duration-200 ease-in-out"
          >
            Explore Collection
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <motion.h2
          variants={fadeInUp}
          className={`${poppins.className} text-3xl md:text-[38px] leading-[1.2] font-semibold text-center mb-12 text-[#1A1A1A]`}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                className="group bg-[#7E8C54] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex flex-col items-center text-center transition-all duration-200"
              >
                <Icon className="w-10 h-10 mb-4 text-[#4F7942] group-hover:text-[#71AA34] transition-colors" />
                <h4
                  className={`${poppins.className} text-xl md:text-2xl font-medium mb-2 text-[#1A1A1A]`}
                >
                  {service.name}
                </h4>
                <p className="text-sm text-[#545454] leading-relaxed">
                  Premium quality and expert craftsmanship tailored just for
                  you.
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <h2
          className={`${poppins.className} text-3xl md:text-[38px] leading-[1.2] font-semibold text-center mb-12 text-[#1A1A1A]`}
        >
          Our Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`Urmil Fashion Studio outfit ${idx + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <motion.h2
          variants={fadeInUp}
          className={`${poppins.className} text-3xl md:text-[38px] leading-[1.2] font-semibold text-center mb-12 text-[#1A1A1A]`}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-[#7E8C54] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex flex-col justify-between"
            >
              <div className="flex mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <span className="text-xs text-[#545454] mt-auto">
                Customer &bull; {review.time}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#4F7942] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5
              className={`${poppins.className} text-xl font-medium`}
            >
              Urmil Fashion Studio
            </h5>
            <div className="flex items-start space-x-2 text-sm">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#71AA34]" />
              <span>
                1/4637, Main Mandoli Rd, opp. urmil jeweller's, near Budh
                Bazar, Ram Nagar, Shahdara, Delhi, 110032, India
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span>
                4.4 rating &bull; 47 reviews
              </span>
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <p className="text-sm text-white/80">
              &copy; {new Date().getFullYear()} Urmil Fashion Studio. All
              rights reserved.
            </p>
            <nav className="flex space-x-4 md:justify-end text-sm">
              <a
                href="#"
                className="hover:text-[#71AA34] transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="hover:text-[#71AA34] transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="hover:text-[#71AA34] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className="hover:text-[#71AA34] transition-colors"
              >
                Testimonials
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}