'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Quote,
  ShoppingBag,
  Award,
  ShieldCheck,
  Users,
} from 'lucide-react';

const BrandStation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Products', 'Testimonials', 'Contact'];

  const services = [
    {
      icon: ShoppingBag,
      title: 'Premium Men’s Apparel',
      description: 'Fashion-forward & classic styles for every occasion.',
    },
    {
      icon: Award,
      title: 'Excellent Fabric Quality',
      description: 'Handpicked materials that last and feel great.',
    },
    {
      icon: Users,
      title: 'Personalized Styling',
      description: 'Expert advice from Gagan sir and Salman bhai.',
    },
    {
      icon: ShieldCheck,
      title: 'Value for Money',
      description: 'Unbeatable quality at fair prices.',
    },
  ];

  const testimonials = [
    {
      name: 'Customer',
      rating: 5,
      time: '7 months ago',
      text: 'Great place to shop premium quality in a good price, shopping since 7-8 years. Fully satisfied with the quality. Gagan sir is a great consultant and owner himself, make sure to consult and take suggestions before buying. Cheers to the Polite salesperson salman bhai.',
    },
    {
      name: 'Customer',
      rating: 5,
      time: '6 months ago',
      text: 'I\'ve had a great experience doing my shopping at BRAND STATION! The amount of styles — ranging from fashion-forward outfits to classic designs — is remarkable. The quality of the fabrics is excellent, and the prices are fair considering what you receive. The staff are friendly and never fail to assist with recommendations, fittings, and styling advice. The shop is spotlessly clean, well-arranged, and a pleasure to shop. Whether you\'re picking up something for a regular day or a special event, this store never fails. Strongly recommend to anyone who wants quality fashion and a welcoming shopping experience! Thanks',
    },
    {
      name: 'Customer',
      rating: 5,
      time: 'a month ago',
      text: 'Sardaar ji is very friendly. Items are value for money. All the items are hand picked.',
    },
    {
      name: 'Customer',
      rating: 5,
      time: '6 months ago',
      text: 'I’m very satisfied with the clothes. The material quality is outstanding and it delivers exactly as promised. Packaging and overall presentation were also good 👍',
    },
    {
      name: 'Customer',
      rating: 5,
      time: '5 months ago',
      text: 'Collection is very unique and price is so affordable another thing which is more important Quality is next level. If you\'re looking for genuine products, You must visit here.',
    },
  ];

  const galleryImages = [
    {
      src: 'https://img.magicpin.com/8087355_cover_0.jpg',
      alt: 'Brand Station storefront',
    },
    {
      src: 'https://img.magicpin.com/8087355_store_images_7.jpg',
      alt: 'Product display inside store',
    },
    {
      src: 'https://img.magicpin.com/8087355_store_images_1.jpg',
      alt: 'Clothing rack with men’s fashion',
    },
    {
      src: 'https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-2pfyvuke65.jpg',
      alt: 'Kurta pyjama collection',
    },
    {
      src: 'https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-ffw0rd4stq.jpg',
      alt: 'Another view of men’s wear',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB] font-['Inter'] text-[#1E1E1E]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#1A2B3C] shadow-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-['Playfair_Display'] text-2xl font-bold text-[#C89B3C]">
                Brand
              </span>
              <span className="font-['Playfair_Display'] text-2xl font-bold text-white">
                {' '}Station
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center space-x-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-[#E4DDD4] transition-colors hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#E4DDD4] transition-colors hover:text-white md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-[#1A2B3C] md:hidden"
            >
              <div className="space-y-1 px-4 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-[#E4DDD4] transition-colors hover:bg-[#243E52] hover:text-white"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-[#1A2B3C]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h1
                variants={fadeInUp}
                className="font-['Playfair_Display'] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                Shahdara's Destination for{' '}
                <span className="text-[#C89B3C]">Premium Men's Fashion</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#E4DDD4] sm:text-xl"
              >
                Quality Styles, Unbeatable Value.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  href="#products"
                  className="inline-flex items-center rounded-md bg-[#C89B3C] px-6 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-[#DBA94D] hover:shadow-lg"
                >
                  Explore Collection
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#1A2B3C]"
                >
                  Visit Us
                </Link>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 text-[#E4DDD4]"
              >
                <div className="flex items-center gap-1 text-[#C89B3C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.6 (186 reviews)</span>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src="https://img.magicpin.com/8087355_cover_0.jpg"
                alt="Brand Station storefront"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F5F1EB] to-transparent" />
      </section>

      {/* About / Services */}
      <section id="about" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Playfair_Display'] text-3xl font-bold text-[#1A2B3C] sm:text-4xl lg:text-5xl"
            >
              Why Choose Brand Station
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-2xl text-lg text-[#6B6258]"
            >
              A trusted name in Shahdara for over 8 years — premium fashion without the premium price.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-lg bg-white p-6 shadow-[0_2px_8px_rgba(26,43,60,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,43,60,0.1)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#1A2B3C]/10 text-[#1A2B3C]">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1A2B3C]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[#6B6258]">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery / Products */}
      <section id="products" className="bg-[#FFFFFF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Playfair_Display'] text-3xl font-bold text-[#1A2B3C] sm:text-4xl lg:text-5xl"
            >
              Our Collection
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-2xl text-lg text-[#6B6258]"
            >
              From everyday staples to special occasion wear — each piece handpicked for you.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-[#F5F1EB] shadow-[0_2px_8px_rgba(26,43,60,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,43,60,0.1)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-block rounded bg-[#C89B3C] px-3 py-1 text-xs font-semibold uppercase text-white">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Playfair_Display'] text-3xl font-bold text-[#1A2B3C] sm:text-4xl lg:text-5xl"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-2xl text-lg text-[#6B6258]"
            >
              Real reviews from loyal shoppers in Shahdara and beyond.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative rounded-lg bg-white p-6 shadow-[0_2px_8px_rgba(26,43,60,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,43,60,0.1)]"
              >
                <Quote className="absolute right-4 top-4 h-8 w-8 text-[#C89B3C]/20" />
                <div className="flex items-center gap-1 text-[#C89B3C]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#1E1E1E] italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-[#6B6258]">
                  <span className="font-semibold">— {testimonial.name}</span>
                  <span>{testimonial.time}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-[#1A2B3C]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Info */}
            <div className="space-y-4">
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white">
                <span className="text-[#C89B3C]">Brand</span> Station
              </h3>
              <p className="text-sm text-[#D4CCC2]">
                Shahdara's destination for premium men's fashion. Quality styles, unbeatable value.
              </p>
              <div className="flex items-center gap-2 text-[#D4CCC2]">
                <Star className="h-5 w-5 fill-[#C89B3C] text-[#C89B3C]" />
                <span className="text-sm">4.6 (186 reviews)</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-[#D4CCC2]">
                <li>
                  <Link href="#home" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="transition-colors hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="transition-colors hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="transition-colors hover:text-white">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-[#D4CCC2]">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C89B3C]" />
                  <span>
                    1/7037, Shivaji Park, Shahdara, Delhi, 110032, India
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#C89B3C]" />
                  <a href="tel:09910309313" className="transition-colors hover:text-white">
                    099103 09313
                  </a>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Hours
              </h4>
              <ul className="space-y-2 text-sm text-[#D4CCC2]">
                <li>Mon – Sat: 10:00 AM – 8:00 PM</li>
                <li>Sunday: 11:00 AM – 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-[#2C4052] pt-8 text-center text-xs text-[#6B6258]">
            &copy; {new Date().getFullYear()} Brand Station. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrandStation;