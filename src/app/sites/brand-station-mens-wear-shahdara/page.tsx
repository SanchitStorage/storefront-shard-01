"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Menu, X, Star, Shirt, Gem, Sparkles, UserCheck, DollarSign,
  MapPin, Phone, Mail, ChevronRight, Award
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  const images = [
    { src: "https://img.magicpin.com/8087355_cover_0.jpg", alt: "Brand Station shop front" },
    { src: "https://img.magicpin.com/8087355_store_images_7.jpg", alt: "Men's apparel display" },
    { src: "https://img.magicpin.com/8087355_store_images_1.jpg", alt: "Collection of kurtas" },
    { src: "https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-2pfyvuke65.jpg", alt: "Kurta pajama collection" },
    { src: "https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-ffw0rd4stq.jpg", alt: "Brand Station clothing range" }
  ];

  const features = [
    { icon: Shirt, title: "Premium Men's Apparel", desc: "Curated collection of quality garments that stand the test of time." },
    { icon: Sparkles, title: "Fashion-forward & Classic Styles", desc: "From runway trends to timeless classics, find your perfect look." },
    { icon: Gem, title: "Excellent Fabric Quality", desc: "Handpicked materials that feel luxurious and last longer." },
    { icon: UserCheck, title: "Personalized Styling Advice", desc: "Gagan Sir and team offer tailored suggestions for every occasion." },
    { icon: DollarSign, title: "Value for Money Collections", desc: "Premium styles at prices that make sense, without compromise." }
  ];

  const reviews = [
    { stars: 5, time: "7 months ago", text: "Great place to shop premium quality in a good price, shopping since 7-8 years. Fully satisfied with the quality. Gagan sir is a great consultant and owner himself, make sure to consult and take suggestions before buying. Cheers to the Polite salesperson salman bhai.", author: "Loyal Shopper" },
    { stars: 5, time: "6 months ago", text: "I've had a great experience doing my shopping at BRAND STATION! The amount of styles — ranging from fashion-forward outfits to classic designs — is remarkable. The quality of the fabrics is excellent, and the prices are fair considering what you receive. The staff are friendly and never fail to assist with recommendations, fittings, and styling advice. The shop is spotlessly clean, well-arranged, and a pleasure to shop. Whether you're picking up something for a regular day or a special event, this store never fails. Strongly recommend to anyone who wants quality fashion and a welcoming shopping experience! Thanks", author: "Delighted Customer" },
    { stars: 5, time: "a month ago", text: "Sardaar ji is very friendly. Items are value for money. All the items are hand picked.", author: "Happy Buyer" },
    { stars: 5, time: "6 months ago", text: "I’m very satisfied with the clothes. The material quality is outstanding and it delivers exactly as promised. Packaging and overall presentation were also good 👍", author: "Satisfied Client" },
    { stars: 5, time: "5 months ago", text: "Collection is very unique and price is so affordable another thing which is more important Quality is next level. If you're looking for genuine products, You must visit here.", author: "Impressed Guest" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" as const }
  } as const;

  const stagger = (delay: number) => ({
    ...fadeInUp,
    transition: { ...fadeInUp.transition, delay }
  });

  return (
    <div className="min-h-screen bg-[#F5F1EB] font-sans text-[#1E1E1E]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A2B3C] shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-2 text-white font-serif text-2xl font-bold tracking-tight">
              <span className="text-[#C89B3C]">Brand</span>
              <span>Station</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {["Home", "Services", "Gallery", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#E4DDD4] hover:text-white font-medium text-sm uppercase tracking-wide transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <a
                href="tel:09910309313"
                className="inline-flex items-center px-5 py-2.5 bg-[#C89B3C] text-white rounded-md text-sm font-semibold hover:bg-[#DBA94D] transition-all duration-200 shadow-md"
              >
                <Phone size={16} className="mr-2" />
                099103 09313
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white rounded-md hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-[#1A2B3C] border-t border-white/10"
            >
              <div className="max-w-screen-xl mx-auto px-4 py-4 space-y-2">
                {["Home", "Services", "Gallery", "Testimonials", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-[#E4DDD4] hover:text-white font-medium text-base"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="tel:09910309313"
                  className="inline-flex items-center px-4 py-2.5 mt-2 bg-[#C89B3C] text-white rounded-md text-sm font-semibold w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone size={16} className="mr-2" />
                  099103 09313
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed nav */}
      <div className="h-16 lg:h-20" />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images[0].src}
            alt="Brand Station hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#1A2B3C]/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Award size={14} className="text-[#C89B3C] mr-2" />
              <span className="text-white/90 text-sm font-medium">4.6 ★ · 186 Reviews</span>
            </div>
          </motion.div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Brand <span className="text-[#C89B3C]">Station</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-light mb-8">
            Shahdara&apos;s Destination for Premium Men&apos;s Fashion: Quality Styles, Unbeatable Value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:09910309313"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C89B3C] text-white rounded-md font-semibold text-base shadow-lg hover:bg-[#DBA94D] transition-all duration-300"
            >
              <Phone size={18} className="mr-2" />
              Call Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white rounded-md font-semibold text-base hover:bg-white/10 transition-all duration-300"
            >
              Explore Styles
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="text-[#C89B3C] font-semibold tracking-widest uppercase text-sm">What We Offer</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2B3C] mt-2">
              The Brand Station Promise
            </h2>
            <p className="text-[#6B6258] mt-4 max-w-2xl mx-auto text-lg">
              Every detail curated with care — from fabric to fit, we deliver the complete package.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                {...stagger(idx * 0.1)}
                whileHover={{ y: -5 }}
                className="bg-[#F5F1EB] rounded-lg p-6 lg:p-8 shadow-sm border border-[#E4DDD4] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-md bg-[#1A2B3C] text-white flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1A2B3C] mb-2">{title}</h3>
                <p className="text-[#6B6258] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 lg:py-24 bg-[#F5F1EB]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="text-[#C89B3C] font-semibold tracking-widest uppercase text-sm">Our Collection</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2B3C] mt-2">
              A Glimpse Inside the Store
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={img.src}
                {...stagger(idx * 0.1)}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-[#E4DDD4] bg-white"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
          <motion.p
            {...fadeInUp}
            className="text-center text-[#6B6258] mt-8 text-lg italic"
          >
            Handpicked styles, ready for your touch.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="text-[#C89B3C] font-semibold tracking-widest uppercase text-sm">Customer Love</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2B3C] mt-2">
              What Our Community Says
            </h2>
            <p className="text-[#6B6258] mt-4 max-w-2xl mx-auto">
              Real experiences from Shahdara&apos;s most stylish men.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {reviews.map(({ text, stars, time, author }, idx) => (
              <motion.blockquote
                key={idx}
                {...stagger(idx * 0.1)}
                className="bg-[#F5F1EB] rounded-lg p-6 lg:p-8 border-l-4 border-[#C89B3C] relative"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < stars ? "text-[#C89B3C] fill-current" : "text-[#D4CCC2]"}
                    />
                  ))}
                  <span className="ml-3 text-sm text-[#6B6258] font-medium">{time}</span>
                </div>
                <p className="italic text-[#1E1E1E] leading-relaxed mb-4 text-base lg:text-lg">
                  &ldquo;{text}&rdquo;
                </p>
                <footer className="text-sm font-semibold text-[#1A2B3C] uppercase tracking-wide">
                  — {author}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="py-16 lg:py-24 bg-[#1A2B3C] text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="text-[#C89B3C] font-semibold tracking-widest uppercase text-sm">Visit Us</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
              We&apos;d Love to Style You
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Address */}
            <motion.div
              {...stagger(0.1)}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#C89B3C]">
                <MapPin size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold">Address</h3>
              <p className="text-[#D4CCC2] text-sm leading-relaxed">
                Brand Station, 1/7037,<br />
                Shivaji Park, Shahdara,<br />
                Delhi, 110032, India
              </p>
              <a
                href="https://maps.google.com/?q=Brand+Station+Shahdara+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#C89B3C] hover:underline text-sm font-medium mt-2"
              >
                <ChevronRight size={14} className="mr-1" />
                Open in Maps
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              {...stagger(0.2)}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#C89B3C]">
                <Phone size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold">Call Us</h3>
              <a
                href="tel:09910309313"
                className="text-[#D4CCC2] text-sm hover:text-white transition-colors"
              >
                099103 09313
              </a>
              <p className="text-[#D4CCC2] text-xs">Gagan Sir — Owner & Consultant</p>
            </motion.div>

            {/* Rating */}
            <motion.div
              {...stagger(0.3)}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#C89B3C]">
                <Award size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold">Reputation</h3>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#C89B3C] fill-current" />
                ))}
              </div>
              <p className="text-[#D4CCC2] text-sm font-medium">
                4.6 · 186 reviews
              </p>
            </motion.div>
          </div>

          <hr className="my-12 border-[#2C4052]" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#D4CCC2]">
            <p>&copy; {new Date().getFullYear()} Brand Station. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center">
              <span className="mr-1">📍</span> Proudly serving Shahdara since over a decade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}