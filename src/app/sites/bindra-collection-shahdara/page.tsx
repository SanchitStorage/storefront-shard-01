"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  MapPin,
  Phone,
  ShoppingBag,
  Shirt,
  Baby,
  Crown,
  Users,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, ease: 'easeOut' },
  } as const;

  const services = [
    {
      icon: ShoppingBag,
      title: 'Women\'s Fashion Apparel',
      desc: 'Chic designer suits, sarees and fusion wear for the modern woman.',
    },
    {
      icon: Baby,
      title: 'Kids\' Ethnic & Western Wear',
      desc: 'Adorable lehengas, kurta sets and casuals for little trendsetters.',
    },
    {
      icon: Shirt,
      title: 'Men\'s Traditional Kurtas',
      desc: 'Elegant kurta-pyjama sets for festivals and everyday grace.',
    },
    {
      icon: Crown,
      title: 'Designer Suit Collections',
      desc: 'Exclusive embroidered and printed suits crafted with premium fabrics.',
    },
    {
      icon: Users,
      title: 'Family Clothing Solutions',
      desc: 'Coordinated outfits for the whole family under one trusted roof.',
    },
  ];

  const testimonials = [
    {
      stars: 5,
      text: 'Quality aur style dono ek number — highly recommended store 👍',
      date: 'a month ago',
    },
    {
      stars: 2,
      text: 'Limited collection and very costly. Moreover the behaviour of owner is rude and arrogant.',
      date: '6 months ago',
    },
    {
      stars: 4,
      text: 'Collection and variety of dresses of kids is extremely amazing. However, dresses for men have comparatively less variety over here. Staff is friendly and attentive. The trial room space can be increased if possible to make it more convenient.',
      date: '4 years ago',
    },
    {
      stars: 4,
      text: 'Good shop to purchase cloths for every age at good price. You may find many varieties and fabrics here. Staff is also cooperative. I visited here to purchase kurta for my father at Diwali. The sales person served me about 20 to 25 Choices to select from. All are very Good. You may also purchase cloths for kids also.',
      date: '4 years ago',
    },
    {
      stars: 5,
      text: 'Best suit collection and one of the oldest shop in shadra very nice and good behavior owner is polite',
      date: '11 months ago',
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          background-color: #FEF9F2;
          color: #2B2B2B;
          margin: 0;
        }
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#FEF9F2]/90 backdrop-blur-md border-b border-[#F0E8DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-[#D34E3A] tracking-tight">
              Bindra Collection
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#2B2B2B]">
            <a href="#services" className="hover:text-[#D34E3A] transition-colors">Specialties</a>
            <a href="#gallery" className="hover:text-[#D34E3A] transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-[#D34E3A] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#D34E3A] transition-colors">Contact</a>
          </nav>

          {/* Phone & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:09871110226"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#0E5E5A] hover:text-[#D34E3A] transition-colors"
            >
              <Phone className="h-4 w-4" /> 098711 10226
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2B2B2B] hover:text-[#D34E3A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#F0E8DF] px-4 pb-4 pt-2 space-y-3 text-sm font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#D34E3A]"
            >
              Specialties
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#D34E3A]"
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#D34E3A]"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#D34E3A]"
            >
              Contact
            </a>
            <a
              href="tel:09871110226"
              className="flex items-center gap-2 py-2 text-[#0E5E5A] font-semibold"
            >
              <Phone className="h-4 w-4" /> 098711 10226
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/Mx46u6iQ2wID7oLEzWXYhim8-tvc1d_rQD2CgUplUOvSx-jdBGcdSLtsL9pxmkoGo64V6ncpb7VMACQJqe4pwt4aGQ0=w1600-rw"
            alt="Bindra Collection store interior"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Warm gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/70 via-[#2B2B2B]/30 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 text-center px-4 max-w-3xl"
          >
            <span className="inline-block bg-[#F4B41A]/90 text-[#2B2B2B] text-sm font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
              ⭐ 4.1 (170 reviews)
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Bindra Collection
            </h1>
            <p className="font-heading text-xl sm:text-2xl text-white/90 mt-4 max-w-xl mx-auto drop-shadow">
              Timeless Style & Quality Fashion for the Whole Family
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <a
                href="#services"
                className="inline-block bg-[#D34E3A] text-white font-semibold uppercase tracking-wider text-sm py-4 px-8 rounded-full shadow-lg shadow-[#D34E3A]/30 hover:bg-[#B83E2D] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Collection
              </a>
              <a
                href="https://maps.google.com/?q=Bindra+Collection+500,+छोटा+बाजार,+Telibara,+Shahdara,+Delhi,+110032"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white font-semibold uppercase tracking-wider text-sm py-4 px-8 rounded-full hover:bg-white hover:text-[#0E5E5A] transition-all duration-300"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </section>

        {/* Services / Specialties */}
        <section id="services" className="py-20 lg:py-28 bg-[#FEF9F2]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#0E5E5A]">
                Our Specialties
              </h2>
              <p className="mt-4 text-[#5A5A5A] max-w-2xl mx-auto">
                From festive lehengas to sharp kurtas – we dress every member of your family with
                care and style.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-[#F0E8DF] rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F0E8DF] flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#D34E3A]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#2B2B2B] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20 lg:py-28 bg-[#F0E8DF]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#2B2B2B]">
                Explore Our Collection
              </h2>
              <p className="mt-4 text-[#5A5A5A]">
                A glimpse of the fabrics, colours and craftsmanship waiting for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'https://images.jdmagicbox.com/v2/comp/delhi/58/011p288658/catalogue/bindra-collection-shahdara-delhi-readymade-garment-retailers-3hncbqk.jpg',
                'https://images.jdmagicbox.com/v2/comp/delhi/58/011p288658/catalogue/bindra-collection-shahdara-delhi-women-readymade-garment-retailers-tp8S7yDLxS.jpg',
                'https://images.jdmagicbox.com/v2/comp/delhi/58/011p288658/catalogue/bindra-collection-shahdara-delhi-women-readymade-garment-retailers-lZ92jfJhtL.jpg',
              ].map((src, idx) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#F0E8DF] shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <Image
                    src={src}
                    alt={`Bindra Collection gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 lg:py-28 bg-[#FEF9F2]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#0E5E5A]">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-[#5A5A5A]">
                Real stories from the families we’ve helped dress.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#F0E8DF] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < item.stars ? 'text-[#F4B41A] fill-[#F4B41A]' : 'text-[#D6CBBF]'
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="font-heading italic text-[#2B2B2B] text-base leading-relaxed mb-4">
                    &ldquo;{item.text}&rdquo;
                  </blockquote>

                  <div className="text-sm text-[#5A5A5A] font-medium">
                    Customer <span aria-hidden="true">·</span> {item.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Visit Us */}
        <section id="contact" className="py-20 lg:py-28 bg-[#0E5E5A] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
                  Visit Us
                </h2>
                <p className="text-white/80 text-lg">
                  Come experience our collections in person – we’re right in the heart of Shahdara.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-[#F4B41A] mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-white/80">
                        500, छोटा बाजार, Telibara, Shahdara, Delhi, 110032
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-[#F4B41A] mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <a
                        href="tel:09871110226"
                        className="text-white/80 hover:text-[#F4B41A] transition-colors"
                      >
                        098711 10226
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                    <Star className="h-5 w-5 text-[#F4B41A] fill-[#F4B41A]" />
                    <span className="font-medium">4.1</span>
                    <span className="text-white/70 text-sm">(170 reviews)</span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Bindra+Collection+500,+छोटा+बाजार,+Telibara,+Shahdara,+Delhi,+110032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D34E3A] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#B83E2D] transition-all duration-300 mt-4"
                >
                  Open in Maps <ChevronRight className="h-5 w-5" />
                </a>
              </motion.div>

              {/* Map Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl"
              >
                <Image
                  src="https://5.imimg.com/data5/EB/IA/KS/NSDMERP-9340230/9340230-location-1547038019612-1000x1000.jpg"
                  alt="Bindra Collection location map"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2B2B2B] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-[#FEF9F2]/60 text-sm">
          <p>© {new Date().getFullYear()} Bindra Collection. All rights reserved.</p>
          <p className="mt-2 text-xs">Timeless style for the whole family — since decades.</p>
        </div>
      </footer>
    </>
  );
}